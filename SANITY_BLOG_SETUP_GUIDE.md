# Dr. Soma Clinical Aesthetics - Blog CMS Setup Guide

This guide walks you through setting up and using the Sanity CMS blog system for Dr. Soma Clinical Aesthetics website.

---

## Table of Contents

1. [Initial Setup (One-Time)](#1-initial-setup-one-time)
2. [User Management](#2-user-management)
3. [Using Sanity Studio](#3-using-sanity-studio)
4. [Creating Blog Posts](#4-creating-blog-posts)
5. [Managing Categories & Tags](#5-managing-categories--tags)
6. [SEO Best Practices](#6-seo-best-practices)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Initial Setup (One-Time)

### Step 1: Create Sanity Account

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Click "Get started" or "Sign up"
3. You can sign up with:
   - Google account (recommended)
   - GitHub account
   - Email and password

### Step 2: Create New Sanity Project

1. After logging in, go to [Sanity Manage](https://www.sanity.io/manage)
2. Click "Create new project"
3. Fill in the details:
   - **Project name**: `Dr Soma Blog`
   - **Organization**: Create new or use existing
   - **Plan**: Free tier is sufficient for most needs
4. Click "Create project"
5. **IMPORTANT**: Copy your **Project ID** (you'll see it in the URL or dashboard)
   - It looks like: `abc123xyz`

### Step 3: Configure Dataset

1. In your project dashboard, go to **Datasets**
2. You should have a `production` dataset by default
3. If not, create one named `production`

### Step 4: Update Environment Variables

1. Open your `.env.local` file (or create one from `.env.example`)
2. Add your Sanity Project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Step 5: Deploy Sanity Studio

You have two options for accessing Sanity Studio:

#### Option A: Embedded Studio (Recommended)

Access via your website: `https://drsomaplasticsurgery.com/studio/`

#### Option B: Hosted Studio

Deploy to Sanity's hosting:

```bash
# In your project directory
npx sanity deploy
```

Choose a unique subdomain like: `dr-soma-blog.sanity.studio`

### Step 6: Configure CORS

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **CORS Origins**
4. Add these origins:
   - `https://drsomaplasticsurgery.com`
   - `http://localhost:3000` (for development)
5. Check "Allow credentials" for each

---

## 2. User Management

### Adding SEO Team Members

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Team** → **Members**
4. Click "Invite member"
5. Enter their email address
6. Select role:
   - **Administrator**: Full access (for managers)
   - **Editor**: Can create, edit, publish blogs
   - **Viewer**: Read-only access

### Role Permissions

| Permission | Admin | Editor | Viewer |
|------------|-------|--------|--------|
| Create blogs | Yes | Yes | No |
| Edit blogs | Yes | Yes | No |
| Publish blogs | Yes | Yes | No |
| Delete blogs | Yes | Yes | No |
| Manage users | Yes | No | No |
| Project settings | Yes | No | No |

### Tracking Who Created What

Every blog post automatically records:
- **Created By**: Email of the user who created the post (auto-filled)
- The creator's email is displayed in the Metadata tab
- Admins can filter/search posts by creator

---

## 3. Using Sanity Studio

### Accessing the Studio

1. Go to `https://drsomaplasticsurgery.com/studio/` or your deployed Studio URL
2. Log in with Google, GitHub, or email
3. You'll see the content dashboard

### Navigation

- **Blog Posts**: Main content area for creating/editing blogs
- **Categories**: Manage blog categories
- **Tags**: Manage blog tags
- **Authors**: Manage author profiles

### Understanding Document States

| Icon | Status | Meaning |
|------|--------|---------|
| 📝 | Draft | Work in progress, not published |
| ✅ | Published | Live on the website |
| ⏰ | Scheduled | Will be published at set time |
| 📦 | Archived | Hidden from website |

---

## 4. Creating Blog Posts

### Step-by-Step Guide

1. **Click "Blog Posts"** in the sidebar
2. **Click the "+" icon** or "Create new" button
3. **Fill in the Content tab**:

#### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Title** | Blog headline (10-100 chars) | "5 Benefits of Rhinoplasty in Malaysia" |
| **Slug** | URL-friendly name (click Generate) | `5-benefits-of-rhinoplasty-in-malaysia` |
| **Summary** | Brief description (50-300 chars) | "Discover the top benefits of rhinoplasty surgery and why Malaysia is the ideal destination..." |
| **Featured Image** | Main blog image | Upload 1200x675px image |
| **Content** | Main blog body | Use rich text editor |
| **Category** | Select one category | "Facial Surgery" |

#### Optional Fields

| Field | Description |
|-------|-------------|
| **Tags** | Add relevant tags for filtering |
| **Author** | Select author profile |

### Using the Rich Text Editor

The content editor supports:

- **Headings**: H2, H3, H4 for sections
- **Bold/Italic**: Highlight key terms
- **Lists**: Bullet and numbered lists
- **Links**: External and internal links
- **Images**: Inline images with captions
- **YouTube Videos**: Embed videos via URL
- **Callout Boxes**: Info, warning, tip boxes

### SEO Tab

Fill these fields for better Google ranking:

| Field | Best Practice | Character Limit |
|-------|--------------|-----------------|
| **Meta Title** | Include main keyword | 50-60 chars |
| **Meta Description** | Compelling summary with keyword | 150-160 chars |
| **Meta Keywords** | 3-5 relevant keywords | Comma-separated |
| **OG Image** | Social media preview image | 1200x630px |

### Publishing Workflow

1. **Save as Draft**: Click save icon or Ctrl+S
2. **Preview**: Click "Open preview" to see how it looks
3. **Set Status**: Go to Metadata tab
4. **Choose**:
   - **Draft**: Keep working on it
   - **Published**: Make it live immediately
   - **Scheduled**: Set future publish date

---

## 5. Managing Categories & Tags

### Creating Categories

1. Click **Categories** in sidebar
2. Click **+** to create new
3. Fill in:
   - **Name**: Category name (e.g., "Facial Surgery")
   - **Slug**: Auto-generated URL slug
   - **Description**: Brief description
   - **Color**: Hex color for badge (e.g., #EA622F)

### Recommended Categories

- Facial Surgery
- Body Contouring
- Breast Procedures
- Non-Surgical Treatments
- Skin Care
- Patient Stories
- News & Updates

### Creating Tags

1. Click **Tags** in sidebar
2. Click **+** to create new
3. Fill in:
   - **Name**: Tag name (e.g., "rhinoplasty")
   - **Slug**: Auto-generated
   - **Description**: Brief description

### Recommended Tags

Use specific tags like:
- rhinoplasty
- liposuction
- breast-augmentation
- facelift
- recovery-tips
- before-after
- patient-experience

---

## 6. SEO Best Practices

### Title Optimization

- Include primary keyword near the beginning
- Keep under 60 characters
- Make it compelling and clickable

**Good**: "Rhinoplasty in Malaysia: Complete Guide to Nose Surgery"
**Bad**: "Everything You Need to Know About Getting Your Nose Done"

### Meta Description

- Include primary and secondary keywords
- Add a call-to-action
- Keep 150-160 characters

**Good**: "Learn about rhinoplasty surgery in Malaysia. Expert Dr. Soma explains procedure, recovery, costs & results. Book your consultation today."

### Image Optimization

1. **File names**: Use descriptive names
   - Good: `rhinoplasty-before-after-malaysia.jpg`
   - Bad: `IMG_1234.jpg`

2. **Alt text**: Describe the image for accessibility
   - Good: "Before and after rhinoplasty results showing nose refinement"
   - Bad: "Image 1"

3. **File size**: Keep under 200KB for fast loading

### URL Structure

URLs are automatically generated from slugs:
- `https://drsomaplasticsurgery.com/blog/your-blog-slug`

Tips:
- Keep slugs short and descriptive
- Use hyphens between words
- Include main keyword

### Internal Linking

Link to related content:
1. Select text in editor
2. Click link icon
3. Choose "Internal Link"
4. Select related blog post

---

## 7. Troubleshooting

### Common Issues

#### "Blog not showing on website"

1. Check status is "Published" in Metadata tab
2. Wait 1-2 minutes for cache to refresh
3. Hard refresh browser (Ctrl+Shift+R)

#### "Images not loading"

1. Ensure image is uploaded to Sanity (not external URL)
2. Check image file size (max 10MB)
3. Clear browser cache

#### "Cannot access Studio"

1. Check you're logged in with correct account
2. Verify you've been added as team member
3. Try different browser or incognito mode

#### "Changes not saving"

1. Check internet connection
2. Look for validation errors (red warnings)
3. Fill all required fields

### Getting Help

- **Technical issues**: Contact your developer
- **Content questions**: Contact your team admin
- **Sanity documentation**: [https://www.sanity.io/docs](https://www.sanity.io/docs)

---

## Quick Reference Card

### Creating a New Blog Post

1. Go to Studio → Blog Posts → Click +
2. Fill: Title, Summary, Featured Image, Content
3. Add: Category, Tags, Author
4. SEO: Meta Title, Meta Description
5. Set Status: Published
6. Save

### Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Save | Ctrl/Cmd + S |
| Bold | Ctrl/Cmd + B |
| Italic | Ctrl/Cmd + I |
| Link | Ctrl/Cmd + K |
| Undo | Ctrl/Cmd + Z |
| Redo | Ctrl/Cmd + Shift + Z |

### Image Sizes

| Usage | Recommended Size |
|-------|-----------------|
| Featured Image | 1200 x 675 px |
| OG Image | 1200 x 630 px |
| Inline Images | 800 x 600 px max |
| Author Avatar | 200 x 200 px |

---

## Appendix: Adding More Users

### Admin Guide: Adding 5 SEO Team Members

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select project "Dr Soma Blog"
3. Navigate to Team → Members
4. For each team member:
   - Click "Invite member"
   - Enter email address
   - Select "Editor" role
   - Click "Send invitation"
5. Team members will receive email invitations
6. They click the link and create/link their Sanity account

### Team Member Setup Checklist

- [ ] User 1: [email] - Editor role
- [ ] User 2: [email] - Editor role
- [ ] User 3: [email] - Editor role
- [ ] User 4: [email] - Editor role
- [ ] User 5: [email] - Editor role
- [ ] Admin: [your-email] - Administrator role

---

*Last Updated: December 2024*
*Version: 1.0*
