import React from "react";
import projects from "../../utils/project.js";
import Projects from "../Projects";


 function Portfolio (){
    const projectCard = projects.map((projectItem)=> {
     
        return <Projects projectProps={projectItem}/>
        
    })
    return (
    <section id="project-section">
    <h1 className= "project-heading">My Projects</h1>
    <div className= "project-container">
        {projectCard}
    </div>
    </section>
    )
    
 }
 export default Portfolio