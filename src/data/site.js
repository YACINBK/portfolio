export const site = {
    name: 'Yassine Ben Kacem',
    shortName: 'YBK',
    role: 'Final-Year Software Engineering Student — Secure Agentic AI & RAG',
    title: 'Yassine Ben Kacem | Secure Agentic AI & RAG',
    description:
        'Final-year ENISO software engineering student building secure agentic AI and RAG systems, with retrieval evaluation, access-control audits, and recoverable automation.',
    location: 'Sousse, Tunisia',
    availability:
        'Available for backend systems engineering, AI architecture, and automation-heavy technical projects.',
    email: 'yacinbenkacem19@gmail.com',
    academicEmail: 'yassine.benkacem@eniso.u-sousse.tn',
    phone: '+216 29 504 806',
    github: 'https://github.com/YACINBK',
    linkedin: 'https://www.linkedin.com/in/yassine-ben-kacem',
    brandLine: 'Agentic AI · RAG & automation · Secure backends',
    cvs: [
        { language: 'en', short: 'EN', label: 'English', href: '/Yassine_Ben_Kacem_CV_EN.pdf', filename: 'Yassine_Ben_Kacem_CV_EN.pdf' },
        { language: 'fr', short: 'FR', label: 'Français', href: '/Yassine_Ben_Kacem_CV_FR.pdf', filename: 'Yassine_Ben_Kacem_CV_FR.pdf' },
    ],
    opportunity: 'Open to internships and projects in agentic AI, RAG, and intelligent automation.',
    intro:
        'I build secure AI agents, retrieval systems, and automation that recovers.',
    homeSummary:
        'Systems architect specialized in secure backend boundaries, agentic AI orchestration, and failure-aware automation workflows.',
    currentFocusTitle: 'Live System Trace',
    currentFocus:
        'I design systems that route work, recover from failure, and turn messy inputs into structured outputs.',
    currentFocusHighlights: [
        'backend boundaries',
        'agentic routing',
        'fallback recovery',
        'pipeline execution',
        'verified output',
    ],
    currentFocusCta: 'Open Knowledge Assistant repo',
};

export const routes = [
    { href: '/work', label: 'Experience', description: 'Internship and systems work.' },
    { href: '/projects', label: 'Projects', description: 'Architecture, constraints, and results.' },
    { href: '/lab', label: 'Automation', description: 'State-aware automation workflows.' },
    { href: '/dossier', label: 'Credentials', description: 'Skills, certificates, education.' },
    { href: '/contact', label: 'Contact', description: 'Communication endpoints.' },
];

export const focusAreas = [
    {
        title: 'Measured Retrieval',
        description:
            'Labeled evaluation sets, near-miss questions, and threshold sweeps to measure what retrieval accepts, misses, and can safely prune.',
    },
    {
        title: 'RBAC & AI Security',
        description:
            'Role and admin permissions enforced inside retrieval queries, with Keycloak OIDC sessions, CSRF protection, and reproducible access-control audits.',
    },
    {
        title: 'Recoverable Agents',
        description:
            'Tool-calling agents and pipelines that inspect state, preserve completed work, and recover through retries, checkpoints, and contract tests.',
    },
];

export const systemProfile = [
    { label: 'Input', value: 'messy data / raw ideas / user workflows' },
    { label: 'Core', value: 'secure APIs / agent routing / fallback recovery' },
    { label: 'Output', value: 'structured, reliable systems' },
];

