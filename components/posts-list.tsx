"use client"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, RefreshCw } from "lucide-react"
import { usePosts } from "@/contexts/posts-context"
import { PostCard } from "./post-card"

export function PostsList() {
  const { posts, loading, error, refetch } = usePosts()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Posts</h2>
          <p className="text-muted-foreground">Data fetched on the server and managed via React Context</p>
        </div>
        <Button onClick={refetch} disabled={loading} variant="outline" size="sm">
          {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
          {loading ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>Error loading posts: {error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && !loading && !error && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No posts available</p>
        </div>
      )}
    </div>
  )
}
