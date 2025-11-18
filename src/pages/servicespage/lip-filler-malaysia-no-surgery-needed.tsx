import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const LipFiller = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is there anything I shouldn’t do after the procedure?",
      answer:
        "Yes. You should avoid any strenuous activities, as well as extremely hot temperatures, for 24 to 48 hours after the procedure.",
    },
    {
      question: "How long will a lip filler last?",
      answer:
        "Most lip filler treatments last between 6 to 9 months, with most patients going for a top-up every 6 months.",
    },
    {
      question: "How long will it take for my lip filler to settle?",
      answer:
        "The results are immediate, however, it can take a few days for any bruising or swelling to subside.",
    },
    {
      question: "Will my lips feel different after a procedure?",
      answer:
        "Due to the presence of the filler, your lips will feel a bit different and it may feel a bit odd at first when smiling or talking as you get used to the added volume.",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleAccordion = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">Lip</span> <span className="text-header-black">Filler</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/lip_filler.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Lip Filler"
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
                    Lip Enhancement
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Lip enhancement is a procedure used to enlarge the lips either
                    temporarily or permanently through injectable fillers.
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
                      <span className="text-gray-700 font-medium">Shape Definition</span>
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
                      <span className="text-gray-700 font-medium">Quick Recovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">Lip Filler Details</h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Lip Filler?</h5>
                <p className="text-para-black">
                  If you have thin lips or an abnormality of the lips, having a
                  lip filler in Malaysia is an option that will help correct
                  this. It’s also an option if you just want to enhance your
                  lips, giving them a plumper look. Lip Filler, or lip
                  enhancement, is a procedure that uses injectable fillers to
                  either temporarily or permanently enlarge the lips. The most
                  common filler used for lip filler treatments is Hyaluronic
                  Acid-Based filler or HLA. There is a range of HLA filler that
                  ranges in density. The denser an HLA filler formula is, the
                  longer the effects of the procedure tend to last.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who is the Ideal Candidate for Lip Filler in Malaysia?
                </h5>
                <p className="text-para-black">
                  This procedure is suitable for anyone who would like to have
                  larger or fuller lips and also those who were born with lips
                  abnormalities.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Benefits of Lip Filler</h5>
                <p className="text-para-black">
                  Lip filler can improve or enhance the shape, volume, and
                  structure of the lips. There is no need for surgery, so you
                  won’t have to have the procedure done in a hospital.
                  Procedures can take up to an hour and there is minimal
                  downtime. The HLA filler that is used is a compound that
                  naturally occurs in the body, so there is minimal risk of
                  rejection.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How is the Procedure Done?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Before you have a lip filler treatment, you will have a
                    consultation with a medical professional here at Clinical
                    Aesthetics. This will help to determine the most effective
                    treatment for you. During the lip filler procedure, a
                    numbing cream will be used to numb the area. Local
                    anaesthesia is given as well. A filler is then injected into
                    the vermilion border around the lips. This works to give
                    that pouty look of full lips.
                  </p>
                  <p className="text-para-black">
                    It can take between 15 to 30 minutes for the procedure. You
                    may feel a pinch or burning sensation with the first
                    injection or two, but this soon dissipates and you will just
                    feel the pressure of the filler being dispersed into the
                    lips. Once the procedure is done, you will be asked to wait
                    for about 15 minutes to ensure there are no allergic
                    reactions. This is just a precautionary measure and allergic
                    reactions are very rare.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">After the Procedure</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    After you have had the procedure, your lips may feel
                    sensitive and a bit sore. Sometimes there can be a bit of
                    bruising and additional swelling for the first couple of
                    days. Arnica-K cream is given to reduce the swelling. To
                    lessen any pain or swelling, it’s advisable that you use ice
                    on your lips to help minimize any bruising or swelling.
                  </p>
                  <p className="text-para-black">
                    The results of a lip filler procedure can last anywhere
                    between 6 to 9 months. NOTE: Don’t massage your lips after
                    having has a lip filler procedure as you may squash the
                    filler, making it flatten, which will reduce the level of
                    plumpness in the lips.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What are the Common Injectable Fillers used?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Hyaluronic Acid (HLA)-Based Fillers
                  </p>
                  <p className="text-para-input">
                    The natural compound produced by the body
                  </p>
                  <p className="text-para-input">
                    HLA improve the appearance of the lip by adding shape,
                    structure & volume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-50 lg:pb-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-10">
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

export default LipFiller;
