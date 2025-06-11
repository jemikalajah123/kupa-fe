"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MessageSquare } from "lucide-react"
import { getUserColor, truncateText } from "@/lib/utils"
import type { Post } from "@/types/post"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const userGradient = getUserColor(post.userId)

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className={`bg-gradient-to-r ${userGradient} text-white border-0 shadow-sm`}>
            <User className="h-3 w-3 mr-1" />
            User {post.userId}
          </Badge>
          <div className="flex items-center text-xs text-gray-500">
            <MessageSquare className="h-3 w-3 mr-1" />#{post.id}
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
          {truncateText(post.title, 80)}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 leading-relaxed">{truncateText(post.body.replace(/\n/g, " "), 120)}</p>
      </CardContent>
    </Card>
  )
}
