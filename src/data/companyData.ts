export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'influencer-marketing'
  | 'brand-partnerships'
  | 'youtube-digital'
  | 'celebrity-creator'
  | 'live-streaming'
  | 'campaign-management'
  | 'industries'
  | 'company-structure'
  | 'business-partnerships'
  | 'payment-ethics'
  | 'contact'
  | 'portfolio'
  | 'legal-setup';

export interface PageMeta {
  id: PageId;
  number: string;
  title: string;
  shortTitle: string;
  category: 'Core' | 'Capabilities' | 'Operations & Governance' | 'Connect & Dossier';
  description: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  category: 'Creator & Talent' | 'Brand & Strategy' | 'Digital & Broadcast';
  summary: string;
  detailedDescription: string;
  deliverables: string[];
  idealFor: string;
  linkedPage: PageId;
  enquiryPreset: string;
}

export interface CampaignStep {
  stepNumber: string;
  title: string;
  phase: string;
  summary: string;
  keyActivities: string[];
  deliverableOutput: string;
}

export interface IndustryItem {
  id: string;
  index: string;
  name: string;
  sectorGroup: 'Consumer & Lifestyle' | 'Technology & Mobility' | 'Services & Commerce';
  focusAreas: string;
  recommendedFormats: string[];
}

export interface ProposedDepartment {
  index: string;
  name: string;
  division: string;
  mandate: string;
  coreResponsibilities: string[];
}

export interface PartnerTrack {
  index: string;
  stakeholder: string;
  subtitle: string;
  overview: string;
  collaborationScope: string[];
  enquiryType: string;
  ctaLabel: string;
}

export const COMPANY_INFO = {
  name: 'A ONE SRK MEDIA',
  legalNote: 'Corporate Digital Identity & Portfolio',
  industry: 'Media, Entertainment, Influencer Marketing and Brand Promotions',
  tagline: 'Strategic Media. Powerful Connections. Measurable Growth.',
  heroHeadline: 'Connecting Brands with the Power of Influence.',
  email: 'aonesrkmedia@gmail.com',
  emailUrl: 'mailto:aonesrkmedia@gmail.com',
  whatsappDisplay: '+91 8630875579',
  whatsappNumberClean: '918630875579',
  whatsappUrl: 'https://wa.me/918630875579',
  country: 'India',
  domainStatus: 'Official custom domain integration ready (Coming Soon)',
  images: {
    heroAgency: '/src/assets/images/hero_media_agency_1793870783878.jpg',
    creatorStudio: '/src/assets/images/influencer_creator_studio_1793870786076.jpg',
    brandBoardroom: '/src/assets/images/brand_partnerships_executive_1793870785930.jpg',
    liveBroadcast: '/src/assets/images/live_broadcast_control_1793870787015.jpg',
  },
};

export const PAGES_DIRECTORY: PageMeta[] = [
  {
    id: 'home',
    number: '01',
    title: 'Home — Corporate Overview',
    shortTitle: 'Home',
    category: 'Core',
    description: 'Connecting Brands with the Power of Influence. Strategic media, creator partnerships, and brand promotions.',
  },
  {
    id: 'about',
    number: '02',
    title: 'About Us',
    shortTitle: 'About Us',
    category: 'Core',
    description: 'Our mandate across media, entertainment, influencer marketing, brand promotions, vision, mission, and core values.',
  },
  {
    id: 'services',
    number: '03',
    title: 'Our Services (12 Core Capabilities)',
    shortTitle: 'Our Services',
    category: 'Capabilities',
    description: 'Comprehensive breakdown of our twelve specialized media, influencer, digital marketing, and campaign services.',
  },
  {
    id: 'influencer-marketing',
    number: '04',
    title: 'Influencer Marketing',
    shortTitle: 'Influencer Marketing',
    category: 'Capabilities',
    description: 'Creator discovery, audience suitability evaluation, sponsored promotions, and structured deliverable coordination.',
  },
  {
    id: 'brand-partnerships',
    number: '05',
    title: 'Brand Partnerships',
    shortTitle: 'Brand Partnerships',
    category: 'Capabilities',
    description: 'B2B strategic partnerships for brand awareness, product launches, and multi-creator promotional alliances.',
  },
  {
    id: 'youtube-digital',
    number: '06',
    title: 'YouTube & Digital Marketing',
    shortTitle: 'YouTube & Digital',
    category: 'Capabilities',
    description: 'Sponsored video features, organic integrations, product placements, and full-funnel digital promotions.',
  },
  {
    id: 'celebrity-creator',
    number: '07',
    title: 'Celebrity & Creator Collaborations',
    shortTitle: 'Celebrity & Creators',
    category: 'Capabilities',
    description: 'Brief-driven talent procurement and creator collaboration opportunities coordinated with commercial clarity.',
  },
  {
    id: 'live-streaming',
    number: '08',
    title: 'Live Streaming Solutions',
    shortTitle: 'Live Streaming',
    category: 'Capabilities',
    description: 'Real-time brand integrations, interactive live promotional campaigns, and broadcast coordination.',
  },
  {
    id: 'campaign-management',
    number: '09',
    title: 'Campaign Management (8-Step Process)',
    shortTitle: 'Campaign Process',
    category: 'Operations & Governance',
    description: 'Our disciplined eight-stage workflow from client requirements and budget alignment to execution and reporting.',
  },
  {
    id: 'industries',
    number: '10',
    title: 'Industries We Serve (17 Sectors)',
    shortTitle: 'Industries Served',
    category: 'Operations & Governance',
    description: 'Tailored media and creator strategies across seventeen key consumer, lifestyle, technology, and commercial verticals.',
  },
  {
    id: 'company-structure',
    number: '11',
    title: 'Company Structure (Proposed Departments)',
    shortTitle: 'Company Structure',
    category: 'Operations & Governance',
    description: 'Ten proposed specialized operational departments designed for structured agency governance and client delivery.',
  },
  {
    id: 'business-partnerships',
    number: '12',
    title: 'Business Partnerships',
    shortTitle: 'Business Partners',
    category: 'Operations & Governance',
    description: 'Dedicated collaboration frameworks for brands, advertising agencies, YouTubers, creators, artists, and BD partners.',
  },
  {
    id: 'payment-ethics',
    number: '13',
    title: 'Payment Transparency & Business Ethics',
    shortTitle: 'Payment & Ethics',
    category: 'Operations & Governance',
    description: 'Our commitment to written agreements, mutually agreed commercial terms, transparent communication, and fair dealing.',
  },
  {
    id: 'contact',
    number: '14',
    title: 'Contact Us & Business Enquiry',
    shortTitle: 'Contact Us',
    category: 'Connect & Dossier',
    description: 'Direct WhatsApp, Email, and validated business enquiry intake for brands, agencies, and creators.',
  },
  {
    id: 'portfolio',
    number: '15',
    title: 'Downloadable Company Portfolio',
    shortTitle: 'Company Portfolio PDF',
    category: 'Connect & Dossier',
    description: 'Print-ready and exportable executive company profile with full capabilities, structure, and process overview.',
  },
  {
    id: 'legal-setup',
    number: '16',
    title: 'Privacy, Terms & Technical Guide',
    shortTitle: 'Legal & Deployment',
    category: 'Connect & Dossier',
    description: 'Corporate privacy policy placeholder, terms of engagement, and technical setup & custom domain instructions.',
  },
];

