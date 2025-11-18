import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const AdvancedWoundManagement = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What types of wounds do you treat?",
      answer:
        "We treat a comprehensive range of wounds including post-surgical wounds, trauma wounds, chronic wounds like diabetic ulcers and venous ulcers, as well as burn wounds requiring specialized management.",
    },
    {
      question: "How long does wound healing typically take?",
      answer:
        "Healing time varies depending on the wound type, severity, and patient factors. Simple wounds may heal in 1-2 weeks, while complex or chronic wounds may require several weeks to months of specialized care.",
    },
    {
      question: "Is advanced wound management painful?",
      answer:
        "Our treatments are designed to minimize discomfort. We use advanced techniques and appropriate pain management to ensure patient comfort throughout the healing process.",
    },
    {
      question: "Who needs advanced wound management?",
      answer:
        "Patients with wounds that aren't healing properly, chronic wounds, post-surgical complications, diabetic ulcers, or those requiring specialized wound care benefit from our advanced treatment protocols.",
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
                <span className="text-primary">Advanced</span> <span className="text-header-black">Wound Management</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/advanced_wound_management.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Advanced Wound Management Treatment"
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
                    Specialized Care
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
                    Comprehensive Treatment
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Inadequately treated wounds can cause significant discomfort or pain, and even create additional complications. At Soma Plastic Surgery, we offer adapted care to all patients and for all types of wounds. Our advanced wound management program provides specialized treatment protocols designed to promote optimal healing and prevent complications.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Specialized Care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Advanced Techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Comprehensive Treatment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Prevent Complications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                Comprehensive Wound Care for Optimal Healing
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Advanced Wound Management?</h5>
                <p className="text-para-black">
                  Advanced wound management is a specialized medical approach that utilizes the latest techniques, technologies, and treatment protocols to promote optimal healing of various types of wounds. Our comprehensive program addresses wounds that may not be responding to standard treatment methods, ensuring patients receive the most effective care possible.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Our Comprehensive Wound Management Services
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Treatment of Simple to Complex Wounds</span> –
                    Post-surgical wounds, trauma wounds, and other acute injuries requiring specialized care and monitoring.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Treatment of Chronic Wounds</span> – 
                    Diabetic wounds, venous ulcers, pressure ulcers, and other chronic conditions that require ongoing specialized treatment.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Burn Wound Management</span> – 
                    Comprehensive care for various types of burn injuries, from minor to severe, with specialized treatment protocols.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Why Choose Our Advanced Wound Management?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Specialized Expertise
                    </span>{" "}
                    – Our team has extensive experience in treating complex and chronic wounds.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Advanced Treatment Protocols
                    </span>{" "}
                    – We utilize the latest techniques and technologies for optimal wound healing.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Personalized Care Plans
                    </span>{" "}
                    – Each patient receives a customized treatment plan based on their specific wound type and medical history.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Comprehensive Monitoring
                    </span>{" "}
                    – Regular assessment and adjustment of treatment plans to ensure optimal healing progress.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Prevention Focus
                    </span>{" "}
                    – We focus not only on healing current wounds but also on preventing future complications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Our Treatment Approach</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Our advanced wound management program begins with a comprehensive assessment of your wound, medical history, and underlying conditions. We then develop a personalized treatment plan that may include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">Wound Assessment</h6>
                      <p className="text-sm text-gray-700">Thorough evaluation of wound characteristics, size, depth, and healing potential.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">Debridement</h6>
                      <p className="text-sm text-gray-700">Removal of dead or damaged tissue to promote healthy healing.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">Advanced Dressings</h6>
                      <p className="text-sm text-gray-700">Specialized wound coverings that promote optimal healing environment.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">Infection Control</h6>
                      <p className="text-sm text-gray-700">Prevention and treatment of wound infections using appropriate protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Book Your Consultation Today!{" "}
                </h5>
                <div className="flex flex-col gap-5">
                                     <p className="text-para-black">
                     Don&apos;t let wound complications affect your quality of life. Contact Soma Plastic Surgery today to schedule a consultation with our wound management specialists.
                   </p>
                  <p className="text-para-black">
                    Our team is here to provide the specialized care you need for optimal wound healing and recovery.
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
            title: "Keloid Treatment",
            description: "Specialized treatment for keloid scars and wound complications",
            image: "/images/keloid_treatment.png",
            href: "/servicespage/keloid-scar-treatment-in-malaysia",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Fat Transfer",
            description: "Natural enhancement using your body's own fat for volume restoration",
            image: "/images/eyelid_reduction.png",
            href: "/servicespage/fat-transfer",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Advanced Skin Care",
            description: "Comprehensive skin care treatments for optimal skin health",
            image: "/images/rhinoplasty_in_nose.png",
            href: "/servicespage/skin-care",
            badge: "Non-Surgical",
            badgeColor: "green"
          },
          {
            title: "Cellular Rejuvenation",
            description: "Advanced therapies for cellular regeneration and rejuvenation",
            image: "/images/Safe_thread_in_face.png",
            href: "/servicespage/cellular-rejuvenation-therapies",
            badge: "Specialized",
            badgeColor: "purple"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default AdvancedWoundManagement;
