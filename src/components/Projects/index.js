import React from"react";

function Projects({projectProps}){
 //console.log(projectProps);
return (
    <div className="project-card">
           <div className="project-content">
               <img src={projectProps.src} className= "project-img"alt=""></img>
               <h1 className="project-title">{projectProps.title}</h1>
               <p className="project-info">
                {projectProps.about}
               </p>
               <div className="project-btn-grp">
                <button className="project-btn github"><a href ={projectProps.repo}> github repo</a></button>
                <button className="project-btn see live"><a href ={projectProps.deploy}>see live </a></button>
                </div>
            </div> 
    </div>
)}

export default Projects