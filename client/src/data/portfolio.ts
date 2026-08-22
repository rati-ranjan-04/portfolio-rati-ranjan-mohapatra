/**
 * Crimson Signal design reminder: content is direct, evidence-led, and shown through concise technical metadata.
 */

export type Project = {
  index: string;
  title: string;
  category: string;
  status?: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  image?: string;
  kind: "fraud" | "estimator" | "connect" | "mail" | "gita";
};

export const navigation = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["SKILLS", "skills"],
  ["EXPERIENCE", "experience"],
  ["PROJECTS", "projects"],
  ["CERTIFICATIONS", "certifications"],
  ["CONTACT", "contact"],
] as const;

export const skills = [
  {
    title: "Programming",
    description: "Building foundations for practical software and data work.",
    items: ["Python", "C", "HTML5", "CSS3", "JavaScript Fundamentals"],
  },
  {
    title: "AI & Data",
    description: "Preparing data, developing models, and making results interpretable.",
    items: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Matplotlib",
    ],
  },
  {
    title: "Applications & Development",
    description: "Turning logic into usable applications, interfaces, and APIs.",
    items: ["Streamlit", "FastAPI", "Tkinter", "REST APIs", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Cybersecurity",
    description: "Understanding networks, investigations, and defensive practices.",
    items: [
      "Wireshark",
      "Packet Analysis",
      "Digital Forensics",
      "Incident Investigation",
      "Ethical Hacking Fundamentals",
      "Network Security",
    ],
  },
  {
    title: "Core Computer Science",
    description: "Applying the systems concepts behind reliable software.",
    items: ["DBMS", "Data Structures", "Software Engineering", "Operating Systems Fundamentals"],
  },
];

