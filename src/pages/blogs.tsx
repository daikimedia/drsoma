import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { fetchBlogs, BlogPost } from "@/utils/api";
import { getFullUrl } from "@/utils/helper";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Create refs for each section
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs();
        if (data && data.length > 0) {
          setBlogs(data);
        } else {
          setError('No blog posts available');
        }
      } catch (err) {
        console.error('Error loading blogs:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-section');
          if (elementId) {
            setVisibleElements(prev => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [bannerRef, contentRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia." />
        <meta property="og:title" content="Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/blogs')} />
        <meta property="og:image" content={getFullUrl('/images/blog_page_banner_image.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia." />
        <meta name="twitter:image" content={getFullUrl('/images/blog_page_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/blogs')} />
      </Head>
      <section className="flex bg-[url(/images/blog_page_banner_image.png)] bg-no-repeat bg-cover py-100 lg:py-[175px]" ref={bannerRef}>
        <div className="flex containers w-full">
          <div className={`flex w-full flex-col gap-[10px] max-w-[406px] transition-all duration-700 ${
            isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-secondary max-[768px]:!text-[54px] max-[512px]:!text-[42px]">
              Blog
            </h1>
            <h5 className="text-white">
              Informative articles about plastic surgery and aesthetic treatments
            </h5>
          </div>
        </div>
      </section>

      <section className="py-50 lg:py-100" ref={contentRef}>
        <div className="flex containers w-full">
          <div className={`w-full transition-all duration-700 ${
            isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {loading && (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="text-para-black mt-4">Loading blog posts...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <p className="text-red-500">{error}</p>
                <p className="text-para-black mt-2">Please try again later.</p>
              </div>
            )}

            {!loading && !error && blogs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.url}`}
                    className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 transition-all duration-700 ${
                      isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={blog.asset?.imageInfo?.url || blog.asset?.url || "/images/blog_image.png"}
                        alt={blog.asset?.altText || blog.title}
                        width={400}
                        height={250}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to default image if the uploaded image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/blog_image.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-para-italic mb-3">
                        <span>{formatDate(blog.created_at)}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-header-black mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-para-black leading-relaxed line-clamp-3">
                        {blog.summary || blog.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...'}
                      </p>
                      <div className="mt-4 flex items-center text-primary font-medium group-hover:underline">
                        Read More
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!loading && !error && blogs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-para-black">No blog posts available at the moment.</p>
                <p className="text-para-black mt-2">Check back soon for informative articles!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs; 