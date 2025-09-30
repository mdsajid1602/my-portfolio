// File: Project.jsx
import React from "react";
import "./projects.css";


export default function Projects() {
// Simple array with project details
const projects = [
{
image: "/Planning.png",
name: "Event Planning",
description: "This is a minor MERN Stack event Planning Project.",
github: "https://github.com/mdsajid1602",
live: "https://github.com/mdsajid1602",
},
{
image: "/restaurant.png",
name: "Restro-Bar",
description: "A full stack project based on restaurant management system.",
github: "https://github.com/mdsajid1602",
live: "https://github.com/mdsajid1602",
},
{
image: "/Task.png",
name: "TaskApp",
description: "A MERN Stack Task App full CRUD operated",
github: "https://github.com/mdsajid1602/TaskApp",
live: "https://github.com/mdsajid1602/TaskApp",
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