export const workEntries = [
    {
        type: 'Internship · two engagements',
        role: 'AI & Automation Intern',
        organization: 'White Cape Technologies',
        range: 'Summer 2025 · Summer 2026',
        location: 'Sousse, Tunisia',
        summary:
            'Two summer engagements at White Cape Technologies: a role-aware knowledge assistant evaluated for retrieval quality and access control, and a distributed platform for automated UX analysis.',
        groups: [
            {
                label: 'Agentic RAG Knowledge Assistant',
                range: 'Jun – Aug 2026',
                items: [
                    'Built a 9-node LangGraph assistant for company knowledge and codebases, with role- and admin-scoped retrieval: zero authorization violations across 280 audited retrievals.',
                    'Built a labeled evaluation suite with held-out splits and 23 near-miss cases. Selecting a relevance cutoff of 0.5 reduced wrongly answered unanswerable questions from 12/29 to 6/29 in that evaluation.',
                    'Reduced retrieved context per query by 46% at a pruning threshold of 0.025, preserving direct-evidence recall of 1.000 across a six-threshold sweep.',
                    'Exposed a lexical-overlap verification blind spot: a fabricated claim scored 1.000, matching a grounded control. Preserved the probe as a regression test for evaluating an entailment-based replacement.',
                    'Hardened document ingestion with three-attempt exponential-backoff retry at the LLM transport boundary; excluded the Celery soft-timeout signal so timed-out jobs can record their failure.',
                    'Kept document inference local with LiteLLM, Ollama, Qdrant, BGE-M3, and TEI. Used a planner–generator–evaluator build loop across 45 contract-driven modules and 415 tests, with mutation probes to check that fixes catch reintroduced defects.',
                ],
            },
            {
                label: 'UX Insight Platform',
                range: 'Jun – Aug 2025',
                items: [
                    'Built a UX audit platform combining UI element detection, OCR, and interaction telemetry with ChromaDB-backed retrieval of UX heuristics and prior findings to produce structured reports.',
                    'Moved heavy AI work off the request path into an async job lifecycle with queueing, polling, and recovery; secured the gateway with Keycloak OAuth2/OIDC and JWT validation.',
                    'Isolated LLM, OCR, and image workloads into FastAPI services; added provider routing across OpenAI, Mistral, DeepSeek, OpenRouter, and local Ollama, backed by PostgreSQL, Redis, and Docker Compose.',
                ],
            },
        ],
    },
    {
        type: 'Personal & team projects',
        role: 'Backend, Agentic AI, Automation, and Data Projects',
        organization: 'Independent work & collaboration',
        range: '2024 - Present',
        location: 'Sousse, Tunisia',
        summary:
            'Personal tooling and collaborative systems built around authentication, contract tests, recovery logic, and reproducible outputs.',
        groups: [
            {
                label: 'Systems',
                items: [
                    'MCP multi-agent build pipeline: project tooling exposed as callable tools in Claude Code, with planner, generator, and evaluator roles checking code against contracts; in daily use.',
                    'QuickFlow: Spring AI productivity workflows, Keycloak Google/Microsoft identity brokering and TOTP/MFA, plus Angular draft preservation across session refreshes.',
                    'Agentic video production: browser automation, rendering, captions, metadata, scheduling, and archival.',
                ],
            },
            {
                label: 'Data / Media',
                items: [
                    'Machine learning/data projects: Play Store install prediction and soil nutrient modeling with reproducible preprocessing.',
                    'Image vectorization: subprocess-isolated stages, explicit VRAM flushing, and per-image batch checkpoints for repeatable generation-to-SVG runs on an 8GB GPU.',
                ],
            },
        ],
    },
];

