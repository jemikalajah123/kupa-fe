"use client"

import { PostCard } from "./post-card"
import { usePosts } from "@/contexts/posts-context"

export function PostsGrid() {
  const { filteredPosts } = usePosts()

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
          <div className="text-gray-400 text-2xl">📝</div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
