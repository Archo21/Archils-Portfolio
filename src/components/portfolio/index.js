import React from "react";
import projects from "../../utils/project.json";
import Projects from "../Projects";

 function Portfolio (){
    const projectCard = projects.projects.map((projectItem)=> {
        return <Projects projectProps={projectItem}/>
    })
    return (
    <section id="project-section">
    <h1 class= "project-heading"> some of my projects</h1>
    <div class= "project-container">
        {projectCard}
    </div>
    </section>
    )
    
 }
 export default Portfolio