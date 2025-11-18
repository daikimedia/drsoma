import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { fetchBlogBySlug, BlogPost } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Create refs for each section
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Safe utility functions
  const safeGetImageUrl = (blog: BlogPost): string => {
    if (blog.asset?.imageInfo?.url) return blog.asset.imageInfo.url;
    if (blog.asset?.url) return blog.asset.url;
    return '/images/blog_image.png';
  };

  const safeGetDescription = (blog: BlogPost): string => {
    if (blog.description) return blog.description;
    if (blog.summary) return blog.summary;
    return '';
  };

  const safeGetAuthorName = (blog: BlogPost): string => {
    if (blog.created_by?.name) return blog.created_by.name;
    if (blog.author?.name) return blog.author.name;
    return 'Dr. Soma Team';
  };

  const safeGetAuthorAvatar = (blog: BlogPost): string => {
    if (blog.created_by?.avatar) return blog.created_by.avatar;
    if (blog.author?.avatarInfo?.url) return blog.author.avatarInfo.url;
    return '/assets/images/default_user_icon.png';
  };

  const safeGetDate = (blog: BlogPost): string => {
    if (blog.created_at) return new Date(blog.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return 'Recently';
  };

  // Load blog data
  useEffect(() => {
    let isMounted = true; // Prevent memory leaks
    const maxRetries = 2;
    
    const loadBlog = async (retryAttempt = 0) => {
      if (!slug || typeof slug !== 'string') {
        if (isMounted) {
          setLoading(false);
          setError("Invalid blog slug");
        }
        return;
      }
      
      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }
        
        console.log(`Loading blog with slug: ${slug} (attempt ${retryAttempt + 1})`);
        
        const foundBlog = await fetchBlogBySlug(slug);
        console.log('API Response for blog:', foundBlog);
        
        // Only update state if component is still mounted
        if (!isMounted) return;
        
        // Check if we have a valid blog object with either id or title
        if (foundBlog && (foundBlog.id || foundBlog.title)) {
          console.log('Setting blog state with:', foundBlog);
          setBlog(foundBlog);
        } else {
          console.log('Blog not found or invalid structure:', foundBlog);
          
          // Retry logic for empty responses
          if (retryAttempt < maxRetries) {
            console.log(`Retrying... (${retryAttempt + 1}/${maxRetries})`);
            setTimeout(() => {
              if (isMounted) {
                loadBlog(retryAttempt + 1);
              }
            }, 1000 * (retryAttempt + 1)); // Exponential backoff
            return;
          }
          
          setError("Blog not found");
        }
      } catch (err) {
        console.error('Error loading blog:', err);
        
        // Retry logic for network errors
        if (retryAttempt < maxRetries && err instanceof Error && 
            (err.message.includes('fetch') || err.message.includes('network'))) {
          console.log(`Network error, retrying... (${retryAttempt + 1}/${maxRetries})`);
          setTimeout(() => {
            if (isMounted) {
              loadBlog(retryAttempt + 1);
            }
          }, 1000 * (retryAttempt + 1)); // Exponential backoff
          return;
        }
        
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load blog");
        }
      } finally {
        if (isMounted) {
          console.log('Setting loading to false');
          setLoading(false);
        }
      }
    };

    // Clear previous blog data when slug changes
    setBlog(null);
    setError(null);
    
    loadBlog();
    
    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#F9F9F9]">
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EA622F] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#F9F9F9]">
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#EA622F] mb-4">
              Error Loading Blog
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {error}
            </p>
            <button
              onClick={() => router.push('/blogs')}
              className="bg-[#EA622F] text-white px-6 py-3 rounded-lg hover:bg-[#d55a2a] transition-colors"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No blog data
  if (!blog || (!blog.id && !blog.title)) {
    console.log('No blog data available:', blog);
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#F9F9F9]">
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#EA622F] mb-4">
              Blog Not Found
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              The blog you&apos;re looking for doesn&apos;t exist.
            </p>
            <button
              onClick={() => router.push('/blogs')}
              className="bg-[#EA622F] text-white px-6 py-3 rounded-lg hover:bg-[#d55a2a] transition-colors"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  console.log('Rendering blog with data:', blog);

  return (
    <>
      <Head>
        <title>{blog.title} - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content={blog.summary || blog.description.replace(/<[^>]+>/g, '').substring(0, 160)} />
        <meta property="og:title" content={`${blog.title} - Dr. Soma Clinical Aesthetics`} />
        <meta property="og:description" content={blog.summary || blog.description.replace(/<[^>]+>/g, '').substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={getFullUrl(`/blogs/${blog.url}`)} />
        <meta property="og:image" content={safeGetImageUrl(blog)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} - Dr. Soma Clinical Aesthetics`} />
        <meta name="twitter:description" content={blog.summary || blog.description.replace(/<[^>]+>/g, '').substring(0, 160)} />
        <meta name="twitter:image" content={safeGetImageUrl(blog)} />
        <link rel="canonical" href={getFullUrl(`/blogs/${blog.url}`)} />
      </Head>

      {/* Banner Section */}
      <section className="flex bg-[url(/images/blog_page_banner_image.png)] bg-no-repeat bg-cover py-100 lg:py-[175px]" ref={bannerRef} id="banner">
        <div className="flex containers w-full">
          <div className="flex w-full flex-col gap-[10px] max-w-[528px]">
            <h1 className="text-secondary max-[768px]:!text-[54px] max-[512px]:!text-[42px]">Blog</h1>
            <h5 className="text-white">
              {blog.title || 'Untitled Blog'}
            </h5>
          </div>
        </div>
      </section>
      

      {/* Blog Content Section */}
      <section className="lg:pb-100 pb-50 pt-30 relative z-10" ref={contentRef} id="content">
        <div className="flex w-full containers">
          <div className="flex flex-col gap-30 w-full">
            {/* Blog Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {blog.title || 'Untitled Blog'}
              </h1>
            </div>

            {/* Blog Image */}
            {safeGetImageUrl(blog) && (
              <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden mb-8">
                <Image
                  src={safeGetImageUrl(blog)}
                  alt={blog.title || 'Blog image'}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={safeGetAuthorAvatar(blog)}
                    alt={safeGetAuthorName(blog)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{safeGetAuthorName(blog)}</p>
                  <p className="text-sm text-gray-600">{safeGetDate(blog)}</p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 relative z-10">
              <div className="prose max-w-none">
                {(() => {
                  const description = safeGetDescription(blog);
                  console.log('Rendering description:', description);
                  return description && (
                    <div 
                      className="text-gray-700 leading-relaxed text-base"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  );
                })()}
                
                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#EA622F] text-white text-sm rounded-full"
                      >
                        {tag.name || tag.urlSlug || `Tag ${index + 1}`}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Back to Blogs Button */}
            <div className="text-center mt-8">
              <Link
                href="/blogs"
                className="inline-flex items-center px-6 py-3 bg-[#EA622F] text-white rounded-lg hover:bg-[#d55a2a] transition-colors"
              >
                ← Back to All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail; 