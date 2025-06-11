"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw, Loader2 } from "lucide-react"
import { usePosts } from "@/contexts/posts-context"

export function PostsHeader() {
  const { filteredPosts, loading, refetch, searchQuery, selectedUserId } = usePosts()

  const getFilterDescription = () => {
    const parts = []
    if (searchQuery) parts.push(`"${searchQuery}"`)
    if (selectedUserId) parts.push(`User ${selectedUserId}`)
    return parts.length > 0 ? ` matching ${parts.join(" and ")}` : ""
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Posts Collection
        </h1>
        <p className="text-gray-600 mt-1">
          {filteredPosts.length} posts{getFilterDescription()} • Infinite scroll enabled
        </p>
      </div>
      <Button
        onClick={refetch}
        disabled={loading}
        variant="outline"
        className="border-gray-300 hover:border-blue-500 hover:text-blue-600"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
        {loading ? "Refreshing..." : "Refresh"}
      </Button>
    </div>
  )
}
