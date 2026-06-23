export const personalInfo = {
  name: "Muhamad Cahyo Rifki Dwi Putra",
  nickname: "cahyo",
  title: "Backend & Cloud Infrastructure Engineer",
  tagline: "Building scalable systems & reliable cloud architectures",
  location: "Indonesia",
  email: "putrarifki705@gmail.com",
  availability: "Open for opportunities",
  bio: "Software Engineering Technology (TRPL) student specializing in Backend Engineering and Cloud Infrastructure. Focused on designing scalable APIs, managing databases, and integrating AI/IoT systems using modern containerization (Docker, Kubernetes) and Linux servers. Dedicated to building smart solutions by combining efficient backend logic with robust infrastructure.",
  beyondCode:
    "Beyond code — jogging, swimming, F1 strategy analysis, and the occasional turn-based RPG session.",
};

export const philosophyStatement =
  "From infrastructure to interface — scalable systems, reliable cloud architectures, and clean code built to perform in the real world.";

export const heroMeta = {
  year: new Date().getFullYear(),
  since: "2023",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/kblim10", icon: "github" as const },
  { name: "LinkedIn", url: "https://linkedin.com/in/kblim-cahyo", icon: "linkedin" as const },
  { name: "Email", url: "mailto:putrarifki705@gmail.com", icon: "mail" as const },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C++", "Bash"],
  backend: ["Node.js", "Express.js", "RESTful API"],
  databases_and_caching: ["MongoDB", "MySQL", "Redis"],
  iot_and_messaging: ["EMQX (MQTT Broker)", "Telegraf", "ESP32 Programming", "ArduinoIDE"],
  infrastructure_and_devops: [
    "Kubernetes",
    "Helm",
    "Docker",
    "Longhorn",
    "Cloudflare Tunnel",
    "Linux Server Administration",
  ],
  ci_cd_and_tools: ["GitHub Actions (CI/CD)", "Bitnami", "Git"],
  observability: ["Prometheus", "Grafana"],
  tools: ["VS Code", "Docker CLI", "kubectl", "Linux CLI", "MongoDB Compass", "VirtualBox"],
};

export const servicePillars = [
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "RESTful API", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Kubernetes", "Docker", "Helm", "Longhorn", "Linux Server", "Cloudflare Tunnel"],
  },
  {
    title: "IoT & Messaging",
    items: ["EMQX (MQTT)", "Telegraf", "ESP32", "ArduinoIDE"],
  },
  {
    title: "DevOps & Observability",
    items: ["GitHub Actions", "Prometheus", "Grafana", "Bitnami", "Git"],
  },
] as const;

export const skillLabels: Record<keyof typeof skills, string> = {
  languages: "Languages",
  backend: "Backend",
  databases_and_caching: "Databases & Caching",
  iot_and_messaging: "IoT & Messaging",
  infrastructure_and_devops: "Infrastructure & DevOps",
  ci_cd_and_tools: "CI/CD & Tools",
  observability: "Observability",
  tools: "Tools",
};

