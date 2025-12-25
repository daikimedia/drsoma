import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function LiposuctionMalaysia() {
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
    { question: "What is liposuction?", answer: "A surgical fat-removal procedure that contours and reshapes specific areas of the body by removing excess subcutaneous fat." },
    { question: "How is liposuction done?", answer: "Small incisions are made, a fine cannula is inserted, and fat is suctioned out using MicroAire Power-Assisted technology for smoother results and reduced trauma." },
    { question: "When will I see results after liposuction?", answer: "You'll start noticing changes at 4–6 weeks, with the final shape visible between 3–6 months as swelling subsides." },
    { question: "How long does liposuction last?", answer: "Results are long-lasting because fat cells removed do not regenerate. Maintaining stable weight preserves contour." },
    { question: "Can I lose 10 kg with liposuction?", answer: "No. Liposuction is not for weight loss. It removes volume and contours the body, not kilograms." },
    { question: "How painful is liposuction?", answer: "Pain is usually mild to moderate — similar to muscle soreness after an intense workout. Medication keeps discomfort manageable." },
    { question: "Is liposuction good or bad for you?", answer: "When performed by a certified plastic surgeon, liposuction is safe, effective, and one of the most common aesthetic surgeries globally." },
    { question: "What is the best age to get liposuction?", answer: "Most suitable for adults aged 20–60 with good skin elasticity." },
    { question: "Is your stomach flat after liposuction?", answer: "Yes — if your main issue is excess fat. If loose skin is present, a Tummy Tuck may be recommended." },
    { question: "How risky is stomach liposuction?", answer: "Risks are low when done by a trained surgeon in a hospital setting. Dr. Soma performs liposuction with full monitoring and controlled safety protocols." },
    { question: "What body part is most painful for liposuction?", answer: "Areas with tighter skin (e.g., flanks or inner thighs) may feel slightly more sore, but pain is manageable." },
    { question: "How long is bed rest after liposuction?", answer: "You are encouraged to walk immediately after surgery. Most patients return to normal routines within 5–7 days." },
    { question: "Do I need to lose weight before liposuction?", answer: "Not necessary — but being at a stable, healthy weight gives better contouring results." },
    { question: "Does liposuction leave scars?", answer: "Only tiny (3–4mm) incisions hidden in natural creases. They fade significantly with time." }
  ]

  const treatmentAreas = [
    { icon: "user", name: "Abdomen" },
    { icon: "move-horizontal", name: "Flanks" },
    { icon: "maximize", name: "Thighs" },
    { icon: "smile", name: "Chin/Jaw" },
    { icon: "shirt", name: "Arms" },
    { icon: "layers", name: "Back" },
    { icon: "activity", name: "Chest" },
    { icon: "circle", name: "Hips" }
  ]

  const techniques = [
    {
      title: "MicroAire (PAL)",
      desc: "Power-Assisted Liposuction uses rapid vibration to break up fat cells.",
      features: ["Faster recovery", "Smoother contour", "Less tissue trauma"],
      highlight: true
    },
    {
      title: "Mini Liposuction",
      desc: "For slim patients with small stubborn pockets.",
      features: ["Precision sculpting", "30–60 minutes", "Minimal downtime"],
      highlight: false
    },
    {
      title: "Large Volume",
      desc: "For significant contour change in safe hospital setting.",
      features: ["Full monitoring", "Hospital safety standards", "Transformative results"],
      highlight: false
    }
  ]

  const candidateChecklist = [
    "Stable weight",
    "Localised fat",
    "Good skin elasticity",
    "Non-smoker"
  ]

  return (
    <>
      <Head>
        <title>Liposuction Malaysia by Specialist Plastic Surgeon | Remove Stubborn Fat Safely – Dr. Soma</title>
        <meta name="description" content="Looking for safe, surgeon-performed liposuction in Malaysia? Dr. Soma offers advanced body contouring using MicroAire Power-Assisted Liposuction for long-lasting, natural results." />
      </Head>

      <style jsx global>{`
        .liposuction-page ::selection {
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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(254, 118, 35, 0.2); }
          50% { box-shadow: 0 0 20px rgba(254, 118, 35, 0.4); }
        }

        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(254, 118, 35, 0.3); }
          50% { border-color: rgba(254, 118, 35, 0.8); }
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(254, 118, 35, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
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
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .card-shine:hover::before {
          transform: rotate(45deg) translateX(100%);
        }

        .img-zoom {
          overflow: hidden;
        }
        .img-zoom img {
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .img-zoom:hover img {
          transform: scale(1.1);
        }

        .btn-press {
          transition: transform 0.1s ease;
        }
        .btn-press:active {
          transform: scale(0.97);
        }

        .btn-magnetic {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .btn-magnetic:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px -10px rgba(254, 118, 35, 0.5);
        }

        .text-gradient {
          background: linear-gradient(135deg, #FE7623 0%, #ff9a5a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }

        .hover-grow {
          transition: all 0.3s ease;
        }
        .hover-grow:hover {
          transform: scale(1.05);
        }

        .hover-rotate {
          transition: all 0.3s ease;
        }
        .hover-rotate:hover {
          transform: rotate(5deg);
        }

        .icon-bounce:hover svg {
          animation: bounce 0.5s ease-in-out;
        }

        .icon-spin:hover svg {
          animation: rotate 0.5s ease-in-out;
        }

        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FE7623;
          transition: width 0.3s ease;
        }
        .underline-animation:hover::after {
          width: 100%;
        }

        .parallax-card {
          transition: transform 0.5s ease;
        }
        .parallax-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
        }

        .stagger-animation > * {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
        .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
        .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }

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
          transition: width 0.6s, height 0.6s;
        }
        .ripple:hover::after {
          width: 300%;
          height: 300%;
        }

        .accordion-content {
          transition: grid-template-rows 0.3s ease-out;
          display: grid;
          grid-template-rows: 0fr;
        }
        .accordion-content > div { overflow: hidden; }
        .accordion-content.active { grid-template-rows: 1fr; }
      `}</style>

      <main className="liposuction-page bg-white text-zinc-900">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Liposuction in Malaysia.</span> <br />
                <span className="text-zinc-400 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Precise. Safe. Lasting.</span>
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Some fat pockets do not respond to dieting. We use advanced MicroAire (PAL) technology to safely remove stubborn fat and reshape your body with hospital-grade precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/" className="btn-press inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/30 group animate-glow">
                  <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation
                </a>
                <a href="#process" className="btn-press inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-8 py-4 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                  How It Works
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <Image
                src="/images/Liposuction in Malaysia.jpg"
                alt="Liposuction in Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white backdrop-blur-md p-5 rounded-xl border border-zinc-100 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white border border-zinc-200 text-[#FE7623] rounded-xl shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">Technology</p>
                      <p className="text-base font-semibold text-zinc-900">MicroAire Power-Assisted (PAL)</p>
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
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">What Is Liposuction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Liposuction (Lipoplasty) is a surgical procedure that removes excess subcutaneous fat to reshape specific areas of the body. It is <strong>not</strong> a weight-loss treatment, but a precision sculpting technique for areas resistant to diet and exercise.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Removes Subcutaneous Fat</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Enhances Body Proportions</span>
                  </div>
                </div>
              </div>

              {/* Areas Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-6">Common Treatment Areas</h3>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible('def-2') ? 'stagger-animation' : ''}`}>
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-200 text-center hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine ripple bg-white">
                      <svg className="w-10 h-10 mx-auto mb-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{area.name}</span>
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
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Advanced Techniques</h2>
              <p className="text-zinc-500 text-sm">Dr. Soma selects the specific method based on your fat volume and desired outcome.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {techniques.map((tech, i) => (
                <div key={i} data-animate={`tech-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${tech.highlight ? 'animate-border-glow' : ''} ${isVisible(`tech-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tech.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[#FE7623] transition-colors duration-300">{tech.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{tech.desc}</p>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {tech.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 group/item hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#FE7623] group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="border-t border-zinc-200 pt-16">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-10 text-center">The Procedure Steps</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
                <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0 animate-shimmer"></div>

                {[
                  { num: "1", title: "Marking", desc: "Symmetrical planning" },
                  { num: "2", title: "Infiltration", desc: "Tumescent anaesthesia" },
                  { num: "3", title: "Suction", desc: "MicroAire removal" },
                  { num: "4", title: "Compression", desc: "Garment application" }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center group cursor-pointer hover:-translate-y-3 transition-all duration-500" style={{animationDelay: `${i * 150}ms`}}>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-zinc-200 text-sm font-bold flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:text-white group-hover:border-[#FE7623] group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:rotate-[360deg]">{step.num}</div>
                    <h4 className="text-sm font-semibold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors duration-300">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Dr. Soma Section */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <div data-animate="why-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('why-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Image
                src="/images/Liposuction 2.jpg"
                alt="Dr. Soma Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">Safety First</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &ldquo;We prioritize hospital-grade safety protocols and natural results over aggressive over-suctioning.&rdquo;
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div data-animate="why-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('why-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Why Dr. Soma?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Liposuction requires an artistic eye and surgical precision. Dr. Soma combines medical expertise with advanced MicroAire technology to deliver natural, balanced results.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "user-check", title: "Certified Plastic Surgeon", desc: "Performed by a board-certified specialist, not a general practitioner." },
                  { icon: "sliders", title: "Symmetry-Focused", desc: "Precise marking techniques to ensure balanced contouring on both sides." },
                  { icon: "hospital", title: "Hospital Standards", desc: "Full monitoring and sterile environment for maximum safety." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#FE7623] group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-zinc-100">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Good Candidates Checklist</h4>
                <div className="grid grid-cols-2 gap-3">
                  {candidateChecklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors duration-300">
                      <svg className="w-5 h-5 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-zinc-50">
          <div className="flex containers w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-10 text-center text-zinc-900 transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Liposuction vs. Tummy Tuck</h2>

              <div data-animate="compare-table" className={`w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-8 py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <div>Feature</div>
                  <div className="text-[#FE7623] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FE7623] animate-pulse"></span>Liposuction</div>
                  <div>Tummy Tuck</div>
                </div>

                {/* Rows */}
                {[
                  { feat: "Removes Fat", lipo: "Yes", lipoIcon: true, tummy: "Yes", tummyIcon: true },
                  { feat: "Tightens Loose Skin", lipo: "No", lipoX: true, tummy: "Yes", tummyIcon: true },
                  { feat: "Repair Muscles", lipo: "No", lipoX: true, tummy: "Yes", tummyIcon: true },
                  { feat: "Downtime", lipo: "1–2 Weeks", tummy: "3–4 Weeks" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-8 py-6 border-b border-zinc-100 items-center text-sm hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</div>
                    <div className={`flex items-center gap-2 ${row.lipoIcon ? 'text-[#FE7623]' : row.lipoX ? 'text-zinc-400' : 'text-[#FE7623]'}`}>
                      {row.lipoIcon && <svg className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {row.lipoX && <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                      <span className="group-hover:font-semibold transition-all duration-300">{row.lipo}</span>
                    </div>
                    <div className="text-zinc-600 flex items-center gap-2">
                      {row.tummyIcon && <svg className="w-6 h-6 text-green-500 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      <span className="group-hover:text-zinc-900 transition-colors duration-300">{row.tummy}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/body/tummy-tuck-malaysia" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#FE7623] text-[#FE7623] rounded-full text-sm font-semibold hover:bg-[#FE7623] hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/10 hover:shadow-xl hover:shadow-orange-500/20 group btn-magnetic">
                  View Tummy Tuck Details
                  <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Post-Operative Recovery</h2>
              <p className="text-zinc-500 text-sm">Clear Timeline for Your Healing Journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {[
                {
                  time: "Immediately After",
                  title: "Surgery Day",
                  points: ["Compression garment applied", "Mild soreness, swelling, bruising", "Able to walk same day"],
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 1",
                  title: "Early Recovery",
                  points: ["Return to work (desk jobs)", "Bruising improves"],
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 2–3",
                  title: "Healing Phase",
                  points: ["Swelling reduces", "Light walking encouraged"],
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                {
                  time: "Week 4–6",
                  title: "Active Recovery",
                  points: ["Resume exercise", "Contour becomes more visible"],
                  icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Month 3–6",
                  title: "Final Results",
                  points: ["Final shape revealed", "Full tissue tightening"],
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-white pt-14 pb-8 px-8 rounded-2xl border border-zinc-200 shadow-sm card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  {/* Time Badge */}
                  <div className="absolute -top-4 left-6 px-5 py-2 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-300 z-10">
                    {step.time}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500">
                    <svg className="w-7 h-7 text-[#FE7623] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {step.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-600 group-hover:text-zinc-800 hover:translate-x-2 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#FE7623] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div data-animate="recovery-progress" className={`mt-16 transition-all duration-700 ${isVisible('recovery-progress') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-zinc-100 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FE7623] to-orange-400 rounded-full w-0 animate-progress" style={{animation: 'progressBar 2s ease-out forwards', animationDelay: '0.5s'}}></div>
              </div>
              <div className="flex justify-between mt-4 text-xs text-zinc-500">
                <span>Day 1</span>
                <span>Week 1</span>
                <span>Week 2-3</span>
                <span>Week 4-6</span>
                <span>Month 3-6</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-center mb-4 transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Testimonials</h2>
            <p className="text-zinc-500 text-sm text-center mb-12">Real experiences from our satisfied patients</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "My tummy and flanks look so much more sculpted now. Dr. Soma explained everything clearly and my recovery was smooth.", name: "Aida, 38" },
                { text: "I lost several inches around my waist. The results were natural, not overdone.", name: "Helena, 44" },
                { text: "Professional, safe, and the difference is massive. Highly recommended.", name: "Rizal, 35" }
              ].map((testimonial, i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 bg-white rounded-2xl border border-zinc-100 shadow-lg card-3d card-shine hover:border-[#FE7623] ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 150}ms`}}>
                  {/* Quote Icon */}
                  <div className="mb-4 text-[#FE7623]/20 group-hover:text-[#FE7623]/40 transition-colors duration-300">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div className="flex gap-1 text-[#FE7623] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{transitionDelay: `${j * 50}ms`}} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 italic mb-6 leading-relaxed group-hover:text-zinc-800 transition-colors duration-300">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FE7623] to-orange-400 flex items-center justify-center text-white text-base font-bold group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500">{testimonial.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{testimonial.name}</p>
                      <p className="text-xs text-zinc-500">Verified Patient</p>
                    </div>
                  </div>
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
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7623]/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Liposuction cost varies depending on several factors:</p>
                <ul className="space-y-4 mb-8">
                  {["Number of areas", "Amount of fat to remove", "Surgery complexity", "Operating time"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 group/item cursor-pointer hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#FE7623] mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-xl text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 animate-glow">
                  Get Quote via WhatsApp
                </a>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg group hover:scale-110 hover:rotate-6 transition-all duration-300 animate-float">
                  <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 data-animate="faq-header" className={`text-2xl font-semibold text-zinc-900 transition-all duration-700 ${isVisible('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Frequently Asked Questions</h2>
                  <p className="text-sm text-zinc-500">Get answers to common concerns about liposuction</p>
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
              <h3 data-animate="science-header" className={`text-sm font-bold text-zinc-900 uppercase tracking-widest transition-all duration-700 ${isVisible('science-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Harvard Medical School", url: "https://www.health.harvard.edu/", desc: "Describes liposuction as a safe method to remove subcutaneous fat when performed by qualified surgeons.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Confirms liposuction permanently removes fat cells from targeted areas.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed Studies", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Studies show Power-Assisted Liposuction improves precision, reduces trauma, and enhances uniformity.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 group-hover:scale-125 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Get a smoother, more sculpted body.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines medical precision, aesthetics, and safety to deliver natural, long-lasting contour results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-2xl text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat on WhatsApp
              </a>
              <a href="#" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-2xl text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                Book Consultation
                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </a>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["subcutaneous fat", "adipocytes", "MicroAire PAL", "tumescent anesthesia", "body contouring"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
