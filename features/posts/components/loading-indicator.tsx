"use client"

import { Loader2 } from "lucide-react"
import { usePosts } from "@/contexts/posts-context"

export function LoadingIndicator() {
  const { loading, hasMore } = usePosts()

  if (!loading && !hasMore) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          You've reached the end!
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-200">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          Loading more posts...
        </div>
      </div>
    )
  }

  return null
}
