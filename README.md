# HACKVERSE 2026

### 🏆 Team Information
- **Team Name**: Team SyncX
- **Team ID**: TEAM-086
- **College**: MAHAVEER ENGINEERING COLLEGE
- **City**: Bandlaguda, Hyderabad

---

### 👥 Team Members

1. **Kodi Roshan** – *Team Leader & Lead Systems Architect*
   - **Email**: [roshankodi019@gmail.com](mailto:roshankodi019@gmail.com)
   - **Mobile**: +91 8985797819
   - **Roll Number**: 248P1A0525
   - **Department**: CSE (III - YEAR)

2. **Dhanyasree Gopiwnigari** – *Full Stack & AI/ML Engineer*
   - **Email**: [dhanyasreegopinigari@gmail.com](mailto:dhanyasreegopinigari@gmail.com)
   - **Mobile**: +91 6302097647
   - **Department**: CSE - AI/ML (III - YEAR)

3. **Jatoth Abhishiva** – *ML & Multimodal Reasoning Specialist*
   - **Email**: [jatothabhishiva6@gmail.com](mailto:jatothabhishiva6@gmail.com)
   - **Mobile**: +91 7989866674
   - **Department**: CSE (III - YEAR)

4. **Amuda Sai Bhavani** – *Cloud & Infrastructure Engineer*
   - **Email**: [24xz1a0504trr@gmail.com](mailto:24xz1a0504trr@gmail.com)
   - **Mobile**: +91 6303934161
   - **Department**: CSE (III - YEAR)

---

## Project Title
**DocFin AI — Universal Document-Aware Multimodal Intelligence & Verification Platform**

---

## Problem Statement
Critical data within enterprise organizations remains trapped in complex, unstructured multi-page documents—such as legal agreements, corporate research reports, financial statements, insurance policies, and billing invoices. Manual audit of these files is tedious, expensive, and prone to human error, frequently missing high-risk liability clauses, strict lock-in renewal deadlines, fee surcharges, and input tax credit offsets. Traditional OCR tools fail because they lack semantic comprehension and spatial coordinate awareness.

---

## Proposed Solution
**DocFin AI** is an intelligent, universal document-aware multimodal reasoning platform. It pairs a clean, ChatGPT-style conversational assistant with deep document intelligence. Users can chat freely on any topic or attach arbitrary documents (PDFs, spreadsheets, contracts, invoices) via drag-and-drop or the **+** button. 

Powered by **Google Gemini 1.5/2.0 Flash Multimodal Vision AI**, **Qdrant Vector Database**, and **Upstash Redis**, DocFin automatically detects document domains, synthesizes multi-page tables into downloadable CSVs, highlights critical risk covenants, audits tax/fee calculations, and provides grounded conversational Q&A with verifiable page coordinate citations.

---

## Technologies Used
- **Frontend & Framework**: Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling & Design System**: Tailwind CSS v4, Lucide Icons, Plus Jakarta Sans, Newsreader Serif
- **AI & Reasoning Engine**: Google Gemini 1.5 / 2.0 Flash Multimodal Vision API (`@google/generative-ai`)
- **Vector Database**: Qdrant Vector Cloud (Dense Embedding Indexing & Hybrid Spatial RAG)
- **High-Speed Cache**: Upstash Redis (Sub-millisecond query & payload caching)
- **Database & Storage**: Supabase (PostgreSQL with Row-Level Security)
- **Containerization & Deployment**: Docker (Multi-stage standalone build $<150\text{MB}$), Docker Compose
- **APIs & Protocols**: REST API (`/api/analyze`, `/api/chat`, `/api/compare`, `/api/health`)

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            DOCFIN CLIENT (NEXT.JS 16)                       │
├────────────────────────────────┬────────────────────────────────────────────┤
│ • Universal AI Assistant Canvas│ • Split-View PDF & Citation Inspector     │
│ • Drag-and-Drop Multi-File Bar │ • Slide-in Document Audit History Sidebar  │
└───────────────────────┬────────────────────────────┬────────────────────────┘
                        │                            │
                        ▼                            ▼
