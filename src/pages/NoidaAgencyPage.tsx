import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Mail,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Users,
  Compass,
  Layers,
  MapPin,
} from 'lucide-react';
import {
  COMPANY_INFO,
  NOIDA_PAGE_CONTENT,
  CITY_HUBS,
  PLATFORM_SOLUTIONS,
  CREATOR_TIERS,
  PageId,
} from '../data/companyData';

interface NoidaAgencyPageProps {
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
  onOpenTalkModal: (preset?: string) => void;
}

export const NoidaAgencyPage: React.FC<NoidaAgencyPageProps> = ({
  onNavigate,
  onOpenTalkModal,
}) => {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  // Method interactive step state
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="location-page-shell bg-[#fbf9f5] text-[#17131f] overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO (services-hero youtube-agency-hero location-agency-hero)
          ========================================================================= */}
      <section
        className="relative min-h-[90vh] flex items-center pt-28 pb-20 px-6 lg:px-12 overflow-hidden border-b border-[#ddd7e7]"
        style={{
          background:
            'linear-gradient(115deg, rgba(251, 249, 245, 0.4) 34%, rgba(238, 233, 255, 0.75) 100%)',
        }}
        aria-labelledby="noida-hero-title"
      >
        {/* Ambient atmospheric background glows */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#6542e8]/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[#ff625f]/15 blur-[140px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Kicker badge */}
              <div>
                <span className="services-kicker">
                  <i aria-hidden="true" />
                  {NOIDA_PAGE_CONTENT.hero.kicker}
                </span>
              </div>

              {/* Big Punchy Headline */}
              <h1
                id="noida-hero-title"
                className="font-heading text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] text-[#17131f]"
              >
                {NOIDA_PAGE_CONTENT.hero.titlePrefix}{' '}
                <em className="font-editorial italic font-normal text-gradient-coral not-italic">
                  {NOIDA_PAGE_CONTENT.hero.titleEmphasis}
                </em>
              </h1>

              {/* Lead Paragraph */}
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#6e6877]">
                {NOIDA_PAGE_CONTENT.hero.lead}
              </p>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToElement('location-offerings')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff625f] px-7 py-4 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff625f]/30 hover:bg-[#e11d48] hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Explore the offer</span>
                  <ArrowDown className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToElement('location-method')}
                  className="inline-flex items-center gap-2 rounded-full border border-[#ddd7e7] bg-white px-6 py-4 font-heading text-xs font-bold text-[#17131f] hover:border-[#6542e8] hover:text-[#6542e8] hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>See the method</span>
                  <ArrowDown className="h-4 w-4 text-[#6542e8]" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenTalkModal()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6542e8] hover:text-[#4e2bc3] px-2 py-2 cursor-pointer"
                >
                  <span>Start conversation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              {/* Direct Quick Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#ddd7e7]/70 text-xs text-[#6e6877]">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#17131f] hover:text-emerald-600 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-500" />
                  <span className="font-mono-tabular">WhatsApp Desk: {COMPANY_INFO.whatsappDisplay}</span>
                </a>
                <span className="text-[#ddd7e7]">·</span>
                <a
                  href={COMPANY_INFO.emailUrl}
                  className="inline-flex items-center gap-1.5 font-bold text-[#17131f] hover:text-[#6542e8] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#6542e8]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Frame with Orbit and Circular Stamp (Right 5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Orbital Rings matching InfluencerAct */}
              <div
                className="absolute h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] rounded-full border border-[#6542e8]/20 animate-spin-slow pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute h-[480px] w-[480px] sm:h-[540px] sm:w-[540px] rounded-full border border-dashed border-[#ff625f]/25 animate-pulse-subtle pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border-2 border-white bg-white p-2 shadow-2xl shadow-[#2e1f50]/15">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-neutral-900">
                  <img
                    src={COMPANY_INFO.images.creatorStudio}
                    alt="Creator-led brand campaign by A ONE SRK MEDIA in Noida"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a14]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#ff625f]">
                      Creator & Brand Studio
                    </p>
                    <p className="text-sm font-semibold text-neutral-100">
                      Noida · Delhi NCR · Pan-India Strategy
                    </p>
                  </div>
                </div>

                {/* Floating Coral Circular Stamp Badge */}
                <div className="absolute -top-5 -right-5 z-20 services-hero-stamp">
                  <span>{NOIDA_PAGE_CONTENT.hero.stampText.line1}</span>
                  <span>×</span>
                  <span>{NOIDA_PAGE_CONTENT.hero.stampText.line2}</span>
                  <span>×</span>
                  <span>{NOIDA_PAGE_CONTENT.hero.stampText.line3}</span>
                </div>

                {/* Floating Pill Note Badge */}
                <span className="absolute -bottom-4 left-6 z-20 rounded-full bg-[#17131f] px-4 py-2 font-heading text-[11px] font-bold tracking-wide text-white shadow-lg border border-white/20">
                  ✦ {NOIDA_PAGE_CONTENT.hero.note}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE NOIDA ADVANTAGE (service-agency-intro)
          ========================================================================= */}
      <section
        className="py-24 px-6 lg:px-12 border-b border-[#ddd7e7] bg-white"
        aria-labelledby="noida-intro-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-4">
              <span className="services-kicker">
                <i />
                {NOIDA_PAGE_CONTENT.advantageIntro.kicker}
              </span>
              <h2
                id="noida-intro-title"
                className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight text-[#17131f]"
              >
                {NOIDA_PAGE_CONTENT.advantageIntro.heading}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-[#6e6877]">
              <p>{NOIDA_PAGE_CONTENT.advantageIntro.lead1}</p>
              <p>{NOIDA_PAGE_CONTENT.advantageIntro.lead2}</p>
              <p className="font-semibold text-[#17131f]">
                {NOIDA_PAGE_CONTENT.advantageIntro.lead3}
              </p>
            </div>
          </div>

          {/* 4 Highlighted Metric Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NOIDA_PAGE_CONTENT.advantageIntro.metrics.map((metric, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-[#ddd7e7] bg-[#fbf9f5] p-6 hover:border-[#6542e8] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-[#17131f] group-hover:text-gradient-coral">
                  {metric.value}
                </div>
                <div className="mt-3 text-xs sm:text-sm font-bold text-[#6e6877] group-hover:text-[#17131f] transition-colors">
                  {metric.label}
                </div>
                <div className="mt-4 h-1 w-10 rounded-full bg-[#6542e8]/30 group-hover:w-full group-hover:bg-[#ff625f] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE FULL PICTURE — OFFERINGS (youtube-agency-offerings)
          ========================================================================= */}
      <section
        id="location-offerings"
        className="py-24 px-6 lg:px-12 border-b border-[#ddd7e7] bg-[#fbf9f5]"
        aria-labelledby="noida-offerings-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="services-kicker">
              <i />
              The full picture
            </span>
            <h2
              id="noida-offerings-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17131f]"
            >
              A Smarter Connection To High-Intent Audiences
            </h2>
            <p className="text-base sm:text-lg text-[#6e6877]">
              From creator selection to live execution, our influencer marketing services in Noida and Delhi NCR connect every campaign decision to the commercial outcome.
            </p>
          </div>

          {/* 5 Numbered Offering Cards */}
          <div className="mt-14 space-y-6">
            {NOIDA_PAGE_CONTENT.offerings.map((item) => (
              <article
                key={item.index}
                className="group relative rounded-3xl border border-[#ddd7e7] bg-white p-8 sm:p-10 shadow-sm hover:border-[#6542e8] hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                  {/* Left Column: Number & Category */}
                  <div className="lg:col-span-3">
                    <span className="font-mono-tabular text-xs font-extrabold tracking-wider text-[#ff625f]">
                      {item.index} · {item.category.toUpperCase()}
                    </span>
                    <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold text-[#17131f] group-hover:text-[#6542e8] transition-colors">
                      {item.headline}
                    </h3>
                  </div>

                  {/* Middle Column: Detailed Description */}
                  <div className="lg:col-span-6">
                    <p className="text-sm sm:text-base leading-relaxed text-[#6e6877]">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-full bg-[#fbf9f5] border border-[#ddd7e7] px-3 py-1 text-xs font-semibold text-[#6e6877]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Interactive Trigger */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <button
                      type="button"
                      onClick={() => onOpenTalkModal(item.headline)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#ddd7e7] bg-[#fbf9f5] px-5 py-2.5 text-xs font-bold text-[#17131f] group-hover:bg-[#ff625f] group-hover:border-[#ff625f] group-hover:text-white transition-all cursor-pointer"
                    >
                      <span>Brief this service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE INSIGHT-TO-IMPACT METHOD (youtube-agency-method)
          ========================================================================= */}
      <section
        id="location-method"
        className="py-28 px-6 lg:px-12 text-white relative overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 84% 10%, rgba(255, 98, 95, 0.28), transparent 30%), radial-gradient(circle at 6% 100%, rgba(101, 66, 232, 0.24), transparent 32%), #0d0a14',
        }}
        aria-labelledby="noida-method-title"
      >
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff625f]">
              <span className="h-2 w-2 rounded-full bg-[#ff625f] shadow-[0_0_8px_#ff625f]" />
              The insight-to-impact method
            </span>
            <h2
              id="noida-method-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            >
              From Strategic Insight To{' '}
              <span className="text-gradient-coral italic">Meaningful Action.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300">
              A strong Noida & national campaign starts with a precise brief and moves with purpose. We connect the audience and creator through one focused system.
            </p>
          </div>

          {/* 4 Interactive Process Steps */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NOIDA_PAGE_CONTENT.method.map((step, idx) => {
              const isActive = activeMethodStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveMethodStep(idx)}
                  className={`group relative rounded-3xl border p-8 transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#ff625f] bg-white/10 shadow-2xl shadow-[#ff625f]/20 -translate-y-1'
                      : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="font-mono-tabular text-sm text-[#ff625f]">
                      {step.step} {step.symbol}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-2xl font-bold text-white group-hover:text-[#ff625f] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    {step.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4 text-xs font-semibold text-neutral-400">
                    <span className="text-[#6542e8] font-bold">Output: </span>
                    {step.output}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Highlight Banner */}
          <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6542e8] text-sm font-bold">
                {NOIDA_PAGE_CONTENT.method[activeMethodStep].step}
              </span>
              <div>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Active Execution Phase
                </p>
                <p className="text-sm font-bold text-white">
                  {NOIDA_PAGE_CONTENT.method[activeMethodStep].title} —{' '}
                  {NOIDA_PAGE_CONTENT.method[activeMethodStep].output}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenTalkModal(`Step ${NOIDA_PAGE_CONTENT.method[activeMethodStep].step} Discussion`)}
              className="rounded-full bg-[#ff625f] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#e11d48] transition-all cursor-pointer whitespace-nowrap"
            >
              Apply This Phase To Your Brief ↗
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE PERFORMANCE LOOP — ADVANTAGES (youtube-agency-advantages)
          ========================================================================= */}
      <section
        className="py-24 px-6 lg:px-12 border-b border-[#ddd7e7] bg-[#fbf9f5]"
        aria-labelledby="noida-advantages-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="services-kicker">
              <i />
              The performance loop
            </span>
            <h2
              id="noida-advantages-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17131f]"
            >
              Enter The Market With Relevance.{' '}
              <span className="text-gradient-coral italic">Leave A Stronger Signal.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6e6877]">
              We connect local understanding, creator influence and performance thinking to make every interaction more relevant, considered and commercially meaningful.
            </p>
          </div>

          {/* 6 Bento Grid Advantage Cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NOIDA_PAGE_CONTENT.advantages.map((adv) => (
              <div
                key={adv.index}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#ddd7e7] bg-white p-8 shadow-sm hover:border-[#6542e8] hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-tabular font-bold text-[#ff625f]">
                      {adv.index}
                    </span>
                    <span className="rounded-full bg-[#eee9ff] px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-wider text-[#6542e8]">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-[#17131f] group-hover:text-[#6542e8] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#6e6877]">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ddd7e7]/60 flex items-center justify-between text-xs text-[#6e6877]">
                  <span>Operational Advantage</span>
                  <span className="font-bold text-[#6542e8] group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE GROWTH SIGNAL (youtube-agency-growth)
          ========================================================================= */}
      <section
        className="py-24 px-6 lg:px-12 border-b border-[#ddd7e7]"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 58%, rgba(255, 98, 95, 0.08) 100%)',
        }}
        aria-labelledby="noida-growth-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#ddd7e7] pb-10">
            <div className="max-w-2xl space-y-4">
              <span className="services-kicker">
                <i />
                The growth signal
              </span>
              <h2
                id="noida-growth-title"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17131f]"
              >
                Attention Opens The Door.{' '}
                <span className="text-gradient-coral italic">Response Shows The Way.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#6e6877]">
                We track reach, engagement, traffic and conversion to understand what captured attention, what created momentum and what deserves the next investment.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onOpenTalkModal('Build Campaign Brief')}
                className="inline-flex items-center gap-2 rounded-full bg-[#17131f] px-7 py-3.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#6542e8] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Build your campaign brief</span>
                <span className="text-sm">↗</span>
              </button>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NOIDA_PAGE_CONTENT.growthPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl border border-[#ddd7e7] bg-white p-7 shadow-sm hover:border-[#6542e8] transition-colors"
              >
                <span className="font-mono-tabular text-xs font-bold text-[#ff625f]">
                  {pillar.number} · PILLAR
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-[#17131f]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#6e6877]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: READY WHEN YOU ARE CLOSING BANNER (youtube-agency-closing)
          ========================================================================= */}
      <section
        className="py-24 px-6 lg:px-12 text-white relative overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(255, 98, 95, 0.24), transparent 45%), radial-gradient(circle at 10% 80%, rgba(101, 66, 232, 0.22), transparent 40%), #0d0a14',
        }}
        aria-labelledby="noida-closing-title"
      >
        <div className="mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff625f]">
            <span className="h-2 w-2 rounded-full bg-[#ff625f] shadow-[0_0_8px_#ff625f]" />
            {NOIDA_PAGE_CONTENT.closing.kicker}
          </span>

          <h2
            id="noida-closing-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            {NOIDA_PAGE_CONTENT.closing.heading}
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300">
            {NOIDA_PAGE_CONTENT.closing.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenTalkModal('Closing Call to Action')}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff625f] px-8 py-4 font-heading text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#ff625f]/30 hover:bg-[#e11d48] hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <span>{NOIDA_PAGE_CONTENT.closing.ctaText}</span>
              <span className="text-sm">↗</span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 font-heading text-xs font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Chat On WhatsApp</span>
            </a>

            <a
              href={COMPANY_INFO.emailUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 font-heading text-xs font-bold text-neutral-300 hover:text-white transition-all"
            >
              <Mail className="h-4 w-4 text-[#6542e8]" />
              <span>Email Commercial Team</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS (faq-section)
          ========================================================================= */}
      <section
        id="faqs"
        className="py-24 px-6 lg:px-12 border-b border-[#ddd7e7] bg-[#fbf9f5]"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4">
            <span className="services-kicker">
              <i />
              Frequently Asked Questions
            </span>
            <h2
              id="faq-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17131f]"
            >
              What Brands Should Know Before Going Live
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-[#6e6877]">
              Get clear answers on creator selection, campaign performance, platform strategy and ROI for Noida and national influencer campaigns.
            </p>
          </div>

          {/* Interactive Accordion matching InfluencerAct */}
          <div className="mt-14 space-y-4">
            {NOIDA_PAGE_CONTENT.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.number}
                  className="rounded-2xl border border-[#ddd7e7] bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left hover:bg-[#fbf9f5]/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-tabular text-sm font-bold text-[#ff625f]">
                        {faq.number}
                      </span>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#17131f]">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee9ff] text-[#6542e8] font-bold text-lg shrink-0 ml-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-[#ddd7e7]/50 text-sm sm:text-base leading-relaxed text-[#6e6877] animate-page-enter">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CROSS-LOCATION & PLATFORMS DIRECTORY
          ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#ddd7e7]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* City Hubs */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#ff625f] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>Regional Influencer Marketing Hubs</span>
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-[#17131f]">
                India-Focused Creator & City Networks
              </h3>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {CITY_HUBS.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => onOpenTalkModal(`${city.name} Campaign`)}
                    className="flex flex-col p-3 rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] hover:border-[#6542e8] hover:bg-white transition-all text-left group cursor-pointer"
                  >
                    <span className="font-bold text-[#17131f] group-hover:text-[#6542e8]">
                      {city.name} ↗
                    </span>
                    <span className="text-[10px] text-[#6e6877] mt-0.5 truncate">{city.state}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Solutions */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#6542e8] flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" />
                <span>Platform-Specific Marketing Solutions</span>
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-[#17131f]">
                Multi-Channel Digital Amplification
              </h3>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {PLATFORM_SOLUTIONS.map((platform) => (
                  <button
                    key={platform.name}
                    type="button"
                    onClick={() => onNavigate(platform.path as PageId, platform.name)}
                    className="flex flex-col p-3 rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] hover:border-[#ff625f] hover:bg-white transition-all text-left group cursor-pointer"
                  >
                    <span className="font-bold text-[#17131f] group-hover:text-[#ff625f] line-clamp-1">
                      {platform.name}
                    </span>
                    <span className="text-[10px] text-[#6e6877] mt-0.5 truncate">{platform.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: BOTTOM HIGH CONVERSION STRIP
          ========================================================================= */}
      <section className="py-14 px-6 lg:px-12 bg-[#0d0a14] text-white">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff625f]">
              Have a campaign in mind?
            </p>
            <h3 className="mt-1 font-heading text-xl sm:text-2xl font-bold">
              Make influence move the needle.
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onOpenTalkModal()}
            className="rounded-full bg-[#ff625f] px-8 py-3.5 font-heading text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[#ff625f]/30 hover:bg-[#e11d48] hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
          >
            Start a conversation ↗
          </button>
        </div>
      </section>
    </div>
  );
};
