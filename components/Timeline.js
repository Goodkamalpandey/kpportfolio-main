import React from "react";

export const Timeline = ({ title, timeline }) => {
  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              {item.period && (
                <div className="timeline-period">{item.period}</div>
              )}
              <h4>{item.role}</h4>
              <div className="timeline-company">@ {item.company}</div>
              {item.location && (
                <div className="timeline-location">{item.location}</div>
              )}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
