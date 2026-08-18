# HACKVERSE 2026

## Team Members
1. Roshan Verma – Lead Developer & AI Systems Architect
2. Team Member 2 – Full Stack & Frontend Engineer
3. Team Member 3 – ML & Document Reasoning Specialist
4. Team Member 4 – Cloud & Database Infrastructure Engineer

---

## Project Title
**DocFin — Multimodal Document Intelligence & Extraction Platform**

---

## Problem Statement
Critical information in legal contracts, corporate research reports, financial statements, insurance schedules, and billing invoices remains trapped inside complex, unstructured static documents. Manual review of these multi-page PDFs is tedious, expensive, and prone to human error—frequently overlooking high-risk liability clauses, strict lock-in deadlines, unannounced fee surcharges, and input tax credit offsets.

---

## Proposed Solution
DocFin is an intelligent multimodal document analysis and conversational reasoning platform. It ingests arbitrary PDF documents and scans, normalizes visual coordinate tensors, and leverages **Google Gemini 1.5/2.0 Flash Multimodal Vision AI** to automatically classify document domains, synthesize multi-page data tables into CSVs, flag high-risk liabilities, verify tax calculations (GST/ITC), and power conversational **Retrieval-Augmented Generation (RAG)** with strict page coordinate citations.

---

## Technologies Used
- **Frontend & Framework**: Next.js 16 (Turbopack, App Router), React 19, TypeScript
- **Styling & Design System**: Tailwind CSS v4, Lucide Icons, Plus Jakarta Sans, Newsreader Serif
- **AI & Reasoning Engine**: Google Gemini 1.5/2.0 Flash Multimodal Vision API (`@google/generative-ai`), Conversational RAG Engine
- **Authentication**: Google OAuth 2.0 (`@react-oauth/google`), JWT Session Management
- **Cloud Database & Storage**: Supabase Cloud (`@supabase/supabase-js`), LocalStorage Fallback Cache
- **Data Visualization & Export**: Recharts, Tabular CSV Generator, 1-Click Executive Memo Exporter, Canvas Confetti

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            DOCFIN CLIENT (NEXT.JS 16)                       │
├────────────────────────────────┬────────────────────────────────────────────┤
│ • Document Ingestion & Base64  │ • 3-Zone Workspace UI (Rail, Chat, History)│
│ • Google OAuth 2.0 Auth        │ • Split-View PDF & Citation Inspector     │
└───────────────────────┬────────────────────────────┬────────────────────────┘
                        │                            │
                        ▼                            ▼
┌──────────────────────────────────────┐   ┌──────────────────────────────────┐
│        NEXT.JS API BACKEND           │   │      SUPABASE CLOUD DATABASE     │
├──────────────────────────────────────┤   ├──────────────────────────────────┤
│ • /api/analyze (Multimodal Parsing)  │   │ • User Authentication Profiles   │
│ • /api/chat (Conversational RAG)     │   │ • Document Audit History         │
└───────────────────────┬──────────────┘   └──────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     GOOGLE GEMINI 1.5 / 2.0 FLASH AI                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Multimodal Layout OCR & Spatial Coordinate Grounding                      │
│ • Domain Classifier (Legal, Finance, Insurance, Billing, Reports)           │
│ • Tabular Synthesis (PDF to CSV) & Covenant Risk Radar                      │
│ • Contextual Document-Grounded RAG with Page Citations                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Features
- **Universal Multi-Domain Document Ingestion**: Accurately processes contracts, bank statements, tax invoices, insurance policies, and research briefs up to 50MB.
- **Multimodal AI Extraction (Gemini 1.5 Flash)**: Reads layout coordinate tensors and extracts structured data tables, dates, entities, and risk clauses directly into strict JSON.
- **Conversational RAG Engine**: Chat conversationally with any document with 100% grounded facts and exact page citations.
- **4 Super-Action Intelligence Routines**: 1-click execution for *Analyze Clauses & Risks*, *Executive Summary & Numbers*, *Extract Data Tables to CSV*, and *Audit Fees & Discrepancies*.
- **Collapsible Document History**: Slide-in history sidebar tracking all audited files (`xxx.pdf`) with live search, item deletion, and fast switching.
- **1-Click Executive Memo & CSV Export**: Export comprehensive structured audit reports and spreadsheets instantly.
- **High-Contrast Modern Light/Dark System**: Clean visual hierarchy designed with Impeccable principles.

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/roshanverma/docfin-ai.git
cd docfin-ai

# 2. Install dependencies
npm install
```

---

## How to Run

```bash
# 1. Configure environment variables in .env.local:
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your_google_client_id"
GEMINI_API_KEY="your_gemini_api_key"
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"

# 2. Start the local development server
npm run dev

# 3. Open application in browser
# Navigate to http://localhost:3000
```

---

## Demo
- **Live Application**: [http://localhost:3000](http://localhost:3000)
- **Document Workspace**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Sign In / Registration**: [http://localhost:3000/login](http://localhost:3000/login)

---

## Deployment
Deployed on **Vercel** with continuous deployment from GitHub:
- **Build Engine**: Next.js 16 with Turbopack (`next build`)
- **Runtime**: Node.js 20.x Serverless Functions
- **Hosting Platform**: Vercel Global Edge Network

---

## Screenshots
- **Homepage & Multi-Format Inspector**: High-contrast landing hero with live format switcher (`Contract`, `Report`, `Statement`, `Invoice`).
- **Document Intelligence Workspace**: ChatGPT/Antigravity-style conversational canvas with 4 routine starters and floating prompt bar.
- **Collapsible History Sidebar**: Slide-in ledger showing active and past audited PDF files (`xxx.pdf`).
- **Focused Authentication**: Clean, single-column Google OAuth and Email sign-in modal.

---

## Future Enhancements
- **Cross-Document Comparative Analysis**: Simultaneously cross-reference purchase orders against delivery receipts and multiple vendor invoices.
- **Automated ERP Connectors**: Direct export integrations into enterprise tools like SAP, Oracle, and QuickBooks.
- **On-Premises Hybrid Deployment**: Support for offline air-gapped local LLMs for high-security enterprise environments.
