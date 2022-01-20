import React from "react"

function Navbar(props){

return(
<nav className="navbar">
    <ul class="link-group">
        <li className="link active"><a href="#home-section">Home</a></li>
        <li className="link"><a href="#project-section">Projects</a></li>
        <li className="link"><a href="#about-section">About</a></li>
        <li className="link"><a href="#contact-section">Contact</a></li>
    </ul>
</nav>
)}
export default Navbar