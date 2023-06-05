import './Form.css';
import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import React, { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [robynName, robynSetName] = useState("");
    const [robynEmail, robynSetEmail] = useState("");
    const [robynMessage, robynSetMessage] = useState("");
    
    function handleNameChange(e) {
        setName(e.target.value)
    }    

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }    

    function handleMessageChange(e) {
        setMessage(e.target.value)
    }    

    function handleRobynNameChange(e) {
        robynSetName(e.target.value)
    }    

    function handleRobynEmailChange(e) {
        robynSetEmail(e.target.value)
    }    

    function handleRobynMessageChange(e) {
        robynSetMessage(e.target.value)
    }    

    const handleSubmitCharlotte = (event) => {
        // event.preventDefault();
        
    }

    const handleSubmitRobyn = (event) => {
        // event.preventDefault();
        
    }

    return (
        <div id ='contact-section'>
            <div id='form-container-charlotte'>
                <div id='form-charlotte'>
                    <form id='charlotte' onSubmit={handleSubmitCharlotte}  method='POST' action='https://formspree.io/f/mjvdqgro'>            
                        <input class="input-field" name='name' id='name' type='text' placeholder='Your Name:' value={name} onChange={handleNameChange}></input>
                        <input class="input-field" name='email' id='email' type='email' placeholder='Your Email Address:' value={email} onChange={handleEmailChange}></input>
                        <textarea class="input-field" name='message' id='message' type='text' placeholder='Your Message:' value={message} onChange={handleMessageChange}></textarea>
                        <button id='submit-charlotte' type='submit'>Submit to Charlotte</button>
                    </form>
                {/* <h2>Current User Input: </h2>
                <h4>{message}</h4>  */}
                </div> 
            </div>            
            <img id='img-charlotte' height='400px' width='500px' src={Image1} alt='img text'/>             
            <div id='form-container-robyn'>
                <div id='form-robyn'>
                    <form id='robyn' onSubmit={handleSubmitRobyn}  method='POST' action='https://formspree.io/f/mjvdqgro'>            
                        <input class="input-field" name='robynName' id='robynName' type='text' placeholder='Your Name:' value={robynName} onChange={handleRobynNameChange}></input>
                        <input class="input-field" name='robynEmail' id='robynEmail' type='email' placeholder='Your Email Address:' value={robynEmail} onChange={handleRobynEmailChange}></input>
                        <textarea class="input-field" name='robynMessage' id='robynMessage' type='text' placeholder='Your Message:' value={robynMessage} onChange={handleRobynMessageChange}></textarea>
                        <button id='submit-robyn' type='submit'>Submit to Robyn</button>
                    </form>
                </div> 
            </div>
            
            <img id='img-robyn' height='400px' width='500px' src={Image2} alt='img text'/> 
        </div>
              
    )
}

// export default Form;