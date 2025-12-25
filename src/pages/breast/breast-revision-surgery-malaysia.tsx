import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BreastRevisionSurgeryMalaysia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate')
            if (id) {
              setVisibleSections((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  const faqs = [
    { question: "What is breast revision surgery?", answer: "Breast revision is corrective surgery performed after previous breast implant or breast surgery to fix complications, improve breast shape, correct implant position, or replace/remove implants." },
    { question: "How do I know if I need breast revision?", answer: "Common signs include hardness, pain, visible implant shift, asymmetry, rippling, abnormal breast shape, or dissatisfaction with size and contour. A surgical evaluation confirms the cause." },
    { question: "Is breast revision more complex than first-time breast augmentation?", answer: "Yes. Revision surgery typically involves working with scar tissue, pocket changes, and tissue stretching from prior surgery, making planning and technique more demanding." },
    { question: "Does revision surgery always require new implants?", answer: "No. Revision may involve implant exchange, implant removal, or reshaping without implants depending on your goals and medical findings." },
    { question: "What is capsular contracture and can it be fixed?", answer: "Capsular contracture is tightening and hardening of scar tissue around the implant that can cause pain and distortion. It can be treated with capsule release or removal and often implant exchange or pocket adjustment." },
    { question: "When will I see results after breast revision?", answer: "You may see an early improvement immediately, but swelling and settling take time. Most patients see stable progress at 4–6 weeks, with final refinement from 3–6 months." },
    { question: "Will a breast lift be needed during revision?", answer: "If sagging, nipple position issues, or stretched skin is present, a lift may be recommended to achieve a natural, youthful contour after correction." },
    { question: "Are scars worse with revision surgery?", answer: "Scars depend on the revision steps required. Dr. Soma typically uses existing scars when possible and places incisions strategically for the best healing outcome." },
    { question: "Is breast revision surgery safe?", answer: "When performed by a certified plastic surgeon in an appropriate medical facility, breast revision is generally safe. Risks exist like all surgeries and are explained during consultation. The safest plan is always based on a full assessment of the implant, capsule, pocket stability, and your goals, with the revision technique chosen to match the specific problem being corrected." },
    { question: "How many revision surgeries can a person have?", answer: "It depends on tissue condition, implant history, and the underlying issue. The goal is to plan a stable, long-term correction to reduce the need for repeated surgeries." }
  ]

  const revisionTypes = [
    { icon: "refresh-cw", title: "Implant Exchange", desc: "Replacing old implants." },
    { icon: "scissors", title: "Capsulectomy", desc: "Treating contracture." },
    { icon: "move", title: "Pocket Repair", desc: "Fixing malposition/shift." },
    { icon: "arrow-up-circle", title: "Revision Lift", desc: "Correcting sagging (Mastopexy)." }
  ]

  const candidateChecklist = [
    "Unsatisfied with prior result",
    "Pain or hardness (Contracture)",
    "Visible implant shift",
    "Suspected rupture"
  ]

  return (
    <>
      <Head>
        <title>Breast Revision Surgery Malaysia | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Certified Plastic Surgeon performed Breast Revision in Malaysia. Correct capsular contracture, implant malposition, and asymmetry. Restore natural balance." />
      </Head>

      <style jsx global>{`
        .breast-revision-page ::selection {
          background-color: #FE7623;
          color: white;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(254, 118, 35, 0.2); }
          50% { box-shadow: 0 0 20px rgba(254, 118, 35, 0.4); }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(254, 118, 35, 0.3); }
          50% { border-color: rgba(254, 118, 35, 0.8); }
        }

        @keyframes textGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(254, 118, 35, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .animate-border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -15px rgba(254, 118, 35, 0.15);
          border-color: #FE7623;
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .hover-glow {
          transition: all 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 40px rgba(254, 118, 35, 0.35);
        }

        .hover-scale {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-border-orange {
          transition: all 0.3s ease;
        }
        .hover-border-orange:hover {
          border-color: #FE7623;
        }

        .hover-text-orange {
          transition: color 0.3s ease;
        }
        .hover-text-orange:hover {
          color: #FE7623;
        }

        .hover-icon-bounce:hover svg {
          animation: bounce 0.5s ease-in-out;
        }

        .hover-underline-animation {
          position: relative;
        }
        .hover-underline-animation::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #FE7623;
          transition: width 0.3s ease;
        }
        .hover-underline-animation:hover::after {
          width: 100%;
        }

        .hover-bg-orange {
          transition: all 0.3s ease;
        }
        .hover-bg-orange:hover {
          background-color: #FE7623;
          color: white;
        }

        .hover-rotate {
          transition: transform 0.4s ease;
        }
        .hover-rotate:hover {
          transform: rotate(5deg);
        }

        .group-hover-slide {
          transition: transform 0.3s ease;
        }
        .group:hover .group-hover-slide {
          transform: translateX(5px);
        }

        .magnetic-hover {
          transition: transform 0.2s ease-out;
        }

        .parallax-card {
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }
        .parallax-card:hover {
          transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px);
        }

        .gradient-text {
          background: linear-gradient(135deg, #FE7623, #ff9a5a, #FE7623);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGradient 3s ease infinite;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(#FE7623 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          opacity: 0.03;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }

        .accordion-content {
          transition: grid-template-rows 0.3s ease-out;
          display: grid;
          grid-template-rows: 0fr;
        }
        .accordion-content > div { overflow: hidden; }
        .accordion-content.active { grid-template-rows: 1fr; }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Button press effect */
        .btn-press {
          transition: transform 0.1s ease;
        }
        .btn-press:active {
          transform: scale(0.97);
        }

        /* Image zoom on hover */
        .img-zoom {
          overflow: hidden;
        }
        .img-zoom img {
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .img-zoom:hover img {
          transform: scale(1.1);
        }

        /* Card shine effect */
        .card-shine {
          position: relative;
          overflow: hidden;
        }
        .card-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }
        .card-shine:hover::before {
          left: 100%;
        }

        /* Ripple effect */
        .ripple {
          position: relative;
          overflow: hidden;
        }
        .ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(254, 118, 35, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }
        .ripple:hover::after {
          width: 300px;
          height: 300px;
        }
      `}</style>

      <main className="breast-revision-page bg-white text-header-black">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 px-6 overflow-hidden border-b border-zinc-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/40 via-white to-white -z-10"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">

            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-para-black text-xs font-semibold mb-8 uppercase tracking-wider animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300 cursor-default" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse-slow"></span>
                Certified Plastic Surgeon
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-header-black leading-[1.05] mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Restore Shape.</span> <br />
                <span className="text-para-black hover:text-[#FE7623] transition-colors duration-300 cursor-default">Fix Complications.</span>
              </h1>
              <p className="text-lg text-para-black leading-relaxed mb-8 max-w-lg animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Breast revision is not just a &ldquo;repeat surgery.&rdquo; It is a complex corrective procedure designed to fix implant problems, restore symmetry, and achieve long-term stability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/" className="btn-press inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/30 group animate-glow">
                  <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation (WhatsApp)
                </a>
                <a href="#problems" className="btn-press inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-header-black px-8 py-4 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                  View Key Problems
                  <svg className="w-5 h-5 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image
                src="/breast/breast-revision.avif"
                alt="Aesthetic Medical Precision"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent group-hover:from-zinc-900/70 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white transform group-hover:translate-y-[-5px] transition-transform duration-500">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FE7623] mb-2 animate-pulse-slow">Precision Correction</p>
                <p className="text-lg font-medium leading-snug max-w-sm group-hover:text-white/90 transition-colors duration-300">
                  Addressing the root cause—whether capsule, pocket, or tissue—for lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Context */}
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-header-black mb-6">What Is Breast Revision?</h2>
                <p className="text-para-black text-sm leading-relaxed mb-6">
                  Breast revision surgery is a corrective procedure performed after previous breast augmentation, lift, or reconstruction. Unlike primary surgery, it deals with scar tissue, altered anatomy, and specific complications.
                </p>
                <p className="text-para-black text-sm leading-relaxed">
                  The goal is to address the <span className="text-header-black font-medium">root cause</span> of dissatisfaction—not just change size.
                </p>
              </div>
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {revisionTypes.map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex items-start gap-3 hover:border-[#FE7623] hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300 cursor-pointer group card-shine stagger-${i + 1}`} style={{animationDelay: `${i * 0.1}s`}}>
                      <div className="p-1.5 bg-white rounded-md border border-zinc-200 shadow-sm text-[#FE7623] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon === 'refresh-cw' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                          {item.icon === 'scissors' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />}
                          {item.icon === 'move' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />}
                          {item.icon === 'arrow-up-circle' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />}
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-header-black group-hover:text-[#FE7623] transition-colors duration-300">{item.title}</h4>
                        <p className="text-xs text-para-black mt-1 group-hover:text-header-black transition-colors duration-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Problems Section */}
        <section id="problems" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="problems-header" className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible('problems-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-header-black mb-4">Key Revision Problems & Solutions</h2>
              <p className="text-para-black text-sm">Identifying the specific issue is the first step to a successful correction.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Capsular Contracture */}
              <div data-animate="problem-1" className={`bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#FE7623] hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group md:col-span-2 cursor-pointer card-shine parallax-card ${isVisible('problem-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-orange-50 text-[#FE7623] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#FE7623] group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                  </div>
                  <span className="text-xs font-bold text-zinc-300 uppercase group-hover:text-[#FE7623] transition-colors duration-300">Problem 01</span>
                </div>
                <h3 className="text-lg font-bold text-header-black mb-3 group-hover:text-[#FE7623] transition-colors duration-300">Capsular Contracture Correction</h3>
                <p className="text-sm text-para-black leading-relaxed mb-6 max-w-xl">
                  When the scar tissue capsule tightens around the implant, causing hardness, pain, or distortion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100 pt-6">
                  <div>
                    <span className="block text-xs font-semibold text-header-black mb-2">Symptoms</span>
                    <ul className="text-xs text-para-black space-y-1">
                      <li>• Hardness or firmness</li>
                      <li>• Pain/Tightness</li>
                      <li>• Visible distortion</li>
                    </ul>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#FE7623] mb-2">Correction Strategy</span>
                    <ul className="text-xs text-para-black space-y-1">
                      <li>• Capsulectomy (Removal)</li>
                      <li>• Implant exchange</li>
                      <li>• Pocket site change</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Malposition */}
              <div data-animate="problem-2" className={`bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#FE7623] hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group cursor-pointer card-shine parallax-card ${isVisible('problem-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-50 text-header-black group-hover:text-white group-hover:bg-[#FE7623] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l4 4m8 8l4 4M4 20l4-4m8-8l4-4m-8 4a4 4 0 100 8 4 4 0 000-8z" /></svg>
                  </div>
                  <span className="text-xs font-bold text-zinc-300 uppercase group-hover:text-[#FE7623] transition-colors duration-300">Problem 02</span>
                </div>
                <h3 className="text-lg font-bold text-header-black mb-3 group-hover:text-[#FE7623] transition-colors duration-300">Implant Malposition</h3>
                <p className="text-sm text-para-black leading-relaxed mb-4">
                  Implants shifting due to gravity or pocket weakness. Includes bottoming out, lateral shift, or symmastia.
                </p>
                <div className="pt-4 border-t border-zinc-100">
                  <span className="block text-xs font-semibold text-[#FE7623] mb-2">Correction</span>
                  <p className="text-xs text-para-black">Internal pocket repair (Capsulorrhaphy) and fold reconstruction.</p>
                </div>
              </div>

              {/* 3. Rippling */}
              <div data-animate="problem-3" className={`bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#FE7623] hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group cursor-pointer card-shine parallax-card ${isVisible('problem-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-50 text-header-black group-hover:text-white group-hover:bg-[#FE7623] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                  </div>
                  <span className="text-xs font-bold text-zinc-300 uppercase group-hover:text-[#FE7623] transition-colors duration-300">Problem 03</span>
                </div>
                <h3 className="text-lg font-bold text-header-black mb-3 group-hover:text-[#FE7623] transition-colors duration-300">Rippling & Visibility</h3>
                <p className="text-sm text-para-black leading-relaxed mb-4">
                  Visible edges or wrinkling, often seen in thin tissue or large implants.
                </p>
                <div className="pt-4 border-t border-zinc-100">
                  <span className="block text-xs font-semibold text-[#FE7623] mb-2">Correction</span>
                  <p className="text-xs text-para-black">Implant exchange to cohesive gel, pocket adjustment, or Fat Transfer.</p>
                </div>
              </div>

              {/* 4. Waterfall Deformity */}
              <div data-animate="problem-4" className={`bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#FE7623] hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group md:col-span-2 cursor-pointer card-shine parallax-card ${isVisible('problem-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-50 text-header-black group-hover:text-white group-hover:bg-[#FE7623] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <span className="text-xs font-bold text-zinc-300 uppercase group-hover:text-[#FE7623] transition-colors duration-300">Problem 04</span>
                </div>
                <h3 className="text-lg font-bold text-header-black mb-3 group-hover:text-[#FE7623] transition-colors duration-300">Sagging / Waterfall Deformity</h3>
                <p className="text-sm text-para-black leading-relaxed mb-4 max-w-xl">
                  Breast tissue droops over the implant, or the implant stays high while tissue sags (Waterfall).
                </p>
                <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row gap-8">
                  <div className="flex-1">
                    <span className="block text-xs font-semibold text-[#FE7623] mb-2">Solution</span>
                    <p className="text-xs text-para-black">Revision Mastopexy (Lift) + Implant adjustment.</p>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-semibold text-header-black mb-2">Why it happens</span>
                    <p className="text-xs text-para-black">Aging, weight loss, or skin stretching over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Dr. Soma Difference */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <div data-animate="process-image" className={`order-2 lg:order-1 relative transition-all duration-700 ${isVisible('process-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500">
                  <Image
                    src="/images/Plastic Surgeon.jpg"
                    alt="Dr. Soma - Plastic Surgeon"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-zinc-900/10"></div>
                </div>
                {/* Floating card */}
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[280px] animate-float">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm font-bold text-header-black">Dr. Soma Difference</span>
                  </div>
                  <p className="text-xs text-para-black leading-relaxed">
                    &ldquo;Revision requires diagnosis, not guessing. We assess pocket stability and tissue quality before recommending a plan.&rdquo;
                  </p>
                </div>
              </div>

              <div data-animate="process-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('process-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-header-black mb-6">How Breast Revision Works</h2>
                <p className="text-para-black text-sm leading-relaxed mb-10">
                  Revision surgery involves internal structural correction, not just cosmetic change. Dr. Soma performs a comprehensive assessment to ensure safety.
                </p>

                <div className="space-y-8">
                  {[
                    { num: 1, title: "Assessment & Planning", desc: "Review of implant history, tissue thickness, and pocket condition. Ultrasound or MRI may be used." },
                    { num: 2, title: "Surgical Execution", desc: "Precise removal or exchange. Corrective steps like capsulectomy or pocket repair are performed to ensure stability." },
                    { num: 3, title: "Layered Stabilisation", desc: "Closure is critical. We use techniques to support the implant and prevent recurrence of sagging or shift." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold text-header-black group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">{step.num}</div>
                      <div>
                        <h4 className="text-sm font-bold text-header-black mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                        <p className="text-xs text-para-black leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t border-zinc-100">
                  <h4 className="text-sm font-bold text-header-black mb-4">Good Candidates Checklist</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {candidateChecklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-para-black group cursor-pointer hover:text-[#FE7623] transition-colors duration-300">
                        <svg className="w-3.5 h-3.5 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="flex containers w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="comparison-header" className={`text-2xl font-semibold mb-10 text-center transition-all duration-700 ${isVisible('comparison-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Procedure Comparison</h2>

              <div data-animate="comparison-table" className={`w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${isVisible('comparison-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-4 bg-zinc-50/50 px-6 py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-para-black">
                  <div>Feature</div>
                  <div className="text-[#FE7623]">Breast Revision</div>
                  <div>Implant Removal</div>
                  <div>New Augmentation</div>
                </div>

                {/* Rows */}
                {[
                  { feat: "Fixes Complications", revision: "Yes", revisionIcon: true, removal: "Sometimes", augmentation: "Not primary" },
                  { feat: "Changes Implant Size", revision: "Yes", revisionIcon: true, removal: "No", removalX: true, augmentation: "Yes", augmentationIcon: true },
                  { feat: "Corrects Malposition", revision: "Yes", revisionIcon: true, removal: "No", removalX: true, augmentation: "Sometimes" },
                  { feat: "Treats Contracture", revision: "Yes", revisionIcon: true, removal: "Yes", removalIcon: true, augmentation: "Not primary" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 px-6 py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                    <div className="font-medium text-header-black">{row.feat}</div>
                    <div className="text-[#FE7623] flex items-center gap-2">
                      {row.revisionIcon && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {row.revision}
                    </div>
                    <div className="text-para-black flex items-center gap-2">
                      {row.removalIcon && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {row.removalX && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                      {row.removal}
                    </div>
                    <div className="text-para-black flex items-center gap-2">
                      {row.augmentationIcon && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {row.augmentation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="recovery-header" className={`text-3xl font-semibold tracking-tight text-header-black mb-12 text-center transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Post-Operative Recovery</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Line connector */}
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-zinc-200 border-t border-dashed border-zinc-300 z-0"></div>

              {[
                { num: "Day 1", title: "Immediate", desc: "Support bra applied. Mild tightness. Walking encouraged same day." },
                { num: "W1-2", title: "Early Healing", desc: "Swelling reduces. Desk work resumes for most patients. Drains removed (if used)." },
                { num: "W4-6", title: "Activity Resumes", desc: "Light exercise approved. Implants begin to settle. Scar care begins." },
                { num: "M3-6", title: "Final Result", desc: "Softness improves. Symmetry stabilizes. Final contour visible." }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative z-10 flex flex-col items-center text-center group cursor-pointer transition-all duration-500 hover:-translate-y-2 ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-[#FE7623] group-hover:shadow-xl group-hover:shadow-orange-500/10 group-hover:bg-[#FE7623] group-hover:scale-110 transition-all duration-300">
                    <span className="text-lg font-bold text-header-black group-hover:text-white transition-colors duration-300">{step.num}</span>
                  </div>
                  <h3 className="text-sm font-bold text-header-black mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-para-black leading-relaxed px-4 group-hover:text-header-black transition-colors duration-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Split */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Pricing Sticky */}
            <div className="lg:col-span-1">
              <div data-animate="pricing" className={`bg-zinc-900 text-white p-8 rounded-2xl sticky top-24 shadow-2xl transition-all duration-700 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] group ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7623]/10 rounded-full blur-3xl -z-10"></div>
                <h3 className="text-xl font-semibold mb-6 group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                <p className="text-zinc-400 text-sm mb-6">Costs vary based on surgical complexity. Factors include:</p>
                <ul className="space-y-4 mb-8">
                  {["Type of complication (Capsule vs Pocket)", "Implant exchange requirement", "Addition of Lift or Fat Transfer"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 group/item cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-300">
                      <svg className="w-4 h-4 text-[#FE7623] mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/" className="btn-press block w-full text-center bg-[#FE7623] text-white py-4 rounded-xl text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40">
                  Get Quote via WhatsApp
                </a>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 data-animate="faq-header" className={`text-2xl font-semibold text-header-black transition-all duration-700 ${isVisible('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Frequently Asked Questions</h2>
                  <p className="text-sm text-para-black">Get answers to common concerns about breast revision</p>
                </div>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      openFaq === index
                        ? 'border-[#FE7623] shadow-lg shadow-orange-100 bg-white'
                        : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md'
                    }`}
                  >
                    <button
                      className={`w-full flex items-center justify-between p-6 text-left group transition-all duration-300 ${
                        openFaq === index ? 'bg-gradient-to-r from-orange-50/50 to-white' : 'hover:bg-zinc-50/50'
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          openFaq === index
                            ? 'bg-[#FE7623] text-white'
                            : 'bg-zinc-100 text-para-black group-hover:bg-orange-50 group-hover:text-[#FE7623]'
                        }`}>
                          {index + 1}
                        </span>
                        <span className={`text-sm font-semibold transition-colors duration-300 ${
                          openFaq === index ? 'text-[#FE7623]' : 'text-header-black group-hover:text-[#FE7623]'
                        }`}>{faq.question}</span>
                      </div>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === index
                          ? 'bg-[#FE7623] text-white rotate-180'
                          : 'bg-zinc-100 text-para-black group-hover:bg-orange-50 group-hover:text-[#FE7623]'
                      }`}>
                        <svg
                          className="w-4 h-4 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-12 text-sm text-para-black leading-relaxed border-l-2 border-[#FE7623]/20 ml-4">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonials-header" className={`text-2xl font-semibold text-center mb-12 transition-all duration-700 ${isVisible('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "My implant shifted and looked uneven. Dr. Soma corrected the pocket and the result finally looks symmetrical and natural.", name: "Stephanie, 37" },
                { text: "I had capsular contracture and constant tightness. After revision, the pain is gone and the shape is soft again.", name: "Mei, 43" },
                { text: "Honest consultation and clear plan. The revision looks balanced and suits my body better than my first surgery.", name: "Ayesha, 34" }
              ].map((testimonial, i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-[#FE7623] hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 hover:bg-white transition-all duration-500 cursor-pointer group card-shine ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex gap-1 text-[#FE7623] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{transitionDelay: `${j * 50}ms`}} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-para-black italic mb-6 leading-relaxed group-hover:text-header-black transition-colors duration-300">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FE7623] to-orange-400 flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform duration-300">{testimonial.name.charAt(0)}</div>
                    <p className="text-xs font-bold text-header-black group-hover:text-[#FE7623] transition-colors duration-300">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authority & Science Links */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 data-animate="science-header" className={`text-xs font-bold text-para-black uppercase tracking-widest mb-8 transition-all duration-700 ${isVisible('science-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Scientific Evidence & References</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Outlines that implants may require additional procedures over time due to complications." },
                { name: "Harvard Health", url: "https://www.health.harvard.edu/", desc: "Explains assessment for corrective surgery based on symptoms and imaging." },
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Clinical literature on capsulectomy techniques and pocket repair strategies." }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-8 rounded-2xl border border-zinc-100 hover:border-[#FE7623] hover:shadow-xl hover:-translate-y-2 hover:bg-orange-50/30 transition-all duration-300 group card-shine">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-bold text-header-black group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    <svg className="w-4 h-4 text-para-black group-hover:text-[#FE7623] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-para-black leading-relaxed group-hover:text-header-black transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Related Procedures */}
        <section className="py-12 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-6 justify-center text-center items-center">
              <Link href="/breast/breast-implant-removal-malaysia" className="text-sm text-para-black hover:text-[#FE7623] transition-all duration-300 hover:scale-105 relative group">
                View Breast Implant Removal
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7623] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-zinc-300">|</span>
              <Link href="/breast/breast-lift-malaysia" className="text-sm text-para-black hover:text-[#FE7623] transition-all duration-300 hover:scale-105 relative group">
                View Breast Lift
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7623] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-zinc-300">|</span>
              <Link href="/breast/breast-augmentation-malaysia" className="text-sm text-para-black hover:text-[#FE7623] transition-all duration-300 hover:scale-105 relative group">
                View Breast Augmentation
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7623] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/30 via-white to-white -z-10"></div>
          <div data-animate="cta" className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-semibold tracking-tight text-header-black mb-6 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Expert Revision Planning.</h2>
            <p className="text-lg text-para-black mb-10">
              Dr. Soma combines advanced corrective technique with safety-first planning to deliver balanced, stable, long-lasting results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="btn-press w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/40 group animate-glow">
                <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat on WhatsApp
              </a>
              <a href="#" className="btn-press w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-header-black border-2 border-zinc-200 px-8 py-4 rounded-xl text-sm font-medium hover:bg-zinc-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                Book Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </a>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-2">
              {["breast revision surgery", "implant exchange", "capsular contracture", "pocket repair", "malposition correction", "symmastia", "revision mastopexy"].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-zinc-50 rounded-full text-[10px] text-para-black hover:bg-orange-50 hover:text-[#FE7623] transition-all duration-300 cursor-default opacity-50 hover:opacity-100">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
