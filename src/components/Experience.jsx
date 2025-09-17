import React from "react";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "AMITKK Digital Solutions | May 2025 – Present",
      work: "Working as a Frontend Developer focusing on building dynamic, scalable, and responsive web applications. The projects I have contributed to are listed in the Projects section above.",
    },
    {
      title: "Frontend Developer Intern",
      company: "AMITKK Digital Solutions | May 2025 – Present",
      work: "Working as a Frontend Developer focusing on building dynamic, scalable, and responsive web applications. The projects I have contributed to are listed in the Projects section above.",
    },
  ];

  const techStack = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "DevOps",
      skills: ["Vercel", "Hostinger", "GitHub Pages"],
    },
  ];

  return (
    <div className="exp-container">
      <h1>Work Experience</h1>
      <div className="experience">
        {experiences.map((experience, index) => (
          <div className="exp" key={index}>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.work}</p>
          </div>
        ))}
      </div>

      <h1>Tech Skills</h1>


      

      <div className="tech-container">
        {techStack.map((category, index) => (
          <div className="tech" key={index}>
            <h3>{category.title}</h3>
            <div className="skills">
              {category.skills.map((skill, i) => (
                <div className="btn" key={i}>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
