
// Central data file — edit this to update all portfolio content

export const personal = {
  name: 'Subham Acharya',
  role: 'AI & ML Engineer',
  tagline: 'Turning data into intelligent applications.',
  intro: "I engineer intelligent systems, deep learning architectures, and scalable machine learning applications. I specialize in taking models from mathematical foundations through rigorous validation to production deployment.",
  email: 'subhamacharya731@gmail.com',
  phone: '+91-6371830731',
  linkedin: 'https://linkedin.com/in/subham-acharya-783222324',
  github: 'https://github.com/subham240',
  location: 'Odisha, India',
  resumeAvailable: true,
  resumeUrl: '/documents/resume.pdf',
} as const;

export const about = {
  heading: 'Architecting Intelligent Systems',
  subheading: 'Bridging statistical rigor and scalable production machine learning.',
  bio: `I am an AI & Machine Learning Engineer focused on designing, validating, and deploying end-to-end intelligent applications.`,
  bio2: `From multimodal biometrics and document intelligence to predictive customer segmentation, I combine robust feature pipelines with clean serving interfaces to build models that are accurate, interpretable, and production-ready.`,
  interests: [
    'Machine Learning Systems',
    'Computer Vision',
    'Natural Language Processing',
    'Deep Learning',
    'Statistical Modeling',
    'MLOps & Deployment',
  ],
} as const;

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: 'medical-lab',
    number: '01',
    title: 'Medical Lab Report Assistant',
    category: 'AI-Powered Health Tool',
    description:
      'Built a Streamlit application that lets users upload medical lab reports and automatically extracts key health parameters, flagging values outside normal reference ranges. Combined document parsing with a data-driven interpretation layer to present results in plain, easy-to-understand language for non-technical users.',
    technologies: [
      'Python',
      'Streamlit',
      'Document Parsing',
      'AI-Assisted Interpretation',
    ],
    liveUrl:
      'https://medical-lab-report-assistant-3jtf93nk6a9nszarn4mdnj.streamlit.app/',
    repoUrl: 'https://github.com/subham240/medical-lab-report-assistant',
    imageAlt: 'Medical Lab Report Assistant — Streamlit interface',
  },
  {
    id: 'snapclass',
    number: '02',
    title: 'SnapClass',
    category: 'AI-Powered Attendance System',
    description:
      'Designed and built an AI-powered attendance platform using computer vision to recognize students from a class photo, together with voice biometrics for sequential roll-call verification. Implemented QR-based course enrollment and a real-time teacher dashboard.',
    technologies: [
      'Python',
      'Computer Vision',
      'FaceRecognition',
      'Dlib',
      'Resemblyzer',
      'Librosa',
      'Streamlit',
      'Flask',
      'Supabase',
    ],
    liveUrl: 'https://snapclass-landing-hazel.vercel.app/',
    repoUrl: 'https://github.com/subham240/snapclass-app',
    imageAlt: 'SnapClass — AI attendance system interface',
  },
  {
    id: 'customer-segmentation',
    number: '03',
    title: 'Smart Customer Segmentation System for E-Commerce',
    category: 'Unsupervised Machine Learning',
    description:
      'Built and deployed an interactive tool that segments e-commerce customers into actionable groups using RFM feature engineering and K-Means clustering, validated with the Elbow Method and Silhouette Score. Applied PCA while retaining over 90% of variance to improve cluster interpretability in a live, user-facing Streamlit application.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'K-Means Clustering',
      'RFM Analysis',
      'PCA',
      'Streamlit',
    ],
    liveUrl:
      'https://smartcart-segmentation-zuxhyiwtapkld2vhnutyue.streamlit.app/',
    repoUrl: 'https://github.com/subham240/smartcart-segmentation',
    imageAlt: 'Customer Segmentation — clustering visualization dashboard',
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  },
  {
    label: 'Data Analysis & Visualization',
    skills: [
      'Exploratory Data Analysis',
      'Data Cleaning & Preprocessing',
      'Statistics',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Streamlit',
    ],
  },
  {
    label: 'Machine Learning & AI',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Classification',
      'Clustering',
      'Feature Engineering',
      'Hyperparameter Tuning',
    ],
  },
  {
    label: 'Libraries & Frameworks',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'PyTorch',
      'TensorFlow',
      'Pandas',
      'NumPy',
      'Flask',
      'FastAPI',
    ],
  },
  {
    label: 'Cloud & MLOps',
    skills: [
      'AWS',
      'CI/CD with GitHub Actions',
      'Git',
      'GitHub',
    ],
  },
  {
    label: 'Core Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
] as const;

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Biju Patnaik University of Technology (BPUT), Odisha',
    duration: '2023 – 2027',
    grade: '8.48 / 10 CGPA',
    level: 'undergraduate',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institution: 'CHSE, Odisha',
    duration: '2021 – 2023',
    grade: '62.1%',
    level: 'higher-secondary',
  },
  {
    degree: 'Secondary (Class X)',
    institution: 'BSE, Odisha',
    duration: '2019 – 2021',
    grade: '83.33%',
    level: 'secondary',
  },
] as const;