export const CORE_VALUES = [
  {
    index: '01',
    title: 'Strategic Relevance Over Vanity Metrics',
    description:
      'Every campaign begins with audience suitability and commercial fit rather than surface-level follower counts. We match brands with voices that carry genuine context.',
  },
  {
    index: '02',
    title: 'Documented Commercial Clarity',
    description:
      'All deliverables, timelines, usage rights, and payment schedules are defined in writing prior to campaign activation—protecting both brand sponsors and creators.',
  },
  {
    index: '03',
    title: 'Disciplined Execution & Coordination',
    description:
      'From initial creative briefing to script review, publishing schedules, and post-campaign reporting, our structured workflow eliminates operational friction.',
  },
  {
    index: '04',
    title: 'Ethical & Respectful Partnerships',
    description:
      'We operate with strict business integrity—never misrepresenting capabilities, never inflating projections, and treating every creator and corporate client with equal respect.',
  },
];

export const TWELVE_SERVICES: ServiceItem[] = [
  {
    id: 'influencer-marketing',
    index: '01',
    title: 'Influencer Marketing',
    category: 'Creator & Talent',
    summary:
      'End-to-end influencer campaign planning, creator discovery, audience suitability vetting, and deliverable coordination.',
    detailedDescription:
      'We connect brands with vetted digital influencers across categories and tiers. Our process evaluates content quality, audience demographics, brand safety, and historical engagement consistency before proposing creators for your brief.',
    deliverables: [
      'Creator discovery & audience suitability shortlisting',
      'Campaign brief drafting & creative direction alignment',
      'Commercial negotiation & deliverable contracting',
      'Content review, publishing coordination & link tracking',
    ],
    idealFor: 'Consumer brands, D2C launches, app installs, and regional or pan-India awareness campaigns.',
    linkedPage: 'influencer-marketing',
    enquiryPreset: 'Influencer Marketing Campaign',
  },
  {
    id: 'brand-promotions',
    index: '02',
    title: 'Brand Promotions',
    category: 'Brand & Strategy',
    summary:
      'Targeted promotional activations designed to elevate brand visibility, seasonal campaigns, and market positioning.',
    detailedDescription:
      'Structured promotional campaigns built around clear commercial moments—new market entries, festive campaigns, retail announcements, and brand repositioning initiatives executed across creator and digital media channels.',
    deliverables: [
      'Promotional messaging & positioning framework',
      'Multi-creator synchronized announcement waves',
      'Promotional asset distribution across digital touchpoints',
      'Post-promotion reach and response summary',
    ],
    idealFor: 'Established enterprises and emerging companies seeking concentrated market visibility.',
    linkedPage: 'brand-partnerships',
    enquiryPreset: 'Brand Promotion Enquiry',
  },
  {
    id: 'brand-partnerships',
    index: '03',
    title: 'Brand Partnerships',
    category: 'Brand & Strategy',
    summary:
      'Long-term strategic alliances between corporate brands, media properties, and creator ecosystems.',
    detailedDescription:
      'Beyond single-post sponsorships, we structure sustained brand ambassador programs, co-branded content series, and strategic partnerships that build compounding consumer trust over multiple quarters.',
    deliverables: [
      'Ambassador & long-term partner identification',
      'Multi-month deliverable calendar & exclusivity scoping',
      'Joint content IP & brand integration guidelines',
      'Quarterly partnership review & optimization',
    ],
    idealFor: 'Companies building sustained category authority and recurring creator association.',
    linkedPage: 'brand-partnerships',
    enquiryPreset: 'Strategic Brand Partnership',
  },
  {
    id: 'instagram-promotions',
    index: '04',
    title: 'Instagram Promotions',
    category: 'Creator & Talent',
    summary:
      'High-impact Instagram Reels, carousel storytelling, Stories with direct link stickers, and collaborative posts.',
    detailedDescription:
      'Visual-first promotional campaigns engineered for Instagram discovery and action. We coordinate short-form Reels demonstrations, multi-slide educational carousels, Collab posts, and interactive Story sequences.',
    deliverables: [
      'Instagram Reels concepting & hook structuring',
      'Brand Collab post & Story link-sticker scheduling',
      'Visual aesthetic alignment with brand guidelines',
      'Saves, shares, profile visits & reach tracking',
    ],
    idealFor: 'Fashion, beauty, lifestyle, food, fitness, and visual consumer goods.',
    linkedPage: 'influencer-marketing',
    enquiryPreset: 'Instagram Promotion Campaign',
  },
  {
    id: 'youtube-marketing',
    index: '05',
    title: 'YouTube Marketing',
    category: 'Digital & Broadcast',
    summary:
      'Dedicated YouTube reviews, 60–90 second mid-roll integrations, YouTube Shorts, and pinned description CTAs.',
    detailedDescription:
      'Long-form YouTube content delivers deep product comprehension and high-intent search longevity. We coordinate dedicated walkthrough videos, integrated sponsorship segments, and high-velocity YouTube Shorts.',
    deliverables: [
      'Channel vetting across tech, finance, lifestyle & entertainment',
      'Talking-point briefs & technical demonstration guidelines',
      'Pinned comment, description UTM links & chapter markers',
      'Long-tail view velocity and engagement reporting',
    ],
    idealFor: 'Technology, electronics, automobiles, education, fintech, and complex consumer products.',
    linkedPage: 'youtube-digital',
    enquiryPreset: 'YouTube Marketing Campaign',
  },
  {
    id: 'celebrity-collaborations',
    index: '06',
    title: 'Celebrity Collaborations',
    category: 'Creator & Talent',
    summary:
      'Brief-driven procurement and coordination for celebrity appearances, digital endorsements, and flagship campaigns.',
    detailedDescription:
      'For brands seeking marquee visibility, we facilitate formal enquiry, availability checks, commercial scoping, and campaign coordination with verified talent management agencies and public personalities based on client briefs.',
    deliverables: [
      'Talent suitability assessment based on brand brief & budget',
      'Formal outreach via authorized talent representation channels',
      'Usage rights, duration, and exclusivity documentation',
      'Shoot day & digital endorsement publishing coordination',
    ],
    idealFor: 'Flagship corporate launches, national brand campaigns, and high-profile corporate milestones.',
    linkedPage: 'celebrity-creator',
    enquiryPreset: 'Celebrity Collaboration Brief',
  },
  {
    id: 'creator-management',
    index: '07',
    title: 'Creator Management and Partnerships',
    category: 'Creator & Talent',
    summary:
      'Structured commercial representation, brand deal facilitation, and partnership support for digital creators.',
    detailedDescription:
      'We partner with independent YouTubers, domain specialists, and digital creators to connect their channels with relevant corporate sponsors, manage commercial communications, and structure clear deliverable workflows.',
    deliverables: [
      'Media kit structuring & category positioning for creators',
      'Inbound and outbound brand sponsorship coordination',
      'Contractual deliverable scheduling & timeline management',
      'Transparent payment follow-up & commercial documentation',
    ],
    idealFor: 'YouTubers, content creators, and niche subject-matter educators seeking structured brand deals.',
    linkedPage: 'celebrity-creator',
    enquiryPreset: 'Creator Partnership & Representation',
  },
  {
    id: 'digital-marketing',
    index: '08',
    title: 'Digital Marketing',
    category: 'Digital & Broadcast',
    summary:
      'Integrated digital campaign planning, content amplification, landing-page funnel alignment, and online visibility.',
    detailedDescription:
      'We align creator-led storytelling with broader digital marketing initiatives so sponsored content drives measurable traffic to product launches, lead capture pages, and e-commerce storefronts.',
    deliverables: [
      'Digital campaign architecture & channel mix planning',
      'Creator content whitelisting & paid amplification readiness',
      'Campaign landing page messaging & conversion path review',
      'Unified digital campaign performance tracking',
    ],
    idealFor: 'Growth-stage companies and established brands coordinating multi-channel launches.',
    linkedPage: 'youtube-digital',
    enquiryPreset: 'Digital Marketing Strategy',
  },
  {
    id: 'social-media-marketing',
    index: '09',
    title: 'Social Media Marketing',
    category: 'Digital & Broadcast',
    summary:
      'Platform-native content strategy, cross-channel campaign calendars, and audience engagement initiatives.',
    detailedDescription:
      'Cohesive social media campaign execution across Instagram, YouTube, X, and LinkedIn—ensuring your brand voice remains authoritative, consistent, and responsive during key promotional windows.',
    deliverables: [
      'Platform-specific editorial & promotional calendars',
      'Short-form video & static visual briefing frameworks',
      'Cross-platform creator & brand handle synchronization',
      'Audience sentiment & engagement metric tracking',
    ],
    idealFor: 'Brands establishing an active, high-trust digital footprint across social platforms.',
    linkedPage: 'youtube-digital',
    enquiryPreset: 'Social Media Marketing',
  },
  {
    id: 'product-promotions',
    index: '10',
    title: 'Product Promotions',
    category: 'Brand & Strategy',
    summary:
      'Focused product seeding, unboxing campaigns, hands-on demonstrations, and launch-week awareness drives.',
    detailedDescription:
      'Put physical or digital products directly into the hands of relevant creators for authentic demonstrations, feature walkthroughs, comparison reviews, and tactical launch promotions.',
    deliverables: [
      'Product dispatch & creator unboxing coordination',
      'Key product USP & feature demonstration checklists',
      'Promo-code & custom tracking link distribution',
      'Consolidated launch-week content library & report',
    ],
    idealFor: 'New SKU launches, consumer electronics, personal care, food & beverage, and D2C retail.',
    linkedPage: 'brand-partnerships',
    enquiryPreset: 'Product Launch Promotion',
  },
  {
    id: 'live-streaming-solutions',
    index: '11',
    title: 'Live Streaming Solutions',
    category: 'Digital & Broadcast',
    summary:
      'Sponsored live streams, interactive creator broadcasts, live product showcases, and event streaming coordination.',
    detailedDescription:
      'Real-time digital broadcasts create immediate audience participation. We coordinate creator live streams, gaming and entertainment integrations, live Q&A sessions, and virtual product unveiling broadcasts.',
    deliverables: [
      'Live broadcast run-of-show & talking-point scripting',
      'On-screen graphic overlays, pinned links & live callouts',
      'Creator & host coordination across YouTube Live / Instagram Live',
      'Peak concurrent viewership & VOD replay analytics',
    ],
    idealFor: 'Gaming, tech launches, interactive consumer brands, live commerce, and entertainment events.',
    linkedPage: 'live-streaming',
    enquiryPreset: 'Live Streaming Campaign',
  },
  {
    id: 'campaign-management',
    index: '12',
    title: 'Campaign Management',
    category: 'Brand & Strategy',
    summary:
      'Disciplined eight-step operational governance from initial client brief and budgeting to final reporting.',
    detailedDescription:
      'Single-point accountability for complex multi-creator or multi-channel campaigns. Our structured eight-stage process keeps stakeholders aligned on budget, creator selection, commercial sign-off, and post-campaign metrics.',
    deliverables: [
      'Dedicated campaign tracker & milestone schedule',
      'Pre-publication content quality & compliance verification',
      'Live publishing monitoring & link validation',
      'Executive post-campaign performance & deliverables report',
    ],
    idealFor: 'Advertising agencies, marketing directors, and enterprise teams requiring turnkey execution.',
    linkedPage: 'campaign-management',
    enquiryPreset: 'End-to-End Campaign Management',
  },
];

