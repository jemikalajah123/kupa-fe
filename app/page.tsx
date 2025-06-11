import { PostsProvider } from "@/features/posts/providers/posts-provider"
import { PostsHeader } from "@/features/posts/components/posts-header"
import { PostsStats } from "@/features/posts/components/posts-stats"
import { PostFilters } from "@/features/posts/components/post-filters"
import { PostsGrid } from "@/features/posts/components/posts-grid"
import { LoadingIndicator } from "@/features/posts/components/loading-indicator"
import { POSTS_DATA } from "@/constants/posts"

// Simulate server-side data fetching
async function fetchPosts() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return POSTS_DATA
}

export default async function HomePage() {
  const initialPosts = await fetchPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <PostsProvider initialPosts={initialPosts}>
          <PostsHeader />
          <PostsStats />
          <PostFilters />

          <div className="mt-8">
            <PostsGrid />
            <LoadingIndicator />
          </div>
        </PostsProvider>
      </div>
    </div>
  )
}
