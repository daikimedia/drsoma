import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import ContactForm from "@/components/contact-form";
import { getFullUrl } from "@/utils/helper";

const ContactUs = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Create refs for each section
  const bannerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
    const sections = [bannerRef, infoRef, formRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  return (
    <>
      <Head>
        <title>Contact Us - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Contact Dr. Soma Clinical Aesthetics in Subang Jaya, Malaysia. Get in touch for consultations, appointments, and inquiries about plastic surgery and aesthetic treatments." />
        <meta property="og:title" content="Contact Us - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Contact Dr. Soma Clinical Aesthetics in Subang Jaya, Malaysia. Get in touch for consultations, appointments, and inquiries about plastic surgery and aesthetic treatments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/contact-us')} />
        <meta property="og:image" content={getFullUrl('/images/contact_banner.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Contact Dr. Soma Clinical Aesthetics in Subang Jaya, Malaysia. Get in touch for consultations, appointments, and inquiries about plastic surgery and aesthetic treatments." />
        <meta name="twitter:image" content={getFullUrl('/images/contact_banner.png')} />
        <link rel="canonical" href={getFullUrl('/contact-us')} />
      </Head>

      {/* Hero Banner Section */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden" ref={bannerRef}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary/30">
          <Image
            src="/images/contact_banner.png"
            alt="Contact Us Banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-orange-500/20 animate-pulse"></div>
        
        {/* Content */}
        <div className="flex containers w-full relative z-10">
          <div className={`flex w-full flex-col gap-4 max-w-xl transition-all duration-1000 ${
            isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full w-fit border border-white/30">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Ready to Help You</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
              <span className="text-primary">Contact</span> Us
            </h1>
            
            {/* Subtitle */}
            <h5 className="text-lg lg:text-xl text-white/90 font-medium drop-shadow-lg max-w-md">
              Expert Care Begins With a Conversation
            </h5>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
        <div className="flex containers w-full">
          <div className="w-full" ref={infoRef}>
            {/* Header */}
            <div className={`text-center mb-12 transition-all duration-1000 ${
              isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Get in Touch
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-primary">Let&apos;s Start</span> Your Journey
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We&apos;re here to help you on your journey to enhanced beauty and confidence. Contact us for consultations, appointments, or any questions about our services.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Location Card */}
              <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ animationDelay: '0.1s' }}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" fill="#EA622F" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Soma Plastic Surgery (Clinical Aesthetics)<br />
                      Subang Jaya, Malaysia<br />
                      <span className="text-primary font-medium">Conveniently located with easy access and parking facilities.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ animationDelay: '0.2s' }}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" fill="#EA622F" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Operating Hours</h3>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="font-medium">Mon-Fri: 9am-5pm</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="font-medium">Sat: 9am-1pm</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="font-medium">Sunday & Public Holiday: Closed</span>
                      </p>
                      <p className="text-primary font-medium mt-3">Emergency consultations available by appointment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" fill="#EA622F" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <p className="flex items-center justify-center gap-2">
                        <svg width="16" height="16" fill="#EA622F" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <span className="font-medium">603 5887 4422</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <svg width="16" height="16" fill="#EA622F" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span className="font-medium">enquiry.drsoma@gmail.com</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <svg width="16" height="16" fill="#EA622F" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        <span className="font-medium">014 261 6007</span>
                      </p>
                      <p className="text-primary font-medium mt-3">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-0 pb-8 lg:pb-12 bg-gradient-to-br from-primary/5 via-white to-orange-500/5">
        <div className="flex containers w-full">
          <div className={`w-full transition-all duration-1000 ${
            isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} ref={formRef}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
