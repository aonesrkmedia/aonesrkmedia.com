import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Mail,
  MessageSquare,
  Printer,
  Send,
} from 'lucide-react';
import {
  BUSINESS_PARTNERSHIP_TRACKS,
  COMPANY_INFO,
  CORE_VALUES,
  EIGHT_STEP_PROCESS,
  PAYMENT_ETHICS_PILLARS,
  PROPOSED_DEPARTMENTS,
  PageId,
  SEVENTEEN_INDUSTRIES,
  TWELVE_SERVICES,
} from '../data/companyData';

interface ContactPageProps {
  initialEnquiryType?: string;
  onNavigate: (page: PageId, enquiryPreset?: string) => void;
}

interface SubmittedEnquiry {
  id: string;
  referenceCode: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  createdAt: string;
}

const ENQUIRY_TYPES = [
  'Influencer Marketing Campaign',
  'Brand Partnership / Sponsorship',
  'Brand Promotion & Product Launch',
  'YouTube & Digital Marketing',
  'Instagram Promotion Campaign',
  'Celebrity Collaboration Brief',
  'Live Streaming Campaign',
  'Advertising Agency Collaboration',
  'Creator / YouTuber Onboarding',
  'Business Development Partnership',
  'General Corporate Enquiry',
];

/* ==========================================================================
   PAGE 14: CONTACT US & VALIDATED BUSINESS ENQUIRY FORM
   ========================================================================== */
