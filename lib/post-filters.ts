import type { Post, FilterOptions } from "@/types/post"

export function filterPosts(posts: Post[], filters: FilterOptions): Post[] {
  return posts.filter((post) => {
    const matchesSearch =
      !filters.searchQuery ||
      post.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(filters.searchQuery.toLowerCase())

    const matchesUser = !filters.userId || post.userId === filters.userId

    return matchesSearch && matchesUser
  })
}

export function paginatePosts(posts: Post[], page: number, itemsPerPage = 10): Post[] {
  return posts.slice(0, page * itemsPerPage)
}
