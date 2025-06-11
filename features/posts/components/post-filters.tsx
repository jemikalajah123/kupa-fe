"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X, Users } from "lucide-react"
import { usePosts } from "@/contexts/posts-context"

export function PostFilters() {
  const { searchQuery, selectedUserId, setSearchQuery, setSelectedUserId } = usePosts()

  const userIds = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-gray-200 shadow-sm">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search posts by title or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Users className="text-gray-500 h-4 w-4" />
        <Select
          value={selectedUserId?.toString() || "all"}
          onValueChange={(value) => setSelectedUserId(value === "all" ? null : Number.parseInt(value))}
        >
          <SelectTrigger className="w-[180px] bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
            <SelectValue placeholder="Filter by user" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Users</SelectItem>
            {userIds.map((userId) => (
              <SelectItem key={userId} value={userId.toString()}>
                User {userId}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
