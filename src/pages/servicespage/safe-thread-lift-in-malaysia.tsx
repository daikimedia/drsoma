import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const SafeThreadInFace = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Are there side effects after the procedure?",
      answer:
        "As with any type of procedure, there is always the possibility of side effects. However, not everyone will experience side effects, which can include swelling, pain, slight skin irregularity or depressions, facial asymmetry, bruising, inflammation, dimple or ripple formations. These should, however, disappear within a few days after the procedure has been done.",
    },
    {
      question: "Is Will the tread lift procedure be painful?",
      answer:
        "No, the procedure is not painful. The procedure is done using a local anesthetic, will not leave scars, and requires minimal downtime.",
    },
    {
      question: "Do threads have to be removed over time?",
      answer:
        "No. The threads that are used are very fine and invisible, so they do not need to be removed. However, should you opt for a full facelift at a later stage, they can be removed quite easily.",
    },
    {
      question: "Will a thread lift change my facial features significantly?",
      answer:
        "No. Thread lifts works by rejuvenating the face without making any changes to your natural facial features..",
    },
    {
      question: "How long do thread lift results?",
      answer:
        "Thread lifts do wear off over time, however, depending on each individual and the procedure they have had done, the effects of a thread lift can last anywhere between 6 months to 2 ½ years.",
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
                <span className="text-primary">Safe Thread</span> <span className="text-header-black">Lift</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/Safe_thread_in_face.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Safe Thread Lift"
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
                    Facial Rejuvenation
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    As we age, our skin begins to show signs of wear as we lose
                    collagen, which causes the skin to become less elastic and
                    sagging. To keep a youthful appearance, many people will
                    choose to have surgery. Some procedures are more invasive than
                    others, and permanent surgery may not be something you wish to
                    have. In this case, you can opt to have a thread lift, which
                    is a minimally invasive procedure that can be done in an hour
                    and doesn&apos;t involve permanent surgery.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Minimally Invasive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Quick Procedure</span>
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
                      <span className="text-gray-700 font-medium">Minimal Downtime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">Safe Thread Lift Details</h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Thread Lift?</h5>
                <p className="text-para-black">
                  Also called a &quot;thread face-lift&quot;, this minimally invasive
                  procedure is used to lift and realign sagging tissue, while
                  adding some definition to facial contours by using temporary
                  sutures. Instead of removing the patient&apos;s loose facial skin
                  surgically, our surgeon will simply suspend it by stitching up
                  portions of it. Facial fat that has dropped downwards is
                  brought up to his original position, so giving youthful looks
                  again. This has the effect of pulling the skin back slightly
                  and therefore lifting and tightening the face. In addition to
                  being ideal for lifting the skin, threads combat aging in
                  another way: by provoking the body&apos;s &quot;healing response&quot;
                  (Biostimulation) and causing the body to direct large surges
                  of collagen to treated areas.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Who is the ideal candidate for Thread Lift in Malaysia?
                </h5>
                <p className="text-para-black">
                  This procedure is suitable for people with minimal signs of
                  aging who need just a small lift (usually women between 35 and
                  55). Others include those who have had some relapse from a
                  previous procedure such as facelift/neck lift. Thread lifts
                  can treat: Hollow cheeks – where there has been a loss of
                  volume from the cheeks. Jowls – where the skin sags around the
                  jawline. Sagging cheeks – where there has been mild to
                  moderate sagging. Deep wrinkles – where lines and folds have
                  appeared around the nose and chin.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  How is a thread lift procedure done?
                </h5>
                <p className="text-para-black">
                  The procedure can be done with local anesthesia and is
                  generally done within one to two hours. It involves the
                  insertion of very fine threads into the face or neck through
                  very tiny incisions or needles. The threads work to pull back
                  the skin, which lifts it to give the skin a smoother
                  appearance. The results of this procedure are immediate, with
                  sagging skin being eliminated and giving you a more youthful
                  and rejuvenated appearance. The thread lift procedure begins
                  with making a tiny notch behind the ear or hairline. A needle
                  is then inserted into the skin when the suspending threads
                  attached to it. The needle has very fine threads with even
                  finer filaments that can attach themselves to the tissue under
                  the skin. As the needle is withdrawn, these filaments get
                  deposited into the sagging areas. The threads are then
                  tightened to lift sagging skin giving it a smooth and natural
                  look. A thread lift procedure creates longer-lasting results
                  than you would get with dermal fillers or a Botox treatment.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Different thread lifts procedures in Malaysia
                </h5>
                <p className="text-para-black">
                  There are two types of thread lift procedures that you can
                  have done.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Silhouette</h5>
                <p className="text-para-black">
                  This procedure uses threads made of a non-absorbable
                  polypropylene strand are used. They contain a number of
                  sutures interspersed with tiny &quot;cones&quot; that are adept at
                  grabbing tissue all around. This allows the threads to gather
                  more skin, producing a more noticeable lift to the cheeks and
                  jowls that lasts up to 5 years. (by Menarini)
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Happy Lift (Revitalizing)</h5>
                <p className="text-para-black">
                  This procedure uses a monofilament, absorbable skin
                  support/filling thread of synthetic origin. The Happy Lift,
                  sutures interact with the tissues with. creating a double
                  action: 1. Lifting action for the support & repositioning of
                  the tissues. 2. Revitalizing action stimulating the synthesis
                  of collagen, hyaluronic acid, and elastin. (Biostimulation)
                  Furthermore, a fibrous capsule occurs around the inserted
                  thread that prolongs the lifting effect and maintains the skin
                  traction. It also protects the thread from hydrolysis,
                  extending its permanence in the tissue.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <p className="text-para-black">
                  Swelling and bruising may occur and can be prevented with ice
                  packs. Movements are strictly restricted by taping the face
                  for 3 days especially the area that has been operated. The
                  patient is advised to sleep on the back for a week. Otherwise,
                  it will undo the effect of the procedure. Finally, the patient
                  should avoid excessive mouth opening and massage on the
                  operated site for about 3 weeks. Some patients experience
                  numbness in the treated area, which usually subsides within 1
                  week of the procedure.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What is the significance of thread lift?
                </h5>
                <p className="text-para-black">
                  Thread lift procedures have become popular because there is a
                  reduced procedural and recovery time, and the patient shows
                  immediate satisfaction with treatment outcome. Finally,
                  general anesthesia is not required and the risk of
                  complication is very low. The end result is immediate
                  rejuvenate looking skin.
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
            href: "/face/face-lift-malaysia",
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
            href: "/face/rhinoplasty-malaysia",
            badge: "Specialized",
            badgeColor: "purple"
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

export default SafeThreadInFace;
