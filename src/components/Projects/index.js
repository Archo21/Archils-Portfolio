import React from"react";
function Projects(props){

return (
    <div class="project-card">
           <img src={props.src} class= "project-img"alt=""></img>
           <div className="project-content">
               <h1 className="project-title">{props.title}</h1>
               <p className="project-info">
                {props.description}
               </p>
               <div className="project-btn-grp">
                <button className="project-btn github"><a href ={props.repo}> github repo</a></button>
                <button className="project-btn live"><a href ={props.deploy}>see live </a></button>
            </div>
            </div> 
    </div>
)}

export default Projects