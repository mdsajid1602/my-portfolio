import React from "react";
import "./education.css";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      year: "   8.10 CGPA - 2021 - 2025",
      institute: "Engineering College Bikaner",
    },
    {
      degree: "12th Grade",
      year: "[76.20%]  2018 - 2020",
      institute: "M.K.Colege Darbhanga",
    },
    {
      degree: "10th Grade",
      year: "[62.80%] 2017-2018",
      institute: "+2 High School Nehra",
    },
  ];

  return (
    <section className="edu-section">
      <h1 className="edu-heading">EDUCATION</h1>
      <div className="edu-container">
        <div className="edu-line"></div>
        <div className="edu-items">
          {educationData.map((edu, index) => (
            <div className="edu-item" key={index}>
              <span className="edu-circle"></span>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-year">{edu.year}</span>
                <p className="edu-institute">{edu.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
