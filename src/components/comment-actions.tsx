"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { Edit, Trash2, Save, X } from "lucide-react"
import { updateComment, deleteComment } from "@/lib/comments"
import type { Comment, CommentFormData } from "@/types/comments"

interface CommentActionsProps {
  comment: Comment
  onUpdate: () => void
  onDelete: () => void
  userEmail?: string
}

export function CommentActions({ comment, onUpdate, onDelete, userEmail }: CommentActionsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<CommentFormData>({
    authorName: comment.authorName,
    authorEmail: comment.authorEmail,
    content: comment.content,
    rating: comment.rating
  })
  const [saving, setSaving] = useState(false)

  // Verificar se o usuário pode editar este comentário
  const canEdit = userEmail === comment.authorEmail

  if (!canEdit) {
    return null
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      await updateComment(comment.id, editData)
      onUpdate()
      setIsEditing(false)
    } catch (error) {
      console.error('Erro ao atualizar comentário:', error)
      alert('Erro ao atualizar comentário. Tente novamente.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Tem certeza que deseja excluir este comentário?')) {
      return
    }

    try {
      setSaving(true)
      await deleteComment(comment.id)
      onDelete()
    } catch (error) {
      console.error('Erro ao excluir comentário:', error)
      alert('Erro ao excluir comentário. Tente novamente.')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setEditData({
      authorName: comment.authorName,
      authorEmail: comment.authorEmail,
      content: comment.content,
      rating: comment.rating
    })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Avaliação
              </label>
              <StarRating
                rating={editData.rating}
                onRatingChange={(rating) => setEditData(prev => ({ ...prev, rating }))}
                interactive
                showValue
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Comentário
              </label>
              <textarea
                value={editData.content}
                onChange={(e) => setEditData(prev => ({ ...prev, content: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu comentário..."
              />
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={handleSave} 
                disabled={saving}
                size="sm"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Salvando..." : "Salvar"}
              </Button>
              <Button 
                onClick={handleCancel} 
                variant="outline" 
                disabled={saving}
                size="sm"
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex gap-2 mt-2">
      <Button 
        onClick={() => setIsEditing(true)} 
        variant="outline" 
        size="sm"
        disabled={saving}
      >
        <Edit className="w-4 h-4 mr-1" />
        Editar
      </Button>
      <Button 
        onClick={handleDelete} 
        variant="outline" 
        size="sm"
        disabled={saving}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Excluir
      </Button>
    </div>
  )
}