export const EIGHT_STEP_PROCESS: CampaignStep[] = [
  {
    stepNumber: '01',
    title: 'Client Requirements',
    phase: 'Discovery & Intake',
    summary:
      'Structured consultation to document your brand identity, product category, target customer profile, geographical focus, and timeline expectations.',
    keyActivities: [
      'Brand & product category briefing session',
      'Target audience demographic & regional mapping',
      'Platform preference & content format discussion',
      'Compliance, brand safety, and competitor exclusions',
    ],
    deliverableOutput: 'Documented Client Requirement Brief',
  },
  {
    stepNumber: '02',
    title: 'Campaign Objectives',
    phase: 'Strategic Alignment',
    summary:
      'Translating business goals into concrete campaign objectives—whether top-of-funnel brand awareness, product education, launch visibility, or traffic generation.',
    keyActivities: [
      'Primary & secondary KPI definition',
      'Key brand message and call-to-action structuring',
      'Channel weight allocation (Instagram, YouTube, Live, Digital)',
      'Deliverable mix recommendation',
    ],
    deliverableOutput: 'Campaign Objectives & Channel Blueprint',
  },
  {
    stepNumber: '03',
    title: 'Budget Discussion',
    phase: 'Commercial Planning',
    summary:
      'Transparent financial scoping that aligns your available budget with realistic creator tiers, deliverable volumes, and production requirements.',
    keyActivities: [
      'Creator tier mix modeling (nano, micro, mid-tier, macro)',
      'Clear allocation across deliverables and usage rights',
      'Payment milestone & invoicing schedule discussion',
      'Zero hidden fee commercial transparency',
    ],
    deliverableOutput: 'Aligned Commercial Estimate & Budget Allocation',
  },
  {
    stepNumber: '04',
    title: 'Creator Selection',
    phase: 'Talent Curation',
    summary:
      'Curating a vetted shortlist of influencers, YouTubers, or talent whose content quality, audience affinity, and tone match your brand.',
    keyActivities: [
      'Audience relevance & content quality evaluation',
      'Historical brand integration review',
      'Availability & preliminary commercial alignment check',
      'Presentation of curated creator options for client review',
    ],
    deliverableOutput: 'Curated Creator Shortlist & Channel Profiles',
  },
  {
    stepNumber: '05',
    title: 'Commercial Approval',
    phase: 'Governance & Contracting',
    summary:
      'Formal written sign-off on selected creators, exact deliverable counts, scripts/talking points, publishing dates, and mutually agreed payment terms.',
    keyActivities: [
      'Written confirmation of locked creator roster',
      'Deliverable specifications & usage rights documentation',
      'Mutually agreed payment schedule sign-off',
      'Creative brief dispatch to approved creators',
    ],
    deliverableOutput: 'Signed Commercial Agreement & Campaign Schedule',
  },
  {
    stepNumber: '06',
    title: 'Campaign Execution',
    phase: 'Production & Publishing',
    summary:
      'Active coordination of content creation, draft reviews, brand feedback rounds, and synchronized publishing across approved platforms.',
    keyActivities: [
      'Script, storyboard, or concept alignment prior to shoot',
      'Draft video/content review for factual & brand accuracy',
      'Scheduled go-live coordination & caption/tag verification',
      'Tracking link, promo code, and pinned comment verification',
    ],
    deliverableOutput: 'Published Live Campaign Deliverables',
  },
  {
    stepNumber: '07',
    title: 'Performance Tracking',
    phase: 'Live Monitoring',
    summary:
      'Systematic monitoring of published assets across platforms to track view velocity, audience engagement, comment sentiment, and link interactions.',
    keyActivities: [
      'Live deliverable URL archiving & uptime verification',
      'Reach, views, likes, shares, and comment tracking',
      'Audience question & sentiment observation',
      'Mid-campaign pacing checks for multi-wave launches',
    ],
    deliverableOutput: 'Verified Performance Metrics Log',
  },
  {
    stepNumber: '08',
    title: 'Reporting and Updates',
    phase: 'Closure & Review',
    summary:
      'Delivery of a structured post-campaign report consolidating all live links, platform metrics, qualitative audience takeaways, and strategic learnings.',
    keyActivities: [
      'Complete deliverable proof-of-execution repository',
      'Consolidated reach and engagement data summary',
      'Qualitative audience response & creative performance analysis',
      'Recommendations for future campaign phases',
    ],
    deliverableOutput: 'Final Post-Campaign Executive Report',
  },
];

