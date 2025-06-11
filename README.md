# Posts Collection - Advanced Data Management

A modern, scalable Next.js application demonstrating server-side data fetching with client-side React Context management, infinite scroll pagination, and advanced filtering capabilities.

![Application Screenshot](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-11%20at%2014.04.57-pTDbkOHhEO2w63P0KaKsDuYy7KIH61.png)
*First paint of the Posts Collection application showing the modern UI with gradient styling and user badges*

## ✨ Features

### 🏗️ **Scalable Architecture**
- **Feature-based structure**: Organized around `/features/posts/` for maintainability
- **Separation of concerns**: Clean separation between contexts, hooks, utilities, and types
- **Reusable components**: Modular design for easy testing and maintenance
- **TypeScript**: Fully typed throughout for better developer experience

### 🎨 **Modern UI Design**
- **Gradient backgrounds**: Beautiful color schemes throughout the interface
- **Responsive design**: Works perfectly on desktop, tablet, and mobile
- **Smooth animations**: Hover effects, transitions, and loading states
- **Color-coded users**: Each user has a unique gradient badge color
- **Clean typography**: Excellent visual hierarchy and readability

### 🔍 **Advanced Filtering**
- **Real-time search**: Filter posts by title or content as you type
- **User filtering**: Filter posts by specific users (1-10)
- **Combined filters**: Search and user filters work together seamlessly
- **Filter indicators**: Clear visual feedback for active filters
- **Reset functionality**: Easy to clear filters and start fresh

### 📱 **Infinite Scroll Pagination**
- **10 items per page**: Optimized loading for better performance
- **Smooth scrolling**: Custom hook handles scroll detection automatically
- **Loading states**: Visual indicators for loading and end-of-content
- **Performance optimized**: Only renders visible items to maintain speed

### 📊 **Data Management**
- **Server-side fetching**: Initial data loaded on the server for SEO
- **Client-side state**: React Context manages filtering and pagination
- **Memoized operations**: Optimized performance with React.useMemo
- **Real-time statistics**: Live stats showing total, filtered, and displayed posts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone or download the project**
   \`\`\`bash
   # If using the v0 download feature
   # Extract the downloaded files to your desired directory
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with server-side data fetching
├── components/ui/           # Reusable UI components (shadcn/ui)
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── select.tsx
│   └── alert.tsx
├── constants/
│   └── posts.ts             # Static post data (100 posts)
├── contexts/
│   └── posts-context.tsx    # React Context definition
├── features/posts/          # Feature-specific components
│   ├── components/
│   │   ├── loading-indicator.tsx
│   │   ├── post-card.tsx
│   │   ├── post-filters.tsx
│   │   ├── posts-grid.tsx
│   │   ├── posts-header.tsx
│   │   └── posts-stats.tsx
│   └── providers/
│       └── posts-provider.tsx
├── hooks/
│   └── use-infinite-scroll.ts
├── lib/
│   ├── post-filters.ts      # Filtering and pagination logic
│   └── utils.ts             # Utility functions
├── types/
│   └── post.ts              # TypeScript type definitions
└── tailwind.config.ts       # Tailwind CSS configuration
\`\`\`

## 🎯 Key Components

### PostsProvider
The main context provider that manages:
- Post data state
- Search and filter state
- Pagination logic
- Loading and error states
- Infinite scroll functionality

### PostCard
Individual post display component featuring:
- User badge with gradient colors
- Truncated title and content
- Hover animations
- Post ID display

### PostFilters
Search and filtering interface with:
- Real-time search input
- User dropdown filter
- Clear filter functionality
- Responsive design

## 🛠️ Technologies Used

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable icons
- **React Context** - State management for client-side data

## 🎨 Design System

### Color Palette
- **User Gradients**: 10 unique gradient combinations for user badges
- **UI Colors**: Consistent color scheme using CSS custom properties
- **Responsive**: Adapts to different screen sizes and devices

### Typography
- **Font**: Inter font family for excellent readability
- **Hierarchy**: Clear distinction between headings, body text, and metadata
- **Responsive**: Scales appropriately across device sizes

## 📈 Performance Features

- **Server-Side Rendering**: Initial data fetched on the server
- **Memoized Filtering**: Efficient re-rendering with React.useMemo
- **Infinite Scroll**: Loads content progressively
- **Optimized Images**: Proper image handling and optimization
- **Minimal Bundle**: Only includes necessary components

## 🔧 Customization

### Adding New Filters
To add new filtering options, modify:
1. `types/post.ts` - Add new filter properties
2. `lib/post-filters.ts` - Update filtering logic
3. `features/posts/components/post-filters.tsx` - Add UI controls

### Styling Changes
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Edit individual component files for specific styling

### Data Source
Currently uses static data from `constants/posts.ts`. To connect to an API:
1. Update the `fetchPosts()` function in `app/page.tsx`
2. Modify the `refetch()` function in `posts-provider.tsx`
3. Add proper error handling and loading states

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended): `vercel --prod`
- **Netlify**: Configure build command as `npm run build`
- **Docker**: Use the included Dockerfile for containerization

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
