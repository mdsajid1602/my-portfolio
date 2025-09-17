// File: Project.jsx
import React from "react";
import "./projects.css";


export default function Projects() {
// Simple array with project details
const projects = [
{
image: "/Planning.png",
name: "Project One",
description: "This is a short description of project one.",
github: "https://github.com/yourname/project-one",
live: "https://your-live-link-one.com",
},
{
image: "/restaurant.png",
name: "Project Two",
description: "This is a short description of project two.",
github: "https://github.com/yourname/project-two",
live: "https://your-live-link-two.com",
},
{
image: "/Task.png",
name: "Project Three",
description: "This is a short description of project three.",
github: "https://github.com/yourname/project-three",
live: "https://your-live-link-three.com",
},
];


return (
<section className="pc-section">
  <h1 className="pc-heading">PROJECTS</h1>
  
<div className="pc-container">
{projects.map((p, index) => (
<div className="pc-card" key={index}>
<div className="pc-image-wrap">
<img src={p.image} alt={p.name} className="pc-image" />
</div>
<div className="pc-body">
<h3 className="pc-title">{p.name}</h3>
<p className="pc-desc">{p.description}</p>
</div>
<div className="pc-footer">
<a href={p.github} target="_blank" rel="noopener noreferrer" className="pc-btn pc-btn-outline">
GitHub
</a>
<a href={p.live} target="_blank" rel="noopener noreferrer" className="pc-btn pc-btn-primary">
Live Demo
</a>
</div>
</div>
))}
</div>
</section>
);
}