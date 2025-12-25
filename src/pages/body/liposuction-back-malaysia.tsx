import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BackLiposuctionMalaysia() {
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
    { question: "What is back liposuction?", answer: "A surgeon-performed fat-removal procedure that contours the back by removing excess subcutaneous fat to reduce rolls, bra bulges, and back fullness." },
    { question: "How is back liposuction done?", answer: "Small hidden incisions are made, a fine cannula is used after tumescent infiltration, and fat is removed with MicroAire Power-Assisted technology to support smooth, uniform contour." },
    { question: "When will I see results after back liposuction?", answer: "You'll start noticing improvement at 4–6 weeks, with final contour visible between 3–6 months as swelling fully resolves." },
    { question: "How long do results last?", answer: "Results are long-lasting because removed fat cells do not regenerate. Stable weight helps preserve contour." },
    { question: "Can back liposuction remove bra-line fat?", answer: "Yes. Mid-back bra-line bulges are one of the most common treated areas, and many patients notice improved clothing fit early." },
    { question: "Does back liposuction tighten skin?", answer: "It can help the skin retract if elasticity is good. If skin laxity is significant, additional options may be discussed." },
    { question: "Is back liposuction painful?", answer: "Discomfort is usually mild to moderate and is manageable with medication. Soreness is more common than sharp pain." },
    { question: "How long is downtime?", answer: "Many patients return to desk work in 5–7 days. Exercise is usually resumed around 4–6 weeks with surgeon approval." },
    { question: "Will there be scars?", answer: "Incisions are tiny (3–4mm) and placed discreetly in natural folds. Scars fade significantly over time." },
    { question: "Is back liposuction safe?", answer: "When performed by a certified plastic surgeon in a proper medical facility, back liposuction is generally safe. Risks exist like any surgery and are explained during consultation." }
  ]

  const treatmentAreas = [
    { name: "Upper Back Rolls", desc: "Between shoulder blades & bra band." },
    { name: "Bra-Line Bulges", desc: "The most common complaint." },
    { name: "Lower Back Fullness", desc: "Just above the waistline." },
    { name: "Side-Back / Axillary", desc: "Near the armpit line." }
  ]

  const benefits = [
    { title: "Reduces Bra-Line Rolls", desc: "Directly targets and removes the bulges that appear above and below the bra strap.", icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" },
    { title: "Smoother Silhouette", desc: "Smooths the back contour for a cleaner look in fitted clothing and swimwear.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { title: "MicroAire PAL Precision", desc: "Surgeon-controlled technology ensures uniformity and less tissue trauma than traditional methods.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
  ]

  const lipoTypes = [
    { title: "MicroAire PAL for Back Rolls", desc: "Designed for controlled, even fat removal across multiple back zones. Offers smoother contour and improved uniformity across roll transitions." },
    { title: "Targeted Bra-Line Liposuction", desc: "Mid-back focus for patients whose main concern is bra bulges. Refines the bra band line appearance for better clothing comfort." },
    { title: "Comprehensive Upper Body", desc: "Combines back rolls with waistline blending (flanks). Creates a cleaner hourglass shape and improves side profile proportion." }
  ]

  const processSteps = [
    { num: "1", title: "Marking & Planning", desc: "Standing roll mapping to match bra levels and natural creases." },
    { num: "2", title: "MicroAire PAL", desc: "Power-Assisted Liposuction to break dense back fat with precision." },
    { num: "3", title: "Feathering", desc: "Critical blending into flanks and waist for a smooth transition." }
  ]

  const testimonials = [
    { text: "My bra-line bulges are gone and my tops fit so much better. The contour looks smooth, not hollow.", name: "Sabrina, 37" },
    { text: "I didn't expect such a difference in my back silhouette. Dr. Soma's technique looks natural and even.", name: "Jean, 44" },
    { text: "Professional, safe, and the result is exactly what I wanted, flatter back rolls without looking overdone.", name: "Aina, 33" }
  ]

  return (
    <>
      <Head>
        <title>Back Liposuction Malaysia | Bra-Line & Roll Removal – Dr. Soma</title>
        <meta name="description" content="Back Liposuction in Malaysia by Certified Plastic Surgeon. Remove bra-line fat and back rolls using MicroAire PAL for a smoother silhouette." />
      </Head>

      <style jsx global>{`
        .back-lipo-page ::selection {
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

        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s ease-in-out infinite; }

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

      <main className="back-lipo-page bg-white text-zinc-900">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Back Liposuction in Malaysia.</span> <br />
                <span className="text-zinc-400 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Smoother Back. Cleaner Lines.</span>
              </h1>
              <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-lg animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Back fat is stubborn and visible in fitted clothing. From bra-line bulges to lower back rolls, we refine the silhouette using advanced sculpting techniques for a natural look from every angle.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-lg border-l-2 border-[#FE7623] pl-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.35s', animationFillMode: 'forwards'}}>
                At Dr. Soma Plastic Surgery, every procedure is performed by Dr. Soma using <strong className="text-zinc-700">MicroAire Power-Assisted Liposuction (PAL)</strong> for uniform fat removal and refined transitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  <svg className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation (WhatsApp)
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image
                src="/images/Back Liposuction.jpg"
                alt="Back Liposuction Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-lg flex items-center gap-4 group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="p-2.5 bg-orange-50 text-[#FE7623] rounded-lg">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-black">Goal</p>
                    <p className="text-sm font-semibold text-black">Natural Silhouette</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Areas */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">What Is Back Liposuction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Back liposuction is a surgical procedure that removes excess subcutaneous fat from the back to improve contour, reduce rolls, and refine the upper body silhouette.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  It is not a weight-loss procedure. It is a precision sculpting treatment for fat pockets that do not respond well to diet and exercise.
                </p>
              </div>

              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Common Areas Treated</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
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

        {/* Difficulty & Method Section with Image 2 */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate="difficulty" className={`transition-all duration-700 ${isVisible('difficulty') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Why Back Fat Is Difficult to Lose</h2>
              <div className="space-y-6 mb-10">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Back fat often persists even in fit individuals because fat distribution is genetically influenced and the back has dense connective tissue layers. Rolls form where skin naturally folds with movement, creating localized pockets that diet alone cannot &ldquo;spot reduce.&rdquo;
                </p>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-6">How The Procedure Works</h3>
              <div className="space-y-5">
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
            </div>

            {/* Image 2 */}
            <div data-animate="img-2" className={`relative rounded-2xl overflow-hidden shadow-2xl h-[500px] transition-all duration-700 ${isVisible('img-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Image
                src="/images/Back Liposuction 2.jpg"
                alt="Back fitness aesthetic"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-zinc-900/20"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-50 text-[#FE7623] rounded-lg mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black">Clothing Fit Improvement</h4>
                    <p className="text-xs text-black mt-1 leading-relaxed">
                      Most patients notice the earliest visible benefit in how bras and fitted tops sit flatter across the back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="benefits-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-12 transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Benefits of Back Liposuction</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} data-animate={`benefit-${i}`} className={`p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm card-3d card-shine hover:border-[#FE7623] transition-all duration-700 ${isVisible(`benefit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-[#FE7623] mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} /></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-3">{benefit.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Lipo (Dark Section with Image 3) */}
        <section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image 3 */}
            <div data-animate="img-3" className={`order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[550px] border border-zinc-800 transition-all duration-700 ${isVisible('img-3') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Image
                src="/images/Back Liposuction 1.jpg"
                alt="Clinic Consultation"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FE7623]/20 border border-[#FE7623]/50 text-[#FE7623] text-[10px] font-medium uppercase tracking-widest mb-2">
                  Safety First
                </div>
                <h3 className="text-lg font-medium">Hospital-Grade Standards</h3>
                <p className="text-sm text-zinc-400 mt-2 max-w-xs">Performed in a proper medical facility with comprehensive post-op monitoring.</p>
              </div>
            </div>

            {/* Content */}
            <div data-animate="types" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('types') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Types of Back Liposuction</h2>

              <div className="space-y-8">
                {lipoTypes.map((type, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-3 group-hover:text-[#FE7623] transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-[#FE7623]"></span>
                      {type.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-2 pl-5 border-l border-zinc-800 group-hover:border-[#FE7623] transition-colors pl-4">
                      {type.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-800">
                <a href="https://wa.me/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:text-white transition-colors group">
                  Consult Dr. Soma about your options
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-white border-t border-zinc-100">
          <div className="flex containers w-full">
            <div className="flex flex-col w-full">
              <div data-animate="comparison" className={`w-full transition-all duration-700 ${isVisible('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl font-semibold mb-10 text-center">Back Liposuction vs Flank Liposuction</h2>

                <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="grid grid-cols-3 bg-zinc-50 px-6 py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-para-black">
                    <div>Feature</div>
                    <div className="text-[#FE7623]">Back Liposuction</div>
                    <div>Flank Liposuction</div>
                  </div>

                  {/* Rows */}
                  {[
                    { feat: "Main Goal", back: "Reduce rolls & bra bulges", flank: "Improve waistline & handles", backHighlight: true, flankHighlight: false },
                    { feat: "Best For", back: "Upper & mid-back fullness", flank: "Side waist bulges", backHighlight: false, flankHighlight: false },
                    { feat: "Scarring", back: "Minimal", flank: "Minimal", backHighlight: false, flankHighlight: false },
                    { feat: "Often Combined", back: "Yes", flank: "Yes", backHighlight: true, flankHighlight: true }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 px-6 py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                      <div className="font-medium text-header-black">{row.feat}</div>
                      <div className={`flex items-center gap-2 ${row.backHighlight ? 'text-[#FE7623]' : 'text-para-black'}`}>
                        {row.backHighlight && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        {row.back}
                      </div>
                      <div className={`flex items-center gap-2 ${row.flankHighlight ? 'text-para-black' : 'text-para-black'}`}>
                        {row.flankHighlight && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        {row.flank}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates & Recovery */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Candidates */}
            <div data-animate="candidates" className={`transition-all duration-700 ${isVisible('candidates') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">Who Is a Good Candidate?</h2>
              <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
                <ul className="space-y-4 mb-8">
                  {["Stable weight", "Localised fat pockets on upper, mid, or lower back", "Good skin elasticity (helps smooth retraction)", "Realistic expectations about gradual results"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 hover:text-zinc-900 transition-colors duration-300">
                      <svg className="w-6 h-6 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-zinc-200 pt-6">
                  <h4 className="text-sm font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Not suitable if:
                  </h4>
                  <ul className="space-y-2">
                    {["Significant loose skin is the main issue", "Severe obesity"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                        <span className="w-1 h-1 rounded-full bg-red-400"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recovery Timeline */}
            <div data-animate="recovery" className={`transition-all duration-700 ${isVisible('recovery') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">Recovery Timeline</h2>
              <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-zinc-200">
                {[
                  { time: "Immediately", desc: "Compression garment applied. Walking encouraged same day. Back may feel tight.", active: true },
                  { time: "Week 1", desc: "Return to desk work for many. Avoid heavy lifting and intense twisting.", active: false },
                  { time: "Week 4-6", desc: "Resume exercise with approval. Back rolls appear flatter and contour becomes visible.", active: false },
                  { time: "Month 3-6", desc: "Final shape revealed. Full tissue softening and contour refinement.", active: false }
                ].map((step, i) => (
                  <div key={i} className="relative group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className={`absolute -left-[29px] top-1 w-6 h-6 rounded-full bg-white border-2 z-10 transition-colors duration-300 ${step.active ? 'border-[#FE7623]' : 'border-zinc-200 group-hover:border-[#FE7623]'}`}></div>
                    <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{step.time}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
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
                  <div className="flex text-[#FE7623] mb-4 gap-1.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 data-animate="pricing-header" className={`text-2xl font-semibold text-zinc-900 mb-6 transition-all duration-700 ${isVisible('pricing-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Pricing Guide</h2>
            <p className="text-sm text-zinc-500 mb-8">Cost varies depending on individual factors.</p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 text-left">
              <h4 className="text-sm font-semibold text-zinc-900 mb-4">Cost Factors Include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Number of back zones treated", "Whether flanks are included", "Amount of fat to be removed", "Hospital and anaesthesia fees"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 hover:text-[#FE7623] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-200 text-center">
                <p className="text-sm font-medium text-zinc-900">A full quotation is provided after consultation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Harvard Medical School", url: "https://www.health.harvard.edu/", desc: "Describes liposuction as a safe method to remove subcutaneous fat when performed by qualified surgeons.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Confirms liposuction permanently removes fat cells from targeted areas, with best maintenance through stable weight.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Studies show power-assisted liposuction (PAL) can improve efficiency and support controlled, uniform fat removal.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
                <svg className="w-10 h-10 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-zinc-900">Frequently Asked Questions</h2>
                <p className="text-sm text-zinc-500">Get answers to common concerns about back liposuction</p>
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
                      <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Achieve a smoother, cleaner back silhouette.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines medical precision, MicroAire PAL technology, and safety-first planning to deliver natural, long-lasting contour improvement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-2xl text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-7 h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <a href="#" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-2xl text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                Book a Consultation Today
                <svg className="w-7 h-7 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["back liposuction", "bra-line fat", "back rolls", "subcutaneous fat", "MicroAire PAL", "tumescent anesthesia", "compression garments", "body contouring"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
