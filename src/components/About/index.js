import React from "react";
import home from "../../Assets/images/home.jpeg";
import pdf from "../../utils/pdf/Archils.pdf"
function About (){
    return (
    <section id="about-section">
    
    <div className="about">
    <div className="about-img-container">
        <img src={home} className="about-img" alt=""/>
        <a  src={pdf} href= "download-cv-btn ">downlaod cv</a>
    </div>
    <p class="about-info"> I,m junior full stack web developer certificated holder from University of Washington , self-motivated, innovative, committed team player
        seeking to offer core competence, hardworking,dynamic,flexible, open mindedand nonjudgmental, 
        able to work independently with minimal supervision,
        and to execute service and duties allocated
        ahead of me. 
        </p>
        </div>
</section>
 )}
 export default About