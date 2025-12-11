import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import {
  getPostBySlug,
  getRelatedPosts,
  getPostImageUrl,
  formatPostDate,
  Post,
} from "../../../sanity/lib/api";
import { urlFor } from "../../../sanity/lib/client";
import { getFullUrl } from "@/utils/helper";

interface BlogDetailProps {
  post: Post | null;
  relatedPosts: Post[];
}

// Custom Portable Text components for rendering rich content
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className={`my-8 ${value.alignment === 'full' ? 'w-full' : value.alignment === 'center' ? 'mx-auto max-w-3xl' : ''}`}>
          <Image
            src={urlFor(value.asset).width(1200).url()}
            alt={value.alt || 'Blog image'}
            width={1200}
            height={675}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    youtube: ({ value }) => {
      if (!value?.url) return null;
      // Extract video ID from YouTube URL
      const videoId = value.url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/)?.[1];
      if (!videoId) return null;

      return (
        <figure className="my-8">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const styles: Record<string, { bg: string; border: string; icon: string }> = {
        info: { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'info' },
        warning: { bg: 'bg-yellow-50', border: 'border-yellow-500', icon: 'warning' },
        tip: { bg: 'bg-green-50', border: 'border-green-500', icon: 'lightbulb' },
        important: { bg: 'bg-red-50', border: 'border-red-500', icon: 'exclamation' },
      };
      const style = styles[value.type] || styles.info;

      return (
        <div className={`my-6 p-4 rounded-lg border-l-4 ${style.bg} ${style.border}`}>
          <p className="text-gray-700">{value.content}</p>
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const target = value?.blank ? '_blank' : undefined;
      const rel = value?.blank ? 'noopener noreferrer' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      return (
        <Link href={`/blog/${value?.reference?.slug?.current || ''}`} className="text-primary hover:underline">
          {children}
        </Link>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-header-black mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-header-black mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold text-header-black mt-4 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 my-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 my-4 text-gray-700">
        {children}
      </ol>
    ),
  },
};

