
//import { link } from "fs";
import React from "react";
// import pdf from "Archils pdf"
// later to complete
function Footer (){
    const icons = [
        {
            name:"fab fa-github",
            link:"Archo21"
    
        },
        {
            name:"fab fa-linkedin",
            link:"oburuarchils"
        },
        {
            name: "fa fa- envelop",
            link:""
        }
        //add pdf above
    ]
    return(
        <footer className = 'footer'>
    {icons.map(icon => (
        <a href = {icon.link} key={icon.name} rel="noopener noreferrer" target = "_blank"><i className = {icon.name}></i></a>
    )) }
        </footer>
    )
}
export default Footer