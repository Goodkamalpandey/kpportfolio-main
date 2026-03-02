import React from "react";
import Link from "next/link";

export const Hero = ({
  title,
  name,
  description,
  image,
  buttons,
  affiliations,
}) => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        {image && <img className="hero-profile-img" src={image} alt={name} />}
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-tagline">{title}</h2>
        <div className="hero-cta">
          {buttons.map((value, index) =>
            value.isPrimary ? (
              <Link key={index} href={value.link}>
                <a className="btn-hero">{value.title}</a>
              </Link>
            ) : (
              <Link key={index} href={value.link}>
                <a className="btn-hero" target="_blank" rel="noreferrer">
                  {value.title}
                </a>
              </Link>
            ),
          )}
        </div>
        {affiliations && affiliations.length > 0 && (
          <div className="hero-logos">
            {affiliations.map((aff, index) => (
              <span key={index} className="logo-item">
                {aff}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
