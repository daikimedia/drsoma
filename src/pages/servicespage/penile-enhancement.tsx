import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const PenileEnhancement = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Penile Enhancement</span> <span className="text-header-black">With Stem Cell Therapy</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/keloid_treatment.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Penile Enhancement Treatment"
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
                    Male Surgery
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
                    Stem Cell Therapy
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    At Soma Plastic Surgery Clinic, we understand that male sexual
                    health is a vital component of overall well-being and
                    confidence. For men seeking to enhance penile size and
                    function, our Penile Enhancement using Stem Cell Therapy
                    offers a cutting-edge, minimally invasive solution.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Enhanced Function</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Increased Size</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Satisfaction</span>
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
              <h3 className="text-header-black">Penile Enhancement</h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is Stem Cell Therapy for Penile Enhancement?
                </h5>
                <p className="text-para-black">
                  Stem Cell Therapy involves the use of regenerative cells to
                  rejuvenate and repair tissues. In the context of penile
                  enhancement, stem cells are injected into the penile tissue to
                  stimulate the growth of new cells, improve blood flow, and
                  restore natural erectile function. This treatment addresses
                  concerns such as erectile dysfunction, reduced penile size,
                  and overall sexual performance.​
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How Does the Treatment Work?</h5>
                <p className="text-para-black">
                  The cells are carefully injected into the penile shaft. The
                  regenerative properties of mesenchymal stem cells
                  (MSCs)promote tissue repair, enhance blood vessel formation,
                  and improve nerve function, leading to improved erectile
                  function and penile size. ​
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Benefits of Stem Cell Therapy for Penile Enhancement
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Enhanced Erectile Function:
                    </span>{" "}
                    Improves the ability to achieve and maintain firm
                    erections.​
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Increased Penile Size:
                    </span>{" "}
                    Promotes growth in both length and girth.​
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Improved Sexual Satisfaction:
                    </span>{" "}
                    Enhances sensitivity and overall sexual experience.​
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Minimal Downtime:
                    </span>{" "}
                    Allows for a quick return to daily activities
                    post-treatment.​
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Why Choose Soma Plastic Surgery Clinic?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Expertise:
                    </span>{" "}
                    Our team comprises experienced professionals specializing in
                    male sexual health treatments.​
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Personalized Care:
                    </span>{" "}
                    We offer tailored treatment plans to meet your specific
                    needs and goals.​
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      State-of-the-Art Facilities:
                    </span>{" "}
                    Our clinic is equipped with the latest technology to ensure
                    safe and effective treatments.​
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Proven Results:
                    </span>{" "}
                    Many patients have reported significant improvements in
                    erectile function and penile size following treatment.​
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Schedule a Consultation</h5>
                <p className="text-para-black">
                  {`If you're considering Penile Enhancement with Stem Cell
                  Therapy, we invite you to schedule a confidential consultation
                  at Soma Plastic Surgery Clinic. Our team will assess your
                  individual needs, discuss potential outcomes, and develop a
                  personalized treatment plan to help you achieve your desired
                  results.​`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedTopicsGrid 
        topics={[
          {
            title: "Eyelid Reduction",
            description: "Refresh your appearance with advanced eyelid surgery techniques",
            image: "/images/eyelid_reduction.png",
            href: "/servicespage/blepharoplasty-eyelid-reduction",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Rhinoplasty",
            description: "Enhance nose appearance with precision surgical techniques",
            image: "/images/rhinoplasty_in_nose.png",
            href: "/face/rhinoplasty-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Thread Lift",
            description: "Non-surgical facial rejuvenation with advanced thread technology",
            image: "/images/Safe_thread_in_face.png",
            href: "/servicespage/safe-thread-lift-in-malaysia",
            badge: "Non-Surgical",
            badgeColor: "green"
          },
          {
            title: "Otoplasty",
            description: "Reshape and reposition ears for improved facial harmony",
            image: "/images/pinnaplasty_in_ear.png",
            href: "/face/otoplasty-malaysia",
            badge: "Specialized",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default PenileEnhancement;