export const ContactPage: React.FC<ContactPageProps> = ({ initialEnquiryType }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState(
    initialEnquiryType || ENQUIRY_TYPES[0]
  );
  const [message, setMessage] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [latestSubmission, setLatestSubmission] = useState<SubmittedEnquiry | null>(null);
  const [recentEnquiries, setRecentEnquiries] = useState<SubmittedEnquiry[]>([]);

  useEffect(() => {
    if (initialEnquiryType) {
      setEnquiryType(initialEnquiryType);
    }
  }, [initialEnquiryType]);

  useEffect(() => {
    fetch('/api/enquiries')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.enquiries)) {
          setRecentEnquiries(data.enquiries);
        }
      })
      .catch(() => {
        // Ignore if offline
      });
  }, []);

  const validateClientSide = () => {
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) {
      errs.name = 'Please enter your full name (minimum 2 characters).';
    }
    if (company.trim().length < 2) {
      errs.company = 'Please enter your company, brand, or creator channel name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[0-9]{7,15}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid phone or WhatsApp number (7–15 digits).';
    }
    if (!enquiryType.trim()) {
      errs.enquiryType = 'Please select an enquiry category.';
    }
    if (message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your requirements.';
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateClientSide()) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          enquiryType: enquiryType.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setSubmitError(data.message || 'Unable to submit enquiry. Please verify all fields.');
      } else {
        const record: SubmittedEnquiry = data.enquiry;
        setLatestSubmission(record);
        setRecentEnquiries((prev) => [record, ...prev]);
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');
        setFieldErrors({});
      }
    } catch {
      setSubmitError(
        'Network error while contacting the backend API. You can also send your enquiry directly via WhatsApp or Email using the buttons on this page.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const buildWhatsAppDirectUrl = (rec?: SubmittedEnquiry) => {
    const target = rec || {
      referenceCode: 'DIRECT',
      name: name || 'Prospective Partner',
      company: company || 'N/A',
      email: email || 'N/A',
      phone: phone || 'N/A',
      enquiryType,
      message: message || 'Hello A ONE SRK MEDIA, I would like to discuss a business collaboration.',
    };
    const text = [
      `Hello *${COMPANY_INFO.name}*,`,
      ``,
      `*Reference:* ${target.referenceCode}`,
      `*Enquiry Type:* ${target.enquiryType}`,
      `*Name:* ${target.name}`,
      `*Company / Channel:* ${target.company}`,
      `*Email:* ${target.email}`,
      `*Phone:* ${target.phone}`,
      ``,
      `*Message:*`,
      target.message,
    ].join('\n');
    return `https://wa.me/${COMPANY_INFO.whatsappNumberClean}?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoDirectUrl = (rec?: SubmittedEnquiry) => {
    const target = rec || {
      referenceCode: 'DIRECT',
      name: name || 'Prospective Partner',
      company: company || 'N/A',
      email: email || 'N/A',
      phone: phone || 'N/A',
      enquiryType,
      message: message || 'Hello A ONE SRK MEDIA, I would like to discuss a business collaboration.',
    };
    const subject = `[${target.referenceCode}] ${target.enquiryType} — ${target.company}`;
    const body = [
      `To: ${COMPANY_INFO.name} (${COMPANY_INFO.email})`,
      `Reference: ${target.referenceCode}`,
      `Enquiry Type: ${target.enquiryType}`,
      `Name: ${target.name}`,
      `Company / Channel: ${target.company}`,
      `Email: ${target.email}`,
      `Phone / WhatsApp: ${target.phone}`,
      ``,
      `Project / Collaboration Details:`,
      target.message,
    ].join('\n');
    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      {/* Header */}
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Page 14</span>
            <span aria-hidden="true">·</span>
            <span>Corporate Communications Desk</span>
            <span aria-hidden="true">·</span>
            <span>{COMPANY_INFO.country}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Connect with {COMPANY_INFO.name} for brand campaigns, influencer marketing, YouTube sponsorships, creator partnerships, and agency collaborations.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Direct Official Channels */}
            <div className="space-y-6 lg:col-span-5">
              <div className="border border-neutral-950 bg-neutral-950 p-8 text-white">
                <p className="text-xs font-semibold text-red-500">
                  Official Direct Contact Channels
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">
                  {COMPANY_INFO.name}
                </h2>
                <p className="mt-2 text-xs text-neutral-300">{COMPANY_INFO.tagline}</p>

                <div className="mt-8 space-y-6 border-t border-neutral-800 pt-6">
                  <div>
                    <p className="text-xs text-neutral-400">Official Email Address</p>
                    <a
                      href={COMPANY_INFO.emailUrl}
                      className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-white hover:text-red-400"
                    >
                      <Mail className="h-4 w-4 text-red-500 shrink-0" />
                      <span>{COMPANY_INFO.email}</span>
                    </a>
                    <p className="mt-1 font-mono-tabular text-xs text-neutral-400">
                      URL: {COMPANY_INFO.emailUrl}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">Official WhatsApp Business Desk</p>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-2 font-mono-tabular text-base font-semibold text-white hover:text-red-400"
                    >
                      <MessageSquare className="h-4 w-4 text-red-500 shrink-0" />
                      <span>{COMPANY_INFO.whatsappDisplay}</span>
                    </a>
                    <p className="mt-1 font-mono-tabular text-xs text-neutral-400">
                      URL: {COMPANY_INFO.whatsappUrl}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">Country of Operations</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {COMPANY_INFO.country}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 border-t border-neutral-800 pt-6 sm:grid-cols-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-red-700 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-neutral-950 whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={COMPANY_INFO.emailUrl}
                    className="inline-flex items-center justify-center gap-2 border border-neutral-700 px-4 py-3 text-xs font-semibold text-white transition-colors hover:border-white whitespace-nowrap shrink-0"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send Direct Email</span>
                  </a>
                </div>
              </div>

              <div className="border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-xs font-semibold text-neutral-950">
                  What to Include in Your Enquiry
                </p>
                <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                  <li>
                    <strong>For Brands & Agencies:</strong> Product/brand URL, campaign objectives, target platforms (Instagram, YouTube, Live), and tentative timeline.
                  </li>
                  <li>
                    <strong>For Influencers & Creators:</strong> Primary channel links, content category, location, and commercial contact details.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Validated Backend-Connected Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="border border-neutral-200 bg-white p-8 sm:p-10">
                <div className="border-b border-neutral-200 pb-5">
                  <p className="text-xs font-semibold text-red-700">
                    Verified Server-Backed Intake Form
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-neutral-950">
                    Submit a Business or Creator Enquiry
                  </h2>
                  <p className="mt-1 text-xs text-neutral-500">
                    All fields are validated and recorded on our server with an official reference code, plus optional one-click dispatch to WhatsApp or Email.
                  </p>
                </div>

                {latestSubmission && (
                  <div className="mt-6 border border-neutral-950 bg-neutral-50 p-6">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-red-700 shrink-0" />
                      <div className="w-full">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-bold text-neutral-950">
                            Enquiry Recorded — Reference: {latestSubmission.referenceCode}
                          </p>
                          <span className="font-mono-tabular text-xs text-neutral-500">
                            {new Date(latestSubmission.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-neutral-600">
                          Thank you, <strong>{latestSubmission.name}</strong> ({latestSubmission.company}). Your enquiry for <strong>{latestSubmission.enquiryType}</strong> has been logged. For immediate priority response, you may also forward a copy directly via WhatsApp or Email below:
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <a
                            href={buildWhatsAppDirectUrl(latestSubmission)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-red-700 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-950"
                          >
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span>Send Copy via WhatsApp</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                          <a
                            href={buildMailtoDirectUrl(latestSubmission)}
                            className="inline-flex items-center gap-1.5 border border-neutral-900 bg-white px-4 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            <span>Open in Email Client</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mt-6 flex items-start gap-2.5 border border-red-700 bg-red-50/50 p-4 text-xs text-red-900">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-red-700 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-xs font-semibold text-neutral-900"
                      >
                        Full Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rohan Sharma"
                        className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-company"
                        className="block text-xs font-semibold text-neutral-900"
                      >
                        Company / Brand / Channel Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="enquiry-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Apex Consumer Brands / Channel Name"
                        className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
                      />
                      {fieldErrors.company && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-xs font-semibold text-neutral-900"
                      >
                        Email Address <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-xs font-semibold text-neutral-900"
                      >
                        Phone / WhatsApp Number <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
                      />
                      {fieldErrors.phone && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-type"
                      className="block text-xs font-semibold text-neutral-900"
                    >
                      Type of Enquiry <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="enquiry-type"
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none"
                    >
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                      {!ENQUIRY_TYPES.includes(enquiryType) && (
                        <option value={enquiryType}>{enquiryType}</option>
                      )}
                    </select>
                    {fieldErrors.enquiryType && (
                      <p className="mt-1 text-xs text-red-700">{fieldErrors.enquiryType}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-xs font-semibold text-neutral-900"
                    >
                      Project Brief / Message <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your campaign objectives, product category, target platforms, timelines, or creator collaboration details..."
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs text-red-700">{fieldErrors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-5">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-red-700 px-6 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 disabled:opacity-50 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>{submitting ? 'Recording Enquiry...' : 'Submit Official Enquiry'}</span>
                    </button>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={buildWhatsAppDirectUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs font-medium text-neutral-800 hover:border-neutral-950"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-red-700" />
                        <span>Send Form Text on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </form>

                {/* Session Enquiry Log */}
                {recentEnquiries.length > 0 && (
                  <div className="mt-10 border-t border-neutral-200 pt-6">
                    <p className="text-xs font-semibold text-neutral-900">
                      Recent Verified Enquiries Logged ({recentEnquiries.length})
                    </p>
                    <div className="mt-3 space-y-2">
                      {recentEnquiries.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-wrap items-center justify-between gap-2 border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs"
                        >
                          <div>
                            <span className="font-mono-tabular font-semibold text-red-700">
                              {item.referenceCode}
                            </span>
                            <span className="mx-2 text-neutral-300">·</span>
                            <span className="font-medium text-neutral-900">{item.company}</span>
                            <span className="mx-2 text-neutral-300">·</span>
                            <span className="text-neutral-600">{item.enquiryType}</span>
                          </div>
                          <span className="font-mono-tabular text-neutral-400">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 15: DOWNLOADABLE COMPANY PORTFOLIO (PRINT-READY & EXPORTABLE DOSSIER)
   ========================================================================== */
export const PortfolioPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({
  onNavigate,
}) => {
  const handlePrintToPdf = () => {
    window.print();
  };

  const handleDownloadStandalonePortfolio = () => {
    const htmlContent = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${COMPANY_INFO.name} — Corporate Portfolio & Capability Dossier</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0a0a0a; background: #fff; margin: 0; padding: 40px; line-height: 1.5; }
    .container { max-width: 900px; margin: 0 auto; }
    .cover { border: 2px solid #0a0a0a; padding: 48px; margin-bottom: 40px; page-break-after: always; }
    .kicker { color: #b91c1c; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
    h1 { font-size: 38px; margin: 12px 0; letter-spacing: -0.02em; }
    h2 { font-size: 22px; border-bottom: 1px solid #e5e5e5; padding-bottom: 8px; margin-top: 36px; }
    .tagline { font-size: 20px; font-style: italic; color: #404040; margin-bottom: 24px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
    .card { border: 1px solid #d4d4d4; padding: 16px; break-inside: avoid; }
    .num { color: #b91c1c; font-family: monospace; font-weight: 700; font-size: 12px; }
    .footer { margin-top: 48px; border-top: 2px solid #0a0a0a; padding-top: 20px; font-size: 13px; }
    @media print { body { padding: 0; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="cover">
      <div class="kicker">OFFICIAL CORPORATE PORTFOLIO DOSSIER</div>
      <h1>${COMPANY_INFO.name}</h1>
      <div class="tagline">${COMPANY_INFO.tagline}</div>
      <p><strong>Industry:</strong> ${COMPANY_INFO.industry}</p>
      <p><strong>Headline Mandate:</strong> ${COMPANY_INFO.heroHeadline}</p>
      <p><strong>Country:</strong> ${COMPANY_INFO.country}</p>
      <p><strong>Email:</strong> ${COMPANY_INFO.email}</p>
      <p><strong>WhatsApp:</strong> ${COMPANY_INFO.whatsappDisplay} (${COMPANY_INFO.whatsappUrl})</p>
    </div>

    <h2>01. Executive Introduction & Vision</h2>
    <p>${COMPANY_INFO.name} is a corporate media, entertainment, influencer marketing, and brand promotions organization based in India. We connect established brands, advertising agencies, and emerging enterprises with suitable digital creators, YouTubers, and media properties through structured campaign execution and transparent commercial governance.</p>

    <h2>02. Core Services (12 Capabilities)</h2>
    <div class="grid">
      ${TWELVE_SERVICES.map(
        (s) => `<div class="card">
          <div class="num">${s.index}. ${s.category}</div>
          <strong>${s.title}</strong>
          <p style="font-size:13px;color:#525252;margin:6px 0 0;">${s.summary}</p>
        </div>`
      ).join('')}
    </div>

    <h2>03. Eight-Step Campaign Management Process</h2>
    <div class="grid">
      ${EIGHT_STEP_PROCESS.map(
        (st) => `<div class="card">
          <div class="num">Step ${st.stepNumber} · ${st.phase}</div>
          <strong>${st.title}</strong>
          <p style="font-size:13px;color:#525252;margin:6px 0 0;">${st.summary}</p>
        </div>`
      ).join('')}
    </div>

    <h2>04. Proposed Company Structure (10 Departments)</h2>
    <p style="font-size:12px;color:#525252;">Note: The following represent proposed functional departments of ${COMPANY_INFO.name}.</p>
    <div class="grid">
      ${PROPOSED_DEPARTMENTS.map(
        (d) => `<div class="card">
          <div class="num">${d.index}. ${d.division}</div>
          <strong>${d.name}</strong>
          <p style="font-size:13px;color:#525252;margin:6px 0 0;">${d.mandate}</p>
        </div>`
      ).join('')}
    </div>

    <h2>05. Industries We Serve (17 Sectors)</h2>
    <p style="font-size:13px;">${SEVENTEEN_INDUSTRIES.map((i) => `${i.index}. ${i.name}`).join(' · ')}</p>

    <h2>06. Payment Transparency & Business Ethics</h2>
    <ul>
      ${PAYMENT_ETHICS_PILLARS.map((p) => `<li><strong>${p.title}:</strong> ${p.description}</li>`).join('')}
    </ul>

    <div class="footer">
      <strong>${COMPANY_INFO.name}</strong> — ${COMPANY_INFO.tagline}<br/>
      Email: ${COMPANY_INFO.email} | WhatsApp: ${COMPANY_INFO.whatsappDisplay} | Country: ${COMPANY_INFO.country}
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'A-ONE-SRK-MEDIA-Corporate-Portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      {/* Action Toolbar (Hidden when printing) */}
      <section className="no-print border-b border-neutral-200 bg-neutral-50 px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="font-mono-tabular font-semibold text-red-700">Page 15</span>
              <span aria-hidden="true">·</span>
              <span>Executive Capability Document</span>
              <span aria-hidden="true">·</span>
              <span>A4 Print & Export Ready</span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Downloadable Company Portfolio
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              Complete corporate profile featuring our cover page, executive introduction, 12 services, business model, 10 proposed departments, 8-step process, 17 industries, and official contact details.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePrintToPdf}
              className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadStandalonePortfolio}
              className="inline-flex items-center gap-2 border border-neutral-950 bg-white px-5 py-3 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-950 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="h-4 w-4 text-red-700" />
              <span>Download Portfolio Dossier</span>
            </button>
          </div>
        </div>
      </section>

      {/* PRINT-FRIENDLY MULTI-SECTION PORTFOLIO DOCUMENT */}
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-12">
        {/* SECTION 1: COVER PAGE */}
        <div className="print-break-after border-2 border-neutral-950 bg-white p-8 sm:p-14">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-6 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">
              CORPORATE PROFILE & CAPABILITY DOSSIER
            </span>
            <span className="font-mono-tabular">{new Date().getFullYear()} EDITION</span>
          </div>

          <div className="py-16">
            <p className="text-xs font-semibold tracking-wider text-red-700">
              {COMPANY_INFO.industry}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-6xl">
              {COMPANY_INFO.name}
            </h2>
            <p className="mt-4 font-editorial text-2xl italic text-neutral-700 sm:text-3xl">
              {COMPANY_INFO.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600">
              {COMPANY_INFO.heroHeadline} — A comprehensive corporate overview for brands, companies, advertising agencies, influencers, YouTubers, celebrities, and business partners.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-neutral-950 pt-8 text-xs sm:grid-cols-3">
            <div>
              <p className="text-neutral-400">Official Email</p>
              <p className="mt-1 font-semibold text-neutral-950">{COMPANY_INFO.email}</p>
            </div>
            <div>
              <p className="text-neutral-400">Official WhatsApp</p>
              <p className="mt-1 font-mono-tabular font-semibold text-neutral-950">
                {COMPANY_INFO.whatsappDisplay}
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Country of Operations</p>
              <p className="mt-1 font-semibold text-neutral-950">{COMPANY_INFO.country}</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: COMPANY INTRODUCTION, VISION, MISSION & BUSINESS MODEL */}
        <div className="print-break-after mt-12 border border-neutral-200 bg-white p-8 sm:p-12">
          <p className="font-mono-tabular text-xs font-semibold text-red-700">
            SECTION 01 · EXECUTIVE OVERVIEW & BUSINESS MODEL
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-neutral-950">
            Company Introduction & Strategic Mandate
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            <strong>{COMPANY_INFO.name}</strong> operates across media, entertainment, influencer marketing, and brand promotions in India. Our business model connects corporate sponsors and advertising agencies with suitable content creators, YouTubers, Instagram influencers, and talent channels through structured campaign coordination, written commercial agreements, and transparent financial governance.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="border border-neutral-200 p-5">
              <p className="text-xs font-semibold text-red-700">Corporate Vision</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                To be a trusted international-standard media and influencer marketing partner recognized for strategic clarity, ethical transparency, and measurable promotional execution.
              </p>
            </div>
            <div className="border border-neutral-200 p-5">
              <p className="text-xs font-semibold text-red-700">Corporate Mission</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                To connect brands with authentic digital influence through rigorous creator selection, coordinated multi-platform campaigns, and documented commercial commitments.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold text-neutral-950">Core Corporate Values</h4>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CORE_VALUES.map((v) => (
                <div key={v.index} className="border border-neutral-200 p-4">
                  <p className="font-mono-tabular text-xs font-bold text-red-700">
                    {v.index}. {v.title}
                  </p>
                  <p className="mt-1.5 text-xs text-neutral-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: 12 CORE SERVICES */}
        <div className="print-break-after mt-12 border border-neutral-200 bg-white p-8 sm:p-12">
          <p className="font-mono-tabular text-xs font-semibold text-red-700">
            SECTION 02 · CAPABILITIES PORTFOLIO
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-neutral-950">
            Twelve Specialized Media & Marketing Services
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TWELVE_SERVICES.map((s) => (
              <div key={s.id} className="print-break-inside-avoid border border-neutral-200 p-4">
                <p className="font-mono-tabular text-xs font-bold text-red-700">
                  {s.index}. {s.title}
                </p>
                <p className="mt-1 text-xs text-neutral-600">{s.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: 8-STEP CAMPAIGN PROCESS & 10 PROPOSED DEPARTMENTS */}
        <div className="mt-12 border border-neutral-200 bg-white p-8 sm:p-12">
          <p className="font-mono-tabular text-xs font-semibold text-red-700">
            SECTION 03 · OPERATIONS, STRUCTURE & CONTACT
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-neutral-950">
            Eight-Step Campaign Management Process
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {EIGHT_STEP_PROCESS.map((st) => (
              <div key={st.stepNumber} className="border border-neutral-200 p-3.5">
                <p className="font-mono-tabular text-xs font-bold text-red-700">
                  Step {st.stepNumber}
                </p>
                <p className="mt-1 text-xs font-bold text-neutral-950">{st.title}</p>
                <p className="mt-1 text-xs text-neutral-500">{st.deliverableOutput}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-2xl font-bold text-neutral-950">
            Proposed Organizational Structure (10 Proposed Departments)
          </h3>
          <p className="mt-1 text-xs text-neutral-500">
            Clearly labelled proposed functional departments (no invented personnel or unverified appointments):
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROPOSED_DEPARTMENTS.map((d) => (
              <div key={d.index} className="border border-neutral-200 p-3.5">
                <p className="font-mono-tabular text-xs font-bold text-red-700">
                  {d.index}. {d.name} (Proposed Department)
                </p>
                <p className="mt-1 text-xs text-neutral-600">{d.mandate}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-2xl font-bold text-neutral-950">
            17 Industries Served & 6 Partnership Tracks
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-neutral-700">
            <strong>Industries Served:</strong>{' '}
            {SEVENTEEN_INDUSTRIES.map((i) => i.name).join(' · ')}.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-neutral-700">
            <strong>Business Partnership Tracks:</strong>{' '}
            {BUSINESS_PARTNERSHIP_TRACKS.map((b) => b.stakeholder).join(' · ')}.
          </p>

          {/* Official Contact Footer inside Portfolio */}
          <div className="mt-10 border-t-2 border-neutral-950 pt-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-bold text-neutral-950">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs text-neutral-600">{COMPANY_INFO.tagline}</p>
              </div>
              <div className="text-xs text-neutral-800">
                <p>
                  <strong>Email:</strong> {COMPANY_INFO.email}
                </p>
                <p className="font-mono-tabular">
                  <strong>WhatsApp:</strong> {COMPANY_INFO.whatsappDisplay} ({COMPANY_INFO.whatsappUrl})
                </p>
                <p>
                  <strong>Country:</strong> {COMPANY_INFO.country}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Non-Print Actions */}
        <div className="no-print mt-8 flex flex-wrap items-center justify-between gap-4 border border-neutral-200 bg-neutral-50 p-6">
          <div className="flex items-center gap-2 text-xs text-neutral-700">
            <FileText className="h-4 w-4 text-red-700" />
            <span>Ready to initiate a conversation with {COMPANY_INFO.name}?</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handlePrintToPdf}
              className="border border-neutral-950 bg-white px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-neutral-950 hover:text-white cursor-pointer"
            >
              Print / Export PDF
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="bg-red-700 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-950 cursor-pointer"
            >
              Go to Contact Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   PAGE 16: PRIVACY POLICY, TERMS PLACEHOLDERS & TECHNICAL SETUP / DOMAIN GUIDE
   ========================================================================== */
export const LegalAndSetupPage: React.FC = () => {
  return (
    <div className="animate-page-enter bg-white text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-mono-tabular font-semibold text-red-700">Governance & Technical Guide</span>
            <span aria-hidden="true">·</span>
            <span>Legal Placeholders & Deployment Instructions</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950">
            Privacy Policy, Terms & Technical Setup Guide
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-600">
            Corporate legal policy placeholders and complete technical documentation for local development, production build, deployment, and future custom domain integration.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Privacy & Terms Placeholders */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">
                01. Privacy Policy (Corporate Placeholder)
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-neutral-950">
                Data Protection & Enquiry Privacy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                {COMPANY_INFO.name} collects business contact information (Name, Company, Email, Phone/WhatsApp, and Project Message) solely for the purpose of responding to commercial, creator, or partnership enquiries. We do not sell or rent contact details to unauthorized third parties. To request updates or deletion of your enquiry record, contact{' '}
                <a href={COMPANY_INFO.emailUrl} className="font-semibold underline">
                  {COMPANY_INFO.email}
                </a>
                .
              </p>
            </div>

            <div className="border border-neutral-200 p-8">
              <p className="font-mono-tabular text-xs font-semibold text-red-700">
                02. Terms of Engagement (Corporate Placeholder)
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-neutral-950">
                Commercial Terms & Website Usage
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                All information on this website serves as an introduction to the capabilities of {COMPANY_INFO.name}. Formal campaign execution, talent engagements, deliverables, and payment schedules are governed exclusively by separate written commercial agreements executed between {COMPANY_INFO.name} and the respective client or creator.
              </p>
            </div>
          </div>

          {/* Technical Setup, Preview, Deployment & Domain Connection Instructions */}
          <div className="border border-neutral-950 bg-neutral-50 p-8 sm:p-10">
            <p className="font-mono-tabular text-xs font-semibold text-red-700">
              03. Technical Administration & Custom Domain Connection Guide
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-neutral-950">
              Setup, Preview, Deployment & Domain Connection Instructions
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-bold text-neutral-950">
                  1. Local Setup & Development Preview
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                  <li>
                    <strong>Install Dependencies:</strong> Run <code className="font-mono-tabular bg-neutral-100 px-1.5 py-0.5">npm install</code> in the root project directory.
                  </li>
                  <li>
                    <strong>Start Full-Stack Dev Server:</strong> Run <code className="font-mono-tabular bg-neutral-100 px-1.5 py-0.5">npm run dev</code> to launch the Express + Vite server on port <code className="font-mono-tabular">3000</code>.
                  </li>
                  <li>
                    <strong>Edit Website Copy:</strong> All 15 pages’ text, contact numbers, services, and departments are centralized in <code className="font-mono-tabular bg-neutral-100 px-1.5 py-0.5">src/data/companyData.ts</code>.
                  </li>
                </ul>
              </div>

              <div className="border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-bold text-neutral-950">
                  2. Production Build & Cloud Deployment
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                  <li>
                    <strong>Compile Production Assets:</strong> Run <code className="font-mono-tabular bg-neutral-100 px-1.5 py-0.5">npm run build</code> to bundle optimized static assets into <code className="font-mono-tabular">/dist</code>.
                  </li>
                  <li>
                    <strong>Start Production Server:</strong> Set <code className="font-mono-tabular bg-neutral-100 px-1.5 py-0.5">NODE_ENV=production</code> and run <code className="font-mono-tabular bg-neutral-100 px-1.5 py-0.5">npm start</code>.
                  </li>
                  <li>
                    <strong>Supported Hosts:</strong> Google Cloud Run, Render, Railway, Fly.io, or any Node.js container host.
                  </li>
                </ul>
              </div>

              <div className="border border-neutral-200 bg-white p-6 md:col-span-2">
                <h3 className="text-sm font-bold text-neutral-950">
                  3. Connecting Your Custom Domain (When Purchased)
                </h3>
                <p className="mt-2 text-xs text-neutral-600">
                  The website domain for {COMPANY_INFO.name} is currently marked as <em>Coming Soon</em>. Once you register your official domain (for example, <code className="font-mono-tabular">aonesrkmedia.com</code> or <code className="font-mono-tabular">aonesrkmedia.in</code>):
                </p>
                <ol className="mt-3 space-y-1.5 text-xs text-neutral-600">
                  <li>
                    <strong>01. DNS Configuration:</strong> In your domain registrar’s DNS panel, add an <code className="font-mono-tabular">A</code> record for <code className="font-mono-tabular">@</code> pointing to your hosting provider’s IP address, and a <code className="font-mono-tabular">CNAME</code> record for <code className="font-mono-tabular">www</code> pointing to your cloud deployment hostname.
                  </li>
                  <li>
                    <strong>02. SSL/TLS Provisioning:</strong> Enable automatic Let’s Encrypt SSL in your cloud host so <code className="font-mono-tabular">https://</code> is enforced automatically.
                  </li>
                  <li>
                    <strong>03. Metadata Update:</strong> Update <code className="font-mono-tabular">domainStatus</code> in <code className="font-mono-tabular">src/data/companyData.ts</code> with your live domain URL.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