export const experiences = [
  {
    role: "Chairman",
    company: "ASTECH POLINELA",
    period: "Jul 2025 — Jan 2026",
    description:
      "Memimpin dan mengoordinasikan seluruh kegiatan operasional Association Of Software Engineering Technology Student (ASTECH), himpunan mahasiswa Program Studi TRPL. Mengelola perencanaan dan eksekusi program kerja kemahasiswaan berfokus pada pengembangan keterampilan teknis IT.",
    tech: [
      "Leadership",
      "Public Speaking",
      "Project Management",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

export const education = [
  {
    degree: "Teknologi Rekayasa Perangkat Lunak",
    institution: "Politeknik Negeri Lampung",
    year: "2023 — Present",
    description:
      "Berfokus dalam bidang Backend dan Cloud Infrastructure untuk deployment Website, IoT, dan Database. Mempelajari Node.js dan Express.js untuk membangun logic pengelolaan data, serta cloud infrastructure dari membangun server Linux hingga clusterisasi Kubernetes.",
  },
];

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  images: string[];
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  role: string;
  period: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "kubernetes-cluster",
    title: "Kubernetes Cluster Infrastructure",
    description:
      "Setup dan konfigurasi cluster server secara mandiri menggunakan Linux. Mengelola 3-node Kubernetes cluster untuk kebutuhan riset artikel ilmiah.",
    longDescription:
      "Proyek infrastruktur mandiri untuk mendukung riset artikel ilmiah. Saya merancang dan mengelola cluster Kubernetes 3-node (1 master + 2 worker) di atas server Linux, termasuk konfigurasi networking, storage dengan Longhorn, dan deployment aplikasi menggunakan Helm charts.",
    highlights: [
      "Merancang arsitektur cluster 3-node dari nol di server Linux fisik",
      "Mengimplementasikan persistent storage dengan Longhorn",
      "Men-deploy dan mengelola workload menggunakan Helm",
      "Melakukan troubleshooting jaringan dan administrasi server",
    ],
    images: [],
    tech: ["Kubernetes", "Linux", "Docker", "Helm", "Longhorn"],
    role: "DevOps",
    period: "Oct — Dec 2025",
    category: "Infrastructure",
  },
  {
    slug: "solusitani",
    title: "SolusiTani",
    description:
      "Aplikasi web full-stack MERN Stack dengan integrasi AI Computer Vision. Deployment di Vercel, Heroku, dan Home Server.",
    longDescription:
      "SolusiTani adalah aplikasi web full-stack untuk projek kampus yang menghubungkan petani dengan solusi teknologi pertanian. Saya membangun RESTful API yang efisien, mengintegrasikan database MongoDB, dan mengimplementasikan model AI Computer Vision untuk analisis tanaman.",
    highlights: [
      "Membangun RESTful API dengan Express.js dan MongoDB",
      "Mengintegrasikan model AI Computer Vision ke backend",
      "Setup multi-environment deployment: Vercel, Heroku, dan Home Server",
      "Menghubungkan frontend React dengan layanan backend secara seamless",
    ],
    images: [],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "AI/CV"],
    role: "Web Developer & Backend Infrastructure",
    period: "Sep — Dec 2025",
    category: "Full Stack",
  },
  {
    slug: "kriya-quest",
    title: "Kriya Quest — BUDAYA GO!",
    description:
      "Platform commerce untuk promosi budaya lokal Lampung, dikembangkan untuk kompetisi BUDAYA GO! menggunakan MERN Stack.",
    longDescription:
      "Kriya Quest adalah platform e-commerce yang berfokus pada promosi dan pelestarian budaya lokal Lampung. Sebagai leader tim, saya membangun sistem frontend dan backend menyeluruh, merancang struktur database teroptimasi, dan mengintegrasikan RESTful API untuk manajemen produk budaya.",
    highlights: [
      "Memimpin tim pengembangan untuk kompetisi BUDAYA GO!",
      "Merancang database schema teroptimasi untuk katalog produk budaya",
      "Membangun full-stack MERN application dari nol",
      "Mengintegrasikan payment flow dan manajemen inventory",
    ],
    images: [],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    role: "Leader Team & Web Developer",
    period: "Oct — Nov 2025",
    category: "Competition",
  },
  {
    slug: "astech-portal",
    title: "ASTECH Portal",
    description:
      "Portal web resmi ASTECH POLINELA untuk dokumentasi, administrasi internal, dan informasi akademik.",
    longDescription:
      "Portal web resmi untuk ASTECH, himpunan mahasiswa program studi TRPL di Politeknik Negeri Lampung. Saya mengelola arsitektur informasi website untuk menyajikan dokumentasi kegiatan, administrasi internal, dan informasi akademik secara terstruktur kepada seluruh anggota.",
    highlights: [
      "Merancang arsitektur informasi untuk portal organisasi",
      "Membangun sistem administrasi internal berbasis web",
      "Mengelola dokumentasi kegiatan dan informasi akademik",
      "Mengimplementasikan autentikasi dan role-based access",
    ],
    images: [],
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    role: "Web Developer",
    period: "Sep — Dec 2025",
    category: "Organization",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}

export const awards = [
  {
    title: "Silver Award — GenVO",
    event: "International Social Entrepreneurship Business Pitching Competition",
    organizer: "Politeknik METrO Betong Sarawak",
    year: "2025",
    scope: "International",
  },
];

export const techMarquee = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "Helm",
  "Longhorn",
  "EMQX",
  "Telegraf",
  "ESP32",
  "Prometheus",
  "Grafana",
  "GitHub Actions",
  "Bitnami",
  "Git",
  "Linux",
  "Bash",
  "REST API",
  "Cloudflare Tunnel",
  "kubectl",
  "VirtualBox",
  "ArduinoIDE",
];
