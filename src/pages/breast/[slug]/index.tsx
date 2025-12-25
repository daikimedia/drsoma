import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  description?: string
}

interface ReferencesData {
  title: string
  description?: string
  links: ReferenceLink[]
}

interface SagCause {
  title: string
  description: string
}

interface WhyBreastsSagData {
  title: string
  description: string
  causes: SagCause[]
  concerns: string[]
}

interface ImprovementItem {
  area: string
  improvement: string
}

interface ImprovementsData {
  title: string
  items: ImprovementItem[]
}

interface LiftVsAugItem {
  feature: string
  lift: string
  augmentation: string
}

interface LiftComparisonData {
  title: string
  items: LiftVsAugItem[]
}

interface BenefitsData {
  title: string
  items: string[]
}

interface TestimonialData {
  name: string
  age: string
  text: string
}

interface LiftTechniqueExtended {
  name: string
  altName?: string
  description: string
  details?: string
  highlighted?: boolean
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
  candidate?: CandidateData & { notSuitable?: string }
  implantOptions?: ImplantOptionsData
  implantSize?: ImplantSizeData
  incisions?: IncisionsData
  typesOfLift?: TypesOfLiftData & { techniques: LiftTechniqueExtended[] }
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
  comparison?: ComparisonData | LiftComparisonData
  journey?: JourneyData
  recovery: RecoveryData & { expectations?: string[], painDescription?: string }
  safety: SafetyData
  cost: CostData
  faqs: FAQ[]
  references: ReferencesData
  finalCTA: FinalCTAData
  whyBreastsSag?: WhyBreastsSagData
  improvements?: ImprovementsData
  benefits?: BenefitsData
  testimonials?: TestimonialData[]
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
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
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
              
