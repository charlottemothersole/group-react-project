import './Form.css';
import Image from './image.jpg';
import React, { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    function handleNameChange(e) {
        setName(e.target.value)
    }    

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }    

    function handleMessageChange(e) {
        setMessage(e.target.value)
    }    

    const handleSubmit = (event) => {
        // event.preventDefault();
        
    }

    return (
        <div id='form'>
            <form  onSubmit={handleSubmit}  method='POST' action='https://formspree.io/f/mjvdqgro'>            
                <input name='name' id='name' type='text' placeholder='Your Name:' value={name} onChange={handleNameChange}></input>
                <input name='email' id='email' type='email' placeholder='Your Email Address:' value={email} onChange={handleEmailChange}></input>
                <input name='message' id='message' type='text' placeholder='Your Message:' value={message} onChange={handleMessageChange}></input>
                <button id='submit-charlotte' type='submit'>Submit to Charlotte</button>
                {/* <button id='submit-robyn' type='button'>Submit to Robyn</button> */}
            </form>
            <img height='300px' width='350px' src={Image} alt='img text'/>
            
            <h2>Current User Input: </h2>
            <h4>{message}</h4>
        </div>        
    )
}

// export default Form;