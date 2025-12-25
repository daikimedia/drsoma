import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ArmLiposuctionMalaysia() {
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
    { question: "What is arm liposuction?", answer: "Arm liposuction is a surgical procedure that removes excess subcutaneous fat from the upper arms to improve contour and definition." },
    { question: "How is arm liposuction done?", answer: "Small incisions are made, a fine cannula is inserted, and fat is removed using tumescent technique and MicroAire Power-Assisted Liposuction to support smoother results." },
    { question: "When will I see results after arm liposuction?", answer: "You will notice gradual improvement as swelling reduces. Many patients see visible changes at 4–6 weeks, with final results around 3–6 months." },
    { question: "How long do arm liposuction results last?", answer: "Results are long-lasting because removed fat cells do not regenerate. Maintaining stable weight preserves contour." },
    { question: "Does arm liposuction tighten loose skin?", answer: "It can provide mild tightening if your skin elasticity is good. If loose hanging skin is significant, an arm lift may be recommended." },
    { question: "How painful is arm liposuction?", answer: "Discomfort is usually mild to moderate and is well managed with medication. Most patients describe soreness rather than sharp pain." },
    { question: "How long is downtime after arm liposuction?", answer: "Most patients return to desk work within 5–7 days. Exercise is typically resumed around 4–6 weeks with surgeon approval." },
    { question: "Will arm liposuction leave scars?", answer: "Scars are minimal because incisions are small and placed discreetly. They fade significantly over time." },
    { question: "Is arm liposuction safe?", answer: "When performed by a certified plastic surgeon in a proper medical facility, arm liposuction is generally safe. Risks exist like any surgery and are discussed during consultation." },
    { question: "How many areas can be treated in one session?", answer: "Many patients treat both arms in a single procedure. Adjacent contouring areas may be added depending on safety and surgical planning." }
  ]

  const treatmentAreas = [
    { name: "Inner Upper Arms", desc: "Reduces fullness and improves slim appearance." },
    { name: "Triceps / Back", desc: "Refines stubborn \"bat wing\" fat contour." },
    { name: "Outer Upper Arms", desc: "Improves arm shape and sleeve fit." },
    { name: "Armpit / Bra-Side", desc: "Smooths bulges near the axillary fold." }
  ]

  const techniques = [
    {
      title: "MicroAire (PAL)",
      desc: "Power-Assisted Liposuction uses rapid vibration to break up fat cells uniformly.",
      features: ["Faster & more precise", "Smoother contour", "Reduced tissue trauma"],
      highlight: true
    },
    {
      title: "Mini Arm Lipo",
      desc: "For slim patients who have small, stubborn pockets of fat.",
      features: ["Precision sculpting", "Short procedure time", "Minimal downtime"],
      highlight: false
    },
    {
      title: "Adjacent Contouring",
      desc: "Blending contour with nearby areas for a seamless silhouette.",
      features: ["Armpit & Bra-side fat", "Lateral chest roll", "Full profile harmony"],
      highlight: false
    }
  ]

  return (
    <>
      <Head>
        <title>Arm Liposuction Malaysia | Slimmer Arms & Definition – Dr. Soma</title>
        <meta name="description" content="Arm Liposuction in Malaysia by Certified Plastic Surgeon. Remove stubborn tricep and underarm fat using MicroAire PAL for natural, defined results." />
      </Head>

      <style jsx global>{`
        .arm-lipo-page ::selection {
          background-color: #FE7623;
          color: white;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(254, 118, 35, 0.2); }
          50% { box-shadow: 0 0 20px rgba(254, 118, 35, 0.4); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(254, 118, 35, 0.3); }
          50% { border-color: rgba(254, 118, 35, 0.8); }
        }

        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s ease-in-out infinite; }
        .animate-border-glow { animation: borderGlow 2s ease-in-out infinite; }

        .card-3d {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
          box-shadow: 0 25px 50px -12px rgba(254, 118, 35, 0.25);
        }

        .card-shine {
          position: relative;
          overflow: hidden;
        }
        .card-shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .card-shine:hover::before {
          transform: rotate(45deg) translateX(100%);
        }

        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1); }
        .img-zoom:hover img { transform: scale(1.1); }

        .btn-magnetic { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .btn-magnetic:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px -10px rgba(254, 118, 35, 0.5);
        }

        .accordion-content {
          transition: grid-template-rows 0.3s ease-out;
          display: grid;
          grid-template-rows: 0fr;
        }
        .accordion-content > div { overflow: hidden; }
        .accordion-content.active { grid-template-rows: 1fr; }
      `}</style>

      <main className="arm-lipo-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Board Certified Plastic Surgeon
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Arm Liposuction in Malaysia.</span> <br />
                <span className="text-zinc-400 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Slimmer Arms. Better Definition.</span>
              </h1>
              <div className="text-base text-zinc-600 leading-relaxed mb-8 max-w-xl animate-fadeInUp opacity-0 space-y-4" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p>Upper arm fat can be frustrating. Many patients notice persistent fullness around the triceps area, inner arms, or near the armpit region that does not respond well to dieting or exercise. Even with weight loss, the upper arms can remain bulky due to localized fat distribution and genetics.</p>
                <p>Arm liposuction is a surgeon-performed body contouring procedure designed to remove stubborn fat from the upper arms and refine the arm silhouette. The goal is not simply to &ldquo;make the arms smaller,&rdquo; but to create smoother, more balanced contour and improved definition that looks natural from every angle.</p>
                <p>At Dr. Soma Plastic Surgery, every arm liposuction procedure is performed by Dr. Soma, a board-certified plastic surgeon experienced in advanced fat-removal techniques, including MicroAire Power-Assisted Liposuction (PAL) for smoother contouring and reduced tissue trauma.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation
                </a>
                <a href="#process" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-8 py-4 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  How It Works
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image
                src="/images/Arm Liposuction.jpg"
                alt="Arm Liposuction Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white backdrop-blur-md p-5 rounded-xl border border-zinc-100 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white border border-zinc-200 text-[#FE7623] rounded-xl shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">Technique</p>
                      <p className="text-base font-semibold text-zinc-900">MicroAire PAL Precision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Areas Grid */}
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">What Is Arm Liposuction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Arm liposuction is a surgical procedure that removes excess subcutaneous fat from the upper arms using small, hidden incisions. It targets areas that commonly create the &ldquo;bat wing&rdquo; appearance or cause arms to look bulky in fitted clothing.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  The goal is not simply to &ldquo;make the arms smaller,&rdquo; but to create a smoother, more balanced contour and improved definition that looks natural.
                </p>
              </div>

              {/* Areas Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-6">Common Treatment Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{area.name}</span>
                      </div>
                      <p className="text-xs text-zinc-500 pl-9">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques & Process */}
        <section id="process" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="tech-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('tech-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Types of Arm Liposuction</h2>
              <p className="text-zinc-500 text-sm">Dr. Soma selects the specific method based on your fat volume and skin elasticity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {techniques.map((tech, i) => (
                <div key={i} data-animate={`tech-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${tech.highlight ? 'animate-border-glow' : ''} ${isVisible(`tech-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tech.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3">{tech.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{tech.desc}</p>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {tech.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="border-t border-zinc-200 pt-16">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-10 text-center">How It Works</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
                <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0"></div>

                {[
                  { num: "1", title: "Marking", desc: "Symmetrical planning" },
                  { num: "2", title: "Infiltration", desc: "Tumescent anaesthesia" },
                  { num: "3", title: "Suction", desc: "MicroAire removal" },
                  { num: "4", title: "Compression", desc: "Garment application" }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center group cursor-pointer hover:-translate-y-3 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-zinc-200 text-sm font-bold flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:text-white group-hover:border-[#FE7623] group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:rotate-[360deg]">{step.num}</div>
                    <h4 className="text-sm font-semibold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                    <p className="text-xs text-zinc-500">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div data-animate="compare-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('compare-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Image
                src="/images/Arm Liposuction 1.jpg"
                alt="Arm Liposuction Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[280px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">Dr. Soma&apos;s Note</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &quot;If you have significant loose, hanging skin (excess laxity), liposuction alone may not be enough. An Arm Lift might be required.&quot;
                </p>
              </div>
            </div>

            {/* Table Content */}
            <div data-animate="compare-content" className={`order-2 transition-all duration-700 ${isVisible('compare-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Arm Liposuction vs. Arm Lift</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Understanding the difference between fat removal and skin removal is crucial for the best outcome.
              </p>

              <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-zinc-100 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                  <div className="text-white/70 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Feature
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FE7623] to-orange-500 rounded-full text-white text-xs font-bold uppercase tracking-wide shadow-lg shadow-orange-500/30">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      Liposuction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-xs font-bold uppercase tracking-wide">
                      Arm Lift
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-zinc-100">
                  {[
                    { feat: "Removes Fat", featIcon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16", lipo: "Yes", lipoIcon: true, lift: "Yes", liftIcon: true },
                    { feat: "Removes Loose Skin", featIcon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", lipo: "No", lipoX: true, lift: "Yes", liftIcon: true },
                    { feat: "Scarring", featIcon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", lipo: "Minimal", lipoSubtext: "Hidden incisions", lift: "Visible", liftSubtext: "Along inner arm" },
                    { feat: "Downtime", featIcon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", lipo: "1–2 Weeks", lipoHighlight: true, lift: "2–4 Weeks" },
                    { feat: "Anesthesia", featIcon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", lipo: "Local/Twilight", lipoHighlight: true, lift: "General" }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 px-6 py-5 items-center hover:bg-gradient-to-r hover:from-orange-50/50 hover:via-white hover:to-orange-50/30 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={row.featIcon} /></svg>
                        </div>
                        <span className="font-semibold text-zinc-900 text-sm group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</span>
                      </div>
                      <div className="text-center">
                        <div className={`inline-flex flex-col items-center gap-1 px-4 py-2 rounded-xl ${row.lipoHighlight ? 'bg-green-50 border border-green-200' : row.lipoIcon ? 'bg-green-50' : row.lipoX ? 'bg-zinc-50' : 'bg-orange-50'}`}>
                          <div className="flex items-center gap-2">
                            {row.lipoIcon && <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                            {row.lipoX && <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                            <span className={`text-sm font-semibold ${row.lipoHighlight ? 'text-green-700' : row.lipoIcon ? 'text-green-600' : row.lipoX ? 'text-zinc-500' : 'text-[#FE7623]'}`}>{row.lipo}</span>
                          </div>
                          {row.lipoSubtext && <span className="text-xs text-zinc-400">{row.lipoSubtext}</span>}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`inline-flex flex-col items-center gap-1 px-4 py-2 rounded-xl ${row.liftIcon ? 'bg-green-50' : 'bg-zinc-50'}`}>
                          <div className="flex items-center gap-2">
                            {row.liftIcon && <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                            <span className={`text-sm font-medium ${row.liftIcon ? 'text-green-600' : 'text-zinc-600'}`}>{row.lift}</span>
                          </div>
                          {row.liftSubtext && <span className="text-xs text-zinc-400">{row.liftSubtext}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Footer */}
                <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-white border-t border-zinc-100">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-zinc-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Recommended procedure depends on your skin elasticity
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FE7623] to-orange-400"></span>
                      <span className="text-xs font-medium text-zinc-600">Liposuction preferred for fat removal</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/body/arm-lift-malaysia" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:underline group">
                  View Arm Lift Details
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates Section */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-4xl mx-auto">
            <h2 data-animate="candidate-header" className={`text-2xl font-semibold text-center mb-12 text-zinc-900 transition-all duration-700 ${isVisible('candidate-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Who Is a Good Candidate?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Good Candidate */}
              <div data-animate="candidate-good" className={`bg-white p-8 rounded-2xl border border-zinc-200 card-3d transition-all duration-700 ${isVisible('candidate-good') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">Ideal Candidate</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: "Stable body weight", text: " and realistic expectations." },
                    { bold: "Localised fat pockets", text: " in upper arms/triceps." },
                    { bold: "Good skin elasticity", text: " (vital for tightening)." },
                    { bold: "", text: "Non-smoker or willing to stop temporarily." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{item.bold}</strong>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Suitable */}
              <div data-animate="candidate-bad" className={`bg-white p-8 rounded-2xl border border-zinc-200 opacity-90 card-3d transition-all duration-700 ${isVisible('candidate-bad') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">Not Suitable If</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Significant loose hanging skin is the main issue.",
                    "Severe obesity or fluctuating weight.",
                    "Poor skin elasticity (skin may not retract)."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="recovery-header" className={`text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Recovery Timeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0"></div>

              {[
                { time: "Day 1", title: "Immediate", desc: "Garment on. Swelling expected. Walking encouraged." },
                { time: "Week 1", title: "Desk Work", desc: "Return to office. Bruising noticeable but fading." },
                { time: "Week 2-3", title: "Swelling Drops", desc: "Swelling reduces. Light walking. Keep garment on." },
                { time: "Week 4-6", title: "Visible Change", desc: "Resume exercise. Contour looks slimmer." },
                { time: "Month 3-6", title: "Final Result", desc: "Full tissue tightening. Final definition revealed." }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative z-10 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-[#FE7623] group-hover:shadow-xl group-hover:shadow-orange-500/10 group-hover:bg-[#FE7623] group-hover:scale-110 transition-all duration-300">
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-white transition-colors duration-300">{step.time}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed px-2 group-hover:text-zinc-700 transition-colors duration-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-center mb-12 transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "My arms finally look slimmer and more defined. The change is natural and my sleeves fit so much better.", name: "Hana, 31" },
                { text: "Dr. Soma explained everything clearly. Recovery was smooth and the contour looks even on both sides.", name: "Michelle, 40" },
                { text: "I had stubborn inner arm fat for years. The improvement is obvious without looking overdone.", name: "Farisah, 36" }
              ].map((testimonial, i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 bg-white rounded-2xl border border-zinc-100 shadow-lg card-3d card-shine hover:border-[#FE7623] ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 150}ms`}}>
                  <div className="flex gap-1 text-[#FE7623] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 italic mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-sm font-bold text-zinc-900">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Pricing Sticky */}
            <div className="lg:col-span-1">
              <div data-animate="pricing" className={`bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-2xl sticky top-24 shadow-2xl transition-all duration-700 hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] group card-shine ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7623]/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Arm liposuction cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Amount of fat to remove", "Technique (MicroAire/Adjacent)", "Hospital & Anaesthesia fees", "Operating time"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#FE7623] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-xl text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
                  Get Quote via WhatsApp
                </a>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg animate-float">
                  <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900">Frequently Asked Questions</h2>
                  <p className="text-sm text-zinc-500">Get answers to common concerns about arm liposuction</p>
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
                        <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          openFaq === index
                            ? 'bg-[#FE7623] text-white'
                            : 'bg-zinc-100 text-zinc-600 group-hover:bg-orange-50 group-hover:text-[#FE7623]'
                        }`}>
                          {index + 1}
                        </span>
                        <span className={`text-sm font-semibold transition-colors duration-300 ${
                          openFaq === index ? 'text-[#FE7623]' : 'text-zinc-800 group-hover:text-[#FE7623]'
                        }`}>{faq.question}</span>
                      </div>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === index
                          ? 'bg-[#FE7623] text-white rotate-180'
                          : 'bg-zinc-100 text-zinc-600 group-hover:bg-orange-50 group-hover:text-[#FE7623]'
                      }`}>
                        <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-12 text-sm text-zinc-600 leading-relaxed border-l-2 border-[#FE7623]/20 ml-4">
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

        {/* Authority & Science Links */}
        <section className="py-20 px-6 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Harvard Medical School", url: "https://www.health.harvard.edu/", desc: "Liposuction can safely remove localized fat when performed by qualified surgeons.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Explains that fat cells are removed from targeted areas and results are maintained with a stable lifestyle.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed Studies", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Clinical literature confirms Power-Assisted Liposuction (PAL) improves efficiency and contour smoothness.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Get slimmer, more defined arms.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines precision contouring, advanced MicroAire PAL technology, and safety-first technique to deliver natural, long-lasting arm refinement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-2xl text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <a href="#" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-2xl text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                Book Consultation
                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </a>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["upper arm liposuction", "bat wing fat", "MicroAire PAL", "tumescent anesthesia", "body contouring"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
