import React from"react";
import me from "../../Assets/images/home.jpeg"
function Header(){
    return(
        <section className="home-section active ">
    <h1 className="hero-heading">Archils Oburu<br /> portfolio </h1>
    <img src={me}className = "home.jpeg" alt=""/>
 </section>
    )
}
export default Header