export const projects = [
    {
        slug: 'knowledge-assistant',
        title: 'Agentic RAG Knowledge Assistant',
        summary: 'Local knowledge assistant with access-scoped retrieval, measured relevance thresholds, and reproducible verification probes.',
        type: 'Agentic RAG system',
        status: 'Active flagship',
        timeline: 'Jun – Aug 2026',
        kind: 'SoftwareSourceCode',
        role: 'End-to-end architecture and full-stack build.',
        stack: 'FastAPI / LangGraph / LiteLLM + Ollama / Qdrant / PostgreSQL / Redis + Celery / Keycloak / HTMX',
        problem:
            'Internal knowledge is scattered across company documents. Employees need grounded, trustworthy answers with sources, not an ungrounded chatbot that hallucinates.',
        result:
            'Zero authorization violations across 280 audited retrievals; 46% less retrieved context with direct-evidence recall held at 1.000 in the pruning evaluation.',
        evidence: [
            { value: '0 / 280', label: 'Authorization violations', detail: 'Across audited role- and admin-scoped retrievals.' },
            { value: '46% less', label: 'Retrieved context', detail: 'Direct-evidence recall held at 1.000 in the threshold sweep.' },
            { value: '415 tests', label: '45 contract-driven modules', detail: 'Mutation probes check that fixes detect reintroduced defects.' },
        ],
        evaluation: [
            { label: 'Tune against near misses', detail: 'A labeled suite with held-out splits and reproducible offline scoring used 23 purpose-built near-miss cases to reject an over-permissive cutoff. At 0.5, balanced accuracy peaked and wrongly answered unanswerable questions fell from 12/29 to 6/29 in the evaluation.' },
            { label: 'Prune without losing direct evidence', detail: 'Swept six candidate pruning thresholds. At 0.025, retrieved context per query fell by 46% while direct-evidence recall remained 1.000 on the evaluation set.' },
            { label: 'Test the verifier itself', detail: 'A fabricated claim and a grounded control both scored 1.000 under lexical overlap. The resulting regression probe documents the blind spot and provides a repeatable test for an entailment-based replacement; passing the current gate does not prove factual support.' },
        ],
        architecture: [
            'The 9-node LangGraph routes questions through classification, rewriting, retrieval, reranking, relevance gating, generation, and a lexical-overlap check before releasing generated answers over SSE.',
            'LiteLLM routes every model call to a fully local Ollama runtime, so no document text leaves the network.',
            'BGE-M3 embeddings with a bge-reranker-v2-m3 reranker served through Hugging Face TEI.',
            'Qdrant holds both the vectors and a role-scoped semantic cache at a 0.92 cosine threshold, so a cached answer cannot cross a privilege boundary; PostgreSQL stores durable state and Redis backs Celery.',
            'The relevance retry re-enters at search rather than the rewriter — a broadened query re-runs retrieval instead of restarting the graph.',
            'A three-way classifier separates chitchat from single-shot retrieval and multi-part questions; on the complex route one rewriter call also decomposes the question into at most three sub-queries, searched concurrently with asyncio.gather and reranked together.',
            'Celery ingestion uses three-attempt exponential-backoff retry at the LLM transport boundary. Its retry allowlist excludes soft timeouts so a cancelled job can still record failure.',
        ],
        paths: [
            { path: 'Cache hit', when: 'Semantically equivalent query already answered for this role', cost: '~50 ms' },
            { path: 'DIRECT', when: 'Chitchat, greeting, or out-of-scope question — no retrieval, no generation call', cost: '< 50 ms' },
            { path: 'Full RAG', when: 'Domain question, chunks found, answer passes the lexical-overlap check', cost: '2.3 – 4.3 s' },
            { path: 'Relevance retry', when: 'First search returns low-confidence chunks, broadened query re-runs retrieval', cost: '+1 – 2 s' },
            { path: 'Honest fallback', when: 'Both search attempts fail the relevance threshold', cost: '~1.5 s' },
            { path: 'Escalation', when: 'Answer fails the lexical-overlap check — discarded and logged', cost: 'same as full RAG' },
        ],
        constraints: [
            'Keycloak OIDC session auth, CSRF-protected.',
            'Two-dimension privilege filter (role and admin-only) enforced inside the retrieval query, not just the UI.',
            'Relevance fallback and lexical-overlap gating with a documented verification blind spot; neither is a guarantee of factual correctness.',
            '45 contract-driven modules and 415 tests, with mutation probes checking guard behavior.',
        ],
        flow: ['Query', 'Classify', 'Retrieve + Rerank', 'Relevance gate', 'Generate', 'Overlap check', 'Answer (SSE)'],
        tech: ['FastAPI', 'LangGraph', 'LiteLLM', 'Ollama', 'Qdrant', 'BGE-M3', 'Reranker (TEI)', 'PostgreSQL', 'Redis', 'Celery', 'Keycloak', 'HTMX', 'SSE'],
        repository: 'https://github.com/YACINBK/Agentic_Rag_Assistant',
        repositoryLabel: 'Open repository',
    },
    {
        slug: 'ux-insight-platform',
        title: 'UX Insight Platform',
        summary: 'Screenshot-to-report UX analysis combining UI detection, OCR, telemetry, and retrieval-backed findings.',
        type: 'Distributed AI platform',
        status: 'Delivered',
        timeline: 'Jun – Aug 2025',
        kind: 'SoftwareSourceCode',
        role: 'Core system design and distributed service implementation.',
        stack: 'Angular / Spring Boot / FastAPI / Keycloak / ChromaDB / PostgreSQL / Redis / Docker',
        problem:
            'UX reviews often stay subjective. This system turns screenshots, interaction logs, OCR, and visual heuristics into structured analysis.',
        result:
            'Moved heavy AI work into an async lifecycle with queued processing, polling, recovery logic, caching, and cleaner service boundaries.',
        architecture: [
            'Angular frontend for uploads, progress state, and results.',
            'Spring Boot gateway for persistence, file handling, orchestration, async jobs, and API contracts.',
            'ChromaDB retrieves UX heuristics and prior findings before generation; the LLM layer routes across OpenAI, Mistral, DeepSeek, OpenRouter, and local Ollama.',
            'Computer-vision UI element detection combines screenshot structure with OCR text and interaction telemetry for evidence-backed reports.',
            'PostgreSQL for durable state, Redis caching for repeated expensive calls, Docker Compose for local orchestration.',
        ],
        constraints: [
            'Keycloak OAuth2/OIDC security with JWT validation at the gateway.',
            'Access-control and ownership checks for protected analysis jobs.',
            'Fail-closed LLM behavior and explicit error states.',
        ],
        flow: ['Angular', 'Spring Gateway', 'FastAPI AI', 'PostgreSQL / Redis'],
        tech: ['Angular', 'Spring Boot', 'FastAPI', 'Keycloak', 'ChromaDB', 'RAG', 'PostgreSQL', 'Redis', 'Docker'],
        repository: 'https://github.com/YACINBK/ux-insight-platform',
        repositoryLabel: 'Open repository',
    },
    {
        slug: 'quickflow',
        title: 'QuickFlow',
        summary: 'Secure assistant for meetings, structured minutes, and email generation.',
        type: 'Full-stack system',
        status: 'Team build',
        timeline: '2025',
        kind: 'SoftwareSourceCode',
        role: 'Team project: identity/security ownership, Spring AI integration, and Angular workflows.',
        stack: 'Spring Boot / Spring AI / Angular / Keycloak / OIDC / TOTP-MFA',
        problem:
            'Meeting and email generation need authentication, saved context, and predictable workflow rules, not a loose prompt box.',
        result:
            'Preserved unsaved drafts through session refreshes and built a summary-to-email component reused across three features, with shared social login and MFA.',
        architecture: [
            'Spring AI integrated into Spring Boot for meeting summaries, structured minutes, and email drafts.',
            'Keycloak OIDC with Google and Microsoft identity brokering, plus TOTP multi-factor authentication.',
            'Angular authentication state decoupled from in-progress work so a session refresh preserves unsaved drafts.',
            'Reusable summary-to-email conversion component shared across three team features.',
        ],
        constraints: [
            'Token-aware backend flows and environment-based secrets.',
            'Authentication and workflow reliability treated as first-class concerns.',
            'Workflow-specific prompt rules instead of a general free-form prompt box.',
        ],
        flow: ['Auth', 'Workflow Rules', 'LLM Generation', 'Saved Context', 'Email / Minutes'],
        tech: ['Spring Boot', 'Spring AI', 'Angular', 'Keycloak', 'OIDC', 'JWT', 'TOTP/MFA'],
        repository: 'https://github.com/TaherBenAfia/quickflow',
        repositoryLabel: 'Open repository',
    },
    {
        slug: 'ml-data-projects',
        title: 'Machine Learning / AI Data Projects',
        summary: 'Predictive modeling with reproducible preprocessing and feature engineering.',
        type: 'Data systems',
        status: 'Engineering Portfolio',
        timeline: '2024 - 2025',
        kind: 'SoftwareSourceCode',
        role: 'Independent data science and ML work.',
        stack: 'Python / pandas / NumPy / scikit-learn / PyTorch / Keras / LightGBM',
        problem:
            'Raw datasets require structured collection, cleaning, feature engineering, and evaluation before becoming useful models.',
        result:
            'Built structured data workflows where model outputs are backed by reproducible preprocessing, feature engineering, and multi-output evaluation.',
        architecture: [
            'Play Store Predictive Analysis: deep-learning models trained on a 3M-row dataset to predict app installs and extract performance insights.',
            'Soil Nutrient Prediction: satellite/environmental data cleaning, feature engineering, and multi-output LightGBM modeling.',
            'Notebook logic refactored into repeatable Python data steps where possible.',
        ],
        constraints: [
            'Reproducible preprocessing before any model training step.',
            'Explicit feature engineering instead of hidden notebook state.',
            'Multi-output model evaluation with structured validation splits.',
        ],
        flow: ['Raw Dataset', 'Cleaning', 'Feature Engineering', 'Training', 'Evaluation'],
        tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Keras', 'LightGBM'],
        repository: 'https://github.com/YACINBK/soil-nutrient-prediction',
        repositoryLabel: 'View Soil Nutrient repo',
    },

    {
        slug: 'smart-city-sousse',
        title: 'Smart City Sousse 2030',
        summary: 'Urban monitoring platform with backend data, simulation, and analytics dashboards.',
        type: 'Backend + dashboard',
        status: 'Academic/independent',
        timeline: '2025',
        kind: 'CreativeWork',
        role: 'Academic/independent platform project.',
        stack: 'Django REST / SQLite / Simulation scripts / Streamlit / Plotly / Folium',
        problem:
            'A smart-city scenario needs realistic data, useful APIs, and readable dashboards instead of static tables.',
        result:
            'Built a readable city-monitoring prototype with backend data, simulation, and dashboard layers.',
        architecture: [
            'Django REST backend with SQLite data model and clean API layer.',
            'Synthetic city-data generation and simulation scripts.',
            'Streamlit analytics dashboard with maps, KPIs, and Plotly/Folium charts.',
        ],
        constraints: [
            'Backend-managed data access with separation of concerns.',
            'Simulation data separated from dashboard rendering.',
        ],
        flow: ['Django REST', 'Simulation Scripts', 'SQLite', 'Streamlit Dashboard', 'Maps / KPIs'],
        tech: ['Django', 'Django REST Framework', 'Streamlit', 'Plotly', 'Folium', 'SQLite'],
        repository: 'https://github.com/YACINBK/smart-city-sousse-2030-V2',
        repositoryLabel: 'Open repository',
    },
];

