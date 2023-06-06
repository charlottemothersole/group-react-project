import React from "react";
import Banner from "./Banner"; 
import Navbar from "../Navbar/Navbar";
import './Home.css';
import RobImage from "./RobBioPic.jpg";
import CharImage from "./CharBioPic.jpg";
import Logos from "./Logos.png";



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <div>
            <h2 className= 'HomeTitle'> Who Are We? </h2>
            <div id='Home'>
            <h3 className="NameTitle" > Robyn </h3>
            <div id='Icons' >
               <div class="HomeContainer">
               <img src={RobImage} alt='img text' class='image'/>
               <div class="HomeOverlay">
               <p className="NameBio"> Hi, I'm Robyn! I am a student at CFG learning all about javascript, react and have created my very first website! 
                I have a background in fine art and I'm working hard to make the leap into the tech world. 
                You can get in touch by checking out our contact us page!  </p>
               </div>
               </div>
                  <h4 className="NameTitle"> Charlotte </h4>
                  <div class="HomeContainer">    
                  <img src={CharImage} alt='img text' class='image'/>
                  <div class="HomeOverlay">
                  <p className="NameBio"> Hi, I'm Charlotte! I am a student at CFG learning all about javascript, react and have created my very first website! </p>
                  </div>
                  </div>
                  </div>
            </div>
                <h2 className="ActionTitle"> What Can We Do? </h2>
            <p className="ActionBody"> We are skilled in the following: HTML, CSS, Javascript plus many more! Get in touch to discover what we can help you build!
            </p>
            <img src={Logos} alt='Javascript, HTML and CSS logos' class='LogoImage' />
        </div>
        </div>
    )
}
export default Home; 