export const SEVENTEEN_INDUSTRIES: IndustryItem[] = [
  {
    id: 'fashion',
    index: '01',
    name: 'Fashion',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Apparel launches, seasonal lookbooks, ethnic & contemporary wear styling, and D2C fashion labels.',
    recommendedFormats: ['Instagram Styling Reels', 'Lookbook Carousels', 'YouTube Haul & Fit Reviews'],
  },
  {
    id: 'lifestyle',
    index: '02',
    name: 'Lifestyle',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Everyday elevated living, home decor, urban experiences, accessories, and aspirational consumer goods.',
    recommendedFormats: ['Day-in-the-Life Integrations', 'Instagram Stories', 'Creator Collaborations'],
  },
  {
    id: 'beauty',
    index: '03',
    name: 'Beauty',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Cosmetics, makeup launches, shade demonstrations, tutorials, and beauty creator partnerships.',
    recommendedFormats: ['Get-Ready-With-Me (GRWM) Reels', 'Swatch & Wear Tests', 'YouTube Beauty Tutorials'],
  },
  {
    id: 'personal-care',
    index: '04',
    name: 'Personal Care',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Skincare routines, haircare, grooming products, wellness essentials, and ingredient-focused education.',
    recommendedFormats: ['Routine Integrations', 'Educational Explainer Videos', 'Product Seeding & Reviews'],
  },
  {
    id: 'technology',
    index: '05',
    name: 'Technology',
    sectorGroup: 'Technology & Mobility',
    focusAreas: 'Software platforms, mobile applications, SaaS tools, AI productivity apps, and digital services.',
    recommendedFormats: ['YouTube Dedicated Walkthroughs', 'Mid-Roll Tech Sponsorships', 'Workflow Demo Reels'],
  },
  {
    id: 'electronics',
    index: '06',
    name: 'Electronics',
    sectorGroup: 'Technology & Mobility',
    focusAreas: 'Smartphones, audio gear, wearables, laptops, smart home devices, and gaming peripherals.',
    recommendedFormats: ['Unboxing & First Impressions', 'In-Depth Technical Reviews', 'Live Launch Broadcasts'],
  },
  {
    id: 'food',
    index: '07',
    name: 'Food',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Packaged foods, culinary ingredients, restaurant chains, cloud kitchens, and gourmet snacks.',
    recommendedFormats: ['Recipe Integration Reels', 'Food Vlogger Features', 'Tasting & Review Shorts'],
  },
  {
    id: 'beverages',
    index: '08',
    name: 'Beverages',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Specialty coffee, teas, hydration drinks, functional beverages, and refreshment launches.',
    recommendedFormats: ['Lifestyle Moment Placements', 'Creator Sampling Campaigns', 'Event & Live Integrations'],
  },
  {
    id: 'fitness',
    index: '09',
    name: 'Fitness',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Gym equipment, athletic apparel, training apps, recovery tools, and nutritional fitness products.',
    recommendedFormats: ['Workout Routine Integrations', 'Athlete & Coach Partnerships', 'YouTube Training Vlogs'],
  },
  {
    id: 'sports',
    index: '10',
    name: 'Sports',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Sporting goods, tournament promotions, fan engagement campaigns, and sports media properties.',
    recommendedFormats: ['Live Watch-Along Streams', 'Sports Creator Commentary', 'Instagram & Shorts Highlights'],
  },
  {
    id: 'automobile',
    index: '11',
    name: 'Automobile',
    sectorGroup: 'Technology & Mobility',
    focusAreas: 'Two-wheelers, passenger vehicles, electric mobility (EVs), automotive accessories, and test-drive campaigns.',
    recommendedFormats: ['YouTube First-Drive Reviews', 'Feature Walkthroughs', 'Regional Auto Creator Campaigns'],
  },
  {
    id: 'travel',
    index: '12',
    name: 'Travel',
    sectorGroup: 'Services & Commerce',
    focusAreas: 'Booking platforms, luggage brands, travel gear, tourism boards, and curated itinerary experiences.',
    recommendedFormats: ['Cinematic Travel Vlogs', 'Destination Reels', 'Gear-in-Action Integrations'],
  },
  {
    id: 'hospitality',
    index: '13',
    name: 'Hospitality',
    sectorGroup: 'Services & Commerce',
    focusAreas: 'Hotels, resorts, boutique stays, fine dining venues, and experiential hospitality destinations.',
    recommendedFormats: ['Property Walkthrough Tours', 'Experiential Creator Stays', 'Visual Storytelling Carousels'],
  },
  {
    id: 'education',
    index: '14',
    name: 'Education',
    sectorGroup: 'Services & Commerce',
    focusAreas: 'EdTech platforms, professional upskilling courses, certification programs, and academic institutions.',
    recommendedFormats: ['YouTube Career & Learning Integrations', 'Educator Collaborations', 'Live Webinar Promotions'],
  },
  {
    id: 'entertainment',
    index: '15',
    name: 'Entertainment',
    sectorGroup: 'Services & Commerce',
    focusAreas: 'OTT releases, music launches, gaming titles, live events, and digital media properties.',
    recommendedFormats: ['Creator Reaction & Watch Parties', 'High-Velocity Reels Trends', 'Live Stream Integrations'],
  },
  {
    id: 'ecommerce',
    index: '16',
    name: 'E-commerce',
    sectorGroup: 'Services & Commerce',
    focusAreas: 'Online marketplaces, seasonal sale events, D2C storefronts, and social commerce campaigns.',
    recommendedFormats: ['Curated Top-Picks Videos', 'Story Link-Sticker Drives', 'Promo Code Conversion Waves'],
  },
  {
    id: 'consumer-products',
    index: '17',
    name: 'Consumer Products',
    sectorGroup: 'Consumer & Lifestyle',
    focusAreas: 'Everyday household essentials, FMCG innovations, kitchenware, and mass-market retail goods.',
    recommendedFormats: ['Regional Language Creator Outreach', 'Practical Home Demonstrations', 'Multi-Creator Awareness Waves'],
  },
];

