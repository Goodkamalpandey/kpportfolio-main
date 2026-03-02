import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = ({ title, description, buttons }) => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="contact-overline">What&apos;s Next?</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="contact-buttons">
          {buttons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a
                className={value.isPrimary ? "btn-accent-filled" : "btn-accent"}
                target={
                  value.link.startsWith("mailto:") || value.link.startsWith("#")
                    ? "_self"
                    : "_blank"
                }
                rel="noreferrer"
              >
                {value.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = ({ socialLinks }) => {
  return (
    <footer className="footer-dark">
      <div className="container">
        {socialLinks && socialLinks.length > 0 && (
          <div className="footer-social">
            {socialLinks.map((value, index) => (
              <a key={index} href={value.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={value.icon} />
              </a>
            ))}
          </div>
        )}
        <div className="footer-text">
          <small>
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/">
              <a>Dr. Kamal Pandey</a>
            </Link>
            . All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};
