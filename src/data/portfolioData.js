export const portfolioData = {
  personal: {
    fullName: "Digeesh Sakthivel",
    displayName: "Digeesh Sakthivel",
    title: "Full-Stack Developer",
    subtitle: "React.js • TypeScript • FastAPI • Node.js • PostgreSQL • Docker",
    tagline: "Building scalable web architectures, real-time systems, and high-impact industrial applications.",
    bio: "Full Stack Developer with 1.2+ years of production experience engineering responsive web applications, robust backend microservices, and industrial management platforms. Skilled in bridging fluid user experiences with resilient, containerized API architectures.",
    location: "Bangalore, India",
    availability: "Available for Full-Time Roles • Bangalore / Remote",
    email: "digeesh038@gmail.com",
    resumeUrl: "/digeesh_resume.pdf",
    stats: [
      { label: "Production Experience", value: "1.2+ Yrs" },
      { label: "Enterprise & SaaS Projects", value: "6+" },
      { label: "Core Technologies", value: "15+" },
      { label: "Code Commitment", value: "100%" }
    ],
    socials: {
      github: "https://github.com/digeesh038",
      linkedin: "https://www.linkedin.com/in/digeesh-s-013051272/",
      twitter: "https://x.com/digeesh_2683",
      instagram: "https://www.instagram.com/dige._.esx_/"
    }
  },

  experience: [
    {
      id: "oraxiz",
      role: "Full Stack Developer",
      company: "Oraxiz India Private Limited",
      location: "Remote",
      period: "Jun 2026 – Sep 2026",
      type: "Full-Time",
      badge: "Enterprise SaaS",
      projectTitle: "Delex — Industrial Asset Inspection & Maintenance Platform",
      summary: "Spearheaded the development and maintenance of Delex, an end-to-end industrial asset management platform managing complex equipment inspections, defect lifecycles, and maintenance work orders.",
      highlights: [
        "Architected core screens and FastAPI endpoints for the asset register, inspection checklists, equipment history, and functional areas using React.js, TypeScript, and MongoDB.",
        "Engineered defect and corrective action modules featuring multi-image upload workflows for physical damage tracking and remediation verification.",
        "Built the end-to-end inspection-to-maintenance pipeline: scheduling work orders, tracking operational progress, and recording granular cost allocations across manpower, materials, and machinery.",
        "Implemented real-time status dashboards, automated PDF/Excel data export utilities, and JWT authentication with role-scoped permissions."
      ],
      skills: ["React.js", "TypeScript", "FastAPI", "MongoDB", "JWT", "Docker", "REST APIs"]
    },
    {
      id: "archle",
      role: "MERN Stack Developer",
      company: "Archle Labs Private Limited",
      location: "Bengaluru, Karnataka",
      period: "Sep 2025 – May 2026",
      type: "Intern & Trainee",
      badge: "Industrial Telemetry",
      projectTitle: "Hydrology ERP — Water Treatment & Plant Operations Management",
      summary: "Contributed for 3 months as Intern and 6 months as Trainee on MERN stack industrial platforms, directly driving frontend modules for Hydrology ERP to manage industrial water treatment operations.",
      highlights: [
        "Developed responsive frontend modules in React.js and Tailwind CSS for live plant monitoring, shift handovers, asset tracking, procurement, and inventory control.",
        "Designed high-frequency telemetry logging forms capturing critical chemical/physical metrics (pH, TDS, turbidity, flow, pressure, dissolved oxygen) across RO, Clarifier, Aeration, and ATFD treatment stages.",
        "Connected complex user interfaces to secure backend REST endpoints with strict client-side validation and state management.",
        "Collaborated with cross-functional teams utilizing Git and GitHub for version control, branching strategies, and continuous integration."
      ],
      skills: ["React.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS", "REST APIs", "Git"]
    }
  ],

  projects: [
    {
      id: "delex",
      title: "Delex — Industrial Asset Inspection Platform",
      category: "Enterprise SaaS",
      featured: true,
      description: "Full-stack asset inspection and maintenance platform streamlining equipment tracking, defect management, and maintenance work-order scheduling for industrial operations.",
      technologies: ["React.js", "TypeScript", "FastAPI", "MongoDB", "JWT", "Docker"],
      metrics: "Live Inspection-to-Maintenance Flow",
      achievements: [
        "Modular asset register with Ex-equipment classification and equipment maintenance logs.",
        "Multi-image defect documentation and verification flow.",
        "Automated cost calculation modules factoring manpower hours, spare parts, and machinery usage."
      ],
      github: "https://github.com/digeesh038",
      demo: null
    },
    {
      id: "hydrology",
      title: "Hydrology ERP — Water Treatment Plant Suite",
      category: "Industrial IoT / ERP",
      featured: true,
      description: "Centralized industrial ERP suite built to monitor water-treatment facilities, track shift handovers, log sensor telemetry, and enforce plant-scoped compliance.",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS"],
      metrics: "Multi-Stage Plant Telemetry Logging",
      achievements: [
        "Real-time recording of pH, TDS, turbidity, dissolved oxygen, flow rates, and boiler pressures.",
        "Role-based permission matrix tailored for plant operators, shift managers, and compliance inspectors.",
        "Comprehensive inventory and procurement module for chemical treatments and filtration consumables."
      ],
      github: "https://github.com/digeesh038",
      demo: null
    },
    {
      id: "esports",
      title: "Esports Points Table Maker",
      category: "Real-Time Gaming Platform",
      featured: true,
      description: "Full-stack tournament management system empowering esports organizers to run tournaments, compute live match standings, and broadcast real-time leaderboards.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "Socket.IO", "Docker"],
      metrics: "Sub-Second WebSocket Standings Sync",
      achievements: [
        "WebSocket implementation via Socket.IO for instant live score broadcasts without client polling.",
        "Automated tie-breaker calculation algorithms, kill points multiplier, and placement ranking engine.",
        "Integrated Razorpay payments for tournament registrations, Google OAuth, and instant PDF leaderboard exports."
      ],
      github: "https://github.com/digeesh038/esports-points-table",
      demo: null
    },
    {
      id: "drill-app",
      title: "Drill App — MERN Coding Practice Platform",
      category: "Developer Tools",
      featured: true,
      description: "Interactive coding practice platform designed to challenge developers with timed algorithmic drills, automated evaluation, and granular performance tracking.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Passport.js", "Zod", "Docker"],
      metrics: "Secure Containerized Coding Sandbox",
      achievements: [
        "Designed reusable React components for code submission, error breakdown, and score analytics.",
        "Hardened backend security with Helmet, strict CORS, rate-limiting, and Zod input schema validation.",
        "Containerized development and execution environments with Docker for uniform deployment."
      ],
      github: "https://github.com/digeesh038/drill-app",
      demo: null
    },
    {
      id: "bino-master",
      title: "Bino Master — Dynamic Page Generation Engine",
      category: "Frontend Architecture",
      featured: false,
      description: "High-performance dynamic landing page engine built with Next.js and MongoDB that dynamically translates structured JSON payloads into fully styled, SEO-indexed web pages.",
      technologies: ["Next.js", "Express.js", "MongoDB", "Framer Motion", "Dynamic SEO"],
      metrics: "Dynamic SSR & Programmatic SEO",
      achievements: [
        "Decoupled SSR rendering layer from MongoDB backend API services to maximize TTFB.",
        "Programmatic SEO generation including dynamic canonicals, meta tags, and automated XML sitemaps.",
        "Fluid entrance micro-animations and responsive components powered by Framer Motion."
      ],
      github: "https://github.com/digeesh038/bino-master",
      demo: null
    },
    {
      id: "farm-connect",
      title: "Farm Connect — Agricultural Marketplace",
      category: "Marketplace Platform",
      featured: false,
      description: "Direct agricultural exchange platform connecting local farmers with bulk buyers to ensure transparent pricing, direct sales, and machinery rentals.",
      technologies: ["PHP", "MySQL", "JavaScript", "RBAC", "Bootstrap"],
      metrics: "Direct Farm-to-Consumer Model",
      achievements: [
        "Distinct authenticated portals for Farmers, Buyers, and Marketplace Administrators.",
        "Product catalog for organic produce with real-time stock and price adjustments.",
        "Shared equipment rental booking system with role-based feature gating."
      ],
      github: "https://github.com/digeesh038/farm_connect",
      demo: null
    }
  ],

  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
      { name: "TypeScript", level: "Advanced", icon: "FileCode" },
      { name: "Python", level: "Intermediate", icon: "Terminal" },
      { name: "SQL", level: "Advanced", icon: "Database" }
    ],
    frontend: [
      { name: "React.js", level: "Advanced", icon: "Layers" },
      { name: "Next.js", level: "Intermediate", icon: "Globe" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" },
      { name: "SCSS / Sass", level: "Advanced", icon: "Brush" },
      { name: "Framer Motion", level: "Advanced", icon: "Sparkles" },
      { name: "Responsive UI", level: "Advanced", icon: "Smartphone" }
    ],
    backend: [
      { name: "FastAPI", level: "Advanced", icon: "Zap" },
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "RESTful APIs", level: "Advanced", icon: "Repeat" },
      { name: "Socket.IO / WebSockets", level: "Intermediate", icon: "Radio" }
    ],
    databases: [
      { name: "PostgreSQL", level: "Advanced", icon: "Database" },
      { name: "MongoDB & Mongoose", level: "Advanced", icon: "HardDrive" },
      { name: "Redis", level: "Intermediate", icon: "Zap" },
      { name: "MySQL", level: "Advanced", icon: "Database" },
      { name: "Supabase", level: "Intermediate", icon: "Cloud" }
    ],
    security: [
      { name: "JWT Authentication", level: "Advanced", icon: "Lock" },
      { name: "Google OAuth", level: "Intermediate", icon: "Key" },
      { name: "Passport.js", level: "Intermediate", icon: "Shield" },
      { name: "Role-Based Access (RBAC)", level: "Advanced", icon: "Users" },
      { name: "Zod Schema Validation", level: "Advanced", icon: "CheckCircle" },
      { name: "CORS & Helmet", level: "Advanced", icon: "ShieldAlert" }
    ],
    devops: [
      { name: "Docker", level: "Intermediate", icon: "Box" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "Vercel / Netlify", level: "Advanced", icon: "UploadCloud" },
      { name: "Firebase", level: "Intermediate", icon: "Flame" }
    ]
  },

  education: [
    {
      institution: "Sri Ramakrishna Engineering College",
      location: "Coimbatore, Tamil Nadu",
      degree: "Bachelor of Technology in Information Technology",
      period: "Nov 2021 – May 2025",
      score: "CGPA: 7.05 / 10",
      highlights: [
        "Specialized in Software Engineering, Web Systems, and Database Management.",
        "Active member of Technical Computing forums and full-stack development initiatives."
      ]
    }
  ],

  certifications: [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      tag: "Cloud"
    },
    {
      name: "Mastering JavaScript: From Basics to Dynamic Web Development",
      issuer: "Udemy / Online",
      year: "2023",
      tag: "Language"
    },
    {
      name: "Learn SQL",
      issuer: "Skillrack",
      year: "2023",
      tag: "Database"
    },
    {
      name: "CSS Masterclass",
      issuer: "Online",
      year: "2022",
      tag: "Frontend"
    }
  ],

  contact: {
    email: "digeesh038@gmail.com",
    location: "Bengaluru, Karnataka, India",
    accessKey: "eef5f3f7-3d2d-4a6b-9b64-4df251be5dc7" // Web3Forms Verified API Key
  }
};

