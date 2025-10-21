import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  doc, 
  updateDoc, 
  deleteDoc,
  Timestamp 
} from 'firebase/firestore'
import { db } from './firebase'
import type { Comment, CommentFormData, ProjectStats } from '@/types/comments'

const COMMENTS_COLLECTION = 'comments'

export async function addComment(projectId: string, commentData: CommentFormData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, COMMENTS_COLLECTION), {
      projectId,
      authorName: commentData.authorName.trim(),
      authorEmail: commentData.authorEmail.trim().toLowerCase(),
      content: commentData.content.trim(),
      rating: Math.max(1, Math.min(5, commentData.rating)), // Garantir que está entre 1 e 5
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      isApproved: true // Comentários são publicados imediatamente
    })
    
    return docRef.id
  } catch (error) {
    console.error('Erro ao adicionar comentário:', error)
    throw new Error('Falha ao adicionar comentário')
  }
}

export async function getProjectComments(projectId: string): Promise<Comment[]> {
  try {
    const q = query(
      collection(db, COMMENTS_COLLECTION),
      where('projectId', '==', projectId),
      where('isApproved', '==', true),
      orderBy('createdAt', 'desc')
    )
    
    const querySnapshot = await getDocs(q)
    const comments: Comment[] = []
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      comments.push({
        id: doc.id,
        projectId: data.projectId,
        authorName: data.authorName,
        authorEmail: data.authorEmail,
        content: data.content,
        rating: data.rating,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
        isApproved: data.isApproved
      })
    })
    
    return comments
  } catch (error) {
    console.error('Erro ao buscar comentários:', error)
    throw new Error('Falha ao carregar comentários')
  }
}

export async function getProjectStats(projectId: string): Promise<ProjectStats> {
  try {
    const q = query(
      collection(db, COMMENTS_COLLECTION),
      where('projectId', '==', projectId),
      where('isApproved', '==', true)
    )
    
    const querySnapshot = await getDocs(q)
    const comments: Comment[] = []
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      comments.push({
        id: doc.id,
        projectId: data.projectId,
        authorName: data.authorName,
        authorEmail: data.authorEmail,
        content: data.content,
        rating: data.rating,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
        isApproved: data.isApproved
      })
    })
    
    // Calcular estatísticas
    const totalComments = comments.length
    const averageRating = totalComments > 0 
      ? comments.reduce((sum, comment) => sum + comment.rating, 0) / totalComments 
      : 0
    
    const ratingDistribution = {
      5: comments.filter(c => c.rating === 5).length,
      4: comments.filter(c => c.rating === 4).length,
      3: comments.filter(c => c.rating === 3).length,
      2: comments.filter(c => c.rating === 2).length,
      1: comments.filter(c => c.rating === 1).length,
    }
    
    return {
      averageRating: Math.round(averageRating * 10) / 10, // Arredondar para 1 casa decimal
      totalComments,
      ratingDistribution
    }
  } catch (error) {
    console.error('Erro ao calcular estatísticas:', error)
    return {
      averageRating: 0,
      totalComments: 0,
      ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    }
  }
}

export async function updateComment(commentId: string, commentData: Partial<CommentFormData>): Promise<void> {
  try {
    const commentRef = doc(db, COMMENTS_COLLECTION, commentId)
    const updateData: any = {
      updatedAt: Timestamp.now()
    }
    
    if (commentData.authorName) updateData.authorName = commentData.authorName.trim()
    if (commentData.authorEmail) updateData.authorEmail = commentData.authorEmail.trim().toLowerCase()
    if (commentData.content) updateData.content = commentData.content.trim()
    if (commentData.rating !== undefined) {
      updateData.rating = Math.max(1, Math.min(5, commentData.rating))
    }
    
    await updateDoc(commentRef, updateData)
  } catch (error) {
    console.error('Erro ao atualizar comentário:', error)
    throw new Error('Falha ao atualizar comentário')
  }
}

export async function deleteComment(commentId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, COMMENTS_COLLECTION, commentId))
  } catch (error) {
    console.error('Erro ao deletar comentário:', error)
    throw new Error('Falha ao deletar comentário')
  }
}

