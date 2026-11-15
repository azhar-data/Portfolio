// ============================================================
// SINGLE SOURCE OF TRUTH — Muhammad Azhar Portfolio Content
// Directly synchronized with Muhammad Azhar's GitHub Repositories & CV
// ============================================================

export const PERSON = {
  name: "Muhammad Azhar",
  title: "AI/ML & Automation Engineer",
  tagline: "I Build AI Systems That Transform Businesses.",
  intro:
    "AI/ML & Data Engineer specializing in building scalable machine learning models, LLM applications, and automated data pipelines. Skilled in Python, Scikit-Learn, and full-stack integration to turn complex datasets into actionable business solutions. Brings a rigorous engineering approach to model training, deployment readiness, clean API architecture, and reliable end-to-end software development.",
  location: "Lahore, Pakistan",
  availability: "Open to Remote Opportunities, Internships & Freelance Projects",
  email: "contactbyazhar8@gmail.com",
  phone: "+92-3366958012",
  whatsapp: "+92-3366958012",
  github: "https://github.com/azhar-data",
  linkedin: "https://www.linkedin.com/in/azhar-ai-engineer",
  resumeUrl: "https://docs.google.com/document/d/1zJGEQEqWm8xYw1Jc468uTCwmHjmioscj21BI5r6tK2M/edit?usp=sharing",
  portrait: "/images/portrait.jpg",
};

export const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const ROTATING_HEADLINES = [
  { prefix: "I Build AI Systems", accent: "That Transform Businesses." },
  { prefix: "I Build Intelligent Apps", accent: "That Solve Real Problems." },
  { prefix: "I Engineer AI Agents", accent: "That Get Work Done." },
];

export const TECH_STACK_MARQUEE = [
  { name: "LangChain", icon: "Link2" },
  { name: "ChromaDB", icon: "Database" },
  { name: "OpenAI & Gemini", icon: "Sparkles" },
  { name: "Python 3.x", icon: "Terminal" },
  { name: "Scikit-learn", icon: "BarChart2" },
  { name: "TensorFlow & PyTorch", icon: "Layers" },
  { name: "FastAPI", icon: "Zap" },
  { name: "Pandas & NumPy", icon: "Table2" },
  { name: "n8n Workflows", icon: "Workflow" },
  { name: "Selenium & Playwright", icon: "Chrome" },
  { name: "PostgreSQL & pgvector", icon: "Database" },
  { name: "Docker", icon: "Package" },
];

export const SKILL_GROUPS = [
  {
    id: "ai-genai",
    number: "01",
    label: "AI & Generative AI",
    icon: "Sparkles",
    description: "RAG systems, LangChain, LLM APIs (OpenAI/Gemini), embeddings, vector search, AI agents, and prompt engineering.",
    skills: ["RAG", "LangChain", "OpenAI/Gemini", "AI Agents", "ChromaDB", "Prompt Engineering"],
  },
  {
    id: "ml-data",
    number: "02",
    label: "ML & Data Science",
    icon: "Brain",
    description: "Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, Seaborn, Matplotlib, preprocessing, and model evaluation.",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Seaborn"],
  },
  {
    id: "fullstack-api",
    number: "03",
    label: "Full-Stack & APIs",
    icon: "Zap",
    description: "Python, FastAPI, Django, REST APIs, and responsive interactive web frontends.",
    skills: ["Python", "FastAPI", "Django", "Streamlit", "REST APIs"],
  },
  {
    id: "backend-quality",
    number: "04",
    label: "Backend & Quality",
    icon: "Server",
    description: "PostgreSQL/pgvector, SQLAlchemy, JWT auth, Alembic, Celery/Redis pipelines, and Pytest.",
    skills: ["PostgreSQL", "pgvector", "Celery / Redis", "SQLAlchemy", "Pytest"],
  },
  {
    id: "automation-scraping",
    number: "05",
    label: "Automation & Scraping",
    icon: "Workflow",
    description: "n8n workflows, Selenium, Playwright headless browser drivers, anti-bot handling, and webhooks.",
    skills: ["n8n", "Selenium", "Playwright", "Webhooks", "Scrapy"],
  },
  {
    id: "cloud-devops",
    number: "06",
    label: "Cloud & DevOps",
    icon: "Box",
    description: "Docker containerization, Git/GitHub version control, AWS cloud hosting, and Vercel deployments.",
    skills: ["Docker", "AWS", "Git / GitHub", "Vercel"],
  },
];

