import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";

const BodyHub = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const decisionRef = useRef<HTMLDivElement>(null);
  const meaningRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
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

    const sections = [heroRef, treatmentsRef, decisionRef, meaningRef, whyUsRef, journeyRef, faqRef, ctaRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  // Treatment categories with data
  const treatmentCategories = [
    {
      category: "Liposuction Treatments",
      description: "Target stubborn fat that doesn't respond to diet and exercise",
      categoryImage: "/images/liposuction_body.jpg",
      treatments: [
        {
          title: "Liposuction",
          area: "Full Body",
          description: "Remove stubborn fat pockets from multiple areas",
          href: "/body/liposuction-malaysia",
          image: "/images/liposuction_body.jpg",
          tag: "Most Popular",
        },
        {
          title: "Arm Liposuction",
          area: "Upper Arms",
          description: "Sculpt and define your arm contour",
          href: "/body/liposuction-arms-malaysia",
          image: "/images/arm_liposuction.jpg",
          tag: null,
        },
        {
          title: "Stomach Liposuction",
          area: "Abdomen",
          description: "Achieve a flatter, more defined waistline",
          href: "/body/liposuction-stomach-malaysia",
          image: "/images/stomach_liposuction.jpg",
          tag: null,
        },
        {
          title: "Thigh Liposuction",
          area: "Inner & Outer Thighs",
          description: "Create smoother leg silhouette",
          href: "/body/liposuction-thighs-malaysia",
          image: "/images/thigh_liposuction.jpg",
          tag: null,
        },
        {
          title: "Back Liposuction",
          area: "Back & Bra Line",
          description: "Eliminate back rolls for better clothing fit",
          href: "/body/liposuction-back-malaysia",
          image: "/images/back_liposuction.jpg",
          tag: null,
        },
        {
          title: "Chin Liposuction",
          area: "Chin & Jawline",
          description: "Define your jawline and eliminate double chin",
          href: "/body/liposuction-chin-malaysia",
          image: "/images/chin_liposuction.jpg",
          tag: "Quick Recovery",
        },
      ],
    },
    {
      category: "Skin Tightening & Lifts",
      description: "Restore firmness after weight loss or pregnancy",
      categoryImage: "/images/tummy_tuck_new.jpg",
      treatments: [
        {
          title: "Tummy Tuck",
          area: "Abdomen",
          description: "Tighten skin and restore core definition",
          href: "/body/tummy-tuck-malaysia",
          image: "/images/tummy_tuck_new.jpg",
          tag: "Most Popular",
        },
        {
          title: "Mini Tummy Tuck",
          area: "Lower Abdomen",
          description: "Targeted improvement for lower belly",
          href: "/body/mini-tummy-tuck-malaysia",
          image: "/images/mini_tummy_tuck.jpg",
          tag: "Less Invasive",
        },
        {
          title: "Arm Lift",
          area: "Upper Arms",
          description: "Remove excess skin for toned arms",
          href: "/body/arm-lift-malaysia",
          image: "/images/arm_lift.jpg",
          tag: null,
        },
        {
          title: "Thigh Lift",
          area: "Thighs",
          description: "Tighten loose thigh skin for comfort",
          href: "/body/thigh-lift-malaysia",
          image: "/images/thigh_lift.jpg",
          tag: null,
        },
        {
          title: "Body Lift",
          area: "Lower Body",
          description: "Comprehensive transformation after weight loss",
          href: "/body/body-lift-malaysia",
          image: "/images/body_lift.jpg",
          tag: "Full Transformation",
        },
        {
          title: "Belt Lipectomy",
          area: "360° Waistline",
          description: "Complete circumferential body contouring",
          href: "/body/belt-lipectomy-malaysia",
          image: "/images/belt_lipectomy.jpg",
          tag: null,
        },
      ],
    },
    {
      category: "Enhancement & Sculpting",
      description: "Add volume and definition using natural techniques",
      categoryImage: "/images/six_pack_enhancement.jpg",
      treatments: [
        {
          title: "Fat Transfer",
          area: "Various Areas",
          description: "Natural volume enhancement using your own fat",
          href: "/body/fat-transfer-malaysia",
          image: "/images/fat_transfer.jpg",
          tag: "Natural Results",
        },
        {
          title: "Fat Grafting Buttocks",
          area: "Buttocks",
          description: "Enhance shape and fullness naturally",
          href: "/body/fat-grafting-buttock-malaysia",
          image: "/images/fat_transfer.jpg",
          tag: "Popular Choice",
        },
        {
          title: "Six Pack Enhancement",
          area: "Abdomen",
          description: "Sculpt defined abdominal muscles",
          href: "/body/six-pack-enhancement-malaysia",
          image: "/images/six_pack_enhancement.jpg",
          tag: "For Athletes",
        },
      ],
    },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: "Stubborn fat pockets that won't go away", solution: "Liposuction", href: "/body/liposuction-malaysia" },
    { concern: "Loose skin after weight loss or pregnancy", solution: "Tummy Tuck / Body Lift", href: "/body/tummy-tuck-malaysia" },
    { concern: "Arms feel heavy or loose", solution: "Arm Liposuction + Arm Lift", href: "/body/arm-lift-malaysia" },
    { concern: "Thigh skin rubbing or loose skin", solution: "Thigh Liposuction + Thigh Lift", href: "/body/thigh-lift-malaysia" },
    { concern: "Double chin hiding jawline", solution: "Chin Liposuction", href: "/body/liposuction-chin-malaysia" },
    { concern: "Want natural volume using your own fat", solution: "Fat Transfer", href: "/body/fat-transfer-malaysia" },
    { concern: "Want defined abs and sporty look", solution: "Six Pack Enhancement", href: "/body/six-pack-enhancement-malaysia" },
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is body contouring?",
      answer: "Body contouring is a term used to describe treatments that shape specific areas of the body by targeting stubborn fat or loose skin, often after weight loss.",
    },
    {
      question: "Does body contouring mean the same thing as weight loss surgery?",
      answer: "No. Body contouring does not help you lose weight. It is a technique that focuses on improving proportions and shaping after the weight has stabilized.",
    },
    {
      question: "Who is body contouring suitable for?",
      answer: "Body contouring can be used by people who have reached their ideal weight, but are still bothered by some areas of the body that don't respond to diet and exercise.",
    },
    {
      question: "Does my weight need to be ideal before I can have body contouring done?",
      answer: "The best thing to do is to maintain a weight that is close to your ideal. Weight changes that are large after surgery may affect the results.",
    },
    {
      question: "What body contouring procedure do I need?",
      answer: "It is not necessary to make a decision on your own. Consultation helps to determine if skin tightening or fat removal is the best option.",
    },
    {
      question: "Do I need liposuction or a tummy tuck?",
      answer: "Liposuction can be helpful if the primary concern is excess fat. A tuck or a lift may be recommended if loose skin is the primary concern. Many patients require a combination that is personalised.",
    },
    {
      question: "Can body contouring appear natural?",
      answer: "Yes. Body contouring can be done to achieve a smooth, balanced result that fits your natural body shape.",
    },
    {
      question: "Does body contouring last forever?",
      answer: "The fat removed will not return. However, the results are dependent on maintaining a healthy weight and lifestyle.",
    },
    {
      question: "Can multiple areas of the body be treated at once?",
      answer: "Some patients may need to treat more than one part, depending on the patient's health and safety. This is discussed in consultation.",
    },
    {
      question: "Is body contouring a safe procedure?",
      answer: "All surgical procedures are not without risk. Safety is dependent on a thorough assessment, expert surgical planning and proper aftercare.",
    },
    {
      question: "How will body contouring affect the fit of my clothes?",
      answer: "After contouring, many patients report improved comfort and fit of clothing.",
    },
    {
      question: "What if I'm not sure if I'm ready for surgery?",
      answer: "This is perfectly fine. Consultations can only be for information, and not to pressure you into anything.",
    },
    {
      question: "Does body contouring work only on women?",
      answer: "No. Both men and women can benefit from body contouring, depending on their goals and anatomies.",
    },
    {
      question: "What is the first step to begin body contouring?",
      answer: "First, you will need to have a consultation with a professional in order to determine your goals and concerns. You should also know what is realistic and safe for your body.",
    },
  ];

  // Why choose us points
  const whyChooseUs = [
    "Natural-looking results that match your proportions",
    "Prioritizing safety in all decisions",
    "Simple and clear explanations without any pressure",
    "Privacy is respected at all times",
    "Support that follows you throughout your healing",
  ];

  // Journey steps
  const journeySteps = [
    { num: 1, title: "Private Consultation", description: "We listen to what you have to say and what you would like to feel. We listen first." },
    { num: 2, title: "A Plan Made for You", description: "We look at skin quality, fat distribution and what looks natural and safe." },
    { num: 3, title: "Procedure Day", description: "Attention to detail, careful technique, and comfort-focused care." },
    { num: 4, title: "Recovery & Follow-up", description: "Healing is part of what you get. You receive support, instructions and review visits." },
  ];

  // What body contouring means
  const contouringMeans = [
    "Feeling comfortable in your clothing",
    "Enjoying photos again",
    "Moving with confidence",
    "Your hard work reflected in the shape you are in",
  ];

  return (
    <>
      <Head>
        <title>Body Contouring in Malaysia | Dr. Soma Clinical Aesthetics</title>
        <meta name="description" content="Explore body contouring options in Malaysia with Dr. Soma Clinical Aesthetics. From liposuction to tummy tuck, find the right procedure for your goals in a calm, professional environment." />
        <meta property="og:title" content="Body Contouring in Malaysia | Dr. Soma Clinical Aesthetics" />
        <meta property="og:description" content="Explore body contouring options in Malaysia with Dr. Soma Clinical Aesthetics. From liposuction to tummy tuck, find the right procedure for your goals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl("/body")} />
        <meta property="og:image" content={getFullUrl("/images/liposuction.png")} />
        <link rel="canonical" href={getFullUrl("/body")} />
      </Head>

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative bg-[url(/images/body_background.png)] bg-no-repeat bg-cover bg-center py-20 lg:py-32 overflow-hidden"
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center w-full">
            {/* Left Content */}
            <div className={`flex-1 flex flex-col gap-5 max-w-2xl ${
              isVisible("section-0") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <span className={`inline-block bg-primary text-white text-sm font-bold px-5 py-2 rounded-full w-fit uppercase tracking-wide ${
                isVisible("section-0") ? "animate-fadeInUp" : "opacity-0"
              }`}>
                Body Contouring Hub
              </span>

              <h1 className={`text-primary drop-shadow-lg ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-0"
              }`}>
                Body Contouring <span className="text-white">in Malaysia</span>
              </h1>

              <p className={`text-white/90 text-lg lg:text-xl font-medium ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-0"
              }`}>
                Easy to understand, explore, and take action with confidence
              </p>

              <p className={`text-white/80 text-sm lg:text-base leading-relaxed ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-0"
              }`}>
                Body changes happen. After pregnancy. After weight loss. After stress and a busy life. You may feel that your body is not what you want it to be when you look in the reflection. The Body Hub is a calm place to start. No pressure. No confusing words. Clear options, explained simply, to help you choose the best path forward.
              </p>

              <div className={`flex flex-wrap gap-4 mt-4 ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}>
                <Link
                  href="/contact-us"
                  className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide text-sm animate-pulseGlow"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="https://wa.me/60142616007"
                  className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Link>
              </div>

              <p className={`text-white/50 text-xs lg:text-sm italic mt-2 ${
                isVisible("section-0") ? "animate-fadeInUp delay-500" : "opacity-0"
              }`}>
                Body contouring is a personal thing. Results can vary. Consultation is required to determine what is suitable and safe for you.
              </p>
            </div>

            {/* Right Image */}
            <div className={`flex-1 hidden lg:flex justify-end ${
              isVisible("section-0") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative">
                <Image
                  src="/images/liposuction.png"
                  width={450}
                  height={400}
                  alt="Body Contouring Malaysia"
                  className="rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl px-8 py-6 animate-float">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-bounceSoft">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-header-black text-xl">30+ Years</p>
                      <p className="text-para-black text-sm">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DISCOVER BODY TREATMENTS SECTION ==================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-para-white" ref={treatmentsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-16 w-full">
            {/* Section Header */}
            <div className={`text-center transition-all duration-700 ${
              isVisible("section-1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                Our Treatments
              </span>
              <h2 className="text-header-black mb-4">
                Discover <span className="text-primary">Body Treatments</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                Each treatment has its own dedicated page with full details, recovery information, and FAQs
              </p>
            </div>

            {/* Treatment Categories */}
            {treatmentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`transition-all duration-700 ${
                isVisible("section-1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                {/* Category Header with Image */}
                <div className="flex flex-col lg:flex-row gap-8 mb-10 bg-secondary rounded-2xl overflow-hidden">
                  {/* Category Image */}
                  <div className="relative w-full lg:w-[300px] h-[200px] lg:h-auto flex-shrink-0">
                    <Image
                      src={category.categoryImage}
                      fill
                      alt={category.category}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/50 hidden lg:block"></div>
                  </div>

                  {/* Category Info */}
                  <div className="flex flex-col justify-center p-6 lg:py-8 lg:pr-8 lg:pl-0">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                      {categoryIndex === 0 ? "Fat Removal" : categoryIndex === 1 ? "Skin Restoration" : "Body Enhancement"}
                    </span>
                    <h3 className="text-header-black text-2xl lg:text-3xl font-bold mb-3">
                      {category.category}
                    </h3>
                    <p className="text-para-black mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <span>{category.treatments.length} Treatments Available</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Treatment Cards - Professional Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.treatments.map((treatment, index) => (
                    <Link
                      key={index}
                      href={treatment.href}
                      className="group block"
                    >
                      {/* Card Container */}
                      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/20 group-hover:-translate-y-1 h-full flex flex-col">

                        {/* Image Section with Padding */}
                        <div className="p-4">
                          <div className="relative h-[200px] rounded-xl overflow-hidden">
                            <Image
                              src={treatment.image}
                              fill
                              alt={treatment.title}
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Tag Badge */}
                            {treatment.tag && (
                              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                {treatment.tag}
                              </span>
                            )}

                            {/* Area Badge - Using website color scheme */}
                            <span className="absolute top-3 right-3 bg-secondary text-header-black text-[10px] font-semibold px-3 py-1.5 rounded-full">
                              {treatment.area}
                            </span>
                          </div>
                        </div>

                        {/* Content Section with More Padding */}
                        <div className="px-6 pb-6 pt-2 flex flex-col flex-grow">
                          {/* Title */}
                          <h4 className="text-header-black text-lg font-bold mb-3 group-hover:text-primary transition-colors normal-case">
                            {treatment.title}
                          </h4>

                          {/* Description */}
                          <p className="text-para-black text-sm leading-relaxed mb-5 flex-grow">
                            {treatment.description}
                          </p>

                          {/* CTA Button */}
                          <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-4 border-t border-gray-100">
                            <span>View Treatment</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* View All CTA */}
            <div className={`text-center transition-all duration-700 ${
              isVisible("section-1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <p className="text-para-black mb-4">Can&apos;t find what you&apos;re looking for?</p>
              <Link
                href="/contact-us"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DECISION GUIDE SECTION ==================== */}
      <section className="py-16 lg:py-20 bg-white" ref={decisionRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col w-full">
            {/* Section Header */}
            <div className={`text-center mb-10 ${
              isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              <h2 className="text-header-black mb-3">
                Unsure Which Treatment <span className="text-primary">You Need?</span>
              </h2>
              <p className="text-para-black">
                Use this guide to find the right page for your concern
              </p>
            </div>

            {/* Decision Guide Cards */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {decisionGuide.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`group bg-para-white rounded-xl px-6 py-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden ${
                      isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover line animation */}
                    <div className="absolute top-0 left-0 h-[3px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>

                    {/* Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>

                    {/* Concern Text */}
                    <p className="text-header-black text-sm leading-relaxed mb-5 flex-grow">
                      {item.concern}
                    </p>

                    {/* Solution Link */}
                    <div className="pt-4 border-t border-gray-100 flex-shrink-0">
                      <span className="text-primary font-semibold text-sm group-hover:underline">
                        {item.solution}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`text-center mt-14 ${
              isVisible("section-2") ? "animate-fadeInUp delay-700" : "opacity-0"
            }`}>
              <Link
                href="/contact-us"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT BODY CONTOURING MEANS SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-secondary overflow-hidden" ref={meaningRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full">
            {/* Left Content */}
            <div className={`flex-1 flex flex-col gap-6 ${
              isVisible("section-3") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                What Body Contouring <span className="text-primary">Really Means</span>
              </h2>

              <p className="text-para-black text-lg font-medium">
                We do not chase extremes. We are focused on balance.
              </p>

              <p className="text-para-black">
                Body contouring does not require perfection. It is about:
              </p>

              <div className="space-y-4">
                {contouringMeans.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 ${
                      isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-header-black">{item}</p>
                  </div>
                ))}
              </div>

              <p className={`text-para-black mt-4 ${
                isVisible("section-3") ? "animate-fadeInUp delay-600" : "opacity-0"
              }`}>
                Some people find that a small adjustment can bring a lot of relief. Others are closing a chapter after weight loss or maternity.
              </p>
            </div>

            {/* Right Image */}
            <div className={`flex-1 ${
              isVisible("section-3") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative group">
                <Image
                  src="/images/body_lift.jpg"
                  width={500}
                  height={400}
                  alt="Body Contouring"
                  className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden" ref={whyUsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full">
            {/* Left Image */}
            <div className={`flex-1 order-2 lg:order-1 ${
              isVisible("section-4") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <div className="relative group">
                <Image
                  src="/images/dr_soma_pic.png"
                  width={500}
                  height={450}
                  alt="Dr. Soma Clinical Aesthetics"
                  className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`flex-1 flex flex-col gap-6 order-1 lg:order-2 ${
              isVisible("section-4") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                Why Patients Choose <span className="text-primary">Soma Body Contouring</span>
              </h2>

              <p className="text-para-black">
                When people look up body contouring Malaysia, they are looking for more than just a list. They want to be trusted.
              </p>

              <p className="text-header-black font-semibold">What we focus on:</p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${
                      isVisible("section-4") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 hover:bg-primary/20 transition-colors">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-header-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== YOUR JOURNEY SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-para-white" ref={journeyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-10 lg:gap-14 w-full">
            {/* Section Header */}
            <div className={`text-center ${
              isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                Your Journey, <span className="text-primary">Step by Step</span>
              </h2>
            </div>

            {/* Journey Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-md text-center relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg animate-bounceSoft">
                    {step.num}
                  </div>
                  <h4 className="text-header-black font-bold mb-3 normal-case">{step.title}</h4>
                  <p className="text-para-black text-sm">{step.description}</p>

                  {/* Connector line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-20 lg:py-28 bg-secondary" ref={faqRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto">
            {/* Section Header */}
            <div className={`text-center transition-all duration-700 ${
              isVisible("section-6") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                Got Questions?
              </span>
              <h2 className="text-header-black mb-4">
                Frequently <span className="text-primary">Asked Questions</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                Find answers to common questions about body contouring procedures
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className={`space-y-4 transition-all duration-700 ${
              isVisible("section-6") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "shadow-lg border-2 border-primary/20"
                      : "shadow-sm border border-gray-100 hover:shadow-md"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6 text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={`font-semibold pr-6 text-sm lg:text-base transition-colors ${
                      openIndex === index ? "text-primary" : "text-header-black"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary"
                    }`}>
                      {openIndex === index ? "−" : "+"}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}>
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-para-black text-sm lg:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-primary overflow-hidden" ref={ctaRef}>
        <div className="flex containers w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-white mb-4 ${
              isVisible("section-7") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              Ready to Begin a Simple Discussion?
            </h2>

            <p className={`text-white/90 mb-8 ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}>
              You do not have to make a decision today. Explore the pages above and then schedule a private consultation when you are ready.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 ${
              isVisible("section-7") ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg uppercase tracking-wide text-sm hover:shadow-2xl"
              >
                Book a Consultation
              </Link>
              <Link
                href="https://wa.me/60142616007"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyHub;
