import './Form.css';
import Image from './image.jpg';
function Form() {
    return (
        <div id='form'>
            <form>            
                <input id='name' type='text' placeholder='Your Name:'></input>
                <input id='email' type='email' placeholder='Your Email Address:'></input>
                <input id='message' type='text' placeholder='Your Message:'></input>
                <button id='submit-charlotte' type='button'>Submit to Charlotte</button>
                <button id='submit-robyn' type='button'>Submit to Robyn</button>
            </form>
            <img height='300px' width='350px' src={Image} alt='img text'/>
        </div>        
    )
}

export default Form;