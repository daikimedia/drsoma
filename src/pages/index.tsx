import Certificates from "@/components/certificates";
import ContactForm from "@/components/contact-form";
import AnnouncementTicker, { Announcement } from "@/components/announcement-ticker";
import Image from "next/image";
import CertificateEightIcon from "../../public/icons/certificate_eight.svg";
import CertificateElevenIcon from "../../public/icons/certificate_eleven.svg";
import CertificateFiveIcon from "../../public/icons/certificate_five.svg";
import CertificateFourIcon from "../../public/icons/certificate_four.svg";
import CertificateNineIcon from "../../public/icons/certificate_nine.svg";
import CertificateOneIcon from "../../public/icons/certificate_one.svg";
import CertificateSevenIcon from "../../public/icons/certificate_seven.svg";
import CertificateSixIcon from "../../public/icons/certificate_six.svg";
import CertificateTenIcon from "../../public/icons/certificate_ten.svg";
import CertificateThirteenIcon from "../../public/icons/certificate_thirteen.svg";
import CertificateThreeIcon from "../../public/icons/certificate_three.svg";
import CertificateTwevelIcon from "../../public/icons/certificate_twevel.svg";
import CertificateTwoIcon from "../../public/icons/certificate_two.svg";
import PopupModal from "@/components/popup-modal";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import { getFullUrl } from "@/utils/helper";
import { fetchAnnouncements } from "@/utils/api";

const certificateData = [
  { id: 1, certificate: <CertificateOneIcon /> },
  { id: 2, certificate: <CertificateTwoIcon /> },
  { id: 3, certificate: <CertificateThreeIcon /> },
  { id: 4, certificate: <CertificateFourIcon /> },
  { id: 5, certificate: <CertificateFiveIcon /> },
  { id: 6, certificate: <CertificateSixIcon /> },
  { id: 7, certificate: <CertificateSevenIcon /> },
  { id: 8, certificate: <CertificateEightIcon /> },
  { id: 9, certificate: <CertificateNineIcon /> },
  { id: 10, certificate: <CertificateTenIcon /> },
  { id: 11, certificate: <CertificateElevenIcon /> },
  { id: 12, certificate: <CertificateTwevelIcon /> },
  { id: 13, certificate: <CertificateThirteenIcon /> },
];

