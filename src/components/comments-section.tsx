"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarRating, RatingStats } from "@/components/star-rating"
import { MessageSquare, User, Calendar, Mail } from "lucide-react"
import { addComment, getProjectComments, getProjectStats } from "@/lib/comments"
import { CommentActions } from "@/components/comment-actions"
import type { Comment, CommentFormData, CommentFormErrors, ProjectStats } from "@/types/comments"

interface CommentsSectionProps {
  projectId: string
  className?: string
}

export function CommentsSection({ projectId, className }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [stats, setStats] = useState<ProjectStats>({
    averageRating: 0,
    totalComments: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  })
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<CommentFormData>({
    authorName: "",
    authorEmail: "",
    content: "",
    rating: 5
  })
  const [formErrors, setFormErrors] = useState<CommentFormErrors>({})
  const [userEmail, setUserEmail] = useState<string>("")

  // Carregar comentários e estatísticas
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [commentsData, statsData] = await Promise.all([
          getProjectComments(projectId),
          getProjectStats(projectId)
        ])
        setComments(commentsData)
        setStats(statsData)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [projectId])

  // Validar formulário
  const validateForm = (): boolean => {
    const errors: CommentFormErrors = {}
    
    if (!formData.authorName.trim()) {
      errors.authorName = "Nome é obrigatório"
    }
    
    if (!formData.authorEmail.trim()) {
      errors.authorEmail = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.authorEmail)) {
      errors.authorEmail = "Email inválido"
    }
    
    if (!formData.content.trim()) {
      errors.content = "Comentário é obrigatório"
    } else if (formData.content.trim().length < 10) {
      errors.content = "Comentário deve ter pelo menos 10 caracteres"
    }
    
    if (formData.rating < 1 || formData.rating > 5) {
      errors.rating = "Avaliação deve ser entre 1 e 5 estrelas"
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Recarregar dados
  const reloadData = async () => {
    try {
      const [commentsData, statsData] = await Promise.all([
        getProjectComments(projectId),
        getProjectStats(projectId)
      ])
      setComments(commentsData)
      setStats(statsData)
    } catch (error) {
      console.error('Erro ao recarregar dados:', error)
    }
  }

  // Enviar comentário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    try {
      setSubmitting(true)
      await addComment(projectId, formData)
      
      // Salvar email do usuário para permitir edição
      setUserEmail(formData.authorEmail)
      
      // Recarregar dados
      await reloadData()
      
      // Resetar formulário
      setFormData({
        authorName: "",
        authorEmail: "",
        content: "",
        rating: 5
      })
      setShowForm(false)
      setFormErrors({})
      
      alert("Comentário enviado com sucesso! Obrigado pela sua avaliação.")
    } catch (error) {
      console.error('Erro ao enviar comentário:', error)
      alert("Erro ao enviar comentário. Tente novamente.")
    } finally {
      setSubmitting(false)
    }
  }

  // Formatar data
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  if (loading) {
    return (
      <div className={className}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">
              Avaliações e Comentários
            </h2>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancelar" : "Avaliar Projeto"}
          </Button>
        </div>

        {/* Estatísticas */}
        <Card>
          <CardContent className="p-6">
            <RatingStats stats={stats} />
          </CardContent>
        </Card>

        {/* Formulário de Comentário */}
        {showForm && (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Deixe sua avaliação</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      value={formData.authorName}
                      onChange={(e) => setFormData(prev => ({ ...prev, authorName: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome"
                    />
                    {formErrors.authorName && (
                      <p className="text-sm text-red-500 mt-1">{formErrors.authorName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.authorEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, authorEmail: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                    />
                    {formErrors.authorEmail && (
                      <p className="text-sm text-red-500 mt-1">{formErrors.authorEmail}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Avaliação *
                  </label>
                  <StarRating
                    rating={formData.rating}
                    onRatingChange={(rating) => setFormData(prev => ({ ...prev, rating }))}
                    interactive
                    showValue
                  />
                  {formErrors.rating && (
                    <p className="text-sm text-red-500 mt-1">{formErrors.rating}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Comentário *
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Conte-nos sua experiência com este projeto..."
                  />
                  {formErrors.content && (
                    <p className="text-sm text-red-500 mt-1">{formErrors.content}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={submitting}>
                    {submitting ? "Enviando..." : "Enviar Avaliação"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Lista de Comentários */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Ainda não há comentários para este projeto. Seja o primeiro a avaliar!
                </p>
              </CardContent>
            </Card>
          ) : (
            comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{comment.authorName}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(comment.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <StarRating rating={comment.rating} size="sm" />
                  </div>
                  
                  <p className="text-foreground leading-relaxed">{comment.content}</p>
                  
                  {/* Ações do comentário */}
                  <CommentActions
                    comment={comment}
                    onUpdate={reloadData}
                    onDelete={reloadData}
                    userEmail={userEmail}
                  />
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
