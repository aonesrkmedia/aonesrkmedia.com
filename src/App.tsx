import React, { useEffect, useState } from 'react';
import { COMPANY_INFO, PAGES_DIRECTORY, PageId } from './data/companyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LetsTalkModal } from './components/LetsTalkModal';
import { NoidaAgencyPage } from './pages/NoidaAgencyPage';
import { AboutPage, HomePage } from './pages/HomeAndAboutPages';
import {
  BrandPartnershipsPage,
  CelebrityCreatorPage,
  InfluencerMarketingPage,
  LiveStreamingPage,
  OurServicesPage,
  YouTubeDigitalPage,
} from './pages/ServicesAndSpecialistPages';
import {
  BusinessPartnershipsPage,
  CampaignManagementPage,
  CompanyStructurePage,
  IndustriesPage,
  PaymentEthicsPage,
} from './pages/OperationsAndGovernancePages';
import {
  ContactPage,
  LegalAndSetupPage,
  PortfolioPage,
} from './pages/ContactPortfolioLegalPages';

const VALID_PAGES = new Set<string>(PAGES_DIRECTORY.map((p) => p.id));

function getInitialPageFromHash(): PageId {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace(/^#/, '').trim();
  if (hash && VALID_PAGES.has(hash)) {
    return hash as PageId;
  }
  return 'home';
}

export function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPageFromHash);
  const [enquiryPreset, setEnquiryPreset] = useState<string | undefined>(undefined);
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);
  const [talkModalService, setTalkModalService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '').trim();
      if (hash && VALID_PAGES.has(hash)) {
        setActivePage(hash as PageId);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const meta = PAGES_DIRECTORY.find((p) => p.id === activePage);
    if (meta) {
      document.title =
        activePage === 'home'
          ? `${COMPANY_INFO.name} — Best Influencer Marketing Agency in Noida & Pan-India`
          : `${meta.shortTitle} | ${COMPANY_INFO.name}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigate = (page: PageId, preset?: string) => {
    if (preset) {
      setEnquiryPreset(preset);
    }
    setActivePage(page);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${page}`);
    }
  };

  const handleOpenTalkModal = (servicePreset?: string) => {
    setTalkModalService(servicePreset || enquiryPreset || 'Influencer Marketing Campaign');
    setIsTalkModalOpen(true);
  };

  const handleCloseTalkModal = () => {
    setIsTalkModalOpen(false);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <NoidaAgencyPage
            onNavigate={handleNavigate}
            onOpenTalkModal={handleOpenTalkModal}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <OurServicesPage onNavigate={handleNavigate} />;
      case 'influencer-marketing':
        return <InfluencerMarketingPage onNavigate={handleNavigate} />;
      case 'brand-partnerships':
        return <BrandPartnershipsPage onNavigate={handleNavigate} />;
      case 'youtube-digital':
        return <YouTubeDigitalPage onNavigate={handleNavigate} />;
      case 'celebrity-creator':
        return <CelebrityCreatorPage onNavigate={handleNavigate} />;
      case 'live-streaming':
        return <LiveStreamingPage onNavigate={handleNavigate} />;
      case 'campaign-management':
        return <CampaignManagementPage onNavigate={handleNavigate} />;
      case 'industries':
        return <IndustriesPage onNavigate={handleNavigate} />;
      case 'company-structure':
        return <CompanyStructurePage onNavigate={handleNavigate} />;
      case 'business-partnerships':
        return <BusinessPartnershipsPage onNavigate={handleNavigate} />;
      case 'payment-ethics':
        return <PaymentEthicsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage initialEnquiryType={enquiryPreset} onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'legal-setup':
        return <LegalAndSetupPage />;
      default:
        return (
          <NoidaAgencyPage
            onNavigate={handleNavigate}
            onOpenTalkModal={handleOpenTalkModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#17131f] selection:bg-[#ff625f] selection:text-white">
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenTalkModal={handleOpenTalkModal}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenTalkModal={handleOpenTalkModal}
      />

      {/* Global Interactive "Let's Talk" Modal */}
      <LetsTalkModal
        isOpen={isTalkModalOpen}
        onClose={handleCloseTalkModal}
        defaultService={talkModalService}
      />
    </div>
  );
}

export default App;
