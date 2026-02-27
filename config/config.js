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
  ],
};
export const intro = {
  title: "Hey, I'm Dr Kamal Pandey",
  description: "A Computer Engineer creating mobile apps and static websites.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "Dr. Kamal Pandey is a technology strategist, researcher, and author focused on the evolving relationship between artificial intelligence, cloud computing, and enterprise innovation. With over 16 years of experience across industries including automotive, manufacturing, and technology, he has led large-scale initiatives spanning digital transformation, intelligent automation, and modern workplace platforms",
    "Kamal work centers on translating complex technological advances into practical frameworks that organizations can adopt to drive measurable impact. He has contributed to research and thought leadership on AI-driven systems, digital twins, and next-generation enterprise architectures, and frequently writes about the future of work and human-AI collaboration",
    "As an author, his mission is to make sophisticated ideas accessible while challenging readers to think critically about how technology shapes society, leadership, and decision-making..",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "AI App Development",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description:
        "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/Kamalpandey/star_book",
        },
      ],
    },
    {
      title: "QuranTalk",
      description:
        "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
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
