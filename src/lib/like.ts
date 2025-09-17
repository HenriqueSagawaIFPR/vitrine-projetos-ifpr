import { doc, updateDoc, increment, arrayUnion, arrayRemove, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

export async function toggleLike(projectId: string, userId: string) {
  const projectRef = doc(db, "projects", projectId)

  try {
    const projectDoc = await getDoc(projectRef)
    const projectData = projectDoc.data()

    if (!projectData) {
      // Se o projeto não existe no Firestore, cria com dados iniciais
      await setDoc(projectRef, {
        likes: 1,
        likedBy: [userId],
      })
      return { likes: 1, isLiked: true }
    }

    const likedBy = projectData.likedBy || []
    const isLiked = likedBy.includes(userId)

    if (isLiked) {
      // Remove curtida
      await updateDoc(projectRef, {
        likes: increment(-1),
        likedBy: arrayRemove(userId),
      })
      return { likes: (projectData.likes || 0) - 1, isLiked: false }
    } else {
      // Adiciona curtida
      await updateDoc(projectRef, {
        likes: increment(1),
        likedBy: arrayUnion(userId),
      })
      return { likes: (projectData.likes || 0) + 1, isLiked: true }
    }
  } catch (error) {
    console.error("Erro ao alternar curtida:", error)
    throw error
  }
}

export async function getProjectLikes(projectId: string, userId?: string) {
  try {
    const projectRef = doc(db, "projects", projectId)
    const projectDoc = await getDoc(projectRef)
    const projectData = projectDoc.data()

    if (!projectData) {
      return { likes: 0, isLiked: false }
    }

    const likedBy = projectData.likedBy || []
    const isLiked = userId ? likedBy.includes(userId) : false

    return { likes: projectData.likes || 0, isLiked }
  } catch (error) {
    console.error("Erro ao buscar curtidas:", error)
    return { likes: 0, isLiked: false }
  }
}
