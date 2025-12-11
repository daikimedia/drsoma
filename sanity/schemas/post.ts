import { defineField, defineType } from 'sanity'
import { CreatedByInput } from '../components/CreatedByInput'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'metadata',
      title: 'Metadata',
    },
  ],
  fields: [
    // Content Group
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(10).max(100).error('Title must be between 10 and 100 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'URL-friendly version of the title. Click "Generate" to create from title.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required().error('Slug is required for the blog URL'),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'A brief summary of the blog post (displayed in blog listing)',
      validation: (Rule) => Rule.required().min(50).max(300).error('Summary must be between 50 and 300 characters'),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      description: 'Main image for the blog post (used in listing and as hero image)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional image caption',
        },
      ],
      validation: (Rule) => Rule.required().error('Featured image is required'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      group: 'content',
      description: 'Main blog content with rich text formatting',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'content',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required().error('Please select a category'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      description: 'Add relevant tags to help with search and filtering',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      to: [{ type: 'author' }],
      description: 'Select the author of this blog post',
    }),

    // SEO Group
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'SEO title for search engines (50-60 characters recommended)',
      validation: (Rule) =>
        Rule.max(70).warning('Meta title should be under 70 characters for best SEO results'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'SEO description for search engines (150-160 characters recommended)',
      validation: (Rule) =>
        Rule.max(200).warning('Meta description should be under 200 characters for best SEO results'),
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'SEO keywords (comma-separated)',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'seo',
      description: 'Custom image for social media sharing (1200x630px recommended). Falls back to featured image if not set.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
      description: 'Optional: Specify if this content exists elsewhere as the primary source',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
      description: 'Check this to prevent search engines from indexing this page',
    }),

    // Metadata Group
    defineField({
      name: 'createdBy',
      title: 'Created By',
      type: 'string',
      group: 'metadata',
      readOnly: true,
      description: 'Email of the user who created this post (auto-filled)',
      components: {
        input: CreatedByInput,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'metadata',
      description: 'Date and time when the blog was published',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    }),
    defineField({
      name: 'scheduledPublishAt',
      title: 'Scheduled Publish Date',
      type: 'datetime',
      group: 'metadata',
      description: 'Schedule this post to be published at a future date/time',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'metadata',
      initialValue: 'published',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      description: 'Set to "Published" to show on the website. Default is Published.',
    }),
    defineField({
      name: 'views',
      title: 'View Count',
      type: 'number',
      group: 'metadata',
      readOnly: true,
      initialValue: 0,
      description: 'Number of views (auto-tracked)',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      status: 'status',
      category: 'category.name',
    },
    prepare(selection) {
      const { title, author, media, status, category } = selection
      const statusEmoji = {
        draft: '📝',
        published: '✅',
        scheduled: '⏰',
        archived: '📦',
      }
      return {
        title: `${statusEmoji[status as keyof typeof statusEmoji] || '📝'} ${title}`,
        subtitle: `${category ? category + ' | ' : ''}${author ? 'by ' + author : 'No author'}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Oldest',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
