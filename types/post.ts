export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface PostsContextType {
  posts: Post[]
  filteredPosts: Post[]
  loading: boolean
  error: string | null
  hasMore: boolean
  searchQuery: string
  selectedUserId: number | null
  setSearchQuery: (query: string) => void
  setSelectedUserId: (userId: number | null) => void
  loadMore: () => void
  refetch: () => Promise<void>
}

export interface FilterOptions {
  searchQuery: string
  userId: number | null
}
