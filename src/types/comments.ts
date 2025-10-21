export interface Comment {
  id: string
  projectId: string
  authorName: string
  authorEmail: string
  content: string
  rating: number
  createdAt: Date
  updatedAt: Date
  isApproved: boolean
}

export interface CommentFormData {
  authorName: string
  authorEmail: string
  content: string
  rating: number
}

export interface CommentFormErrors {
  authorName?: string
  authorEmail?: string
  content?: string
  rating?: string
}

export interface ProjectStats {
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