export const certifications = [
  {
    title: 'Oracle Cloud Infrastructure (OCI) AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    title: 'Generative AI and Cloud Computing Virtual Internship',
    issuer: 'AICTE – IBM',
    year: '2024',
  },
  {
    title: 'IoT & Entrepreneurship-cum-Skill Development Program',
    issuer: 'Ministry of MSME, Government of India',
    year: '2024',
  },
] as const;

export const exposures = [
  {
    title: 'BPUT Hackathon 2025',
    description:
      'Built a working prototype of an AI-based CRM Assistant under time constraints and presented it to a technical panel, demonstrating rapid iteration and MVP delivery.',
    type: 'hackathon',
  },
  {
    title: 'Small Language Models',
    description:
      'Technical seminar exploring efficiency and scalability trade-offs in small language models.',
    type: 'seminar',
  },
  {
    title: 'DevOps — CI/CD Automation',
    description:
      'Technical seminar covering CI/CD pipelines and DevOps automation practices.',
    type: 'seminar',
  },
  {
    title: 'Decentralized Encrypted Messaging — BitChat',
    description:
      'Technical seminar on decentralized communication and encrypted messaging architectures.',
    type: 'seminar',
  },
] as const;

export const focusAreas = [
  {
    number: '01',
    title: 'Machine Learning Engineering',
    description:
      'Designing resilient training pipelines, feature stores, and predictive models evaluated with statistical rigor and cross-validation.',
  },
  {
    number: '02',
    title: 'Deep Learning & Computer Vision',
    description:
      'Architecting neural networks, facial recognition pipelines, and voice biometric verification systems for real-world scenarios.',
  },
  {
    number: '03',
    title: 'AI-Powered Applications & RAG',
    description:
      'Integrating machine intelligence into practical user-facing tools with document parsing, semantic search, and grounded retrieval.',
  },
  {
    number: '04',
    title: 'MLOps & Production Systems',
    description:
      'Building low-latency APIs (FastAPI/Flask), containerized serving workflows, and automated CI/CD deployment pipelines.',
  },
] as const;

export const process = [
  {
    step: '01',
    title: 'Understand',
    description: 'Define the problem, intended users, and requirements.',
  },
  {
    step: '02',
    title: 'Explore',
    description: 'Inspect the data, prepare features, and choose an appropriate approach.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Implement the application, model, or workflow.',
  },
  {
    step: '04',
    title: 'Evaluate',
    description: 'Test the solution, evaluate results, and refine the implementation.',
  },
] as const;

export const faqs = [
  {
    question: 'What areas of technology do I focus on?',
    answer:
      'I focus on AI and Machine Learning engineering. My work spans predictive modeling, deep learning architectures, computer vision, natural language processing, and deploying production-grade applications with Streamlit, FastAPI, and Flask.',
  },
  {
    question: 'What projects have I built?',
    answer:
      'I have built three main projects: a Medical Lab Report Assistant that parses lab reports and flags abnormal values; SnapClass, an AI attendance system using computer vision and voice biometrics; and a Smart Customer Segmentation System using RFM analysis, K-Means clustering, and PCA for e-commerce data.',
  },
  {
    question: 'Which machine learning tools do I use?',
    answer:
      'I primarily work with Python and the scientific stack — Pandas, NumPy, Scikit-learn, XGBoost, PyTorch, and TensorFlow for model development. For application interfaces, I use Streamlit and Flask. For MLOps, I use Git, GitHub Actions for CI/CD, and AWS for cloud deployment.',
  },
  {
    question: 'What am I looking to learn next?',
    answer:
      'I am keen to deepen my understanding of large language model fine-tuning, advanced MLOps practices, and building more robust end-to-end machine learning pipelines. I am also interested in exploring production-grade model serving and monitoring.',
  },
  {
    question: 'How can someone contact me?',
    answer:
      'The best way to reach me is by email at subhamacharya731@gmail.com or through LinkedIn at linkedin.com/in/subham-acharya-783222324. I am open to project collaborations, mentorship conversations, and interesting technical discussions.',
  },
] as const;