export const automationEntries = [
    {
        slug: 'agentic-video-production',
        title: 'Agentic AI Video Production Pipeline',
        type: 'Agentic automation',
        summary: 'Unattended agent that plans, generates, renders, captions, and publishes short-form video — and resumes cleanly after failure.',
        subtitle:
            'A state-aware content production agent that turns raw ideas into rendered, captioned, upload-ready short-form videos.',
        detail:
            'The system starts from raw concept text, plans content with an LLM, controls a browser to generate AI video clips, produces narration, renders final scenes, adds Whisper captions, prepares metadata, schedules publishing, and archives final assets.',
        repository: 'https://github.com/YACINBK/agentic-video-pipeline',
        repositoryLabel: 'Open repository',
        tech: ['Python', 'Playwright', 'OpenRouter LLMs', 'FFmpeg', 'MoviePy', 'Whisper', 'pydub', 'YouTube API', 'Google Drive API', 'OAuth'],
        flow: [
            { title: 'Input', detail: 'Raw concept text' },
            { title: 'Planning', detail: 'LLM generates title, script, and scene prompts' },
            { title: 'Browser Execution', detail: 'Playwright handles authenticated sessions, selector fallbacks, retries, and generated-video extraction' },
            { title: 'Assembly', detail: 'TTS narration, FFmpeg muxing, MoviePy processing' },
            { title: 'Post-production', detail: 'Whisper captions, styled overlays, final render' },
            { title: 'Distribution', detail: 'Metadata, scheduling, YouTube upload, Drive archive' },
        ],
        agenticReasons: [
            'Inspects filesystem state before acting.',
            'Skips completed assets instead of regenerating work.',
            'Detects failed or rejected generations.',
            'Reformulates prompts when generation fails.',
            'Retries unstable browser automation steps.',
            'Resumes safely after interruption.',
            'Routes work across LLMs, Playwright, TTS, FFmpeg, Whisper, Drive, and YouTube.',
        ],
        browserLayer:
            'Playwright-based automation controls an authenticated browser session, reuses cookies, navigates unstable UI states, detects input fields through selector fallbacks, submits scene prompts, monitors the DOM for generated video output, handles rejection and timeout states, and extracts generated media for the rendering workflow.',
        outcomes: [
            'Turns raw ideas into production-ready video assets.',
            'Recovers from partial failures without restarting the entire workflow.',
            'Combines browser automation, media processing, captions, metadata, scheduling, and archival.',
        ],
    },
    {
        slug: 'mcp-build-pipeline',
        title: 'MCP Multi-Agent Build Pipeline',
        type: 'Developer tooling',
        summary: 'MCP project tools and a planner–generator–evaluator build loop, used daily to write and check code against contracts.',
        subtitle: 'Project tools callable by agents, with separate planning, implementation, and evaluation roles.',
        detail: 'Built MCP servers that expose personal project tooling inside Claude Code. Agents call functions against real project files; distinct planner, generator, and evaluator roles build and check code against contract tests. This is part of my daily development workflow.',
        tech: ['MCP', 'Claude Code', 'Python', 'Multi-agent orchestration', 'Contract tests'],
        flow: [
            { title: 'Plan', detail: 'Planner defines the work against module contracts' },
            { title: 'Build', detail: 'Generator invokes project tools through MCP' },
            { title: 'Evaluate', detail: 'Evaluator checks the implementation against contract tests' },
        ],
        outcomes: [
            'Makes existing project tooling directly callable by agents.',
            'Separates planning, generation, and evaluation responsibilities.',
            'Used in the RAG build across 45 contract-driven modules and 415 tests.',
        ],
    },
    {
        slug: 'image-vectorization',
        title: 'Image Vectorization Workflow',
        type: 'Constraint-aware pipeline',
        summary: 'Generation-to-SVG pipeline that holds an 8GB VRAM budget with checkpointed batch recovery.',
        subtitle: 'Generation-to-SVG workflow under 8GB VRAM constraints.',
        detail:
            'An apparel-design workflow combining generation, SAM isolation, OpenCV/Pillow preprocessing, Oklab color simplification, and VTracer SVG tracing. Each stage runs in its own subprocess with explicit VRAM flushing, reducing fragmentation on an 8GB GPU; batch checkpoints preserve completed images after interruption.',
        repository: 'https://github.com/YACINBK/image-vectorization',
        repositoryLabel: 'Open repository',
        tech: ['Python', 'Stable Diffusion', 'SAM', 'OpenCV', 'Pillow', 'Oklab', 'VTracer', 'CUDA / VRAM management'],
        flow: [
            { title: 'Generate', detail: 'Create source images with VRAM-aware batch sizing' },
            { title: 'Segment', detail: 'Use SAM for subject isolation and background removal' },
            { title: 'Preprocess', detail: 'Clean, resize, and normalize with OpenCV/Pillow' },
            { title: 'Quantize', detail: 'Reduce palette with Oklab before tracing' },
            { title: 'Trace', detail: 'Export scalable SVG with VTracer' },
            { title: 'Recover', detail: 'Flush VRAM between subprocesses and resume from the last completed image' },
        ],
        outcomes: [
            'Converts manual creative work into a repeatable workflow.',
            'Produces vector-ready assets within an 8GB VRAM budget.',
            'Isolates stages in subprocesses and resumes batches from the last completed image.',
        ],
    },

];

