import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";

const FaceHub = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "We listen first",
      description: "You will never be rushed into a decision.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "We keep it honest",
      description: "If a procedure is not suitable, we will say so.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "We plan for natural results",
      description: "The goal is harmony, not a \"different face.\"",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "We prioritize safety",
      description: "Medical assessment comes before any plan.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "We stay with you",
      description: "Follow-up and aftercare are part of the service.",
    },
  ];

  // Trust badges
  const trustBadges = [
    { label: "Patient-First Safety", icon: "shield" },
    { label: "Natural-Looking Results", icon: "sparkle" },
    { label: "Private Consultations", icon: "lock" },
    { label: "Careful Aftercare", icon: "heart" },
  ];

  // Facial treatments data
  const facialTreatments = [
    {
      title: "Rhinoplasty",
      subtitle: "Nose Reshaping",
      category: "nose",
      description: "For patients who want a more balanced nose shape, improved facial harmony, or functional improvement.",
      bestFor: ["Nose shape", "Profile balance", "Facial harmony"],
      href: "/face/rhinoplasty-malaysia",
      image: "/images/Rhinoplasty.jpg",
      featured: true,
    },
    {
      title: "Asian Rhinoplasty",
      subtitle: "Natural Asian Proportions",
      category: "nose",
      description: "For patients who want changes that respect Asian facial structure and keep results soft and natural.",
      bestFor: ["Bridge definition", "Tip shaping", "Natural proportions"],
      href: "/face/asian-rhinoplasty-malaysia",
      image: "/images/Asian Rhinoplasty.jpg",
    },
    {
      title: "Revision Rhinoplasty",
      subtitle: "Corrective Surgery",
      category: "nose",
      description: "For patients who had previous nose surgery and want correction, improvement, or a safer result.",
      bestFor: ["Shape issues", "Breathing concerns", "Structural correction"],
      href: "/face/rhinoplasty-revision-malaysia",
      image: "/images/Revision Rhinoplasty.jpg",
    },
    {
      title: "Eyelid Surgery",
      subtitle: "Blepharoplasty",
      category: "eyes",
      description: "For patients who want brighter-looking eyes, reduced heaviness, or improved eyelid shape.",
      bestFor: ["Droopy eyelids", "Tired look", "Eyelid definition"],
      href: "/face/eyelid-surgery-malaysia",
      image: "/images/eyelid_reduction.png",
      featured: true,
    },
    {
      title: "Asian Eyelid Surgery",
      subtitle: "Double Eyelid Creation",
      category: "eyes",
      description: "For patients who want an eyelid change that still looks natural and suits Asian eyelid anatomy.",
      bestFor: ["Natural crease", "Gentle definition", "Open look"],
      href: "/face/asian-eyelid-surgery-malaysia",
      image: "/images/Asian Eyelid Surgery.jpg",
    },
    {
      title: "Brow Lift",
      subtitle: "Forehead Rejuvenation",
      category: "lift",
      description: "For patients who want a more open, rested upper face, especially when brows feel heavy or low.",
      bestFor: ["Heavy brows", "Tired expression", "Upper face lift"],
      href: "/face/brow-lift-malaysia",
      image: "/images/Brow Lift.jpg",
    },
    {
      title: "Face Lift",
      subtitle: "Full Facial Rejuvenation",
      category: "lift",
      description: "For patients who want comprehensive facial tightening and a more youthful appearance.",
      bestFor: ["Sagging skin", "Deep wrinkles", "Facial contour"],
      href: "/face/face-lift-malaysia",
      image: "/images/Face Lift.jpg",
      featured: true,
    },
    {
      title: "Neck Lift",
      subtitle: "Jawline Definition",
      category: "lift",
      description: "For patients who want a cleaner jawline and neck contour, especially with loose neck skin.",
      bestFor: ["Neck sagging", "Loose skin", "Jawline definition"],
      href: "/face/neck-lift-malaysia",
      image: "/images/Neck Lift.jpg",
    },
    {
      title: "Buccal Fat Removal",
      subtitle: "Facial Contouring",
      category: "contour",
      description: "For patients who feel their cheeks look too full and want a more defined facial contour.",
      bestFor: ["Cheek fullness", "Facial slimming", "Contour definition"],
      href: "/face/buccal-fat-removal-malaysia",
      image: "/images/Buccal Fat Removal.jpg",
    },
    {
      title: "Chin Augmentation",
      subtitle: "Profile Enhancement",
      category: "contour",
      description: "For patients who want a stronger chin profile and better facial balance.",
      bestFor: ["Weak chin", "Profile balance", "Jawline definition"],
      href: "/face/chin-augmentation-malaysia",
      image: "/images/Chin Augmentation.jpg",
    },
  ];

  // Filter categories
  const filterCategories = [
    { id: "all", label: "All Treatments" },
    { id: "nose", label: "Nose" },
    { id: "eyes", label: "Eyes" },
    { id: "lift", label: "Lifting" },
    { id: "contour", label: "Contouring" },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: "You want to reshape the nose", solution: "Rhinoplasty or Asian Rhinoplasty", href: "/face/rhinoplasty-malaysia" },
    { concern: "You had nose surgery before and want correction", solution: "Revision Rhinoplasty", href: "/face/rhinoplasty-revision-malaysia" },
    { concern: "Your eyes look tired or lids feel heavy", solution: "Eyelid Surgery or Asian Eyelid Surgery", href: "/face/eyelid-surgery-malaysia" },
    { concern: "You want overall facial lifting", solution: "Face Lift or Mini Face Lift", href: "/face/face-lift-malaysia" },
    { concern: "You want a more open upper face", solution: "Brow Lift", href: "/face/brow-lift-malaysia" },
    { concern: "Your jawline and neck need tightening", solution: "Neck Lift", href: "/face/neck-lift-malaysia" },
    { concern: "Your cheeks feel too full", solution: "Buccal Fat Removal", href: "/face/buccal-fat-removal-malaysia" },
    { concern: "Your chin feels weak in profile", solution: "Chin Augmentation", href: "/face/chin-augmentation-malaysia" },
  ];

  // Natural results points
  const naturalResults = [
    "Smoother transitions, not sharp edges",
    "Better balance, not an obvious change",
    "Results that fit your facial structure",
    "A plan that respects your age and expression",
  ];

  // Journey steps
  const journeySteps = [
    {
      num: "01",
      title: "Private Consultation",
      description: "We talk about what you see, what you feel, and what you hope for. We examine your facial anatomy and discuss realistic outcomes.",
    },
    {
      num: "02",
      title: "Personalized Plan",
      description: "A tailored recommendation based on your anatomy, goals, and safety. Clear explanation of procedure, recovery, and expectations.",
    },
    {
      num: "03",
      title: "Procedure Day",
      description: "Careful surgical technique focused on precision and natural results. Your comfort and safety are prioritized throughout.",
    },
    {
      num: "04",
      title: "Recovery & Follow-up",
      description: "Healing matters. You will receive aftercare instructions, check-ups, and support while your results settle.",
    },
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is facial cosmetic surgery?",
      answer: "Facial cosmetic surgery includes procedures that refine facial features, restore balance, or refresh appearance while preserving your natural identity.",
    },
    {
      question: "Is facial cosmetic surgery about changing how I look?",
      answer: "Most patients are not looking to change who they are. The goal is usually to look more refreshed, balanced, and confident while still looking like themselves.",
    },
    {
      question: "How do I know if facial surgery is right for me?",
      answer: "You do not need to be sure before booking. A consultation helps clarify whether surgery is suitable and which option, if any, fits your concerns.",
    },
    {
      question: "Do I need to decide on a procedure before a consultation?",
      answer: "No. Most patients start with a concern, not a procedure name. The consultation helps match concerns to the right options.",
    },
    {
      question: "Can multiple facial areas be treated together?",
      answer: "Some patients combine procedures to improve overall harmony, such as nose and chin balance or face and neck lifting. This depends on suitability and safety.",
    },
    {
      question: "Is facial cosmetic surgery permanent?",
      answer: "Surgical changes are long-lasting, but natural ageing continues. The goal is improvement, not stopping time.",
    },
    {
      question: "What if I am worried about making the wrong decision?",
      answer: "That concern is very common. Consultations are meant to provide clarity and honest guidance, not pressure to proceed.",
    },
    {
      question: "Is facial cosmetic surgery only for older patients?",
      answer: "No. Patients of different ages seek facial surgery for different reasons, from structural concerns to early signs of ageing.",
    },
  ];

  // Filter treatments
  const filteredTreatments = activeFilter === "all"
    ? facialTreatments
    : facialTreatments.filter((t) => t.category === activeFilter);

  return (
    <>
      <Head>
        <title>Facial Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics</title>
        <meta name="description" content="Explore facial cosmetic surgery options in Malaysia with Dr. Soma. From rhinoplasty to face lift, find procedures that enhance your natural beauty in a safe, professional environment." />
        <meta property="og:title" content="Facial Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics" />
        <meta property="og:description" content="Explore facial cosmetic surgery options in Malaysia. Natural-looking results that still look like you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl("/face")} />
        <meta property="og:image" content={getFullUrl("/images/face_lift.png")} />
        <link rel="canonical" href={getFullUrl("/face")} />
      </Head>

      {/* ==================== LUXURIOUS HERO SECTION ==================== */}
      <section
        className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden"
        ref={heroRef}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/face_background.png"
            fill
            alt="Facial Surgery Malaysia"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="flex containers w-full relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
            {/* Left Content */}
            <div className={`flex-1 max-w-2xl ${isVisible("section-0") ? "animate-slideInLeft" : "opacity-0"}`}>
              {/* Luxury Badge */}
              <div className={`inline-flex items-center gap-3 mb-8 ${isVisible("section-0") ? "animate-fadeInUp" : "opacity-0"}`}>
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                  Facial Surgery Hub
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>

              <h1 className={`text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-0"
              }`}>
                Facial Cosmetic Surgery
                <span className="block text-primary font-semibold mt-2">in Malaysia</span>
              </h1>

              <p className={`text-white text-lg md:text-xl font-light leading-relaxed mb-4 ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-0"
              }`}>
                A calm place to explore facial changes that still look like you
              </p>

              <p className={`text-white text-base leading-relaxed mb-8 max-w-xl ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-0"
              }`}>
                Your face is personal. Most patients want something simple: to look like themselves again, just more refreshed, balanced, and confident.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 mb-8 ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}>
                <Link
                  href="/contact-us"
                  className="group relative bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Book a Private Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
                <Link
                  href="https://wa.me/60142616007"
                  className="group border border-white/20 hover:border-primary/50 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 hover:bg-white/5"
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Link>
              </div>

              {/* Disclaimer */}
              <p className={`text-white/30 text-xs italic ${
                isVisible("section-0") ? "animate-fadeInUp delay-500" : "opacity-0"
              }`}>
                Every face is different. Results vary. A consultation is needed to confirm suitability, safety, and the best approach.
              </p>
            </div>

            {/* Right Side - Stats Card */}
            <div className={`flex-1 hidden lg:flex justify-end ${
              isVisible("section-0") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/face_image.png"
                    fill
                    alt="Facial Surgery"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                  {/* Floating Stats Cards - Inside Image */}
                  <div className="absolute top-6 left-6 bg-white/15 backdrop-blur-xl rounded-2xl p-5 border border-white/20 animate-float z-10">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-1">30+</p>
                      <p className="text-white text-sm">Years Experience</p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/15 backdrop-blur-xl rounded-2xl p-5 border border-white/20 animate-float z-10" style={{ animationDelay: "1s" }}>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white mb-1">1000+</p>
                      <p className="text-white text-sm">Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounceSoft">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE SOMA SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={trustRef}>
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
            {/* Left Content */}
            <div className={`flex-1 ${isVisible("section-1") ? "animate-slideInLeft" : "opacity-0"}`}>
              <div className="sticky top-32">
                <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-header-black text-3xl lg:text-4xl font-semibold leading-tight mb-6">
                  Why patients choose Soma for
                  <span className="text-primary block">facial surgery in Malaysia</span>
                </h2>

                <p className="text-para-black text-lg mb-6">
                  When people search facial cosmetic surgery in Malaysia, they usually feel two things at once:
                </p>

                <div className="flex gap-8 mb-8">
                  <div className="flex-1 border-l-2 border-primary pl-4">
                    <p className="text-header-black font-semibold">Hope</p>
                    <p className="text-para-black text-sm">for a better reflection</p>
                  </div>
                  <div className="flex-1 border-l-2 border-gray-200 pl-4">
                    <p className="text-header-black font-semibold">Worry</p>
                    <p className="text-para-black text-sm">about looking unnatural</p>
                  </div>
                </div>

                <p className="text-para-black">
                  We take those fears seriously. Here is how we build trust:
                </p>
              </div>
            </div>

            {/* Right - Trust Points */}
            <div className={`flex-1 ${isVisible("section-1") ? "animate-slideInRight" : "opacity-0"}`}>
              <div className="space-y-6">
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
                    className={`bg-secondary/50 rounded-xl px-5 py-4 text-center ${
                      isVisible("section-1") ? "animate-scaleUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <p className="text-header-black text-sm font-medium">{badge.label}</p>
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
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                Our Expertise
              </span>
              <h2 className="text-header-black text-3xl lg:text-4xl font-semibold mb-4">
                Explore <span className="text-primary">Facial Treatments</span>
              </h2>
              <p className="text-para-black text-lg">
                Each treatment below has its own full page with details, recovery, and FAQs.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className={`flex flex-wrap justify-center gap-3 ${isVisible("section-2") ? "animate-fadeInUp delay-200" : "opacity-0"}`}>
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-white text-para-black hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Treatments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => (
                <Link
                  key={index}
                  href={treatment.href}
                  className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    treatment.featured ? "md:col-span-2 lg:col-span-1" : ""
                  } ${isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Featured Badge */}
                  {treatment.featured && (
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Popular Choice
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={treatment.image}
                      fill
                      alt={treatment.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-6">
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                        {filterCategories.find((c) => c.id === treatment.category)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-header-black text-xl font-bold mb-1 group-hover:text-primary transition-colors normal-case">
                        {treatment.title}
                      </h3>
                      <p className="text-primary text-sm font-medium">{treatment.subtitle}</p>
                    </div>

                    <p className="text-para-black text-sm leading-relaxed mb-5">
                      {treatment.description}
                    </p>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {treatment.bestFor.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-secondary text-header-black text-xs px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="text-primary font-semibold text-sm">View Treatment</span>
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
      <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden" ref={guideRef}>
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
              <h2 className="text-header-black text-3xl lg:text-4xl font-semibold mb-4">
                Not sure which facial procedure
                <span className="text-primary block">fits your concern?</span>
              </h2>
              <p className="text-para-black text-lg">
                This quick guide helps you choose the right page.
              </p>
            </div>

            {/* Decision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {decisionGuide.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                    isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Number */}
                  <div className="absolute top-6 right-6 text-primary/10 text-5xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <p className="text-header-black text-lg mb-4 pr-12 font-medium">{item.concern}</p>
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
                    src="/images/face_lift_image.png"
                    fill
                    alt="Natural Results"
                    className="object-cover"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20 -z-10"></div>

                {/* Quote Card */}
                <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] animate-float">
                  <p className="text-header-black text-lg font-medium italic mb-3">
                    &ldquo;You will still look like you.&rdquo;
                  </p>
                  <p className="text-primary text-sm font-semibold">Just more confident in your reflection.</p>
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
                <span className="text-primary block">in facial surgery</span>
              </h2>

              <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
                <p className="text-header-black text-lg font-medium mb-2">
                  Natural does not mean &ldquo;no change.&rdquo;
                </p>
                <p className="text-para-black">
                  Natural means people notice you look well, not that you had surgery.
                </p>
              </div>

              <p className="text-para-black text-lg font-medium mb-6">Our goal is:</p>

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
                Facial Cosmetic Surgery <span className="text-primary">FAQs</span>
              </h2>
              <p className="text-para-black text-lg max-w-2xl mx-auto">
                Find answers to common questions about facial cosmetic surgery procedures in Malaysia.
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
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
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

            {/* Bottom CTA */}
            <div className={`text-center ${isVisible("section-6") ? "animate-fadeInUp delay-500" : "opacity-0"}`}>
              <p className="text-para-black mb-4">Still have questions?</p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
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
              Ready to begin a
              <span className="text-primary font-semibold block mt-2">private consultation?</span>
            </h2>

            <p className={`text-white/60 text-lg mb-10 max-w-xl mx-auto ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}>
              Take the first step towards feeling more confident. We are here to listen, guide, and support your journey.
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

            {/* Trust Note */}
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

export default FaceHub;
