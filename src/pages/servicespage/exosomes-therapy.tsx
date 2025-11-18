import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const ExosomesTherapy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What are exosomes and how do they work?",
      answer:
        "Exosomes are extracellular vesicles secreted by various cell types, including mesenchymal stem cells (MSCs). They contain proteins, lipids, and genetic material that can promote tissue repair, regeneration, and cellular communication. When applied therapeutically, they can enhance healing and rejuvenation processes.",
    },
    {
      question: "How long do exosome therapy results last?",
      answer:
        "Results vary depending on the treatment area and individual factors. Generally, exosome therapy can provide long-lasting effects as it works at the cellular level to promote natural regeneration. Multiple sessions may be recommended for optimal results.",
    },
    {
      question: "Is exosome therapy safe?",
      answer:
        "Exosome therapy is considered safe as it uses naturally occurring cellular components. However, it's important to receive treatment from qualified professionals using properly processed and tested exosome products. We ensure all treatments meet safety standards.",
    },
    {
      question: "Who is a good candidate for exosome therapy?",
      answer:
        "Good candidates include individuals seeking skin rejuvenation, scar improvement, hair restoration, anti-aging treatments, or enhanced healing. A consultation will determine if exosome therapy is appropriate for your specific concerns and goals.",
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
                <span className="text-primary">Exosomes</span> <span className="text-header-black">Therapy</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <Image
                  src="/images/cellular_rejuvenation.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="Exosomes Therapy Treatment"
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
                    Cellular Therapy
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
                    Advanced Regeneration
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    Exosomes are extracellular vesicles secreted by various cell types, including mesenchymal stem cells (MSCs). These powerful cellular messengers contain proteins, lipids, and genetic material that can promote tissue repair, regeneration, and enhanced healing. Our exosome therapy offers cutting-edge treatments for various aesthetic and therapeutic applications.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Natural Regeneration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Cellular Communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Enhanced Healing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Anti-Aging Effects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                Revolutionary Cellular Therapy for Regeneration and Healing
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is Exosomes Therapy?</h5>
                <p className="text-para-black">
                  Exosomes therapy is a cutting-edge regenerative treatment that harnesses the power of extracellular vesicles to promote cellular communication, tissue repair, and regeneration. These tiny vesicles, naturally produced by cells, contain essential proteins, lipids, and genetic material that can enhance healing processes and promote cellular rejuvenation throughout the body.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Potential Therapeutic Applications
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Tissue Repair and Regeneration</span> –
                    Promotes natural healing and regeneration of damaged tissues through enhanced cellular communication.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Wound Healing</span> – 
                    Accelerates the healing process of wounds and injuries by promoting cellular proliferation and tissue repair.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Anti-inflammatory and Immunomodulatory Effects</span> – 
                    Reduces inflammation and modulates immune responses for improved healing and recovery.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Our Comprehensive Exosomes Therapy Services</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Skin</h6>
                    <p className="text-sm text-gray-700">Advanced skin rejuvenation and regeneration treatments for improved texture, tone, and overall skin health.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Scars</h6>
                    <p className="text-sm text-gray-700">Specialized treatments to improve scar appearance and promote natural tissue regeneration.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Erectile Dysfunction</h6>
                    <p className="text-sm text-gray-700">Regenerative therapy to improve vascular health and tissue function in intimate areas.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Vaginal Rejuvenation</h6>
                    <p className="text-sm text-gray-700">Advanced treatments for intimate area rejuvenation and tissue regeneration.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Anti-aging</h6>
                    <p className="text-sm text-gray-700">Comprehensive anti-aging treatments that work at the cellular level to promote youthful regeneration.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Hair Loss</h6>
                    <p className="text-sm text-gray-700">Regenerative therapy to promote hair follicle health and stimulate natural hair growth.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                    <h6 className="font-semibold text-primary mb-3">Exosome for Body Performance</h6>
                    <p className="text-sm text-gray-700">Enhanced cellular therapy to improve overall body performance, energy levels, and recovery processes.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Why Choose Our Exosomes Therapy?</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Advanced Technology
                    </span>{" "}
                    – We use the latest exosome processing and application techniques for optimal results.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Natural Approach
                    </span>{" "}
                    – Exosomes are naturally occurring cellular components that work with your body&apos;s own healing processes.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Comprehensive Treatment Options
                    </span>{" "}
                    – From skin rejuvenation to hair restoration, we offer a wide range of exosome therapy applications.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Expert Care
                    </span>{" "}
                    – Our team has specialized training in exosome therapy and regenerative medicine.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Personalized Protocols
                    </span>{" "}
                    – Each treatment plan is customized to address your specific concerns and goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Treatment Process</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Our exosome therapy process begins with a comprehensive consultation to assess your needs and determine the most appropriate treatment protocol. The treatment involves:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">1. Consultation</h6>
                      <p className="text-sm text-gray-700">Thorough assessment of your concerns and treatment goals.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">2. Treatment</h6>
                      <p className="text-sm text-gray-700">Precise application of exosomes to target areas for optimal results.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">3. Follow-up</h6>
                      <p className="text-sm text-gray-700">Monitoring progress and adjusting treatment protocols as needed.</p>
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
                    Experience the revolutionary benefits of exosome therapy. Contact Soma Plastic Surgery today to schedule a consultation with our regenerative medicine specialists.
                  </p>
                  <p className="text-para-black">
                    Discover how exosome therapy can enhance your natural healing processes and promote cellular regeneration for optimal health and beauty.
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
            title: "Cellular Rejuvenation",
            description: "Advanced therapies for cellular regeneration and rejuvenation",
            image: "/images/cellular_rejuvenation.png",
            href: "/servicespage/cellular-rejuvenation-therapies",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Advanced Skin Care",
            description: "Comprehensive skin care treatments for optimal skin health",
            image: "/images/skin_care_image.png",
            href: "/servicespage/skin-care",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "Advanced Wound Management",
            description: "Specialized treatment protocols for optimal healing",
            image: "/images/advanced_wound_management.png",
            href: "/servicespage/advanced-wound-management",
            badge: "Specialized",
            badgeColor: "purple"
          },
          {
            title: "EXION",
            description: "The future of non-invasive aesthetic enhancement",
            image: "/images/skin_healing_image.png",
            href: "/servicespage/exion",
            badge: "Non-Surgical",
            badgeColor: "green"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default ExosomesTherapy;