export const PROPOSED_DEPARTMENTS: ProposedDepartment[] = [
  {
    index: '01',
    name: 'Management',
    division: 'Executive Governance (Proposed Department)',
    mandate: 'Strategic direction, corporate governance, ethical standards, and long-term agency oversight.',
    coreResponsibilities: [
      'Defining agency strategy, service standards, and commercial policies',
      'Approving major strategic partnerships and operational frameworks',
      'Ensuring strict compliance with business ethics and payment transparency',
    ],
  },
  {
    index: '02',
    name: 'Business Development',
    division: 'Commercial Growth (Proposed Department)',
    mandate: 'Identifying new business opportunities, onboarding corporate clients, and expanding agency partnerships.',
    coreResponsibilities: [
      'Inbound and outbound corporate enquiry consultations',
      'Understanding prospective client goals and preparing initial capability proposals',
      'Building relationships with advertising agencies and commercial partners',
    ],
  },
  {
    index: '03',
    name: 'Brand Partnerships',
    division: 'B2B Alliances (Proposed Department)',
    mandate: 'Structuring brand sponsorships, product launch collaborations, and multi-quarter brand alliances.',
    coreResponsibilities: [
      'Aligning brand positioning with appropriate media and creator opportunities',
      'Structuring commercial deliverables for product launches and awareness drives',
      'Coordinating co-branded promotional initiatives',
    ],
  },
  {
    index: '04',
    name: 'Influencer Marketing',
    division: 'Creator Campaigns (Proposed Department)',
    mandate: 'Creator discovery, audience suitability vetting, shortlisting, and influencer campaign execution.',
    coreResponsibilities: [
      'Evaluating creators across Instagram, YouTube, and regional digital platforms',
      'Matching creator demographics and content tone to specific client briefs',
      'Managing script briefings, draft checks, and publishing schedules',
    ],
  },
  {
    index: '05',
    name: 'Talent Relations',
    division: 'Creator & Celebrity Network (Proposed Department)',
    mandate: 'Building respectful, long-term relationships with digital creators, YouTubers, and talent representation agencies.',
    coreResponsibilities: [
      'Creator onboarding, media kit cataloging, and availability coordination',
      'Facilitating brief-based celebrity enquiries via authorized talent managers',
      'Ensuring clear communication and professional care for partner creators',
    ],
  },
  {
    index: '06',
    name: 'Digital Marketing',
    division: 'Multi-Channel Strategy (Proposed Department)',
    mandate: 'Planning digital promotions, social media amplification, and cross-platform content distribution.',
    coreResponsibilities: [
      'Integrating influencer assets with broader digital and social media campaigns',
      'UTM link structuring, landing page alignment, and promotional scheduling',
      'Optimizing platform-native formats across YouTube, Instagram, and social channels',
    ],
  },
  {
    index: '07',
    name: 'Campaign Management',
    division: 'Delivery & Operations (Proposed Department)',
    mandate: 'End-to-end execution of our eight-step campaign workflow from brief lock to final reporting.',
    coreResponsibilities: [
      'Maintaining master campaign timelines and deliverable checklists',
      'Quality assurance on draft assets prior to client review and publication',
      'Compiling verified post-campaign performance reports and live link archives',
    ],
  },
  {
    index: '08',
    name: 'Live Streaming Operations',
    division: 'Real-Time Broadcasts (Proposed Department)',
    mandate: 'Coordinating sponsored live streams, interactive brand integrations, and live promotional broadcasts.',
    coreResponsibilities: [
      'Run-of-show planning for creator and brand live streaming sessions',
      'Coordinating real-time product callouts, overlays, and pinned chat links',
      'Monitoring live broadcast execution and capturing post-stream metrics',
    ],
  },
  {
    index: '09',
    name: 'Client Relations',
    division: 'Account Stewardship (Proposed Department)',
    mandate: 'Providing responsive, transparent communication and dedicated support to brand and agency clients.',
    coreResponsibilities: [
      'Serving as the dedicated communication bridge throughout active campaigns',
      'Delivering timely status updates, milestone confirmations, and feedback resolution',
      'Conducting post-campaign reviews to support ongoing client satisfaction',
    ],
  },
  {
    index: '10',
    name: 'Finance and Administration',
    division: 'Commercial & Compliance (Proposed Department)',
    mandate: 'Managing written commercial agreements, invoicing, payment tracking, and transparent creator settlements.',
    coreResponsibilities: [
      'Preparing clear commercial documentation and mutually agreed payment schedules',
      'Processing client invoices and tracking milestone payment receipts',
      'Ensuring timely, transparent disbursements to creators as per agreed terms',
    ],
  },
];

