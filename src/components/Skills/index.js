import React from "react";
function Skills (){
    return(
        <section>
    <div class="skills-section">
        <h1 class="heading">skills</h1>
        <div class="skills-container">
            <div class="skills-card">
                <img src="images/html.png" class="skill-img" alt=""/>
                <div class="skill-level">95%</div>
                <h1 class="skill-name">HTML</h1>
                <p class="skil-info">HTML, or Hypertext Markup Language.</p>

            </div>
            <div class="skills-card">
                <img src="images/reactjs.png" class="skill-img" alt=""/>
                <div class="skill-level">85%</div>
                <h1 class="skill-name">reactjs</h1>
                <p class="skil-info">A JavaScript library for building user interfaces</p>

            </div>
            <div class="skills-card">
                <img src = "" class="skill-img" alt=""/>
                <div class="skill-level">90%</div>
                <h1 class="skill-name">CSS</h1>
                <p class="skil-info">Cascading Style Sheets, or CSS</p>

            </div>
            <div class="skills-card">
                <img src="images/nodejs.png" class="skill-img" alt=""/>
                <div class="skill-level">80%</div>
                <h1 class="skill-name">nodejs</h1>
                <p class="skil-info">Back-end JavaScript runtime environment</p>

            </div>
        </div>
    </div>
</section>
    )
}
export default Skills