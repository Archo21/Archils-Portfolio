
//import { link } from "fs";
import React from "react";
import pdf from "../../utils/pdf/Archils.pdf"
function Footer (){
    const icons = [
        {
            name:"fab fa-github fa-2x",
            link:"https://github.com/Archo21"
    
        },
        {
            name:"fab fa-linkedin fa-2x",
            link:"https://www.linkedin.com/in/archils-oburu-383b60217"
        },
        
        {
            name:"fas fa-file-pdf fa-2x",
            link: pdf
        }
        //add pdf above
    ]
    return(
        <footer className = 'footer'>
    {icons.map(icon => (
        <a href = {icon.link} key={icon.name} target = "_blank" rel="noopener noreferrer"><i className = {icon.name}></i></a>
    )) }
        </footer>
    )
}
export default Footer