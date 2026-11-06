import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  BUSINESS_PARTNERSHIP_TRACKS,
  COMPANY_INFO,
  EIGHT_STEP_PROCESS,
  PAYMENT_ETHICS_PILLARS,
  PROPOSED_DEPARTMENTS,
  PageId,
  SEVENTEEN_INDUSTRIES,
} from '../data/companyData';

interface PageProps {
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
}

/* ==========================================================================
   PAGE 9: CAMPAIGN MANAGEMENT (8-STEP PROCESS)
   ========================================================================== */
export const CampaignManagementPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = EIGHT_STEP_PROCESS[activeStepIndex];

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 09</span>
            <span aria-hidden="true">·</span>
            <span>Operational Methodology</span>
            <span aria-hidden="true">·</span>
            <span>8-Stage Workflow</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Campaign Management
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            A disciplined eight-step execution process engineered to keep brands, agencies, and creators aligned from initial brief intake through final reporting.
          </p>
        </div>
      </section>

      {/* Interactive 8-Step Spotlight + Full Grid */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Interactive Step Selector Bar */}
          <div className="border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <p className="text-xs font-semibold text-red-700">
              Interactive Workflow Inspector — Select Any Stage (01 to 08)
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
              {EIGHT_STEP_PROCESS.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`border p-3 text-left transition-colors cursor-pointer ${
                    activeStepIndex === idx
                      ? 'border-neutral-950 bg-neutral-950 text-white'
                      : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-900'
                  }`}
                >
                  <p
                    className={`font-mono-tabular text-xs font-bold ${
                      activeStepIndex === idx ? 'text-red-500' : 'text-red-700'
                    }`}
                  >
                    Step {step.stepNumber}
                  </p>
                  <p className="mt-1 truncate text-xs font-semibold">{step.title}</p>
                </button>
              ))}
            </div>

            {/* Active Step Detail Panel */}
            <div className="mt-6 border border-neutral-200 bg-white p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4 text-xs text-neutral-500">
                <span className="font-mono-tabular font-bold text-red-700">
                  STAGE {activeStep.stepNumber} OF 08 · {activeStep.phase}
                </span>
                <span>Output: {activeStep.deliverableOutput}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-neutral-950">
                {activeStep.stepNumber}. {activeStep.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
                {activeStep.summary}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeStep.keyActivities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <Check className="mt-0.5 h-3.5 w-3.5 text-red-700 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Complete 8-Step Sequential Matrix */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-neutral-950">
              Complete Eight-Step Campaign Execution Matrix
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Every campaign managed by {COMPANY_INFO.name} progresses through these eight documented checkpoints.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {EIGHT_STEP_PROCESS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex flex-col justify-between border border-neutral-200 bg-white p-6"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span className="font-mono-tabular text-sm font-bold text-red-700">
                        {step.stepNumber}.
                      </span>
                      <span>{step.phase}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-neutral-950">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-neutral-600">
                      {step.summary}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-neutral-100 pt-3 text-xs font-medium text-neutral-800">
                    Milestone: {step.deliverableOutput}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 10: INDUSTRIES WE SERVE (17 SECTORS)
   ========================================================================== */
export const IndustriesPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [sectorFilter, setSectorFilter] = useState<string>('All');
  const groups = ['All', 'Consumer & Lifestyle', 'Technology & Mobility', 'Services & Commerce'];

  const visibleIndustries =
    sectorFilter === 'All'
      ? SEVENTEEN_INDUSTRIES
      : SEVENTEEN_INDUSTRIES.filter((ind) => ind.sectorGroup === sectorFilter);

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 10</span>
            <span aria-hidden="true">·</span>
            <span>Market Verticals</span>
            <span aria-hidden="true">·</span>
            <span>17 Key Industries</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Tailored influencer marketing, brand promotions, and digital campaign strategies across seventeen major commercial and consumer verticals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-6">
            {groups.map((grp) => (
              <button
                key={grp}
                type="button"
                onClick={() => setSectorFilter(grp)}
                className={`px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  sectorFilter === grp
                    ? 'bg-neutral-950 text-white'
                    : 'border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900'
                }`}
              >
                {grp === 'All' ? 'All 17 Industries' : grp}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIndustries.map((industry) => (
              <div
                key={industry.id}
                className="flex flex-col justify-between border border-neutral-200 bg-white p-7 transition-colors hover:border-neutral-950"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono-tabular font-semibold text-red-700">
                      Sector {industry.index}
                    </span>
                    <span>{industry.sectorGroup}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold text-neutral-950">
                    {industry.index}. {industry.name}
                  </h2>
                  <p className="mt-2.5 text-xs leading-relaxed text-neutral-600">
                    {industry.focusAreas}
                  </p>
                  <div className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold text-neutral-900">
                      Recommended Campaign Formats:
                    </p>
                    <p className="mt-1.5 text-xs text-neutral-600">
                      {industry.recommendedFormats.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', `${industry.name} Industry Campaign`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-neutral-950 cursor-pointer"
                  >
                    <span>Plan {industry.name} Campaign</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 11: COMPANY STRUCTURE (PROPOSED DEPARTMENTS)
   ========================================================================== */
export const CompanyStructurePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 11</span>
            <span aria-hidden="true">·</span>
            <span>Organizational Architecture</span>
            <span aria-hidden="true">·</span>
            <span>10 Proposed Departments</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Company Structure
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Proposed functional departments designed to ensure clear accountability across strategy, creator relations, campaign execution, and financial administration.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Mandatory Corporate Accuracy Labeling */}
          <div className="mb-12 border border-neutral-950 bg-neutral-50 p-6 sm:p-8">
            <p className="text-xs font-semibold text-red-700">
              Organizational Governance Note — Proposed Departmental Structure
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-800">
              The ten functional units detailed below represent the <strong>Proposed Departmental Structure</strong> of <strong>{COMPANY_INFO.name}</strong>. In accordance with our commitment to corporate accuracy, no fictional employee names, fabricated executive biographies, or unverified appointments are listed. Operational functions are scaled in alignment with active client mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROPOSED_DEPARTMENTS.map((dept) => (
              <div
                key={dept.index}
                className="flex flex-col justify-between border border-neutral-200 bg-white p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs text-neutral-500">
                    <span className="font-mono-tabular font-bold text-red-700">
                      Department {dept.index} of 10
                    </span>
                    <span>{dept.division}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-neutral-950">
                    {dept.index}. {dept.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-neutral-800">{dept.mandate}</p>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-600">
                    {dept.coreResponsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-700">·</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-3 text-xs text-neutral-400">
                  Status: Proposed Functional Department · {COMPANY_INFO.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <button
              type="button"
              onClick={() => onNavigate('business-partnerships')}
              className="inline-flex items-center gap-2 bg-neutral-950 px-6 py-3 text-xs font-semibold text-white hover:bg-red-700 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore Business Partnerships</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 12: BUSINESS PARTNERSHIPS (6 STAKEHOLDER GROUPS)
   ========================================================================== */
export const BusinessPartnershipsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 12</span>
            <span aria-hidden="true">·</span>
            <span>Stakeholder Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>6 Collaboration Tracks</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Business Partnerships
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Dedicated collaboration pathways for brands, advertising agencies, influencers, YouTubers, digital creators, talent representatives, and business development associates.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {BUSINESS_PARTNERSHIP_TRACKS.map((track) => (
              <div
                key={track.index}
                className="flex flex-col justify-between border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-950"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono-tabular font-semibold text-red-700">
                      Partner Track {track.index}
                    </span>
                    <span>{track.subtitle}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950">
                    {track.index}. {track.stakeholder}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {track.overview}
                  </p>
                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold text-neutral-900">
                      Collaboration Framework:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-xs text-neutral-600">
                      {track.collaborationScope.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 text-red-700 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-200 pt-5">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', track.enquiryType)}
                    className="inline-flex items-center gap-2 bg-red-700 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{track.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 13: PAYMENT TRANSPARENCY & BUSINESS ETHICS
   ========================================================================== */
export const PaymentEthicsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 13</span>
            <span aria-hidden="true">·</span>
            <span>Commercial Governance</span>
            <span aria-hidden="true">·</span>
            <span>Corporate Ethics Charter</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Payment Transparency & Business Ethics
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Sustained trust in media and influencer marketing is built on written agreements, mutually agreed payment terms, and unambiguous commercial integrity.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_ETHICS_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="flex flex-col justify-between border border-neutral-200 bg-white p-8"
              >
                <div>
                  <p className="font-mono-tabular text-xs font-bold text-red-700">
                    Standard {pillar.index}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-bold text-neutral-950">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-3 text-xs text-neutral-400">
                  Governance Policy · {COMPANY_INFO.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border border-neutral-950 bg-neutral-950 p-8 text-white sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold text-red-500">
                  Commitment to Written Commercial Clarity
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">
                  Clear Scope, Mutually Agreed Terms, Zero Ambiguity
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Before any campaign deliverable is produced or published, {COMPANY_INFO.name} ensures that both the commissioning client and the participating creator have reviewed and confirmed the deliverable scope, schedule, and payment milestones in writing.
                </p>
              </div>
              <div className="flex lg:col-span-4 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'Commercial & Partnership Discussion')}
                  className="inline-flex items-center gap-2 bg-red-700 px-6 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Contact Our Commercial Desk</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
