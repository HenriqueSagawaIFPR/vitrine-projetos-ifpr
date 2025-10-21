"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  onRatingChange?: (rating: number) => void
  interactive?: boolean
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  className?: string
}

export function StarRating({ 
  rating, 
  onRatingChange, 
  interactive = false, 
  size = "md",
  showValue = false,
  className 
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)
  
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  }
  
  const handleClick = (newRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(newRating)
    }
  }
  
  const handleMouseEnter = (newRating: number) => {
    if (interactive) {
      setHoverRating(newRating)
    }
  }
  
  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0)
    }
  }
  
  const displayRating = hoverRating || rating
  
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            disabled={!interactive}
            className={cn(
              "transition-colors duration-150",
              interactive && "hover:scale-110 cursor-pointer",
              !interactive && "cursor-default"
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                star <= displayRating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300 fill-gray-300"
              )}
            />
          </button>
        ))}
      </div>
      {showValue && (
        <span className="ml-2 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

interface RatingStatsProps {
  stats: {
    averageRating: number
    totalComments: number
    ratingDistribution: {
      5: number
      4: number
      3: number
      2: number
      1: number
    }
  }
  className?: string
}

export function RatingStats({ stats, className }: RatingStatsProps) {
  const { averageRating, totalComments, ratingDistribution } = stats
  
  return (
    <div className={cn("space-y-4", className)}>
      {/* Rating Summary */}
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">{averageRating.toFixed(1)}</div>
          <StarRating rating={averageRating} size="lg" />
          <div className="text-sm text-muted-foreground mt-1">
            {totalComments} {totalComments === 1 ? 'avaliação' : 'avaliações'}
          </div>
        </div>
      </div>
      
      {/* Rating Distribution */}
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = ratingDistribution[star as keyof typeof ratingDistribution]
          const percentage = totalComments > 0 ? (count / totalComments) * 100 : 0
          
          return (
            <div key={star} className="flex items-center gap-2">
              <span className="text-sm font-medium w-4">{star}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-8 text-right">
                {count}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
