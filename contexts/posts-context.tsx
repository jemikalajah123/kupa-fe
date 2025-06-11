"use client"

import { createContext, useContext } from "react"
import type { PostsContextType } from "@/types/post"

const PostsContext = createContext<PostsContextType | undefined>(undefined)

export const usePosts = () => {
  const context = useContext(PostsContext)
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider")
  }
  return context
}

export { PostsContext }