export const labEntries = automationEntries;

export const toolkit = [
    {
        category: 'Backend',
        items: ['Spring Boot', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'Qdrant', 'Celery', 'Docker', 'API contracts'],
    },
    {
        category: 'Agentic AI',
        items: ['LangGraph', 'LangChain', 'LiteLLM', 'Local LLMs (Ollama)', 'RAG', 'Reranking (TEI)', 'MCP servers', 'Multi-agent orchestration', 'Tool-calling agents', 'Retrieval evaluation', 'Verification probes', 'Semantic caching', 'Context engineering'],
    },
    {
        category: 'Media Workflows',
        items: ['FFmpeg', 'MoviePy', 'Whisper', 'pydub', 'OpenCV', 'Pillow', 'VTracer', 'Oklab quantization'],
    },
    {
        category: 'Automation',
        items: ['Playwright', 'Browser automation', 'Web scraping', 'Selector fallbacks', 'Retry logic', 'Queue orchestration'],
    },
    {
        category: 'Machine Learning',
        items: ['PyTorch', 'Keras', 'scikit-learn', 'pandas', 'NumPy', 'LightGBM', 'Feature engineering'],
    },
    {
        category: 'Programming',
        items: ['Python', 'Java', 'C/C++', 'C#', 'TypeScript/JavaScript', 'SQL'],
    },
    {
        category: 'Security & Delivery',
        items: ['Docker', 'Git/GitHub/GitLab', 'Keycloak', 'OAuth2/OIDC', 'RBAC', 'JWT', 'Google/Microsoft identity brokering', 'TOTP/MFA', 'pytest', 'Contract tests', 'Mutation probes', 'Linux CLI'],
    },
];

