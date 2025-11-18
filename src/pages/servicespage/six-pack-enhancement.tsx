import Image from "next/image";
import React from "react";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const SixPackEnhancement = () => {
  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">6-Pack Enhancement</span> <span className="text-header-black">Liposuction</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/pack_enhancement.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="6-Pack Enhancement Treatment"
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
                    Body Contouring
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    At Soma Plastic Surgery, we understand that achieving a
                    well-defined six-pack can be challenging, even with rigorous
                    workouts and a strict diet. That&apos;s why we offer our advanced
                    6-Pack Enhancement Liposuction—a precision sculpting procedure
                    designed to highlight and define your abdominal muscles for a
                    chiseled, athletic look.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Define Abs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Athletic Look</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Precision Sculpting</span>
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
                Sculpt Your Dream Physique with Soma Plastic Surgery
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is 6-Pack Enhancement Liposuction?
                </h5>
                <p className="text-para-black">
                  This specialized liposuction technique, also known as
                  abdominal etching, removes stubborn fat deposits while
                  enhancing the natural contours of your abs. Using cutting-edge
                  liposculpting technology, our expert surgeons precisely target
                  areas around the rectus abdominis muscles, creating the
                  appearance of a well-defined six-pack.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Who is a Good Candidate?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-black !font-bold">If you&apos;re a man who:</p>
                  <p className="text-para-black">
                    Struggles with persistent belly fat despite a healthy
                    lifestyle
                  </p>
                  <p className="text-para-black">
                    Wants to enhance the definition of your abdominal muscles
                  </p>
                  <p className="text-para-black">
                    Is close to your ideal body weight
                  </p>
                  <p className="text-para-black">
                    Seeks a sculpted, natural-looking six-pack
                  </p>
                  <p className="text-black !font-bold">
                    Then 6-Pack Enhancement Liposuction may be the perfect
                    solution for you!
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Why Choose Soma Plastic Surgery?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Expert Precision:
                    </span>{" "}
                    Our highly skilled surgeons specialize in male body
                    contouring, ensuring a natural, masculine aesthetic.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      State-of-the-Art Technology:
                    </span>{" "}
                    We use the latest Argon Laser / MicroAire liposuction and
                    high-definition contouring techniques.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Customized Approach:
                    </span>{" "}
                    Every procedure is tailored to enhance your unique physique.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">The Procedure: What to Expect</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Consultation:
                    </span>{" "}
                    We discuss your body goals and assess your abdominal
                    structure.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Procedure:
                    </span>{" "}
                    Using minimally invasive techniques, we sculpt the abs to
                    achieve a defined look.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Recovery:
                    </span>{" "}
                    Most patients resume light activities within a few days and
                    see results as swelling subsides.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Book Your Consultation Today!{" "}
                </h5>
                <p className="text-para-black">
                  Achieve the body you&apos;ve worked hard for—our expert team is
                  ready to help you transform your physique with precision and
                  artistry.
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
            href: "/servicespage/rhinoplasty-in-malaysia-enhance-nose-appearance",
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
            href: "/servicespage/otoplasty-pinnaplasty",
            badge: "Specialized",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default SixPackEnhancement;
