import profile from "./profile.png";
import {
  faGithub,
  faAppStore,
  faGooglePlay,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faFileAlt,
  faAward,
  faBrain,
  faCloud,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Dr. Kamal Pandey",
  links: [
    { title: "About", link: "#about" },
    { title: "Research", link: "#ResearchScholarlyInterests" },
    { title: "Publications", link: "#Publications" },
    { title: "Honors", link: "#Awards" },
    { title: "Experience", link: "#work" },
    { title: "Contact", link: "#contact" },
    { title: "Blog", link: "https://medium.com/@kamalkismca" },
  ],
};

export const intro = {
  title: "Architecting the Future of Agentic AI",
  name: "Dr. Kamal Pandey",
  description:
    "Solutions Architect & AI Researcher specializing in scalable intelligent systems and autonomous innovation. Bridging the gap between doctoral-level research and enterprise-scale execution at Rivian.",
  image: profile.src,
  buttons: [
    { title: "Inquire for Collaboration", link: "#contact", isPrimary: true },
    {
      title: "View Portfolio",
      link: "https://drive.google.com/file/d/1MgvnMC-dLEUwewv0rvUzd5CC49Tnwfnf/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Professional Profile",
  description: [
    "Dr. Kamal Pandey is a technology strategist with over 16 years of leadership in Artificial Intelligence, Cloud Computing, and Digital Transformation. At Rivian, he drives the digital strategy for the electric vehicle ecosystem, focusing on intelligent automation and software-defined vehicle architectures.",
    "A recognized global influencer, he was named to the 'Artificial Intelligence 150 (AI150)' for 2025–2026. His work transitions complex theoretical models—such as Agentic Self-Correction and Synthetic Reasoning—into robust industrial applications.",
    "Founder of SAInexus, he has architected global transformation programs for industry titans including Samsung, Goodyear, and Merck, consistently delivering 1% level innovation in high-stakes environments.",
    "He holds a Doctorate and advanced degrees in Computer Science, and is a Senior Member of the IEEE and IET, reflecting a career-long commitment to technical excellence and ethical AI governance.",
  ],
};

export const work = {
  title: "Core Competencies",
  cards: [
    {
      title: "Enterprise AI Architecture",
      description:
        "Engineering resilient, cloud-native platforms that integrate LLMs and Agentic AI into manufacturing and operational workflows.",
      icon: faBrain,
    },
    {
      title: "Cloud & Digital Strategy",
      description:
        "Leading multi-cloud digital transformation initiatives that prioritize scalability, security, and sustainable innovation.",
      icon: faCloud,
    },
    {
      title: "SDV & Predictive Systems",
      description:
        "Developing next-generation frameworks for Software-Defined Vehicles using Edge computing and Digital Twin technology.",
      icon: faCar,
    },
  ],
};

export const publications = {
  title: "Selected Scholarly Works",
  papers: [
    {
      title:
        "The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction",
      journal: "IJSRCSE (2025)",
      link: "https://www.researchgate.net/profile/Kamal-Pandey-21",
      authors: "Kamal Pandey",
    },
    {
      title: "Synthetic Reasoning: Verifiable AI by Modular Program Synthesis",
      journal: "World Journal of AI & Robotics Research (2025)",
      link: "https://doi.org/10.63620/MK.WJAIRR.2025",
      authors: "Kamal Pandey",
    },
    {
      title:
        "The Convergence of AI and Low-Code Platforms: Evolution, Applications, and Benchmarks",
      journal: "IEEE Access (2025)",
      link: "https://www.researchgate.net/publication/394170940",
      authors: "Kamal Pandey",
    },
    {
      title:
        "An Architectural Framework for AI-Driven Intelligent Commerce: The Data Nervous System",
      journal: "Jana Nexus: Journal of Computer Science (2025)",
      link: "#",
      authors: "Kamal Pandey",
    },
  ],
};

export const honors = {
  title: "Honors and Awards",
  awards: [
    {
      title: "Artificial Intelligence 150 (AI150)",
      organization: "Global AI Influencers 2025-2026",
      year: "2025",
    },
    {
      title: "National Geomatics Award",
      organization: "Indian Society of Geomatics (ISRO Campus)",
      year: "2022",
    },
    {
      title: "Senior Member Grade",
      organization: "IEEE & IET",
      year: "Professional Recognition",
    },
  ],
};

export const projects = {
  title: "Key Initiatives",
  cards: [
    {
      title: "AI-2050: Visions of Future",
      description:
        "Research Monograph exploring the intersection of advanced AI and global sustainability metrics.",
      icons: [
        { icon: faAppStore, link: "https://www.amazon.com/dp/B0GCKZTPPT" },
      ],
    },
    {
      title: "SInexus Innovation",
      description:
        "An autonomous intelligence platform designed for multi-cloud orchestration and secure signal ingestion.",
      icons: [{ icon: faGithub, link: "https://github.com/Goodkamalpandey" }],
    },
  ],
};

export const contact = {
  title: "Connect",
  description:
    "Available for strategic consulting, research inquiries, and high-level tech discourse.",
  buttons: [
    {
      title: "Email Dr. Pandey",
      link: "mailto:kamalkismca@gmail.com",
      isPrimary: true,
    },
    {
      title: "Topmate.io Consultation",
      link: "https://topmate.io/Kamalpandey",
      isPrimary: false,
    },
  ],
};

export const SEO = {
  title:
    "Dr. Kamal Pandey | AI Solutions Architect | Rivian | Agentic AI Expert",
  description:
    "Dr. Kamal Pandey is a leading expert in AI, custom AI application development, software engineering, cloud architecture, and digital transformation. He is the Founding CTO of Kentron AI and SAInexus, and serves as a Sr Staff Software Architect at Rivian.",
  image: profile.src,
};