export const selectedCredentials = [
    {
        title: 'Building RAG Agents with LLMs',
        trait: 'Retrieval-Oriented Agent Design',
        description: 'Signals my focus on retrieval-aware agent systems: connecting LLMs with documents, tools, planning behavior, and structured deliverable workflows.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=UdUEr7YxQ_aVFCc8nToZMg'
    },
    {
        title: 'Building AI-Based Cybersecurity Pipelines',
        trait: 'Security-Aware AI Pipelines',
        description: 'Supports my secure-systems profile: AI inference over high-volume security data, telemetry processing, anomaly detection, and pipeline-oriented threat analysis.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=KAsiM385R9y6ZkW69ebAnw'
    },
    {
        title: 'Building Real-Time Video AI Applications',
        trait: 'Multimodal Pipeline Engineering',
        description: 'Connects to my automation and media-pipeline work: video AI workflows, applied computer vision, and production-style processing of generated media assets.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=bOf4VdO3RKe4Gc71UHsgrg'
    },
    {
        title: 'Generative AI with Diffusion Models',
        trait: 'Generative Media Systems',
        description: 'Reinforces my image-generation and vectorization work: diffusion-based media generation, controlled visual outputs, and creative AI pipeline design.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=7TjOJBYcQwGtfbHWnugr9g'
    },
    {
        title: 'Building Transformer-Based NLP Applications',
        trait: 'Language Model Application Design',
        description: 'Strengthens my LLM systems base: transformer NLP, text-processing workflows, named-entity recognition concepts, and deployment-aware model application design.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=hzNiLDkcR3ag3gTEI0aK2w'
    },
    {
        title: 'Applications of AI for Predictive Maintenance',
        trait: 'Time-Series Reliability Modeling',
        description: 'Extends my data-systems profile into predictive reliability: time-series anomaly detection, failure prediction, remaining-useful-life reasoning, and maintenance-oriented ML workflows.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=rPm69M4xRwm9BogRbgJRGg'
    }
];

