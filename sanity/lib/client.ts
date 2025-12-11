import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Define a simple type for Sanity image sources
type SanityImageSource = {
  _type?: string
  asset?: {
    _ref?: string
    _type?: string
    _id?: string
    url?: string
  }
} | string

// Sanity configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3bjf064t'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Log configuration on server
if (typeof window === 'undefined') {
  console.log('[Sanity Client] Config:', { projectId, dataset, apiVersion })
}

// Create a client for fetching data (no token needed for public data)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for faster response
  // If you need to fetch draft content, add a read token
  // token: process.env.SANITY_API_READ_TOKEN,
})

// Create a preview client for draft content (requires token)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
})

// Helper function to get the right client based on preview mode
export const getClient = (preview = false) => (preview ? previewClient : client)

// Image URL builder
const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to get image URL with default dimensions
export function getImageUrl(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any,
  options?: {
    width?: number
    height?: number
    quality?: number
  }
) {
  if (!source) return ''

  let imageBuilder = builder.image(source)

  if (options?.width) {
    imageBuilder = imageBuilder.width(options.width)
  }
  if (options?.height) {
    imageBuilder = imageBuilder.height(options.height)
  }
  if (options?.quality) {
    imageBuilder = imageBuilder.quality(options.quality)
  }

  return imageBuilder.auto('format').url()
}
