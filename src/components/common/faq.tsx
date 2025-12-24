"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
  badgeText?: string
  bgColor?: "white" | "gray"
  className?: string
}

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers to help you make informed decisions",
  badgeText = "FAQ",
  bgColor = "white",
  className = "",
}: FAQProps) {
  const bgClass = bgColor === "gray" ? "bg-[#FAFAF9]" : "bg-white"
  
  return (
    <section className={`py-[50px] ${bgClass} ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-white text-[#666666] hover:bg-white font-normal px-4 py-1.5 mb-6 border border-[#E8E8E8]">
            {badgeText}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[17px] text-[#666666]">
              {subtitle}
            </p>
          )}
        </div>

        {faqs && faqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E8E8E8] bg-white rounded-xl overflow-hidden data-[state=open]:border-[#D4D4D4] data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="px-8 py-6 hover:bg-[#FAFAF9] transition-colors hover:no-underline [&[data-state=open]]:bg-[#FAFAF9] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-[#666666]">
                  <span className="text-[17px] text-[#1A1A1A] text-left tracking-normal font-medium pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 bg-[#FAFAF9] border-t border-[#E8E8E8]">
                  <p className="text-[16px] text-[#444444] leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-[#666666]">No FAQs available.</p>
        )}
      </div>
    </section>
  )
}

