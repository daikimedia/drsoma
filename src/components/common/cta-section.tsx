import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"

interface CTASectionProps {
  // Title
  title: string
  
  // Description
  description: string
  
  // Badge text (optional)
  badgeText?: string
  
  // Additional info (optional, like clinic hours)
  additionalInfo?: React.ReactNode
  
  // Image (optional)
  image?: string
  imageAlt?: string
  
  // Button configuration
  primaryButton?: {
    text: string
    onClick?: () => void
    href?: string
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
    href?: string
  }
  tertiaryButton?: {
    text: string
    onClick?: () => void
    href?: string
  }
  
  // Variant: "home" or "treatment" (default)
  variant?: "home" | "treatment"
}

export default function CTASection({
  title,
  description,
  badgeText,
  additionalInfo,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  variant = "treatment",
}: CTASectionProps) {
  const isHome = variant === "home"
  
  return (
    <section className={isHome
      ? "relative bg-gradient-to-b from-white to-[#FAFAF9] py-16 md:py-20"
      : "py-20 md:py-24 lg:py-28 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]"
    }>
      <div className={`container mx-auto ${isHome ? 'px-4' : 'text-center'}`}>
        <div className={isHome
          ? "grid lg:grid-cols-2 gap-12 items-center"
          : "space-y-8 max-w-4xl mx-auto"
        }>
          {/* Image (home page only) */}
          {isHome && image && (
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Content */}
          <div className={isHome
            ? "text-center lg:text-left order-1 lg:order-2"
            : ""
          }>
            {badgeText && (
              <Badge 
                variant="secondary" 
                className={isHome
                  ? "bg-[#FEF3EE] text-[#E65A27] hover:bg-[#FEF3EE] font-medium px-4 py-1.5 mb-6"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 font-semibold px-6 py-2.5 mb-8 shadow-lg"
                }
              >
                {badgeText}
              </Badge>
            )}
            
            <h2 className={isHome
              ? "text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight"
              : "text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            }>
              {title}
            </h2>
            
            <p className={isHome
              ? "text-[18px] text-[#666666] mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              : "text-xl md:text-2xl text-orange-400 leading-relaxed"
            }>
              {description}
            </p>
            
            {additionalInfo && (
              <div className={isHome
                ? "text-[#444444] mb-8 max-w-xl mx-auto lg:mx-0"
                : "mt-6"
              }>
                {additionalInfo}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isHome ? 'justify-center lg:justify-start' : 'justify-center pt-6'}`}>
              {primaryButton && (
                <Button 
                  size="lg" 
                  className={isHome
                    ? "bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-lg font-medium h-14 px-8 py-4 text-[16px]"
                    : "bg-gradient-to-r from-[#E65A27] to-[#F97316] hover:from-[#D14E1E] hover:to-[#E65A27] text-white rounded-lg font-semibold h-16 px-10 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  }
                  onClick={primaryButton.onClick}
                  asChild={!!primaryButton.href}
                >
                  {primaryButton.href ? (
                    <a href={primaryButton.href}>
                      {isHome ? (
                        <>
                          {primaryButton.text}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      ) : (
                        <>
                          <Phone className="w-6 h-6 mr-2" />
                          {primaryButton.text}
                        </>
                      )}
                    </a>
                  ) : (
                    <>
                      {isHome ? (
                        <>
                          {primaryButton.text}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      ) : (
                        <>
                          <Phone className="w-6 h-6 mr-2" />
                          {primaryButton.text}
                        </>
                      )}
                    </>
                  )}
                </Button>
              )}
              
              {secondaryButton && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className={isHome
                    ? "border-[#D4D4D4] text-[#2B2B2B] hover:bg-[#FAFAF9] rounded-lg font-medium h-14 px-8 py-4 text-[16px]"
                    : "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-lg font-semibold h-16 px-10 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  }
                  onClick={secondaryButton.onClick}
                  asChild={!!secondaryButton.href}
                >
                  {secondaryButton.href ? (
                    <a href={secondaryButton.href}>
                      {isHome ? (
                        <>
                          <Phone className="w-5 h-5 mr-2" />
                          {secondaryButton.text}
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-6 h-6 mr-2" />
                          {secondaryButton.text}
                        </>
                      )}
                    </a>
                  ) : (
                    <>
                      {isHome ? (
                        <>
                          <Phone className="w-5 h-5 mr-2" />
                          {secondaryButton.text}
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-6 h-6 mr-2" />
                          {secondaryButton.text}
                        </>
                      )}
                    </>
                  )}
                </Button>
              )}
              
              {tertiaryButton && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#D4D4D4] text-[#2B2B2B] hover:bg-[#FAFAF9] rounded-lg font-medium h-14 px-8 py-4 text-[16px]"
                  onClick={tertiaryButton.onClick}
                  asChild={!!tertiaryButton.href}
                >
                  {tertiaryButton.href ? (
                    <a href={tertiaryButton.href}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {tertiaryButton.text}
                    </a>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {tertiaryButton.text}
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

