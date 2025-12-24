import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const Exion = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">EXION:</span> <span className="text-header-black">The Future of Non-Invasive Aesthetic Enhancement</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/pinnaplasty_in_ear.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="EXION Treatment"
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
                    Advanced Technology
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Welcome to Soma Plastic Surgery, where innovation meets
                    elegance. Our state-of-the-art EXION treatments offer
                    cutting-edge, non-invasive solutions designed to rejuvenate
                    and enhance your body and face with remarkable precision.
                    Whether you&apos;re looking to tighten skin, reduce fat, or achieve
                    a more youthful appearance, our EXION services deliver
                    outstanding results with minimal downtime.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Body Contouring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Facial Rejuvenation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Skin Tightening</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Minimal Downtime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">EXION Services</h3>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">1. EXION Body Applicator</h5>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">Definition:</p>
                  <p className="text-para-black">
                    The EXION Body Applicator is a revolutionary device designed
                    to sculpt, tone, and firm various areas of the body. Using
                    advanced technology, it targets fat cells and enhances skin
                    texture without surgery.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Designed to Treat:
                  </p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">Stubborn fat deposits</p>
                    <p className="text-para-black">Loose or sagging skin</p>
                    <p className="text-para-black">Uneven skin texture</p>
                    <p className="text-para-black">Cellulite</p>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">How It Works:</p>
                  <p className="text-para-black">
                    The EXION Body Applicator combines radiofrequency (RF)
                    energy and targeted ultrasound to penetrate deep into fat
                    layers, breaking down adipose tissue while stimulating
                    collagen and elastin production for a firmer, more contoured
                    appearance.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">Benefits:</p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">
                      Non-surgical body contouring
                    </p>
                    <p className="text-para-black">
                      Reduced cellulite appearance
                    </p>
                    <p className="text-para-black">
                      Skin tightening and firming
                    </p>
                    <p className="text-para-black">
                      Enhanced collagen production
                    </p>
                    <p className="text-para-black">
                      Comfortable, pain-free treatment
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">2. EXION Emfemme</h5>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">Definition:</p>
                  <p className="text-para-black">
                    EXION Emfemme is a groundbreaking, non-invasive treatment
                    designed to improve intimate wellness, rejuvenating the
                    vaginal area while enhancing muscle tone and overall
                    appearance
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Designed to Treat:
                  </p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">Vaginal laxity</p>
                    <p className="text-para-black">
                      Decreased sensation and satisfaction
                    </p>
                    <p className="text-para-black">Post-pregnancy changes</p>
                    <p className="text-para-black">Urinary incontinence</p>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">How It Works:</p>
                  <p className="text-para-black">
                    EXION Emfemme utilizes radiofrequency energy to deliver
                    controlled heat deep into the tissue, stimulating collagen
                    regeneration and improving muscle tightness and hydration.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">Benefits:</p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">
                      Enhances vaginal tightness and function
                    </p>
                    <p className="text-para-black">
                      Boosts collagen and elastin production
                    </p>
                    <p className="text-para-black">
                      Improves sensation and satisfaction
                    </p>
                    <p className="text-para-black">
                      Reduces mild urinary incontinence
                    </p>
                    <p className="text-para-black">
                      Non-invasive and painless procedure
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">3. EXION Face Applicator</h5>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">Definition:</p>
                  <p className="text-para-black">
                    The EXION Face Applicator is a state-of-the-art
                    skin-rejuvenation treatment that promotes firmer, more
                    youthful-looking skin without invasive surgery or downtime.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Designed to Treat:
                  </p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">Wrinkles and fine lines</p>
                    <p className="text-para-black">Skin laxity</p>
                    <p className="text-para-black">Uneven skin tone</p>
                    <p className="text-para-black">Loss of facial volume</p>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">How It Works:</p>
                  <p className="text-para-black">
                    This treatment harnesses the power of radiofrequency energy
                    combined with ultrasound, penetrating the skin layers to
                    stimulate collagen and elastin fibers while improving blood
                    circulation.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">Benefits:</p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">
                      Lifts and tightens sagging skin
                    </p>
                    <p className="text-para-black">
                      Reduces the appearance of wrinkles
                    </p>
                    <p className="text-para-black">
                      Stimulates natural collagen production
                    </p>
                    <p className="text-para-black">
                      Restores facial volume for a youthful glow
                    </p>
                    <p className="text-para-black">Safe for all skin types</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">4. EXION Fractional RF</h5>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">Definition:</p>
                  <p className="text-para-black">
                    EXION Fractional RF is an advanced skin resurfacing
                    treatment designed to improve skin texture, tone, and
                    elasticity through deep dermal stimulation.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">
                    Designed to Treat:
                  </p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">Acne scars and blemishes</p>
                    <p className="text-para-black">Wrinkles and fine lines</p>
                    <p className="text-para-black">Enlarged pores</p>
                    <p className="text-para-black">Uneven pigmentation</p>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-black !font-extrabold">How It Works:</p>
                  <p className="text-para-black">
                    The device uses fractional radiofrequency (RF) energy to
                    create microthermal injuries, triggering the skin’s natural
                    healing process and boosting collagen production for
                    smoother, healthier skin.
                  </p>
                </div>
                <div className="flex flex-col gap-15">
                  <p className="text-black !font-extrabold">Benefits:</p>
                  <div className="flex flex-col gap-10">
                    <p className="text-para-black">
                      Improves skin texture and tone
                    </p>
                    <p className="text-para-black">
                      Reduces the appearance of acne scars
                    </p>
                    <p className="text-para-black">
                      Minimizes fine lines and wrinkles
                    </p>
                    <p className="text-para-black">
                      Non-surgical and minimal downtime
                    </p>
                    <p className="text-para-black">
                      Safe and effective for all skin types
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">
                  Why Choose EXION at Soma Plastic Surgery?
                </h5>
                <p className="text-para-black">
                  At Soma Plastic Surgery, we specialize in delivering
                  customized, non-invasive solutions tailored to your aesthetic
                  goals. Our expert team ensures that every EXION treatment is
                  performed with precision, care, and professionalism to achieve
                  the best possible results.
                </p>
              </div>
              <div className="flex flex-col gap-15">
                <h5 className="text-primary">Book Your Consultation Today!</h5>
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
            title: "Cellular Rejuvenation",
            description: "Advanced therapies for cellular regeneration and rejuvenation",
            image: "/images/face_image.png",
            href: "/regenerative-treatments/cellular-rejuvenation-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Advanced Skin Care",
            description: "Comprehensive skin care treatments for optimal skin health",
            image: "/images/skin_care_image.png",
            href: "/servicespage/skin-care",
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

export default Exion;
