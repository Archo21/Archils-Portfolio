import React from "react";
function Skills (){
    return(
        <section>
    <div className="skills-section">
        <h1 className="heading">skills</h1>
        <div className="skills-container">
            <div className="skills-card">
                <img src="images/html.png" className="skill-img" alt=""/>
                <div className="skill-level">95%</div>
                <h1 className="skill-name">HTML</h1>
                <p className="skil-info">HTML, or Hypertext Markup Language.</p>

            </div>
            <div className="skills-card">
                <img src="images/reactjs.png" className="skill-img" alt=""/>
                <div className="skill-level">85%</div>
                <h1 className="skill-name">reactjs</h1>
                <p className="skil-info">Front-End JavaScript library for building user interfaces</p>

            </div>
            <div className="skills-card">
                <img src = "" className="skill-img" alt=""/>
                <div className="skill-level">90%</div>
                <h1 className="skill-name">CSS</h1>
                <p className="skil-info">Cascading Style Sheets, or CSS</p>

            </div>
            <div className="skills-card">
                <img src="images/nodejs.png" className="skill-img" alt=""/>
                <div className="skill-level">80%</div>
                <h1 className="skill-name">nodejs</h1>
                <p className="skil-info">Back-end JavaScript runtime environment</p>
            </div>
            
        </div>
    </div>
</section>
    )
}
export default Skills