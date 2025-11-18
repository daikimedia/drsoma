import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const SafeBreastReduction = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Safe Breast</span> <span className="text-header-black">Reduction</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/safe_breast_reduction.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Safe Breast Reduction"
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
                    Reduction Mammaplasty
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Breast Reduction, also known as Reduction Mammaplasty is a
                    surgical procedure which removes the excess fat and skin from
                    the breasts, which are reshaped and the nipples repositioned
                    to form newer small breasts.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Reduce Breast Size</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Relieve Back Pain</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Comfort</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Enhanced Confidence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                SAFE BREAST REDUCTION Details
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  The Ideal Person for Breast Reduction in Malaysia
                </h5>
                <p className="text-para-black">
                  Breast Reduction, also known as Reduction Mammaplasty is a
                  surgical procedure which removes the excess fat and skin from
                  the breasts, which are reshaped and the nipples repositioned
                  to form newer small breasts. The ideal candidate for breast
                  reduction in Malaysia will be physically healthy woman who
                  wants to enhance the body contour for personal reasons, feels
                  her breast is too big & those who wants to correct asymmetry
                  of their breasts. This procedure also ideal for those who
                  having their backache and infection of their inframammary
                  fold.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What do I need to know about Breast Reduction surgery?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Breast reduction surgery is usually done under general
                    anesthesia. The procedure includes surgery through incisions
                    or liposuction to remove the excess fat in your breasts. The
                    surgeon usually makes an incision around the areola and down
                    each breast, removes excess breast tissue, fat and skin to
                    reduce the size of each breast and then reshapes the breast
                    and repositions the nipple and areola.
                  </p>
                  <p className="text-para-black">
                    The nipple and areola usually remain attached to the breast
                    but might need to be removed and then reattached at a higher
                    position as a skin graft if your breasts are very large.
                    After surgery, your breasts will be covered with a gauze
                    dressing or bandages. A tube will be placed under each arm
                    to drain any excess blood or fluid. This procedure takes 3
                    to 4 hours. The patient needs to be hospitalized 2 to 3
                    nights.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  Soreness and swelling are likely to be encountered for 1 to 2
                  weeks after surgery. Bruising is also possible. Any discomfort
                  can be controlled by medication prescribed by your doctor.
                  This procedure might leave scars on the breast or in the
                  armpit & this varies between different individuals. You will
                  be given a cream to help the scar heal well. You will be
                  wearing a compression garment and a surgical bra after the
                  surgery. Stitches can be taken out in a week to 10 days.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is the significance of the procedure?
                </h5>
                <p className="text-para-black">
                  Breast reduction can reduce the size and shape of your
                  breasts. The surgery will improve your body image and
                  self-esteem. This procedure also improves your backache and
                  you can take part in active sports as well as resume your
                  normal activities. Note: For women who wish to increase their
                  breast size instead, you may refer to here instead – Breast
                  Augmentation procedure
                </p>
              </div>
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
            href: "/servicespage/breast-augmentation-implant-in-malaysia",
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

export default SafeBreastReduction;
