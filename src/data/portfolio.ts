// ============================================================
// Portfolio Data – Sanjaykumar S (Python Developer)
// All content sourced from the provided resume.
// ============================================================

export const personalInfo = {
  name: "Sanjaykumar S",
  firstName: "Sanjay",
  lastName: "kumar S",
  roles: [
    "Python Developer",
    "Backend Developer",
    "Django Developer",
    "Open to Work",
  ],
  tagline:
    "Motivated fresher with hands-on experience building web applications and automation scripts using Python.",
  email: "sivasanjay769@gmail.com",
  phone: "+91-9841571817",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/sanjaykumar-s-1773923a5",
  github: "https://github.com/sanjaykumar251",
  resumeUrl: "/resume.pdf",
  availability: "Immediate",
  willingToRelocate: true,
  languagesKnown: ["English", "Tamil"],
} as const;

export const aboutSummary = {
  headline:
    "Motivated fresher with hands-on experience building web applications and automation scripts using Python.",
  paragraphs: [
    "I'm a passionate Python Developer currently pursuing my Bachelor's in Computer Applications (BCA). My journey in tech started with a curiosity for how things work behind the screen, and it quickly evolved into a deep love for building clean, efficient backend systems.",
    "Proficient in Django, REST APIs, and relational databases, I bring a solid grasp of object-oriented programming and data structures to every project I build. I've shipped three full-stack projects — from travel platforms to e-commerce apps — each one pushing me to learn something new.",
    "I'm eager to contribute to a fast-paced development team where I can grow as a developer, write meaningful code, and solve real-world problems. Currently sharpening my skills in Data Structures & Algorithms through consistent practice on LeetCode.",
  ],
  stats: [
    { label: "Projects Built", value: "3+" },
    { label: "Certifications", value: "3" },
    { label: "Availability", value: "Immediate" },
  ],
};

export interface Skill {
  name: string;
  icon: string; // react-icons key
  proficiency: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Python", icon: "python", proficiency: 90 },
      { name: "SQL", icon: "database", proficiency: 80 },
      { name: "JavaScript", icon: "javascript", proficiency: 70 },
      { name: "HTML", icon: "html", proficiency: 85 },
      { name: "CSS", icon: "css", proficiency: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "layers",
    skills: [
      { name: "Django", icon: "django", proficiency: 85 },
      { name: "Bootstrap", icon: "bootstrap", proficiency: 80 },
      { name: "NumPy", icon: "numpy", proficiency: 70 },
      { name: "Pandas", icon: "pandas", proficiency: 70 },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", icon: "mysql", proficiency: 80 },
      { name: "PostgreSQL", icon: "postgresql", proficiency: 80 },
      { name: "MongoDB", icon: "mongodb", proficiency: 55 },
    ],
  },
  {
    title: "Core Concepts",
    icon: "brain",
    skills: [
      { name: "OOP", icon: "oop", proficiency: 85 },
      { name: "Data Structures & Algorithms", icon: "dsa", proficiency: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub", icon: "git", proficiency: 80 },
      { name: "VS Code", icon: "vscode", proficiency: 90 },
    ],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string; // tailwind gradient classes
}

export const projects: Project[] = [
  {
    title: "Explore",
    subtitle: "Travel Destination Platform",
    description:
      "A full-stack Django travel web application with dynamic destination listings, relational database models, and a scalable backend architecture.",
    techStack: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
    features: [
      "Dynamic destination listings with search & filter",
      "Relational database models using Django ORM",
      "Dynamic image upload and media handling",
      "Scalable backend with URL routing & template rendering",
    ],
    githubUrl: "https://github.com/sanjaykumar251",
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Resume Builder",
    subtitle: "Web Application",
    description:
      "A dynamic web application that generates professional resumes based on user input, featuring a clean UI and backend form processing.",
    techStack: ["Python", "HTML", "CSS"],
    features: [
      "Dynamic resume generation from user input",
      "Clean, user-friendly interface design",
      "Backend form processing logic in Python",
      "Multiple resume template support",
    ],
    githubUrl: "https://github.com/sanjaykumar251",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Verra Beauty",
    subtitle: "Beauty Services & E-Commerce Platform",
    description:
      "A full-featured beauty services and product management web application with user registration, appointment booking, and a companion Android app.",
    techStack: ["Python", "Django", "HTML", "CSS", "Kotlin", "Android Studio"],
    features: [
      "User registration & authentication system",
      "Appointment booking for beauty services",
      "Product catalog & management system",
      "Fully responsive UI for all screen sizes",
      "Companion Android WebView app (Kotlin)",
    ],
    githubUrl: "https://github.com/sanjaykumar251",
    gradient: "from-pink-500 to-rose-500",
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Patrician College of Arts and Science",
    period: "2023 – 2026",
    description: "Currently pursuing degree with focus on computer science fundamentals, software development, and database management.",
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Chennai Higher Secondary School",
    period: "2020 – 2022",
    score: "68%",
  },
];

export interface Certification {
  name: string;
  provider: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    name: "Python Full Stack",
    provider: "Professional Certification",
    icon: "python",
  },
  {
    name: "Data Analyst",
    provider: "Naan Mudhalvan",
    icon: "chart",
  },
  {
    name: "Python Web Development",
    provider: "Naan Mudhalvan (Online)",
    icon: "globe",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "Open Source Contributor",
    description: "Built and open-sourced 3+ Python projects on GitHub",
    icon: "github",
  },
  {
    title: "Cricket Tournament Runner-up",
    description: "1st Runner-up at College-Level Cricket Tournament",
    icon: "trophy",
  },
  {
    title: "DSA Practitioner",
    description:
      "Continuously learning Data Structures and Algorithms. Practicing by solving coding challenges on LeetCode.",
    icon: "code",
  },
];

export interface CodingProfile {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    name: "GitHub",
    url: "https://github.com/sanjaykumar251",
    icon: "github",
    color: "#f0f6fc",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanjaykumar-s-1773923a5",
    icon: "linkedin",
    color: "#0a66c2",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/",
    icon: "leetcode",
    color: "#ffa116",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
