import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const MaleBreastReduction = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How should I prepare for Gynecomastia ?",
      answer:
        "Before surgery, your surgeon will provide specific instructions. These may include stopping certain medications, avoiding smoking, and arranging for someone to drive you home after the procedure. You may also undergo blood tests or other evaluations to ensure you’re fit for surgery.",
    },
    {
      question: "What type of anaesthesia is used for Gynecomastia?",
      answer:
        "Gynecomastia  is typically performed under general anaesthesia, meaning you will be fully asleep and feel no pain during the procedure. ",
    },
    {
      question: "Will I have visible scars after Gynecomastia?",
      answer:
        " The scars are hidden and not visible around the edges of the areola. Over time, scars will fade and become less noticeable. Your surgeon will also provide post-surgical care instructions to help minimize scar formation.",
    },
    {
      question: "What kind of results can I expect after Gynecomastia?",
      answer:
        "Most patients experience a flatter, firmer, and more masculine chest contour after Gynecomastia. Swelling and bruising are normal in the early stages of recovery, so the final results will become more apparent over the next few months as your body heals.",
    },
    {
      question: "How long does it take to recover from Gynecomastia?",
      answer:
        "Initial recovery from Gynecomastia usually takes about 1 to 2 weeks, during which you should rest and avoid strenuous activity. However, full recovery can take several weeks to a few months, depending on the extent of the surgery and how your body heals.",
    },
    {
      question:
        "What are the possible complications after Gynecomastia?",
      answer:
        "As with any surgery, there are risks of complications such as infection, bleeding, scarring, or changes in nipple sensation. However, these are generally rare. If you notice signs of infection, increased pain, or unusual swelling, contact your doctor immediately.",
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
                <span className="text-primary">Gynecomastia:</span> <span className="text-header-black">Male Breast Reduction</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/male_breast_reduction.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Male Breast Reduction"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
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
                    Gynecomastia
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Gynecomastia is a common condition where men experience the
                    enlargement of breast tissue due to hormonal imbalances,
                    resulting in excess fat or glandular tissue. This condition
                    can cause physical discomfort and emotional stress, making
                    many men feel self-conscious about their appearance.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Flatter Chest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Enhanced Confidence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Masculine Contour</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Improved Comfort</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">Gynecomastia </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Is Gynecomastia  Right for You?
                </h5>
                <p className="text-para-black">
                  If you are a man struggling with enlarged breasts and it’s
                  affecting your confidence or comfort, Gynecomastia may
                  be the solution. Ideal candidates are healthy, of stable
                  weight, and have tried non-surgical alternatives without
                  success. Whether the issue is caused by excess fat, glandular
                  tissue, or a combination of both, this procedure can help
                  achieve a flatter, more masculine chest.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How Is The Procedure Done</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Gynecomastia, also known as male breast reduction,
                    is typically performed using one or a combination of two
                    techniques:
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Liposuction:
                    </span>{" "}
                    This is ideal for cases where the enlargement is primarily
                    due to excess fatty tissue.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Tissue Excision:
                    </span>{" "}
                    In cases where glandular tissue or excess skin needs to be
                    removed, tissue excision is used. This method is also
                    applied if the areola needs reshaping or repositioning.
                  </p>
                  <p className="text-para-black">
                    Most procedures are completed in 1-3 hours under general
                    anaesthesia, and the process will be tailored to your
                    specific needs
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What to Expect After Surgery</h5>
                <p className="text-para-black">
                  Recovery is straightforward. You will need to wear a
                  compression garment to reduce swelling and support healing for
                  a few weeks. Initial bruising and swelling are normal, but you
                  can return to daily activities within 1-2 weeks, although
                  strenuous physical activity should be avoided for 4-6 weeks
                  and full results visible after a few months as the swelling
                  subsides. Most patients experience a more defined chest and a
                  significant boost in confidence post-surgery.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Can Liposuction Be Done with Gynecomastia?
                </h5>
                <p className="text-para-black">
                  Absolutely! Liposuction is often combined with gynecomastia
                  surgery, especially when excess fat contributes to the
                  enlarged chest. By combining these techniques, we can achieve
                  a more sculpted and natural-looking chest contour.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Significance of the Surgery</h5>
                <p className="text-para-black">
                  Gynecomastia significantly improves a patient’s
                  physical appearance, helping them regain self-confidence and
                  relieve the psychological burden of living with enlarged
                  breasts. The surgery also addresses physical discomfort
                  associated with gynecomastia, such as pain or chafing caused
                  by enlarged tissue.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Why Consider Gynecomastia?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    This surgery offers more than just aesthetic benefits. It
                    helps relieve physical discomfort and enhances your quality
                    of life. By restoring a more masculine appearance to your
                    chest, you can enjoy greater comfort, confidence, and
                    freedom in your everyday life.
                  </p>
                  <p className="text-para-black">
                    Gentlemen can wear tight T-shirts with confidence, and going
                    into the swimming pool is no longer difficult!
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

export default MaleBreastReduction;
