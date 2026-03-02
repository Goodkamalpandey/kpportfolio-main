import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export const Honors = ({ title, awards }) => {
  return (
    <section id="honors" className="section honors-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {awards.map((award, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="honor-card">
                <div className="honor-icon">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h4>{award.title}</h4>
                <p className="honor-org">{award.organization}</p>
                <span className="honor-year">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
