import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FAQ from "@/components/common/faq"
import HeroSection from "@/components/common/hero-section"
import CTASection from "@/components/common/cta-section"
import { CheckCircle, ExternalLink } from "lucide-react"
import breastTreatmentsData from "@/data/breast-treatments.json"

interface WhatIsData {
  title: string
  description: string
  reasons?: string[]
  note?: string
}

interface WhyChooseUsData {
  title: string
  description: string
  focus?: string[]
  trustHighlights: string[]
  note?: string
}

interface CandidateData {
  title: string
  description: string
  points: string[]
  note?: string
}

interface ImplantFilling {
  title: string
  options: string[]
}

interface ImplantShape {
  title: string
  options: string[]
}

interface ImplantPlacement {
  title: string
  description: string
  options: string[]
  note: string
}

interface ImplantOptionsData {
  title: string
  description: string
  filling: ImplantFilling
  shape: ImplantShape
  placement: ImplantPlacement
}

interface ImplantSizeData {
  title: string
  description: string
  considerations: string[]
  note: string
}

interface IncisionsData {
  title: string
  description: string
  options: string[]
  note: string
}

interface LiftTechnique {
  name: string
  description: string
  details: string
}

interface TypesOfLiftData {
  title: string
  description: string
  techniques: LiftTechnique[]
  note: string
}

interface ScarsData {
  title: string
  description: string
  points: string[]
  note: string
}

interface HowItWorksStep {
  number: string
  title: string
  description: string
}

interface HowItWorksData {
  title: string
  description: string
  steps: string[] | HowItWorksStep[]
  note?: string
}

interface ResultsData {
  title: string
  description: string
  benefits: string[]
  note?: string
}

interface RemovalOption {
  name: string
  description: string
}

interface RemovalOptionsData {
  title: string
  description: string
  options: RemovalOption[]
  note?: string
}

interface AppearanceAfterRemovalData {
  title: string
  description: string
  factors?: string[]
  possibleAppearance?: string[]
  combinationOptions?: string[]
  note?: string
}

interface CommonReasonsData {
  title: string
  description: string
  reasons: string[]
}

interface RevisionOptionsData {
  title: string
  description: string
  options: string[]
  note?: string
}

interface WhyMoreComplexData {
  title: string
  description: string
  reasons: string[]
  note?: string
}

interface WhyItOccursData {
  title: string
  description: string
  reasons: string[]
  note?: string
}

interface Grade {
  grade: string
  description: string
}

interface SymptomsAndGradesData {
  title: string
  description: string
  grades: Grade[]
  note?: string
}

interface TreatmentOptionsData {
  title: string
  description: string
  description2?: string
  options?: string[]
  note?: string
}

interface PreventingRecurrenceData {
  title: string
  description: string
  measures: string[]
  note?: string
}

interface ComparisonOption {
  procedure: string
  description: string
}

interface ComparisonTableRow {
  procedure: string
  benefits?: string
  limitations?: string
  whatItDoes?: string
}

interface ComparisonData {
  title: string
  description: string
  options?: ComparisonOption[]
  table?: ComparisonTableRow[]
  note?: string
}

interface JourneyStep {
  number: string
  title: string
  description: string
}

interface JourneyData {
  title: string
  steps: JourneyStep[]
}

interface RecoveryData {
  title: string
  description?: string
  timeline: string[]
  note?: string
}

interface SafetyData {
  title: string
  description: string
  risks?: string[]
  considerations?: string[]
  note?: string
}

interface CostData {
  title: string
  description: string
  factors: string[]
  note: string
}

interface FAQ {
  question: string
  answer: string
}

interface ReferenceLink {
  title: string
  url: string
}

interface ReferencesData {
  title: string
  links: ReferenceLink[]
}

interface FinalCTAData {
  title: string
  description: string
}

