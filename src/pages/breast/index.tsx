"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FAQ from "@/components/common/faq"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Sparkles, RefreshCw, Minus, Droplets, XCircle, Settings, AlertCircle, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

// Treatment data
const breastTreatments = [
  {
    title: "Breast Augmentation in Malaysia",
    location: "Malaysia",
    description: "For patients who want more fullness, improved shape, or restored volume after pregnancy or weight loss.",
    bestFor: ["Volume", "Upper fullness", "Shape", "Symmetry"],
    href: "/breast/breast-augmentation-malaysia",
    cta: "View Breast Augmentation",
    icon: Sparkles,
    category: "enhancement",
    image: "/breast/breast-augmentation.jpg",
  },
  {
    title: "Breast Lift in Malaysia",
    location: "Malaysia",
    description: "For patients who like their size but want a higher, firmer position and a more youthful shape.",
    bestFor: ["Sagging", "Lower position", "Nipple position changes"],
    href: "/breast/breast-lift-malaysia",
    cta: "View Breast Lift",
    icon: RefreshCw,
    category: "enhancement",
    image: "/breast/breast-lift.png",
  },
  {
    title: "Breast Reduction in Malaysia",
    location: "Malaysia",
    description: "For patients who feel heavy, uncomfortable, or limited by breast size, and want relief plus a better shape.",
    bestFor: ["Neck and shoulder strain", "Back discomfort", "Clothing fit"],
    href: "/breast/breast-reduction-malaysia",
    cta: "View Breast Reduction",
    icon: Minus,
    category: "enhancement",
    image: "/breast/breast-reduction.png",
  },
  {
    title: "Fat Transfer Breast Augmentation in Malaysia",
    location: "Malaysia",
    description: "For patients who want a softer, more natural increase using your own fat, with subtle shaping.",
    bestFor: ["Small to moderate volume increase", "Natural feel"],
    href: "/breast/fat-transfer-breast-augmentation-malaysia",
    cta: "View Fat Transfer Breast Augmentation",
    icon: Droplets,
    category: "enhancement",
    image: "/breast/fat-transfer-breast.png",
  },
  {
    title: "Breast Implant Removal in Malaysia",
    location: "Malaysia",
    description: "For patients who want implants removed for comfort, lifestyle, or medical reasons.",
    bestFor: ["Implant removal", "Change of preference", "Discomfort concerns"],
    href: "/breast/breast-implant-removal-malaysia",
    cta: "View Implant Removal",
    icon: XCircle,
    category: "revision",
    image: "/breast/breast-implant-removal.png",
  },
  {
    title: "Breast Revision Surgery in Malaysia",
    location: "Malaysia",
    description: "For patients who are unhappy after a previous breast surgery and want correction, improvement, or balance.",
    bestFor: ["Implant position issues", "Asymmetry", "Shape correction"],
    href: "/breast/breast-revision-surgery-malaysia",
    cta: "View Breast Revision Surgery",
    icon: Settings,
    category: "revision",
    image: "/breast/breast-revision.avif",
  },
  {
    title: "Capsular Contracture Correction in Malaysia",
    location: "Malaysia",
    description: "For patients who feel tightness, hardness, pain, or shape changes due to scar capsule around implants.",
    bestFor: ["Tightness", "Firmness", "Discomfort", "Implant shape distortion"],
    href: "/breast/capsular-contracture-correction-malaysia",
    cta: "View Capsular Contracture Correction",
    icon: AlertCircle,
    category: "revision",
    image: "/breast/capsular-contracture.jpeg",
  },
]

