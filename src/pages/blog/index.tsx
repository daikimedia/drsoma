import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getAllPosts, getPostImageUrl, formatPostDate, Post } from "../../../sanity/lib/api";
import { getFullUrl } from "@/utils/helper";

const POSTS_PER_PAGE = 12;

interface BlogPageProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

const BlogPage = ({ posts, currentPage, totalPages, totalPosts }: BlogPageProps) => {
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <Head>
        <title>Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta
          name="description"
          content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia."
        />
        <meta property="og:title" content="Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta
          property="og:description"
          content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/blog')} />
        <meta property="og:image" content={getFullUrl('/images/blog_page_banner_image.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta
          name="twitter:description"
          content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia."
        />
        <meta name="twitter:image" content={getFullUrl('/images/blog_page_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/blog')} />
      </Head>

      {/* Banner Section */}
      <section className="flex bg-[url(/images/blog_page_banner_image.png)] bg-no-repeat bg-cover py-100 lg:py-[175px]">
        <div className="flex containers w-full">
          <div className="flex w-full flex-col gap-[10px] max-w-[406px]">
            <h1 className="text-secondary max-[768px]:!text-[54px] max-[512px]:!text-[42px]">
              Blog
            </h1>
            <h5 className="text-white">
              Informative articles about plastic surgery and aesthetic treatments
            </h5>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-50 lg:py-100" style={{ fontFamily: 'var(--primary-font, "Mulish", sans-serif)' }}>
        <div className="flex containers w-full">
          <div className="w-full">
            {/* Posts count */}
            {totalPosts > 0 && (
              <p className="text-para-black mb-8" style={{ fontFamily: 'inherit' }}>
                Showing {((currentPage - 1) * POSTS_PER_PAGE) + 1} - {Math.min(currentPage * POSTS_PER_PAGE, totalPosts)} of {totalPosts} articles
              </p>
            )}

            {posts.length > 0 ? (
              <>
                {/* Blog Grid - 3 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug.current}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                      style={{ fontFamily: 'inherit' }}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={getPostImageUrl(post.featuredImage, { width: 400, height: 250 })}
                          alt={post.featuredImage?.alt || post.title}
                          width={400}
                          height={250}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Category Badge */}
                        {post.category && (
                          <span
                            className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white"
                            style={{
                              backgroundColor: post.category.color || '#EA622F',
                              fontFamily: 'inherit'
                            }}
                          >
                            {post.category.name}
                          </span>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-para-italic mb-3" style={{ fontFamily: 'inherit' }}>
                          <span>{formatPostDate(post.publishedAt || post._createdAt)}</span>
                          {post.author && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{post.author.name}</span>
                            </>
                          )}
                        </div>

                        <h3
                          className="text-xl font-semibold text-header-black mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300"
                          style={{ fontFamily: 'inherit' }}
                        >
                          {post.title}
                        </h3>

                        <p
                          className="text-para-black leading-relaxed line-clamp-3"
                          style={{ fontFamily: 'inherit' }}
                        >
                          {post.summary}
                        </p>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag._id}
                                className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                                style={{ fontFamily: 'inherit' }}
                              >
                                #{tag.name}
                              </span>
                            ))}
                          </div>
                        )}

                        <div
                          className="mt-4 flex items-center text-primary font-medium group-hover:underline"
                          style={{ fontFamily: 'inherit' }}
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12 gap-2" style={{ fontFamily: 'inherit' }}>
                    {/* Previous Button */}
                    <Link
                      href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : '#'}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 ${
                        currentPage === 1
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed pointer-events-none'
                          : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary hover:bg-orange-50'
                      }`}
                      aria-disabled={currentPage === 1}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page, index) => (
                      <React.Fragment key={index}>
                        {page === "..." ? (
                          <span className="flex items-center justify-center w-10 h-10 text-gray-400">
                            ...
                          </span>
                        ) : (
                          <Link
                            href={`/blog?page=${page}`}
                            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 font-medium ${
                              currentPage === page
                                ? 'bg-primary border-primary text-white'
                                : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary hover:bg-orange-50'
                            }`}
                          >
                            {page}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}

                    {/* Next Button */}
                    <Link
                      href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : '#'}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 ${
                        currentPage === totalPages
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed pointer-events-none'
                          : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary hover:bg-orange-50'
                      }`}
                      aria-disabled={currentPage === totalPages}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}

                {/* Page Info */}
                {totalPages > 1 && (
                  <p className="text-center text-para-black mt-4" style={{ fontFamily: 'inherit' }}>
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-para-black" style={{ fontFamily: 'inherit' }}>
                  No blog posts available at the moment.
                </p>
                <p className="text-para-black mt-2" style={{ fontFamily: 'inherit' }}>
                  Check back soon for informative articles!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

// Use Server-Side Rendering for real-time blog updates with pagination
export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ query }) => {
  try {
    // Get page number from query params
    const page = parseInt(query.page as string) || 1;
    const validPage = Math.max(1, page);

    // Fetch all posts
    const allPosts = await getAllPosts();
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    // Ensure page is within bounds
    const currentPage = Math.min(validPage, Math.max(1, totalPages));

    // Get posts for current page
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const posts = allPosts.slice(startIndex, endIndex);

    console.log(`[Blog] Page ${currentPage}/${totalPages}, showing ${posts.length} of ${totalPosts} posts`);

    return {
      props: {
        posts,
        currentPage,
        totalPages,
        totalPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
        currentPage: 1,
        totalPages: 1,
        totalPosts: 0,
      },
    };
  }
};

export default BlogPage;
