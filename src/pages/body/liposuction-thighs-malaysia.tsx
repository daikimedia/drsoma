import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ThighLiposuctionMalaysia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
    { question: "What is thigh liposuction?", answer: "A surgical fat-removal procedure that contours the inner and/or outer thighs by removing excess subcutaneous fat to improve leg shape and proportion." },
    { question: "How is thigh liposuction done?", answer: "Small incisions are made, a fine cannula is used to suction fat after tumescent infiltration, and MicroAire Power-Assisted technology helps support smoother, more uniform contouring." },
    { question: "When will I see results after thigh liposuction?", answer: "You'll start noticing changes at 4–6 weeks, with final contour visible between 3–6 months as swelling fully resolves." },
    { question: "How long does thigh liposuction last?", answer: "Results are long-lasting because fat cells removed do not regenerate. Maintaining stable weight helps preserve thigh contour." },
    { question: "Does thigh liposuction help with inner thigh rubbing?", answer: "Yes. By reducing inner thigh bulk, many patients experience less friction and improved walking comfort." },
    { question: "Does thigh liposuction tighten loose skin?", answer: "It can provide mild tightening if your skin elasticity is good. If loose hanging skin is significant, a thigh lift may be recommended." },
    { question: "How painful is thigh liposuction?", answer: "Pain is usually mild to moderate and often described as soreness. Medication keeps discomfort manageable." },
    { question: "How long is downtime after thigh liposuction?", answer: "Most patients return to desk work within 5–7 days. Exercise is typically resumed around 4–6 weeks with surgeon approval." },
    { question: "Does thigh liposuction leave scars?", answer: "Incisions are tiny (3–4mm) and placed discreetly. Scars fade significantly over time." },
    { question: "Is thigh liposuction safe?", answer: "When performed by a certified plastic surgeon in a proper medical facility, thigh liposuction is generally safe. Risks exist like any surgery and are discussed during consultation." }
  ]

  const treatmentAreas = [
    { name: "Inner Thighs", desc: "Reduces friction zone." },
    { name: "Outer Thighs", desc: "Treats saddlebags." },
    { name: "Front Thighs", desc: "For selected patients." },
    { name: "Banana Roll", desc: "Under-butt crease." },
    { name: "Knee Area", desc: "Contour blending." }
  ]

  const benefits = [
    { title: "Reduces Stubborn Fat", desc: "Targets diet-resistant inner and outer thigh fat.", icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" },
    { title: "Thigh Gap Contour", desc: "Improves leg proportions and inner thigh space.", icon: "M4 6h16M4 12h16M4 18h7" },
    { title: "Less Friction", desc: "Helps reduce inner thigh rubbing and discomfort.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Smoother Silhouette", desc: "Creates a more balanced hip-to-thigh line.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }
  ]

  const lipoTypes = [
    { title: "MicroAire PAL", desc: "Designed for precision and smoothness.", features: ["More controlled fat removal", "Less tissue trauma", "Better uniformity"], highlight: true },
    { title: "Mini Thigh Lipo", desc: "For slim patients with small pockets.", features: ["Precision sculpting", "Minimal downtime", "Good for pinch fat"], highlight: false },
    { title: "Comprehensive", desc: "Full inner, outer, and banana roll.", features: ["Full proportion improvement", "Slimming & Friction reduction", "Smoother leg line"], highlight: false }
  ]

  const processSteps = [
    { num: "1", title: "Marking & Infiltration", desc: "Symmetry mapping followed by tumescent fluid for anaesthesia." },
    { num: "2", title: "Hidden Incisions", desc: "Tiny 3–4mm incisions placed in natural creases." },
    { num: "3", title: "MicroAire PAL", desc: "Power-Assisted Liposuction to break and suction fat with precision." },
    { num: "4", title: "Feathering & Blending", desc: "Critical step to avoid sharp edges and ensure smooth transitions." },
    { num: "5", title: "Compression", desc: "Garments applied for shaping support and fluid reduction." }
  ]

  const testimonials = [
    { text: "My inner thigh rubbing improved and my legs look slimmer in jeans. The contour looks smooth and natural.", name: "Aisyah, 30" },
    { text: "I struggled with saddlebags for years. After surgery, my hip-to-thigh line looks so much cleaner.", name: "Rachel, 41" },
    { text: "Professional care, clear explanations, and even results. The difference is obvious without looking overdone.", name: "Nadine, 35" }
  ]

  return (
    <>
      <Head>
        <title>Thigh Liposuction Malaysia | Inner & Outer Thigh Fat Removal – Dr. Soma</title>
        <meta name="description" content="Thigh Liposuction in Malaysia by Certified Plastic Surgeon. Slimmer legs and smoother shape using MicroAire PAL. Inner and Outer thigh fat removal." />
      </Head>

      <style jsx global>{`
        .thigh-lipo-page ::selection {
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
      `}</style>

      <main className="thigh-lipo-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 overflow-hidden border-b border-zinc-100">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/60 via-zinc-50/20 to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-8 shadow-sm animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Certified Plastic Surgeon
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Thigh Liposuction in Malaysia.</span> <br />
                <span className="text-zinc-400 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Slimmer Legs. Smoother Shape.</span>
              </h1>
              <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-lg animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Thigh fat is one of the most common areas patients struggle to change. Inner thigh fullness causes friction, while outer thigh fat (&ldquo;saddlebags&rdquo;) affects proportion. Thigh liposuction refines leg shape with precision.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-lg border-l-2 border-[#FE7623] pl-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.35s', animationFillMode: 'forwards'}}>
                At Dr. Soma Plastic Surgery, every thigh liposuction is performed by Dr. Soma using advanced <strong className="text-zinc-700">MicroAire Power-Assisted Liposuction (PAL)</strong> for better uniformity and reduced tissue trauma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation (WhatsApp)
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image
                src="/images/Thigh Liposuction.jpg"
                alt="Thigh Liposuction Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-4 group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="p-2.5 bg-orange-50 text-[#FE7623] rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">Goal</p>
                    <p className="text-sm font-semibold text-zinc-900">Natural Proportion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Areas */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">What Is Thigh Liposuction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Thigh liposuction is a surgical procedure that removes excess subcutaneous fat from the thighs to improve shape, reduce bulk, and create better proportion between hips, thighs, and lower legs.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  It is a precision sculpting technique for areas resistant to diet and exercise, not a weight-loss treatment.
                </p>
              </div>

              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Common Areas Treated</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#FE7623] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{area.name}</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2 pl-8">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works & Results */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div data-animate="process" className={`transition-all duration-700 ${isVisible('process') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">How Thigh Liposuction Works</h2>
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-xs font-bold text-zinc-900 group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">{step.num}</div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-orange-50/50 border border-orange-100 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                <p className="text-xs text-[#FE7623] font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Destroyed fat cells do not regenerate, supporting long-lasting results.
                </p>
              </div>
            </div>

            <div data-animate="timeline" className={`bg-zinc-900 text-white p-8 rounded-2xl shadow-xl h-fit card-3d transition-all duration-700 ${isVisible('timeline') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                When Will I See Results?
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute top-2 bottom-2 left-[7px] w-px bg-zinc-700"></div>
                {[
                  { time: "Week 1–2", desc: "Swelling, bruising, tenderness, firmness.", active: true },
                  { time: "Week 4–6", desc: "Visible reduction in thigh bulk and improved shape.", active: false },
                  { time: "Month 3–6", desc: "Final contour settles as tissues retract and soften.", active: false }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-900 transition-all duration-300 ${item.active ? 'bg-[#FE7623]' : 'bg-zinc-700 group-hover:bg-[#FE7623]'}`}></div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FE7623] transition-colors duration-300">{item.time}</h4>
                    <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="benefits-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-12 transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Benefits of Thigh Liposuction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} data-animate={`benefit-${i}`} className={`p-6 rounded-xl border border-zinc-200 bg-white shadow-sm card-3d card-shine hover:border-[#FE7623] transition-all duration-700 ${isVisible(`benefit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-[#FE7623] mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                  <p className="text-xs text-zinc-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types & Comparison */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            {/* Types */}
            <div className="mb-20">
              <h2 data-animate="types-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-10 transition-all duration-700 ${isVisible('types-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Types of Thigh Liposuction Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {lipoTypes.map((type, i) => (
                  <div key={i} data-animate={`type-${i}`} className={`bg-white p-6 rounded-xl border border-zinc-200 card-3d card-shine ${type.highlight ? 'animate-border-glow' : ''} transition-all duration-700 ${isVisible(`type-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                    <h3 className="text-lg font-bold text-zinc-900 mb-3">{type.title}</h3>
                    <p className="text-xs text-zinc-500 mb-4">{type.desc}</p>
                    <ul className="text-sm text-zinc-600 space-y-2">
                      {type.features.map((feature, j) => (
                        <li key={j} className="flex gap-2 hover:text-[#FE7623] transition-colors duration-300">
                          <svg className="w-4 h-4 text-[#FE7623] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Inner vs Outer Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div data-animate="inner" className={`bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm card-3d transition-all duration-700 ${isVisible('inner') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="p-6 bg-zinc-900 text-white">
                  <h3 className="text-lg font-bold">Inner Thigh Liposuction</h3>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Main Goal", value: "Reduce friction and slim inner leg line." },
                    { label: "Clothing Benefit", value: "More comfort in walking, slimmer pants fit." },
                    { label: "Technique Focus", value: "Even reduction to avoid dents, preserve smooth line." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-zinc-400 uppercase">{item.label}</p>
                      <p className="text-sm font-medium text-zinc-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div data-animate="outer" className={`bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm card-3d transition-all duration-700 ${isVisible('outer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="p-6 bg-[#FE7623] text-white">
                  <h3 className="text-lg font-bold">Outer Thigh Liposuction</h3>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Main Goal", value: "Reduce \"saddlebag\" width and hip-thigh bulk." },
                    { label: "Clothing Benefit", value: "Improved jeans fit and silhouette." },
                    { label: "Technique Focus", value: "Blending to hip and butt contour for natural flow." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-zinc-400 uppercase">{item.label}</p>
                      <p className="text-sm font-medium text-zinc-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 data-animate="candidate-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-12 transition-all duration-700 ${isVisible('candidate-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Who Is a Good Candidate?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div data-animate="candidate-good" className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d transition-all duration-700 ${isVisible('candidate-good') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-green-50 text-green-600 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">Ideal Candidate</h3>
                </div>
                <ul className="space-y-4">
                  {["Stable weight", "Localised fat pockets (Inner/Outer)", "Good skin elasticity", "Non-smoker or willing to stop temporarily"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div data-animate="candidate-bad" className={`bg-zinc-50 p-8 rounded-2xl border border-zinc-200/60 opacity-90 card-3d transition-all duration-700 ${isVisible('candidate-bad') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-red-50 text-red-500 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">Not Suitable If</h3>
                </div>
                <ul className="space-y-4">
                  {["Significant loose skin is the primary issue", "Severe obesity", "Poor skin elasticity"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 hover:text-zinc-700 transition-colors duration-300">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-12 border border-zinc-200 rounded-2xl overflow-hidden">
              <div className="bg-zinc-50 p-4 border-b border-zinc-200">
                <h3 className="text-center font-bold text-zinc-900">Thigh Liposuction vs Thigh Lift</h3>
              </div>
              <div className="grid grid-cols-3 divide-x divide-zinc-100 bg-white text-sm">
                <div className="p-4 font-medium text-zinc-500">Feature</div>
                <div className="p-4 font-bold text-zinc-900 text-center">Thigh Liposuction</div>
                <div className="p-4 font-bold text-zinc-900 text-center">Thigh Lift</div>

                {[
                  { feat: "Removes Fat", lipo: true, lift: true },
                  { feat: "Removes Loose Skin", lipo: false, lift: true },
                  { feat: "Scarring", lipoText: "Minimal", liftText: "Longer scar" },
                  { feat: "Downtime", lipoText: "1–2 weeks", liftText: "2–4 weeks" }
                ].map((row, i) => (
                  <div key={i} className="contents">
                    <div className="p-4 border-t border-zinc-100 text-zinc-600">{row.feat}</div>
                    <div className="p-4 border-t border-zinc-100 text-center">
                      {row.lipo !== undefined ? (
                        row.lipo ? <svg className="w-4 h-4 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <svg className="w-4 h-4 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : <span className="text-zinc-900">{row.lipoText}</span>}
                    </div>
                    <div className="p-4 border-t border-zinc-100 text-center">
                      {row.lift !== undefined ? (
                        row.lift ? <svg className="w-4 h-4 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <svg className="w-4 h-4 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : <span className="text-zinc-900">{row.liftText}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thigh Lift Link */}
            <Link href="/body/thigh-lift-malaysia" className="group block bg-white border border-zinc-200 rounded-2xl p-6 hover:border-[#FE7623] hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 rounded-xl text-zinc-500 group-hover:text-[#FE7623] group-hover:bg-orange-50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors">Have significant loose skin?</h4>
                    <p className="text-sm text-zinc-500 mt-1">If skin laxity is significant, a Thigh Lift may be recommended instead of or in addition to liposuction.</p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors">
                  View Thigh Lift Procedure
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="recovery-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Recovery Timeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative">
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-zinc-100 via-[#FE7623]/30 to-zinc-100 z-0"></div>

              {[
                { time: "Immediately", title: "Day 1", desc: "Compression garment, mild soreness, walking encouraged.", icon: true },
                { time: "Wk 1", title: "Back to Work", desc: "Return to desk work. Avoid heavy lifting." },
                { time: "Wk 2-3", title: "Swelling Drops", desc: "Swelling reduces, continue compression." },
                { time: "Wk 4-6", title: "Resume Exercise", desc: "Contour visible, resume exercise with approval." },
                { time: "Mo 3-6", title: "Final Result", desc: "Final shape revealed and stabilized." }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative z-10 group cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-zinc-100 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:border-[#FE7623] group-hover:shadow-xl group-hover:shadow-orange-500/10 transition-all duration-300">
                    {step.icon ? (
                      <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    ) : (
                      <span className="text-sm font-bold text-zinc-400 group-hover:text-[#FE7623] transition-colors duration-300">{step.time}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-zinc-900 text-center mb-12 transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 rounded-2xl bg-white shadow-sm border border-zinc-100 card-3d card-shine transition-all duration-700 ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex text-[#FE7623] mb-4 gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-wide">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 data-animate="pricing-header" className={`text-2xl font-semibold text-zinc-900 mb-6 transition-all duration-700 ${isVisible('pricing-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Pricing Guide</h2>
            <p className="text-sm text-zinc-500 mb-8">Thigh liposuction cost varies depending on individual factors.</p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 text-left">
              <h4 className="text-sm font-bold text-zinc-900 mb-4">Cost Factors Include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Inner vs outer thigh treatment areas", "Amount of fat to be removed", "Contour blending needs (banana roll/knees)", "Operating time and complexity", "Hospital and anaesthesia fees"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 hover:text-[#FE7623] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-200 text-center">
                <p className="text-sm font-semibold text-zinc-900">A full quotation is provided after consultation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Harvard Medical School", url: "https://www.health.harvard.edu/", desc: "Describes liposuction as a safe method to remove localized subcutaneous fat when performed by experienced professionals.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Confirms liposuction removes fat cells from targeted areas and results can be maintained with stable weight and healthy lifestyle.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Literature supports that Power-Assisted Liposuction improves efficiency and contour uniformity with controlled technique.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-3 h-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg animate-float">
                <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-zinc-900">Frequently Asked Questions</h2>
                <p className="text-sm text-zinc-500">Get answers to common concerns about thigh liposuction</p>
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

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Refine your legs with surgeon-performed thigh liposuction.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines medical precision, MicroAire PAL technology, and safety-first technique to deliver smoother, slimmer, long-lasting thigh contour improvement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-2xl text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <a href="#" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-2xl text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                Book a Consultation Today
                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["thigh liposuction", "inner thigh fat", "saddlebags", "banana roll", "MicroAire PAL", "tumescent anesthesia", "compression garments", "body contouring"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
