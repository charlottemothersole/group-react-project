import React from "react";
import Banner from "./Banner"; 
import Navbar from "../Navbar/Navbar";
import './Home.css';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <h2 className= 'HomeTitle'> Who Are We? </h2>
            <h3 className="RobynTitle" > Robyn </h3>
            <p className="RobynBio"> Hi, I'm Robyn! I am a student at CFG learning all about javascript, react and have created my very first website! 
                I have a background in fine art and I'm working hard to make the leap into the tech world. 
                You can get in touch by checking out our contact us page!  </p>
            <h4 className="CharTitle"> Charlotte </h4>
            <p className="CharBio"> Hi, I'm Charlotte! I am a student at CFG learning all about javascript, react and have created my very first website! </p>
            <h5> What Can We Do? </h5>
            <p> We are skilled in the following: javascript, react, CSS, HTML, Github, Python, Figma.

            </p>
        </div>
    )
}
export default Home; 