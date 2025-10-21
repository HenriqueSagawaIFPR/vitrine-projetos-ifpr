"use client"

import { useState, useEffect } from "react"
import { StarRating } from "@/components/star-rating"
import { getProjectStats } from "@/lib/comments"
import type { ProjectStats } from "@/types/comments"

interface ProjectRatingProps {
  projectId: string
  className?: string
}

export function ProjectRating({ projectId, className }: ProjectRatingProps) {
  const [stats, setStats] = useState<ProjectStats>({
    averageRating: 0,
    totalComments: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const statsData = await getProjectStats(projectId)
        setStats(statsData)
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [projectId])

  if (loading) {
    return (
      <div className={className}>
        <div className="animate-pulse flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="w-8 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (stats.totalComments === 0) {
    return null
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <StarRating 
          rating={stats.averageRating} 
          size="sm" 
          showValue={false}
        />
        <span className="text-sm font-medium text-foreground">
          {stats.averageRating.toFixed(1)}
        </span>
        <span className="text-sm text-muted-foreground">
          ({stats.totalComments})
        </span>
      </div>
    </div>
  )
}
