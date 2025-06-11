"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, Search, Filter } from "lucide-react"
import { usePosts } from "@/contexts/posts-context"
import { POSTS_DATA } from "@/constants/posts"

export function PostsStats() {
  const { filteredPosts, searchQuery, selectedUserId } = usePosts()

  const totalUsers = new Set(POSTS_DATA.map((post) => post.userId)).size
  const isFiltered = searchQuery || selectedUserId

  const stats = [
    {
      label: "Total Posts",
      value: POSTS_DATA.length,
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Unique Users",
      value: totalUsers,
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: isFiltered ? "Filtered Results" : "Showing",
      value: filteredPosts.length,
      icon: isFiltered ? Filter : Search,
      color: isFiltered ? "from-orange-500 to-red-500" : "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-gray-200 bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
