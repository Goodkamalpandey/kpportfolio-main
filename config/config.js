import profile from "./profile.png";
import {
  faGithub,
  faAppStore,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Home",
  links: [
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    {
      title: "Current Research and Scholarly Interests",
      link: "#ResearchScholarlyInterests",
    },
    { title: "Publications", link: "#Publications" },
    { title: "Honors and Awards", link: "#Awards" },
    {
      title: "Boards, Advisory Committees, Professional Organizations",
      link: "#Boards",
    },
    { title: "Professional Education", link: "#ProfessionalEducation" },
    { title: "Contact", link: "#contact" },
    { title: "Links", link: "/links" },
    { title: "Blog", link: "https://medium.com/@kamalkismca" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/kamalkpandey/" },
    {
      title: "Google Scholar",
      link: "https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en",
    },
  ],
};

export const intro = {
  title: "Hey, I'm Dr Kamal Pandey",
  description:
    "Kamal Pandey is an AI researcher and Solutions Architect who builds scalable intelligent systems that connect advanced research with real-world enterprise innovation at Rivian.",
  image: profile.src,
  buttons: [
    { title: "Contact Me", link: "#contact", isPrimary: true },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1MgvnMC-dLEUwewv0rvUzd5CC49Tnwfnf/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "Dr. Kamal Pandey is a Solutions Architect specializing in Artificial Intelligence, Cloud Computing, and Digital Transformation with more than 16 years of experience delivering enterprise-scale technology initiatives.",
    "At Rivian, he shapes digital and cloud strategy, modern workplace platforms, and AI-driven solutions that support sustainable innovation in the electric vehicle ecosystem.",
    "He has led transformation programs across global organizations including Rivian, Samsung, Goodyear, Eaton, and Merck, focusing on enterprise architecture, intelligent automation, and data platforms.",
    "Dr. Pandey holds doctoral, master’s, and bachelor’s degrees in Computer Science and actively publishes research on agentic AI, conversational resilience, digital twins, and intelligent edge-cloud systems.",
    "He is also the founder of SAInexus, an AI innovation initiative focused on multi-cloud autonomous intelligence platforms.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "AI & Cloud Architecture",
      description:
        "Designs and delivers AI-powered, cloud-native platforms that enable scalable digital capabilities across engineering, manufacturing, and enterprise operations.",
      icons: null,
    },
    {
      title: "AI Research",
      description:
        "Focuses on agentic AI, large language models, and intelligent automation—bridging research with production systems to improve reliability and decision intelligence.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Books & Research Monographs",
      description: "AI-2050: Visions of Future & Sustainability",
      icons: [
        {
          icon: faAppStore,
          link: "https://www.amazon.com/-/es/Kamal-Pandey-ebook/dp/B0GCKZTPPT",
        },
        { icon: faGithub, link: "https://github.com/Goodkamalpandey" },
      ],
    },
    {
      title: "ResearchGate Profile",
      description:
        "View complete research record on ResearchGate (21+ publications, multiple articles & conference papers).",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://www.researchgate.net/profile/Kamal-Pandey-21",
        },
      ],
    },
    {
      title: "Professional Education",
      description:
        "Ph.D., Computer Science • Master’s, Computer Science • Bachelor’s, Computer Science",
      icons: [{ icon: faGraduationCap, link: "#" }],
    },
  ],
};

export const publications = {
  title: "Publications",
  papers: [
    {
      title:
        "Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap",
      journal: "Journal of Computer Science and Technology Studies (2025)",
      link: "https://al-kindipublishers.org/index.php/jcsts/article/view/11004",
      authors: "Kamal Pandey",
    },
    {
      title:
        "The Convergence of Artificial Intelligence and Low-Code/No-Code Platforms: Evolution, Applications, and Benchmarks",
      journal: "IEEE Access (2025)",
      link: "https://www.researchgate.net/publication/394170940_The_Convergence_of_Artificial_Intelligence_and_Low-CodeNo-_Code_Platforms_Evolution_Applications_and_Benchmarks",
      authors: "Kamal Pandey",
    },
    {
      title:
        "Framework for Next-Generation Predictive Maintenance of Software-Defined Vehicles Using Cloud, Edge Computing and Modern AI",
      journal: "Preprints.org (2025)",
      link: "#",
      authors: "Kamal Pandey",
    },
    {
      title:
        "Designing Ethical AI for Development: Challenges & Opportunities in Humanitarian Engineering and Electric Vehicles",
      journal: "Preprints.org (2025)",
      link: "#",
      authors: "Kamal Pandey",
    },
    {
      title:
        "Artificial Intelligence (AI) in Electric Vehicle Ecosystems: Challenges, Opportunities, and Models for Accelerated Adoption",
      journal: "Conference Paper (2024)",
      link: "#",
      authors: "Kamal Pandey",
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat welcome — feel free to reach out directly or schedule time to connect.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:kamalkismca@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/Kamalpandey",
      isPrimary: false,
    },
  ],
};

export const SEO = {
  title:
    "Dr Kamal Pandey | AI Architect & Researcher | Agentic AI | Cloud & Digital Transformation",
  description:
    "Dr. Kamal Pandey is a technology strategist and researcher specializing in AI, cloud computing, and enterprise innovation.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@Kamalpandey",
  description: "Computer Engineer • AI Researcher • Software Architect",
  cards: [
    { title: "My Website", link: "https://drKamalpandey.com/" },
    { title: "GitHub", link: "https://github.com/Goodkamalpandey/" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/kamalkpandey/" },
    {
      title: "ResearchGate",
      link: "https://www.researchgate.net/profile/Kamal-Pandey-21",
    },
    {
      title: "Google Scholar",
      link: "https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en",
    },
  ],
};
