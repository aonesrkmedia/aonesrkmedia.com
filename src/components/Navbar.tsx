import React, { useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  MapPin,
  Users,
  Layers,
} from 'lucide-react';
import { COMPANY_INFO, CITY_HUBS, PLATFORM_SOLUTIONS, CREATOR_TIERS, PageId } from '../data/companyData';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
  onOpenTalkModal: (preset?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenTalkModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [creatorsDropdownOpen, setCreatorsDropdownOpen] = useState(false);
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);

  const handleSelectPage = (pageId: PageId, preset?: string) => {
    onNavigate(pageId, preset);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCreatorsDropdownOpen(false);
    setCitiesDropdownOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (activePage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCreatorsDropdownOpen(false);
    setCitiesDropdownOpen(false);
  };

  return (
    <header className="no-print sticky top-0 z-40 w-full border-b border-[#ddd7e7]/80 bg-[#fbf9f5]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Lockup matching InfluencerAct */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleSelectPage('home');
          }}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d0a14] via-[#1a1429] to-[#6542e8] text-white shadow-md shadow-[#6542e8]/20 group-hover:scale-105 transition-transform">
            <span className="font-heading text-sm font-extrabold tracking-tighter text-[#ff625f]">SRK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base sm:text-lg font-extrabold tracking-tight text-[#17131f] group-hover:text-[#6542e8] transition-colors">
              {COMPANY_INFO.name}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e6877]">
              Influencer Marketing & Media Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-1 font-heading text-xs font-bold text-[#17131f]"
        >
          <button
            type="button"
            onClick={() => handleSelectPage('home')}
            className={`px-3 py-2 rounded-full transition-colors ${
              activePage === 'home'
                ? 'bg-[#6542e8]/10 text-[#6542e8]'
                : 'hover:text-[#6542e8]'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleSelectPage('about')}
            className={`px-3 py-2 rounded-full transition-colors ${
              activePage === 'about'
                ? 'bg-[#6542e8]/10 text-[#6542e8]'
                : 'hover:text-[#6542e8]'
            }`}
          >
            About
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:text-[#6542e8] transition-colors cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#6e6877]" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full w-80 rounded-2xl border border-[#ddd7e7] bg-white p-3 shadow-xl animate-page-enter">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#6e6877] px-3 py-1">
                  Core Influencer & Media Capabilities
                </div>
                <div className="space-y-1 mt-1">
                  {PLATFORM_SOLUTIONS.slice(0, 8).map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleSelectPage(item.path as PageId, item.name)}
                      className="w-full text-left flex flex-col px-3 py-2 rounded-xl hover:bg-[#fbf9f5] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-[#17131f] group-hover:text-[#6542e8]">
                        <span>{item.name}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[11px] text-[#6e6877]">{item.desc}</span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleSelectPage('services')}
                    className="w-full text-center mt-2 border-t border-[#ddd7e7] pt-2 text-[11px] font-bold text-[#ff625f] hover:text-[#e11d48]"
                  >
                    View All 12 Capabilities →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Creators Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCreatorsDropdownOpen(true)}
            onMouseLeave={() => setCreatorsDropdownOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:text-[#6542e8] transition-colors cursor-pointer"
            >
              <span>Creators</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#6e6877]" />
            </button>

            {creatorsDropdownOpen && (
              <div className="absolute left-0 top-full w-72 rounded-2xl border border-[#ddd7e7] bg-white p-3 shadow-xl animate-page-enter">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#6e6877] px-3 py-1">
                  Creator Tier Shortlisting
                </div>
                <div className="space-y-1 mt-1">
                  {CREATOR_TIERS.map((tier) => (
                    <button
                      key={tier.tier}
                      type="button"
                      onClick={() => handleSelectPage('influencer-marketing', `${tier.tier} Campaign`)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#fbf9f5] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-[#17131f] group-hover:text-[#6542e8]">
                        <span>{tier.tier}</span>
                        <span className="text-[10px] font-mono font-medium text-[#ff625f]">{tier.range}</span>
                      </div>
                      <span className="text-[11px] text-[#6e6877]">{tier.focus}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* City Hubs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCitiesDropdownOpen(true)}
            onMouseLeave={() => setCitiesDropdownOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:text-[#6542e8] transition-colors cursor-pointer"
            >
              <MapPin className="h-3 w-3 text-[#ff625f]" />
              <span>Hubs</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#6e6877]" />
            </button>

            {citiesDropdownOpen && (
              <div className="absolute left-0 top-full w-80 rounded-2xl border border-[#ddd7e7] bg-white p-3 shadow-xl animate-page-enter">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#6e6877] px-3 py-1">
                  Regional & City-Level Intelligence
                </div>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  {CITY_HUBS.map((city) => (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => handleScrollToSection('location-offerings')}
                      className="text-left px-2.5 py-1.5 rounded-lg hover:bg-[#fbf9f5] transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-bold text-[#17131f] hover:text-[#6542e8]">
                        {city.name} ↗
                      </span>
                      <span className="block text-[10px] text-[#6e6877] truncate">{city.focus}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleScrollToSection('location-method')}
            className="px-3 py-2 rounded-full hover:text-[#6542e8] transition-colors cursor-pointer"
          >
            Method
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection('faqs')}
            className="px-3 py-2 rounded-full hover:text-[#6542e8] transition-colors cursor-pointer"
          >
            FAQs
          </button>

          <button
            type="button"
            onClick={() => handleSelectPage('portfolio')}
            className={`px-3 py-2 rounded-full transition-colors ${
              activePage === 'portfolio'
                ? 'bg-[#6542e8]/10 text-[#6542e8]'
                : 'hover:text-[#6542e8]'
            }`}
          >
            Portfolio
          </button>

          <button
            type="button"
            onClick={() => handleSelectPage('contact')}
            className={`px-3 py-2 rounded-full transition-colors ${
              activePage === 'contact'
                ? 'bg-[#6542e8]/10 text-[#6542e8]'
                : 'hover:text-[#6542e8]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Zone matching InfluencerAct */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp (+91 8630875579)"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#ddd7e7] bg-white px-3.5 py-2 text-xs font-bold text-[#17131f] hover:border-[#25D366] hover:text-[#25D366] transition-colors shadow-sm"
          >
            <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
            <span className="hidden md:inline font-mono-tabular">+91 8630875579</span>
          </a>

          {/* Primary Pill Button: Let's Talk ↗ */}
          <button
            type="button"
            onClick={() => onOpenTalkModal()}
            className="inline-flex items-center gap-2 rounded-full bg-[#ff625f] px-5 py-2.5 font-heading text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[#ff625f]/30 hover:bg-[#e11d48] hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Let's talk</span>
            <span className="text-sm">↗</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden rounded-xl border border-[#ddd7e7] bg-white p-2 text-[#17131f] hover:bg-neutral-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#ddd7e7] bg-[#fbf9f5] px-6 py-6 space-y-4 animate-page-enter">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-[#17131f]">
            <button
              type="button"
              onClick={() => handleSelectPage('home')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleSelectPage('about')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              About Agency
            </button>
            <button
              type="button"
              onClick={() => handleSelectPage('services')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              12 Services
            </button>
            <button
              type="button"
              onClick={() => handleSelectPage('influencer-marketing')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              Influencer Marketing
            </button>
            <button
              type="button"
              onClick={() => handleScrollToSection('location-method')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              The 4-Step Method
            </button>
            <button
              type="button"
              onClick={() => handleScrollToSection('faqs')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              Agency FAQs
            </button>
            <button
              type="button"
              onClick={() => handleSelectPage('portfolio')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              Portfolio PDF
            </button>
            <button
              type="button"
              onClick={() => handleSelectPage('contact')}
              className="text-left p-2.5 rounded-lg bg-white border border-[#ddd7e7]"
            >
              Contact Desk
            </button>
          </div>

          <div className="pt-2 border-t border-[#ddd7e7] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalkModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#ff625f] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md"
            >
              <span>Start A Conversation (Let's Talk ↗)</span>
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500 bg-white py-3 text-xs font-bold text-emerald-600"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp: +91 8630875579</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
