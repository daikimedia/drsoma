import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const BreastLift = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Breast</span> <span className="text-header-black">Lift</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/breast_lift.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Breast Lift"
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
                    Mastopexy
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Breast lift, also known as Mastopexy is a surgical procedure
                    to remove excess skin and the breast tissue is reshaped to
                    raise the droopy breasts.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Lift Sagging Breasts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Remove Excess Skin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Reposition Nipples</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Youthful Contour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">BREAST LIFT Details</h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Breast Lift?</h5>
                <p className="text-para-black">
                  Breast lift, also known as Mastopexy is a surgical procedure
                  to remove excess skin and the breast tissue is reshaped to
                  raise the droopy breasts.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Who is the ideal candidate?</h5>
                <p className="text-para-black">
                  The ideal candidate is woman with droopy/saggy breast of any
                  size and wants to enhance the body contour for personal
                  reasons.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How the procedure done?</h5>
                <p className="text-para-black">
                  Breast reduction surgery is usually done under general
                  anesthesia. Pleats of surplus skin are removed through
                  incision from underneath the breast, the breast itself is
                  remodeled into a tighter cone and the nipples are repositioned
                  at a higher level so that they lie at the points of tightened
                  breasts. If the breasts are too small as well as droopy, their
                  size can be increased during the surgery by placing breast
                  implants underneath the tightened breasts. This procedure
                  takes 3 to 4 hours. The patient needs to be hospitalized for a
                  night.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  Soreness and swelling are likely to be encounter for 1 to 2
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
                  Breast Lift can reshape the saggy/droopy breasts into one
                  which looks more youthful and feels more firm. Mastopexy can
                  also reduce the size of areola (the darker skin surrounding
                  the nipple) to keep them in proportion to the newly shaped
                  breasts.
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
            badge: "Current",
            badgeColor: "green"
          },
          {
            title: "Breast Augmentation",
            description: "Enhance breast size and volume with premium implant options",
            image: "/images/breast_augmentation.png",
            href: "/servicespage/breast-augmentation-implant-in-malaysia",
            badge: "Related",
            badgeColor: "primary"
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

export default BreastLift;
