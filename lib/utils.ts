import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserColor(userId: number): string {
  const colors = [
    "user-gradient-1",
    "user-gradient-2",
    "user-gradient-3",
    "user-gradient-4",
    "user-gradient-5",
    "user-gradient-6",
    "user-gradient-7",
    "user-gradient-8",
    "user-gradient-9",
    "user-gradient-10",
  ]
  return colors[(userId - 1) % colors.length]
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}
