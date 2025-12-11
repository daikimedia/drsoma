import { client, getClient, getImageUrl } from './client'
import {
  postsQuery,
  postBySlugQuery,
  postSlugsQuery,
  categoriesQuery,
  tagsQuery,
  relatedPostsQuery,
  recentPostsQuery,
  postsByCategoryQuery,
  postsByTagQuery,
} from './queries'

// Types
export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata?: {
      dimensions?: {
        width: number
        height: number
      }
      lqip?: string
    }
  }
  alt?: string
  caption?: string
}

export interface Author {
  _id: string
  name: string
  slug?: { current: string }
  email?: string
  avatar?: SanityImage
  bio?: string
  role?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
  }
}

export interface Category {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  color?: string
  postCount?: number
}

export interface Tag {
  _id: string
  name: string
  slug: { current: string }
  postCount?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextContent = any[]

export interface Post {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: { current: string }
  summary: string
  content?: PortableTextContent // Portable Text content
  featuredImage: SanityImage
  ogImage?: SanityImage
  category: Category
  tags?: Tag[]
  author?: Author
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
  canonicalUrl?: string
  noIndex?: boolean
  publishedAt: string
  createdBy?: string
  views?: number
}

// Get all published posts
export async function getAllPosts(preview = false): Promise<Post[]> {
  const sanityClient = getClient(preview)
  try {
    const posts = await sanityClient.fetch(postsQuery)
    console.log('[Sanity] Fetched posts:', posts?.length || 0, 'posts found')
    if (posts?.length === 0) {
      console.log('[Sanity] No posts found. Make sure posts have status="published" in Sanity Studio')
    }
    return posts || []
  } catch (error) {
    console.error('[Sanity] Error fetching posts:', error)
    return []
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string, preview = false): Promise<Post | null> {
  const sanityClient = getClient(preview)
  return sanityClient.fetch(postBySlugQuery, { slug })
}

// Get all post slugs for static generation
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(postSlugsQuery)
}

// Get posts by category
export async function getPostsByCategory(categoryId: string, preview = false): Promise<Post[]> {
  const sanityClient = getClient(preview)
  return sanityClient.fetch(postsByCategoryQuery, { categoryId })
}

// Get posts by tag
export async function getPostsByTag(tagId: string, preview = false): Promise<Post[]> {
  const sanityClient = getClient(preview)
  return sanityClient.fetch(postsByTagQuery, { tagId })
}

// Get all categories
export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(categoriesQuery)
}

// Get all tags
export async function getAllTags(): Promise<Tag[]> {
  return client.fetch(tagsQuery)
}

// Get related posts
export async function getRelatedPosts(
  categoryId: string,
  postId: string,
  preview = false
): Promise<Post[]> {
  const sanityClient = getClient(preview)
  return sanityClient.fetch(relatedPostsQuery, { categoryId, postId })
}

// Get recent posts
export async function getRecentPosts(preview = false): Promise<Post[]> {
  const sanityClient = getClient(preview)
  return sanityClient.fetch(recentPostsQuery)
}

// Increment view count
export async function incrementViewCount(postId: string): Promise<void> {
  // Note: This requires a write token. Consider using an API route instead.
  try {
    await client
      .patch(postId)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit()
  } catch (error) {
    console.error('Failed to increment view count:', error)
  }
}

// Helper to get optimized image URL
export function getPostImageUrl(
  image: SanityImage | undefined,
  options?: { width?: number; height?: number; quality?: number }
): string {
  if (!image?.asset) return '/images/blog_image.png' // Default fallback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return getImageUrl(image.asset as any, options)
}

// Format date helper
export function formatPostDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
