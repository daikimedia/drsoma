import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  // Badge/Header
  badgeText?: string
  
  // Title
  title: string | React.ReactNode
  
  // Subtitle (optional)
  subtitle?: string
  
  // Description
  description: string
  
  // Intro text (optional, shown before description on home page)
  introText?: string
  
  // Note (optional, shown below buttons)
  note?: string
  
  // Image
  image?: string
  imageAlt?: string
  
  // Key benefits/points (optional)
  benefits?: string[]
  
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
  
  // Variant: "home" or "treatment" (default)
  variant?: "home" | "treatment"
  
  // Additional content (for home page specific elements)
  additionalContent?: React.ReactNode
}

export default function HeroSection({
  badgeText,
  title,
  subtitle,
  description,
  introText,
  note,
  image,
  imageAlt,
  benefits,
  primaryButton,
  secondaryButton,
  variant = "treatment",
  additionalContent,
}: HeroSectionProps) {
  const isHome = variant === "home"
  
  return (
    <section className={`relative ${isHome ? 'bg-gradient-to-b from-[#FAFAF9] to-white py-16 md:py-20 overflow-hidden' : 'bg-gradient-to-br from-[#FAFAF9] via-white to-[#FEF3EE] py-20 md:py-28 lg:py-32'}`}>
      <div className={`container mx-auto ${isHome ? 'px-4' : ''} relative`}>
        <div className={`grid lg:grid-cols-2 ${isHome ? 'gap-12' : 'gap-16 lg:gap-20'} items-center`}>
          {/* Left content */}
          <div className={`${isHome ? 'text-center lg:text-left' : 'text-center lg:text-left space-y-8'}`}>
            {badgeText && (
              <Badge 
                variant="secondary" 
                className={isHome 
                  ? "bg-[#FEF3EE] text-[#E65A27] hover:bg-[#FEF3EE] font-medium px-4 py-1.5 mb-6"
                  : "bg-white/80 backdrop-blur-sm text-[#666666] hover:bg-white border border-[#E8E8E8] font-medium px-5 py-2 shadow-sm"
                }
              >
                {badgeText}
              </Badge>
            )}
            
            <h1 className={isHome
              ? "text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight"
              : "text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight"
            }>
              {title}
            </h1>
            
            {subtitle && (
              <p className={isHome
                ? "text-[18px] text-[#666666] mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                : "text-2xl md:text-3xl text-[#555555] font-light leading-relaxed"
              }>
                {subtitle}
              </p>
            )}
            
            {!isHome && <Separator className="w-20 h-1 bg-gradient-to-r from-[#E65A27] to-[#F97316] mx-auto lg:mx-0" />}
            
            {introText && isHome && (
              <p className="text-[18px] text-[#666666] mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {introText}
              </p>
            )}
            
            <p className={isHome
              ? "text-[16px] text-[#444444] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              : "text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto lg:mx-0"
            }>
              {description}
            </p>
            
            {/* Key benefits (home page) */}
            {isHome && benefits && benefits.length > 0 && (
              <div className="space-y-3 mb-8 max-w-xl mx-auto lg:mx-0">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E65A27] flex-shrink-0" />
                    <span className="text-[15px] text-[#444444]">{benefit}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Additional content (home page specific) */}
            {additionalContent}
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isHome ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start pt-6'}`}>
              {primaryButton && (
                <Button 
                  size="lg" 
                  className={isHome
                    ? "bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-lg font-medium h-14 px-8 py-4 text-[16px]"
                    : "bg-gradient-to-r from-[#E65A27] to-[#F97316] hover:from-[#D14E1E] hover:to-[#E65A27] text-white rounded-lg font-semibold h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  }
                  onClick={primaryButton.onClick}
                  asChild={!!primaryButton.href}
                >
                  {primaryButton.href ? (
                    <a href={primaryButton.href}>
                      <Phone className="w-5 h-5 mr-2" />
                      {primaryButton.text}
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
                          <Phone className="w-5 h-5 mr-2" />
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
                    : "border-2 border-[#E8E8E8] text-[#2B2B2B] hover:bg-[#FAFAF9] hover:border-[#E65A27] rounded-lg font-semibold h-14 px-8 text-base transition-all duration-300"
                  }
                  onClick={secondaryButton.onClick}
                  asChild={!!secondaryButton.href}
                >
                  {secondaryButton.href ? (
                    <a href={secondaryButton.href}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {secondaryButton.text}
                    </a>
                  ) : (
                    <>
                      {!isHome && <MessageCircle className="w-5 h-5 mr-2" />}
                      {secondaryButton.text}
                    </>
                  )}
                </Button>
              )}
            </div>
            
            {note && (
              <p className={`text-sm text-[#999999] italic ${isHome ? 'mt-4' : 'pt-4'}`}>
                {note}
              </p>
            )}
          </div>
          
          {/* Right side - Image showcase */}
          {image && (
            <div className={`relative ${isHome ? '' : 'hidden lg:block'}`}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt || (typeof title === 'string' ? title : 'Hero image')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Home page specific overlay card */}
              {isHome && additionalContent && (
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-[#E8E8E8]">
                  {additionalContent}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

