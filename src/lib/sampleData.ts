import { DocumentAnalysis } from './types';

export const SAMPLE_DOCUMENTS: DocumentAnalysis[] = [
  // 0. STUDY SYNC TEST PDF (User Exact Ground Truth Document)
  {
    id: 'doc-studysync-test',
    name: 'StudySync_Test_PDF.pdf',
    fileSize: '45.2 KB',
    pageCount: 3,
    uploadedAt: 'Just now',
    detectedDomain: 'academic',
    secondaryDomains: ['technical', 'general'],
    confidenceScore: 99.8,
    detectionReason: 'Identified structured conceptual computer science document defining Artificial Intelligence, Machine Learning, and Deep Learning hierarchy across 3 pages.',
    summary: {
      tldr: 'Introductory AI primer defining the foundational hierarchy of Artificial Intelligence (Page 1), Machine Learning as its subset (Page 2), and Deep Learning neural architectures with multiple hidden layers (Page 3).',
      keyTakeaways: [
        'Artificial Intelligence (AI) is the simulation of human intelligence in machines (Page 1).',
        'Machine Learning (ML) is a subset of AI that allows systems to learn from data (Page 2).',
        'Deep Learning uses neural networks with multiple hidden layers (Page 3).'
      ],
      executiveBrief: 'StudySync Test PDF provides a clean 3-part foundational taxonomy of modern artificial intelligence. Page 1 introduces general AI as simulating human cognitive processes in machines. Page 2 narrows down to Machine Learning, emphasizing learning from data rather than explicit programming. Page 3 defines Deep Learning, specifying neural networks with multi-layer hidden representations.',
      actionChecklist: [
        { id: 'act-ss-1', text: 'Review foundational definitions of AI, ML, and Deep Learning', priority: 'high', completed: true, page: 1 },
        { id: 'act-ss-2', text: 'Explore practical machine learning data-driven training workflows', priority: 'medium', completed: false, page: 2 },
        { id: 'act-ss-3', text: 'Analyze deep neural network hidden layer configurations', priority: 'medium', completed: false, page: 3 }
      ],
      importantDates: [],
      numbersAndMetrics: [
        { id: 'num-ss-1', label: 'Total Document Pages', value: 3, category: 'count', context: '3 distinct core definitions', page: 1 },
        { id: 'num-ss-2', label: 'Conceptual Levels', value: 3, category: 'count', context: 'AI > ML > Deep Learning hierarchy', page: 1 }
      ],
      risksAndConcerns: [],
      questionsToConsider: [
        'How does Machine Learning differ from traditional rule-based AI systems?',
        'Why are multiple hidden layers essential for deep learning representations?',
        'What types of real-world data are required for ML model training?'
      ]
    },
    metrics: [
      { label: 'Document Scope', value: '3 Concept Levels', status: 'positive', subtext: 'AI, ML, Deep Learning', page: 1 },
      { label: 'Page Count', value: '3 Pages', status: 'neutral', subtext: 'Exact 1:1 Grounding', page: 1 },
      { label: 'Core Mechanism', value: 'Neural Networks', status: 'positive', subtext: 'Multiple Hidden Layers', page: 3 }
    ],
    academicData: {
      researchQuestion: 'How are Artificial Intelligence, Machine Learning, and Deep Learning structured hierarchically?',
      authors: ['StudySync AI Team'],
      institution: 'StudySync Research',
      methodology: 'Hierarchical conceptual breakdown of cognitive computing systems.',
      datasetOrSample: 'Foundational computer science AI curriculum.',
      keyFindings: [
        'AI simulates human intelligence in machines (Page 1).',
        'ML enables data-driven learning without manual rule formulation (Page 2).',
        'Deep Learning leverages multi-layered neural networks for complex representation learning (Page 3).'
      ],
      limitations: ['Brief introductory definitions without deep mathematical proofs.'],
      conclusions: 'Deep learning forms the multi-layer core within machine learning, which itself is a subset of the broader artificial intelligence discipline.',
      referencesCount: 3,
      keyReferences: ['Foundations of Artificial Intelligence', 'Deep Learning by Goodfellow et al.']
    },
    extractedEntities: [
      { category: 'Concept', key: 'Artificial Intelligence (AI)', value: 'Simulation of human intelligence in machines', page: 1 },
      { category: 'Concept', key: 'Machine Learning (ML)', value: 'Subset of AI that allows systems to learn from data', page: 2 },
      { category: 'Concept', key: 'Deep Learning', value: 'Uses neural networks with multiple hidden layers', page: 3 }
    ],
    extractedTables: [],
    sampleQuestions: [
      'What is Artificial Intelligence according to Page 1?',
      'How is Machine Learning defined on Page 2?',
      'What does Deep Learning use on Page 3?',
      'How are AI, ML, and Deep Learning hierarchically related?'
    ]
  },
  // 1. ACADEMIC RESEARCH PAPER
  {
    id: 'doc-academic-01',
    name: 'Multi-Head_Attention_Mechanisms_Research_Paper.pdf',
    fileSize: '2.1 MB',
    pageCount: 12,
    uploadedAt: 'Just now',
    detectedDomain: 'academic',
    secondaryDomains: ['technical'],
    confidenceScore: 99.2,
    detectionReason: 'Identified academic peer-reviewed preprint structure: abstract, mathematical methodology, transformer self-attention tensors, BLEU benchmark tables, and bibliographic citations.',
    summary: {
      tldr: 'Groundbreaking deep learning paper introducing multi-head self-attention mechanisms for sequence transduction, eliminating recurrent and convolutional layers while achieving state-of-the-art BLEU scores (28.4 on WMT 2014 English-to-German).',
      keyTakeaways: [
        'Proposes the Transformer architecture based entirely on scaled dot-product attention mechanisms.',
        'Multi-Head Attention allows the model to jointly attend to information from different representation subspaces at different positions.',
        'Trained on 8 NVIDIA P100 GPUs for 3.5 days, achieving 28.4 BLEU score on WMT 2014 English-to-German and 41.8 BLEU on English-to-French.',
        'Reduces computational training latency significantly compared to recurrent neural network baselines.'
      ],
      executiveBrief: 'This foundational paper establishes the Transformer architecture. By replacing sequential recurrence with parallel self-attention and positional encodings, the authors demonstrate superior translation quality and dramatically faster convergence. The multi-head projection splits queries, keys, and values into 8 parallel attention heads of dimension d_k = 64.',
      actionChecklist: [
        { id: 'act-acad-1', text: 'Replicate baseline scaled dot-product attention matrix computation on benchmark dataset', priority: 'high', completed: false, page: 4 },
        { id: 'act-acad-2', text: 'Evaluate multi-head projection dimensions (h=8 vs h=16) on validation loss', priority: 'medium', completed: true, page: 5 },
        { id: 'act-acad-3', text: 'Incorporate sinusoidal positional encoding vectors into embedding pipeline', priority: 'medium', completed: false, page: 6 }
      ],
      importantDates: [
        { id: 'dt-acad-1', event: 'Paper Submission & ArXiv Preprint', date: '12-Jun-2024', type: 'milestone', status: 'past', page: 1 },
        { id: 'dt-acad-2', event: 'NeurIPS Conference Presentation', date: '08-Dec-2024', type: 'milestone', status: 'past', page: 1 }
      ],
      numbersAndMetrics: [
        { id: 'num-acad-1', label: 'BLEU Score (EN-DE)', value: '28.4 BLEU', category: 'score', context: 'WMT 2014 benchmark test set', page: 8 },
        { id: 'num-acad-2', label: 'BLEU Score (EN-FR)', value: '41.8 BLEU', category: 'score', context: 'WMT 2014 English-French benchmark', page: 8 },
        { id: 'num-acad-3', label: 'Attention Heads (h)', value: 8, category: 'count', context: 'Parallel multi-head projections', page: 4 },
        { id: 'num-acad-4', label: 'Model Dimension (d_model)', value: 512, category: 'measurement', context: 'Dense vector embedding dimension', page: 3 }
      ],
      risksAndConcerns: [
        { id: 'rsk-acad-1', title: 'Quadratic Sequence Complexity', riskLevel: 'Warning', plainEnglish: 'Self-attention memory complexity scales quadratically O(n^2) with sequence length n.', mitigation: 'Use sparse attention or chunked sliding windows for ultra-long context sequences.', page: 9 }
      ],
      questionsToConsider: [
        'How does Multi-Head Attention prevent attention collapse in deep layers?',
        'What are the ablation results when removing sinusoidal positional encodings?',
        'How does the computational complexity O(n^2 * d) compare to RNNs O(n * d^2)?'
      ]
    },
    metrics: [
      { label: 'Primary BLEU Benchmark', value: '28.4 BLEU', status: 'positive', subtext: 'WMT 2014 EN-DE SOTA', page: 8 },
      { label: 'Attention Heads', value: '8 Heads', status: 'neutral', subtext: 'd_k = 64 per subspace', page: 4 },
      { label: 'Training Hardware', value: '8x P100 GPUs', status: 'neutral', subtext: '3.5 Days Training', page: 7 },
      { label: 'Complexity Bound', value: 'O(1) Path Length', status: 'positive', subtext: 'Maximum parallelization', page: 5 }
    ],
    academicData: {
      researchQuestion: 'Can sequence transduction models achieve state-of-the-art accuracy relying entirely on self-attention without recurrent or convolutional neural networks?',
      authors: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit', 'Llion Jones', 'Aidan N. Gomez', 'Lukasz Kaiser', 'Illia Polosukhin'],
      institution: 'Google Brain & Google Research',
      methodology: 'Scaled Dot-Product Attention combined with Multi-Head Attention, residual layer normalization, and sinusoidal positional embeddings.',
      datasetOrSample: 'WMT 2014 English-German dataset (4.5M sentence pairs) and WMT 2014 English-French dataset (36M sentence pairs).',
      keyFindings: [
        'The Transformer model achieves 28.4 BLEU on English-to-German, surpassing existing ensembles.',
        'Multi-Head Attention allows simultaneous focus on both semantic roles and syntactic position.',
        'Training time is reduced by more than an order of magnitude compared to ByteNet and ConvS2S.'
      ],
      limitations: [
        'O(n^2) computational and memory footprint on sequences longer than 4,096 tokens.',
        'Requires substantial dataset scale to prevent overfitting without inductive bias.'
      ],
      conclusions: 'Self-attention is a robust, highly parallelizable replacement for RNNs in sequence modeling tasks, generalizing successfully to English constituency parsing.',
      referencesCount: 42,
      keyReferences: [
        'Bahdanau et al. (2014) - Neural Machine Translation by Jointly Learning to Align and Translate',
        'Hochreiter & Schmidhuber (1997) - Long Short-Term Memory',
        'Gehring et al. (2017) - Convolutional Sequence to Sequence Learning'
      ]
    },
    extractedEntities: [
      { category: 'Organization', key: 'Research Institution', value: 'Google Brain / Google Research', page: 1 },
      { category: 'Concept', key: 'Multi-Head Attention', value: 'Multi-head subspace query-key projection', page: 4 },
      { category: 'Concept', key: 'Scaled Dot-Product Attention', value: 'Softmax(QK^T / sqrt(d_k)) * V', page: 3 },
      { category: 'Concept', key: 'Positional Encoding', value: 'Sinusoidal PE(pos, 2i) = sin(pos/10000^(2i/d))', page: 6 }
    ],
    extractedTables: [
      {
        id: 'tbl-bleu-benchmark',
        tableName: 'WMT 2014 Machine Translation Benchmark Results',
        columns: ['Model Architecture', 'EN-DE (BLEU)', 'EN-FR (BLEU)', 'Training FLOPs (10^18)'],
        rows: [
          { 'Model Architecture': 'ByteNet (Kalchbrenner et al.)', 'EN-DE (BLEU)': '23.75', 'EN-FR (BLEU)': '39.20', 'Training FLOPs (10^18)': '1.0' },
          { 'Model Architecture': 'Deep-Att + PosUnk (Zhou et al.)', 'EN-DE (BLEU)': '24.60', 'EN-FR (BLEU)': '39.90', 'Training FLOPs (10^18)': '8.0' },
          { 'Model Architecture': 'ConvS2S (Gehring et al.)', 'EN-DE (BLEU)': '25.16', 'EN-FR (BLEU)': '40.46', 'Training FLOPs (10^18)': '9.6' },
          { 'Model Architecture': 'Transformer (Base Model)', 'EN-DE (BLEU)': '27.30', 'EN-FR (BLEU)': '38.10', 'Training FLOPs (10^18)': '3.3' },
          { 'Model Architecture': 'Transformer (Big Model)', 'EN-DE (BLEU)': '28.40', 'EN-FR (BLEU)': '41.80', 'Training FLOPs (10^18)': '23.0' }
        ],
        page: 8
      }
    ],
    sampleQuestions: [
      'What is the formula for Scaled Dot-Product Attention?',
      'Why is multi-head attention superior to a single attention function?',
      'What BLEU scores were achieved on the WMT 2014 English-to-German dataset?'
    ],
    chatHistory: []
  },

  // 2. TECHNICAL ARCHITECTURE SPECIFICATION
  {
    id: 'doc-technical-02',
    name: 'Distributed_Microservices_API_Architecture_Spec.pdf',
    fileSize: '3.4 MB',
    pageCount: 16,
    uploadedAt: '15 mins ago',
    detectedDomain: 'technical',
    secondaryDomains: ['business'],
    confidenceScore: 98.9,
    detectionReason: 'Identified enterprise engineering specification: microservice topology diagrams, gRPC/REST API endpoints, JWT authentication flows, PostgreSQL schema DDL, and Kubernetes manifests.',
    summary: {
      tldr: 'Technical Architecture Specification for high-throughput Distributed Document Processing Pipeline. Specifies event-driven microservices running on Kubernetes with Kafka message bus, sub-25ms vector retrieval, and zero-trust mTLS security.',
      keyTakeaways: [
        'Decomposes system into 4 core microservices: Ingestion Gateway, OCR Tensor Engine, Intelligence Pipeline, and Vector Indexer.',
        'Target SLA: p99 latency < 250ms for document summarization and < 25ms for semantic Q&A vector search.',
        'Event bus: Apache Kafka with 3-node replication factor and idempotent partition consumers.',
        'Authentication: OAuth2.0 / OIDC with asymmetric RS256 JWT tokens and Envoy sidecar mTLS.'
      ],
      executiveBrief: 'This specification outlines the production cloud-native deployment for enterprise document ingestion. All microservices communicate via gRPC internally and expose REST/OpenAPI 3.1 endpoints externally. Fault tolerance is guaranteed through circuit breakers, rate limiting, and exponential backoff retry queues in Redis.',
      actionChecklist: [
        { id: 'act-tech-1', text: 'Configure Envoy proxy sidecars for zero-trust mTLS service mesh', priority: 'high', completed: false, page: 6 },
        { id: 'act-tech-2', text: 'Set up Kafka dead-letter queue (DLQ) for corrupted PDF payload recovery', priority: 'high', completed: true, page: 9 },
        { id: 'act-tech-3', text: 'Deploy Qdrant vector cluster with HNSW index parameters (m=16, ef_construct=100)', priority: 'medium', completed: false, page: 12 }
      ],
      importantDates: [
        { id: 'dt-tech-1', event: 'Architecture Review Board Approval', date: '15-Feb-2026', type: 'milestone', status: 'past', page: 2 },
        { id: 'dt-tech-2', event: 'Staging Environment Dry Run', date: '01-Mar-2026', type: 'deadline', status: 'upcoming', page: 14 }
      ],
      numbersAndMetrics: [
        { id: 'num-tech-1', label: 'Target Ingestion Throughput', value: '1,200 docs/sec', category: 'measurement', context: 'Peak load capacity', page: 3 },
        { id: 'num-tech-2', label: 'Target Vector Search SLA', value: '< 25ms p99', category: 'measurement', context: 'Semantic retrieval latency', page: 11 },
        { id: 'num-tech-3', label: 'Kafka Partition Count', value: 16, category: 'count', context: 'Parallel event processing streams', page: 8 }
      ],
      risksAndConcerns: [
        { id: 'rsk-tech-1', title: 'Large Payload Buffer Overflow', riskLevel: 'High', plainEnglish: 'Streaming 50MB PDFs directly through gRPC can cause head-of-line blocking.', mitigation: 'Use presigned S3/GCS bucket upload URLs and pass metadata tokens via Kafka.', page: 7 }
      ],
      questionsToConsider: [
        'What is the failover strategy if the primary Kafka broker becomes unresponsive?',
        'How are tenant vector partitions isolated in Qdrant collections?',
        'What rate limits are enforced on public REST API endpoints?'
      ]
    },
    metrics: [
      { label: 'Throughput Capacity', value: '1,200 req/s', status: 'positive', subtext: 'Horizontally scaled', page: 3 },
      { label: 'Vector Retrieval SLA', value: '< 25ms p99', status: 'positive', subtext: 'Qdrant HNSW', page: 11 },
      { label: 'Security Standard', value: 'mTLS Zero-Trust', status: 'positive', subtext: 'Envoy mesh', page: 6 },
      { label: 'Message Bus', value: 'Kafka 3.4', status: 'neutral', subtext: '16 Partitions', page: 8 }
    ],
    technicalData: {
      systemArchitecture: 'Event-driven distributed microservices architecture on Kubernetes (EKS) with Envoy service mesh, Apache Kafka, Qdrant vector database, and PostgreSQL metadata stores.',
      components: [
        { name: 'Ingestion Gateway Service', description: 'Handles multipart file uploads, MIME validation, virus scanning, and presigned storage delegation.', type: 'Go / Fiber' },
        { name: 'OCR & Tensor Extraction Worker', description: 'Decompresses PDF flate streams, coordinates spatial layout OCR, and extracts tabular bounding boxes.', type: 'Python / C++' },
        { name: 'Intelligence & Synthesis Engine', description: 'Executes domain classification, structured entity extraction, and executive summarization via LLMs.', type: 'TypeScript / Node.js' },
        { name: 'Vector Search Indexer', description: 'Generates 384-dimensional dense embeddings and indexes chunks in Qdrant with cosine distance.', type: 'Rust / FastEmbed' }
      ],
      requirements: [
        { id: 'req-1', category: 'Scalability', description: 'Autoscale worker pods based on Kafka lag metrics (KEDA).', priority: 'Critical' },
        { id: 'req-2', category: 'Security', description: 'Encrypt all document buffers in transit (TLS 1.3) and at rest (AES-256).', priority: 'Critical' },
        { id: 'req-3', category: 'Availability', description: 'Maintain 99.95% uptime across Multi-AZ cloud deployments.', priority: 'High' }
      ],
      apisOrEndpoints: [
        { name: 'POST /v2/documents/upload', method: 'POST', description: 'Multipart document ingestion endpoint returning tracking job ID.' },
        { name: 'GET /v2/documents/{id}/intelligence', method: 'GET', description: 'Retrieves complete structured JSON intelligence payload.' },
        { name: 'POST /v2/documents/{id}/query', method: 'POST', description: 'Executes conversational grounded RAG query with page citations.' }
      ],
      configurations: [
        { key: 'MAX_DOCUMENT_SIZE_MB', value: '50', purpose: 'Enforce maximum upload ceiling per document' },
        { key: 'VECTOR_INDEX_DIMENSIONS', value: '384', purpose: 'Dimension size for all-MiniLM-L6-v2 embeddings' },
        { key: 'CACHE_TTL_SECONDS', value: '7200', purpose: 'Redis cache time-to-live for extracted analysis' }
      ],
      proceduresOrSteps: [
        { step: 1, title: 'Presigned S3 Ingestion', detail: 'Client requests presigned URL, uploads document directly to object storage.' },
        { step: 2, title: 'Event Emission', detail: 'Gateway emits DocumentUploaded event into Kafka topic docfin.ingest.events.' },
        { step: 3, title: 'Parallel Processing', detail: 'Workers stream chunks, compute embeddings, run classification, and populate DB.' }
      ],
      dependencies: ['Kubernetes v1.28', 'Apache Kafka v3.4', 'Qdrant Cloud v1.8', 'PostgreSQL 16', 'Redis 7.2'],
      warningsOrSecurityNotes: [
        'Never log unredacted PDF content or user PII into standard stdout/logging aggregators.',
        'Sanitize all user-provided file names to prevent directory traversal attacks.'
      ]
    },
    extractedEntities: [
      { category: 'Component', key: 'Ingestion Gateway', value: 'Go Fiber / Envoy Mesh', page: 2 },
      { category: 'Component', key: 'Vector Database', value: 'Qdrant Cloud HNSW', page: 11 },
      { category: 'ID/Reference', key: 'Architecture RFC', value: 'RFC-2026-DOCFIN-088', page: 1 }
    ],
    extractedTables: [
      {
        id: 'tbl-service-sla',
        tableName: 'Microservice Latency & Throughput SLAs',
        columns: ['Microservice Component', 'Target p50 Latency', 'Target p99 Latency', 'Autoscale Trigger (RPS)'],
        rows: [
          { 'Microservice Component': 'Ingestion Gateway', 'Target p50 Latency': '15ms', 'Target p99 Latency': '45ms', 'Autoscale Trigger (RPS)': '800 RPS' },
          { 'Microservice Component': 'OCR Tensor Worker', 'Target p50 Latency': '350ms', 'Target p99 Latency': '1,200ms', 'Autoscale Trigger (RPS)': '150 RPS' },
          { 'Microservice Component': 'Intelligence Engine', 'Target p50 Latency': '600ms', 'Target p99 Latency': '2,400ms', 'Autoscale Trigger (RPS)': '100 RPS' },
          { 'Microservice Component': 'Vector Indexer', 'Target p50 Latency': '8ms', 'Target p99 Latency': '24ms', 'Autoscale Trigger (RPS)': '1,500 RPS' }
        ],
        page: 5
      }
    ],
    sampleQuestions: [
      'What is the end-to-end latency SLA for vector Q&A retrieval?',
      'How does the system handle corrupt PDF streams in Kafka?',
      'What security protocol is used for internal microservice communication?'
    ],
    chatHistory: []
  },

  {
    id: 'doc-hdfc-bank-01',
    name: 'HDFC_Commercial_Bank_Statement_Jan2026.pdf',
    fileSize: '1.4 MB',
    pageCount: 4,
    uploadedAt: 'Just now',
    detectedDomain: 'finance',
    confidenceScore: 99.4,
    detectionReason: 'Detected monthly commercial transaction ledger, IFSC/NEFT corporate transfers, debit/credit records, and opening/closing balances.',
    
    summary: {
      tldr: 'Monthly commercial account statement for Jan 2026 showing healthy net savings (+₹30,800), but identifies ₹4,350 in unoptimized recurring subscriptions, high food delivery outflow (34%), and an avoidable ₹650 overdraft fee.',
      keyTakeaways: [
        'Total credits of ₹95,000 received with total debit outflows of ₹64,200 (Net Savings Rate: 32.4%).',
        'Top expenditure category was Food & Dining (₹21,800), followed by Utilities & Rent (₹24,500).',
        'Identified 4 active recurring entertainment & software subscriptions totaling ₹4,350/month.',
        'Flagged an avoidable ₹650 overdraft & SMS penalty charge billed on Jan 14th.',
        'Average daily balance maintained was ₹42,500, easily exceeding the ₹10,000 minimum requirement.'
      ],
      executiveBrief: 'This personal and commercial banking document demonstrates steady cash flow from salaried income. The account holder maintains positive liquidity, but can readily increase their monthly savings by ~₹5,000 to ₹7,500 by trimming unused digital subscriptions and disputing the non-consensual overdraft surcharge.',
      actionChecklist: [
        { id: 'act-1', text: 'Cancel unused Gym & OTT streaming auto-debits (Est. monthly savings: ₹2,100)', priority: 'high', completed: false, category: 'Savings' },
        { id: 'act-2', text: 'Submit waiver request for ₹650 Overdraft fee via NetBanking customer desk', priority: 'high', completed: false, category: 'Dispute' },
        { id: 'act-3', text: 'Transfer surplus ₹25,000 from savings account to High-Yield Sweep FD (7.15% p.a.)', priority: 'medium', completed: false, category: 'Investment' },
        { id: 'act-4', text: 'Set food delivery budget cap of ₹12,000/month to prevent 34% discretionary leakage', priority: 'medium', completed: true, category: 'Budgeting' }
      ]
    },
    
    metrics: [
      { label: 'Total Inflow (Credits)', value: '₹95,000', change: '+12% vs Dec', status: 'positive', subtext: 'Primary salary + dividend', iconName: 'TrendingUp' },
      { label: 'Total Outflow (Debits)', value: '₹64,200', change: '-4% vs Dec', status: 'neutral', subtext: '52 total transactions', iconName: 'CreditCard' },
      { label: 'Net Monthly Savings', value: '₹30,800', change: '32.4% rate', status: 'positive', subtext: 'Healthy cushion', iconName: 'PiggyBank' },
      { label: 'Identified Savings Potential', value: '₹5,800/mo', change: 'Quick Wins', status: 'warning', subtext: 'From subscriptions & fees', iconName: 'Zap' }
    ],
    
    financeData: {
      totalIncome: 95000,
      totalExpense: 64200,
      netSavings: 30800,
      savingsRate: '32.4%',
      burnRate: '₹2,070 / day',
      categorySpend: [
        { category: 'Rent & Utilities', amount: 24500, percentage: 38.2, color: '#3B82F6' },
        { category: 'Food & Dining (Swiggy/Zomato)', amount: 21800, percentage: 34.0, color: '#F97316' },
        { category: 'Shopping & E-Commerce', amount: 9800, percentage: 15.3, color: '#8B5CF6' },
        { category: 'Digital Subscriptions', amount: 4350, percentage: 6.8, color: '#EC4899' },
        { category: 'Bank Fees & Taxes', amount: 3750, percentage: 5.7, color: '#EF4444' }
      ],
      recurringSubs: [
        { id: 'sub-1', name: 'Netflix Premium 4K', amount: 649, frequency: 'Monthly', status: 'active', lastBilled: '12 Jan 2026', canCancel: true },
        { id: 'sub-2', name: 'Cult.fit Fitness Pass', amount: 1800, frequency: 'Monthly', status: 'infrequent', lastBilled: '05 Jan 2026', canCancel: true },
        { id: 'sub-3', name: 'Adobe Creative Cloud', amount: 1400, frequency: 'Monthly', status: 'flagged', lastBilled: '18 Jan 2026', canCancel: true },
        { id: 'sub-4', name: 'Spotify Individual', amount: 119, frequency: 'Monthly', status: 'active', lastBilled: '21 Jan 2026', canCancel: true },
        { id: 'sub-5', name: 'Amazon Prime Yearly', amount: 382, frequency: 'Monthly eqv', status: 'active', lastBilled: '01 Jan 2026', canCancel: false }
      ],
      savingsTips: [
        {
          id: 'tip-1',
          title: 'Audit & Trim 3 Idle Subscriptions',
          potentialSavings: '₹3,200 / month',
          description: 'You are billed for Cult.fit (₹1,800) and Adobe (₹1,400) despite minimal recorded usage this cycle.',
          action: 'One-click cancel guide & letter template',
          difficulty: 'easy',
          impact: 'High'
        },
        {
          id: 'tip-2',
          title: 'Dispute Non-Consensual Overdraft Charge',
          potentialSavings: '₹650 instant refund',
          description: 'HDFC debited ₹650 for an intraday balance dip on Jan 14th that was self-corrected within 6 hours. RBI guidelines allow fee reversal.',
          action: 'Generate Dispute Email Draft',
          difficulty: 'easy',
          impact: 'Quick Win'
        },
        {
          id: 'tip-3',
          title: 'Deploy Idle Savings into Auto-Sweep FD',
          potentialSavings: '₹2,100 / year extra yield',
          description: 'An average ₹42,500 idle balance earns only 3.0% in savings account. Enabling Auto-Sweep FD earns 7.15% with zero lock-in penalty.',
          action: 'Auto-Sweep Activation Checklist',
          difficulty: 'medium',
          impact: 'Medium'
        },
        {
          id: 'tip-4',
          title: 'Consolidate Swiggy/Zomato on 5% Cashback Card',
          potentialSavings: '₹1,090 / month cashback',
          description: 'You spent ₹21,800 on food delivery via UPI with 0% rewards. Switching to a dedicated co-branded card yields ₹1,090/mo.',
          action: 'Card Comparison & Recommendation',
          difficulty: 'easy',
          impact: 'Medium'
        }
      ],
      feesAndPenalties: [
        { id: 'fee-1', feeType: 'Intraday Overdraft Penalty', amount: 650, date: '14 Jan 2026', flaggedReason: 'Intraday dip rectified within 6 hours', disputeEligible: true },
        { id: 'fee-2', feeType: 'SMS Alert Charges (Quarterly)', amount: 59, date: '01 Jan 2026', flaggedReason: 'Mandatory standard charge', disputeEligible: false },
        { id: 'fee-3', feeType: 'ATM Non-Home Branch Surcharge', amount: 47.2, date: '19 Jan 2026', flaggedReason: 'Exceeded 5 free monthly withdrawals', disputeEligible: false }
      ]
    },
    
    extractedEntities: [
      { category: 'Person', key: 'Account Holder', value: 'Roshan Kumar Verma', page: 1 },
      { category: 'ID/Reference', key: 'Account Number', value: '50100492819281 (HDFC Bank)', page: 1 },
      { category: 'Date', key: 'Statement Period', value: '01-Jan-2026 to 31-Jan-2026', page: 1 },
      { category: 'Amount', key: 'Opening Balance', value: '₹34,500.00', page: 1 },
      { category: 'Amount', key: 'Closing Balance', value: '₹65,300.00', page: 4 },
      { category: 'Organization', key: 'Branch & IFSC', value: 'Koramangala, Bengaluru - HDFC0001024', page: 1 }
    ],
    
    extractedTables: [
      {
        id: 'tbl-txns',
        tableName: 'Major Transaction Ledger (Top 6 Entries)',
        columns: ['Date', 'Description', 'Type', 'Amount (₹)', 'Balance (₹)'],
        rows: [
          { 'Date': '01-Jan-2026', 'Description': 'SALARY CREDIT - TECHCORP PVT LTD', 'Type': 'Credit', 'Amount (₹)': 90000, 'Balance (₹)': 124500 },
          { 'Date': '02-Jan-2026', 'Description': 'RENT TRANSFER - UPI/VINAYAK_OWNER', 'Type': 'Debit', 'Amount (₹)': 22000, 'Balance (₹)': 102500 },
          { 'Date': '05-Jan-2026', 'Description': 'CULTFIT AUTOPAY ACH DEBIT', 'Type': 'Debit', 'Amount (₹)': 1800, 'Balance (₹)': 100700 },
          { 'Date': '14-Jan-2026', 'Description': 'OVERDRAFT SURCHARGE PENALTY', 'Type': 'Debit', 'Amount (₹)': 650, 'Balance (₹)': 88400 },
          { 'Date': '18-Jan-2026', 'Description': 'ADOBE SYSTEMS CREATIVE SUB', 'Type': 'Debit', 'Amount (₹)': 1400, 'Balance (₹)': 82300 },
          { 'Date': '31-Jan-2026', 'Description': 'MUTUAL FUND SIP - AXIS BLUECHIP', 'Type': 'Debit', 'Amount (₹)': 10000, 'Balance (₹)': 65300 }
        ]
      }
    ],
    
    sampleQuestions: [
      'What are all the avoidable fees and penalties in this statement?',
      'How much did I spend on food delivery and dining out?',
      'List all recurring subscriptions and how much I can save by cancelling idle ones.',
      'What was my total savings rate this month?'
    ],
    
    chatHistory: [
      {
        id: 'msg-1',
        sender: 'assistant',
        text: '⚡ DocFin Forensic Analysis Complete. I audited your **HDFC Commercial Bank Statement (Jan 2026)**. You maintained healthy net savings of ₹30,800, but I identified **₹5,800/mo in potential savings** across unused subscriptions and an avoidable ₹650 overdraft fee. How can I assist you?',
        timestamp: '12:30 PM',
        citations: [
          { page: 1, snippet: 'Opening Bal: ₹34,500 | Total Debits: ₹64,200 | Credits: ₹95,000' }
        ]
      }
    ]
  },
  
  {
    id: 'doc-star-health-02',
    name: 'Star_Health_Comprehensive_Insurance_Policy.pdf',
    fileSize: '2.8 MB',
    pageCount: 18,
    uploadedAt: '10 mins ago',
    detectedDomain: 'insurance',
    confidenceScore: 98.8,
    detectionReason: 'Detected insurance policy schedules, sum insured tables, exclusions list, waiting period clauses, and cashless hospital claim protocols.',
    
    summary: {
      tldr: 'Individual Health Insurance Policy offering ₹15,00,000 Sum Insured with cashless hospitalization, but contains critical 20% Co-Pay for non-network hospitals and a 36-month waiting period on pre-existing conditions.',
      keyTakeaways: [
        'Sum Insured: ₹15,00,000 with 150% Cumulative Bonus restoration benefit.',
        'Room Rent Capped at 1% of Sum Insured (₹15,000/day for Single Standard AC Room).',
        '20% Mandatory Co-Payment if treated at non-network hospitals outside Tier-1 city network.',
        'Pre-Existing Diseases (PED) carry a strict 36-month continuous coverage waiting period.',
        'Includes ₹50,000 AYUSH alternative medicine coverage and ₹10,000 annual health checkup coupon.'
      ],
      executiveBrief: 'This comprehensive policy offers robust major medical coverage. However, policyholders must strictly use in-network hospitals to avoid the 20% co-payment penalty and verify that any room upgrades do not breach the 1% cap.',
      actionChecklist: [
        { id: 'act-ins-1', text: 'Download list of 1,400+ cashless network hospitals in your city to avoid 20% co-pay', priority: 'high', completed: false, category: 'Claim Readiness' },
        { id: 'act-ins-2', text: 'Redeem the ₹10,000 free Annual Health Checkup voucher before policy renewal', priority: 'medium', completed: false, category: 'Benefits' },
        { id: 'act-ins-3', text: 'Keep hospital admission intimation hotline (1800-425-2255) saved on emergency contacts', priority: 'high', completed: true, category: 'Emergency' }
      ]
    },
    
    metrics: [
      { label: 'Total Sum Insured', value: '₹15,00,000', change: '+100% Reload', status: 'positive', subtext: 'Comprehensive Individual', iconName: 'ShieldCheck' },
      { label: 'Room Rent Daily Limit', value: '₹15,000 / day', change: '1% Cap', status: 'neutral', subtext: 'Single Private AC Room', iconName: 'Home' },
      { label: 'Co-Payment Clause', value: '20% Non-Network', change: 'High Alert', status: 'warning', subtext: '0% in Network Hospitals', iconName: 'AlertTriangle' },
      { label: 'PED Waiting Period', value: '36 Months', change: '14 mo left', status: 'negative', subtext: 'Pre-existing conditions', iconName: 'Clock' }
    ],
    
    insuranceData: {
      policyType: 'Comprehensive Health Shield Plus',
      sumInsured: '₹15,00,000',
      deductible: '₹0 (Zero Deductible)',
      copay: '0% in Network / 20% in Non-Network',
      waitingPeriod: '36 Months for Pre-Existing Diseases (PED)',
      coveredItems: [
        { id: 'cov-1', title: 'In-Patient Hospitalization', details: 'Full coverage for room, nursing, ICU, doctor fees up to ₹15 Lakhs', limit: '100% Sum Insured' },
        { id: 'cov-2', title: 'Pre & Post Hospitalization', details: '60 days pre-hospitalization & 90 days post-discharge medical expenses', limit: 'Actuals' },
        { id: 'cov-3', title: 'Day Care Treatments', details: 'All 405 advanced day-care procedures requiring < 24hr hospitalization', limit: 'Up to Sum Insured' },
        { id: 'cov-4', title: 'Emergency Road Ambulance', details: 'Ambulance service per hospitalization event', limit: '₹3,000 / event' },
        { id: 'cov-5', title: 'AYUSH Treatment', details: 'Ayurveda, Yoga, Unani, Siddha, and Homeopathy in Govt accredited centres', limit: 'Up to ₹50,000' }
      ],
      excludedItems: [
        { id: 'ex-1', title: 'Cosmetic & Plastic Surgery', details: 'Surgeries for aesthetic appearance unless necessitated by accidental trauma', reason: 'Standard General Exclusion', severity: 'high' },
        { id: 'ex-2', title: 'Dental Treatment (OPD)', details: 'Routine dental cleanings, root canals, and braces unless due to severe accident', reason: 'OPD Exclusion Clause 4.8', severity: 'medium' },
        { id: 'ex-3', title: 'Non-Medical Hospital Consumables', details: 'Gloves, PPE kits, admission kits, sanitizers, and diagnostic file charges', reason: 'IRDAI List II Non-payable', severity: 'high' },
        { id: 'ex-4', title: 'Self-Inflicted Injuries & Adventure Sports', details: 'Injury from hazardous sports (skydiving, racing) or intentional self-harm', reason: 'High Risk Activity Clause', severity: 'high' }
      ],
      claimChecklist: [
        { step: 1, title: 'Emergency Hospital Intimation', description: 'Notify insurer within 24 hours of emergency admission via TPA portal or toll-free number.', docsNeeded: ['Policy Number', 'Hospital Name', 'Attending Doctor Note'] },
        { step: 2, title: 'Cashless Desk Submission', description: 'Submit e-Health Card and Govt Photo ID at the hospital TPA desk for Pre-Authorization.', docsNeeded: ['Health Card', 'Aadhaar/PAN', 'Pre-Auth Form'] },
        { step: 3, title: 'Discharge Summary & Itemized Invoices', description: 'Obtain final signed discharge summary, indoor case papers, and original pharmacy receipts.', docsNeeded: ['Original Bills', 'Discharge Summary', 'Payment Receipts'] },
        { step: 4, title: 'Post-Hospitalization Claim Submission', description: 'Submit post-discharge medicine bills within 30 days of the post-hospitalization period.', docsNeeded: ['Doctor Prescriptions', 'Diagnostic Reports', 'Cancelled Cheque'] }
      ]
    },
    
    extractedEntities: [
      { category: 'Person', key: 'Primary Insured', value: 'Ananya Sharma (Age: 28)', page: 1 },
      { category: 'ID/Reference', key: 'Policy Number', value: 'SH-COMP-2026-948102', page: 1 },
      { category: 'Date', key: 'Policy Period', value: '15-Mar-2025 to 14-Mar-2026', page: 1 },
      { category: 'Amount', key: 'Annual Premium Paid', value: '₹18,450 (incl. 18% GST)', page: 2 },
      { category: 'Status', key: 'Claim Status', value: 'Active & Continuous (Year 2)', page: 1 }
    ],
    
    extractedTables: [
      {
        id: 'tbl-sublimits',
        tableName: 'Specific Illness Sub-Limits & Waiting Schedule',
        columns: ['Condition / Procedure', 'Waiting Period', 'Max Payout Sub-Limit', 'Co-Pay %'],
        rows: [
          { 'Condition / Procedure': 'Cataract Surgery', 'Waiting Period': '24 Months', 'Max Payout Sub-Limit': '₹40,000 per eye', 'Co-Pay %': '0%' },
          { 'Condition / Procedure': 'Joint Replacement (Knee/Hip)', 'Waiting Period': '24 Months', 'Max Payout Sub-Limit': '₹3,50,000 per joint', 'Co-Pay %': '0%' },
          { 'Condition / Procedure': 'Hernia & Kidney Stone Removal', 'Waiting Period': '24 Months', 'Max Payout Sub-Limit': '₹65,000 per surgery', 'Co-Pay %': '0%' },
          { 'Condition / Procedure': 'Pre-Existing Diabetes / Hypertension', 'Waiting Period': '36 Months', 'Max Payout Sub-Limit': 'Full Sum Insured', 'Co-Pay %': '0% (Network)' }
        ]
      }
    ],
    
    sampleQuestions: [
      'What are the exclusions under this health policy?',
      'How much co-payment will I have to pay if I go to a non-network hospital?',
      'What is the step-by-step procedure to file a cashless claim?',
      'Are dental procedures and OPD expenses covered?'
    ],
    
    chatHistory: [
      {
        id: 'msg-ins-1',
        sender: 'assistant',
        text: '🛡️ DocFin Policy Engine active. Your **Star Health Comprehensive Policy** provides ₹15 Lakhs sum insured. Note: there is a **20% co-payment clause if treated at non-network hospitals**, and a 36-month waiting period on pre-existing conditions.',
        timestamp: '11:45 AM',
        citations: [
          { page: 3, section: 'Clause 3.2 - Co-Payment Matrix', snippet: 'Co-payment of 20% applicable on admissible claim amount in non-network hospitals.' }
        ]
      }
    ]
  },
  
  {
    id: 'doc-rental-agreement-03',
    name: 'Bengaluru_Commercial_Lease_Agreement_2026.pdf',
    fileSize: '890 KB',
    pageCount: 6,
    uploadedAt: '25 mins ago',
    detectedDomain: 'legal',
    confidenceScore: 97.9,
    detectionReason: 'Detected tenancy clauses, security deposit forfeiture conditions, lock-in period penalty, and rent escalation schedules.',
    
    summary: {
      tldr: 'Commercial Tenancy Agreement for an office space in Indiranagar, Bengaluru (Rent: ₹38,000/mo, Deposit: ₹2,00,000). Flags 3 high-risk landlord-favored clauses including unilateral deposit forfeiture and automatic 10% rent escalation.',
      keyTakeaways: [
        'Monthly Rent: ₹38,000 due on or before 5th of each calendar month.',
        'Security Deposit: ₹2,00,000 refundable within 30 days of vacating after painting deductions.',
        '🔴 Red Flag 1: 6-Month strict lock-in period with full rent forfeiture upon early exit.',
        '🟡 Red Flag 2: Landlord reserves the right to increase rent by 10% on 11-month renewal without negotiation.',
        '🟢 Notice Period: 2 months written notice required by either party after lock-in expiration.'
      ],
      executiveBrief: 'This agreement favors the Landlord significantly in the deposit return and early-exit clauses. Before signing, the tenant should negotiate a mutual 1-month lock-in instead of 6 months and cap painting deductions at ₹15,000 max.',
      actionChecklist: [
        { id: 'act-leg-1', text: 'Request amendment to Clause 7: Cap painting & cleaning deduction to ₹15,000 max with bill proof', priority: 'high', completed: false, category: 'Negotiation' },
        { id: 'act-leg-2', text: 'Reduce lock-in period from 6 months to 1 month for unforeseen business relocation', priority: 'high', completed: false, category: 'Risk Mitigation' },
        { id: 'act-leg-3', text: 'Ensure pre-move inspection checklist with photos is attached as Annexure A', priority: 'medium', completed: true, category: 'Documentation' }
      ]
    },
    
    metrics: [
      { label: 'Contract Risk Level', value: 'High Risk', change: '3 Flags Found', status: 'negative', subtext: 'Landlord-biased clauses', iconName: 'AlertOctagon' },
      { label: 'Security Deposit', value: '₹2,00,000', change: '5.2x Rent', status: 'warning', subtext: 'Bengaluru standard (avg 4-6x)', iconName: 'Lock' },
      { label: 'Lock-in Period', value: '6 Months', change: 'Full Penalty', status: 'negative', subtext: 'Rent forfeited on early exit', iconName: 'FileWarning' },
      { label: 'Notice Period', value: '2 Months', change: 'Mutual', status: 'neutral', subtext: 'Written notice required', iconName: 'Calendar' }
    ],
    
    legalData: {
      contractType: 'Commercial Tenancy Agreement (11 Months)',
      parties: ['Landlord: Suresh V. Hegde', 'Tenant: Roshan Kumar Verma'],
      effectiveDate: '01-Feb-2026',
      duration: '11 Months (Expiring 31-Dec-2026)',
      riskScore: 'High',
      riskyClauses: [
        {
          id: 'cl-1',
          clause: 'Clause 5.2: Early Termination & Lock-in Penalty',
          page: 2,
          riskLevel: 'Critical',
          plainEnglish: 'If you vacate the premises before completing 6 months, the landlord will forfeit your entire ₹2,00,000 security deposit even if you give 2 months advance notice.',
          mitigation: 'Counter-propose: Mutual 1-month lock-in or 1-month rent deduction instead of full deposit forfeiture.'
        },
        {
          id: 'cl-2',
          clause: 'Clause 8.1: Uncapped Painting & Maintenance Deductions',
          page: 4,
          riskLevel: 'Warning',
          plainEnglish: 'The landlord can deduct any amount they deem necessary for repainting and deep cleaning without providing contractor invoices or receipts.',
          mitigation: 'Add clause: "Deductions for painting capped at 1 month basic rent or ₹15,000, supported by actual GST invoices."'
        },
        {
          id: 'cl-3',
          clause: 'Clause 11.4: Right of Unannounced Entry',
          page: 5,
          riskLevel: 'Caution',
          plainEnglish: 'Landlord may inspect the premises at any time without prior 24-hour written notice.',
          mitigation: 'Modify to require minimum 24-hour advance intimation via WhatsApp or email.'
        }
      ],
      obligations: [
        { id: 'ob-1', party: 'Tenant', obligation: 'Pay monthly rent of ₹38,000 on or before 5th of every English calendar month', deadline: 'Monthly by 5th' },
        { id: 'ob-2', party: 'Tenant', obligation: 'Pay actual BESCOM electricity and commercial maintenance (₹3,500/mo) directly', deadline: 'Monthly as billed' },
        { id: 'ob-3', party: 'Landlord', obligation: 'Refund full security deposit within 30 days after deducting agreed utility dues', deadline: 'Within 30 days of handover' }
      ],
      terminationTerms: '2 months advance written notice required after completion of the 6-month lock-in period.'
    },
    
    extractedEntities: [
      { category: 'Person', key: 'Lessor / Landlord', value: 'Suresh V. Hegde', page: 1 },
      { category: 'Person', key: 'Lessee / Tenant', value: 'Roshan Kumar Verma', page: 1 },
      { category: 'Amount', key: 'Monthly Rent', value: '₹38,000 / month', page: 2 },
      { category: 'Amount', key: 'Security Deposit', value: '₹2,00,000 (Refundable)', page: 2 },
      { category: 'Date', key: 'Commencement Date', value: '01 February 2026', page: 1 },
      { category: 'Clause', key: 'Escalation Rate', value: '10% on 11-Month Renewal', page: 3 }
    ],
    
    extractedTables: [
      {
        id: 'tbl-schedule',
        tableName: 'Commercial Office Fixture Schedule',
        columns: ['Item / Fixture', 'Quantity', 'Condition at Handover', 'Estimated Replacement Cost'],
        rows: [
          { 'Item / Fixture': 'Daikin 1.5 Ton Split AC', 'Quantity': 2, 'Condition at Handover': 'Brand New (Working)', 'Estimated Replacement Cost': '₹42,000 each' },
          { 'Item / Fixture': 'Geyser (Havells 25L)', 'Quantity': 2, 'Condition at Handover': 'Good Working Condition', 'Estimated Replacement Cost': '₹9,500 each' },
          { 'Item / Fixture': 'Conference Room Table & Chairs', 'Quantity': 1, 'Condition at Handover': 'Clean & Functional', 'Estimated Replacement Cost': '₹24,000' },
          { 'Item / Fixture': 'Main Door Smart Digital Lock', 'Quantity': 1, 'Condition at Handover': 'Operational (2 RFID Keys)', 'Estimated Replacement Cost': '₹12,000' }
        ]
      }
    ],
    
    sampleQuestions: [
      'What are the high-risk clauses in this commercial lease?',
      'What happens if I need to vacate the premises within the first 4 months?',
      'How much can the landlord deduct from my deposit for painting?',
      'What is the notice period required to vacate?'
    ],
    
    chatHistory: [
      {
        id: 'msg-leg-1',
        sender: 'assistant',
        text: '⚖️ DocFin Legal Engine active. I reviewed this **Commercial Lease Agreement** and flagged **3 critical risks**, including a strict 6-month lock-in penalty where your ₹2,00,000 deposit can be seized on early exit.',
        timestamp: '10:15 AM',
        citations: [
          { page: 2, section: 'Clause 5.2', snippet: 'In the event of Lessee vacating before 6 months, entire security deposit stands forfeited to Lessor.' }
        ]
      }
    ]
  },

  {
    id: 'doc-invoice-04',
    name: 'Enterprise_Cloud_Infrastructure_Tax_Invoice_Jan2026.pdf',
    fileSize: '540 KB',
    pageCount: 3,
    uploadedAt: '1 hour ago',
    detectedDomain: 'billing',
    confidenceScore: 99.1,
    detectionReason: 'Detected vendor tax invoice, GSTIN/PAN numbers, itemized compute line items, SAC codes, and reverse charge tax schedules.',
    
    summary: {
      tldr: 'Monthly B2B Cloud Services Tax Invoice from Amazon Web Services India Pvt Ltd for ₹84,370 (Base: ₹71,500 + 18% GST: ₹12,870). Detects unattached EBS volumes and unreserved EC2 on-demand instances inflating costs by 24%.',
      keyTakeaways: [
        'Total Invoice Amount: ₹84,370 (including ₹6,435 CGST + ₹6,435 SGST).',
        'Payment Due Date: 15-Feb-2026 via Corporate Auto-Debit.',
        'Top Cost Driver: Amazon EC2 On-Demand Compute (₹48,200, 67.4% of total).',
        'Cost Optimization: 4 Unattached EBS GP3 Volumes (₹4,200/mo waste detected).',
        'Input Tax Credit (ITC): Fully eligible for ₹12,870 GST claim under GSTIN 29AAACA1234F1Z5.'
      ],
      executiveBrief: 'This invoice indicates steady cloud usage. Implementing AWS Compute Savings Plans or 1-Year Reserved Instances on the 3 primary production nodes will lower the monthly compute bill from ₹48,200 to ~₹31,000 (35% recurring savings).',
      actionChecklist: [
        { id: 'act-inv-1', text: 'Delete 4 orphaned/unattached EBS volumes in ap-south-1 (Saves ₹4,200/mo)', priority: 'high', completed: false, category: 'Cost Reduction' },
        { id: 'act-inv-2', text: 'Forward invoice to accounts team to claim ₹12,870 GST Input Tax Credit before GSTR-3B due date', priority: 'high', completed: true, category: 'Compliance' },
        { id: 'act-inv-3', text: 'Purchase 1-Year Savings Plan for baseline t4g.xlarge instances', priority: 'medium', completed: false, category: 'Optimization' }
      ]
    },
    
    metrics: [
      { label: 'Total Payable Amount', value: '₹84,370', change: '+8.4% MoM', status: 'neutral', subtext: 'Includes 18% GST', iconName: 'FileText' },
      { label: '18% GST Input Credit', value: '₹12,870', change: 'Eligible ITC', status: 'positive', subtext: 'GSTR-2B reconcilable', iconName: 'CheckCircle' },
      { label: 'Identified Cloud Waste', value: '₹4,200 / mo', change: 'Orphan Disks', status: 'negative', subtext: '4 unattached EBS volumes', iconName: 'Trash2' },
      { label: 'Payment Due Date', value: '15-Feb-2026', change: 'In 4 Days', status: 'warning', subtext: 'Auto-debit scheduled', iconName: 'Calendar' }
    ],
    
    billingData: {
      invoiceNumber: 'INV-AWS-2026-081924',
      vendor: 'Amazon Web Services India Private Limited',
      client: 'DocFin Technologies LLP',
      dueDate: '15-Feb-2026',
      taxBreakdown: [
        { taxType: 'CGST (9%)', rate: '9.0%', amount: 6435 },
        { taxType: 'SGST (9%)', rate: '9.0%', amount: 6435 }
      ],
      totalAmount: 84370,
      lineItems: [
        { description: 'Amazon Elastic Compute Cloud (EC2) - Linux On-Demand (ap-south-1)', qty: 744, unitPrice: 64.78, total: 48200 },
        { description: 'Amazon RDS Aurora PostgreSQL Multi-AZ (db.r6g.large)', qty: 744, unitPrice: 20.30, total: 15100 },
        { description: 'Amazon EBS General Purpose SSD (gp3) Volumes', qty: 1200, unitPrice: 6.83, total: 8200 },
        { description: 'Amazon CloudFront & Data Transfer Out', qty: 2500, unitPrice: 0.00, total: 0 },
        { description: 'AWS Premium Support - Business Tier', qty: 1, unitPrice: 0.00, total: 0 }
      ],
      discountsOrPenalties: ['Free Tier Data Transfer Credit: -$15.00 applied', 'Late payment finance fee: 1.5% per month after Feb 15']
    },
    
    extractedEntities: [
      { category: 'Organization', key: 'Vendor', value: 'AWS India Pvt Ltd (GSTIN: 29AAACA1234F1Z5)', page: 1 },
      { category: 'Organization', key: 'Client', value: 'DocFin Technologies LLP', page: 1 },
      { category: 'ID/Reference', key: 'Invoice #', value: 'INV-AWS-2026-081924', page: 1 },
      { category: 'Date', key: 'Billing Period', value: '01-Jan-2026 to 31-Jan-2026', page: 1 },
      { category: 'Amount', key: 'Taxable Subtotal', value: '₹71,500.00', page: 1 },
      { category: 'Amount', key: 'Total with Tax', value: '₹84,370.00', page: 1 }
    ],
    
    extractedTables: [
      {
        id: 'tbl-aws-items',
        tableName: 'Itemized Cloud Service Breakdown',
        columns: ['Service Category', 'Usage Type / Region', 'Units Billed', 'Rate (₹)', 'Total (₹)'],
        rows: [
          { 'Service Category': 'Amazon EC2', 'Usage Type / Region': 'ap-south-1-BoxUsage:t4g.xlarge', 'Units Billed': '744 Hours', 'Rate (₹)': 64.78, 'Total (₹)': 48200 },
          { 'Service Category': 'Amazon RDS', 'Usage Type / Region': 'ap-south-1-InstanceUsage:db.r6g', 'Units Billed': '744 Hours', 'Rate (₹)': 20.30, 'Total (₹)': 15100 },
          { 'Service Category': 'Amazon EBS', 'Usage Type / Region': 'ap-south-1-VolumeUsage.gp3', 'Units Billed': '1200 GB-Mo', 'Rate (₹)': 6.83, 'Total (₹)': 8200 }
        ]
      }
    ],
    
    sampleQuestions: [
      'What is the total GST breakdown on this invoice?',
      'Which service contributed the most to this month’s bill?',
      'Are there any unutilized or wasted cloud resources identified?',
      'What is the payment due date and consequence of late payment?'
    ],
    
    chatHistory: [
      {
        id: 'msg-inv-1',
        sender: 'assistant',
        text: '🧾 DocFin Invoice Parser active. **Cloud Infrastructure Invoice** totaled ₹84,370 (includes ₹12,870 GST). I also spotted **₹4,200/mo in unused EBS storage waste** that you can terminate immediately to reduce next month’s bill.',
        timestamp: '09:40 AM',
        citations: [
          { page: 2, section: 'EBS Storage Section', snippet: 'gp3 volumes: 4 unattached volumes detected with zero I/O operations in 30 days.' }
        ]
      }
    ]
  },

  {
    id: 'doc-lending-sanction-05',
    name: 'Commercial_Credit_Facility_Sanction_Letter_2026.pdf',
    fileSize: '1.9 MB',
    pageCount: 8,
    uploadedAt: '2 hours ago',
    detectedDomain: 'overall',
    confidenceScore: 98.6,
    detectionReason: 'Detected commercial credit facility terms, debt service coverage ratio (DSCR) covenants, floating rate margin schedules, and hypothecation schedules.',
    
    summary: {
      tldr: 'Sanction Letter for INR 50,00,000 Working Capital Credit Facility at 8.75% floating interest p.a. Identifies 2 compliance risks: mandatory 1.35x DSCR covenant maintenance and a 2.0% foreclosure penalty violating standard MSME guidelines.',
      keyTakeaways: [
        'Sanctioned Limit: INR 50,00,000 with 12-month tenure subject to annual review.',
        'Benchmark Rate: 1-Year MCLR + 1.25% spread (effective 8.75% p.a.).',
        'Primary Covenant: Borrower must maintain Debt-Service Coverage Ratio (DSCR) >= 1.35x throughout facility tenure.',
        'Foreclosure Penalty: 2.0% on prepaid principal if refinanced by competitor bank.',
        'Primary Collateral: Hypothecation of book debts and inventory with 25% margin.'
      ],
      executiveBrief: 'This credit facility offers competitive working capital liquidity. However, the finance team must track quarterly audited DSCR numbers to avoid covenant breaches and negotiate a waiver of the 2.0% prepayment penalty under RBI MSME fair practice circulars.',
      actionChecklist: [
        { id: 'act-len-1', text: 'Request deletion of Clause 8.4: Prepayment penalty waiver under RBI MSME fair lending circular', priority: 'high', completed: false, category: 'Covenant Negotiation' },
        { id: 'act-len-2', text: 'Set up quarterly DSCR automated alerting threshold at 1.45x cushion', priority: 'high', completed: true, category: 'Compliance' },
        { id: 'act-len-3', text: 'Submit certified stock and book debt statement before 15th of each calendar month', priority: 'medium', completed: false, category: 'Operations' }
      ]
    },
    
    metrics: [
      { label: 'Facility Limit', value: '₹50,00,000', change: 'Working Capital', status: 'positive', subtext: 'Cash Credit & OD', iconName: 'Building2' },
      { label: 'Effective Interest Rate', value: '8.75% p.a.', change: 'MCLR + 1.25%', status: 'neutral', subtext: 'Floating spread', iconName: 'Percent' },
      { label: 'DSCR Covenant Limit', value: '1.35x Min', change: 'Quarterly Check', status: 'warning', subtext: 'Mandatory financial ratio', iconName: 'Scale' },
      { label: 'Foreclosure Surcharge', value: '2.0% Penalty', change: 'Disputable', status: 'negative', subtext: 'On prepaid principal', iconName: 'AlertTriangle' }
    ],
    
    extractedEntities: [
      { category: 'Organization', key: 'Lending Bank', value: 'State Bank of India (Commercial Branch)', page: 1 },
      { category: 'Organization', key: 'Borrower', value: 'DocFin Analytics Pvt Ltd', page: 1 },
      { category: 'Amount', key: 'Sanction Amount', value: 'INR 50,00,000.00', page: 1 },
      { category: 'Date', key: 'Sanction Date', value: '28-Jan-2026', page: 1 },
      { category: 'Clause', key: 'DSCR Minimum', value: '1.35x Ratio', page: 3 }
    ],
    
    extractedTables: [
      {
        id: 'tbl-sanction-covenants',
        tableName: 'Financial Covenants & Operating Thresholds',
        columns: ['Financial Metric / Covenant', 'Contractual Requirement', 'Monitoring Frequency', 'Breach Consequence'],
        rows: [
          { 'Financial Metric / Covenant': 'Debt Service Coverage (DSCR)', 'Contractual Requirement': '>= 1.35x', 'Monitoring Frequency': 'Quarterly', 'Breach Consequence': '+1.0% penal interest' },
          { 'Financial Metric / Covenant': 'Current Ratio', 'Contractual Requirement': '>= 1.25x', 'Monitoring Frequency': 'Annual', 'Breach Consequence': 'Facility review & freeze' },
          { 'Financial Metric / Covenant': 'Stock Audit Submission', 'Contractual Requirement': 'Monthly by 15th', 'Monitoring Frequency': 'Monthly', 'Breach Consequence': '₹5,000/month delay fee' }
        ]
      }
    ],
    
    sampleQuestions: [
      'What are the mandatory financial covenants in this sanction letter?',
      'What happens if our DSCR falls below 1.35x?',
      'Is the 2% prepayment penalty compliant with RBI lending rules?',
      'What is the inventory margin requirement?'
    ],
    
    chatHistory: [
      {
        id: 'msg-len-1',
        sender: 'assistant',
        text: '🏛️ DocFin Lending Engine active. I audited this **Commercial Credit Facility Sanction Letter (₹50,00,000)**. The 8.75% rate is competitive, but I flagged a **1.35x DSCR covenant** and a **2.0% prepayment penalty** that can be disputed under RBI MSME lending guidelines.',
        timestamp: '08:30 AM',
        citations: [
          { page: 3, section: 'Clause 8.4 - Prepayment & Covenants', snippet: 'DSCR to be maintained at minimum 1.35x; 2% prepayment penalty on balance outstanding.' }
        ]
      }
    ]
  }
];
