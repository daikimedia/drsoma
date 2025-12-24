import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const KeloidScarTreatment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Will Keloid scars continue to grow?",
      answer:
        "Yes, a Keloid scar can continue to grow anywhere from weeks to years. They do eventually stop growing, but they won’t go away on their own. Once it has developed, it is permanent until it is either treated or removed.",
    },
    {
      question: "Will a Hypertrophic scar flatten over time?",
      answer:
        "Yes, after it has had its initial period of growth, a Hypertrophic scar can shrink or flatten over time.",
    },
    {
      question: "Can a treated Keloid scar return?",
      answer: "Yes, in some instances a Keloid can re-occur after treatment.",
    },
    {
      question: "Is there a way to prevent a Keloid?",
      answer:
        "Treating a wound right away can lessen the chances of a Keloid scar developing. Using treatments like silicon is one way to prevent the formation of a Keloid scar.",
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
                <span className="text-primary">Keloid Scar</span> <span className="text-header-black">Treatment</span>
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
                  alt="Keloid Scar Treatment"
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
                    Scar Treatment
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
                    Specialized Treatment
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    A hypertrophic scar is a thickened, wide, often raised scar
                    that develops where skin is injured.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Scar Reduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Appearance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Pain Relief</span>
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
                KELOID SCAR TREATMENT Details
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is a Hypertrophic Scar?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    When there has been an injury to the skin, a scar can
                    develop. Hypertrophic scars are scar tissue that is thick,
                    raised, and wide. While scars themselves are a common part
                    of the healing process of a wound, hypertrophic scars form
                    as a result of there being an abnormal response to skin
                    injury or trauma.
                  </p>
                  <p className="text-para-black">
                    During the healing process, some people can produce an
                    over-abundance of collagen via myofibroblasts cells. This
                    commonly occurs when a wound has become inflamed, infected,
                    left on its own to heal with no stitches, or when the wound
                    is over a joint, putting it under a lot of motion and
                    tension. We frequently see this type of scarring with burn
                    injuries, but they can form from acne, piercings, and cuts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is a Keloid Scar?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    A keloid scar occurs when there is an excessive production
                    of scar tissue beyond the margins of the initial injury. In
                    these instances, the scar will form a keloid, a hard smooth
                    growth. A keloid can grow outside of the boundary of the
                    original wounded area. While they can appear on any area of
                    the body, the are more commonly seen on the shoulders,
                    chest, earlobes and groin.
                  </p>
                  <p className="text-para-black">
                    Hypertrophic scars, while similar to keloid scars, are much
                    milder and they won’t grow past the original are of the
                    injury. While these scars are not life-threatening or
                    dangerous, they can be painful, and itchy or simply a
                    cosmetic issue that people want to have minimized.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Hypertrophic Scars vs Keloid Scars
                </h5>
                <p className="text-para-black">
                  While Hypertrophic and Keloid scars can look the same, it’s
                  important to know the difference, because each one requires
                  different treatment.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Hypertrophic Scars:</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Rarely rise over 4 millimeters above the skin
                  </p>
                  <p className="text-para-black">
                    Won’t grow beyond the boundaries of the initial wound
                  </p>
                  <p className="text-para-black">Are red or pink in color</p>
                  <p className="text-para-black">
                    Can develop anywhere on the body
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Keloids Scars:</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Can be raised over 4 millimeters from the skins’ surface
                  </p>
                  <p className="text-para-black">
                    Can grow beyond the boundaries of the original wound
                  </p>
                  <p className="text-para-black">Are pink to purple in color</p>
                  <p className="text-para-black">
                    Can evolve and grow over time
                  </p>
                  <p className="text-para-black">
                    Can develop on the cheeks, earlobes, chest, shoulders, and
                    above the sternum
                  </p>
                  <p className="text-para-black">
                    Are itchy, tender and occasionally painful
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What are the treatments for Hypertrophic Scars?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    There are several treatments for this type of scarring, but
                    you should get advice from your doctor first.
                  </p>
                  <p className="text-para-black">
                    Applying Pressure – Pressure from a bandage or pressure
                    garment (stretchy material as Lycra/Tubigrip) can weaken the
                    scar tissue over time, greatly improving the appearance of
                    the scar. This pressure should be applied day and night for
                    up to months or even years.
                  </p>
                  <p className="text-para-black">
                    Silicone – This is a non-invasive treatment that uses
                    silicon in a sheet or gel form and is believed to help speed
                    up the repairing and healing of scar tissue. This is applied
                    after the wound has healed, directly to the skin. Depending
                    on the severity of the scar, silicone is usually worn for 12
                    to 24 hours each day and dan be used for long as 6 months.
                  </p>
                  <p className="text-para-black">
                    Steroids (Triamcinolone) – Steroid injections tend to be the
                    first line of treatment for hypertrophic scarring. The
                    steroid is injected directly into the scar itself. This
                    treatment is done in intervals of four to six weeks and
                    helps the scar to soften and flatten. There are also scar
                    repairing creams that can be used, but you must seek advice
                    from your doctor, as using steroid treatments for too long
                    can weaken the normal skin tissue around the scar area.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What are the treatments for Keloids Scars?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    There are several treatments for this type of scarring, but
                    you should get advice from your doctor first.
                  </p>
                  <p className="text-para-black">
                    Corticosteroid Injections -These are used to help reduce the
                    inflammation of the keloid scar. Like steroid injections, it
                    works to soften and flatten the scar tissue, giving it a
                    smoother appearance over time.
                  </p>
                  <p className="text-para-black">
                    5 fluorouracil – cytotoxic injection proven to reduce
                    keloids
                  </p>
                  <p className="text-para-black">
                    Silicone – Similar to treating a hypertrophic scar, using
                    pressure or silicone gel pads after the injury will help
                    quicken the healing process.
                  </p>
                  <p className="text-para-black">
                    Surgery and Radiotherapy – These two treatments can be done
                    individually or together. In some cases, when surgically
                    removed, there is a chance that the scar can reoccur. This
                    is why radiotherapy is used in conjunction after surgery.
                    Radiotherapy alone sometimes helps shrink the keloids.
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
            title: "Liposuction",
            description: "Remove unwanted fat with advanced body contouring techniques",
            image: "/images/liposuction.png",
            href: "/body/liposuction-malaysia",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Tummy Tuck",
            description: "Achieve a flat, toned abdomen with comprehensive abdominoplasty",
            image: "/images/tummy_tuck.png",
            href: "/body/tummy-tuck-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Scar Treatment",
            description: "Advanced keloid and scar treatment for optimal healing",
            image: "/images/keloid_treatment.png",
            href: "/aesthetic-treatments/keloid-treatment-malaysia",
            badge: "Current",
            badgeColor: "green"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default KeloidScarTreatment;
