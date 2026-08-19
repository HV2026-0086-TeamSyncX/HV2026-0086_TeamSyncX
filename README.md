# DocFin AI — Universal Multimodal Document Intelligence & Verification Studio

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)
![TypeScript 5](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Google Gemini 2.0](https://img.shields.io/badge/Google_Gemini-2.0_Flash-4285F4?style=for-the-badge&logo=google)
![Qdrant Vector Cloud](https://img.shields.io/badge/Qdrant-Vector_DB-DC2626?style=for-the-badge&logo=qdrant)
![Upstash Redis](https://img.shields.io/badge/Upstash-Redis_Cache-00E599?style=for-the-badge&logo=redis)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

**Universal Document-Aware AI Assistant & Spatial Grounding Studio for High-Stakes Financial, Legal, and Technical Analysis.**

[Live Demo](https://hv-2026-0086-team-sync-x.vercel.app) • [Workspace Studio](https://hv-2026-0086-team-sync-x.vercel.app/dashboard) • [Health Telemetry](https://hv-2026-0086-team-sync-x.vercel.app/api/health) • [GitHub Repository](https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX)

</div>

---

## 🏆 Hackathon Information

- **Event**: HACKVERSE 2026
- **Team Name**: Team SyncX
- **Team ID**: TEAM-086
- **Institution**: Mahaveer Engineering College
- **Location**: Bandlaguda, Hyderabad, Telangana, India

### 👥 Team SyncX Members

| Member | Role | Department | Contact |
| :--- | :--- | :--- | :--- |
| **Kodi Roshan** | Team Leader & Lead Systems Architect | CSE (III-Year) | [roshankodi019@gmail.com](mailto:roshankodi019@gmail.com) • +91 8985797819 |
| **Dhanyasree Gopinigari** | Full Stack & AI/ML Engineer | CSE - AI/ML (III-Year) | [dhanyasreegopinigari@gmail.com](mailto:dhanyasreegopinigari@gmail.com) • +91 6302097647 |
| **Jatoth Abhishiva** | ML & Multimodal Reasoning Specialist | CSE (III-Year) | [jatothabhishiva6@gmail.com](mailto:jatothabhishiva6@gmail.com) • +91 7989866674 |
| **Amuda Sai Bhavani** | Cloud & Infrastructure Engineer | CSE (III-Year) | [24xz1a0504trr@gmail.com](mailto:24xz1a0504trr@gmail.com) • +91 6303934161 |

---

## 📌 Problem Statement

Critical business and institutional intelligence remains trapped in dense, unstructured multi-page documents—such as commercial tenancy leases, multi-account bank statements, complex academic research papers, corporate tax invoices, and insurance schedules. 

Manual human audit of these files is tedious, expensive, and prone to severe oversights:
1. **Silent Capital Leakage**: Missed deposit forfeiture clauses, unannounced bank fee surcharges, and lost GSTR-3B tax credits.
2. **Tedious Data Transcribing**: Hours lost re-typing static PDF balance sheets and multi-column tables into spreadsheets.
3. **Legal & Compliance Traps**: Non-standard indemnity liabilities, uncapped risks, and strict renewal notice deadlines.
4. **OCR Limitations**: Traditional text extractors strip layout hierarchy, destroying spatial awareness and tabular relationships.

---

## 💡 The DocFin AI Solution

**DocFin AI** is an intelligent, universal document-aware multimodal reasoning studio. It combines a conversational AI workspace with deep multimodal document intelligence powered by **Google Gemini 2.0 Flash**, **Qdrant Vector Database**, **Upstash Redis**, and **Supabase PostgreSQL**.

- **Chat Freely or Ingest Anything**: Use as a general assistant or drag-and-drop 500+ page PDFs, high-res scans, receipts, spreadsheets, or audio/video files.
- **Zero Hallucination Spatial Grounding**: Every extraction, liability alert, and quantitative figure is linked to exact `[x,y]` page-coordinate bounding boxes.
- **6 Specialized Domain Lenses**: Automatic domain classification across Legal, Finance, Academic Research, Invoicing & Tax, Insurance, and Technical files.
- **Instant Table Matrix Extraction**: Extracts multi-column PDF tables directly into downloadable CSV format.
- **Actionable AI Remedies**: Automatically drafts dispute letters, pro-rata lease redlines, and input tax credit reconciliations.

---

## 🛠️ Complete Tech Stack & Dependencies

### Frontend & UI Architecture
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.1` (App Router, Turbopack) | High-performance React framework with server components and edge rendering |
| **React & React DOM** | `19.2.8` | Concurrent UI rendering and state primitives |
| **TypeScript** | `^5.0.0` | End-to-end type safety, strict interfaces, and zero runtime type errors |
| **Tailwind CSS** | `^4.0.0` | Modern utility styling with custom design system tokens and glassmorphism |
| **Lucide React** | `^1.31.0` | High-precision vector iconography |
| **Recharts** | `^3.10.1` | Responsive data visualization and cash-flow breakdown charts |
| **Canvas Confetti** | `^1.9.4` | Delightful micro-interaction feedback on export and completion |

### AI, Machine Learning & Document Pipeline
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **@google/generative-ai** | `^0.24.1` | Google Gemini 2.0 Flash & Gemini 1.5 Flash multimodal vision & reasoning |
| **pdf-parse** | `^2.4.5` | Server-side PDF structural deconstruction and text stream extraction |
| **Spatial Coordinate Grounder** | Custom Engine | Maps extracted terms to exact page coordinates `[x1, y1, x2, y2]` |

### Storage, Caching & Databases
| Technology | Purpose |
| :--- | :--- |
| **Qdrant Vector Cloud** | High-dimensional dense vector embeddings & spatial hybrid RAG |
| **Upstash Redis** | Sub-millisecond query caching, session rate-limiting & document memoization |
| **Supabase (PostgreSQL)** | Relational document metadata, user authentication, and Row-Level Security (RLS) |

### Infrastructure & DevOps
| Technology | Purpose |
| :--- | :--- |
| **Docker & Docker Compose** | Multi-stage standalone Alpine container build ($<150\text{MB}$) |
| **Vercel Edge Network** | Global edge serverless deployment with automated CI/CD triggers |
| **ESLint & Node Test Runner** | Automated linting and 15-point universal pipeline test suite |

---

## 🏛️ System Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                            DOCFIN AI CLIENT (NEXT.JS 16)                         │
├─────────────────────────────────────┬────────────────────────────────────────────┤
│ • Universal AI Assistant Canvas     │ • Split-View PDF & Citation Inspector      │
│ • Drag-and-Drop Multi-File Capsule  │ • Slide-in Library History Drawer          │
│ • Interactive Studio Playground     │ • 6-Domain Extraction & Risk Matrix        │
└──────────────────────────┬───────────────────────────┬───────────────────────────┘
                           │                           │
                           ▼                           ▼
┌──────────────────────────────────────────┐   ┌───────────────────────────────────┐
│           NEXT.JS API BACKEND            │   │      SUPABASE & UPSTASH CACHE     │
├──────────────────────────────────────────┤   ├───────────────────────────────────┤
│ • /api/analyze (Multimodal OCR & Layout) │   │ • Supabase PostgreSQL (Auth & DB)│
│ • /api/chat (Conversational Spatial RAG) │   │ • Upstash Redis (Sub-ms Cache)    │
│ • /api/compare (Differential Auditing)   │   │ • Qdrant Dense Vector Embeddings  │
│ • /api/health (Telemetry & Benchmarks)   │   │ • LocalStorage Fallback Support   │
└──────────────────────────┬───────────────┘   └───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                         GOOGLE GEMINI 2.0 FLASH AI CORE                          │
├──────────────────────────────────────────────────────────────────────────────────┤
│ • Multimodal Layout OCR & Spatial Coordinate Bounding Box Tensors                │
│ • Domain Classifier (Legal, Finance, Academic, Billing, Insurance, General)      │
│ • Multi-Page Tabular Synthesis (PDF to Clean CSV Matrix)                         │
│ • Contextual Document-Grounded RAG with Page-Specific Verification               │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Prerequisites & Software Requirements

Before setting up the project locally, ensure you have the following installed:

- **Node.js**: `v20.10.0` or higher (Recommended: Node `v22.x LTS`)
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`
- **Git**: `v2.40+`
- **Docker** *(Optional)*: Docker Desktop / Docker Engine `v24+` with Docker Compose

---

## 🚀 Step-by-Step Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX.git
cd HV2026-0086_TeamSyncX
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory by copying the example template:

```bash
cp .env.example .env.local
```

Open `.env.local` and populate the credentials:

```env
# ==============================================================================
# DocFin AI — Environment Configuration
# ==============================================================================

# 1. APPLICATION
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# 2. GOOGLE GEMINI AI (Required for Multimodal Vision & Embeddings)
# Obtain from Google AI Studio: https://aistudio.google.com/
GEMINI_API_KEY=your_google_gemini_api_key_here
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key_here

# 3. SUPABASE POSTGRESQL (Authentication & Persistent Documents)
# Obtain from Supabase Console -> Project Settings -> API: https://supabase.com/
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# 4. UPSTASH REDIS (High-Speed Multimodal Query Caching)
# Obtain from Upstash Console: https://console.upstash.com/
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here

# 5. QDRANT VECTOR CLOUD (Spatial Coordinates & Dense Vector Search)
# Obtain from Qdrant Cloud Console: https://cloud.qdrant.io/
QDRANT_URL=https://your-cluster-id.qdrant.tech:6333
QDRANT_API_KEY=your_qdrant_api_key_here

# 6. GOOGLE OAUTH (Optional Client Sign-In)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

---

## 💻 Running the Application

### Start Development Server
Run the local Next.js development server powered by Turbopack:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Run Automated Validation Test Suite
DocFin includes a comprehensive automated test suite that verifies TypeScript type safety, ESLint compliance, and 15 domain-aware Universal Pipeline integration tests:

```bash
npm test
```

**What the test runner verifies:**
- ✅ TypeScript compilation with 0 type errors (`npx tsc --noEmit`)
- ✅ Universal Pipeline Domain Classification (Legal, Finance, Research, Billing, Insurance)
- ✅ Spatial Coordinate Grounding & Bounding Box extraction
- ✅ Structured Multi-Page Table extraction
- ✅ Liability Risk Radar & Counter-Clause synthesis
- ✅ Next.js 16 Turbopack production compilation (14 routes)

---

### Production Build & Launch
```bash
# Build optimized standalone production bundle
npm run build

# Start production server
npm start
```

---

## 🐳 Docker Deployment

DocFin includes a security-hardened multi-stage Docker build running on unprivileged `nextjs` user with Alpine Linux:

```bash
# Build and launch standalone container
docker compose up --build -d

# View real-time container logs
docker compose logs -f

# Stop container
docker compose down
```

The application will be accessible at `http://localhost:3000`.

---

## 📂 Project Directory Structure

```
docfin-ai/
├── src/
│   ├── app/                               # Next.js 16 App Router Routes
│   │   ├── api/
│   │   │   ├── analyze/route.ts           # Multimodal OCR & Document Deconstruction
│   │   │   ├── chat/route.ts              # Conversational Spatial RAG & Citations
│   │   │   ├── compare/route.ts           # Multi-Document Differential Analysis
│   │   │   ├── documents/route.ts         # Document CRUD & Metadata Persistence
│   │   │   └── health/route.ts            # System Health & Telemetry Benchmark
│   │   ├── dashboard/page.tsx             # Main AI Conversational Workspace & Canvas
│   │   ├── login/page.tsx                 # Secure Authentication Portal
│   │   ├── signup/page.tsx                # Account Registration
│   │   ├── globals.css                    # Design Tokens, Studio Grid & Glassmorphism
│   │   ├── layout.tsx                     # Root Layout & Theme Providers
│   │   └── page.tsx                       # Landing Page & Studio Showcase
│   ├── components/
│   │   ├── auth/                          # Authentication Cards & Input Elements
│   │   ├── landing/                       # Google AI Studio-Inspired Landing Modules
│   │   │   ├── Navbar.tsx                 # Glass Navigation Header
│   │   │   ├── HeroSection.tsx            # Interactive Studio Hero & Playground
│   │   │   ├── StudioBentoGrid.tsx        # 1M Token Context & Persona Bento Matrix
│   │   │   ├── WhyWhatWhereSection.tsx    # Aesthetic Manifesto (What, Why, Where)
│   │   │   ├── FinalCtaSection.tsx        # Studio Launch CTA
│   │   │   └── Footer.tsx                 # Institutional Links & Taxonomy
│   │   ├── layout/                        # App Layout (Header, Left/Right Sidebars)
│   │   ├── ui/                            # Reusable Glass Panels, Buttons & Modals
│   │   └── workspace/                     # Split Preview, PromptBar, Tables & Tabs
│   └── lib/                               # Core Business Logic & Connectors
│       ├── gemini.ts                      # Google Gemini 2.0 Flash Client
│       ├── qdrant.ts                      # Qdrant Vector Cloud Engine
│       ├── redis.ts                       # Upstash Redis Sub-millisecond Cache
│       ├── supabase.ts                    # Supabase Client & RLS Policies
│       ├── universal-pipeline.ts          # 6-Domain Multimodal Extraction Pipeline
│       └── types.ts                       # Complete TypeScript Interfaces
├── scripts/
│   ├── test-runner.mjs                    # Automated Test Harness
│   └── test-universal-pipeline.mjs        # 15-Point Universal Pipeline Integration Tests
├── public/                                # Static Assets, Vector Logos & Demo Files
├── Dockerfile                             # Multi-stage Standalone Docker Build
├── docker-compose.yml                     # Docker Compose Orchestration
├── next.config.ts                         # Next.js & Turbopack Configuration
├── tsconfig.json                          # TypeScript Strict Configuration
└── package.json                           # Project Metadata & Dependencies
```

---

## 📡 REST API Reference

### 1. Document Analysis (`POST /api/analyze`)
Ingests PDFs, images, spreadsheets, and contracts; returns domain classification, spatial coordinates, extracted tables, and risk clauses.

**Request Body (`multipart/form-data`):**
- `file`: Document binary (PDF, PNG, JPG, CSV, etc.)
- `domain`: Optional domain override (`legal` | `finance` | `academic` | `billing` | `insurance` | `general`)

---

### 2. Conversational Spatial RAG (`POST /api/chat`)
Executes document-grounded reasoning with exact page bounding boxes.

**Request Body (`application/json`):**
```json
{
  "message": "What is the penalty if I terminate the commercial lease early?",
  "documentId": "doc_1787086245",
  "history": []
}
```

**Response (`application/json`):**
```json
{
  "response": "Under Clause 5.2 (Page 1), early termination without 90 days notice results in complete forfeiture of the ₹2,00,000 security deposit.",
  "citations": [
    {
      "pageNumber": 1,
      "exactQuote": "Clause 5.2: In the event of early termination...",
      "boundingBox": [124, 48, 380, 92],
      "confidence": 0.994
    }
  ]
}
```

---

### 3. Health & Telemetry Benchmark (`GET /api/health`)
Provides real-time uptime, memory allocation, and connection latency for Gemini, Supabase, Redis, and Qdrant.

```json
{
  "status": "healthy",
  "version": "2.0.0",
  "timestamp": "2026-08-19T08:14:00Z",
  "memory": {
    "rssMb": 84.2,
    "heapUsedMb": 46.8
  },
  "services": {
    "gemini": "connected",
    "supabase": "connected",
    "redis": "connected",
    "qdrant": "connected"
  }
}
```

---

## 🔒 Security & Privacy Standards

- **Zero Data Retention**: Document text and visual tensors are processed in ephemeral memory and never used for foundation model training.
- **Enterprise HTTP Security Headers**: Configured with strict HSTS, Content-Security-Policy (CSP), `X-Frame-Options: DENY`, and `X-Content-Type-Options: nosniff`.
- **Row-Level Security (RLS)**: User documents in Supabase are isolated with cryptographic user ID policies.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Developed with ❤️ by Team SyncX for HACKVERSE 2026**

</div>
