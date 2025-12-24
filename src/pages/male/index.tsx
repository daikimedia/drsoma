import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";

const MaleHub = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const naturalRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute("data-section");
          if (elementId) {
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    const sections = [heroRef, trustRef, treatmentsRef, guideRef, naturalRef, journeyRef, faqRef, ctaRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  // Trust points data
  const trustPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Private consultations",
      description: "Respectful, direct communication in a discreet environment.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Honest advice",
      description: "Clear expectations with no pressure and no sales talk.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Natural masculine results",
      description: "Results that fit masculine proportions and your build.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safety-first planning",
      description: "Medical assessment comes before any procedure plan.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Aftercare support",
      description: "We stay with you through recovery with guidance and check-ups.",
    },
  ];

  // Trust badges
  const trustBadges = [
    { label: "Discreet and Private Care" },
    { label: "Natural Masculine Results" },
    { label: "Patient-First Safety" },
    { label: "Clear Aftercare Plan" },
  ];

  // Male treatments data
  const maleTreatments = [
    {
      title: "Gynecomastia Surgery",
      subtitle: "Chest Reshaping",
      description: "For men with enlarged breast tissue that affects confidence and clothing fit.",
      bestFor: ["Firm gland tissue", "Chest reshaping", "Flatter chest contour"],
      href: "/male/gynecomastia-surgery-malaysia",
      image: "/images/Gynecomastia Surgery men.jpg",
      featured: true,
    },
    {
      title: "Male Breast Reduction",
      subtitle: "Chest Contouring",
      description: "For men who want a flatter, firmer-looking chest, especially when fat and tissue are involved.",
      bestFor: ["Chest contouring", "Improved definition", "Better T-shirt fit"],
      href: "/male/male-breast-reduction-malaysia",
      image: "/images/male_breast_reduction.png",
      featured: true,
    },
    {
      title: "Penile Enhancement",
      subtitle: "Confidence & Comfort",
      description: "For men exploring improvement in confidence and intimate comfort, with a medical-first discussion.",
      bestFor: ["Selected concerns", "After assessment", "Medical discussion"],
      href: "/male/penile-enhancement-malaysia",
      image: "/images/Penile Enhancement men.jpg",
    },
    {
      title: "Hair Transplant",
      subtitle: "Hairline Restoration",
      description: "For men who want to restore hairline density and a more confident appearance.",
      bestFor: ["Hairline recession", "Thinning hair", "Crown density"],
      href: "/male/hair-transplant-malaysia",
      image: "/images/Hair Transplant men.jpg",
    },
    {
      title: "Jawline Enhancement",
      subtitle: "Lower Face Definition",
      description: "For men who want a stronger jawline, sharper lower face definition, and better profile balance.",
      bestFor: ["Jawline definition", "Masculine structure", "Profile balance"],
      href: "/male/jawline-enhancement-malaysia",
      image: "/images/Jawline Enhancement men.jpg",
      featured: true,
    },
    {
      title: "Chin Implant",
      subtitle: "Profile Enhancement",
      description: "For men who feel their chin is weak and want stronger profile balance.",
      bestFor: ["Side profile", "Facial balance", "Masculine contour"],
      href: "/male/chin-implant-malaysia",
      image: "/images/Chin Implant men.jpg",
    },
    {
      title: "Male Rhinoplasty",
      subtitle: "Nose Reshaping",
      description: "For men who want nose reshaping while keeping strong, masculine facial proportions.",
      bestFor: ["Nose shape balance", "Profile harmony", "Masculine proportions"],
      href: "/male/male-rhinoplasty-malaysia",
      image: "/images/Male Rhinoplasty men.jpg",
    },
    {
      title: "Six Pack Enhancement",
      subtitle: "Abdominal Definition",
      description: "For men who want more visible abdominal definition through detailed contouring in selected candidates.",
      bestFor: ["Athletic definition", "Abdominal shaping", "Body contouring"],
      href: "/male/six-pack-enhancement-malaysia",
      image: "/images/six_pack_enhancement.jpg",
    },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: "Chest looks enlarged or puffy", solution: "Gynecomastia Surgery or Male Breast Reduction", href: "/male/gynecomastia-surgery-malaysia" },
    { concern: "Hairline recession or thinning", solution: "Hair Transplant", href: "/male/hair-transplant-malaysia" },
    { concern: "Want a stronger jawline", solution: "Jawline Enhancement", href: "/male/jawline-enhancement-malaysia" },
    { concern: "Chin looks weak in profile", solution: "Chin Implant", href: "/male/chin-implant-malaysia" },
    { concern: "Want nose reshaping that stays masculine", solution: "Male Rhinoplasty", href: "/male/male-rhinoplasty-malaysia" },
    { concern: "Want more ab definition", solution: "Six Pack Enhancement", href: "/male/six-pack-enhancement-malaysia" },
    { concern: "Exploring intimate confidence concerns", solution: "Penile Enhancement (consultation required)", href: "/male/penile-enhancement-malaysia" },
  ];

  // Natural results points
  const naturalResults = [
    "Stronger lines, not exaggerated changes",
    "Better proportions, not a \"different face\"",
    "Shaping that still looks like your genetics",
    "Results that suit your age, build, and lifestyle",
  ];

  // Journey steps
  const journeySteps = [
    {
      num: "01",
      title: "Private Consultation",
      description: "You share your concern. We listen, assess, and explain options in simple words.",
    },
    {
      num: "02",
      title: "Personalized Plan",
      description: "You get a clear plan covering suitability, expected outcome, recovery, and safety steps.",
    },
    {
      num: "03",
      title: "Procedure Day",
      description: "Calm, guided care with comfort and safety as the priority.",
    },
    {
      num: "04",
      title: "Recovery & Follow-up",
      description: "Healing is supported with instructions, check-ups, and ongoing guidance.",
    },
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is male cosmetic surgery?",
      answer: "Male cosmetic surgery includes procedures designed to improve body or facial appearance while preserving masculine proportions and a natural look.",
    },
    {
      question: "Is cosmetic surgery common among men in Malaysia?",
      answer: "Yes. Many men seek cosmetic procedures for confidence, comfort, and self-image, often choosing to keep it private.",
    },
    {
      question: "Will male cosmetic surgery look obvious?",
      answer: "Most men want subtle improvements. When planned correctly, results aim to look natural and fit your build, face, and age.",
    },
    {
      question: "Will people be able to tell I had surgery?",
      answer: "The goal is discreet change. Many people simply notice that you look fitter or more confident, not that you had a procedure.",
    },
    {
      question: "Is male cosmetic surgery safe?",
      answer: "All procedures carry risks. Safety depends on proper assessment, realistic planning, and careful surgical technique.",
    },
    {
      question: "Do I need to decide on a procedure before booking?",
      answer: "No. Many men start with a concern rather than a procedure name. The consultation helps clarify suitable options.",
    },
    {
      question: "Is male cosmetic surgery confidential?",
      answer: "Yes. Consultations and treatments are handled with strict privacy and discretion.",
    },
    {
      question: "Can I talk openly without being judged?",
      answer: "Absolutely. Consultations are respectful, professional, and focused on your concerns, not assumptions or pressure.",
    },
    {
      question: "Can multiple treatments be combined?",
      answer: "Some men combine treatments for better overall balance. This depends on health, goals, and safety assessment.",
    },
    {
      question: "Is male cosmetic surgery only for younger men?",
      answer: "No. Men of different ages seek cosmetic surgery for different reasons, from body contouring to facial balance.",
    },
    {
      question: "Will results last long term?",
      answer: "Surgical changes are long-lasting, but maintaining results depends on lifestyle, weight stability, and ageing.",
    },
    {
      question: "What if I am unsure or nervous about surgery?",
      answer: "That is very common. A consultation is meant to give clarity and honest guidance, not push you into a decision.",
    },
    {
      question: "How do I start male cosmetic surgery in Malaysia?",
      answer: "The first step is a private consultation to discuss your concerns, options, and suitability.",
    },
  ];

  return (
    <>
      <Head>
        <title>Male Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics</title>
        <meta name="description" content="Private, respectful male cosmetic surgery in Malaysia. Gynecomastia, hair transplant, jawline enhancement, rhinoplasty, and more. Natural results that preserve masculine proportions." />
        <meta property="og:title" content="Male Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics" />
        <meta property="og:description" content="Private, respectful care for men who want to feel confident again. Explore male cosmetic surgery options in Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl("/male")} />
        <meta property="og:image" content={getFullUrl("/images/Male Cosmetic Surgery.jpg")} />
        <link rel="canonical" href={getFullUrl("/male")} />
      </Head>

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-white to-para-white overflow-hidden"
        ref={heroRef}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary to-transparent"></div>
        </div>

        {/* Subtle geometric elements */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

        {/* Content */}
        <div className="flex containers w-full relative z-10 py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
            {/* Left Content */}
            <div className={`flex-1 max-w-2xl ${isVisible("section-0") ? "animate-slideInLeft" : "opacity-0"}`}>
              {/* Badge */}
              <div className={`inline-flex items-center gap-3 mb-8 ${isVisible("section-0") ? "animate-fadeInUp" : "opacity-0"}`}>
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                  Male Cosmetic Hub
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>

              <h1 className={`text-header-black text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-0"
              }`}>
                Male Cosmetic Surgery
                <span className="block text-primary font-semibold mt-2">in Malaysia</span>
              </h1>

              <p className={`text-header-black text-lg md:text-xl font-medium leading-relaxed mb-4 ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-0"
              }`}>
                Private, respectful care for men who want to feel confident again
              </p>

              <p className={`text-para-black text-base leading-relaxed mb-8 max-w-xl ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-0"
              }`}>
                Most men do not talk openly about body or face concerns. They just live with them. They avoid the beach. They wear extra layers. They skip photos. They laugh it off, but it still bothers them.
                <span className="block mt-4 text-header-black font-medium">If that feels familiar, you are not alone.</span>
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 mb-8 ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}>
                <Link
                  href="/contact-us"
                  className="group relative bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-500 overflow-hidden shadow-lg shadow-primary/30"
                >
                  <span className="relative z-10">Book a Private Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
                <Link
                  href="https://wa.me/60142616007"
                  className="group border-2 border-header-black/20 hover:border-primary text-header-black font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 hover:bg-primary/5"
                >
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Link>
              </div>

              {/* Disclaimer */}
              <p className={`text-para-black/60 text-xs italic ${
                isVisible("section-0") ? "animate-fadeInUp delay-500" : "opacity-0"
              }`}>
                Results vary. Suitability depends on medical assessment. Your privacy is respected at every step.
              </p>
            </div>

            {/* Right Side - Stats/Image */}
            <div className={`flex-1 hidden lg:flex justify-end ${
              isVisible("section-0") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative">
                <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                  <Image
                    src="/images/Male Cosmetic Surgery.jpg"
                    fill
                    alt="Male Cosmetic Surgery"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-header-black/60 via-transparent to-transparent"></div>

                  {/* Floating Cards */}
                  <div className="absolute top-6 left-6 bg-white backdrop-blur-xl rounded-2xl px-8 py-6 border border-primary/20 shadow-lg animate-float z-10">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-2">100%</p>
                      <p className="text-header-black text-sm">Confidential</p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-primary rounded-2xl px-8 py-6 shadow-lg animate-float z-10" style={{ animationDelay: "1s" }}>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white mb-2">30+</p>
                      <p className="text-white/90 text-sm">Years Experience</p>
                    </div>
                  </div>
                </div>

                {/* Decorative frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-primary/20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounceSoft">
          <span className="text-para-black/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* ==================== TRUST SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={trustRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
            {/* Left Content */}
            <div className={`flex-1 ${isVisible("section-1") ? "animate-slideInLeft" : "opacity-0"}`}>
              <div className="sticky top-32">
                <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  Trust & Privacy
                </span>
                <h2 className="text-header-black text-3xl lg:text-4xl font-semibold leading-tight mb-6">
                  Trust and privacy
                  <span className="text-primary block">come first here</span>
                </h2>

                <p className="text-para-black text-lg mb-6">
                  When men search male cosmetic surgery in Malaysia, the biggest concerns are usually:
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "\"Will it look natural?\"",
                    "\"Will people know?\"",
                    "\"Is it safe?\"",
                    "\"Will I be judged?\""
                  ].map((concern, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <p className="text-header-black font-medium italic">{concern}</p>
                    </div>
                  ))}
                </div>

                <p className="text-para-black font-semibold">
                  Our approach is built to reduce those worries.
                </p>
              </div>
            </div>

            {/* Right - Trust Points */}
            <div className={`flex-1 ${isVisible("section-1") ? "animate-slideInRight" : "opacity-0"}`}>
              <p className="text-header-black text-lg font-semibold mb-6">How we build trust:</p>
              <div className="space-y-5">
                {trustPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 ${
                      isVisible("section-1") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="text-header-black font-semibold text-lg mb-1 normal-case">{point.title}</h4>
                        <p className="text-para-black">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className={`bg-[#0a0a0a] rounded-xl px-5 py-4 text-center ${
                      isVisible("section-1") ? "animate-scaleUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <p className="text-white text-sm font-medium">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TREATMENTS SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-[#fafafa]" ref={treatmentsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-12 w-full">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto ${isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Our Expertise
              </span>
              <h2 className="text-header-black text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                Explore <span className="text-primary">Male Treatments</span>
              </h2>
              <p className="text-para-black text-[16px] leading-relaxed">
                Each treatment below links to a dedicated page with full details, recovery, and FAQs.
              </p>
            </div>

            {/* Treatments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maleTreatments.map((treatment, index) => (
                <Link
                  key={index}
                  href={treatment.href}
                  className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    treatment.featured ? "md:col-span-1" : ""
                  } ${isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Featured Badge */}
                  {treatment.featured && (
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-[#0a0a0a] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={treatment.image}
                      fill
                      alt={treatment.title}
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-header-black text-xl font-bold mb-1 group-hover:text-primary transition-colors normal-case tracking-normal">
                        {treatment.title}
                      </h3>
                      <p className="text-primary text-sm font-medium tracking-normal">{treatment.subtitle}</p>
                    </div>

                    <p className="text-para-black text-sm leading-relaxed mb-5 tracking-normal">
                      {treatment.description}
                    </p>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {treatment.bestFor.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-secondary text-header-black text-xs px-3 py-1.5 rounded-full tracking-normal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-primary font-semibold text-sm tracking-normal">View Treatment</span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DECISION GUIDE SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden" ref={guideRef}>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col gap-14 w-full">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto ${isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Quick Guide
              </span>
              <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-4">
                Not sure which procedure
                <span className="text-primary block">fits your concern?</span>
              </h2>
              <p className="text-white/60 text-lg">
                Use this quick guide to find the right treatment page.
              </p>
            </div>

            {/* Decision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {decisionGuide.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-500 ${
                    isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <div className="absolute top-6 right-6 text-white/5 text-5xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <p className="text-white text-lg mb-4 pr-12 font-medium">{item.concern}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
                      <span className="text-primary font-semibold text-sm">{item.solution}</span>
                      <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className={`text-center ${isVisible("section-3") ? "animate-fadeInUp delay-600" : "opacity-0"}`}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Book a Private Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT NATURAL MEANS SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={naturalRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center w-full">
            {/* Left Image */}
            <div className={`flex-1 ${isVisible("section-4") ? "animate-slideInLeft" : "opacity-0"}`}>
              <div className="relative">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/natural.jpg"
                    fill
                    alt="Natural Results for Men"
                    className="object-cover object-center"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20 -z-10"></div>

                {/* Quote Card */}
                <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] animate-float">
                  <p className="text-header-black text-lg font-medium italic mb-3">
                    &ldquo;People notice you look fitter.&rdquo;
                  </p>
                  <p className="text-primary text-sm font-semibold">Not that you had a procedure.</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`flex-1 ${isVisible("section-4") ? "animate-slideInRight" : "opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Our Philosophy
              </span>
              <h2 className="text-header-black text-3xl lg:text-4xl font-semibold mb-6">
                What &ldquo;natural&rdquo; means
                <span className="text-primary block">for men</span>
              </h2>

              <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
                <p className="text-header-black text-lg font-medium mb-2">
                  Men often want improvement without looking obvious.
                </p>
                <p className="text-para-black">
                  If your biggest fear is looking unnatural, say it in your consultation. We plan around that.
                </p>
              </div>

              <p className="text-para-black text-lg font-medium mb-6">Natural results usually mean:</p>

              <div className="space-y-4">
                {naturalResults.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 ${
                      isVisible("section-4") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-header-black text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== JOURNEY SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-secondary" ref={journeyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-16 w-full">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto ${isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                The Process
              </span>
              <h2 className="text-header-black text-3xl lg:text-4xl font-semibold">
                Your journey, <span className="text-primary">step by step</span>
              </h2>
            </div>

            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {/* Connector Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}

                  <div className="bg-white rounded-3xl p-8 h-full relative hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-lg font-bold mb-6">
                        {step.num}
                      </div>
                      <h4 className="text-header-black text-xl font-bold mb-4 normal-case">{step.title}</h4>
                      <p className="text-para-black leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-para-white" ref={faqRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-14 w-full max-w-4xl mx-auto">
            {/* Centered Header */}
            <div className={`text-center ${isVisible("section-6") ? "animate-fadeInUp" : "opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Got Questions?
              </span>
              <h2 className="text-header-black text-3xl lg:text-4xl font-semibold mb-4">
                Male Cosmetic Surgery <span className="text-primary">FAQs</span>
              </h2>
              <p className="text-para-black text-lg max-w-2xl mx-auto">
                Find answers to common questions about male cosmetic surgery in Malaysia.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                    openIndex === index
                      ? "border-primary/20 shadow-lg"
                      : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                  } ${isVisible("section-6") ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.03}s` }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6 text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={`font-semibold text-base lg:text-lg pr-6 transition-colors ${
                      openIndex === index ? "text-primary" : "text-header-black"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary"
                    }`}>
                      {openIndex === index ? "−" : "+"}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}>
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-para-black leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Combine Note */}
            <div className={`bg-secondary rounded-2xl p-6 lg:p-8 text-center ${isVisible("section-6") ? "animate-fadeInUp delay-500" : "opacity-0"}`}>
              <h4 className="text-header-black text-lg font-bold mb-2 normal-case">Can I combine treatments?</h4>
              <p className="text-para-black">
                Some men combine treatments depending on goals and safety assessment. This is discussed case by case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden" ref={ctaRef}>
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex containers w-full relative z-10">
          <div className={`text-center max-w-3xl mx-auto ${isVisible("section-7") ? "animate-fadeInUp" : "opacity-0"}`}>
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2 className={`text-white text-3xl lg:text-5xl font-light mb-6 ${
              isVisible("section-7") ? "animate-fadeInUp delay-100" : "opacity-0"
            }`}>
              Ready to talk
              <span className="text-primary font-semibold block mt-2">privately?</span>
            </h2>

            <p className={`text-white text-lg mb-6 max-w-xl mx-auto ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}>
              You do not have to decide today. Start by exploring the treatment pages above. When you feel ready, book a private consultation and get clear, honest guidance.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 ${
              isVisible("section-7") ? "animate-fadeInUp delay-300" : "opacity-0"
            }`}>
              <Link
                href="/contact-us"
                className="group relative bg-primary hover:bg-primary/90 text-white font-medium px-10 py-5 rounded-full transition-all duration-500 overflow-hidden shadow-xl shadow-primary/30"
              >
                <span className="relative z-10">Book a Private Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
              <Link
                href="https://wa.me/60142616007"
                className="group border border-white/20 hover:border-green-500/50 text-white font-medium px-10 py-5 rounded-full transition-all duration-300 flex items-center gap-3 hover:bg-green-500/10"
              >
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
            </div>

            {/* Privacy Note */}
            <p className={`text-white/30 text-sm mt-10 ${
              isVisible("section-7") ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}>
              Your privacy is respected. Consultations are confidential and without obligation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaleHub;
