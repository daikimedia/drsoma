import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const FatTransfer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: " How long does a fat transfer last? ",
      answer:
        "Once the transferred fat cells establish a blood supply, they can provide permanent enhancement.",
    },
    {
      question: "Is the procedure painful?",
      answer:
        "Discomfort is minimal and manageable with prescribed medications and a brief recovery period.",
    },
    {
      question: "When can I see results? ",
      answer:
        "Initial swelling subsides within a few weeks, with final results appearing in 3-6 months as the fat settles naturally.",
    },
    {
      question: "Who is an ideal candidate? ",
      answer:
        "Individuals with adequate fat deposits and realistic expectations for enhancement.",
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
                <span className="text-primary">Fat</span> <span className="text-header-black">Transfer</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/liposuction.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Fat Transfer Treatment"
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
                    Body Contouring
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
                    Natural Enhancement
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    At Soma Plastic Surgery, we specialize in advanced fat
                    transfer procedures to help you achieve a beautifully sculpted
                    and youthful appearance. Whether you desire fuller lips,
                    enhanced curves, or facial rejuvenation, our expert team
                    offers natural, long-lasting solutions that use your body&apos;s
                    own fat to refine and enhance your beauty.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">100% Natural</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Dual Benefit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Long-Lasting Results</span>
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
              <h3 className="text-header-black">
                Sculpt, Restore, and Enhance Naturally
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Fat Transfer?</h5>
                <p className="text-para-black">
                  Fat transfer, also known as fat grafting or fat injection, is
                  a minimally invasive cosmetic procedure that harvests excess
                  fat from one area of your body (such as the abdomen, thighs,
                  or flanks) and transfers it to another area to enhance volume,
                  shape, and symmetry. This procedure not only improves your
                  contours but also rejuvenates the skin, thanks to the
                  regenerative properties of fat cells.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Areas We Enhance with Fat Transfer
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Face</span> –
                    Restore lost volume in cheeks, under-eye hollows, lips, and
                    temples for a youthful glow.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Breasts</span> – A
                    natural breast augmentation alternative without implants.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Buttocks (BBL - Brazilian Butt Lift)
                    </span>{" "}
                    – Enhance curves with a natural and contoured look.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Hands</span> –
                    Rejuvenate aging hands by adding volume and reducing
                    wrinkles.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Hip Dips</span> –
                    Smooth out dips for a fuller, hourglass silhouette.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      {" "}
                      Scars & Depressions
                    </span>{" "}
                    – Improve the texture and appearance of scars or
                    indentations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Why Choose Fat Transfer?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      100% Natural
                    </span>{" "}
                    – No synthetic fillers or implants.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Dual Benefit
                    </span>{" "}
                    – Slim down areas with excess fat while enhancing others.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Long-Lasting Results
                    </span>{" "}
                    – Once the transferred fat establishes blood supply, results
                    can be permanent.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      {" "}
                      Minimal Downtime
                    </span>{" "}
                    – Less invasive than traditional implants, with a shorter
                    recovery period.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Your Fat Transfer Journey</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Consultation:
                    </span>{" "}
                    Our board-certified plastic surgeons will evaluate your
                    goals and design a personalized treatment plan.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Fat Harvesting:
                    </span>{" "}
                    Using gentle liposuction, we extract fat from donor areas.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Purification:
                    </span>{" "}
                    The fat is processed to ensure only the healthiest fat cells
                    are used.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Precise Injection:
                    </span>{" "}
                    The purified fat is carefully injected into the desired
                    areas for natural enhancement.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Recovery & Results:
                    </span>{" "}
                    Swelling subsides in a few weeks, revealing a beautifully
                    contoured, enhanced look.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Book Your Consultation Today!{" "}
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Ready to enhance your natural beauty with fat transfer?
                  </p>
                  <p className="text-para-black">
                    Contact Soma Plastic Surgery today to schedule a
                    personalized consultation with our experts!
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
            description: "Remove unwanted fat and sculpt your body with advanced liposuction techniques",
            image: "/images/liposuction.png",
            href: "/servicespage/liposuction-malaysia-remove-unwanted-fat",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Tummy Tuck",
            description: "Flatten and tighten abdomen with abdominoplasty",
            image: "/images/tummy_tuck.png",
            href: "/servicespage/tummy-tuck-surgery-in-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "6-Pack Enhancement",
            description: "Achieve defined abdominal muscles with surgical enhancement",
            image: "/images/pack_enhancement.png",
            href: "/servicespage/six-pack-enhancement",
            badge: "Trending",
            badgeColor: "green"
          },
          {
            title: "Male Breast Reduction",
            description: "Flatter, more masculine chest contour with gynecomastia surgery",
            image: "/images/male_breast_reduction.png",
            href: "/servicespage/male-breast-reduction",
            badge: "Specialized",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default FatTransfer;
