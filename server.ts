import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface EnquiryRecord {
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

const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

function loadEnquiries(): EnquiryRecord[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
      return [];
    }
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEnquiries(records: EnquiryRecord[]): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(records, null, 2), 'utf-8');
  } catch {
    // Fallback silently if filesystem is read-only
  }
}

const memoryEnquiries: EnquiryRecord[] = loadEnquiries();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '1mb' }));

  // Health & Backend configuration status endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'operational',
      company: 'A ONE SRK MEDIA',
      enquiryEndpoint: '/api/enquiries',
      totalEnquiriesLogged: memoryEnquiries.length,
      directChannels: {
        email: 'aonesrkmedia@gmail.com',
        whatsapp: '+91 8630875579',
      },
    });
  });

  // Get recent enquiries submitted in this environment
  app.get('/api/enquiries', (_req, res) => {
    res.json({
      enquiries: memoryEnquiries.slice().reverse().slice(0, 20),
    });
  });

  // Submit a validated business or creator enquiry
  app.post('/api/enquiries', (req, res) => {
    const { name, company, email, phone, enquiryType, message } = req.body || {};

    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters).';
    }

    if (!company || typeof company !== 'string' || company.trim().length < 2) {
      errors.company = 'Please enter your company, brand, or creator channel name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid business or personal email address.';
    }

    const cleanPhone = typeof phone === 'string' ? phone.replace(/[\s\-()]/g, '') : '';
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.phone = 'Please provide a valid phone or WhatsApp number (7 to 15 digits).';
    }

    if (!enquiryType || typeof enquiryType !== 'string' || enquiryType.trim().length < 2) {
      errors.enquiryType = 'Please select the type of enquiry.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 15) {
      errors.message = 'Please include project details or campaign requirements (minimum 15 characters).';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed. Please review the highlighted fields.',
        errors,
      });
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `SRK-${new Date().getFullYear()}-${randomSuffix}`;
    const newRecord: EnquiryRecord = {
      id: `${Date.now()}-${randomSuffix}`,
      referenceCode,
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      enquiryType: enquiryType.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    memoryEnquiries.push(newRecord);
    saveEnquiries(memoryEnquiries);

    res.status(201).json({
      success: true,
      message: 'Your enquiry has been securely recorded by A ONE SRK MEDIA.',
      enquiry: newRecord,
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`A ONE SRK MEDIA server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
