import { groq } from 'next-sanity'

// Query for all published blog posts
// Shows posts where status is "published", status is "draft", OR status is not set
// This ensures posts show up regardless of status field value
export const postsQuery = groq`
  *[_type == "post" && (status == "published" || status == "draft" || !defined(status))] | order(publishedAt desc, _createdAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    summary,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt,
      caption
    },
    category->{
      _id,
      name,
      slug,
      color
    },
    tags[]->{
      _id,
      name,
      slug
    },
    author->{
      _id,
      name,
      avatar {
        asset->{
          _id,
          url
        },
        alt
      },
      role
    },
    metaTitle,
    metaDescription,
    publishedAt,
    createdBy,
    views
  }
`

// Query for a single blog post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    summary,
    content,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt,
      caption
    },
    ogImage {
      asset->{
        _id,
        url
      }
    },
    category->{
      _id,
      name,
      slug,
      color,
      description
    },
    tags[]->{
      _id,
      name,
      slug
    },
    author->{
      _id,
      name,
      slug,
      email,
      avatar {
        asset->{
          _id,
          url
        },
        alt
      },
      bio,
      role,
      socialLinks
    },
    metaTitle,
    metaDescription,
    metaKeywords,
    canonicalUrl,
    noIndex,
    publishedAt,
    createdBy,
    views
  }
`

// Query for all post slugs (for static generation)
export const postSlugsQuery = groq`
  *[_type == "post" && (status == "published" || !defined(status))] {
    "slug": slug.current
  }
`

// Query for posts by category
export const postsByCategoryQuery = groq`
  *[_type == "post" && status == "published" && category._ref == $categoryId] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    summary,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    category->{
      _id,
      name,
      slug,
      color
    },
    author->{
      _id,
      name,
      avatar {
        asset->{
          _id,
          url
        }
      }
    },
    publishedAt
  }
`

// Query for posts by tag
export const postsByTagQuery = groq`
  *[_type == "post" && status == "published" && $tagId in tags[]._ref] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    summary,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    tags[]->{
      _id,
      name,
      slug
    },
    author->{
      _id,
      name,
      avatar {
        asset->{
          _id,
          url
        }
      }
    },
    publishedAt
  }
`

// Query for all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && status == "published" && category._ref == ^._id])
  }
`

// Query for all tags
export const tagsQuery = groq`
  *[_type == "tag"] | order(name asc) {
    _id,
    name,
    slug,
    "postCount": count(*[_type == "post" && status == "published" && ^._id in tags[]._ref])
  }
`

// Query for related posts (same category, excluding current post)
export const relatedPostsQuery = groq`
  *[_type == "post" && status == "published" && category._ref == $categoryId && _id != $postId][0...3] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          lqip
        }
      },
      alt
    },
    publishedAt
  }
`

// Query for sitemap data
export const sitemapQuery = groq`
  *[_type == "post" && status == "published"] {
    "slug": slug.current,
    _updatedAt
  }
`

// Query for recent posts (for homepage or sidebar)
export const recentPostsQuery = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          lqip
        }
      },
      alt
    },
    publishedAt
  }
`
