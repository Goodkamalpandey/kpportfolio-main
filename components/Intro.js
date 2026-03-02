import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = ({ title, description, image, socialLinks }) => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="about-content">
          <div className="about-image-wrapper">
            <img className="about-image" src={image} alt="profile" />
          </div>
          <div className="about-text">
            {description.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
            {socialLinks && socialLinks.length > 0 && (
              <div className="social-links">
                {socialLinks.map((value, index) => (
                  <a
                    key={index}
                    href={value.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={value.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
