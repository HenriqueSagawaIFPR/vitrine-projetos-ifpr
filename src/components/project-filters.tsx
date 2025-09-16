"use client"

import { Button } from "@/components/ui/button"
import { categories } from "@/data/projects"

interface ProjectFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
