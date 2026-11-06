import React, { useState } from 'react';
import { X, Send, MessageSquare, Mail, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, CITY_HUBS, PLATFORM_SOLUTIONS } from '../data/companyData';

interface LetsTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const LetsTalkModal: React.FC<LetsTalkModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Influencer Marketing Campaign');
  const [city, setCity] = useState('Noida / Delhi NCR');
  const [budget, setBudget] = useState('Flexible / To be discussed');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceCode: string;
    name: string;
    company: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (name.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }
    if (company.trim().length < 2) {
      setErrorMessage('Please enter your company, brand, or creator channel name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[0-9]{7,15}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid phone or WhatsApp number (7 to 15 digits).');
      return;
    }
    if (message.trim().length < 10) {
      setErrorMessage('Please provide a brief description of your campaign objectives (min 10 characters).');
      return;
    }

    setSubmitting(true);
    try {
      const fullMessage = `[City/Target: ${city}] [Budget: ${budget}] ${message.trim()}`;
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          enquiryType: service,
          message: fullMessage,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setErrorMessage(data.message || 'Unable to record enquiry. Please verify your details.');
      } else {
        setSubmittedData({
          referenceCode: data.enquiry.referenceCode,
          name: name.trim(),
          company: company.trim(),
        });
      }
    } catch {
      setErrorMessage('Network connection error. You can still reach us directly via WhatsApp or Email below.');
    } finally {
      setSubmitting(false);
    }
  };

  const buildWhatsAppUrl = () => {
    const text = [
      `Hello *${COMPANY_INFO.name}*,`,
      `I would like to discuss a campaign brief.`,
      ``,
      `*Name:* ${name || 'Prospective Client'}`,
      `*Company/Brand:* ${company || 'N/A'}`,
      `*Email:* ${email || 'N/A'}`,
      `*Phone:* ${phone || 'N/A'}`,
      `*Service Required:* ${service}`,
      `*Target Market:* ${city}`,
      `*Estimated Budget:* ${budget}`,
      `*Brief / Objectives:*`,
      message || 'Looking for an influencer campaign and brand collaboration.',
    ].join('\n');
    return `https://wa.me/${COMPANY_INFO.whatsappNumberClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop with blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0d0a14]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-[#ddd7e7] bg-white shadow-2xl transition-all my-auto">
        {/* Header Ribbon */}
        <div className="relative bg-gradient-to-r from-[#0d0a14] via-[#1a1429] to-[#0d0a14] p-6 sm:p-8 text-white">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#ff625f]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#ff625f] shadow-[0_0_8px_#ff625f]" />
            Direct Commercial Desk · A ONE SRK MEDIA
          </div>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
            Have a campaign in mind?{' '}
            <span className="text-gradient-coral italic">Make influence move the needle.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-300">
            Tell us your campaign objectives. We evaluate audience fit, curate credible creators, and deliver documented ROI.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submittedData ? (
            <div className="py-6 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900">
                Brief Successfully Recorded
              </h3>
              <p className="font-mono-tabular text-sm font-semibold text-[#6542e8]">
                Reference ID: {submittedData.referenceCode}
              </p>
              <p className="max-w-md mx-auto text-sm text-neutral-600">
                Thank you, <strong>{submittedData.name}</strong> from <strong>{submittedData.company}</strong>. Our campaign strategist is reviewing your requirements and will reach out shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#ff625f] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff625f]/30 hover:bg-[#e11d48] transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send On WhatsApp For Priority Reply</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-full border border-neutral-300 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {errorMessage && (
                <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
                  <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Full Name <span className="text-[#ff625f]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sahil Verma"
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#6542e8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6542e8]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Company / Brand / Channel <span className="text-[#ff625f]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Nova Lifestyle / TechVlog"
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#6542e8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6542e8]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Email Address <span className="text-[#ff625f]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@brand.com"
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#6542e8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6542e8]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Phone / WhatsApp <span className="text-[#ff625f]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 8630875579"
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#6542e8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6542e8]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Required Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-3.5 py-2.5 text-sm text-neutral-900 focus:border-[#6542e8] focus:bg-white focus:outline-none"
                  >
                    <option value="Influencer Marketing Campaign">Influencer Marketing</option>
                    <option value="YouTube Influencer Marketing">YouTube Marketing</option>
                    <option value="Instagram Promotion Campaign">Instagram Promotions</option>
                    <option value="Brand Launch & Promotions">Brand Launch & Promotion</option>
                    <option value="Celebrity Collaboration Brief">Celebrity Collaboration</option>
                    <option value="Live Streaming Solutions">Live Streaming</option>
                    <option value="Regional & Meme Marketing">Regional / Meme Campaign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Target Hub
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-3.5 py-2.5 text-sm text-neutral-900 focus:border-[#6542e8] focus:bg-white focus:outline-none"
                  >
                    <option value="Noida / Delhi NCR">Noida / Delhi NCR</option>
                    <option value="Pan-India Multi-City">Pan-India Multi-City</option>
                    <option value="Mumbai & Western India">Mumbai / West</option>
                    <option value="Bengaluru & South Hub">Bengaluru / South</option>
                    <option value="Tier-2/3 Regional Vernacular">Tier-2/3 Vernacular</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Campaign Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-3.5 py-2.5 text-sm text-neutral-900 focus:border-[#6542e8] focus:bg-white focus:outline-none"
                  >
                    <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                    <option value="₹50,000 – ₹2,00,000">₹50K – ₹2 Lakhs</option>
                    <option value="₹2,00,000 – ₹10,00,000">₹2 Lakhs – ₹10 Lakhs</option>
                    <option value="₹10,00,000 – ₹50,00,000">₹10 Lakhs – ₹50 Lakhs</option>
                    <option value="₹50,00,000+ (Flagship)">₹50 Lakhs+ (Flagship)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Brief / Campaign Objectives <span className="text-[#ff625f]">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your goals: target audience, product category, launch timeline, deliverables needed (e.g. 5 YouTube reviews + 10 Instagram Reels)..."
                  className="mt-1.5 w-full rounded-xl border border-[#ddd7e7] bg-[#fbf9f5] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#6542e8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6542e8]/20 transition-all"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#ddd7e7]">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#ff625f] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff625f]/30 hover:bg-[#e11d48] hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{submitting ? 'Submitting...' : 'Submit Campaign Brief'}</span>
                </button>

                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span>Or connect instantly:</span>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700 underline"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <span>·</span>
                  <a
                    href={COMPANY_INFO.emailUrl}
                    className="inline-flex items-center gap-1 font-bold text-[#6542e8] hover:text-[#4e2bc3] underline"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