const quickGuide = [
  { goal: "You want more volume and shape", procedure: "Breast Augmentation", href: "/breast/breast-augmentation-malaysia" },
  { goal: "You want higher position and firmness", procedure: "Breast Lift", href: "/breast/breast-lift-malaysia" },
  { goal: "You want smaller size and daily comfort", procedure: "Breast Reduction", href: "/breast/breast-reduction-malaysia" },
  { goal: "You want a subtle, natural change using your own fat", procedure: "Fat Transfer Breast Augmentation", href: "/breast/fat-transfer-breast-augmentation-malaysia" },
  { goal: "You want implants removed", procedure: "Breast Implant Removal", href: "/breast/breast-implant-removal-malaysia" },
  { goal: "You had surgery before and want improvement", procedure: "Breast Revision Surgery", href: "/breast/breast-revision-surgery-malaysia" },
  { goal: "You feel tightness, hardness, or pain after implants", procedure: "Capsular Contracture Correction", href: "/breast/capsular-contracture-correction-malaysia" },
]

const differentiators = [
  { title: "Natural-looking results", description: "Results that match your body frame" },
  { title: "Safety-first planning", description: "With clear medical assessment" },
  { title: "Respectful, private consultations", description: "Without pressure" },
  { title: "Simple explanations", description: "So you feel confident in your decision" },
  { title: "Aftercare support", description: "Because healing is part of the result" },
]

const faqs = [
  { question: "Will my breasts look natural after surgery?", answer: "Natural results depend on choosing the right procedure, size, and technique for your body. During consultation, breast shape, chest width, skin quality, and lifestyle are assessed so results look balanced and proportionate rather than obvious or artificial." },
  { question: "Is breast surgery safe in Malaysia?", answer: "Breast surgery is generally safe when performed by a qualified plastic surgeon in an accredited medical facility. Safety planning includes medical history review, physical examination, and selecting the most suitable technique for your body. A consultation is required to confirm suitability." },
  { question: "How do I know which breast procedure is right for me?", answer: "The right procedure depends on your concern. Volume loss, sagging, heaviness, asymmetry, or implant issues each require a different approach. Some patients benefit from a single procedure, while others may need a combination such as a lift with augmentation. This is discussed clearly during consultation." },
  { question: "Can breast lift and breast augmentation be done together?", answer: "Yes. Breast lift with augmentation is common for patients who want both improved position and added volume. Not everyone needs both, and combining procedures is only recommended when it is safe and appropriate for your anatomy." },
  { question: "How long is recovery after breast surgery?", answer: "Recovery varies by procedure. Most patients return to light activities within one to two weeks. Full healing and final results take several months. Detailed recovery timelines and aftercare instructions are provided before surgery." },
  { question: "Will there be scars?", answer: "All surgical procedures involve some scarring. Incisions are planned carefully and placed as discreetly as possible. Over time, scars usually fade and become less noticeable with proper care." },
  { question: "How long do breast implants last?", answer: "Breast implants are not lifetime devices. Many patients keep their implants for ten to fifteen years or longer, but replacement or removal may be needed due to aging, body changes, or personal preference." },
  { question: "Is fat transfer breast augmentation permanent?", answer: "Transferred fat that survives becomes permanent. Some fat is naturally reabsorbed in the first few months, which is why fat transfer offers subtle and natural volume enhancement rather than dramatic size increase." },
  { question: "Can I breastfeed after breast surgery?", answer: "Many patients can breastfeed after breast surgery, but it depends on the procedure and technique used. If future breastfeeding is important to you, this should be discussed during consultation so surgical planning can take this into account." },
  { question: "What if I had breast surgery before and am unhappy with the results?", answer: "Breast revision surgery can address concerns such as asymmetry, implant problems, firmness, or dissatisfaction with appearance. A detailed assessment is required to understand what was done previously and what improvements are possible." },
  { question: "Do I need a consultation before deciding?", answer: "Yes. A consultation is essential to assess safety, suitability, and realistic outcomes. You are not expected to decide immediately. The goal is clarity, not pressure." },
]