export const certificateArchive = [
    {
        provider: 'NVIDIA Deep Learning Institute',
        items: [
            { title: 'Building LLM Applications with Prompt Engineering', url: 'https://learn.nvidia.com/certificates?id=8kh6ha76RLCZjdAknIMeTQ' },
            { title: 'Fundamentals of Deep Learning', url: 'https://learn.nvidia.com/certificates?id=MuJ5adzgRqyN4vp8lfuSnw' },
        ],
    },
    {
        provider: 'DeepLearning.AI / Coursera',
        items: [
            { title: 'Neural Networks and Deep Learning', url: 'https://www.coursera.org/account/accomplishments/verify/WRYZZZF17O2P' },
            { title: 'Supervised Machine Learning: Regression and Classification', url: 'https://www.coursera.org/account/accomplishments/verify/1B2H4BAE29M0' },
        ],
    },
    {
        provider: 'Google Cloud / Coursera',
        items: [
            { title: 'Introduction to Generative AI', url: 'https://www.coursera.org/account/accomplishments/verify/5R8O9SFIHKNR' },
        ],
    },
    {
        provider: '365 Data Science',
        items: [
            { title: 'Data Cleaning and Preprocessing with pandas', url: 'https://learn.365datascience.com/certificates/CC-76DC872530/' },
        ],
    },
];

