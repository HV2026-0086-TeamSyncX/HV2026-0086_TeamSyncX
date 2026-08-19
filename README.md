# DocFin AI — Universal Document Intelligence Studio

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_Flash-4285F4?style=for-the-badge&logo=google)
![Qdrant](https://img.shields.io/badge/Qdrant-Vector_DB-DC2626?style=for-the-badge&logo=qdrant)

**A multimodal document reasoning engine and conversational workspace for high-stakes financial, legal, and operational analysis.**

[Live Demo](https://hv-2026-0086-team-sync-x.vercel.app) • [Workspace Studio](https://hv-2026-0086-team-sync-x.vercel.app/dashboard) • [GitHub Repository](https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX)

</div>

---

## 🏆 Hackathon & Team

- **Event**: HACKVERSE 2026
- **Team**: Team SyncX (TEAM-086)
- **Institution**: Mahaveer Engineering College, Bandlaguda, Hyderabad

| Member | Role | Department |
| :--- | :--- | :--- |
| **Kodi Roshan** | Team Leader & Systems Architect | CSE (III-Year) |
| **Dhanyasree Gopinigari** | Full Stack & AI Engineer | CSE - AI/ML (III-Year) |
| **Jatoth Abhishiva** | ML & Multimodal Reasoning | CSE (III-Year) |
| **Amuda Sai Bhavani** | Cloud & Infrastructure | CSE (III-Year) |

---

## ✨ Key Features

- 📄 **Multimodal Document Reasoning**: Ingest PDFs, financial statements, receipts, contracts, and spreadsheets with Google Gemini 2.0 Flash.
- 🎯 **Spatial Coordinate Grounding**: Every answer, liability clause, and extracted number is tied to exact page-coordinate citations.
- 📊 **Table Matrix Extraction**: Extracts dense multi-column static PDF tables directly into structured, downloadable CSV matrices.
- ⚖️ **6-Domain Document Intelligence**: Automatic domain classification and risk audits across **Legal**, **Finance**, **Academic Research**, **Billing & Tax**, **Insurance**, and **General** files.
- 💬 **Conversational AI Workspace**: Chat with documents, draft dispute letters, generate lease counter-clauses, and inspect visual data charts.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Recharts
- **AI Core**: Google Gemini 2.0 Flash (`@google/generative-ai`)
- **Vector Search & Cache**: Qdrant Cloud Vector Database, Upstash Redis
- **Database & Auth**: Supabase PostgreSQL
- **Deployment**: Vercel Edge Network

---

## 🚀 Quick Start & Setup

### 1. Clone & Install
```bash
git clone https://github.com/HV2026-0086-TeamSyncX/HV2026-0086_TeamSyncX.git
cd HV2026-0086_TeamSyncX
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google Gemini API Key (Required)
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Supabase (Optional for local testing)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Upstash Redis & Qdrant (Optional)
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here
QDRANT_URL=https://your-cluster-id.qdrant.tech:6333
QDRANT_API_KEY=your_qdrant_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Automated Testing

Run the end-to-end verification suite (TypeScript compiler, ESLint, and 15-point Universal Pipeline integration tests):

```bash
npm test
```

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 📄 License

Distributed under the **MIT License**.

<div align="center">

**Developed with ❤️ by Team SyncX for HACKVERSE 2026**

</div>
