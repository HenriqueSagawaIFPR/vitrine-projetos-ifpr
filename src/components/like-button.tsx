"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { toggleLike, getProjectLikes } from "@/lib/like"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  projectId: string
  className?: string
}

export function LikeButton({ projectId, className }: LikeButtonProps) {
  const { user } = useAuth()
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProjectLikes(projectId, user?.uid).then(({ likes, isLiked }) => {
      setLikes(likes)
      setIsLiked(isLiked)
    })
  }, [projectId, user])

  const handleLike = async () => {
    if (!user || loading) return

    setLoading(true)
    try {
      const result = await toggleLike(projectId, user.uid)
      setLikes(result.likes)
      setIsLiked(result.isLiked)
    } catch (error) {
      console.error("Erro ao curtir projeto:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      disabled={loading}
      className={cn(
        "flex items-center gap-2 transition-colors",
        isLiked && "text-red-500 hover:text-red-600",
        className,
      )}
    >
      <Heart className={cn("w-4 h-4 transition-all", isLiked && "fill-current")} />
      <span className="text-sm font-medium">{likes}</span>
    </Button>
  )
}