interface TreatmentData {
  slug: string
  title: string
  subtitle: string
  heroNote: string
  heroDescription: string
  image: string
  whatIs: WhatIsData
  whyChooseUs: WhyChooseUsData
  candidate?: CandidateData
  implantOptions?: ImplantOptionsData
  implantSize?: ImplantSizeData
  incisions?: IncisionsData
  typesOfLift?: TypesOfLiftData
  scars?: ScarsData
  howItWorks?: HowItWorksData
  results?: ResultsData
  removalOptions?: RemovalOptionsData
  appearanceAfterRemoval?: AppearanceAfterRemovalData
  commonReasons?: CommonReasonsData
  revisionOptions?: RevisionOptionsData
  whyMoreComplex?: WhyMoreComplexData
  whyItOccurs?: WhyItOccursData
  symptomsAndGrades?: SymptomsAndGradesData
  treatmentOptions?: TreatmentOptionsData
  preventingRecurrence?: PreventingRecurrenceData
  comparison?: ComparisonData
  journey: JourneyData
  recovery: RecoveryData
  safety: SafetyData
  cost: CostData
  faqs: FAQ[]
  references: ReferencesData
  finalCTA: FinalCTAData
}

interface PageProps {
  treatment: TreatmentData
}

function TreatmentHeroSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <HeroSection
      variant="treatment"
      badgeText="Breast Hub • Treatment"
      title={treatment.title}
      subtitle={treatment.subtitle}
      description={treatment.heroDescription}
      note={treatment.heroNote}
      image={treatment.image}
      imageAlt={treatment.title}
      primaryButton={{
        text: "Book a Private Consultation",
      }}
      secondaryButton={{
        text: "WhatsApp Us",
      }}
    />
  )
}

function WhatIsSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.whatIs.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.whatIs.description}
            </p>
          </div>
          
          {treatment.whatIs.reasons && treatment.whatIs.reasons.length > 0 && (
            <div className="space-y-6 pt-4">
              <p className="text-lg text-[#666666] font-semibold">
                {treatment.slug === "breast-reduction-malaysia" 
                  ? "Many patients search for breast reduction Malaysia because they experience:"
                  : treatment.slug === "fat-transfer-breast-augmentation-malaysia"
                  ? "Patients often search for fat transfer breast augmentation Malaysia because they want:"
                  : treatment.slug === "breast-implant-removal-malaysia"
                  ? "Women seek breast implant removal Malaysia for many reasons, including:"
                  : treatment.slug === "breast-revision-surgery-malaysia"
                  ? "Patients search for breast revision surgery Malaysia when they experience:"
                  : treatment.slug === "capsular-contracture-correction-malaysia"
                  ? "Capsular contracture can cause:"
                  : "Many patients consider breast augmentation in Malaysia to:"}
              </p>
              
              <ul className="grid md:grid-cols-2 gap-4">
                {treatment.whatIs.reasons.map((reason: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                    <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {treatment.whatIs.note && (
            <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  <strong className="text-[#1A1A1A] text-lg">Important note:</strong> {treatment.whatIs.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
            {treatment.whyChooseUs.title}
          </h2>
          <p className="text-lg md:text-xl text-[#666666] leading-relaxed mx-auto max-w-3xl">
            {treatment.whyChooseUs.description}
          </p>
        </div>
        
        {treatment.whyChooseUs.focus && treatment.whyChooseUs.focus.length > 0 && (
          <div className="space-y-8 mb-16">
            <p className="text-lg text-[#666666] font-semibold text-center">
              {treatment.slug === "breast-reduction-malaysia" 
                ? "What patients value most:"
                : "Our focus is on:"}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.whyChooseUs.focus.map((item: string, idx: number) => (
                <Card key={idx} className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27]  cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#E65A27] mt-1 flex-shrink-0  transition-transform" />
                      <p className="text-base text-[#666666] leading-relaxed font-medium group-hover:text-[#1A1A1A] transition-colors duration-300">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {treatment.whyChooseUs.trustHighlights.map((highlight: string, idx: number) => (
            <Card key={idx} className="bg-gradient-to-br from-white to-[#FAFAF9] border border-[#E8E8E8] rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#E65A27] cursor-pointer group">
              <CardContent className="p-8">
                <p className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors duration-300">{highlight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {treatment.whyChooseUs.note && (
          <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg mx-auto max-w-3xl">
            <CardContent className="p-8">
              <p className="text-base text-[#666666] leading-relaxed text-center">
                {treatment.whyChooseUs.note}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}

function CandidateSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.candidate) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.candidate.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.candidate.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.candidate.points.map((point: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{point}</span>
              </li>
            ))}
          </ul>
          
          {treatment.candidate.note && (
            <Card className="bg-gradient-to-br from-[#F5F5F5] to-[#FAFAF9] border border-[#E8E8E8] rounded-2xl shadow-md">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed italic">
                  {treatment.candidate.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function ImplantOptionsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.implantOptions) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.implantOptions.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.implantOptions.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <Card className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors duration-300">
                  {treatment.implantOptions.filling.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {treatment.implantOptions.filling.options.map((option: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                      <span className="text-[#E65A27] font-bold mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors duration-300">
                  {treatment.implantOptions.shape.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {treatment.implantOptions.shape.options.map((option: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                      <span className="text-[#E65A27] font-bold mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1A1A1A]">
                  {treatment.implantOptions.placement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.implantOptions.placement.description}
                </p>
                <ul className="space-y-3">
                  {treatment.implantOptions.placement.options.map((option: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#666666] leading-relaxed">
                      <span className="text-[#E65A27] font-bold mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-[#666666] leading-relaxed italic pt-2 border-t border-[#E8E8E8]">
                  {treatment.implantOptions.placement.note}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImplantSizeSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.implantSize) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.implantSize.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.implantSize.description}
            </p>
          </div>
          
          <div className="space-y-6 pt-4">
            <p className="text-lg text-[#666666] font-semibold">
              Sizing decisions consider:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.implantSize.considerations.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <p className="text-base text-[#666666] leading-relaxed italic">
                {treatment.implantSize.note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function IncisionsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.incisions) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.incisions.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.incisions.description}
            </p>
          </div>
          
          <div className="space-y-6 pt-4">
            <p className="text-lg text-[#666666] font-semibold">
              Common incision options include:
            </p>
            
            <ul className="grid md:grid-cols-2 gap-4">
              {treatment.incisions.options.map((option: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{option}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <p className="text-base text-[#666666] leading-relaxed">
                {treatment.incisions.note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function TypesOfLiftSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.typesOfLift) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.typesOfLift.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.typesOfLift.description}
            </p>
          </div>
          
          <div className="space-y-6 pt-4">
            <p className="text-lg text-[#666666] font-semibold">
              Common Breast Lift Techniques
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {treatment.typesOfLift.techniques.map((technique: LiftTechnique, idx: number) => (
                <Card key={idx} className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors duration-300">
                      {technique.name}
                    </CardTitle>
                    <CardDescription className="text-base text-[#666666] mt-3 group-hover:text-[#444444] transition-colors duration-300">
                      {technique.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                      {technique.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <p className="text-base text-[#666666] leading-relaxed">
                {treatment.typesOfLift.note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ScarsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.scars) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto ">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.scars.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.scars.description}
            </p>
          </div>
          
          <div className="space-y-6 pt-4">
            <p className="text-lg text-[#666666] font-semibold">
              Scars typically:
            </p>
            
            <ul className="grid md:grid-cols-2 gap-4">
              {treatment.scars.points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="bg-gradient-to-br from-[#F5F5F5] to-[#FAFAF9] border border-[#E8E8E8] rounded-2xl shadow-md">
            <CardContent className="p-8">
              <p className="text-base text-[#666666] leading-relaxed">
                {treatment.scars.note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.howItWorks) return null
  
  // Check if steps is an array of objects (fat transfer) or strings (breast reduction)
  const isStepsArray = treatment.howItWorks.steps && treatment.howItWorks.steps.length > 0 && typeof treatment.howItWorks.steps[0] === 'object'
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto ">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.howItWorks.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.howItWorks.description}
            </p>
          </div>
          
          {isStepsArray ? (
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {(treatment.howItWorks.steps as HowItWorksStep[]).map((step: HowItWorksStep, idx: number) => (
                <Card key={idx} className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E65A27] to-[#F97316] text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors duration-300">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <ul className="grid md:grid-cols-2 gap-4 pt-4">
              {(treatment.howItWorks.steps as string[]).map((step: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{step}</span>
                </li>
              ))}
            </ul>
          )}
          
          {treatment.howItWorks.note && (
            <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.howItWorks.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.comparison) return null
  
  // Check if it's an options array (implant removal) or table format
  const isOptionsArray = treatment.comparison.options && Array.isArray(treatment.comparison.options)
  const hasTable = treatment.comparison.table && Array.isArray(treatment.comparison.table)
  const hasBenefitsLimitations = hasTable && treatment.comparison.table && treatment.comparison.table.length > 0 && treatment.comparison.table[0].benefits
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.comparison.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.comparison.description}
            </p>
          </div>
          
          {isOptionsArray && treatment.comparison.options ? (
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {treatment.comparison.options.map((option: ComparisonOption, idx: number) => (
                <Card key={idx} className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#E65A27] transition-colors duration-300">
                      {option.procedure}
                    </h3>
                    <p className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : hasTable && treatment.comparison.table ? (
            <div className="overflow-x-auto pt-4">
              <Card className="border border-[#E8E8E8] rounded-2xl shadow-lg overflow-hidden">
                {hasBenefitsLimitations ? (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#F5F5F5] to-[#FAFAF9]">
                        <th className="border-b-2 border-[#E8E8E8] px-8 py-5 text-left text-lg font-bold text-[#1A1A1A]">
                          Procedure
                        </th>
                        <th className="border-b-2 border-[#E8E8E8] px-8 py-5 text-left text-lg font-bold text-[#1A1A1A]">
                          Benefits
                        </th>
                        <th className="border-b-2 border-[#E8E8E8] px-8 py-5 text-left text-lg font-bold text-[#1A1A1A]">
                          Limitations
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {treatment.comparison.table.map((row: ComparisonTableRow, idx: number) => (
                        <tr key={idx} className="hover:bg-[#FAFAF9] transition-colors border-b border-[#E8E8E8]">
                          <td className="px-8 py-5 text-base text-[#666666] font-semibold">
                            {row.procedure}
                          </td>
                          <td className="px-8 py-5 text-base text-[#666666]">
                            {row.benefits}
                          </td>
                          <td className="px-8 py-5 text-base text-[#666666]">
                            {row.limitations}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#F5F5F5] to-[#FAFAF9]">
                        <th className="border-b-2 border-[#E8E8E8] px-8 py-5 text-left text-lg font-bold text-[#1A1A1A]">
                          Procedure
                        </th>
                        <th className="border-b-2 border-[#E8E8E8] px-8 py-5 text-left text-lg font-bold text-[#1A1A1A]">
                          What It Does
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {treatment.comparison.table.map((row: ComparisonTableRow, idx: number) => (
                        <tr key={idx} className="hover:bg-[#FAFAF9] transition-colors border-b border-[#E8E8E8]">
                          <td className="px-8 py-5 text-base text-[#666666] font-semibold">
                            {row.procedure}
                          </td>
                          <td className="px-8 py-5 text-base text-[#666666]">
                            {row.whatItDoes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </Card>
            </div>
          ) : null}
          
          {treatment.comparison.note && (
            <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.comparison.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function RemovalOptionsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.removalOptions) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
        <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.removalOptions.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.removalOptions.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {treatment.removalOptions.options.map((option: RemovalOption, idx: number) => (
              <Card key={idx} className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors duration-300">
                    {option.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {treatment.removalOptions.note && (
              <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.removalOptions.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function AppearanceAfterRemovalSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.appearanceAfterRemoval) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.appearanceAfterRemoval.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.appearanceAfterRemoval.description}
            </p>
          </div>
          
          {treatment.appearanceAfterRemoval.factors && (
            <div className="space-y-6 pt-4">
              <ul className="grid md:grid-cols-2 gap-4">
                {treatment.appearanceAfterRemoval.factors.map((factor: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                    <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {treatment.appearanceAfterRemoval.possibleAppearance && (
            <div className="space-y-6 pt-4">
              <p className="text-lg text-[#666666] font-semibold">
                After removal, breasts may appear:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {treatment.appearanceAfterRemoval.possibleAppearance.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                    <span className="text-[#E65A27] font-bold text-lg mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                    <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {treatment.appearanceAfterRemoval.combinationOptions && (
            <div className="space-y-6 pt-4">
              <p className="text-lg text-[#666666] font-semibold">
                To improve contour, implant removal may be combined with:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {treatment.appearanceAfterRemoval.combinationOptions.map((option: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                    <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {treatment.appearanceAfterRemoval.note && (
            <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border  border-[#FDE8DD] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.appearanceAfterRemoval.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function CommonReasonsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.commonReasons) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto ">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.commonReasons.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.commonReasons.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.commonReasons.reasons.map((reason: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function RevisionOptionsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.revisionOptions) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.revisionOptions.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.revisionOptions.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.revisionOptions.options.map((option: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{option}</span>
              </li>
            ))}
          </ul>
          
          {treatment.revisionOptions.note && (
            <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.revisionOptions.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function WhyMoreComplexSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.whyMoreComplex) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.whyMoreComplex.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.whyMoreComplex.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.whyMoreComplex.reasons.map((reason: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{reason}</span>
              </li>
            ))}
          </ul>
          
          {treatment.whyMoreComplex.note && (
            <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.whyMoreComplex.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function WhyItOccursSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.whyItOccurs) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.whyItOccurs.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.whyItOccurs.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.whyItOccurs.reasons.map((reason: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{reason}</span>
              </li>
            ))}
          </ul>
          
          {treatment.whyItOccurs.note && (
            <Card className="bg-gradient-to-br from-[#F5F5F5] to-[#FAFAF9] border border-[#E8E8E8] rounded-2xl shadow-md">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.whyItOccurs.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function SymptomsAndGradesSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.symptomsAndGrades) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.symptomsAndGrades.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.symptomsAndGrades.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {treatment.symptomsAndGrades.grades.map((grade: Grade, idx: number) => (
              <Card key={idx} className="border border-[#E8E8E8] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#E65A27] hover:scale-105 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E65A27] to-[#F97316] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {grade.grade}
                    </div>
                    <div>
                      <p className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">
                        {grade.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {treatment.symptomsAndGrades.note && (
            <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.symptomsAndGrades.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function TreatmentOptionsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.treatmentOptions) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.treatmentOptions.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.treatmentOptions.description}
            </p>
            
            {treatment.treatmentOptions.description2 && (
              <p className="text-lg text-[#666666] leading-relaxed font-semibold max-w-3xl">
                {treatment.treatmentOptions.description2}
              </p>
            )}
          </div>
          
          {treatment.treatmentOptions.options && treatment.treatmentOptions.options.length > 0 && (
            <ul className="grid md:grid-cols-2 gap-4 pt-4">
              {treatment.treatmentOptions.options.map((option: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{option}</span>
                </li>
              ))}
            </ul>
          )}
          
          {treatment.treatmentOptions.note && (
            <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.treatmentOptions.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function PreventingRecurrenceSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.preventingRecurrence) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.preventingRecurrence.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.preventingRecurrence.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.preventingRecurrence.measures.map((measure: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{measure}</span>
              </li>
            ))}
          </ul>
          
          {treatment.preventingRecurrence.note && (
            <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.preventingRecurrence.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function ResultsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.results) return null
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.results.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.results.description}
            </p>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.results.benefits.map((benefit: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {treatment.results.note && (
            <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.results.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function JourneySection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 font-semibold px-6 py-2.5 mb-8 shadow-lg">
            Patient Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {treatment.journey.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatment.journey.steps.map((step: JourneyStep, idx: number) => (
            <Card key={idx} className="bg-white/5 backdrop-blur-sm border border-[#E65A27]/30 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#E65A27] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[#E65A27] to-[#F97316] bg-clip-text text-transparent leading-none mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-normal">
                  {step.title}
                </h3>
                <p className="text-base text-orange-200 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecoverySection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.recovery.title}
            </h2>
            
            {treatment.recovery.description && (
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
                {treatment.recovery.description}
              </p>
            )}
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.recovery.timeline.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
          
          {treatment.recovery.note && (
            <Card className="bg-gradient-to-br from-[#F5F5F5] to-[#FAFAF9] border border-[#E8E8E8] rounded-2xl shadow-md">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed italic">
                  {treatment.recovery.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function SafetySection({ treatment }: { treatment: TreatmentData }) {
  const items = treatment.safety.risks || treatment.safety.considerations || []
  const label = treatment.safety.risks ? "Possible risks include:" : "Important considerations include:"
  
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="container mx-auto ">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.safety.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.safety.description}
            </p>
          </div>
          
          {items.length > 0 && (
            <div className="space-y-6 pt-4">
              <p className="text-lg text-[#666666] font-semibold">
                {label}
              </p>
              
              <ul className="grid md:grid-cols-2 gap-4">
                {items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white hover:bg-[#FAFAF9] transition-all duration-300 border border-[#E8E8E8] hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                    <span className="text-[#E65A27] font-bold text-lg mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                    <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {treatment.safety.note && (
            <Card className="bg-white border border-[#E8E8E8] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {treatment.safety.note}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

function CostSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.cost.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.cost.description}
            </p>
          </div>
          
          <div className="space-y-6 pt-4">
            <p className="text-lg text-[#666666] font-semibold">
              Costs vary depending on:
            </p>
            
            <ul className="grid md:grid-cols-2 gap-4">
              {treatment.cost.factors.map((factor: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAF9] hover:bg-white transition-all duration-300 border border-transparent hover:border-[#E65A27] shadow-md hover:shadow-lg cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-[#E65A27] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-[#666666] leading-relaxed group-hover:text-[#1A1A1A] transition-colors duration-300">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
            <CardContent className="p-8">
              <p className="text-base text-[#666666] leading-relaxed">
                {treatment.cost.note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ReferencesSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
            {treatment.references.title}
          </h2>
          
          <ul className="grid md:grid-cols-2 gap-4 pt-4">
            {treatment.references.links.map((link: ReferenceLink, idx: number) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 rounded-xl bg-[#FAFAF9]  border border-black transition-all duration-300 shadow-md  cursor-pointer"
                >
                  <span className="text-base leading-relaxed text-[#666666] group-hover:text-[#E65A27] font-medium transition-colors duration-300">{link.title}</span>
                  <ExternalLink className="w-4 h-4 text-[#E65A27] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TreatmentFinalCTASection({ treatment }: { treatment: TreatmentData }) {
  return (
    <CTASection
      variant="treatment"
      title={treatment.finalCTA.title}
      description={treatment.finalCTA.description}
      primaryButton={{
        text: "Book a Private Consultation",
      }}
      secondaryButton={{
        text: "WhatsApp Us",
      }}
    />
  )
}

export default function BreastTreatmentPage({ treatment }: PageProps) {
  if (!treatment) {
    return (
      <>
        <Head>
          <title>Treatment Not Found | Dr. Soma Plastic Surgery</title>
        </Head>
        <main className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Treatment Not Found</h1>
            <Link href="/breast">
              <Button>Back to Breast Hub</Button>
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{treatment.title} | Dr. Soma Plastic Surgery</title>
        <meta name="description" content={treatment.heroDescription.substring(0, 160)} />
      </Head>
      
      <main className="min-h-screen bg-white">
        <TreatmentHeroSection treatment={treatment} />
        <WhatIsSection treatment={treatment} />
        <WhyChooseUsSection treatment={treatment} />
        <CandidateSection treatment={treatment} />
        <ImplantOptionsSection treatment={treatment} />
        <ImplantSizeSection treatment={treatment} />
        <TypesOfLiftSection treatment={treatment} />
        <IncisionsSection treatment={treatment} />
        <ScarsSection treatment={treatment} />
        <RemovalOptionsSection treatment={treatment} />
        <AppearanceAfterRemovalSection treatment={treatment} />
        <CommonReasonsSection treatment={treatment} />
        <RevisionOptionsSection treatment={treatment} />
        <WhyItOccursSection treatment={treatment} />
        <SymptomsAndGradesSection treatment={treatment} />
        <TreatmentOptionsSection treatment={treatment} />
        <WhyMoreComplexSection treatment={treatment} />
        <PreventingRecurrenceSection treatment={treatment} />
        <HowItWorksSection treatment={treatment} />
        <ResultsSection treatment={treatment} />
        <ComparisonSection treatment={treatment} />
        <JourneySection treatment={treatment} />
        <RecoverySection treatment={treatment} />
        <SafetySection treatment={treatment} />
        <CostSection treatment={treatment} />
        <FAQ 
          faqs={treatment.faqs || []} 
          title="Frequently Asked Questions (Surgeon-Led)"
          bgColor="gray"
        />
        <ReferencesSection treatment={treatment} />
        <TreatmentFinalCTASection treatment={treatment} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(breastTreatmentsData as Record<string, TreatmentData>).map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: { params?: { slug?: string } }) {
  const slug = context.params?.slug || ""
  const treatment = (breastTreatmentsData as Record<string, TreatmentData>)[slug] || null

  return {
    props: {
      treatment,
    },
  }
}