// Components
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#FAFAF9] to-white py-[50px]">
      <div className="flex containers w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
          <Badge variant="secondary" className="bg-[#F5F5F5] text-[#666666] hover:bg-[#F5F5F5] font-normal px-4 py-1.5">
            Breast Cosmetic Surgery Hub
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
            Breast Surgery in Malaysia
          </h1>
          
          <p className="text-xl md:text-2xl text-[#555555] max-w-2xl mx-auto font-light">
            A calm place to explore your options and feel clear again
          </p>
          
          <Separator className="max-w-24 mx-auto bg-[#E8E8E8]" />
          
          <p className="text-[16px] text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Breast concerns are not only about size. They can be about balance, comfort, confidence, and feeling like yourself in your own clothes.
          </p>
          <p className="text-[16px] text-[#666666] max-w-2xl mx-auto leading-relaxed">
            This Breast Hub is the simple starting point. You can explore each breast procedure page below, compare what each treatment is for, and book a private consultation when you are ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
            <Button size="lg" className="bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-md font-medium h-12 px-8">
              <Phone className="w-4 h-4 mr-2" />
              Book a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-[#D4D4D4] text-[#2B2B2B] hover:bg-[#FAFAF9] rounded-md font-medium h-12 px-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
          
          <p className="text-[13px] text-[#999999] italic pt-2">
            Results vary from person to person. A consultation is needed to confirm suitability and safety.
          </p>
        </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/breast/breast-hero.png"
                alt="Breast surgery consultation"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Optional decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E65A27]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E65A27]/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TreatmentsSection() {
  const enhancementTreatments = breastTreatments.filter(t => t.category === "enhancement")
  const revisionTreatments = breastTreatments.filter(t => t.category === "revision")

  return (
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="flex containers w-full relative z-10">
        <div className="flex flex-col w-full">
          {/* Section Header */}
          <div className="text-center mb-14 w-full">
            <span className="inline-block text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              Our Treatments
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
              Explore Breast Treatments <span className="text-primary">In Malaysia</span>
            </h2>
            <p className="text-[17px] text-[#666666] max-w-2xl mx-auto leading-relaxed">
              Pick the page that matches your goal. Each treatment has its own full page with details, recovery, and FAQs.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="enhancement" className="w-full">
            <TabsList className="flex w-full max-w-lg mx-auto grid-cols-2 mb-14 h-16 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <TabsTrigger
                value="enhancement"
                className="flex-1 text-[15px] font-semibold rounded-xl h-full transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Enhancement
              </TabsTrigger>
              <TabsTrigger
                value="revision"
                className="flex-1 text-[15px] font-semibold rounded-xl h-full transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Revision & Correction
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enhancement" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {enhancementTreatments.map((treatment, idx) => (
                  <TreatmentCard key={idx} treatment={treatment} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="revision" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {revisionTreatments.map((treatment, idx) => (
                  <TreatmentCard key={idx} treatment={treatment} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function TreatmentCard({ treatment }: { treatment: typeof breastTreatments[0] }) {
  return (
    <Card className="group bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
      {/* Treatment Image */}
      <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <Badge className="absolute top-4 right-4 text-[12px] text-white border-0 bg-primary font-medium px-4 py-1.5 rounded-full shadow-lg">
          {treatment.location}
        </Badge>
      </div>

      <CardHeader className="pb-3 pt-5 px-6 flex-shrink-0">
        <CardTitle className="text-lg font-bold text-[#1A1A1A] mb-2">
          {treatment.title}
        </CardTitle>
        <CardDescription className="text-[15px] text-[#555555] leading-relaxed">
          {treatment.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4 px-6 flex-grow">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Best For:</p>
        <div className="flex flex-wrap gap-2">
          {treatment.bestFor.map((tag, i) => (
            <Badge key={i} variant="secondary" className="bg-gradient-to-r from-primary/10 to-orange-100 text-primary hover:from-primary/20 hover:to-orange-200 text-[12px] font-medium px-3 py-1.5 rounded-full border-0 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-6 px-6 mt-auto flex-shrink-0">
        <Link href={treatment.href} className="w-full">
          <Button className="w-full bg-primary hover:bg-[#d14e1e] text-white rounded-xl font-semibold text-[13px] h-12 px-4 transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-[1.02] whitespace-normal text-center leading-tight">
            View Details
            <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function QuickGuideSection() {
  return (
    <section className="py-[50px] bg-[#FAFAF9] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8E8E8_1px,transparent_1px),linear-gradient(to_bottom,#E8E8E8_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      
      <div className="flex containers w-full relative">
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="text-center mb-16 w-full">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#E65A27] font-medium mb-4">
              Find Your Match
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
              Not sure which breast procedure is right for you?
            </h2>
            <p className="text-[18px] text-[#666666] max-w-lg mx-auto">
              Use this quick guide, then open the matching page.
            </p>
          </div>

          {/* Guide Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickGuide.map((item, idx) => (
              <Link key={idx} href={item.href} className="block group">
                <Card className="h-full bg-white border-0 transition-all rounded-2xl overflow-hidden flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Top accent bar */}
                    
                    <div className="p-7 flex flex-col h-full">
                      {/* Number badge */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[12px] font-semibold text-[#E65A27] bg-[#FEF3EE] px-3 py-1.5 rounded-full">
                          Option {idx + 1}
                        </span>
                        <ArrowRight className="w-5 h-5 text-[#CCCCCC] group-hover:text-[#E65A27] group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3 flex-grow">
                        <p className="text-[15px] text-[#777777] leading-relaxed">
                          {item.goal}
                        </p>
                        <h3 className="text-[20px] font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors tracking-normal font-medium">
                          {item.procedure}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block bg-[#1A1A1A] border-0 rounded-2xl overflow-hidden">
              <CardContent className="px-[80px] py-[30px] flex flex-col sm:flex-row items-center gap-6">
                <div className="text-left">
                  <p className="text-white text-[14px] mb-1">Still not sure?</p>
                  <p className="text-white text-[18px] font-semibold">Let us help you decide</p>
                </div>
                <Button size="lg" className="bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-xl font-medium h-14 px-8 text-[15px] whitespace-nowrap">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function DifferentiatorsSection() {
  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="flex flex-col w-full">
          <div className="text-center mb-14 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
              What makes our breast care different
            </h2>
            <p className="text-[16px] text-[#666666] max-w-2xl mx-auto">
              When people search for breast surgery in Malaysia, most are not only looking for a procedure. They are looking for trust. At Soma Plastic Surgery (Clinical Aesthetics), we focus on:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {differentiators.map((item, idx) => (
              <Card key={idx} className="border-[#E8E8E8] shadow-none rounded-xl hover:border-[#D4D4D4] hover:shadow-sm transition-all">
                <CardContent className="p-8 text-center">
                  <CardTitle className="text-[18px] font-semibold text-[#1A1A1A] mb-3">
                    {item.title}
                  </CardTitle>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* CTA Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/breast/breast-cta.jpeg"
                alt="Book a consultation"
                fill
                className="object-cover "
              />
            </div>
          </div>
          
          {/* CTA Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
              Ready to explore your options with clarity?
            </h2>
            <p className="text-[17px] text-[#666666] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              You do not need to decide today. Start with a conversation, get honest guidance, and move forward only when you feel ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-lg font-medium h-14 px-8 py-4 text-[16px]">
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#D4D4D4] text-[#2B2B2B] hover:bg-[#FAFAF9] rounded-lg font-medium h-14 px-8 py-4 text-[16px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Page
export default function BreastHubPage() {
  return (
    <>
      <Head>
        <title>Breast Surgery in Malaysia | Breast Procedures and Treatments</title>
        <meta name="description" content="Explore breast surgery options in Malaysia including breast augmentation, breast lift, breast reduction, fat transfer, implant removal, revision surgery, and capsular contracture correction. View each treatment page and book a private consultation." />
        {/* Alternative Meta Title: Breast Treatments Malaysia | Augmentation, Lift, Reduction and Revision */}
      </Head>
      
      <main className="min-h-screen bg-white">
        <HeroSection />
        <TreatmentsSection />
        <QuickGuideSection />
        <DifferentiatorsSection />
        <FAQ 
          faqs={faqs} 
          title="Common questions patients ask"
          subtitle="Clear answers to help you feel informed"
          bgColor="gray"
        />
        <CTASection />
      </main>
    </>
  )
}
