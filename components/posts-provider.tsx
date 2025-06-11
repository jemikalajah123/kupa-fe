"use client"

import { useState, useCallback, type ReactNode } from "react"
import { PostsContext } from "@/contexts/posts-context"
import type { Post } from "@/types/post"

interface PostsProviderProps {
  children: ReactNode
  initialPosts: Post[]
}

export function PostsProvider({ children, initialPosts }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      if (!response.ok) {
        throw new Error("Failed to fetch posts")
      }
      const newPosts: Post[] = await response.json()
      setPosts(newPosts)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [])

  const value = {
    posts,
    loading,
    error,
    refetch,
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
