import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

// Define the project configuration
export default defineConfig({
  name: 'dr-soma-blog',
  title: 'Dr. Soma Clinical Aesthetics - Blog CMS',

  // Sanity Project ID
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3bjf064t',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Blog Posts
            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(
                S.documentTypeList('post')
                  .title('Blog Posts')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.divider(),
            // Categories
            S.listItem()
              .title('Categories')
              .schemaType('category')
              .child(S.documentTypeList('category').title('Categories')),
            // Tags
            S.listItem()
              .title('Tags')
              .schemaType('tag')
              .child(S.documentTypeList('tag').title('Tags')),
            // Authors
            S.listItem()
              .title('Authors')
              .schemaType('author')
              .child(S.documentTypeList('author').title('Authors')),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },

  // Document actions customization
  document: {
    // Auto-fill createdBy field with current user's email on new documents
    actions: (prev, context) => {
      return prev
    },
    // Production URL for preview - uses localhost in development
    productionUrl: async (prev, context) => {
      const { document } = context
      if (document._type === 'post') {
        const slug = (document.slug as { current?: string })?.current
        if (slug) {
          // Use localhost for development, production URL for live
          const baseUrl = process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://drsomaplasticsurgery.com'
          return `${baseUrl}/blog/${slug}`
        }
      }
      return prev
    },
  },

  // Form configuration to auto-set createdBy
  form: {
    // Add initial values for new documents
  },
})
