import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const FaceLift = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How long before I look normal?",
      answer:
        "Generally, once the swelling has receded, you will be able to see a difference. Where the skin feeling normal, or less tight, is concerned, this can take a few months.",
    },
    {
      question: "Will facial massages help?",
      answer:
        "For the first couple of weeks, you should not have facial massages. Since every person heals differently, it’s best to consult with your surgeon about massage and any other healing therapies.",
    },
    {
      question: "What is the best age for a Face Lift?",
      answer:
        "Typically, Face Lifts are done between the ages of 35 to 65, and the optimal age is between 45 and 50. The goal of a facelift is to maintain the youthfulness of the face, so the earlier you have one done, the better you can address the signs of aging.",
    },
    {
      question: "Is Face Lift surgery safe?",
      answer:
        "Any surgical procedure comes with a certain degree of risk. To ensure that your surgery goes well and the results are what you want, always be sure you use a licensed surgeon, During your consultation, we will go over any health risks and take any necessary precautions.",
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
                <span className="text-primary">Face Lift</span> <span className="text-header-black">(Combat Aging)</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/face_lift_image.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Face Lift - Combat Aging"
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
                    Anti-Aging
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    We all have a desire to halt the process of aging and the
                    effects it can have on our bodies. One of the first areas to
                    show signs of aging is in the face. As we age, the collagen
                    production in the skin slows, which causes the skin to lose
                    its elasticity and plumpness. This causes the skin to sag
                    around the neck, cheeks, and jaw. A facelift is one of the
                    ways to correct this.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Tighten Sagging Skin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Reduce Wrinkles</span>
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
                      <span className="text-gray-700 font-medium">Natural Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">face lift details</h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Face Lift?</h5>
                <p className="text-para-black">
                  A Face Lift, also known as Rhytidectomy, is a procedure used
                  to counteract the effects of aging by tightening the tissue
                  beneath the skin of the cheek, jaw, and neck. Sometimes a
                  upper lip lift also needed. If you have sagging eyebrows &
                  wrinkles of the forehead then you should perhaps consider a
                  brow lift. A Rhytidectomy may be performed alone or in
                  combination with a forehead/eyelid lift (Blepharoplasty) or
                  nose surgery (Rhinoplasty), Liposuction, Abdominoplasty &
                  Breast Lift.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who is the ideal candidate for Face Lift in Malaysia?
                </h5>
                <p className="text-para-black">
                  The ideal candidate is one whose face and neck have begun to
                  sag, but whose skin still has some elasticity and whose bone
                  structure is strong & well defined. Those with loose skin with
                  fine wrinkles, freckles & rough areas will also benefit from
                  this surgery. This procedure is mostly done by patients who
                  are in their 40’s to 60’s and also people who are in their
                  70’s or 80’s.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How is the procedure done?</h5>
                <p className="text-para-black">
                  First, incisions are usually made above the hairline at the
                  temples. These incision lines follow the natural crease, in
                  front of the ear and extend into the hairline above and behind
                  the ear. If the jawline is being done, an incision will be
                  made under the chin as well. Beneath the skin is a layer of
                  muscle (platysma) & fibrous attachments. This is pulled up and
                  back to tighten the face. The tensioned tissue is secured to
                  the bone behind and in front of the ear. The surgeon will then
                  separate the skin from the underlying fat and muscle. Any
                  surplus skin is removed and then pulled back and stitched to
                  its new position. The incision is then closed using sutures so
                  that it is lifted upwards and backward. The face is then
                  bandaged to minimize any swelling and bruising. This procedure
                  is mostly carried out under general/local anesthesia & the
                  patient would be advised to spend a night in the hospital. The
                  procedure can take between 2 to 3 hours.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after Face Lift?
                </h5>
                <p className="text-para-black">
                  After the surgery, there will be some bruising and swelling
                  and this tends to descend into the neck. However, a facelift
                  dressing is applied to put pressure on the incision line &
                  surgical area to limit the swelling & bruising effect.
                  Discomfort is mild and can be controlled with Paracetamol. It
                  is also normal to have some numbness of the skin of cheeks and
                  ears. These signs will usually disappear in about a few weeks
                  or months. Full recovery can take between 2 to 4 weeks, and
                  you will need time off work, as well as minimizing some
                  physical activity. It can take from 6 to 9 months for the full
                  effects of the procedure to be seen. For the first 2 days, you
                  are advised not to drive and not to get your bandages wet. You
                  will also need to avoid any strenuous activity, swimming,
                  massages, or saunas for at least a 2 week period. For the
                  first few days, you will need to sleep with your head propped
                  up to help reduce swelling. Stitches are removed in about a
                  week, and any redness, scars, or bruising should have faded
                  after a few weeks.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is the significance of the procedure?
                </h5>
                <p className="text-para-black">
                  The patient will look younger with a more vital and cheerful
                  facial appearance which also tends to increase their morale
                  and self-confidence. The skin will be tighter and firmer,
                  wrinkles will have disappeared, as well as the effects of sun
                  exposure. Facelift results can also last up to 10 years.
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

export default FaceLift;
