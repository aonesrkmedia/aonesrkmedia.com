import React from 'react';
import { ArrowRight, ArrowUpRight, Download, Mail, MessageSquare } from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_VALUES,
  EIGHT_STEP_PROCESS,
  PageId,
  TWELVE_SERVICES,
} from '../data/companyData';
import { MediaImage } from '../components/MediaImage';

interface PageProps {
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
}

export const HomePage: React.FC<PageProps> = ({ onNavigate }) => {
  const featuredServices = TWELVE_SERVICES.slice(0, 6);

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      {/* HERO SECTION */}
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
            {/* Left Column: Editorial Proposition */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
                  <span className="font-semibold text-red-700">{COMPANY_INFO.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{COMPANY_INFO.country}</span>
                  <span aria-hidden="true">·</span>
                  <span>Corporate Media & Brand Promotions</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {COMPANY_INFO.heroHeadline}
                </h1>

                <p className="mt-5 font-editorial text-2xl italic text-neutral-800">
                  {COMPANY_INFO.tagline}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
                  {COMPANY_INFO.name} is an India-based corporate media, entertainment, influencer marketing, and brand promotions agency. We connect established enterprises, emerging brands, and advertising agencies with suitable digital creators, YouTubers, and media properties through structured campaign management and transparent commercial governance.
                </p>
              </div>

              <div className="mt-10 pt-4">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-2 bg-red-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 border border-neutral-950 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-colors duration-150 hover:bg-neutral-950 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Contact Us</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('portfolio')}
                    className="inline-flex items-center gap-2 border border-neutral-200 bg-neutral-50 px-5 py-3.5 text-sm font-medium text-neutral-800 transition-colors duration-150 hover:border-neutral-900 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Download className="h-4 w-4 text-red-700" />
                    <span>Company Portfolio</span>
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-neutral-200 pt-6 text-xs text-neutral-600">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-neutral-900 hover:text-red-700"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-red-700" />
                    <span className="font-mono-tabular">WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                  </a>
                  <span aria-hidden="true" className="text-neutral-300">
                    /
                  </span>
                  <a
                    href={COMPANY_INFO.emailUrl}
                    className="inline-flex items-center gap-1.5 font-medium text-neutral-900 hover:text-red-700"
                  >
                    <Mail className="h-3.5 w-3.5 text-red-700" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Editorial Agency Visual */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <MediaImage
                src={COMPANY_INFO.images.heroAgency}
                alt="A ONE SRK MEDIA executive strategy and creative studio"
                caption="Executive Media Planning & Creator Coordination"
                aspectRatioClass="aspect-[16/10] lg:aspect-[4/3]"
                className="h-full"
              />
            </div>
          </div>

          {/* Full-width Scope Strip Below Hero Split */}
          <div className="mt-12 grid grid-cols-1 gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6">
              <p className="font-mono-tabular text-2xl font-bold text-neutral-950">12</p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">Core Media Services</p>
              <p className="mt-1 text-xs text-neutral-500">
                Influencer, YouTube, Instagram, Live Streaming & Brand Promotions
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="font-mono-tabular text-2xl font-bold text-neutral-950">08</p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">Stage Campaign Workflow</p>
              <p className="mt-1 text-xs text-neutral-500">
                From client requirements & budget scoping to final reporting
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="font-mono-tabular text-2xl font-bold text-neutral-950">17</p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">Industries Served</p>
              <p className="mt-1 text-xs text-neutral-500">
                Fashion, Beauty, Tech, Auto, FMCG, EdTech, E-commerce & more
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="font-mono-tabular text-2xl font-bold text-red-700">100%</p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">Documented Governance</p>
              <p className="mt-1 text-xs text-neutral-500">
                Written agreements and mutually agreed commercial payment terms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION SECTION */}
      <section className="border-b border-neutral-200 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold text-red-700">01. Corporate Introduction</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-950">
                Built for Disciplined Brand & Creator Alignment.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-neutral-700 lg:col-span-8">
              <p>
                Modern audiences respond to credible voices, thoughtful product demonstrations, and culturally relevant storytelling. Yet executing influencer and media campaigns at a corporate standard requires more than informal outreach—it demands structured vetting, clear commercial terms, and accountable delivery.
              </p>
              <p>
                <strong>{COMPANY_INFO.name}</strong> bridges the gap between ambitious companies and the creator economy. Operating across India with an international corporate standard, we coordinate influencer marketing, brand promotions, YouTube integrations, Instagram campaigns, live streaming activations, and talent collaborations tailored to your commercial objectives.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-neutral-950 cursor-pointer"
                >
                  <span>Read Full Corporate Profile & Vision</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS (ASYMMETRIC EDITORIAL GRID) */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold text-red-700">02. Core Capabilities</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-950">
                Specialized Media & Promotional Services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 border border-neutral-950 bg-white px-5 py-2.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-950 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, idx) => (
              <div
                key={service.id}
                className={`flex flex-col justify-between border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-900 ${
                  idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono-tabular font-semibold text-red-700">
                      {service.index}. {service.category}
                    </span>
                    <span>Capability</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {service.detailedDescription}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-5">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.linkedPage)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:text-red-700 cursor-pointer"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', service.enquiryPreset)}
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-950 cursor-pointer"
                  >
                    Enquire →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL CALL-TO-ACTION: BRAND COLLABORATION & CREATOR PARTNERSHIP */}
      <section className="border-b border-neutral-200 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* CTA 1: For Brands, Companies & Agencies */}
            <div className="flex flex-col justify-between border border-neutral-950 bg-neutral-950 p-8 text-white sm:p-10">
              <div>
                <p className="text-xs font-semibold text-red-500">
                  For Brands, Companies & Advertising Agencies
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Launch Structured Influencer & Brand Promotion Campaigns
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  Share your product brief, target demographic, and campaign timeline. We curate suitable creators, establish clear deliverables, and manage execution from commercial approval through performance reporting.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-neutral-300">
                  <li>01. Audience suitability & creator vetting across tiers</li>
                  <li>02. Written commercial agreements & transparent budgeting</li>
                  <li>03. End-to-end eight-step campaign governance</li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-neutral-800 pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'Brand Campaign Enquiry')}
                  className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Initiate Brand Enquiry</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('brand-partnerships')}
                  className="text-xs font-semibold text-neutral-300 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Explore Brand Partnerships →
                </button>
              </div>
            </div>

            {/* CTA 2: For Influencers, YouTubers, Creators & Talent */}
            <div className="flex flex-col justify-between border border-neutral-200 bg-white p-8 sm:p-10">
              <div>
                <p className="text-xs font-semibold text-red-700">
                  For Influencers, YouTubers, Creators & Talent Managers
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                  Partner with {COMPANY_INFO.name} for Brand Collaborations
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  We connect dedicated content creators, domain educators, YouTubers, Instagram creators, and talent agencies with corporate sponsorships matched to your channel category and audience profile.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-neutral-600">
                  <li>01. Category-aligned brand sponsorships & product integrations</li>
                  <li>02. Clear written deliverables before production begins</li>
                  <li>03. Mutually agreed payment terms & respectful communication</li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'Creator / Influencer Partnership')}
                  className="inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-red-700 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Register as Creator / Talent Partner</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('business-partnerships')}
                  className="text-xs font-semibold text-neutral-700 hover:text-red-700 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View Partner Tracks →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="border-b border-neutral-200 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-red-700">03. Corporate Values</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-950">
              Principles Guiding Every Engagement
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Our reputation rests on operational discipline, transparent commercial conduct, and genuine alignment between brands and creators.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((val) => (
              <div key={val.index} className="border border-neutral-200 bg-white p-6">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">
                  {val.index}. Core Principle
                </p>
                <h3 className="mt-3 font-display text-base font-bold text-neutral-950">
                  {val.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-neutral-600">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEARLY LABELLED PLACEHOLDERS FOR FUTURE VERIFIED PROJECTS & TESTIMONIALS */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold text-red-700">
                04. Verified Portfolio Archive (Reserved Placeholders)
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-neutral-950">
                Future Verified Campaign Case Studies & Client Endorsements
              </h2>
            </div>
            <p className="text-xs text-neutral-500">
              Corporate Accuracy Standard: Zero fabricated logos or unverified claims.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="flex flex-col justify-between border border-dashed border-neutral-300 bg-neutral-50 p-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono-tabular font-semibold text-neutral-900">
                      ARCHIVE SLOT 0{slot}
                    </span>
                    <span>RESERVED PLACEHOLDER</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-neutral-900">
                    Future Verified Campaign Case Study #{slot}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    This slot is intentionally reserved for documented post-campaign case studies, verified deliverable metrics, and written client endorsements upon formal client authorization.
                  </p>
                </div>
                <div className="mt-6 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
                  Status: Reserved for Authorized Client Publication
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      {/* Page Header */}
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 02</span>
            <span aria-hidden="true">·</span>
            <span>Corporate Profile</span>
            <span aria-hidden="true">·</span>
            <span>{COMPANY_INFO.country}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            About {COMPANY_INFO.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            {COMPANY_INFO.tagline} — An organization dedicated to strategic media, entertainment collaborations, influencer marketing, and structured brand promotions.
          </p>
        </div>
      </section>

      {/* Main Editorial Narrative & Visual */}
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 text-base leading-relaxed text-neutral-700 lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-neutral-950">
                Connecting Brands, Media Ecosystems, and Digital Creators
              </h2>
              <p>
                <strong>{COMPANY_INFO.name}</strong> operates at the intersection of corporate brand strategy and the digital creator economy. Based in India, our focus spans media, entertainment, influencer marketing, brand promotions, digital campaigns, and long-term partnerships between commercial enterprises and content creators.
              </p>
              <p>
                As consumer attention shifts across YouTube, Instagram, live streaming platforms, and specialized digital communities, brands require a reliable partner capable of navigating creator discovery, audience suitability analysis, commercial negotiation, and campaign execution with corporate discipline.
              </p>
              <p>
                Equally, independent influencers, YouTubers, digital creators, and talent agencies benefit from a structured partner that brings well-scoped corporate briefs, documented deliverables, and transparent financial communication.
              </p>

              <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2">
                <div className="border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-xs font-semibold text-red-700">Core Focus Areas</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                    <li>· Influencer Marketing & Creator Vetting</li>
                    <li>· Corporate Brand Promotions & Launches</li>
                    <li>· YouTube & Instagram Campaign Execution</li>
                    <li>· Live Streaming & Digital Integrations</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-xs font-semibold text-red-700">Operational Commitment</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                    <li>· Written Commercial Agreements</li>
                    <li>· 8-Stage Campaign Governance</li>
                    <li>· Mutually Agreed Payment Terms</li>
                    <li>· Accurate, Non-Inflated Reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaImage
                src={COMPANY_INFO.images.brandBoardroom}
                alt="Corporate brand strategy and partnership planning session"
                caption="Structured Brand Alignment & Campaign Governance"
                aspectRatioClass="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-neutral-200 bg-white p-8 sm:p-10">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">01. Corporate Vision</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950">
                Our Vision
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                To establish {COMPANY_INFO.name} as a trusted, international-standard media and influencer marketing partner recognized by brands, advertising agencies, and creators for strategic clarity, ethical transparency, and measurable promotional execution.
              </p>
            </div>

            <div className="border border-neutral-200 bg-white p-8 sm:p-10">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">02. Corporate Mission</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950">
                Our Mission
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                To connect brands with the power of authentic influence through rigorous creator selection, well-coordinated multi-platform digital campaigns, documented commercial commitments, and respectful long-term partnerships that drive sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES & GOVERNANCE SUMMARY */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold text-red-700">03. Corporate Values & Standards</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-950">
                What Defines Our Working Culture
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('payment-ethics')}
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-900 hover:border-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Read Payment & Ethics Charter</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CORE_VALUES.map((item) => (
              <div key={item.index} className="border border-neutral-200 p-8">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">
                  Value {item.index}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-neutral-950 bg-neutral-950 p-8 text-white sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold text-red-500">Next Step</p>
              <p className="mt-1 font-display text-xl font-bold">
                Explore our 12 specialized media and promotional capabilities.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="bg-red-700 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore All 12 Services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="border border-neutral-700 px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