const Index = () => {
  const [showCostModal, setShowCostModal] = React.useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(true);
  const router = useRouter();

  // Create refs for each section
  const announcementRef = useRef<HTMLDivElement>(null);
  const attentionRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const reinventRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const costRef = useRef<HTMLDivElement>(null);

  // Fetch announcements
  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        setLoadingAnnouncements(true);
        const data = await fetchAnnouncements();
        console.log('Fetched announcements data:', data);
        
        // Temporary test: Add some test data if the API returns empty or problematic data
        if (!data || data.length === 0 || (!data[0]?.content && !data[0]?.description)) {
          console.log('API returned problematic data, using test data');
          const testData: Announcement[] = [
            {
              id: 'test-1',
              title: 'Test Announcement',
              content: 'This is a test description to verify the component works correctly.',
              priority: 'high' as const,
              status: 'published',
              created_at: '2024-12-20T10:00:00Z'
            }
          ];
          setAnnouncements(testData);
        } else {
          setAnnouncements(data);
        }
      } catch (error) {
        console.error('Error loading announcements:', error);
        // Fallback to test data on error
        const testData: Announcement[] = [
          {
            id: 'test-1',
            title: 'Test Announcement',
            content: 'This is a test description to verify the component works correctly.',
            priority: 'high' as const,
            status: 'published',
            created_at: '2024-12-20T10:00:00Z'
          }
        ];
        setAnnouncements(testData);
      } finally {
        setLoadingAnnouncements(false);
      }
    };

    loadAnnouncements();
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
    const sections = [announcementRef, attentionRef, certificatesRef, reinventRef, productsRef, costRef];
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
        <title>Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia. Discover advanced aesthetic treatments and surgical excellence at Soma Plastic Surgery." />
        <meta property="og:title" content="Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia. Discover advanced aesthetic treatments and surgical excellence at Soma Plastic Surgery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/')} />
        <meta property="og:image" content={getFullUrl('/images/home_page_banner_image.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia. Discover advanced aesthetic treatments and surgical excellence at Soma Plastic Surgery." />
        <meta name="twitter:image" content={getFullUrl('/images/home_page_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/')} />
      </Head>
      <section className="flex bg-[url(/images/home_page_banner_image.png)] bg-no-repeat bg-cover py-100 lg:py-[278px]">
        <div className="flex containers w-full">
          <div className="flex w-full flex-col gap-[4px]">
            <h3 className="text-white max-[512px]:!text-[20px]">
              PLASTIC SURGEON
            </h3>
            <h1 className="text-para-white max-[768px]:!text-[54px] max-[512px]:!text-[42px]">
              Dr. SOMA
            </h1>
            <h5 className="text-white">BRING OUT THE NATURAL BEAUTY IN YOU</h5>
          </div>
        </div>
      </section>

      <section className="py-50" ref={announcementRef}>
        <div className="flex containers w-full">
          <div className="flex w-full flex-col gap-30">
            <div className={`transition-all duration-1000 ${isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {loadingAnnouncements ? (
                <div className="bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <span className="text-lg mr-2">📢</span>
                    <span className="font-medium">Loading Announcements...</span>
                  </div>
                </div>
              ) : (
                <AnnouncementTicker 
                  announcements={announcements}
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="flex py-30 lg:py-50" ref={attentionRef}>
        <div className="flex containers w-full">
          <div className={`flex flex-col gap-45 w-full transition-all duration-700 ${
            isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex w-full justify-center gap-[11px] items-center">
              <hr className="lg:flex hidden w-full max-w-[275px] border border-[##000000] border-opacity-10" />
              <h2 className="text-header-black text-center max-[512px]:!text-[34px]">
                <span className="text-primary">ATTENTION</span> TO EVERY DETAIL
              </h2>
              <hr className="lg:flex hidden w-full max-w-[275px] border border-[##000000] border-opacity-10" />
            </div>
            <div className="flex w-full gap-[50px] justify-center items-end">
              <div className="flex w-full max-w-[600px]">
                <Image
                  src="/images/dr_soma_pic.png"
                  width={600}
                  height={600}
                  loading="lazy"
                  alt="image"
                />
              </div>
              <div className="flex w-full flex-col gap-[19px]">
                <h3 className="text-header-black whitespace-nowrap tracking-tight">
                  <span className="text-primary">DR. SOMASUNDARAM</span>
                </h3>
                <div className="flex w-full">
                  <p className="text-para-black text-justify">
                  Dr. Somasundaram Sathappan is a Consultant Plastic and Reconstructive Surgeon and the Head of Soma Plastic Surgery (Clinical Aesthetics) Clinic based in Subang Jaya, Malaysia. He obtained his medical degree from the University of Malaya, Kuala Lumpur, in 1989 and subsequently served in Sarawak, Malaysian Borneo, for one and a half years. Upon his return to Kuala Lumpur, he was appointed as a trainee lecturer in the Department of Surgery at the National University of Malaysia. In 1994, he pursued his specialization in Plastic and Reconstructive Surgery at the prestigious Royal College of Surgeons in the United Kingdom, where he honed his skills in both aesthetic and reconstructive procedures. With over three decades of experience, Dr. Soma has performed thousands of successful surgeries, earning him recognition as one of Malaysia&apos;s leading plastic surgeons. His expertise encompasses the full spectrum of plastic surgery, from facial rejuvenation and breast procedures to complex reconstructive surgeries, always prioritizing patient safety and natural-looking results.
                  </p>
                </div>
                <p className="text-para-italic italic-small">
                  {`"THE BEST CHOICE A PATIENT CAN MAKE IS ONE THAT LEADS TO THEIR OWN HAPPINESS"`}
                </p>
                <div className="flex justify-center w-full pt-4">
                  <button 
                    className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => router.push('/aboutus')}
                  >
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-50" ref={certificatesRef}>
        <div className="flex containers w-full">
          <div className={`flex flex-col gap-40 w-full transition-all duration-700 ${
            isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex w-full justify-center items-center">
              <h2 className="text-para-white text-center max-[512px]:!text-[34px]">
                CERTIFICATES
              </h2>
            </div>
            <Certificates certificates={certificateData} />
          </div>
        </div>
      </section>

      <section className="flex py-50 lg:py-100 bg-gradient-to-br from-gray-50 to-white" ref={reinventRef}>
        <div className="flex containers w-full">
          <div className={`flex flex-col gap-40 w-full transition-all duration-700 ${
            isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Enhanced Header Section */}
            <div className="flex w-full flex-col gap-20 items-center">
              <div className="flex w-full justify-center gap-[11px] items-center mb-8">
                <hr className="lg:flex hidden w-full max-w-[275px] border border-[##000000] border-opacity-10" />
                <h2 className="text-header-black text-center max-[512px]:!text-[34px] relative">
                  <span className="text-primary bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                    REINVENT, REFRESH, REVEAL
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-orange-600 rounded-full"></div>
                </h2>
                <hr className="lg:flex hidden w-full max-w-[275px] border border-[##000000] border-opacity-10" />
              </div>
              
              {/* Enhanced Description */}
              <div className="flex w-full">
                <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-orange-600/3"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/8 to-orange-600/8 rounded-full -translate-y-20 translate-x-20"></div>
                  
                  <div className="relative z-10">
                    {/* Three pillars section */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                      {/* Reinvent */}
                      <div className="text-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          <span className="text-primary">REINVENT</span> Your Appearance
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Our comprehensive approach to aesthetic and reconstructive surgery helps you reinvent your appearance with surgical precision and artistic vision.
                        </p>
                      </div>

                      {/* Refresh */}
                      <div className="text-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          <span className="text-green-600">REFRESH</span> Natural Beauty
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          From advanced facial rejuvenation techniques to sophisticated body contouring procedures, we refresh your natural beauty while preserving your unique features.
                        </p>
                      </div>

                      {/* Reveal */}
                      <div className="text-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          <span className="text-purple-600">REVEAL</span> Your Best Self
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Our state-of-the-art facility combines cutting-edge technology with Dr. Somasundaram&apos;s three decades of surgical expertise to reveal the best version of yourself.
                        </p>
                      </div>
                    </div>

                    {/* Highlight section */}
                    <div className="bg-gradient-to-r from-primary/10 via-orange-600/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h5 className="text-lg font-semibold text-gray-900">Our Commitment to Excellence</h5>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-gray-700 text-center leading-relaxed">
                        Every procedure is tailored to your individual needs, ensuring results that are both beautiful and natural. 
                        Experience the perfect blend of medical excellence and aesthetic artistry in a safe, caring environment 
                        where your confidence and well-being are our top priorities.
                      </p>
                    </div>

                    {/* Stats section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">30+</div>
                          <div className="text-gray-600 font-medium">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                          <div className="text-gray-600 font-medium">Personalized Care</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">Latest</div>
                          <div className="text-gray-600 font-medium">Advanced Technology</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Service Cards */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
              
              {/* Breast Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/breast_image.png"
                    width={350}
                    height={350}
                    loading="lazy"
                    alt="Breast Surgery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    Reinvent
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                    BREAST
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Transform your confidence with advanced breast procedures including augmentation, reduction, and lift surgeries tailored to your unique needs.
                  </p>
                  <div className="flex justify-center">
                    <button 
                      className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-sm"
                      onClick={() => router.push('/servicespage/breast-augmentation-implant-in-malaysia')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Face Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/face_image.png"
                    width={350}
                    height={350}
                    loading="lazy"
                    alt="Facial Surgery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    Refresh
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                    FACE
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Rejuvenate your natural beauty with cutting-edge facial procedures including lifts, rhinoplasty, and non-surgical treatments.
                  </p>
                  <div className="flex justify-center">
                    <button 
                      className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-sm"
                      onClick={() => router.push('/servicespage/face-lift-malaysia-to-combat-aging')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Body Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/body_image.png"
                    width={350}
                    height={350}
                    loading="lazy"
                    alt="Body Contouring"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    Reveal
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                    BODY
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Sculpt your ideal physique with advanced body contouring procedures including liposuction, tummy tucks, and fat transfer.
                  </p>
                  <div className="flex justify-center">
                    <button 
                      className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-sm"
                      onClick={() => router.push('/servicespage/liposuction-malaysia-remove-unwanted-fat')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center mt-8">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-primary to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                onClick={() => router.push('/servicespage')}
              >
                <span>Explore All Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="flex bg-[url(/images/plastic_surgery.png)] bg-no-repeat bg-cover py-50 lg:pt-[127px] lg:pb-[122px]" ref={costRef}>
        <div className="flex w-full containers">
          <div className={`flex flex-col gap-[44px] w-full justify-center items-center transition-all duration-700 ${
            isVisible('section-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-para-white text-center max-[512px]:!text-[34px]">
              SHOW THE COST OF PLASTIC SURGERY
            </h2>
            <div className="flex flex-col gap-30 items-center">
              <div className="flex w-full max-w-[812px] bg-[url(/images/linear_image.png)] border border-stroke bg-no-repeat bg-cover py-20 px-30 rounded-[15px]">
                <h3 className="text-para-white text-center">
                  <span className="text-primary">&ldquo;</span>Aesthetic Surgery For
                  The Face, Eyes, Breasts<span className="text-primary">&rdquo;</span>
                </h3>
              </div>
              <button className="btn py-10 px-[18px] bg-primary text-para-white rounded-[2.5px]" onClick={() => setShowCostModal(true)}>
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <PopupModal visible={showCostModal} onClose={() => setShowCostModal(false)}>
        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
                      <p style={{ marginBottom: 16 }}>Many people do enquire about prices and the cost of our treatments and surgeries. Some of them do feel that there are Clinics offering a similar procedures at cheaper rates and they wonder why we are &apos;expensive&apos;. The issues are:</p>
          <ul style={{ marginLeft: 24, marginBottom: 16, listStyle: 'disc' }}>
            <li style={{ marginBottom: 12 }}>
              The procedure that they claim that the other Clinic may be offering may be totally different from ours even though the names may sound the same. The scope of procedures done, the complexity of the procedure and the results that are generated can be very different.
            </li>
            <li style={{ marginBottom: 12 }}>
                              We value your time and your investment in us. You&apos;re encouraged to check on your progress with our team, as we are always contactable. Some people worry about their treatments more than others – particularly if they&apos;ve had a bad experience in the past. We will sit down with you and pick up the phone as many times as needed to answer all your questions so you feel confident with our experience and comfortable with your decision. Before any procedure, we always provide our patients with the all information they need and we never pressure anyone to do procedures.
            </li>
            <li style={{ marginBottom: 12 }}>
                              For anyone coming to visit us do procedures, you may have noticed that we take a lot longer with our appointments than others. The reason for this? We do not want any of our clients to feel rushed. Non-surgical treatments shouldn&apos;t be a race to get as many people onto the couch in one day as possible. We take our time via the phone, email, aftercare appointments and whatever means of communication suits you to check that you&apos;re happy and well.
            </li>
            <li style={{ marginBottom: 0 }}>
              Cosmetic procedures can be done by doctors certified by MOH with a LCP certificate. Only plastic surgeons in chapter 3 are allowed to do invasive procedures. If in doubt do ask to see their LCP certificates. You need to know you are in good, experienced and safe hands.
            </li>
          </ul>
        </div>
      </PopupModal>
      
    </>
  );
};

export default Index;
