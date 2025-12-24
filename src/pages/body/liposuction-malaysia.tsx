import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const LiposuctionRemoveUnwantedFat = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How long before I see results from liposuction?",
      answer:
        "Generally, it can take anywhere from 6 months to a year for the final results to be seen. However, results will vary from one person to the next, and some people will see a dramatic improvement as early as 1 months after the procedure has been done.",
    },
    {
      question: "Do I need to lose weight before I have liposuction?",
      answer:
        "Liposuction does not reduce your weight dramatically. It is ideal to be a reasonable weight for your height before having the procedure.",
    },
    {
      question: "How much weight can I lose liposuction?",
      answer:
        "Current guidelines allow for no more than 5kg of fat to be extracted, regardless of a persons’ weight. Generally not more than 5% of total body weight.",
    },
    {
      question: "Will my skin tighten after liposuction?",
      answer:
        "liposuction does not treat excess skin. This can only be removed with surgery. However some tightening can be expected but it is variable",
    },
    {
      question: "Does liposuction leave scars?",
      answer:
        "Yes, you will have minor scarring after liposuction, however, this will fade with time.",
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
                <span className="text-primary">Liposuction</span> <span className="text-header-black">(Remove Unwanted Fat)</span>
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
                  alt="Liposuction - Remove Unwanted Fat"
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
                    Liposuction
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
                    People choose to have liposuction for a number of reasons.
                    They may want to get rid of excess fat after having lost a
                    significant amount of weight, or they wish to gain a more
                    sculpted and tighter appearance to specific areas of the body
                    where getting rid of that last bit of fat is hardest.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Targeted Fat Removal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Body Sculpting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Minimal Scarring</span>
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
              <h3 className="text-header-black">
                liposuction (Remove Unwanted Fat) Details
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Conditions for Liposuction in Malaysia
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Liposuction, also known as liposculpture or lipoplasty is a
                    procedure that can help sculpt the body by removing unwanted
                    fat from almost all areas of the body. The common areas are
                    the abdomen, thighs, hips, buttocks, calves, breasts, arms
                    and the face. Liposuction in Malaysia can be combined with
                    Bilateral Breast Augmentation, Abdominoplasty (Tummy Tuck),
                    Facelift and Bilateral Breast Reduction.
                  </p>
                  <p className="text-para-black">
                    However, this procedure is not a treatment for obesity. Good
                    quality skin that is undamaged and will be able to retract
                    and re-drape well after the fat has been removed. If the
                    skin is of poor quality, it will hang down in folds after
                    the liposuction.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">How is the procedure done?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    At Dr Soma Plastic Surgery, you will first have a
                    consultation to discuss what areas you want liposuction for.
                    Before your procedure, your surgeon will make marks on the
                    body that encompass the areas of concern to the patient
                    (i.e. areas of fat deposition that need to be treated). The
                    liposuction procedure is done under general anesthesia. A
                    solution of local anesthetic with adrenalin is injected into
                    the areas to be treated. This is to distend the fat tissues
                    so that the surgery is easier and also to minimize bleeding
                    and to ensure post-operative pain relief.
                  </p>
                  <p className="text-para-black">
                    A small incision will be made to allow a small hollow steel
                    tube, measuring 3 to 4 mm in diameter, to be inserted at
                    specific sites that are well hidden within skin creases.
                    This tube is connected to a machine that uses suction to
                    remove the fat deposits. The tube is moved back and forth to
                    break up the fat, making it easier to remove. Excess fluids
                    are then drained and the incision stitched and bandaged.
                    Soma Plastic Surgery uses a powered cannula system by
                    MicroAire (USA). The amount of fat that can be removed
                    during a procedure safely ranges between 3 to 6 liters (11
                    lbs), however, this will be dependent on the patient. The
                    procedure can take between 2 to 3 hours to complete and you
                    will need downtime for a couple of weeks to recover.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">MINI LIPOSUCTION</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Contrary to a common misconception, liposuction is not for
                    overweight people or for people who have large areas of
                    excess fat. Many of our liposuction patients are maintaining
                    a normal weight and are frustrated to be left with a few
                    pounds of stubborn fat in certain body areas. Many people
                    have only small areas of excess fat they wish to reduce. Our
                    mini liposuction procedure is designed for these patients.
                  </p>
                  <p className="text-para-black">
                    This treatment precisely targets pockets of fat that are
                    resistant to diet and exercise. It removes only the right
                    amount of fat from precisely defined areas. Mini liposuction
                    is a quick procedure that can typically be performed in less
                    than an hour. A very small cannula is used and no sutures
                    are required after treatment. This technique allows our
                    patients who have worked hard to achieve fitness to finally
                    enjoy the benefits of a toned, sculpted body.
                  </p>
                </div>
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
                <h5 className="text-primary">Large Volume Liposuction</h5>
                <p className="text-para-black">
                  Although liposuction is not a weight-loss procedure, it can
                  still help plus-size people achieve a slimmer, sleeker body.
                  Dr Soma performs large volume liposuction in a safe procedure
                  that can result in a reduction of several sizes in one
                  treatment session.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What can you expect after the operation?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    After the operation, the treated areas are bandaged and a
                    tight pressure garment is put on to compress the skin onto
                    the deeper tissues. This helps prevent fluid collections,
                    reduce swelling and bruising, and to ensure an even contour
                    of the skin. This will have to be worn constantly for at
                    least 6 weeks. You may be prescribed antibiotics to reduce
                    the chance of infection, as well as pain medication for any
                    discomfort. After surgery, if you have had a general
                    anesthetic, you may be admitted for one day or you will need
                    someone to drive you home.
                  </p>
                  <p className="text-para-black">
                    How long it takes for you to return to your normal
                    activities is dependent on the individual, however, most
                    patients can return to work after 1 week, and continue with
                    exercise after 6 weeks. Patients must have a responsible
                    adult drive them home and assist them for at least 24 hours
                    post-surgery to ensure safety. It is very helpful to have
                    someone available to adjust pillows, assist with getting to
                    and from the bathroom, and handle meal preparation and other
                    chores. The caregiver can also ensure medications are taken
                    on schedule. Pain is not an issue with approach pain relief
                    medication.
                  </p>
                  <p className="text-para-black">
                    Prepare the recovery area ahead of time; have all items
                    needed within easy reach. Reading material, TV remote,
                    medication, snacks and cold drinks should all be accessible
                    without having to move around excessively. It is helpful to
                    have the bed situated so that it is not necessary to use
                    stairs. You might need to stay overnight at the hospital if
                    your surgery is done later in the day so that you can be
                    properly monitored after surgery. Complications are minimal
                    and consist mainly of bruising that will resolve
                    spontaneously over a period of 2 to 3 weeks. Infection is
                    rare. Results may not be visible right away due to swelling
                    after the surgery. It can take up to 6 months for the area
                    that has been treated to settle and show results.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  What are the benefits of the Liposuction procedure?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Fat cells are thought not to be regenerated in adult life.
                    Therefore, their removal by liposuction will give a
                    permanent change in contour that is independent of any
                    changes in your body weight. Liposuction is a very safe
                    procedure if it is done by a certified & experienced surgeon
                    in a major hospital with a well-trained anesthetist.
                  </p>
                  <p className="text-para-black">
                    There are several short-term consequences of liposuction
                    surgery. While most resolve in a few weeks, some conditions
                    become permanent due to body structure, the effects of prior
                    incomplete liposuction or noncompliance with postoperative
                    instructions. Some of these conditions are:
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Changes in Skin Sensation</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Usually resolves in 2 to 4 months
                  </p>
                  <p className="text-para-black">
                    Can result in increased or decreased sensation at the
                    treatment site swelling
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Swelling</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">Normal in every patient</p>
                  <p className="text-para-black">
                    Compression garments minimize swelling and shorten recovery
                    time
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Bruising</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Will occur at the treatment site and adjacent areas
                  </p>
                  <p className="text-para-black">
                    Greatly reduced using tumescent liposuction method
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Skin Wrinkles or Irregularities
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Skin elasticity determines the extent of skin irregularities
                  </p>
                  <p className="text-para-black">
                    Massage helps to smooth skin surface
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Pain and Discomfort</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Pain level varies between individuals, described as pain
                    associated with an over-strenuous workout session
                  </p>
                  <p className="text-para-black">
                    Sometimes a stabbing pain occurs in treated area, which is
                    momentary.
                  </p>
                  <p className="text-para-black">
                    Easily managed by pain medication
                  </p>
                  <p className="text-para-black">
                    Patients with chronic pain syndrome rarely can have a
                    worsening of the baseline pain
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Asymmetry</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Very slight differences between two sides of the body may be
                    noticeable in patients with scoliosis or spine misalignment
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
            badge: "Current",
            badgeColor: "green"
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
            badge: "Specialized",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default LiposuctionRemoveUnwantedFat;
