import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const OtoplastyPinnaplasty = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Otoplasty</span> <span className="text-header-black">/ Pinnaplasty</span>
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
                  alt="Otoplasty / Pinnaplasty"
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
                    Facial Surgery
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
                    Ear Surgery
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Otoplasty or Pinnaplasty is surgical procedure to reposition
                    prominent ears by setting them back closer to the side of the
                    head.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Reposition Ears</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Confidence</span>
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
                      <span className="text-gray-700 font-medium">Bullying Prevention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                OTOPLASTY / PINNAPLASTY Details
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Otoplasty/Pinnaplasty?</h5>
                <p className="text-para-black">
                  Otoplasty or Pinnaplasty is surgical procedure to reposition
                  prominent ears by setting them back closer to the side of the
                  head.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Who is the ideal candidate?</h5>
                <p className="text-para-black">
                  The ideal candidate is people with prominent ears either
                  adults or children (5 years and above).
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How the procedure done?</h5>
                <p className="text-para-black">
                  A small incision is made at the back of the ear close to the
                  grove between the ear and the side of the head to expose the
                  ear cartilage. The surgeon will then remove some skin behind
                  the ear and sculpt the cartilage (part of the cartilage is
                  folded or removed), and allow the ear to bend back towards the
                  side of the head. The incision is closed with sutures after
                  the surgery. This procedure will be carried out under local
                  anaesthetic but in young children a general anaesthetic is
                  usually required and this surgery takes about 2 to 3 hours on
                  a day procedure.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  A small protective dressing is usually worn after the surgery
                  until the stitches are removed at between 5-10 days after the
                  surgery. You need to wear a protective head-band or bandage at
                  night when sleeping to avoid the ears from being bent forward.
                  Scars usually settle well but on rare occasions it can become
                  red and lumpy & require further treatment. Infection is not
                  common, but if this occurs it would require treatment with
                  antibiotics and regular dressing changes.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is the significance of the procedure?
                </h5>
                <p className="text-para-black">
                  Prominent ears can be successfully reshaped and this can
                  increase one’s self confidence. This procedure also helps to
                  protect the affected child from being the victim of bullying
                  in school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedTopicsGrid 
        topics={[
          {
            title: "Face Lift",
            description: "Comprehensive facial rejuvenation with advanced surgical techniques",
            image: "/images/face_lift_image.png",
            href: "/servicespage/face-lift-malaysia-to-combat-aging",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Eyelid Reduction",
            description: "Refresh your appearance with advanced eyelid surgery techniques",
            image: "/images/eyelid_reduction.png",
            href: "/servicespage/blepharoplasty-eyelid-reduction",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Rhinoplasty",
            description: "Enhance nose appearance with precision surgical techniques",
            image: "/images/rhinoplasty_in_nose.png",
            href: "/servicespage/rhinoplasty-in-malaysia-enhance-nose-appearance",
            badge: "Specialized",
            badgeColor: "purple"
          },
          {
            title: "Thread Lift",
            description: "Non-surgical facial rejuvenation with advanced thread technology",
            image: "/images/Safe_thread_in_face.png",
            href: "/servicespage/safe-thread-lift-in-malaysia",
            badge: "Non-Surgical",
            badgeColor: "green"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default OtoplastyPinnaplasty;