export const BUSINESS_PARTNERSHIP_TRACKS: PartnerTrack[] = [
  {
    index: '01',
    stakeholder: 'Brands and Companies',
    subtitle: 'Direct Corporate & D2C Sponsors',
    overview:
      'We work with established enterprises, emerging D2C brands, and product companies seeking structured influencer campaigns, product promotions, and digital visibility in India and international markets.',
    collaborationScope: [
      'Single-product launches and multi-wave awareness campaigns',
      'Curated creator shortlists aligned with target demographics and budgets',
      'Documented deliverables, clear timelines, and post-campaign reporting',
    ],
    enquiryType: 'Brand / Company Campaign Enquiry',
    ctaLabel: 'Submit Brand Brief',
  },
  {
    index: '02',
    stakeholder: 'Advertising Agencies',
    subtitle: 'Creative, Media & PR Agency Partners',
    overview:
      'We collaborate as an execution and talent-sourcing partner for advertising, digital, and PR agencies looking for reliable influencer curation, regional creator reach, or specialized live-streaming execution.',
    collaborationScope: [
      'Rapid creator shortlisting and commercial scoping for agency pitches',
      'White-glove coordination across multi-creator deliverables',
      'Strict confidentiality, professional respect, and agency-aligned reporting',
    ],
    enquiryType: 'Advertising Agency Partnership',
    ctaLabel: 'Partner as an Agency',
  },
  {
    index: '03',
    stakeholder: 'Influencers and YouTubers',
    subtitle: 'Long-Form & Short-Form Video Creators',
    overview:
      'We connect dedicated YouTubers and social media influencers with relevant brand sponsorships that respect your editorial voice, audience trust, and commercial value.',
    collaborationScope: [
      'Sponsored integrations, dedicated reviews, and Instagram/Shorts campaigns',
      'Clear written briefs and mutually agreed payment terms prior to shoot',
      'Respectful revision boundaries and transparent financial communication',
    ],
    enquiryType: 'Influencer / YouTuber Onboarding',
    ctaLabel: 'Join Creator Network',
  },
  {
    index: '04',
    stakeholder: 'Digital Creators',
    subtitle: 'Domain Specialists, Educators & Content Producers',
    overview:
      'Whether you create specialized content in technology, finance, fitness, beauty, automobile, or regional lifestyle, we help monetize your expertise through well-matched brand collaborations.',
    collaborationScope: [
      'Category-matched brand introductions based on audience relevance',
      'Support with commercial structuring and deliverable scheduling',
      'Long-term partnership opportunities with recurring brand sponsors',
    ],
    enquiryType: 'Digital Creator Collaboration',
    ctaLabel: 'Register Creator Profile',
  },
  {
    index: '05',
    stakeholder: 'Celebrities and Artists',
    subtitle: 'Public Figures, Performers & Talent Managers',
    overview:
      'We welcome enquiries from talent representation agencies, artist managers, and public personalities interested in corporate brand endorsements, digital appearances, and promotional campaigns.',
    collaborationScope: [
      'Brief-driven corporate endorsement and digital appearance opportunities',
      'Clear usage rights, territory, and duration documentation',
      'Professional coordination with authorized talent management teams',
    ],
    enquiryType: 'Celebrity / Artist Representation Enquiry',
    ctaLabel: 'Connect Talent Representation',
  },
  {
    index: '06',
    stakeholder: 'Business Development Partners',
    subtitle: 'Strategic Connectors & Regional Associates',
    overview:
      'We collaborate with independent business development professionals, corporate consultants, and media connectors who facilitate high-value introductions to brands, agencies, or talent ecosystems.',
    collaborationScope: [
      'Structured referral and commercial collaboration frameworks',
      'Written agreement on scope and mutually agreed commercial terms',
      'Transparent communication throughout client onboarding and execution',
    ],
    enquiryType: 'Business Development Partnership',
    ctaLabel: 'Propose BD Alliance',
  },
];

export const PAYMENT_ETHICS_PILLARS = [
  {
    index: '01',
    title: 'Mandatory Written Agreements',
    description:
      'No campaign or commercial commitment is initiated on verbal assumptions alone. Every engagement is backed by documented written confirmation detailing scope of work, deliverables, timelines, usage rights, and commercial terms.',
  },
  {
    index: '02',
    title: 'Mutually Agreed Payment Terms',
    description:
      'Payment structures, milestone percentages, invoicing schedules, and settlement timelines are openly discussed and mutually agreed upon by all parties before campaign execution begins.',
  },
  {
    index: '03',
    title: 'Transparent Financial Communication',
    description:
      'We maintain clear, proactive communication regarding invoice issuance, payment receipts, applicable tax documentation, and settlement schedules—eliminating ambiguity for both clients and creators.',
  },
  {
    index: '04',
    title: 'Documented Commercial Commitments',
    description:
      'Any change in campaign scope, additional deliverables, extended usage rights, or timeline adjustments is formally documented and approved in writing prior to implementation.',
  },
  {
    index: '05',
    title: 'Fair Dealing Across All Stakeholders',
    description:
      'We protect the commercial interests of both brand sponsors (ensuring agreed deliverables are published to specification) and creators (ensuring fair compensation for approved work).',
  },
  {
    index: '06',
    title: 'Professional Respect & Integrity',
    description:
      'We never fabricate metrics, never claim unauthorized talent representation, and never make unverified commercial promises. Every interaction is governed by long-term corporate accountability.',
  },
];

