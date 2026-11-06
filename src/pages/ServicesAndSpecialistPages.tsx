import React, { useState } from 'react';
import { ArrowRight, Check, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, PageId, TWELVE_SERVICES } from '../data/companyData';
import { MediaImage } from '../components/MediaImage';

interface PageProps {
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
}

/* ==========================================================================
   PAGE 3: OUR SERVICES (ALL 12 SERVICES)
   ========================================================================== */
export const OurServicesPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Creator & Talent', 'Brand & Strategy', 'Digital & Broadcast'];
  const filteredServices =
    selectedCategory === 'All'
      ? TWELVE_SERVICES
      : TWELVE_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 03</span>
            <span aria-hidden="true">·</span>
            <span>Capabilities Directory</span>
            <span aria-hidden="true">·</span>
            <span>12 Core Services</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Comprehensive media, entertainment, influencer marketing, and brand promotion solutions engineered for measurable commercial alignment.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white'
                    : 'border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 hover:text-neutral-950'
                }`}
              >
                {cat === 'All' ? 'All 12 Services' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 12 Services Grid */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-950"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs text-neutral-500">
                    <span className="font-mono-tabular font-bold text-red-700">
                      Service {service.index} of 12
                    </span>
                    <span>{service.category}</span>
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-bold text-neutral-950">
                    {service.index}. {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {service.detailedDescription}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold text-neutral-900">
                      Key Deliverables & Scope:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-xs text-neutral-600">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 text-red-700 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                    <strong className="font-semibold text-neutral-800">Ideal Application: </strong>
                    {service.idealFor}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-5">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.linkedPage)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:text-red-700 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>View Dedicated Section</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', service.enquiryPreset)}
                    className="bg-red-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Request Service Brief
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 4: INFLUENCER MARKETING
   ========================================================================== */
export const InfluencerMarketingPage: React.FC<PageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      num: '01',
      title: 'Creator Discovery',
      desc: 'Systematic identification of creators across Instagram, YouTube, and regional channels whose subject-matter expertise and creative format align with your product category.',
    },
    {
      num: '02',
      title: 'Audience Suitability',
      desc: 'Evaluating audience age brackets, geographic concentration, language preference, comment quality, and organic engagement consistency prior to shortlisting.',
    },
    {
      num: '03',
      title: 'Sponsored Promotions',
      desc: 'Structuring dedicated reels, integrated video segments, unboxing features, and seasonal brand promotions that feel natural to the creator’s audience.',
    },
    {
      num: '04',
      title: 'Campaign Coordination',
      desc: 'Managing the entire operational chain: briefing documents, product dispatch tracking, script/concept alignment, draft verification, and go-live scheduling.',
    },
    {
      num: '05',
      title: 'Content Collaborations',
      desc: 'Facilitating co-created posts, Instagram Collab features, multi-part educational series, and creator-led storytelling designed to build brand affinity.',
    },
    {
      num: '06',
      title: 'Structured Deliverables',
      desc: 'Every influencer engagement specifies exact deliverable counts, video duration, link placements, tag requirements, and post-campaign proof of execution.',
    },
  ];

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-mono-tabular font-semibold text-red-700">Page 04</span>
                <span aria-hidden="true">·</span>
                <span>Specialist Capability</span>
                <span aria-hidden="true">·</span>
                <span>Creator & Audience Strategy</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Influencer Marketing
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Connecting brands with vetted creators through disciplined audience suitability analysis, authentic content collaborations, and accountable campaign coordination.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'Influencer Marketing Campaign')}
                  className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Discuss an Influencer Campaign</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('campaign-management')}
                  className="border border-neutral-300 bg-white px-5 py-3 text-xs font-semibold text-neutral-900 hover:border-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View 8-Step Process
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <MediaImage
                src={COMPANY_INFO.images.creatorStudio}
                alt="Creative director reviewing influencer campaign storyboards in studio"
                caption="Creator Vetting, Briefing & Content Alignment"
                aspectRatioClass="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-red-700">Methodology</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-neutral-950">
              Six Pillars of Our Influencer Marketing Practice
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.num} className="border border-neutral-200 bg-white p-8">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">{p.num}.</p>
                <h3 className="mt-3 font-display text-xl font-bold text-neutral-950">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Formats Table */}
          <div className="mt-16 border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="font-display text-xl font-bold text-neutral-950">
              Supported Influencer Deliverable Formats
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold text-red-700">Instagram Ecosystem</p>
                <p className="mt-2 text-sm font-bold text-neutral-950">Short-Form Visuals & Stories</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  Dedicated Reels (30–90s), Brand Collab Reels, multi-slide educational carousels, Story sequences with direct UTM link stickers, and pinned broadcast channel announcements.
                </p>
              </div>
              <div className="border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold text-red-700">YouTube Ecosystem</p>
                <p className="mt-2 text-sm font-bold text-neutral-950">Long-Form & Shorts</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  Dedicated product reviews, 60–90s mid-roll or pre-roll integrated sponsorships, YouTube Shorts demonstrations, pinned comment CTAs, and description link tracking.
                </p>
              </div>
              <div className="border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold text-red-700">Multi-Creator Waves</p>
                <p className="mt-2 text-sm font-bold text-neutral-950">Regional & Tiered Rosters</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  Coordinated campaigns combining macro authority voices with micro and regional-language creators across Hindi, English, and regional Indian markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 5: BRAND PARTNERSHIPS
   ========================================================================== */
export const BrandPartnershipsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 05</span>
            <span aria-hidden="true">·</span>
            <span>B2B Corporate Solutions</span>
            <span aria-hidden="true">·</span>
            <span>Brand Awareness & Launches</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Brand Partnerships
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Strategic media collaborations for established companies, emerging D2C brands, and marketing leaders seeking sustained brand awareness, product launches, and high-trust promotional campaigns.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <div className="border border-neutral-200 p-8">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">01. Brand Awareness Campaigns</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-neutral-950">
                  Structured Market Visibility & Recall
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Whether entering a new category or reinforcing market leadership, we design multi-creator promotional waves that communicate your core brand proposition clearly across target demographics.
                </p>
              </div>

              <div className="border border-neutral-200 p-8">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">02. Product Launches & Seeding</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-neutral-950">
                  High-Impact Go-To-Market Execution
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Coordinate synchronized unboxing features, hands-on demonstrations, technical walkthroughs, and launch-day social buzz so prospective buyers encounter credible third-party validation during your launch window.
                </p>
              </div>

              <div className="border border-neutral-200 p-8">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">03. Long-Term Creator & Media Alliances</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-neutral-950">
                  Sustained Ambassador & Promotional Collaborations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Move beyond one-off posts by establishing multi-month creator partnerships and recurring content series that build deeper familiarity and conversion intent with audiences over time.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
              <MediaImage
                src={COMPANY_INFO.images.brandBoardroom}
                alt="Corporate brand partnership strategy meeting"
                caption="B2B Brand Strategy & Commercial Alignment"
                aspectRatioClass="aspect-[4/3]"
              />

              {/* Business Enquiry CTA Box */}
              <div className="border border-neutral-950 bg-neutral-950 p-8 text-white">
                <p className="text-xs font-semibold text-red-500">Corporate Business Desk</p>
                <h3 className="mt-2 font-display text-2xl font-bold">
                  Initiate a Brand Partnership Enquiry
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                  Connect directly with {COMPANY_INFO.name} to discuss your upcoming product launch, brand promotion calendar, or creator partnership requirements.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', 'Brand Partnership Enquiry')}
                    className="inline-flex w-full items-center justify-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-neutral-950 cursor-pointer"
                  >
                    <span>Open Business Enquiry Form</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 border border-neutral-700 px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-white"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-red-500" />
                    <span className="font-mono-tabular">WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.emailUrl}
                    className="inline-flex w-full items-center justify-center gap-2 border border-neutral-800 px-5 py-2.5 text-xs text-neutral-300 hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-red-500" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 6: YOUTUBE & DIGITAL MARKETING
   ========================================================================== */
export const YouTubeDigitalPage: React.FC<PageProps> = ({ onNavigate }) => {
  const youtubeFormats = [
    {
      idx: '01',
      title: 'Sponsored Dedicated Videos',
      body: 'Full-length YouTube videos dedicated entirely to your product, service, or platform—ideal for comprehensive walkthroughs, comparisons, and in-depth storytelling.',
    },
    {
      idx: '02',
      title: 'Mid-Roll & Pre-Roll Integrations',
      body: '60-to-90-second native sponsorship segments woven seamlessly into high-retention editorial videos, complete with verbal call-to-action, on-screen graphics, and pinned links.',
    },
    {
      idx: '03',
      title: 'Organic Product Placements',
      body: 'Contextual visual and functional placement of your product inside studio setups, lifestyle vlogs, culinary demonstrations, or tech workflows.',
    },
    {
      idx: '04',
      title: 'YouTube Shorts & Multi-Platform Cutdowns',
      body: 'High-velocity vertical video assets engineered for rapid discovery on YouTube Shorts and cross-platform digital distribution.',
    },
    {
      idx: '05',
      title: 'Full-Funnel Digital Promotions',
      body: 'Coordinating creator video releases with landing page optimization, UTM tracking parameters, promo codes, and social media marketing support.',
    },
    {
      idx: '06',
      title: 'Long-Term YouTube Creator Partnerships',
      body: 'Recurring sponsorship series across multiple episodes to establish strong brand recall within dedicated niche communities.',
    },
  ];

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 06</span>
            <span aria-hidden="true">·</span>
            <span>Video & Digital Funnels</span>
            <span aria-hidden="true">·</span>
            <span>High-Intent Content</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            YouTube & Digital Marketing
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Evergreen video integrations, dedicated product reviews, product placements, and coordinated digital promotions that educate consumers and drive sustained search-backed discovery.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {youtubeFormats.map((item) => (
              <div key={item.idx} className="border border-neutral-200 bg-white p-8">
                <p className="font-mono-tabular text-xs font-semibold text-red-700">
                  {item.idx}. Video & Digital Format
                </p>
                <h2 className="mt-3 font-display text-xl font-bold text-neutral-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-neutral-200 bg-neutral-50 p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-neutral-950">
                Plan a YouTube or Digital Marketing Campaign
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Share your product URL and campaign goals to receive a tailored YouTube & digital channel plan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact', 'YouTube & Digital Marketing')}
              className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request YouTube Campaign Brief</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 7: CELEBRITY & CREATOR COLLABORATIONS
   ========================================================================== */
export const CelebrityCreatorPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 07</span>
            <span aria-hidden="true">·</span>
            <span>Talent & Creator Procurement</span>
            <span aria-hidden="true">·</span>
            <span>Brief-Driven Coordination</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Celebrity & Creator Collaborations
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Professional facilitation of talent endorsements, public personality appearances, and digital creator collaborations structured around verified corporate briefs.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Corporate Transparency Notice */}
          <div className="mb-12 border border-neutral-950 bg-neutral-50 p-6 sm:p-8">
            <p className="text-xs font-semibold text-red-700">
              Corporate Representation & Transparency Disclosure
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-800">
              In accordance with strict corporate accuracy standards, <strong>{COMPANY_INFO.name}</strong> does not claim exclusive or pre-existing roster ownership over celebrities or public figures. All celebrity and marquee talent collaborations are facilitated on a project-by-project basis in response to formal client briefs, verified budgets, and direct coordination with authorized talent management agencies and legal representatives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">
                01. Celebrity Collaboration Facilitation
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950">
                Brief-Based Talent Sourcing & Coordination
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                When a corporate brand requires a recognizable public personality for a flagship product launch, digital commercial, or corporate event, we assist with requirement scoping and formal outreach through official representation channels.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-neutral-700">
                <li>· Assessment of brand brief, territory, usage duration, and commercial budget</li>
                <li>· Formal availability and fee enquiry via authorized talent management teams</li>
                <li>· Documentation of deliverable scope, exclusivity clauses, and usage rights</li>
                <li>· Coordination of shoot schedules or digital endorsement publication</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">
                02. Digital Creator & Macro-Influencer Collaborations
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950">
                High-Impact Creator Partnerships
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                We collaborate closely with leading digital creators, domain specialists, and content producers across India to execute high-production brand integrations, co-branded series, and seasonal promotional campaigns.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-neutral-700">
                <li>· Curated matching of macro and niche creators to brand positioning</li>
                <li>· Collaborative creative concepting that preserves creator authenticity</li>
                <li>· Written commercial agreements protecting both brand and creator</li>
                <li>· End-to-end delivery management and post-campaign reporting</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-600">
              Looking to discuss a talent brief or register as a creator/talent management partner?
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Celebrity / Talent Collaboration Brief')}
                className="bg-red-700 px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Submit Brand Talent Brief
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Creator / Talent Representation Onboarding')}
                className="border border-neutral-950 bg-white px-5 py-3 text-xs font-semibold text-neutral-950 hover:bg-neutral-950 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                Connect as Creator / Talent Manager
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 8: LIVE STREAMING SOLUTIONS
   ========================================================================== */
export const LiveStreamingPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-mono-tabular font-semibold text-red-700">Page 08</span>
                <span aria-hidden="true">·</span>
                <span>Real-Time Digital Broadcasts</span>
                <span aria-hidden="true">·</span>
                <span>Live Engagement</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Live Streaming Solutions
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Real-time brand integrations, interactive live promotional campaigns, and end-to-end streaming coordination across YouTube Live, Instagram Live, and digital broadcast channels.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'Live Streaming Campaign')}
                  className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Enquire About Live Streaming</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <MediaImage
                src={COMPANY_INFO.images.liveBroadcast}
                alt="Modern live streaming and broadcast control room"
                caption="Live Broadcast Coordination & Real-Time Brand Integration"
                aspectRatioClass="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">01. Live Brand Integrations</p>
              <h2 className="mt-3 font-display text-xl font-bold text-neutral-950">
                In-Stream Sponsorships & Callouts
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Integrate your brand into scheduled creator livestreams, gaming broadcasts, watch-alongs, and interactive Q&A sessions through verbal host callouts, on-screen graphic overlays, and live product demonstrations.
              </p>
            </div>

            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">02. Live Promotional Campaigns</p>
              <h2 className="mt-3 font-display text-xl font-bold text-neutral-950">
                Interactive Product Launches & Showcases
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Host dedicated live product unveilings, real-time Q&A sessions with domain experts, and interactive promotional events with pinned chat links and live audience participation.
              </p>
            </div>

            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">03. Streaming Coordination</p>
              <h2 className="mt-3 font-display text-xl font-bold text-neutral-950">
                Run-of-Show & Broadcast Governance
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Complete operational preparation including pre-stream technical checks, cue sheets, talking-point alignment, chat moderation guidelines, and post-stream VOD retention reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
