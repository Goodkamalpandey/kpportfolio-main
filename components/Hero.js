import React from "react";
import Link from "next/link";

export const Hero = ({ title, name, description, buttons, affiliations }) => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-greeting">Welcome. My name is</div>
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-tagline">{title}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-cta">
          {buttons.map((value, index) =>
            value.isPrimary ? (
              <Link key={index} href={value.link}>
                <a className="btn-accent-filled">{value.title}</a>
              </Link>
            ) : (
              <Link key={index} href={value.link}>
                <a className="btn-accent" target="_blank" rel="noreferrer">
                  {value.title}
                </a>
              </Link>
            ),
          )}
        </div>
        {affiliations && affiliations.length > 0 && (
          <div className="hero-logos">
            {affiliations.map((name, index) => (
              <span key={index} className="logo-item">
                {name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <div className="scroll-arrow"></div>
        </a>
      </div>
    </section>
  );
};