/* ==========================================================================
   INFLUENCERACT-STYLE NOIDA & NATIONAL MARKETING SUITE FOR A ONE SRK MEDIA
   ========================================================================== */
export interface NoidaFaqItem {
  number: string;
  question: string;
  answer: string;
}

export const NOIDA_PAGE_CONTENT = {
  hero: {
    kicker: 'Influencer marketing in Noida & Pan-India',
    titlePrefix: 'Put Your Brand Where Audiences Are',
    titleEmphasis: 'Paying Attention.',
    lead: 'Give your brand the right platform with A ONE SRK MEDIA, an experienced influencer marketing agency in Noida and Pan-India that turns audience attention into measurable business growth.',
    stampText: {
      line1: 'Insight',
      line2: 'Reach',
      line3: 'Impact',
    },
    note: 'Built for a market with momentum',
  },
  advantageIntro: {
    kicker: 'The Noida advantage',
    heading: 'Where Digital Ambition Meets Everyday Influence.',
    lead1: 'Noida brings together technology, high-growth startups, media houses, corporate communities and a rapidly evolving creator ecosystem. Its audiences are digitally sharp, fast-moving and heavily influenced by authentic voices across lifestyle, tech, fashion and consumer categories.',
    lead2: 'As a leading influencer marketing company in Noida and Delhi NCR, A ONE SRK MEDIA helps brands identify credible voices that fit these high-value communities. Then, we shape campaigns that turn passive screen time into commercial momentum.',
    lead3: 'From creator selection to live execution, our influencer marketing services connect every campaign decision to verified business outcomes.',
    metrics: [
      { value: '10M+', label: 'Audience Reach Across NCR & India' },
      { value: '500+', label: 'Vetted Creators & Content Channels' },
      { value: '12', label: 'Specialized Media Capabilities' },
      { value: '100%', label: 'Written Terms & Payment Transparency' },
    ],
  },
  offerings: [
    {
      index: '01',
      category: 'Local creator discovery',
      headline: 'Match Influence With The Brief.',
      description:
        'We map your audience, category and objective to a creator system built for Noida and Delhi NCR, balancing relevance, audience quality and cultural context with influence that scales seamlessly across India.',
      tags: ['Creator Discovery', 'Audience Fit', 'City & Regional Insight'],
    },
    {
      index: '02',
      category: 'Campaign strategy',
      headline: 'Keep The Creator Voice Human.',
      description:
        'We give creators strategic direction, useful context and creative freedom to translate your brand brief into content that feels credible, natural and worth engaging with.',
      tags: ['Campaign Planning', 'Platform Mix', 'Message Design'],
    },
    {
      index: '03',
      category: 'Authentic content',
      headline: 'Build Content Around Digital Behaviour.',
      description:
        'We shape the creator role and content for each platform while keeping the campaign strategically connected from first impression to final commercial action.',
      tags: ['Creative Briefs', 'Native Formats', 'Content Production'],
    },
    {
      index: '04',
      category: 'Multi-platform activation',
      headline: 'Make One Idea Work Across NCR & India.',
      description:
        'We adapt the central campaign idea to Noida’s diverse corporate and consumer communities, platform behaviours and surrounding NCR audiences without diluting its strategic purpose.',
      tags: ['Platform Execution', 'Creator Coordination', 'Content Adaptation'],
    },
    {
      index: '05',
      category: 'Measurement & optimisation',
      headline: 'Measure What Actually Moves.',
      description:
        'We look beyond vanity impressions to understand engagement quality, audience response, traffic and conversion signals that reveal where influence is creating real business value.',
      tags: ['Performance Tracking', 'Conversion Learning', 'Campaign Reporting'],
    },
  ],
  method: [
    {
      step: '01',
      symbol: '→',
      title: 'Define',
      subtitle: 'Clarify Intent',
      description:
        'Clarify the audience, objective and business goal, then build the brief around the exact action you want the right people to take.',
      output: 'Documented Strategy & Target Persona',
    },
    {
      step: '02',
      symbol: '→',
      title: 'Match',
      subtitle: 'Creator Vetting',
      description:
        'Pair the brief with creators whose audience, credibility and Noida/NCR relevance can make the message feel trusted, useful and actionable.',
      output: 'Vetted Creator Shortlist & Commercial Terms',
    },
    {
      step: '03',
      symbol: '→',
      title: 'Activate',
      subtitle: 'Live Production',
      description:
        'Turn the strategy into creator-led content with a clear message, authentic storytelling and a natural reason for audiences to respond.',
      output: 'Coordinated Multi-Platform Content Rollout',
    },
    {
      step: '04',
      symbol: '↗',
      title: 'Convert',
      subtitle: 'Commercial Momentum',
      description:
        'Track engagement, traffic and leads to understand what moved people from attention to action, making the next campaign sharper.',
      output: 'Verified Metrics & Performance Signals',
    },
  ],
  advantages: [
    {
      index: '01',
      title: 'Noida Insight, Commercial Intent',
      description:
        'Understand Noida’s audiences, digital culture and emerging consumer behaviours to build campaigns that create local relevance while connecting attention to measurable business goals.',
      badge: 'Local Intelligence',
    },
    {
      index: '02',
      title: 'Influence That Builds Consideration',
      description:
        'Prioritise creators with genuine credibility across Noida and NCR communities to encourage stronger engagement, meaningful consideration and higher-quality audience trust.',
      badge: 'Earned Credibility',
    },
    {
      index: '03',
      title: 'Creators Selected For Impact',
      description:
        'Match brands with creators based on audience fit, local relevance and content strength to improve engagement, consideration and campaign ROI.',
      badge: 'Strategic Match',
    },
    {
      index: '04',
      title: 'Content Made For The Digital Crowd',
      description:
        'Create platform-native stories shaped around modern digital behaviour, increasing views, watch time, shares, saves, clicks and meaningful interactions.',
      badge: 'Native Formats',
    },
    {
      index: '05',
      title: 'One Strategy, Connected End To End',
      description:
        'Keep strategy, creators, content, media and reporting connected to identify useful signals early, optimise execution and make each campaign decision more effective.',
      badge: 'Full Alignment',
    },
    {
      index: '06',
      title: 'Learn Faster. Build Smarter.',
      description:
        'Track reach, engagement, traffic, conversions and creator-level performance to understand what worked, improve the next move and turn influence into sustainable growth.',
      badge: 'Performance Loop',
    },
  ],
  growthPillars: [
    {
      number: '01',
      title: 'Noida Intelligence',
      description: 'Read Noida’s audiences, digital culture and emerging conversations before shaping the campaign.',
    },
    {
      number: '02',
      title: 'Creator Relevance',
      description: 'Work with credible creators whose influence feels earned, useful and native to communities.',
    },
    {
      number: '03',
      title: 'NCR & National Momentum',
      description: 'Turn strong local attention into wider discovery, consideration and demand across Delhi NCR and India.',
    },
    {
      number: '04',
      title: 'Business Response',
      description: 'Track the actions that reveal where audience attention became meaningful commercial momentum.',
    },
  ],
  closing: {
    kicker: 'Ready when you are',
    heading: 'Give Your Next Brief A Clearer Route To Growth.',
    subtitle: 'Tell us the objective of your Noida or national brief. We will turn it into a creator-led campaign built for action.',
    ctaText: "Let's Talk",
  },
  faqs: [
    {
      number: '01',
      question: 'How does A ONE SRK MEDIA approach Noida & NCR audiences?',
      answer:
        'We tap into Noida and Delhi NCR’s digital culture, corporate communities, startup ecosystems, and audience behaviours to shape culturally relevant campaigns that align with your commercial objective.',
    },
    {
      number: '02',
      question: 'How do you identify creators with genuine Noida and NCR influence?',
      answer:
        'We assess creators across quantitative audience demographics, geographic concentration, organic comment sentiment, community trust, category affinity, and brand safety—filtering out fake engagement.',
    },
    {
      number: '03',
      question: 'Can Noida campaigns extend across Delhi, Gurgaon and the wider NCR?',
      answer:
        'Yes. We build creator rosters that combine hyper-local Noida voices with regional and national creators across Delhi, Gurgaon, and the broader NCR market for scalable reach.',
    },
    {
      number: '04',
      question: 'How do you align creators with our campaign objective?',
      answer:
        'We start with your business goal—whether brand awareness, product launch, lead capture, or store footfall—and craft talking points and deliverables tailored specifically to move audiences toward that action.',
    },
    {
      number: '05',
      question: 'What does a complete influencer campaign typically involve?',
      answer:
        'Our process includes audience insight, creator discovery & vetting, commercial negotiation, script/concept briefing, draft quality checks, synchronized publishing, live link tracking, and comprehensive performance reporting.',
    },
    {
      number: '06',
      question: 'How do you measure impact beyond reach and engagement?',
      answer:
        'We track attention quality, video retention, link clicks, coupon redemptions, lead submissions, and creator-level sentiment signals to evaluate meaningful commercial momentum and calculate return on investment.',
    },
  ],
};

