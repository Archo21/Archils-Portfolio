import React from"react";
import me from '../../Assets/images/Archo.jpg';


function Header(){
    return(
        <section>
        <div className="home-section.active ">
            
                <h1 className="hero-heading">Archils<br /> portfolio </h1>
        
                <img src={me}className = "homeImg" alt=""/>
        </div>
            
    </section>
    )
}
export default Header