import React from"react";
function Projects(props){

return (
    <div class="project-card">
           <img src={props.src} class= "project-img"alt=""></img>
           <div class="project-content">
               <h1 class="project-title">{props.title}</h1>
               <p class="project-info">
                {props.description}
               </p>
               <div class="project-btn-grp">
                <button class="project-btn github"><a href ={props.repo}> github repo</a></button>
                <button class="project-btn live"><a href ={props.deploy}>see live </a></button>
            </div>
            </div> 
    </div>
)}

export default Projects