export const CITY_HUBS = [
  { name: 'Noida', state: 'Uttar Pradesh', focus: 'Tech, Media, Startups & Commercial Hub' },
  { name: 'Delhi NCR', state: 'National Capital Region', focus: 'National Brands & Consumer Reach' },
  { name: 'Gurgaon', state: 'Haryana', focus: 'Corporate HQ & Premium Lifestyle' },
  { name: 'Mumbai', state: 'Maharashtra', focus: 'Entertainment, Fashion & Financial Sector' },
  { name: 'Bengaluru', state: 'Karnataka', focus: 'Technology, D2C Brands & Innovation' },
  { name: 'Pune', state: 'Maharashtra', focus: 'Automotive, Youth & IT Hub' },
  { name: 'Ahmedabad', state: 'Gujarat', focus: 'Textiles, Retail & Industrial Growth' },
  { name: 'Hyderabad', state: 'Telangana', focus: 'Tech Enterprises & Regional Entertainment' },
  { name: 'Kolkata', state: 'West Bengal', focus: 'Culture, Arts & Eastern Commercial Gate' },
];

export const PLATFORM_SOLUTIONS = [
  { name: 'Instagram Influencer Marketing', path: 'influencer-marketing', desc: 'Reels, Carousels, Collabs & Stories' },
  { name: 'YouTube Influencer Marketing', path: 'youtube-digital', desc: 'Dedicated Reviews, Mid-Rolls & Shorts' },
  { name: 'Brand Promotions & Launches', path: 'brand-partnerships', desc: 'Synchronized Go-to-Market Waves' },
  { name: 'Celebrity Collaborations', path: 'celebrity-creator', desc: 'Brief-Driven Talent Procurement' },
  { name: 'Live Streaming Solutions', path: 'live-streaming', desc: 'Interactive Broadcasts & In-Stream Ads' },
  { name: 'Telegram Influencer Marketing', path: 'services', desc: 'Community Broadcasting & Deals Channels' },
  { name: 'LinkedIn Influencer Marketing', path: 'services', desc: 'B2B Thought Leadership & Executive Voices' },
  { name: 'X (Twitter) Influencer Marketing', path: 'services', desc: 'Trending Conversations & Launch Spikes' },
  { name: 'UGC Content Creation', path: 'services', desc: 'High-Converting User Generated Content' },
  { name: 'Regional Influencer Marketing', path: 'services', desc: 'Hindi & Multi-Language Vernacular Reach' },
  { name: 'Meme Marketing Agency', path: 'services', desc: 'Viral Cultural Resonance & Relatable Humor' },
  { name: 'PR & Paid Media Amplification', path: 'services', desc: 'Creator Whitelisting & Sponsored Reach' },
];

export const CREATOR_TIERS = [
  { tier: 'Nano Creators', range: '1K – 10K', focus: 'Hyper-Niche Communities & Intimate Trust' },
  { tier: 'Micro Creators', range: '10K – 100K', focus: 'High Engagement Rates & High Conversion' },
  { tier: 'Macro Creators', range: '100K – 1M', focus: 'Category Authority & Broad Regional Scale' },
  { tier: 'Mega Creators', range: '1M+', focus: 'Mass Awareness & National Visibility' },
  { tier: 'UGC Creators', range: 'Tailored', focus: 'Authentic Ad Creatives & Social Proof' },
];

