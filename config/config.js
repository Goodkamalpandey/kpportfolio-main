import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Kamal",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@Kamalpandey",
    },
    {
      title: "Google scholar ",
      link: "https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Dr Kamal Pandey",
  description:
    "Kamal Pandey is an AI researcher and architect who builds scalable, real-world intelligent systems that bridge cutting-edge research with enterprise innovation at Rivian.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
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
    "Dr. Kamal Pandey is a Solutions Architect specializing in Artificial Intelligence, Cloud Computing, and Digital Transformation, with more than 16 years of experience delivering large-scale technology initiatives across global enterprises. He currently serves at Rivian, where he plays a key role in shaping digital and cloud strategy, enabling modern workplace capabilities, and integrating advanced AI solutions to support the company’s mission of sustainable innovation in the electric vehicle industry.",
    "In industry, Dr. Pandey has led and contributed to transformative programs across organizations including Rivian, Samsung, Goodyear, Eaton, and Merck, focusing on enterprise architecture, cloud modernization, intelligent automation, and data-driven platforms. He is also the Founder of SAInexus, an AI innovation initiative centered on multi-cloud agentic systems and next-generation autonomous intelligence frameworks.",
    "Dr. Pandey holds a Ph.D., master’s, and bachelor’s degree in Computer Science. His academic and professional work spans artificial intelligence, distributed systems, enterprise platforms, and digital operating models. He has authored multiple research papers and technical publications, with current research exploring areas such as agentic AI architectures, conversational resilience in large language models, AI-powered digital twins, and intelligent edge-cloud systems.",
    "A recognized technology leader and innovator, Dr. Pandey is known for bridging research and real-world impact—translating emerging technologies into scalable enterprise solutions. He actively mentors technologists and contributes to the broader AI and cloud community through publications, thought leadership, and collaborative research.",
    "Dr. Pandey’s work is driven by a focus on building resilient, human-centered intelligent systems that enhance organizational agility and unlock new forms of digital value across industries.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "AI Software developmnet ",
      description:
        "Kamal Pandey is a Solutions Architect focused on turning ambitious ideas into production-ready digital capabilities. At Rivian, he designs and delivers AI-powered and cloud-native solutions that strengthen the company’s digital backbone—from modern workplace platforms and intelligent automation to scalable cloud architectures that support engineering, manufacturing, and business operations.",
      icons: null,
    },
    {
      title: "AI Researcher ",
      description:
        "AI Researcher at Rivian Kamal Pandey is an AI Researcher focused on advancing practical, enterprise-grade artificial intelligence. His work centers on large language models, agentic AI systems, and intelligent automation, exploring how these technologies can improve decision-making, reliability, and operational efficiency. At Rivian, he bridges research and real-world deployment—designing scalable AI architectures and contributing to next-generation intelligent platforms that support innovation across engineering and digital operations.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Books",
      description: "AI-2050-Visions-Future-Sustainability",
      icons: [
        {
          icon: faAppStore,
          link: "https://www.amazon.in/AI-2050-Visions-Future-Sustainability/dp/B0FV3W41W2x",
          icon: faAppStore,
          link: "https://www.amazon.com/-/es/Kamal-Pandey-ebook/dp/B0GCKZTPPT",
        },
        {
          icon: faGithub,
          link: "https://github.com/Goodkamalpandey",
        },
      ],
    },
    {
      title: "Researchgate",
      description:
        "Kamal Pandey is an AI researcher and technology leader with a Doctor of Business Administration and over 16 years of global experience across AI, cloud computing, and digital transformation. He serves as an AI & Cloud Solutions Architect at Rivian and has authored multiple research publications spanning intelligent systems, AI-driven commerce, predictive maintenance, and the future of digital workplaces",
      icons: [
        {
          icon: faAppStore,
          link: "https://www.researchgate.net/profile/Kamal-Pandey-21",
        },
        {
          icon: faGooglePlay,
          link: "https://www.researchgate.net/profile/Kamal-Pandey-21",
        },
      ],
    },
    {
      title: "Portfolio",
      description:
        "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/Kamalpandey/portfolio",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at Kamalpandey@gmail.com.",
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

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title:
    "Dr Kamal Pandey| Solutions Architect | Researcher- Agentic &, Applied AI | Cloud Solutions | Digital Workplace | Intelligent automation (IA) | Enterprise Architecture | Startup Engineer | AI Enthusiast | Guest Lecturer",
  description:
    "Dr. Kamal Pandey is a technology strategist, researcher, and author focused on the evolving relationship between artificial intelligence, cloud computing, and enterprise innovation",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@Kamalpandey",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://Kamalpandey.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/Kamalpandey/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/Kamalpandey/",
    },
  ],
};
