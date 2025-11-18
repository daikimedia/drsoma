import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";
import { fetchTestimonials, Testimonial } from "@/utils/api";

const SuccessStories = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Create refs for each section
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials();
        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setError('No testimonials available');
        }
      } catch (err) {
        console.error('Error loading testimonials:', err);
        setError('Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <>
      <Head>
        <title>Success Stories - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Read inspiring success stories and testimonials from Dr. Soma's patients. Real stories, real results from our satisfied patients in Malaysia." />
        <meta property="og:title" content="Success Stories - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Read inspiring success stories and testimonials from Dr. Soma's patients. Real stories, real results from our satisfied patients in Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/success-stories')} />
        <meta property="og:image" content={getFullUrl('/images/success_stories_banner_image.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Read inspiring success stories and testimonials from Dr. Soma's patients. Real stories, real results from our satisfied patients in Malaysia." />
        <meta name="twitter:image" content={getFullUrl('/images/success_stories_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/success-stories')} />
      </Head>
      <section className="flex bg-[url(/images/success_stories_banner_image.png)] bg-no-repeat bg-cover py-100 lg:py-[175px]" ref={bannerRef}>
        <div className="flex containers w-full">
          <div className={`flex w-full flex-col gap-[10px] max-w-[406px] transition-all duration-700 ${
            isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-secondary max-[768px]:!text-[54px] max-[512px]:!text-[42px]">
              Success Stories
            </h1>
            <h5 className="text-white">
              Real stories, real results from our satisfied patients
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
                <p className="text-para-black mt-4">Loading testimonials...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <p className="text-red-500">{error}</p>
                <p className="text-para-black mt-2">Please try again later.</p>
              </div>
            )}

            {!loading && !error && testimonials.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 transition-all duration-700 ${
                      isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={testimonial.clientAvatar?.url || testimonial.author?.avatarInfo?.url || "/images/default_user_icon.png"}
                          alt={testimonial.clientAvatar?.alt || testimonial.clientName || "Patient"}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to default image if the avatar fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/default_user_icon.png";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-header-black group-hover:text-primary transition-colors duration-300">
                          {testimonial.clientName || testimonial.author?.name || "Anonymous"}
                        </h4>
                        <div className="flex items-center">
                          {renderStars(testimonial.rating)}
                          <span className="ml-2 text-sm text-para-black">{testimonial.rating}/5</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-para-black leading-relaxed">&ldquo;{testimonial.message}&rdquo;</p>
                    <div className="mt-4 text-sm text-para-italic">
                      {new Date(testimonial.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && testimonials.length === 0 && (
              <div className="text-center py-20">
                <p className="text-para-black">No testimonials available at the moment.</p>
                <p className="text-para-black mt-2">Check back soon for patient success stories!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
