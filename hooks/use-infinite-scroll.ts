"use client"

import { useEffect, useCallback } from "react"

interface UseInfiniteScrollProps {
  hasMore: boolean
  loading: boolean
  onLoadMore: () => void
  threshold?: number
}

export function useInfiniteScroll({ hasMore, loading, onLoadMore, threshold = 100 }: UseInfiniteScrollProps) {
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return

    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      onLoadMore()
    }
  }, [loading, hasMore, onLoadMore, threshold])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])
}