┌──────────────────────────────────────┐   ┌──────────────────────────────────┐
│        NEXT.JS API BACKEND           │   │      SUPABASE & UPSTASH CACHE    │
├──────────────────────────────────────┤   ├──────────────────────────────────┤
│ • /api/analyze (Multimodal Parsing)  │   │ • User Auth & Document Storage   │
│ • /api/chat (Conversational RAG)     │   │ • Sub-millisecond Query Caching  │
│ • /api/compare & /api/health         │   │ • Qdrant Dense Vector Embeddings │
└───────────────────────┬──────────────┘   └──────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     GOOGLE GEMINI 1.5 / 2.0 FLASH AI                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Multimodal Layout OCR & Spatial Coordinate Grounding                      │
│ • Domain Classifier (Legal, Finance, Academic, Invoicing, General)          │
│ • Tabular Synthesis (PDF to CSV) & High-Risk Liability Auditing             │
│ • Contextual Document-Grounded RAG with Exact Page Citations                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Features
- **Universal Conversational AI Assistant**: Operates as a full-featured general AI assistant for coding, writing, and problem-solving, with seamless document attachment capabilities.
- **Multimodal Document Understanding (Gemini 2.0 Flash)**: Parses visual coordinate tensors, structural layout, and qualitative content up to 50MB.
- **Strict Spatial Coordinate Grounding**: Every insight and AI answer is verified with exact page numbers and clickable source excerpt drawers.
- **Domain-Aware Intelligence**: Adapts analysis based on document type (Legal risks, Financial ratios, Academic methodologies, Invoicing tax credits) without rigid hardcoded templates.
- **Multi-Page Table Extraction**: Automatically identifies and exports complex document tables directly to structured CSV format.
- **Collapsible Audit History & Split-View Canvas**: Slide-in drawer to switch between audited files, with side-by-side PDF preview and JSON inspection.
- **Enterprise Security & Health Telemetry**: Security-hardened HTTP headers (HSTS, CSP, X-Frame-Options), Next.js standalone Docker runner, and real-time `/api/health` monitoring.

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX.git
cd HV2026-0086_TeamSyncX

# 2. Install dependencies
npm install
```

---

## How to Run

### Local Development:
```bash
# Configure environment variables (.env.local)
cp .env.example .env.local

# Run the development server with Turbopack
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Test Suite:
```bash
# Run automated typecheck, linting, and 15-point universal pipeline verification
npm test

# Build optimized production bundle
npm run build

# Start production server
npm start
```

### Docker Container Deployment:
```bash
# Build and run standalone container via Docker Compose
docker compose up --build -d
```

---

## Demo
- **Live Demo**: [https://hv-2026-0086-team-sync-x.vercel.app](https://hv-2026-0086-team-sync-x.vercel.app)
- **Live AI Workspace**: [https://hv-2026-0086-team-sync-x.vercel.app/dashboard](https://hv-2026-0086-team-sync-x.vercel.app/dashboard)
- **Live Health Telemetry**: [https://hv-2026-0086-team-sync-x.vercel.app/api/health](https://hv-2026-0086-team-sync-x.vercel.app/api/health)
- **GitHub Repository**: [https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX](https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX)
- **Demo Video**: [Add URL / Presentation Link]

---

## Deployment
- **Containerization**: Security-hardened multi-stage Docker build running on unprivileged `nextjs` user with Alpine Node 20 ($<150\text{MB}$ image size).
- **Edge Deployment**: Next.js App Router optimized for serverless edge deployment on **Vercel**, **AWS ECS/Fargate**, **Google Cloud Run**, or **Kubernetes**.
- **CI/CD**: Automated GitHub Actions testing pipeline validating TypeScript, ESLint, domain-aware pipeline tests, and build artifacts on every commit.

---

## Screenshots
- **Universal Assistant Canvas**: Clean ChatGPT/Claude-style conversational workspace with prompt starter chips and floating multi-file upload bar.
- **Multimodal Document Intelligence**: Split-screen PDF preview with verified page coordinate citations and source excerpt drawer.
- **Structured Data & CSV Export**: Extracted data tables with 1-click CSV download and JSON schema inspection.
- **System Health Monitor**: Real-time memory metrics (`rssMb`, `heapUsedMb`), uptime, and latency benchmarks for Gemini, Supabase, Redis, and Qdrant.

---

## Future Enhancements
- **Cross-Document Comparative Differential Engine**: Cross-examine contracts against amendments, or invoices against purchase orders and bank statements in a unified matrix.
- **Enterprise ERP & Accounting Connectors**: Direct two-way sync integrations with SAP, Oracle NetSuite, QuickBooks, and Salesforce.
- **Air-Gapped Hybrid On-Premise LLMs**: Support for local Ollama / vLLM execution in high-security air-gapped financial environments.