export const PROJECTS = [
  {
    id: "project-01",
    slug: "dataset-explorer-agent",
    number: "01",
    title: "Dataset Explorer Agent",
    category: "Agentic systems",
    status: "Completed",
    shortDesc: "An offline-first, multi-agent system for automated CSV data profiling, quality grading, outlier detection, and ML recommendations.",
    techs: ["Python", "Streamlit", "Plotly", "scikit-learn", "Multi-Agent Systems"],
    codeUrl: "https://github.com/azhar-data/Dataset_Explorer_Agent",
    problem: "Exploring and auditing messy raw CSV datasets manually takes hours of repetitive coding, profiling, and visualization work.",
    approach: "Built a 100% offline-first multi-agent architecture with Streamlit, Plotly, and Scikit-learn. Specialized agent nodes autonomously calculate data health metrics, run outlier detection tests, and recommend predictive machine learning models.",
    results: [
      "Automated CSV profiling and dataset quality grading",
      "Interactive Plotly visualization and distribution analysis",
      "Algorithmic ML model recommendations with zero external API dependencies",
    ],
  },
  {
    id: "project-02",
    slug: "rag-document-assistant",
    number: "02",
    title: "RAG Document Assistant",
    category: "Document intelligence",
    status: "Completed",
    shortDesc: "Document Q&A assistant built with LangChain, ChromaDB vector store, Hugging Face embeddings, and Streamlit.",
    techs: ["Python", "LangChain", "RAG", "ChromaDB", "Hugging Face", "Streamlit"],
    codeUrl: "https://github.com/azhar-data/RAG-Document-Assistant",
    problem: "Extracting grounded answers from complex multipage PDFs and text files leads to search fatigue and manual verification overhead.",
    approach: "Engineered an end-to-end RAG architecture with LangChain and ChromaDB. Implemented semantic text splitting, sentence-transformer vector embeddings, and grounded synthesis via OpenRouter with verified page-number citations.",
    results: [
      "Multi-file PDF and TXT semantic indexing",
      "Grounded answer generation with exact source page citations",
      "Fast in-memory ChromaDB vector store with Streamlit chat UI",
    ],
  },
  {
    id: "project-03",
    slug: "dragshift-desktop-file-studio",
    number: "03",
    title: "DragShift — Desktop File Studio",
    category: "Full-stack engineering",
    status: "Completed",
    shortDesc: "A modern desktop file studio for fast, practical image and PDF workflows: convert, compress, edit, and organize files.",
    techs: ["Python 3.12", "Desktop GUI", "Pillow", "PyPDF"],
    codeUrl: "https://github.com/azhar-data/dragshift_tool_v2",
    problem: "Everyday file operations (PDF merging, multi-format image compression, and batch conversions) usually require clunky or privacy-invasive online web converters.",
    approach: "Built a high-performance desktop file studio using Python 3.12 and native Windows desktop GUI. Features batch image compression algorithms, PDF manipulation routines, and offline drag-and-drop workflow.",
    results: [
      "High-throughput batch image compression with zero cloud upload",
      "Seamless PDF page merging and format reorganization",
      "Clean modern desktop UI built for productivity",
    ],
  },
  {
    id: "project-04",
    slug: "arrowstack-predictive-ml",
    number: "04",
    title: "Arrowstack · Predictive ML & EDA",
    category: "Machine learning",
    status: "Completed",
    shortDesc: "Two reproducible Python data science projects: comprehensive exploratory data analysis and an end-to-end predictive regression pipeline.",
    techs: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Seaborn"],
    codeUrl: "https://github.com/azhar-data/ARROWSTACK",
    problem: "Production machine learning requires rigorous exploratory validation, outlier analysis, and reproducible pipeline design.",
    approach: "Engineered two reproducible Python data science pipelines: Kaggle exploratory data analysis with correlation matrices and bootstrap confidence intervals, and an end-to-end predictive regression model with unit tests.",
    results: [
      "Comprehensive statistical EDA on Kaggle Palmer Penguins benchmark",
      "Trained predictive regression pipeline with measured benchmarks",
      "Includes complete standalone scripts, figures, and automated tests",
    ],
  },
  {
    id: "project-05",
    slug: "nexskill-ml-project",
    number: "05",
    title: "NexSkill ML & Data Science Suite",
    category: "Machine learning",
    status: "Completed",
    shortDesc: "Hands-on collection of Data Science and Machine Learning projects: data preprocessing, label encoding, scaling, and predictive pipelines.",
    techs: ["Python", "scikit-learn", "Pandas", "NumPy", "Data Preprocessing"],
    codeUrl: "https://github.com/azhar-data/Nexskill_project",
    problem: "Translating theoretical machine learning concepts into clean, modular Python pipelines ready for production evaluation.",
    approach: "Constructed an applied suite of data science workflows covering missingness handling, label encoding, standard scaling, and training diverse classification and regression models.",
    results: [
      "Applied ML workflows across diverse real-world datasets",
      "Rigorous feature preprocessing and evaluation metrics",
      "Clean modular repository structure for fast prototyping",
    ],
  },
  {
    id: "project-06",
    slug: "full-stack-ai-lab",
    number: "06",
    title: "Full-Stack AI Engineering Lab",
    category: "Full-stack engineering",
    status: "Completed",
    shortDesc: "Complete repository documenting my full stack AI journey: data analysis, web scraping, ML pipelines, deep learning, and GenAI scripts.",
    techs: ["Python", "NumPy & Pandas", "Web Scraping", "Generative AI"],
    codeUrl: "https://github.com/azhar-data/Full-stack-Ai-by-Azhar",
    problem: "Bridging the divide between foundational Python scripts and end-to-end AI systems.",
    approach: "Structured a multi-topic AI learning repository covering numerical exploration with NumPy, tabular manipulation with Pandas, automated web scrapers, and Generative AI prompt experiments.",
    results: [
      "Hands-on scripts from data ingestion to model serving",
      "Integrated web scraping and automated dataset curation",
      "Continuous documentation of applied modern AI engineering",
    ],
  },
];

