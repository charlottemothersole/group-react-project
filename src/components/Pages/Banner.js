import React from "react";
import banner from "./Banner.jpeg";
import './Banner.css'; 

function Banner() {
    return (
        <div class="container"> 
            <img src={banner} alt="Purple and blue swirl pattern"  max width='100%' height='auto' /> 
            <div className="content">
            <h1> Welcome to Robotte</h1> 
            <p> We are a dynamic coding duo ready to help you with all your software needs!</p> 
            </div>
        </div>
    )
}
  
  export default Banner;