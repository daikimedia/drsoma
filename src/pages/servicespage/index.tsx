import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Create refs for each section
  const bodyRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const breastRef = useRef<HTMLDivElement>(null);
  const maleRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);

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
    const sections = [bodyRef, faceRef, breastRef, maleRef, othersRef];
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
      <section className="flex bg-[url(/images/service_page_banner_image.png)] bg-no-repeat bg-cover bg-center py-100 lg:py-[175px] relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="flex containers w-full relative z-10">
          <div className="flex w-full flex-col gap-[10px] max-w-[406px]">
            <h1 className="text-white font-bold max-[768px]:!text-[54px] max-[512px]:!text-[42px] drop-shadow-lg">
              Services
            </h1>
            <h5 className="text-white font-semibold drop-shadow-md">
              Discover comprehensive plastic surgery and aesthetic treatments tailored to enhance your natural beauty and confidence.
            </h5>
          </div>
        </div>
      </section>

      <section className="py-30 lg:py-60" ref={bodyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-[url(/images/body_background.png)] bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-0') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">BODY</h2>
                <p className="text-header-black">
                  Transform your body with advanced surgical procedures designed to sculpt, contour, and enhance your natural physique. Our body contouring treatments help you achieve the shape you&apos;ve always desired through safe, effective surgical techniques.
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/body/liposuction-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-0') ? '0.1s' : '0s' }}
              >
                <Image
                  src="/images/liposuction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Liposuction"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Liposuction (Remove Unwanted Fat)
                </h4>
              </Link>
              <Link
                href={"/body/tummy-tuck-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-0') ? '0.2s' : '0s' }}
              >
                <Image
                  src="/images/tummy_tuck.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Tummy Tuck"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Tummy Tuck
                </h4>
              </Link>
              <Link
                href={"/aesthetic-treatments/keloid-treatment-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-0') ? '0.3s' : '0s' }}
              >
                <Image
                  src="/images/keloid_treatment.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Keloid Treatment"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Keloid Treatment
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/body"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Body Treatments
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-30 lg:pb-60" ref={faceRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-[url(/images/face_background.png)] bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-1') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">FACE</h2>
                <p className="text-header-black">
                  Rejuvenate and enhance your facial features with precision surgical techniques and advanced aesthetic procedures. From facial lifts to non-surgical treatments, we help restore your youthful appearance and natural beauty.
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/face/face-lift-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.1s' : '0s' }}
              >
                <Image
                  src="/images/face_lift.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Face Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Face Lift
                </h4>
              </Link>
              <Link
                href={"/servicespage/blepharoplasty-eyelid-reduction"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.2s' : '0s' }}
              >
                <Image
                  src="/images/eyelid_reduction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Blepharoplasty"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Blepharoplasty/Eyelid Reduction
                </h4>
              </Link>
              <Link
                href={"/face/rhinoplasty-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.3s' : '0s' }}
              >
                <Image
                  src="/images/rhinoplasty_in_nose.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Rhinoplasty"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Rhinoplasty
                </h4>
              </Link>
              <Link
                href={"/servicespage/safe-thread-lift-in-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.4s' : '0s' }}
              >
                <Image
                  src="/images/Safe_thread_in_face.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Safe Thread Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Safe Thread Lift
                </h4>
              </Link>
              <Link
                href={"/face/otoplasty-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.5s' : '0s' }}
              >
                <Image
                  src="/images/pinnaplasty_in_ear.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Otoplasty"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Otoplasty/Pinnaplasty
                </h4>
              </Link>
              <Link
                href={"/servicespage/lip-filler-malaysia-no-surgery-needed"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.6s' : '0s' }}
              >
                <Image
                  src="/images/lip_filler.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Filler"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Filler
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/face"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Face Treatments
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-30 lg:pb-60" ref={breastRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-[url(/images/breast_background.png)] bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-2') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">BREAST</h2>
                <p className="text-header-black">
                  Achieve your desired breast shape and size through specialized surgical procedures. Our breast surgery services include augmentation, reduction, and lift procedures performed with the highest standards of safety and aesthetic excellence.
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/servicespage/breast-lift"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.1s' : '0s' }}
              >
                <Image
                  src="/images/breast_lift.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Breast Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Breast Lift
                </h4>
              </Link>
              <Link
                href={"/breast/breast-augmentation-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.2s' : '0s' }}
              >
                <Image
                  src="/images/breast_augmentation.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Breast Augmentation"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Breast Augmentation
                </h4>
              </Link>
              <Link
                href={"/servicespage/safe-breast-reduction-in-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.3s' : '0s' }}
              >
                <Image
                  src="/images/safe_breast_reduction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Safe Breast Reduction"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Safe Breast Reduction
                </h4>
              </Link>
              {/* <Link
                href={"/servicespage/ariom-breast-implant"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.4s' : '0s' }}
              >
                <Image
                  src="/images/arion_breast_implant.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Arion Breast Implant"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Arion Breast Implant
                </h4>
              </Link> */}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/breast"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Breast Treatments
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-30 lg:py-60" ref={maleRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-para-white rounded-[16px] overflow-hidden transition-all duration-700 ${
              isVisible('section-3') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex w-full flex-col gap-[10px] py-[33px] px-40 max-w-[668px]">
                <h2 className="text-header-black">
                  Male Cosmetic Surgery and Treatment
                </h2>
                <p className="text-header-black">
                  Specialized cosmetic procedures designed specifically for men to enhance confidence and achieve desired physical improvements. Our male-focused treatments address unique aesthetic concerns with discretion and professional care.
                </p>
              </div>
              <div className="hidden md:flex flex-shrink-0 w-[250px] ml-auto self-stretch">
                <Image
                  src="/images/natural.jpg"
                  width={250}
                  height={200}
                  alt="Male Cosmetic Surgery"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/servicespage/six-pack-enhancement"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-3') ? '0.1s' : '0s' }}
              >
                <Image
                  src="/images/pack_enhancement.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="6-Pack Enhancement"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  6-Pack Enhancement Liposuction
                </h4>
              </Link>
              <Link
                href={"/servicespage/male-breast-reduction"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-3') ? '0.2s' : '0s' }}
              >
                <Image
                  src="/images/male_breast_reduction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Male Breast Reduction"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Gynecomastia: Male Breast Reduction
                </h4>
              </Link>
              <Link
                href={"/servicespage/penile-enhancement"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-3') ? '0.3s' : '0s' }}
              >
                <Image
                  src="/images/Penile Enhancement men.jpg"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Penile Enhancement"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Penile Enhancement
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/male"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Male Treatments
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-30 lg:pb-60" ref={othersRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full py-[33px] px-40 rounded-[16px] bg-para-white transition-all duration-700 ${
              isVisible('section-4') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex w-full flex-col gap-[10px]">
                <h2 className="text-header-black">Others</h2>
                <p className="text-header-black">
                  Advanced aesthetic treatments and specialized procedures that complement our surgical services. From fat transfer techniques to cellular rejuvenation therapies, we offer innovative solutions for comprehensive beauty enhancement.
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full transition-all duration-700 ${
              isVisible('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/servicespage/fat-transfer"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.1s' : '0s' }}
              >
                <Image
                  src="/images/liposuction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Fat Transfer"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Fat Transfer
                </h4>
              </Link>
              <Link
                href={"/servicespage/skin-care"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.2s' : '0s' }}
              >
                <Image
                  src="/images/skin_care_image.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Advanced Skin Care"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Advanced Skin Care
                </h4>
              </Link>
              <Link
                href={"/regenerative-treatments/cellular-rejuvenation-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.3s' : '0s' }}
              >
                <Image
                  src="/images/face_image.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Cellular Rejuvenation Therapies"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center leading-tight">
                  Cellular Rejuvenation Therapies
                </h4>
              </Link>
              <Link
                href={"/regenerative-treatments/exion-treatment-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.4s' : '0s' }}
              >
                <Image
                  src="/images/pinnaplasty_in_ear.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="EXION"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  EXION
                </h4>
              </Link>
              <Link
                href={"/servicespage/advanced-wound-management"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.5s' : '0s' }}
              >
                <Image
                  src="/images/advanced_wound_management.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Advanced Wound Management"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Advanced Wound Management
                </h4>
              </Link>
              <Link
                href={"/servicespage/exosomes-therapy"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.6s' : '0s' }}
              >
                <Image
                  src="/images/cellular_rejuvenation.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Exosomes Therapy"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Exosomes Therapy
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
