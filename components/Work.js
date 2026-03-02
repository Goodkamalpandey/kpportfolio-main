import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Skills = ({ title, cards }) => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="skills-grid">
          {cards.map((value, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <FontAwesomeIcon icon={value.icon} />
              </div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {cards.map((value, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="project-card">
                <div className="project-top">
                  <div className="folder-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    {value.icons &&
                      value.icons.map((iconItem, i) => (
                        <Link key={i} href={iconItem.link}>
                          <a target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                              className="icon-style"
                              icon={iconItem.icon}
                              size="lg"
                            />
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