const BlogDetail = ({ post, relatedPosts }: BlogDetailProps) => {
  // No post found
  if (!post) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#F9F9F9]">
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#EA622F] mb-4">Blog Not Found</h2>
            <p className="text-gray-600 text-lg mb-8">
              The blog you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="bg-[#EA622F] text-white px-6 py-3 rounded-lg hover:bg-[#d55a2a] transition-colors"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get SEO meta values with fallbacks
  const metaTitle = post.metaTitle || `${post.title} - Dr. Soma Clinical Aesthetics`;
  const metaDescription = post.metaDescription || post.summary;
  const ogImageUrl = post.ogImage
    ? urlFor(post.ogImage.asset).width(1200).height(630).url()
    : getPostImageUrl(post.featuredImage, { width: 1200, height: 630 });
  const canonicalUrl = post.canonicalUrl || getFullUrl(`/blog/${post.slug.current}`);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={post.publishedAt || post._createdAt} />
        {post._updatedAt && <meta property="article:modified_time" content={post._updatedAt} />}
        {post.author?.name && <meta property="article:author" content={post.author.name} />}
        {post.category?.name && <meta property="article:section" content={post.category.name} />}
        {post.tags?.map((tag) => (
          <meta key={tag._id} property="article:tag" content={tag.name} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Keywords */}
        {post.metaKeywords && post.metaKeywords.length > 0 && (
          <meta name="keywords" content={post.metaKeywords.join(', ')} />
        )}

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* No index if specified */}
        {post.noIndex && <meta name="robots" content="noindex, nofollow" />}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.summary,
              image: ogImageUrl,
              datePublished: post.publishedAt || post._createdAt,
              dateModified: post._updatedAt || post._createdAt,
              author: {
                '@type': 'Person',
                name: post.author?.name || 'Dr. Soma Team',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Dr. Soma Clinical Aesthetics',
                logo: {
                  '@type': 'ImageObject',
                  url: getFullUrl('/images/logo.png'),
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': canonicalUrl,
              },
            }),
          }}
        />
      </Head>

      {/* Banner Section */}
      <section className="flex bg-[url(/images/blog_page_banner_image.png)] bg-no-repeat bg-cover py-100 lg:py-[175px]">
        <div className="flex containers w-full">
          <div className="flex w-full flex-col gap-[10px] max-w-[528px]">
            <h1 className="text-secondary max-[768px]:!text-[54px] max-[512px]:!text-[42px]">
              Blog
            </h1>
            <h5 className="text-white">{post.title}</h5>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="lg:pb-100 pb-50 pt-30 relative z-10">
        <div className="flex w-full containers">
          <div className="flex flex-col gap-30 w-full max-w-4xl mx-auto">
            {/* Blog Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>

              {/* Category Badge */}
              {post.category && (
                <span
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium text-white mb-4"
                  style={{ backgroundColor: post.category.color || '#EA622F' }}
                >
                  {post.category.name}
                </span>
              )}
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden mb-8">
                <Image
                  src={getPostImageUrl(post.featuredImage, { width: 1200, height: 675 })}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
                {post.featuredImage.caption && (
                  <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 text-center">
                    {post.featuredImage.caption}
                  </p>
                )}
              </div>
            )}

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={
                      post.author?.avatar
                        ? urlFor(post.author.avatar.asset).width(96).height(96).url()
                        : '/assets/images/default_user_icon.png'
                    }
                    alt={post.author?.name || 'Author'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {post.author?.name || 'Dr. Soma Team'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatPostDate(post.publishedAt || post._createdAt)}
                    {post.author?.role && ` • ${post.author.role}`}
                  </p>
                </div>
              </div>

              {/* Views count */}
              {post.views !== undefined && (
                <div className="text-sm text-gray-500">
                  {post.views} views
                </div>
              )}
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 relative z-10">
              <div className="prose max-w-none">
                {post.content && (
                  <PortableText value={post.content} components={portableTextComponents} />
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                    <span className="text-gray-600 font-medium">Tags:</span>
                    {post.tags.map((tag) => (
                      <Link
                        key={tag._id}
                        href={`/blog?tag=${tag.slug.current}`}
                        className="px-3 py-1 bg-[#EA622F] text-white text-sm rounded-full hover:bg-[#d55a2a] transition-colors"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Author Bio */}
            {post.author?.bio && (
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  About the Author
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={
                        post.author.avatar
                          ? urlFor(post.author.avatar.asset).width(128).height(128).url()
                          : '/assets/images/default_user_icon.png'
                      }
                      alt={post.author.name || 'Author'}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{post.author.name}</p>
                    {post.author.role && (
                      <p className="text-sm text-primary mb-2">{post.author.role}</p>
                    )}
                    <p className="text-gray-600 text-sm">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost._id}
                      href={`/blog/${relatedPost.slug.current}`}
                      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-40">
                        <Image
                          src={getPostImageUrl(relatedPost.featuredImage, { width: 400, height: 225 })}
                          alt={relatedPost.featuredImage?.alt || relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatPostDate(relatedPost.publishedAt || relatedPost._createdAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blogs Button */}
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-[#EA622F] text-white rounded-lg hover:bg-[#d55a2a] transition-colors"
              >
                &larr; Back to All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Use Server-Side Rendering for real-time blog updates
export const getServerSideProps: GetServerSideProps<BlogDetailProps> = async ({ params }) => {
  const slug = params?.slug as string;

  console.log(`[Blog Detail] Fetching post with slug: ${slug}`);

  try {
    const post = await getPostBySlug(slug);

    console.log(`[Blog Detail] Post found:`, post ? 'Yes' : 'No');

    if (!post) {
      return {
        notFound: true,
      };
    }

    // Get related posts from same category
    const relatedPosts = post.category?._id
      ? await getRelatedPosts(post.category._id, post._id)
      : [];

    return {
      props: {
        post,
        relatedPosts,
      },
    };
  } catch (error) {
    console.error('[Blog Detail] Error fetching post:', error);
    return {
      notFound: true,
    };
  }
};

export default BlogDetail;