              <div className="grid md:grid-cols-2 gap-5">
                {treatment.whatIs.reasons.map((reason: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#444444] leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
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
    <section className="py-[50px] bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="w-full">
          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden">
            {/* Header */}
            <div className="bg-[#1A1A1A] px-8 py-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {treatment.whyChooseUs.title}
              </h2>
              <p className="text-[15px] text-gray-300 mt-2 leading-relaxed">
                {treatment.whyChooseUs.description}
              </p>
            </div>

            {/* Trust Highlights - Top Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#EEEEEE]">
              {treatment.whyChooseUs.trustHighlights.map((highlight: string, idx: number) => (
                <div key={idx} className={`py-5 px-4 text-center ${idx < treatment.whyChooseUs.trustHighlights.length - 1 ? 'border-r border-[#EEEEEE]' : ''}`}>
                  <p className="text-[14px] font-semibold text-[#E65A27]">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Focus Items */}
            {treatment.whyChooseUs.focus && treatment.whyChooseUs.focus.length > 0 && (
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold text-[#999999] uppercase tracking-wider mb-5">
                  {treatment.slug === "breast-reduction-malaysia"
                    ? "What patients value most"
                    : "Our focus"}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {treatment.whyChooseUs.focus.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 py-4 px-5 rounded-xl bg-[#FAFAF9] border border-[#EEEEEE]">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[15px] text-[#444444] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Note Footer */}
            {treatment.whyChooseUs.note && (
              <div className="bg-[#FEF3EE] border-t border-[#FDE8DD] px-8 py-5">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E65A27] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    {treatment.whyChooseUs.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function CandidateSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.candidate) return null
  
  return (
    <section className="py-[50px] bg-white">
        <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.candidate.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.candidate.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.candidate.points.map((point: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
          
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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
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
    <section className="py-[50px] bg-white">
        <div className="flex containers w-full">
        <div className="space-y-8 w-full">
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
            
            <div className="grid md:grid-cols-2 gap-5">
              {treatment.implantSize.considerations.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{item}</span>
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
    <section className="py-[50px] bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.incisions.title}
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed max-w-3xl">
              {treatment.incisions.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#999999] uppercase tracking-wider">
              Common incision options include:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {treatment.incisions.options.map((option: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {treatment.incisions.note && (
            <div className="flex items-start gap-3 py-5 px-6 rounded-2xl bg-[#FEF3EE] border border-[#FDE8DD]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E65A27] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {treatment.incisions.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TypesOfLiftSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.typesOfLift) return null

  return (
    <section className="py-[50px] bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.typesOfLift.title}
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed max-w-3xl">
              {treatment.typesOfLift.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatment.typesOfLift.techniques.map((technique: LiftTechniqueExtended, idx: number) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${
                  technique.highlighted
                    ? 'bg-[#1A1A1A] border-[#1A1A1A]'
                    : 'bg-white border-[#EEEEEE]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 font-bold ${
                  technique.highlighted
                    ? 'bg-[#E65A27] text-white'
                    : 'bg-[#FAFAF9] text-[#1A1A1A]'
                }`}>
                  {idx + 1}
                </div>
                <h3 className={`text-base font-semibold mb-1 ${
                  technique.highlighted ? 'text-white' : 'text-[#1A1A1A]'
                }`}>
                  {technique.name}
                </h3>
                {technique.altName && (
                  <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                    technique.highlighted ? 'text-gray-400' : 'text-[#E65A27]'
                  }`}>
                    {technique.altName}
                  </p>
                )}
                <p className={`text-sm leading-relaxed ${
                  technique.highlighted ? 'text-gray-400' : 'text-[#666666]'
                }`}>
                  {technique.description}
                </p>
                {technique.details && (
                  <p className={`text-sm leading-relaxed mt-2 ${
                    technique.highlighted ? 'text-gray-400' : 'text-[#666666]'
                  }`}>
                    {technique.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {treatment.typesOfLift.note && (
            <div className="flex items-start gap-3 py-5 px-6 rounded-2xl bg-[#FEF3EE] border border-[#FDE8DD]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E65A27] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {treatment.typesOfLift.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ScarsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.scars) return null
  
  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full ">
        <div className="space-y-8 w-full">
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
            
            <div className="grid md:grid-cols-2 gap-5">
              {treatment.scars.points.map((point: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full ">
        <div className="space-y-8 w-full">
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
            <div className="grid md:grid-cols-2 gap-5 pt-2">
              {(treatment.howItWorks.steps as string[]).map((step: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
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

// Type guard to check if comparison is ComparisonData (has options/table) vs LiftComparisonData (has items)
function isComparisonData(comparison: ComparisonData | LiftComparisonData): comparison is ComparisonData {
  return 'description' in comparison || 'options' in comparison || 'table' in comparison
}

function ComparisonSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.comparison) return null

  // If it's LiftComparisonData (has items array), skip this section as it's handled elsewhere
  if (!isComparisonData(treatment.comparison)) return null

  const comparison = treatment.comparison

  // Check if it's an options array (implant removal) or table format
  const isOptionsArray = comparison.options && Array.isArray(comparison.options)
  const hasTable = comparison.table && Array.isArray(comparison.table)
  const hasBenefitsLimitations = hasTable && comparison.table && comparison.table.length > 0 && comparison.table[0].benefits

  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {comparison.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {comparison.description}
            </p>
          </div>

          {isOptionsArray && comparison.options ? (
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {comparison.options.map((option: ComparisonOption, idx: number) => (
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
          ) : hasTable && comparison.table ? (
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
                      {comparison.table.map((row: ComparisonTableRow, idx: number) => (
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
                      {comparison.table.map((row: ComparisonTableRow, idx: number) => (
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

          {comparison.note && (
            <Card className="bg-gradient-to-br from-[#FEF3EE] to-[#FDE8DD] border border-[#FDE8DD] rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-base text-[#666666] leading-relaxed">
                  {comparison.note}
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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
        <div className="flex containers w-full">
        <div className="space-y-8 w-full">
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
    <section className="py-[50px] bg-white">
        <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.appearanceAfterRemoval.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.appearanceAfterRemoval.description}
            </p>
          </div>
          
          {treatment.appearanceAfterRemoval.factors && (
            <div className="grid md:grid-cols-2 gap-5 pt-2">
              {treatment.appearanceAfterRemoval.factors.map((factor: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{factor}</span>
                </div>
              ))}
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
            <div className="space-y-4 pt-4">
              <p className="text-sm font-semibold text-[#999999] uppercase tracking-wider">
                To improve contour, implant removal may be combined with:
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {treatment.appearanceAfterRemoval.combinationOptions.map((option: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#444444] leading-relaxed">{option}</span>
                  </div>
                ))}
              </div>
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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full ">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.commonReasons.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.commonReasons.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.commonReasons.reasons.map((reason: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RevisionOptionsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.revisionOptions) return null
  
  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.revisionOptions.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.revisionOptions.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.revisionOptions.options.map((option: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{option}</span>
              </div>
            ))}
          </div>

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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.whyMoreComplex.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.whyMoreComplex.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.whyMoreComplex.reasons.map((reason: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>

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
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.whyItOccurs.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.whyItOccurs.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.whyItOccurs.reasons.map((reason: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>

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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
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
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
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
            <div className="grid md:grid-cols-2 gap-5 pt-2">
              {treatment.treatmentOptions.options.map((option: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{option}</span>
                </div>
              ))}
            </div>
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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.preventingRecurrence.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.preventingRecurrence.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.preventingRecurrence.measures.map((measure: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{measure}</span>
              </div>
            ))}
          </div>

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
    <section className="py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.results.title}
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {treatment.results.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.results.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

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
  if (!treatment.journey) return null

  return (
    <section className="py-[50px] bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
      <div className="flex containers w-full">
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
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.recovery.title}
            </h2>

            {treatment.recovery.description && (
              <p className="text-lg text-[#666666] leading-relaxed max-w-3xl">
                {treatment.recovery.description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-5 pt-2">
            {treatment.recovery.timeline.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {treatment.recovery.note && (
            <div className="flex items-start gap-3 py-5 px-6 rounded-2xl bg-[#FEF3EE] border border-[#FDE8DD]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E65A27] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {treatment.recovery.note}
              </p>
            </div>
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
    <section className="py-[50px] px-4 md:px-8 bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-8 md:px-10 py-8 border-b border-[#F0F0F0]">
              <div className="flex items-start gap-5 px-[15px]">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FEF3EE] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#E65A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
                    {treatment.safety.title}
                  </h2>
                  <p className="text-[#666666] leading-relaxed mt-2 max-w-2xl">
                    {treatment.safety.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            {items.length > 0 && (
              <div className="px-8 md:px-10 py-8">
                <p className="text-sm font-semibold text-[#999999] uppercase tracking-wider mb-5">
                  {label}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((item: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAF9]"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E65A27] text-white text-xs font-medium flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-[#444444] leading-relaxed text-[15px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Note */}
            {treatment.safety.note && (
              <div className="px-8 md:px-10 py-6 bg-[#FEF3EE] border-t border-[#FDE8DD]">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E65A27] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[#666666] leading-relaxed text-[15px]">
                    {treatment.safety.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function CostSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-[50px] bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="w-full">
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Top Section - Header with gradient */}
            <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] px-8 md:px-12 py-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-[15px]">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 bg-[#E65A27] text-white text-sm font-medium rounded-full">
                    Pricing Guide
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {treatment.cost.title}
                  </h2>
                  <p className="text-white text-lg max-w-2xl">
                    {treatment.cost.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E65A27] to-[#F97316] flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section - Cost Factors */}
            <div className="px-8 md:px-12 py-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#FEF3EE] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#E65A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                Costs vary depending on:
              </h3>

              <div className="space-y-2">
                {treatment.cost.factors.map((factor: string, idx: number) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 py-3 px-4 rounded-xl bg-[#FAFAF9] hover:bg-gradient-to-r hover:from-[#FEF3EE] hover:to-white transition-all duration-300 cursor-pointer"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-[#E65A27] group-hover:bg-[#E65A27] group-hover:text-white transition-all duration-300">
                      {idx + 1}
                    </span>
                    <span className="text-[#444444] group-hover:text-[#1A1A1A] transition-colors duration-300">
                      {factor}
                    </span>
                    <CheckCircle className="w-5 h-5 text-[#E65A27] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section - Note */}
            <div className="bg-gradient-to-r from-[#FEF3EE] via-[#FDE8DD] to-[#FEF3EE] px-8 md:px-12 py-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#E65A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  {treatment.cost.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function WhyBreastsSagSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.whyBreastsSag) return null

  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              {treatment.whyBreastsSag.title}
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed max-w-3xl">
              {treatment.whyBreastsSag.description}
            </p>
          </div>

          {/* Causes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {treatment.whyBreastsSag.causes.map((cause, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE] text-center">
                <div className="w-10 h-10 rounded-full bg-[#E65A27] text-white font-bold flex items-center justify-center mx-auto mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-[#1A1A1A] mb-1">{cause.title}</h4>
                <p className="text-sm text-[#666666]">{cause.description}</p>
              </div>
            ))}
          </div>

          {/* Common Concerns */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#999999] uppercase tracking-wider">
              Common concerns include
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.whyBreastsSag.concerns.map((concern, idx) => (
                <div key={idx} className="flex items-start gap-4 py-4 px-5 rounded-xl bg-[#FAFAF9] border border-[#EEEEEE]">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[15px] text-[#444444] leading-relaxed">{concern}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImprovementsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.improvements) return null

  return (
    <section className="py-[50px] bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            {treatment.improvements.title}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E65A27]">
                  <th className="py-4 px-6 text-left font-semibold text-[#1A1A1A]">Area</th>
                  <th className="py-4 px-6 text-left font-semibold text-[#1A1A1A]">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {treatment.improvements.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#EEEEEE] hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-medium text-[#1A1A1A]">{item.area}</td>
                    <td className="py-4 px-6 text-[#666666]">{item.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function LiftComparisonSection({ treatment }: { treatment: TreatmentData }) {
  const comparison = treatment.comparison as LiftComparisonData | undefined
  if (!comparison || !('items' in comparison)) return null

  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            {comparison.title}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E65A27]">
                  <th className="py-4 px-6 text-left font-semibold text-[#1A1A1A]">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold text-[#E65A27]">Lift</th>
                  <th className="py-4 px-6 text-center font-semibold text-[#1A1A1A]">Augmentation</th>
                </tr>
              </thead>
              <tbody>
                {comparison.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#EEEEEE] hover:bg-[#FAFAF9] transition-colors">
                    <td className="py-4 px-6 font-medium text-[#1A1A1A]">{item.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.lift === 'Yes' ? 'bg-[#E65A27] text-white' : 'bg-[#FAFAF9] text-[#666666]'
                      }`}>
                        {item.lift}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.augmentation === 'Yes' ? 'bg-[#E65A27] text-white' : 'bg-[#FAFAF9] text-[#666666]'
                      }`}>
                        {item.augmentation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.benefits) return null

  return (
    <section className="py-[50px] bg-[#FAFAF9]">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            {treatment.benefits.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatment.benefits.items.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-[#EEEEEE]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E65A27] flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[15px] text-[#444444] leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.testimonials || treatment.testimonials.length === 0) return null

  return (
    <section className="py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="bg-[#FEF3EE] text-[#E65A27] hover:bg-[#FEF3EE] font-medium px-4 py-1.5 border-none">
              Patient Experiences
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {treatment.testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#EEEEEE]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E65A27] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#666666]">Age {testimonial.age}</p>
                  </div>
                </div>
                <p className="text-[#444444] leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ReferencesSection({ treatment }: { treatment: TreatmentData }) {
  return (
    <section className="py-[50px] bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
      <div className="flex containers w-full">
        <div className="space-y-8 w-full">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20 font-normal px-4 py-1.5 border border-white/20">
              Evidence-Based Practice
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {treatment.references.title}
            </h2>
            {treatment.references.description && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {treatment.references.description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {treatment.references.links.map((link: ReferenceLink, idx: number) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E65A27] hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#E65A27] flex items-center justify-center">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-white font-semibold group-hover:text-[#E65A27] transition-colors">
                    {link.title}
                  </span>
                </div>
                {link.description && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {link.description}
                  </p>
                )}
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#E65A27] mt-auto transition-colors" />
              </a>
            ))}
          </div>
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
          <div className="flex containers w-full px-4 py-20 text-center">
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
        <WhyBreastsSagSection treatment={treatment} />
        <HowItWorksSection treatment={treatment} />
        <TypesOfLiftSection treatment={treatment} />
        <ImprovementsSection treatment={treatment} />
        <LiftComparisonSection treatment={treatment} />
        <WhyChooseUsSection treatment={treatment} />
        <CandidateSection treatment={treatment} />
        <BenefitsSection treatment={treatment} />
        <ImplantOptionsSection treatment={treatment} />
        <ImplantSizeSection treatment={treatment} />
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
        <ResultsSection treatment={treatment} />
        <ComparisonSection treatment={treatment} />
        <JourneySection treatment={treatment} />
        <RecoverySection treatment={treatment} />
        <SafetySection treatment={treatment} />
        <TestimonialsSection treatment={treatment} />
        <CostSection treatment={treatment} />
        <FAQ
          faqs={treatment.faqs || []}
          title="Frequently Asked Questions"
          bgColor="gray"
        />
        <ReferencesSection treatment={treatment} />
        <TreatmentFinalCTASection treatment={treatment} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  // Exclude slugs that have their own static pages
  const excludedSlugs = ['breast-reduction-malaysia', 'fat-transfer-breast-augmentation-malaysia', 'breast-implant-removal-malaysia', 'breast-revision-surgery-malaysia'];

  const paths = Object.keys(breastTreatmentsData as Record<string, TreatmentData>)
    .filter((slug) => !excludedSlugs.includes(slug))
    .map((slug) => ({
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

