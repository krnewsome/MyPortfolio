import React from 'react'
import Icon from '@mdi/react'
import { mdiConsolidate } from '@mdi/js'
import { mdiCursorDefaultClick } from '@mdi/js';
import { Link, animateScroll as scroll } from "react-scroll";

const About = () =>(
  <section id ="aboutSection">
    <div className= "aboutImage"></div>
    <div className= "aboutContainer">
      <h2 className= "aboutHeader">Hi, Im Ryan, Nice to Meet You</h2>
        <p className="aboutDesc">I’m a passionate Web Developer who likes to keep things simple. I 
          create custom websites and add  functionality to bring ideas to life. </p>

          <Link
                activeClass="active"
                to="portfolioSection"
                spy={true}
                smooth={true}
                duration= {500}
                offset= {-30}
                >
              <div className="container">
                <h2 className= "checkoutProjectHeader"> Check out some of my projects</h2>
                <div className= "arrowBtn btn1"></div>   
                <div className= "arrowBtn btn2"></div>  
                <div className= "arrowBtn btn3"></div>   
              </div>   
          </Link>  
    </div>
    


    <style jsx>{`

      h2, p, a{
        font-family: sans-serif;
      }
    
      #aboutSection{
        display: -webkit-flex;
        display: flex;
        padding-top: 60px;
        transition: all .5s ease;

      }

      .aboutImage{
        padding: 1px;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100vh;
        background-image: url(/images/aboutPhoto.jpeg);
        background-size: contain;
        background-repeat: no-repeat;
      }



      .aboutContainer{
        -webkit-flex: 2;
        -msflex: 2;
        flex: 2;
        padding-right: 5%;
        height: 100vh;
      }

      .aboutHeader{
        margin: 10% 0;
        font-size: 48px;
        transform: rotate(-5deg);
        color: #1F6521;

      }

      .aboutDesc{
        font-size: 36px;
        margin: 10%;
        background: linear-gradient(to right, #1F6521, #53900F, #A4A71E, #D6CE15);
        -webkit-background-clip: text; 
        color: transparent;
      }

      .checkoutProjectHeader{
        margin: 4% 0;
        font-size: 32px;
        cursor: pointer;
        color: #1F6521;
        transition: all 500ms ease-in-out;
      }    
   

      .container:hover .checkoutProjectHeader{
        font-size: 36px;
        background: linear-gradient(to right, #1F6521, #53900F, #A4A71E, #D6CE15);
        -webkit-background-clip: text; 
        color: transparent;
      }
    
      .arrowBtn{
        width: 100px;
        height: 100px;
        text-align: center;
        margin: -4% auto;
        transform: rotate(135deg);
        border-radius: 25%;
        cursor: pointer;

      }

      .btn1{
        border-top: 20px solid #53900F;
        border-right: 20px solid #53900F;
        opacity: 0;
        transition: all 1000ms ease-in-out; 
      }

      .btn2{
        border-top: 20px solid #A4A71E;
        border-right: 20px solid #A4A71E;
        opacity: 0;
        transition: all 2000ms ease-in-out;
      }
      
      .btn3{
        border-top: 20px solid #D6CE15;
        border-right: 20px solid #D6CE15;
        opacity: 0;
        transition: all 3000ms ease-in-out;
      }

      .container:hover .btn1,
      .container:hover .btn2,
      .container:hover .btn3{
        opacity: 1;
      }

    `}</style>
  </section>

)


export default About
