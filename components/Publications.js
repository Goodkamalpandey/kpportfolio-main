import React from "react";
import Link from "next/link";

export const Publications = ({ title, papers }) => {
  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        {papers.map((paper, index) => (
          <div key={index} className="publication-item">
            <h5>
              <Link href={paper.link}>
                <a target="_blank" rel="noreferrer">
                  {paper.title}
                </a>
              </Link>
            </h5>
            <div className="pub-meta">
              <span className="pub-journal">{paper.journal}</span>
              <span className="pub-authors">{paper.authors}</span>
            </div>
            <Link href={paper.link}>
              <a className="pub-link" target="_blank" rel="noreferrer">
                View Paper →
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
