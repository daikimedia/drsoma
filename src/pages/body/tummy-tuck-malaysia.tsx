import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const TummyTuckSurgery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How long does it take to recover from a tummy tuck?",
      answer:
        "Recovery time varies, but most patients can return to light activities within 2-3 weeks. Full recovery typically takes 6-8 weeks, with strenuous activities restricted for up to 3 months.",
    },
    {
      question: "Will I have scars after a tummy tuck?",
      answer:
        "Yes, you will have scars, but they are strategically placed to be hidden by underwear or swimwear. The scars typically fade over time and become less noticeable.",
    },
    {
      question: "Can I get pregnant after a tummy tuck?",
      answer:
        "While it's possible to get pregnant after a tummy tuck, it's not recommended as pregnancy can stretch the tightened muscles and skin, potentially requiring a revision procedure.",
    },
    {
      question: "How much weight can I lose with a tummy tuck?",
      answer:
        "A tummy tuck is not a weight loss procedure. It removes excess skin and fat, typically resulting in a loss of 2-5 pounds, but the main goal is to improve body contour and shape.",
    },
    {
      question: "When can I exercise after a tummy tuck?",
      answer:
        "Light walking can begin within a few days. More strenuous exercise should be avoided for 6-8 weeks, and your surgeon will provide specific guidelines based on your recovery progress.",
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
                <span className="text-primary">Tummy Tuck</span> <span className="text-header-black">Surgery</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/tummy_tuck.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Tummy Tuck Surgery"
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
                    Abdominoplasty
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Having excess fat and skin around the abdomen can be
                    frustrating, especially if you&apos;ve worked hard to lose weight
                    and can&apos;t seem to shift those last few pounds. You don&apos;t have
                    to live with excess abdominal skin and fat though. Opting for
                    a tummy tuck, or abdominoplasty will help rid you of the
                    excess fat and skin while giving a flatter and more toned
                    look.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Excess Skin Removal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Muscle Tightening</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Flatter Abdomen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Contour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">TUMMY TUCK SURGERY Details</h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is Abdominoplasty or Tummy Tuck?
                </h5>
                <p className="text-para-black">
                  Tummy Tuck is a surgical procedure to remove excess skin and
                  fat from the abdomen and to enhance physical beauty by
                  tightening the muscles of the abdominal wall. This procedure
                  can be combined with Bilateral Breast Augmentation,
                  Liposuction & Facelift. Having loose skin on the abdomen can
                  be a result of a few things, such as having lost a lot of
                  weight, or after pregnancy, where the stretched skin and
                  muscles have become slack. It&apos;s also an option for those who
                  have scarring after having had abdominal surgery.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What a Tummy Tuck is Not?</h5>
                <p className="text-para-black">
                  A tummy tuck won&apos;t help you lose weight, control it, or stop
                  you from future weight gain. The purpose is to tone the body
                  and improve the shape of the abdomen.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who Is The Ideal Candidate for Tummy Tuck in Malaysia?
                </h5>
                <p className="text-para-black">
                  The ideal candidate for tummy tuck in Malaysia is anyone with
                  loose skin and excess fat in the upper tummy, excess fatty
                  tissue especially in the lower abdomen and flanks, damaged
                  lower abdominal skin (especially women with stretch marks
                  after multiple pregnancies                  ) & those with &apos;loosening&apos; or
                  &apos;bulging&apos; of the abdomen caused by stretching of the muscles
                  and tissue of the abdominal wall that is deeper to the skin
                  and fat layer.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who Should Not Consider a Tummy Tuck?
                </h5>
                <p className="text-para-black">
                  If you are planning on becoming pregnant again or losing a
                  large amount of weight, you shouldn&apos;t consider having a tummy
                  tuck. This is because both can lead to more excess skin and
                  stretch marks, which means you would need to have a second
                  procedure. Also, if you are a heavy smoker, extremely
                  overweight, or have had issues with blood clotting on the
                  past, this procedure may not be suitable for you.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  How is the Tummy Tuck procedure done?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    There are two types of tummy tuck procedures that can be
                    done; a partial tummy tuck and a full extended tummy tuck.
                    Both use a general anesthetic during the procedure and
                    involves excising all the skin and fat layer below the
                    umbilicus, closure of the weakened abdominal wall muscles
                    and the hernia if it is present. In ladies, this will
                    enhance their hourglass figure. The skin above the umbilicus
                    is now stretched and sutured to the hair-bearing skin in the
                    pubis. The umbilicus is now brought out to its new location
                    through a new defect made out in the skin and sutured in
                    place.
                  </p>
                  <p className="text-para-black">
                    Chat with us to arrange your consultation with Dr. Soma.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  After the operation, you will experience some pain and
                  discomfort, which can be controlled with pain medication. You
                  will need to wear a compression garment for several weeks to
                  help with swelling and support the healing process. You should
                  avoid strenuous activities and heavy lifting for at least 6
                  weeks. The scars will initially be red and raised but will
                  fade over time. You may experience some numbness in the
                  treated area, which usually resolves within a few months.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What are the benefits of the procedure?
                </h5>
                <p className="text-para-black">
                  The benefits of a tummy tuck include a flatter, more toned
                  abdomen, improved body contour, enhanced self-confidence, and
                  better fitting clothes. It can also help with posture and
                  reduce back pain caused by weak abdominal muscles. The
                  procedure can be life-changing for those who have struggled
                  with excess skin and fat in the abdominal area.
                </p>
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
            href: "/body/liposuction-malaysia",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Breast Augmentation",
            description: "Enhance breast size and volume with premium implant options",
            image: "/images/breast_augmentation.png",
            href: "/breast/breast-augmentation-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Face Lift",
            description: "Restore youthful appearance with advanced facial rejuvenation",
            image: "/images/face_lift_image.png",
            href: "/face/face-lift-malaysia",
            badge: "Premium",
            badgeColor: "purple"
          },
          {
            title: "Six Pack Enhancement",
            description: "Achieve defined abdominal muscles with surgical enhancement",
            image: "/images/six_pack_enhancement.png",
            href: "/servicespage/six-pack-enhancement",
            badge: "Trending",
            badgeColor: "green"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default TummyTuckSurgery;
