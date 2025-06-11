"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePosts } from "@/contexts/posts-context"

export function NestedConsumer() {
  const { posts, loading } = usePosts()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Nested Context Consumer</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This component is nested several levels deep and can still access the context data.
        </p>
        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-sm font-medium">
            Posts Count: <span className="font-bold">{posts.length}</span>
          </p>
          <p className="text-sm font-medium">
            Loading: <span className="font-bold">{loading ? "Yes" : "No"}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