export const competitionSignals = [
    {
        title: 'IndabaX Tunisia 2025 — Challenge 1',
        meta: 'Top 50% · 31 / 69 · Zindi',
        description: 'Ranked 31 / 69 in IndabaX Tunisia 2025 Challenge 1, a Zindi-hosted 20-hour applied ML hackathon focused on telecom KPI anomaly detection for 4G/5G network behavior. The challenge involved identifying faults, degradation, failures, and risk patterns from network-cell performance data.',
        certificateUrl: '/zindi-cert.png'
    }
];

export const education = [
    {
        institution: 'Ecole Nationale d\'Ingenieurs de Sousse (ENISo)',
        title: 'Engineering Degree in Software Engineering',
        range: 'Sep 2024 - Present',
        note: 'Final year',
    },
    {
        institution: 'Preparatory Institute for Engineering Studies of Monastir',
        title: 'Mathematics & Physics Preparatory Cycle',
        range: 'Sep 2022 - Jun 2024',
        note: 'National rank: 509 / 1800',
    },
];

export const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Fluent' },
    { name: 'German', level: 'A1 Beginner' },
];

export const contactLinks = [
    { label: 'Email', href: `mailto:${site.email}`, value: site.email, type: 'copy', microcopy: 'route ready' },
    { label: 'Academic email', href: `mailto:${site.academicEmail}`, value: site.academicEmail, type: 'copy', microcopy: 'campus route' },
    { label: 'GitHub', href: site.github, value: 'github.com/YACINBK', type: 'external', microcopy: 'repository channel' },
    { label: 'LinkedIn', href: site.linkedin, value: site.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), type: 'external', microcopy: 'professional channel' },
];

export const socialLinks = contactLinks.filter((link) => ['GitHub', 'LinkedIn'].includes(link.label));
