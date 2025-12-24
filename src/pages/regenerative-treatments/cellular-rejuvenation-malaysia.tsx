import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const CellularRejuvenationTherapies = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Cellular Rejuvenation</span> <span className="text-header-black">Therapies</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/face_image.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Cellular Rejuvenation Therapies"
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
                    Skin Rejuvenation
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    At Soma Plastic Surgery Clinic, we specialize in unlocking
                    your skin&apos;s hidden potential. Whether you&apos;re seeking to smooth
                    wrinkles, revive sagging skin, erase dark spots, or simply
                    turn back the clock, our Cellular Rejuvenation Therapies
                    offer science-backed solutions that work with your skin—not
                    against it. No matter your journey, we&apos;re here to help you
                    glow with confidence.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Exosome Therapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Skin Booster</span>
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
                      <span className="text-gray-700 font-medium">No Downtime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                Awaken Your Skin&apos;s Innate Brilliance
              </h3>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">
                  1. Exosome Therapy: Your Skin&apos;s Master Communicator
                </h5>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Unlock Cellular Repair for Effortless Glow
                  </p>
                  <p className="text-black !font-bold">What You&apos;ll Love:</p>
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      Rapid Renewal:
                    </span>{" "}
                    Speed up healing, reduce redness, and calm irritated or
                    acne-prone skin.
                  </p>
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      {" "}
                      Pigmentation Perfector:
                    </span>{" "}
                    Fade stubborn melasma and sun damage for a luminous, even
                    tone.
                  </p>
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      Hydration from Within:
                    </span>{" "}
                    Achieve a dewy, plump complexion without invasive
                    procedures.
                  </p>
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      No Downtime:
                    </span>{" "}
                    Resume daily life immediately—ideal for active lifestyles.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Key Benefits of Exosome Therapy
                  </p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Skin Rejuvenation & Anti-Aging
                      </span>{" "}
                      – Boosts collagen, reduces wrinkles, improves texture &
                      hydration.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Hyperpigmentation Treatment
                      </span>{" "}
                      – Fades dark spots, evens out skin tone, and reduces
                      discoloration
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Hair Restoration
                      </span>{" "}
                      – Stimulates follicle growth, reduces thinning, and
                      promotes scalp health.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Accelerated Healing & Recovery
                      </span>{" "}
                      – Speeds up post-procedure healing, minimizes scars, and
                      reduces inflammation.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Safe & Natural
                      </span>{" "}
                      –{" "}
                      {`Non-invasive, drug-free, and works with the body&apos;s natural regenerative processes.`}
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Enhances Other Treatments
                      </span>{" "}
                      – Pairs well with PRP, microneedling, and laser therapy
                      for improved results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">
                  2. Skin Booster Injections: The Ultimate Hydration Revolution
                </h5>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Quench, Plump, Illuminate
                  </p>
                  <p className="text-black !font-bold">What You&apos;ll Love:</p>
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      Deep Moisture Surge:
                    </span>{" "}
                    Banish dryness and crepey texture with hyaluronic
                    acid-powered hydration.
                  </p>
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      {" "}
                      Line Eraser:
                    </span>{" "}
                    Soften wrinkles around lips, eyes, and forehead for a
                    smoother silhouette.
                  </p>
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      Instant Radiance Boost:
                    </span>{" "}
                    Achieve a &quot;glass skin&quot; glow that looks lit from within.
                  </p>
                  <p className="text-para-black">
                    <span className="text-primary !font-bold">
                      Quick & Comfortable:
                    </span>{" "}
                    A 30-minute session with results that last months.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Key Benefits of Skin Booster Therapy
                  </p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Intense Hydration
                      </span>{" "}
                      – Deeply nourishes and locks in moisture for long-lasting
                      skin hydration.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Boosts Collagen & Elastin
                      </span>{" "}
                      – Enhances skin firmness and elasticity, reducing sagging.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Smooths Fine Lines & Wrinkles
                      </span>{" "}
                      – Improves skin texture for a youthful, refreshed look.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Brightens & Evens Skin Tone
                      </span>{" "}
                      – Reduces dullness, pigmentation, and uneven complexion.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Improves Skin Barrier Function
                      </span>{" "}
                      – Strengthens the skin, reducing sensitivity and
                      irritation.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Enhances Skin Glow & Radiance
                      </span>{" "}
                      – Leaves skin looking naturally healthy and luminous.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Minimizes Pores & Refines Texture
                      </span>{" "}
                      – Creates a smoother, more refined skin surface.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Fast Recovery & Minimal Downtime
                      </span>{" "}
                      – Non-invasive treatment with quick results.
                    </p>
                    <p className="text-para-black">
                      {" "}
                      <span className="text-primary !font-bold">
                        Works for All Skin Types
                      </span>{" "}
                      – Safe and effective for dry, oily, or combination skin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">3. Why Dr Soma Stands Apart</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Customized Care:
                    </span>{" "}
                    Your skin is unique—we design plans around *your* needs, not
                    a one-size-fits-all approach.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Cutting-Edge Science:
                    </span>{" "}
                    Pioneering techniques led by globally trained experts.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Holistic Approach:
                    </span>{" "}
                    We enhance your natural beauty, never over-treating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedTopicsGrid 
        topics={[
          {
            title: "Exosomes Therapy",
            description: "Cellular therapy for regeneration and healing",
            image: "/images/cellular_rejuvenation.png",
            href: "/servicespage/exosomes-therapy",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Advanced Skin Care",
            description: "Comprehensive skin care treatments for optimal skin health",
            image: "/images/skin_care_image.png",
            href: "/servicespage/skin-care",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Advanced Wound Management",
            description: "Specialized treatment protocols for optimal healing",
            image: "/images/advanced_wound_management.png",
            href: "/servicespage/advanced-wound-management",
            badge: "Specialized",
            badgeColor: "purple"
          },
          {
            title: "EXION",
            description: "The future of non-invasive aesthetic enhancement",
            image: "/images/skin_healing_image.png",
            href: "/regenerative-treatments/exion-treatment-malaysia",
            badge: "Non-Surgical",
            badgeColor: "green"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default CellularRejuvenationTherapies;
