import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const SkinCare = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Advanced Skin Care</span> <span className="text-header-black">at Soma Plastic Surgery</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/skin_care_image.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Advanced Skin Care Treatment"
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
                    Non-Surgical
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
                    Dermatology
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    At Soma Plastic Surgery, we understand that beautiful, healthy
                    skin starts with the right care. That&apos;s why we offer a curated
                    selection of medical-grade skincare products, formulated to
                    target a variety of skin concerns, including pigmentation,
                    acne, dark spots, dry skin, and sun protection.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Pigmentation Correction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Acne Control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Deep Hydration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Sun Protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                Advanced Skincare for Every Skin Concern
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Brightening & Pigmentation Correction
                </h5>
                <p className="text-para-black">
                  Uneven skin tone, dark spots, and hyperpigmentation can make
                  your complexion look dull. Our advanced brightening
                  treatments, infused with vitamin C, kojic acid, and
                  skin-renewing ingredients, help restore clarity and radiance,
                  leaving your skin visibly brighter and more even-toned.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Acne & Blemish Control</h5>
                <p className="text-para-black">
                  Breakouts, inflammation, and clogged pores can be frustrating.
                  Our acne-fighting solutions, powered by salicylic acid,
                  benzoyl peroxide, and soothing botanical extracts, help clear
                  skin, reduce redness, and prevent future breakouts—giving you
                  a clearer, healthier complexion.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Deep Hydration & Barrier Repair
                </h5>
                <p className="text-para-black">
                  For dry or sensitive skin, hydration is key. Our moisture-rich
                  serums and creams, formulated with hyaluronic acid, ceramides,
                  and essential lipids, provide deep hydration while
                  strengthening the skin&apos;s natural barrier—leaving it soft,
                  plump, and resilient.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Sun Protection & Anti-Aging</h5>
                <p className="text-para-black">
                  Protect your skin from UV damage and premature aging with our
                  range of broad-spectrum sunscreens. Designed for daily wear,
                  our SPF formulations shield against environmental stressors
                  while providing hydration and anti-aging benefits.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Why Choose Our Skincare?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Medical-Grade Formulations
                    </span>{" "}
                    – Higher potency, clinically tested for real results
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Customized for Your Skin
                    </span>{" "}
                    – Solutions tailored to your unique concerns
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Trusted by Experts
                    </span>{" "}
                    – Recommended by our plastic surgeons & skincare specialists
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Visible, Long-Term Results
                    </span>{" "}
                    – Designed to improve skin health over time
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Personalized Skincare Just for You
                </h5>
                <p className="text-para-black">
                  Not sure which products suit your skin best? Visit Soma
                  Plastic Surgery for a one-on-one consultation, where our
                  skincare experts will design a custom regimen tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedTopicsGrid 
        topics={[
          {
            title: "Cellular Rejuvenation",
            description: "Advanced therapies for cellular regeneration and rejuvenation",
            image: "/images/cellular_rejuvenation.png",
            href: "/regenerative-treatments/cellular-rejuvenation-malaysia",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Exosomes Therapy",
            description: "Cellular therapy for regeneration and healing",
            image: "/images/cellular_rejuvenation.png",
            href: "/servicespage/exosomes-therapy",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "EXION",
            description: "The future of non-invasive aesthetic enhancement",
            image: "/images/skin_healing_image.png",
            href: "/regenerative-treatments/exion-treatment-malaysia",
            badge: "Non-Surgical",
            badgeColor: "green"
          },
          {
            title: "Advanced Wound Management",
            description: "Specialized treatment protocols for optimal healing",
            image: "/images/advanced_wound_management.png",
            href: "/servicespage/advanced-wound-management",
            badge: "Specialized",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default SkinCare;
