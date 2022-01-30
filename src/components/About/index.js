import React from "react";
import home from "../../Assets/images/home.jpeg";
function About (){
    return (
    <section id="about-section">
    
    <div className="about">
    <div className="about-img-container">
        <img src={home} className="about-img" alt=""/>
        {/* <button class="download-cv-btn">downlaod cv</button> */}
    </div>
    <p class="about-info"> I,m junior full stack web developer, self-motivated, innovative, committed team player
        seeking to offer core competence, hardworking,dynamic,flexible, open mindedand nonjudgmental, 
        able to work independently with minimal supervision,
        and to execute service and duties allocated
        ahead of me. 
        </p>
        </div>
</section>
 )}
 export default About