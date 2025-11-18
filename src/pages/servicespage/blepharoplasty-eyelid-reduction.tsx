import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const BlepharoplastyEyelidReduction = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is Blepharoplasty surgery painful?",
      answer:
        "During surgery, you will be given an injection to numb the eye area being worked on. You may feel some soreness and tightness after surgery, however, you will be given something for any pain and discomfort.",
    },
    {
      question: "How long will my scars take to heal?",
      answer:
        "Scars tend to heal and become unnoticeable after 6 weeks. However, the incision itself may take up to a year to fully heal, depending on each individual.",
    },
    {
      question: "Can eye bags return after Blepharoplasty?",
      answer:
        "While the procedure has long-lasting results, it isn’t a permanent solution for bags under the eyes. Some may experience bags returning as they continue to age.",
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
                <span className="text-primary">Blepharoplasty</span> <span className="text-header-black">/ Eyelid Reduction</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/eyelid_reduction.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Blepharoplasty / Eyelid Reduction"
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
                    Eye Surgery
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    As we age, our skin loses its elasticity, which can result in
                    sagging. One area this affects is the eyelids. When we age,
                    the eyelids stretch and the supporting muscles become weaker.
                    As a result, the eyelids start to droop, eyebrows sag, and we
                    see puffiness under the eye. Other conditions can also cause
                    this droopiness in the eyelids too. However, there is a way to
                    correct this issue with a procedure called Blepharoplasty.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
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
                      <span className="text-gray-700 font-medium">Reduce Eye Bags</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Youthful Appearance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Vision</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                Blepharoplasty/eyelid reduction Details
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Blepharoplasty?</h5>
                <p className="text-para-black">
                  Blepharoplasty is a common procedure for both men and women to
                  correct drooping upper eyelids and alleviates the puffiness
                  below the eyes. Excess skin of the upper eyelid can obstruct
                  vision in elderly people and cause them to knock into things.
                  It can involve the removal of excess fat, muscle or skin from
                  the eyelids. The procedure not only gives you a more youthful
                  appearance, but it also can correct issues with vision, where
                  the sagging has impaired a person’s peripheral vision.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who is the ideal candidate for Blepharoplasty in Malaysia?
                </h5>
                <p className="text-para-black">
                  The ideal candidate for Blepharoplasty in Malaysia includes
                  he/she who wants to remove excess skin folds and bulging fat
                  bags in their upper and lower eyelids, those who want to
                  improve their overall facial appearance and young ladies who
                  want a fold in their upper eyelid (ie ‘double eyelid”).
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Preparing for the Procedure</h5>
                <p className="text-para-black">
                  Before this procedure is done, you will have a consultation
                  with your eye specialist and plastic surgeon to go over your
                  medical history, medications, lifestyle, your expectations,
                  and why you wish to have the procedure done. An exam will also
                  be done, as well as photos taken on the eyelid from different
                  angles to help plan the surgery. You may also be asked to stop
                  taking certain medications that are associated with increased
                  bleeding before your procedure, as well as to stop smoking
                  several weeks in advance, as this can reduce your healing
                  ability. You will need to arrange for someone to take you to
                  and from the surgery and it is advisable to have someone stay
                  with you for the first 24 hours after your procedure.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How is Blepharoplasty is done</h5>
                <p className="text-para-black">
                  Blepharoplasty is a procedure that can be done on its own, or
                  at the same time as another cosmetic procedure, such as skin
                  resurfacing or face and brow lifts. It is generally done as an
                  outpatient procedure. Our surgeon will first inject your
                  eyelids with a numbing agent and may also administer something
                  that will help you relax. If you are having both the upper and
                  lower lids done, your surgeon will start on the upper lids
                  first. The incision line will be marked along the natural
                  lines of your upper and lower lids. These incisions will
                  extend into the “smile lines” or “crows feet” found along the
                  outer edges of the eyes. Excess skin, fat, and sagging muscle
                  will then be removed through this incision. The cut is then
                  closed. The procedure takes about 1 to 2 hours. Blepharoplasty
                  can be performed as a Day Care under local anesthesia (with or
                  without sedation).
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  After the procedure, you will spend a bit of time in the
                  recovery room so you can be monitored in case of any
                  complications. You will be able to go home the same day to
                  recuperate. Normally after surgery, some suture strips will be
                  applied as support to the eyelids. The sutures are removed in
                  1 week. You will have bruising and swelling around the eyes
                  for a few days that will subside. Ice packs will help to
                  reduce this. Some bruising and swelling around your eyes may
                  last 2 or 3 weeks. You may also have temporary blurred vision
                  and excessive tear production. There will be scars along the
                  natural skin lines and creases but will usually fade with time
                  and become barely noticeable. You may also be sensitive to
                  light and experience double vision that is temporary. Our
                  surgeon will suggest some steps that you can take at home,
                  such as using ice packs on the eyes each hour, for about 10
                  minutes. You may also be given prescription ointments and eye
                  drops to use at home. For the first week, you should avoid any
                  swimming, heavy lifting, strenuous activities, and smoking.
                  It’s also important that you don’t run your eyes. If you are a
                  contact lens wearer, you will be advised not to put them in
                  for at least two weeks after your surgery. When going out in
                  the sun and wind, wear dark sunglasses to protect the eye
                  area. For a few days, it will help to sleep with your head
                  raised higher than your chest.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What Are The Significance And Outcome of The Blepharoplasty
                  Procedure?
                </h5>
                <p className="text-para-black">
                  You will have a more youthful and rested appearance. Fat
                  bulges and skin folds will be removed and eyelid creases
                  improved. The skin and lax muscles will become firmer and
                  tighter. Peripheral vision that was blocked by drooping upper
                  eyelids will be improved.
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
            title: "Face Lift",
            description: "Comprehensive facial rejuvenation with advanced surgical techniques",
            image: "/images/face_lift_image.png",
            href: "/servicespage/face-lift-malaysia-to-combat-aging",
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

export default BlepharoplastyEyelidReduction;
