import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const BreastAugmentationImplant = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      question: "Is breast augmentation surgery painful?",
      answer:
        "You can experience moderate pain after your breast surgery, but this can be controlled with pain medication during your first 2 weeks after surgery. This should diminish as you heal.",
    },
    {
      question: "I’m 49. Am I too old for breast augmentation surgery?",
      answer:
        "No. Many women who are in their 40s and 50s have breast augmentation surgery with positive results.",
    },
    {
      question:
        "Do I need to wait until I am done having children for the surgery?",
      answer:
        "Whether you have breast implants or not, pregnancy will change the shape and size of your breasts. This can have an impact on how your augmented breasts look. It’s advisable to postpone pregnancy for 6 months after you have had the procedure done.",
    },
    {
      question: "Can I still breastfeed with breast implants?",
      answer: "Yes, you can still breastfeed and it is safe for your baby.",
    },
    {
      question: "How do I decide how large I want my implants to go?",
      answer:
        "This is one of the hardest parts of having breast augmentation surgery. You will have a consultation before your surgery to see what size options will work best for you and what you want to achieve.",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleAccordion = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
    const sections = [heroRef, detailsRef, faqRef];
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
      <section className="py-50 lg:py-100" ref={heroRef}>
        <div className="flex w-full containers">
          <div className={`flex w-full flex-col gap-45 transition-all duration-700 ${
            isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Breast Augmentation</span> & <span className="text-header-black">Implant</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/breast_augmentation.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Breast Augmentation & Implant"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Service Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary text-white rounded-full font-semibold text-sm shadow-lg">
                    <svg width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    Breast Surgery
                  </span>
                </div>
              </div>
              
              {/* Service Briefing - Right Side */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 bg-orange-50 text-primary rounded-full font-semibold text-sm border border-orange-200">
                    <svg width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    Breast Enhancement
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    There are a number of reasons for having breast augmentation
                    done, such as enlarging small breast, adding volume to breasts
                    that may be sagging due to pregnancy, to reconstruct the
                    breast after surgery has been done, or to add symmetry to the
                    breast.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Volume Enhancement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Symmetry Correction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Natural Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Confidence Boost</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20" ref={detailsRef}>
              <h3 className="text-header-black">
                Breast Augmentation & Implant Details
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Breast Augmentation?</h5>
                <p className="text-para-black">
                  Breast Augmentation, also known as Augmentation Mammoplasty is
                  a surgical procedure using implants to enlarge the breasts by
                  one or more cup sizes. A breast implant in Malaysia is made up
                  of high-grade silicone gel. This procedure can also restore
                  the breast volume lost after weight reduction or pregnancy,
                  achieve a more rounded breast shape or improve the natural
                  breast size asymmetry. This procedure can be combined with
                  Abdominoplasty, Liposuction & Facelift.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who is the ideal candidate for Breast Augmentation in
                  Malaysia?
                </h5>
                <p className="text-para-black">
                  The ideal candidates are physically healthy women who want to
                  increase the breast volume after pregnancy or having small
                  breast size, improve the symmetry of their breast and want to
                  enhance the body contour for personal reasons.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  How Breast Implant/Augmentation in Malaysia is done?
                </h5>
                <p className="text-para-black">
                  Before your surgery, you will have a consultation with your
                  surgeon to go over what your expectations are, and which
                  treatment and implant position will work best for you. Breast
                  augmentation surgery is done under general anesthesia as a day
                  procedure. An incision is made either below the breast
                  (inframammary fold), in the areola, or next to the breast,
                  such as the armpit (axillary). Then, the implant is inserted
                  and positioned either behind the chest muscle or between the
                  chest muscle and breast tissue. The incision is then stitched
                  and covered with a dressing. The procedure can take between 1
                  hour to 90 minutes, and in most cases, you will be able to go
                  home the same day, depending on what time your surgery is
                  done. Our surgeon will prescribe pain relief if you experience
                  any discomfort afterward.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  Soreness and swelling are likely to be encountered for 1 to 2
                  weeks after surgery. Bruising is also possible. Any discomfort
                  can be controlled by medication prescribed by your doctor.
                  Soon after surgery, you should be able to move around, but you
                  will need to avoid any heavy lifting or strenuous activity for
                  1 month at least. It can take a few weeks for you to recover
                  fully from breast augmentation surgery, and you may need to
                  take a couple of weeks off from work. It is not advisable to
                  drive for 1 week after your surgery. This procedure might
                  leave scars on the breast or in the armpit, however, these
                  will slowly disappear over time. You will be given a cream to
                  help the scar heal well. You will be wearing a compression
                  garment and a surgical bra after the surgery, which you may
                  need to wear for up to 3 months. Stitches can be taken out in
                  a week to 10 days. You should be able to return to most of
                  your normal activities within 6 weeks. Your breast will begin
                  to feel and look more natural after a few months. Infections
                  are very rare. In some cases, the implant may need to be
                  removed until the infection clears before a new implant can be
                  inserted. Visit us for a consultation with Dr. Soma.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What are the benefits of the procedure?
                </h5>
                <p className="text-para-black">
                  Breast augmentation adds curves and volume to the breasts for
                  those whose breasts are naturally flat or small. It also
                  enhances the cleavage. Volume is added to the top of the
                  breasts to give a fuller look. It can help to even out breasts
                  that are naturally asymmetrical. Most women have one breast
                  that is a bit smaller than the other, which is barely
                  noticeable. However, for some, the difference is noticeable
                  and breast augmentation will help balance out the breasts.
                  Another benefit of breast augmentation is that it can restore
                  breasts that have become saggy due to pregnancy, significant
                  weight loss, or as a result of aging. With this surgery, you
                  can bring the volume back to your breasts to give them a more
                  youthful and perky appearance. Many breast cancer patients who
                  have had a breast removed say they feel like a shell of their
                  old self. For those who have had a breast removed through a
                  mastectomy, having breast augmentation surgery can reconstruct
                  the breast that was lost and make them feel whole. The main
                  benefit of having breast augmentation surgery is that it
                  brings back your self-esteem, makes you feel more comfortable
                  in your own body, and boosts your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-50 lg:pb-100" ref={faqRef}>
        <div className="flex w-full containers">
          <div className={`flex w-full flex-col gap-10 transition-all duration-700 ${
            isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-primary md:text-start text-center max-[512px]:!text-[34px]">
              Frequently Asked <span className="text-header-black">Questions</span>
            </h2>
            <div className="flex w-full flex-col gap-[6px]">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-10 w-full border border-stroke bg-para-white rounded-[12px] py-[14px] px-[24px]"
                >
                  <div
                    className="flex justify-between !flex-nowrap w-full cursor-pointer items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5 className="text-primary">{item.question}</h5>
                    <div className="hidden lg:flex">
                      {openIndex === index ? <CloseIcon /> : <PlusIcon />}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="flex">
                      <p className="text-para-black">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedTopicsGrid 
        topics={[
          {
            title: "Breast Lift",
            description: "Restore youthful breast position and shape with advanced lift techniques",
            image: "/images/breast_lift.png",
            href: "/servicespage/breast-lift",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Breast Augmentation",
            description: "Enhance breast size and volume with premium implant options",
            image: "/images/breast_augmentation.png",
            href: "/breast/breast-augmentation-malaysia",
            badge: "Current",
            badgeColor: "green"
          },
          {
            title: "Breast Reduction",
            description: "Reduce breast size for comfort and improved proportions",
            image: "/images/safe_breast_reduction.png",
            href: "/servicespage/safe-breast-reduction-in-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Ariom Implant",
            description: "Advanced implant technology for natural-looking results",
            image: "/images/arion_breast_implant.png",
            href: "/servicespage/ariom-breast-implant",
            badge: "Premium",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default BreastAugmentationImplant;