export const EXPERIENCE = [
  {
    id: "exp-01",
    role: "AI Engineer Intern",
    company: "CodeAlpha",
    location: "Remote / Pakistan",
    startDate: "Sep 2026",
    endDate: "Nov 2026",
    current: false,
    description: [
      "Contributed AI-powered CRM features using Python, machine learning, and LLM-based workflows.",
      "Designed and integrated automated data handling and workflow logic to enhance user customer management capabilities.",
    ],
    techs: ["Python", "Machine Learning", "LLM Workflows", "CRM Integration"],
  },
  {
    id: "exp-02",
    role: "AI Intern",
    company: "Arrowstack",
    location: "Pakistan",
    startDate: "Aug 2026",
    endDate: "Oct 2026",
    current: false,
    description: [
      "Developed machine learning models and performed exploratory data analysis using Python, Pandas, Scikit-learn, Matplotlib, and Seaborn.",
      "Conducted statistical feature extraction and preprocessing pipelines on structured datasets.",
    ],
    techs: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
];

export const EDUCATION = [
  {
    id: "edu-01",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "University of Education, Lahore",
    startDate: "Sep 2024",
    endDate: "Present",
    description: "Foundational coursework in computer science, data structures, algorithms, discrete mathematics, and software design principles.",
  },
  {
    id: "edu-02",
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Superior College",
    startDate: "2022",
    endDate: "2024",
    description: "Higher secondary education focusing on computer science, mathematics, statistics, and physics.",
  },
  {
    id: "edu-03",
    degree: "Full Stack AI Course Certification",
    institution: "NexSkill, Arfa Tower, Lahore",
    startDate: "Jun 2026",
    endDate: "Sep 2026",
    description: "Applied project-based training in ML/DL workflows, data preparation, model evaluation, Flask/FastAPI backend services, and LLM/RAG integrations.",
  },
];
