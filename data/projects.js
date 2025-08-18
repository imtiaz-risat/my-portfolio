export const projects = [
  // Ibn Sina MedApp
  {
    projectType: "Web",
    projectName: "Ibn Sina Medical Web App",
    projectImage: "/project/ibnsina.webp",
    techStack: ["typescript", "next.js", "node.js", "prisma", "postgresql"],
    techStackDetails: `Frontend:
• Next.js (App Router) for fast routing and SSR support  
• Tailwind CSS (assumed for styling)  

Backend:
• Node.js + Prisma ORM for database interactions  
• PostgreSQL for relational data storage  
• NextAuth for authentication (JWT-based)  

Dev & Deployment:
• Local development with environment-based API endpoints  
• Prisma migrations and seed scripts for database setup  
• GitHub for version control`,
    liveDemo: "",
    sourceCode: "https://github.com/imtiaz-risat/ibnsina-med-app",
    description:
      "A full-stack hospital management system tailored for doctors and administrators to manage patients, prescriptions, and medical records securely.",
    fullDescription: `The Ibn Sina Medical Web App is a role-based platform that supports doctors and admins with essential tools for medical practice:
• Doctor dashboard to register patients, manage prescriptions, and edit profiles  
• Admin dashboard to manage doctor accounts  
• Secure login with role-based access  
• Uses PostgreSQL for structured medical and user data  
• Network-accessible app for offline LAN use in clinic settings`,
    features: [
      "Doctor & Admin authentication via separate login pages",
      "Doctor dashboard to manage patients, prescriptions, and profile",
      "Admin dashboard to add and manage doctor accounts",
      "Patient CRUD: register, view profile, prescribe medications",
      "Prescription creation and editing per patient",
      "Secure password and JWT secret handling",
      "Runs on local network for LAN-based offline access",
    ],
  },

  // Cracked
  {
    projectType: "Web",
    projectName: "CrackEd – IUT Admission Prep Platform",
    projectImage: "/project/cracked.webp",
    techStack: ["javascript", "react", "node.js", "express", "mongodb"],
    techStackDetails: `Frontend:
• React with component‑based UI for Students, Tutors, Admins  
• Context API (or Redux) for state management  
• Charting library for performance pie charts  

Backend:
• Express.js RESTful API  
• Node.js runtime  
• MongoDB Atlas for scalable cloud database  

Dev & Deployment:
• Concurrent dev setup with client + server via npm scripts  
• Deployed backend on Vercel  
• GitHub for version control and CI/CD`,
    liveDemo: "",
    sourceCode: "https://github.com/imtiaz-risat/Cracked-SPL-II",
    description:
      "A MERN‑stack educational platform tailored for IUT admission test prep",
    fullDescription: `CrackEd is a comprehensive prep platform built as part of our SWE lab course. It features:
  • Role‑based access: Student, Tutor, Admin dashboards  
  • Mock & live model tests with timers  
  • Question bank management & error‑focused “Mistake Exam” mode  
  • Student doubt submission and tutor review workflows  
  • User profiles with avatars and secure password updates  
  • Leaderboards and performance statistics with pie charts  
  • Admin tools to manage tutors and students (ban/unban/delete)`,
    features: [
      "Role‑based dashboards (Student/Tutor/Admin)",
      "Live & archived model tests",
      "Doubt Q&A system",
      "Question bank CRUD for tutors",
      "Mistake‑exam mode for targeted learning",
      "Admin user management panel",
    ],
  },

  // Skeleton Ui
  {
    projectType: "Web",
    projectName: "Skeleton‑Dev UI Starter",
    projectImage: "/project/skeleton-ui.webp",
    techStack: ["javascript", "tailwindcss", "html", "css"],
    techStackDetails: `Frontend:
• Utility‑first styling with Tailwind CSS  
• Custom components (buttons, forms, layout helpers)  
• Modular HTML structure for rapid prototyping  

Tooling:
• npm scripts for builds  
• PurgeCSS or Tailwind JIT for optimized CSS  
• Optional PostCSS processing`,
    liveDemo: "",
    sourceCode: "https://github.com/imtiaz-risat/skeleton-dev",
    description:
      "A Tailwind‑based UI starter kit with core components and styles",
    fullDescription: `Skeleton‑Dev is a lightweight frontend starter designed to kickstart web layouts using Tailwind CSS. It includes:
• Reusable UI patterns (buttons, cards, form controls)  
• Responsive utility classes with mobile-first breakpoints  
• Base style resets and container layouts  
• Easily extendable via component variants and theming`,
    features: [
      "Pre‑built responsive UI components",
      "Tailwind CSS integration",
      "Optimized build process",
      "Scalable HTML structure",
    ],
  },

  // Inherit
  {
    projectType: "Web",
    projectName: "Inherit - AI-Powered Coding Education",
    projectImage: "/project/inherit.webp",
    techStack: [
      "next.js",
      "tailwindcss",
      "mongodb",
      "clerk",
      "openai",
      "chakraui",
      "framer-motion",
      "monaco-editor",
    ],
    techStackDetails: `Frontend:
• Built with Next.js 14 App Router  
• Tailwind CSS for styling with Chakra UI and Radix UI components  
• Framer Motion for animation  
• Monaco Editor integration for in-browser code execution  
• React Markdown (GFM) for content rendering  

Backend:
• MongoDB with Mongoose ORM  
• API routes via Next.js for data handling  

Authentication:
• Clerk for secure sign-in, sign-up, and role-based access  

AI & Integrations:
• OpenAI and Groq AI for code reviews and learning suggestions  
• YouTube Data API for curated video learning  
• Plagiarism detection API for quest evaluations  
• Vercel Analytics and Speed Insights for performance tracking`,
    liveDemo: "https://inherit-xtradrill.vercel.app/",
    sourceCode: "https://github.com/imtiaz-risat/inherit",
    description:
      "An AI-powered learning platform for aspiring developers with curated videos, quests, and custom roadmaps.",
    fullDescription: `Inherit is a modern educational platform built with Next.js to help developers learn coding through interactive lessons, AI-reviewed code execution, time-based quests, and personalized learning paths. Inspired by Aristotle’s school, it merges traditional educational principles with state-of-the-art web technology. Users can track progress, participate in coding quests, and explore curated content while building practical skills.`,
    features: [
      "Curated educational video platform with interactive playback",
      "AI-powered roadmap generation and progress tracking",
      "Real-time coding environment with Monaco Editor",
      "Quest system with challenges, submissions, and scoring",
      "User authentication and role-based access with Clerk",
      "Markdown-based learning materials with GFM support",
      "Future-ready AI assistant for debugging and learning support",
    ],
  },

  // Okkhor
  {
    projectType: "Web",
    projectName: "অক্ষর (Okkhor) - AI-Powered Bengali Learning Platform",
    projectImage: "/project/okkhor.webp",
    techStack: [
      "next.js",
      "react",
      "tailwindcss",
      "mongodb",
      "clerk",
      "openai",
      "docker",
      "pusher",
      "framer-motion",
      "radix-ui",
    ],
    techStackDetails:
      "Frontend:\n• Built with Next.js 15 and React 18\n• Tailwind CSS with Framer Motion for styling and animation\n• Radix UI components for accessible UI\n• React Context API for state management\n\nBackend:\n• Node.js and Next.js API routes\n• MongoDB with Mongoose ORM\n\nAuthentication:\n• Clerk for authentication and role-based access\n\nReal-time:\n• Pusher for real-time collaboration and updates\n\nAI & Integrations:\n• OpenAI GPT-4 for AI-powered language features\n• Google Cloud Text-to-Speech for voice support\n• GROQ SDK for NLP\n• Web Speech API for voice interaction\n\nDeployment:\n• Docker containerization\n• Vercel for hosting and analytics",
    liveDemo: "https://okkhor-xtradrill.vercel.app/",
    sourceCode: "https://github.com/imtiaz-risat/Okkhor",
    description:
      "A Bengali language learning platform with AI-powered features and real-time collaboration.",
    fullDescription:
      "অক্ষর (Okkhor) is an innovative AI-powered learning platform designed to make Bengali language education accessible and engaging. It combines advanced AI technologies with interactive tools such as real-time collaborative whiteboards, AI chatbots, story management, and contribution systems to enhance language learning and community participation worldwide.",
    features: [
      "Analytics dashboard with real-time user and activity metrics",
      "Story management with CRUD operations, Bengali transliteration, multiple font support, and PDF export",
      "Real-time collaborative whiteboard with multi-user editing and version tracking",
      "AI-powered Bengali language chatbot with document query capability",
      "Banglish to Bengali contribution system with verification and tracking",
      "Admin dashboard for managing user contributions with role-based controls",
      "User profile management with public/private stories and likes system",
      "Unified app-wide search with real-time results across content types",
    ],
  },

  // menoo
  {
    projectType: "Mobile",
    projectName: "Menoo - Digital Menu & Ordering",
    projectImage: "/project/menoo.webp",
    techStack: ["react-native", "expo", "supabase"],
    techStackDetails:
      "React Native with Expo for cross-platform mobile app development, Supabase as the backend for database, authentication, and realtime functionality",
    liveDemo: "",
    sourceCode: "",
    description:
      "Menoo is a smart, affordable digital menu and ordering platform for small to mid-sized restaurants and cafes, enabling instant menu digitization via QR codes and real-time order management.",
    fullDescription:
      "Menoo offers an easy drag-and-drop menu builder, QR code access per menu or table, optional ordering system with live order dashboard and kitchen UI, plus smart analytics and promotional tools. It runs on any device without special hardware, supports multiple languages including Bangla and English, and is designed to scale globally with local-first features.",
    features: [
      "Drag & Drop Menu Builder",
      "QR Code Generation (per menu/table)",
      "Real-time Ordering System",
      "Order Management Dashboard & Kitchen View",
      "Smart Analytics & Performance Insights",
      "Promotions & Smart Upselling",
      "Multilingual Support",
      "No Hardware Dependency",
      "Instant Onboarding",
    ],
  },

  // check.td
  {
    projectType: "Mobile",
    projectName: "Check.td - Smart Task & Productivity Manager",
    projectImage: "/project/checktd.webp",
    techStack: ["react-native", "expo", "firebase"],
    techStackDetails:
      "React Native with Expo for cross-platform mobile app development, Firebase for backend services including authentication, real-time database, and push notifications",
    liveDemo: "",
    sourceCode: "",
    description:
      "Check.td is an intuitive task management app that helps users organize their daily tasks, projects, and goals with powerful productivity tools and seamless collaboration.",
    fullDescription:
      "Check.td offers users a clean, user-friendly interface to create, organize, and track tasks with features like task prioritization, due dates, labels, subtasks, reminders, and project sharing. The app supports offline usage with sync on reconnect, smart notifications, and integrations with calendar apps to boost productivity and keep users on track.",
    features: [
      "Task Creation & Organization (Projects, Labels, Priorities)",
      "Due Dates, Recurring Tasks & Reminders",
      "Subtasks & Checklists",
      "Real-time Collaboration & Task Sharing",
      "Push Notifications & Smart Alerts",
      "Offline Support with Sync",
      "Calendar Integrations",
      "Dark Mode & Custom Themes",
      "Cross-Platform Sync",
    ],
  },

  // iutps
  {
    projectType: "Web",
    projectName: "IUTPS - Landing Page",
    projectImage: "/project/iutps.webp",
    techStack: ["react", "css", "js"],
    techStackDetails:
      "React for building a responsive and interactive landing page, CSS for styling, and vanilla JavaScript for client-side functionality.",
    liveDemo: "",
    sourceCode: "https://github.com/yourusername/iutps-landing-page",
    description:
      "A clean and modern landing page for the Islamic University of Technology Photographic Society (IUTPS) to showcase events, announcements, and membership benefits.",
    fullDescription:
      "The IUTPS landing page serves as a central hub to attract new members and keep the community informed about upcoming workshops, competitions, and tech talks. It features smooth scrolling, animated sections, and quick access to social media and contact info.",
    features: [
      "Dynamic Modern UI Components",
      "Event Highlights and Upcoming Workshop Section",
      "Animated Scroll Effects",
      "Social Media Integration",
      "Contact Form with Validation",
    ],
  },

  // iutcbs
  {
    projectType: "Web",
    projectName: "IUTCBS - Club Website",
    projectImage: "/project/iutcbs.webp",
    techStack: ["react", "tailwindcss", "js", "mongodb"],
    techStackDetails:
      "React for dynamic content management, CSS for styling, and JavaScript for interactivity and form handling.",
    liveDemo: "https://iut-cbs.vercel.app/",
    sourceCode: "https://github.com/imtiaz-risat/iut-cbs",
    description:
      "Official website for the Islamic University of Technology Career & Business Society (IUTCBS), providing information about club activities, member resources, and event archives.",
    fullDescription:
      "The IUTCBS website is designed to inform students about career development events, maintain a calendar of upcoming events and seminars. The site supports easy content updates for admins and includes member testimonials and success stories.",
    features: [
      "Dynamic Event Pages",
      "Resource & About Section",
      "Members and Testimonials",
      "Admin Panel for Content Updates",
      "Responsive and Accessible Design",
    ],
  },

  // skedule
  {
    projectType: "Desktop",
    projectName: "Skedule - A Schedule Management Application for Students",
    projectImage: "/project/skedule.webp",
    techStack: ["c#", ".NET"],
    techStackDetails:
      "C# with .NET framework for building a performant Windows desktop application with a user-friendly interface and local data storage.",
    liveDemo: "",
    sourceCode: "https://github.com/imtiaz-risat/Project-Skedule",
    description:
      "Skedule is a desktop app tailored for students to create, organize, and track their daily schedules, deadlines, and exams efficiently.",
    fullDescription:
      "Skedule helps students stay organized by allowing them to add courses, set reminders for assignments and exams, and visualize their weekly timetable. The app supports exporting schedules, notifications, and color-coded events for easy prioritization.",
    features: [
      "Course and Task Management",
      "Weekly Timetable View",
      "Reminders and Notifications",
      "Export Schedule to PDF or CSV",
      "Color-coded Events and Priorities",
      "Offline Usage with Local Storage",
    ],
  },
];

export const categories = ["All", "Web", "Mobile"];
