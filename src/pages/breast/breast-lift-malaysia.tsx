import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BreastLiftMalaysia() {
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
    { question: "What is a breast lift?", answer: "A breast lift (mastopexy) is a surgical procedure that lifts and reshapes sagging breasts by removing excess skin and repositioning the nipple and breast tissue." },
    { question: "How is a breast lift done?", answer: "Incisions are made based on the degree of sagging, excess skin is removed, breast tissue is reshaped, and the nipple and areola are repositioned to a higher, natural level." },
    { question: "When will I see results?", answer: "You will notice an immediate lift, but swelling takes time to settle. Most patients see a more stable shape at 4-6 weeks, with final refinement from 3-6 months." },
    { question: "How long does a breast lift last?", answer: "Results are long-lasting, but aging, gravity, pregnancy, and weight changes can affect the breasts over time. Stable weight and good support help maintain results." },
    { question: "Does a breast lift make breasts bigger?", answer: "A breast lift primarily reshapes and elevates. It can make breasts appear fuller due to improved positioning, but it does not add volume. For larger size, implants can be combined." },
    { question: "Is a breast lift painful?", answer: "Discomfort is usually mild to moderate in the first week and is controlled with medication. Most patients describe tightness rather than sharp pain." },
    { question: "Can I breastfeed after a lift?", answer: "Many patients can breastfeed, depending on the technique and tissue changes. This is discussed during consultation based on your future plans." },
    { question: "Does a breast lift leave scars?", answer: "Yes, but incision placement is planned to be as discreet as possible. Scars fade significantly over time with proper aftercare and scar management." },
    { question: "Is a breast lift safe?", answer: "When performed by a certified plastic surgeon in a proper medical facility, breast lift surgery is generally safe. Risks exist like all surgeries and are explained during consultation." },
    { question: "What happens if I get pregnant after?", answer: "Pregnancy can stretch breast skin and affect the lifted shape. If pregnancy is planned soon, it may be better to delay surgery for longer-lasting results." }
  ]

  return (
    <>
      <Head>
        <title>Breast Lift Malaysia (Mastopexy) | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Certified Plastic Surgeon for Breast Lift in Malaysia. Lift, reshape and restore natural youthful contour." />
      </Head>

      <style jsx global>{`
        .breast-lift-page ::selection {
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

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .hover-scale {
          transition: all 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.02);
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(254, 118, 35, 0.3);
        }
      `}</style>

      <main className="breast-lift-page bg-white text-header-black">
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FE7623] text-xs font-semibold mb-6 uppercase animate-fadeInUp opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Breast Lift Malaysia (Mastopexy)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-header-black leading-[1.1] mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Lift. Reshape. <br />
                <span className="text-para-black">Restore Natural Youthful Contour.</span>
              </h1>
              <p className="text-lg text-para-black leading-relaxed mb-8 max-w-xl animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Performed by a Certified Plastic Surgeon. Tailored to your anatomy to elevate sagging tissue and reposition the nipple for a balanced, youthful silhouette.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/" className="inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover-glow transition-all duration-300 shadow-lg shadow-orange-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation (WhatsApp)
                </a>
                <a href="#procedure" className="inline-flex justify-center items-center gap-2 bg-white border border-zinc-200 text-header-black px-8 py-4 rounded-md text-sm font-medium hover:bg-zinc-50 hover:border-[#FE7623] hover:text-[#FE7623] hover:scale-105 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Procedure Details
                </a>
              </div>
            </div>

            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden animate-fadeInRight opacity-0 group" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image src="/images/breast_lift.png" alt="Breast Lift Surgery" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/20 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-8 left-8 bg-[#FE7623] px-8 py-5 rounded-xl shadow-xl max-w-xs animate-float">
                <p className="text-sm font-bold text-white">Certified Plastic Surgeon</p>
                <p className="text-xs text-white/90 mt-1 leading-snug">Dr. Soma focuses on natural shape, improved symmetry, and safe surgical outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Causes */}
        <section id="procedure" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div data-animate="def-1" className={`transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold text-header-black mb-6">What Is a Breast Lift?</h2>
                <p className="text-para-black leading-relaxed mb-6">
                  A breast lift, or <span className="text-[#FE7623] font-semibold">mastopexy</span>, is a surgical procedure designed to raise and reshape sagging breasts. Major medical institutions such as the <span className="font-semibold text-header-black">Mayo Clinic</span> describe breast lift surgery as a method to raise and reshape breasts when changes from aging, pregnancy, or weight fluctuations cause sagging.
                </p>
                <p className="text-para-black leading-relaxed mb-8">
                  It involves removing excess stretched skin, repositioning breast tissue to a higher position, and elevating the nipple and areola to a natural level.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-100 hover:border-[#FE7623]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="mt-1 min-w-[20px] text-[#FE7623] group-hover:scale-110 transition-transform"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div>
                    <div>
                      <h4 className="text-sm font-semibold text-header-black">Nipple Elevation</h4>
                      <p className="text-xs text-para-black mt-1">Repositions downward-pointing nipples to a youthful level.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-zinc-100 hover:border-[#FE7623]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="mt-1 min-w-[20px] text-[#FE7623] group-hover:scale-110 transition-transform"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243z" /></svg></div>
                    <div>
                      <h4 className="text-sm font-semibold text-header-black">Skin Reduction</h4>
                      <p className="text-xs text-para-black mt-1">Removes excess stretched skin envelope for firmness.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-animate="def-2" className={`transition-all duration-700 delay-200 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-2xl font-semibold text-header-black mb-6">Why Breasts Sag (Ptosis)</h3>
                <p className="text-sm text-para-black mb-6">Breasts naturally change over time due to various factors. Sagging is common, normal, and treatable.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", title: "Pregnancy & Nursing", desc: "Volume changes stretch the skin." },
                    { icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", title: "Weight Fluctuations", desc: "Loss of fat volume causes deflation." },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Aging & Gravity", desc: "Loss of skin elasticity over time." },
                    { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Genetics", desc: "Inherited tissue quality." }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-lg border border-zinc-200 hover:border-[#FE7623] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                      <svg className="w-5 h-5 text-[#FE7623] mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      <h4 className="text-sm font-semibold text-header-black">{item.title}</h4>
                      <p className="text-xs text-para-black mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <h4 className="text-sm font-bold text-header-black uppercase mb-3">Common Concerns Addressed:</h4>
                <ul className="space-y-2 text-sm text-para-black">
                  {["Breasts that sit lower on the chest", "Loss of firmness and projection", "Stretched or enlarged areolas", "Breast asymmetry due to sagging"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-[#FE7623] transition-colors cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FE7623]"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div data-animate="how-it-works" className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-semibold text-header-black mb-4">How a Breast Lift Works</h2>
            <p className="text-para-black text-sm max-w-2xl mx-auto">Dr. Soma prioritizes natural breast proportions, stable nipple positioning, and long-term shape support.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Planning", desc: "Detailed measurements, symmetry planning, and marking the breast shape." },
              { num: "02", title: "Incision", desc: "Carefully chosen pattern based on the degree of sagging and skin quality." },
              { num: "03", title: "Reshaping", desc: "Removing excess skin, reshaping tissue, and repositioning the nipple/areola." },
              { num: "04", title: "Support", desc: "Layered closure for internal support, followed by dressings and surgical bra." }
            ].map((step, i) => (
              <div key={i} data-animate={`step-${i}`} className={`p-6 bg-zinc-50 rounded-xl hover:bg-[#FE7623] hover:text-white group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${isVisible(`step-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                <span className="block text-2xl font-bold text-[#FE7623] mb-2 group-hover:text-white transition-colors">{step.num}</span>
                <h3 className="text-sm font-bold text-header-black mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-xs text-para-black leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Techniques Grid */}
        <section id="types" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="types-header" className={`mb-16 max-w-2xl transition-all duration-700 ${isVisible('types-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold text-header-black mb-4">Types of Breast Lift Offered</h2>
              <p className="text-para-black text-sm">The best technique depends on the degree of sagging, breast size, and skin quality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Periareolar Lift", sub: "Donut Lift", desc: "Best for mild sagging. Incision around the areola. Can reduce areola size. Minimal scarring pattern.", dark: false },
                { num: "2", title: "Vertical Lift", sub: "Lollipop Lift", desc: "Best for moderate sagging. Incision around areola plus a vertical line to crease. Stronger reshaping and projection.", dark: false },
                { num: "3", title: "Anchor Lift", sub: "Inverted-T", desc: "Best for significant sagging or heavier breasts. Greatest lift and skin removal. Excellent for major reshaping.", dark: false },
                { num: "4", title: "Lift + Implants", sub: "Augmentation Mastopexy", desc: "For lifted breasts plus more volume. Enhances upper pole fullness. Best when volume loss is a major concern.", dark: true }
              ].map((type, i) => (
                <div key={i} data-animate={`type-${i}`} className={`${type.dark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'} p-8 rounded-xl border shadow-sm hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group relative overflow-hidden cursor-pointer ${isVisible(`type-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  {type.dark && (
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <svg className="w-16 h-16 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  )}
                  <div className={`w-12 h-12 ${type.dark ? 'bg-[#FE7623] text-white' : 'bg-zinc-50 text-header-black group-hover:bg-[#FE7623] group-hover:text-white'} rounded-lg flex items-center justify-center mb-6 font-bold transition-all duration-300`}>{type.num}</div>
                  <h3 className={`text-base font-semibold ${type.dark ? 'text-white' : 'text-header-black'} mb-2`}>{type.title}</h3>
                  <p className={`text-xs ${type.dark ? 'text-para-black' : 'text-[#FE7623]'} font-mono mb-4 uppercase`}>{type.sub}</p>
                  <p className={`text-sm ${type.dark ? 'text-para-black' : 'text-para-black'} leading-relaxed`}>{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparisons */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div data-animate="table-1" className={`transition-all duration-700 ${isVisible('table-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-header-black mb-6 flex items-center gap-3">What a Breast Lift Improves</h3>
                <div className="border border-zinc-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-zinc-50 text-header-black font-semibold border-b border-zinc-200">
                      <tr><th className="p-4">Area</th><th className="p-4">Improvement</th></tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {[
                        { area: "Nipple Position", imp: "Elevates downward-pointing nipples to natural height" },
                        { area: "Areola Size", imp: "Can reduce stretched areolas for better proportion" },
                        { area: "Breast Contour", imp: "Creates a firmer, rounder, more youthful shape" },
                        { area: "Symmetry", imp: "Balances uneven sagging between both breasts" },
                        { area: "Upper Fullness", imp: "Improves projection (add implants if volume is low)" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                          <td className="p-4 font-medium text-header-black">{row.area}</td>
                          <td className="p-4 text-para-black">{row.imp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div data-animate="table-2" className={`transition-all duration-700 ${isVisible('table-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-header-black mb-6 flex items-center gap-3">
                  Lift vs. Augmentation
                  <span className="text-[10px] uppercase bg-orange-100 text-[#FE7623] px-2 py-1 rounded font-bold animate-pulse">Guide</span>
                </h3>
                <div className="border border-zinc-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-zinc-50 text-header-black font-semibold border-b border-zinc-200">
                      <tr><th className="p-4">Feature</th><th className="p-4">Breast Lift</th><th className="p-4">Augmentation</th></tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {[
                        { feat: "Lifts Sagging", lift: "Yes", aug: "No", liftHighlight: true },
                        { feat: "Nipple Position", lift: "Improves", aug: "No Change", liftHighlight: true },
                        { feat: "Adds Volume", lift: "Not primarily", aug: "Yes", liftHighlight: false },
                        { feat: "Reduces Skin", lift: "Yes", aug: "No", liftHighlight: true }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                          <td className="p-4 text-para-black">{row.feat}</td>
                          <td className={`p-4 ${row.liftHighlight ? 'font-semibold text-[#FE7623]' : 'text-para-black'}`}>{row.lift}</td>
                          <td className={`p-4 ${!row.liftHighlight ? 'font-semibold text-[#FE7623]' : 'text-para-black'}`}>{row.aug}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-right">
                  <Link href="/breast/breast-augmentation-malaysia" className="inline-flex items-center gap-2 text-sm font-medium text-[#FE7623] hover:text-[#e56010] group transition-colors">
                    View Breast Augmentation (Implants)
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-16 px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div data-animate="evidence" className={`text-center mb-12 transition-all duration-700 ${isVisible('evidence') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-semibold mb-4 text-white">Scientific Evidence & Authority</h3>
              <p className="text-para-black text-sm leading-relaxed max-w-2xl mx-auto">The surgical principles behind mastopexy are well established in aesthetic plastic surgery literature.</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-para-black mt-4">
                <span className="hover:text-[#FE7623] transition-colors cursor-pointer">#mastopexy</span>
                <span className="hover:text-[#FE7623] transition-colors cursor-pointer">#breastptosis</span>
                <span className="hover:text-[#FE7623] transition-colors cursor-pointer">#nipple-areola</span>
                <span className="hover:text-[#FE7623] transition-colors cursor-pointer">#skin-envelope</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Explains breast lift surgery as a method to change breast shape and raise breasts by removing excess skin." },
                { name: "Harvard Health", url: "https://www.health.harvard.edu/", desc: "Discusses how breast shape and firmness change due to aging, gravity, and pregnancy, and how surgery restores contour." },
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Clinical studies evaluating mastopexy techniques, scar patterns, and complication rates supporting safe surgical planning." }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-[#FE7623] hover:bg-zinc-800/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white group-hover:text-[#FE7623] transition-colors">{source.name}</span>
                    <svg className="w-4 h-4 text-para-black group-hover:text-[#FE7623] group-hover:rotate-12 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-xs text-para-black mt-2 group-hover:text-white/70 transition-colors">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery & Timeline */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div data-animate="recovery" id="recovery" className={`transition-all duration-700 ${isVisible('recovery') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-header-black mb-8">Post-Operative Recovery</h3>
                <div className="relative pl-8 border-l-2 border-zinc-200 space-y-10">
                  {[
                    { title: "Immediate / Week 1", desc: "Support bra applied. Mild soreness. Return to desk work (comfort dependent). Avoid lifting.", active: true },
                    { title: "Week 2-3", desc: "Swelling reduces. Bruising improves. Light walking encouraged. Support bra continues.", active: false },
                    { title: "Week 4-6", desc: "Resume light exercise (with approval). Shape appears more settled. Scars begin to mature.", active: false },
                    { title: "Month 3-6", desc: "Final contour becomes more natural. Scars continue to fade. Full shape refinement.", active: false }
                  ].map((step, i) => (
                    <div key={i} className="relative group cursor-pointer">
                      <div className={`absolute -left-[39px] w-5 h-5 rounded-full border-4 transition-all duration-300 group-hover:scale-125 ${step.active ? 'bg-[#FE7623] border-white shadow-sm' : 'bg-white border-zinc-200 group-hover:bg-[#FE7623] group-hover:border-white'}`}></div>
                      <h4 className="text-sm font-bold text-header-black uppercase group-hover:text-[#FE7623] transition-colors">{step.title}</h4>
                      <p className="text-sm text-para-black mt-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div data-animate="expect" className={`bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm h-fit hover:shadow-xl transition-all duration-500 ${isVisible('expect') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-header-black mb-6">What to Expect</h3>
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-header-black mb-4">You will receive:</h4>
                  <ul className="space-y-3">
                    {["Support bra guidance (typically 6 weeks)", "Pain relief medication & Antibiotics", "Wound care instructions", "Scheduled surgeon follow-up visits"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-para-black hover:text-[#FE7623] transition-colors cursor-pointer group">
                        <svg className="w-4 h-4 text-[#FE7623] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-orange-50 rounded-lg border border-orange-100 hover:border-[#FE7623] transition-colors">
                  <h4 className="text-sm font-bold text-orange-900 mb-2">Pain Description</h4>
                  <p className="text-sm text-orange-800 leading-relaxed italic">&ldquo;Tightness and soreness similar to chest muscle fatigue.&rdquo; - Most patients describe it as discomfort rather than sharp pain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates & Benefits */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-animate="candidates" className={`transition-all duration-700 ${isVisible('candidates') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-3xl font-semibold text-header-black mb-6">Who Is a Good Candidate?</h3>
                <ul className="space-y-4 mb-8">
                  {["Sagging breasts or downward-pointing nipples.", "Stable weight and good overall health.", "Finished breastfeeding and pregnancy plans (recommended).", "Non-smoker or willing to stop temporarily.", "Realistic expectations."].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group cursor-pointer">
                      <div className="mt-1 min-w-[20px] text-[#FE7623] group-hover:scale-110 transition-transform"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      <span className="text-sm text-header-black font-medium group-hover:text-[#FE7623] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-5 bg-red-50 rounded-lg border border-red-100 flex items-start gap-3 hover:border-red-300 transition-colors">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div className="text-sm text-red-900/80 leading-relaxed"><span className="font-bold">Not suitable if:</span> Pregnant/breastfeeding, uncontrolled medical conditions, major weight changes expected, or smoking without willingness to stop.</div>
                </div>
              </div>
              <div data-animate="benefits" className={`transition-all duration-700 ${isVisible('benefits') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-3xl font-semibold text-header-black mb-6">Benefits of a Breast Lift</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: "M5 10l7-7m0 0l7 7m-7-7v18", text: "Restores youthful breast height and contour" },
                    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Improves firmness and projection" },
                    { icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Elevates nipple position for natural appearance" },
                    { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", text: "Enhances clothing fit and confidence" },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Long-lasting improvement (with stable weight)" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-4 rounded-lg bg-zinc-50 hover:bg-[#FE7623] group transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-2 bg-white rounded-md shadow-sm text-[#FE7623] group-hover:bg-white/20 group-hover:text-white transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg></div>
                      <span className="text-sm font-semibold text-header-black group-hover:text-white transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-24 px-6 bg-zinc-900 text-white">
          <div data-animate="usp" className={`max-w-7xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible('usp') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-semibold mb-6">What Makes Dr. Soma&apos;s Breast Lift Different?</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Certified Surgeon", desc: "Performed only by a certified plastic surgeon." },
              { icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", title: "Tailored Technique", desc: "Selection based on your degree of sagging." },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Safety First", desc: "Hospital-grade safety standards and care." },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Aftercare", desc: "Comprehensive post-op care and scar guidance." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FE7623]/10 transition-all duration-500 group cursor-pointer">
                <svg className="w-8 h-8 text-[#FE7623] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                <h4 className="font-bold text-white mb-2 text-sm group-hover:text-[#FE7623] transition-colors">{item.title}</h4>
                <p className="text-xs text-para-black group-hover:text-white/70 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonials" className={`text-2xl font-semibold text-header-black mb-12 text-center transition-all duration-700 ${isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Amira", age: "34", text: "My breasts look lifted and natural again after breastfeeding. Dr. Soma was very clear and professional throughout." },
                { name: "Joanne", age: "42", text: "The shape is youthful, and my confidence is back. The recovery was smoother than I expected." },
                { name: "Siti", age: "38", text: "Safe, detailed, and aesthetically perfect. The results look proportional, not overdone." }
              ].map((review, i) => (
                <div key={i} data-animate={`review-${i}`} className={`bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-pointer group ${isVisible(`review-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex gap-1 text-[#FE7623] mb-6">
                    {[...Array(5)].map((_, j) => <svg key={j} className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" style={{transitionDelay: `${j * 50}ms`}} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                  </div>
                  <p className="text-sm text-para-black leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xs font-bold text-para-black group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all">{review.name[0]}</div>
                    <div>
                      <p className="text-sm font-bold text-header-black">{review.name}, {review.age}</p>
                      <p className="text-xs text-para-black">Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-24 px-6 bg-zinc-50">
          <div data-animate="pricing" className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible('pricing') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-2xl font-semibold mb-6">Pricing Guide</h2>
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500">
              <p className="text-para-black text-sm mb-6">Breast lift cost varies depending on:</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Technique required", "Degree of sagging", "Implants (if added)", "Operating time", "Hospital/Anaesthesia"].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-100 rounded-full text-xs text-para-black hover:bg-[#FE7623] hover:text-white transition-all duration-300 cursor-pointer">{item}</span>
                ))}
              </div>
              <p className="text-sm font-semibold text-header-black">A full quotation is provided after consultation.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-50 lg:py-100 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto px-6">
            <div data-animate="faq-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block bg-white text-para-black font-normal px-4 py-1.5 mb-6 border border-[#E8E8E8] rounded-full text-sm hover:border-[#FE7623] hover:text-[#FE7623] transition-colors cursor-pointer">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-header-black mb-5">
                Frequently Asked Questions
              </h2>
              <p className="text-[17px] text-para-black">
                Clear answers to help you make informed decisions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md ${
                    openFaq === index
                      ? 'border-[#FE7623] shadow-lg shadow-orange-100'
                      : 'border-[#E8E8E8] hover:border-[#FE7623]/50'
                  }`}
                >
                  <button
                    className={`w-full flex items-center justify-between px-8 py-6 text-left transition-colors ${
                      openFaq === index ? 'bg-[#FAFAF9]' : 'hover:bg-[#FAFAF9]'
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <h5 className={`text-primary font-medium pr-4 transition-colors`}>{faq.question}</h5>
                    <svg
                      className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180 text-[#FE7623]' : 'text-para-black'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6 bg-[#FAFAF9] border-t border-[#E8E8E8]">
                      <p className="text-[16px] text-para-black leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-24 px-6 bg-zinc-50">
          <div data-animate="cta" className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-header-black mb-6">Restore a Youthful, Lifted Shape</h2>
            <p className="text-lg text-para-black mb-10 max-w-xl mx-auto">Dr. Soma combines medical precision, aesthetic planning, and safety-first technique to deliver natural, long-lasting contour improvement.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover-glow transition-all duration-300 shadow-lg shadow-orange-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat on WhatsApp
              </a>
              <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-header-black border border-zinc-200 px-8 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-50 hover:border-[#FE7623] hover:text-[#FE7623] hover:scale-105 transition-all duration-300 group">
                Book a Consultation Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
            <p className="mt-8 text-xs text-para-black">Certified Plastic Surgeon - Kuala Lumpur, Malaysia</p>
          </div>
        </section>
      </main>
    </>
  )
}
