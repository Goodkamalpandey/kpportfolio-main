import React, { Fragment } from "react";
import { Nav } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/Intro";
import { Skills, Projects } from "../components/Work";
import { Publications } from "../components/Publications";
import { Honors } from "../components/Honors";
import { Timeline } from "../components/Timeline";
import { Footer, Contact } from "../components/Footer";
import { Header } from "../components/Header";
import {
  about,
  contact,
  intro,
  navigation,
  projects,
  publications,
  honors,
  experience,
  socialLinks,
  SEO,
  work,
} from "../config/config";

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <Hero
        title={intro.title}
        name={intro.name}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
        affiliations={intro.affiliations}
      />
      <About
        title={about.title}
        description={about.description}
        image={intro.image}
        socialLinks={socialLinks}
      />
      <Skills title={work.title} cards={work.cards} />
      <Publications title={publications.title} papers={publications.papers} />
      <Honors title={honors.title} awards={honors.awards} />
      <Projects title={projects.title} cards={projects.cards} />
      <Timeline title={experience.title} timeline={experience.timeline} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer socialLinks={socialLinks} />
    </Fragment>
  );
}
