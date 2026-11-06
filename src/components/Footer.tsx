import React from 'react';
import { Mail, MessageSquare, ArrowUpRight, MapPin, Download } from 'lucide-react';
import { COMPANY_INFO, CITY_HUBS, PLATFORM_SOLUTIONS, CREATOR_TIERS, PageId } from '../data/companyData';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
  onOpenTalkModal: (preset?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  activePage,
  onNavigate,
  onOpenTalkModal,
}) => {
  return (
    <footer className="no-print border-t border-[#ddd7e7] bg-[#fbf9f5] text-[#17131f] transition-all">
      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Column 1: Brand Info & Direct Desk (5 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d0a14] via-[#1a1429] to-[#6542e8] text-white shadow-md shadow-[#6542e8]/20">
                <span className="font-heading text-sm font-extrabold tracking-tighter text-[#ff625f]">SRK</span>
              </div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-[#17131f]">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="font-heading text-sm font-bold text-[#6542e8]">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-[#6e6877]">
              Explore our influencer marketing services, platform-specific solutions, creator partnerships, campaign strategies, case studies and India-focused resources. From discovering the right creators to executing impactful campaigns, we help brands build authentic connections, increase reach and drive measurable growth.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ff625f] shrink-0" />
                <a
                  href={COMPANY_INFO.emailUrl}
                  className="font-bold text-[#17131f] hover:text-[#6542e8] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-emerald-500 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tabular font-bold text-[#17131f] hover:text-emerald-600 transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[#6e6877]">
                <MapPin className="h-4 w-4 text-[#6542e8] shrink-0" />
                <span>Noida & Delhi NCR · Pan-India Operations</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenTalkModal()}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#ff625f] px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white hover:bg-[#e11d48] transition-all shadow-md cursor-pointer"
              >
                <span>Let's talk</span>
                <span className="text-sm">↗</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ddd7e7] bg-white px-4 py-2.5 text-xs font-bold text-[#17131f] hover:border-[#6542e8] hover:text-[#6542e8] transition-colors shadow-sm cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-[#ff625f]" />
                <span>Portfolio PDF</span>
              </button>
            </div>
          </div>

          {/* Column 2: Platform Solutions (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-heading text-xs font-extrabold uppercase tracking-wider text-[#17131f]">
              Platform Solutions
            </p>
            <ul className="space-y-2 text-xs text-[#6e6877]">
              {PLATFORM_SOLUTIONS.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.path as PageId, item.name)}
                    className="hover:text-[#6542e8] transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-[#ddd7e7] group-hover:text-[#ff625f]">↗</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: City Hubs (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-heading text-xs font-extrabold uppercase tracking-wider text-[#17131f]">
              Agency Hubs
            </p>
            <ul className="space-y-2 text-xs text-[#6e6877]">
              {CITY_HUBS.map((city) => (
                <li key={city.name}>
                  <button
                    type="button"
                    onClick={() => onOpenTalkModal(`${city.name} Campaign`)}
                    className="hover:text-[#6542e8] transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span>{city.name}</span>
                    <span className="text-[10px] text-[#ddd7e7] group-hover:text-[#ff625f]">↗</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Agency Pages & Governance (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-heading text-xs font-extrabold uppercase tracking-wider text-[#17131f]">
              Company & Standards
            </p>
            <ul className="space-y-2 text-xs text-[#6e6877]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  About A ONE SRK MEDIA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  All 12 Core Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('campaign-management')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  8-Stage Campaign Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  17 Industries Served
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('company-structure')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  10 Proposed Departments
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('business-partnerships')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  Business Partnership Tracks
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('payment-ethics')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  Payment Transparency & Ethics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#6542e8] transition-colors text-left cursor-pointer"
                >
                  Download Corporate Dossier
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-14 pt-8 border-t border-[#ddd7e7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6877]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. {COMPANY_INFO.country}.
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('legal-setup')}
              className="hover:text-[#17131f] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onNavigate('legal-setup')}
              className="hover:text-[#17131f] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onNavigate('legal-setup')}
              className="hover:text-[#17131f] transition-colors cursor-pointer"
            >
              Custom Domain & Setup
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
