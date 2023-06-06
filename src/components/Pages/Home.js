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
               <p className="NameBio"> Hi, I'm Robyn! I have a background in Fine Art having studied Sculpture and Environmental Art. For the 
               last year and a half i've been working at a small tech for good start up and have reccent got a new role as a service designer. 
               Through my late role i've loved having the opportunity to learn python, CSS, HTML, Javascript, React and UX/UI design skills.
                You can get in touch by checking out our contact us page!  </p>
               </div>
               </div>
                  <h4 className="NameTitle"> Charlotte </h4>
                  <div class="HomeContainer">    
                  <img src={CharImage} alt='img text' class='image'/>
                  <div class="HomeOverlay">
                  <p className="NameBio"> Hi, I'm Charlotte! After working in Accountancy and Law, I completely changed direction and
                   started pursuing software development. I have had some experience in HTML, CSS, Javascript, PHP, Python, Ruby and (some) React. I am currently 
                   on a scholarship place in the Makers bootcamp and hope to find a role in the industry shortly afterwards!</p>
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