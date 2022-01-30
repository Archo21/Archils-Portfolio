import React,{useState} from"react";
import emailValidator from "../../utils/helper.js"

function Contact(){
const [formState,setFormState]=useState({
    name:"Archils Oburu",
    email:"oburuarchils@gmail.com",
    message:""
})
const[errorMessage,setErrorMessage]=useState("")

const handleSubmit = (e)=>{
e.preventDefault()
if (!errorMessage){
    console.log("form Submitted",formState);
}
}
const handleChange =(e)=>{
    if (e.target.name==="email"){
        const validEmail = emailValidator(e.target.value)
        if(!validEmail){
            setErrorMessage("Invalid email")
        }
        else{setErrorMessage("")
    }

    }
    else{
        if (!e.target.value.length){
            setErrorMessage(`${e.target.name} is required`)
        }
        else {setErrorMessage("")}
    }
    if(!errorMessage){
        setFormState({...formState,[e.target.name]:e.target.value
        })
        console.log(formState);
    }
}
return(
    <section id="contact-section">
<form class="contact-form"onSubmit={handleSubmit}>
<input type="text" name="name" id="name" outcomplete="off" placeholder="name" onBlur ={handleChange}/>
<input type="text" name="email" id="email" outcomplete="off" placeholder="email" onBlur ={handleChange}/>
<textarea name="msg" id="msg" placeholder="message" outcomplete="off"onBlur ={handleChange}></textarea>
<button type="submit" class="form-submit-btn">contact</button>

{errorMessage&&(
    <div>
        <p className = "error">{errorMessage}</p>
    </div>
)}
</form>
    
</section>
)
}
export default Contact