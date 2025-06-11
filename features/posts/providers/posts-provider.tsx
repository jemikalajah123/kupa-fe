"use client"

import { useState, useCallback, useMemo, type ReactNode } from "react"
import { PostsContext } from "@/contexts/posts-context"
import { filterPosts, paginatePosts } from "@/lib/post-filters"
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll"
import type { Post } from "@/types/post"

interface PostsProviderProps {
  children: ReactNode
  initialPosts: Post[]
}

const ITEMS_PER_PAGE = 10

export function PostsProvider({ children, initialPosts }: PostsProviderProps) {
  const [posts] = useState<Post[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Filter posts based on search and user selection
  const filteredPosts = useMemo(() => {
    return filterPosts(posts, { searchQuery, userId: selectedUserId })
  }, [posts, searchQuery, selectedUserId])

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    return paginatePosts(filteredPosts, currentPage, ITEMS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const hasMore = paginatedPosts.length < filteredPosts.length

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [loading, hasMore])

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // In a real app, you would fetch new data here
      setCurrentPage(1) // Reset pagination
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [])

  // Reset pagination when filters change
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }, [])

  const handleUserChange = useCallback((userId: number | null) => {
    setSelectedUserId(userId)
    setCurrentPage(1)
  }, [])

  useInfiniteScroll({
    hasMore,
    loading,
    onLoadMore: loadMore,
    threshold: 200,
  })

  const value = {
    posts,
    filteredPosts: paginatedPosts,
    loading,
    error,
    hasMore,
    searchQuery,
    selectedUserId,
    setSearchQuery: handleSearchChange,
    setSelectedUserId: handleUserChange,
    loadMore,
    refetch,
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