export const experiences = [
  {
    role: "AI/ML Intern",
    company: "PaulTech Software Services Pvt. Ltd.",
    period: "June 2026 – August 2026",
    location: "SIP On Campus",
    points: [
      "Developed machine-learning workflows for structured datasets.",
      "Worked on preprocessing and exploratory analysis.",
      "Worked on model training and evaluation.",
      "Used Python, Pandas, NumPy, scikit-learn and visualization techniques.",
      "Worked on practical AI/ML assignments and documentation.",
    ],
  },
  {
    role: "Python Programming Intern",
    company: "InternPe",
    period: "June 2026 – July 2026",
    location: "Remote",
    points: [
      "Built a Python Connect Four desktop application.",
      "Implemented player validation, configurable colors, win/draw detection, and a live scoreboard.",
      "Used Tkinter GUI, modular programming, debugging, and Git version control.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Maincrafts Technology",
    period: "June 2026",
    location: "Remote",
    points: [
      "Applied AI/ML tasks across data analysis, model development, and interpretation.",
      "Used Python-based libraries, Pandas, machine-learning workflows, and technical reporting.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Unified Mentor",
    period: "December 2025 – March 2026",
    location: "Remote",
    points: [
      "Explored security concepts, threat awareness, network analysis, and defensive practices.",
      "Worked with digital forensics, incident investigation, ethical hacking, and secure computing concepts.",
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Fraud Detection in Financial Transactions",
    category: "Machine Learning | AI | Financial Security",
    status: "July 2026 – Present",
    description:
      "An AI-powered system designed to analyse banking, UPI, and card transactions, assign fraud-risk scores, flag suspicious patterns, and explain alerts for human review.",
    technologies: ["Python", "scikit-learn", "Streamlit", "Pandas"],
    features: [
      "Data preprocessing",
      "Rule-based checks",
      "scikit-learn model training",
      "Fraud-risk scoring",
      "Suspicious pattern detection",
      "Streamlit dashboard",
      "Bulk CSV prediction",
      "Performance metrics",
      "PDF report generation",
    ],
    github: "https://github.com/rati-ranjan-04/fraud-detection-financial-transactions",
    live: "https://fraud-detection-financial-transactions.onrender.com/",
    image: "/deploy-assets/fraud-detection-visual.webp",
    kind: "fraud",
  },
  {
    index: "02",
    title: "Housing Price / Project Cost Estimator",
    category: "Machine Learning | Regression | Web Application",
    description:
      "Regression-based estimator with data preprocessing, feature engineering, model evaluation and saved model artifacts for repeatable predictions.",
    technologies: ["Python", "FastAPI", "Streamlit", "scikit-learn"],
    features: [
      "Data preprocessing",
      "Feature engineering",
      "Model evaluation",
      "Saved model artifacts",
      "FastAPI backend",
      "Streamlit interface",
      "Reproducible execution",
    ],
    github: "https://github.com/rati-ranjan-04/HOUSING-PROJECT-COST-ESTIMATOR",
    image: "/deploy-assets/estimator-visual.webp",
    kind: "estimator",
  },
  {
    index: "03",
    title: "Connect Four Game",
    category: "Python | Tkinter | Desktop Application",
    description:
      "Two-player GUI game with animated disc placement, player validation, win/draw detection and persistent session scoring.",
    technologies: ["Python", "Tkinter", "Git", "Desktop GUI"],
    features: [
      "Animated disc placement",
      "8 colour choices",
      "Duplicate-name validation",
      "Duplicate-colour validation",
      "Horizontal, vertical, and diagonal win detection",
      "Draw detection",
      "Persistent session scoring",
    ],
    github: "https://github.com/rati-ranjan-04/connect-4-game",
    kind: "connect",
  },
  {
    index: "04",
    title: "Mail Guard Spam Filter",
    category: "Spam Filtering | AI Project",
    description:
      "A live spam-filtering project available to explore through its deployed application and public source repository.",
    technologies: ["Live Application", "Source Repository"],
    features: ["Live application", "Public GitHub repository"],
    github: "https://github.com/rati-ranjan-04/mail-guard-ai",
    live: "https://mail-guard-spam-filter-ai.streamlit.app/",
    kind: "mail",
  },
  {
    index: "05",
    title: "Gita Mitra",
    category: "Live Web Project",
    description: "A live project available for exploration through its deployed web application.",
    technologies: ["Live Application"],
    features: ["Live web application"],
    live: "https://gitamitra-fawn.vercel.app/",
    image: "/deploy-assets/gita-mitra-ai-art.webp",
    kind: "gita",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications — Cybersecurity",
    institution: "Institute of Professional Studies and Research (IPSAR)",
    period: "2025 – 2027",
    meta: "Cuttack, Odisha · Currently Pursuing",
  },
  {
    degree: "Bachelor of Science — Botany / Plant Biology",
    institution: "Saraswati Degree Science College, Utkal University",
    period: "2022 – 2025",
    meta: "77% | CGPA 8.22",
  },
  {
    degree: "Intermediate Science — Class XII",
    institution: "Saraswati Junior Science College",
    period: "2020 – 2022",
    meta: "72.45%",
  },
];

export const certifications = [
  "Cisco Ethical Hacker",
  "Cisco Introduction to Cybersecurity",
  "Digital Forensics & Incident Investigation — Red Team Leaders",
  "Wireshark for Packet Capture — Coursera",
  "Introduction to Python for Cybersecurity — Coursera",
  "Digital Skills: Artificial Intelligence — Accenture/FutureLearn",
  "YUVA AI for ALL — IndiaAI",
  "Data Structures with C — Coursera",
  "AI Tools Workshop — Be10x",
];

export const coursework = [
  "Machine Learning",
  "Database Management Systems",
  "Data Structures",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
  "Web Technologies",
  "Cybersecurity Fundamentals",
];

export const focusAreas = [
  ["AI / ML", "Building practical machine-learning applications."],
  ["Python Development", "Creating useful applications and automation tools."],
  ["Cybersecurity", "Developing stronger skills in network security, digital forensics and threat analysis."],
  ["Data Analytics", "Turning structured data into useful insights."],
  ["Secure Software", "Understanding how applications can be designed with security in mind."],
] as const;
