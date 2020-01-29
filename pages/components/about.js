import React from 'react'
import Icon from '@mdi/react'
import { mdiConsolidate } from '@mdi/js'
import { mdiCursorDefaultClick } from '@mdi/js';
import { mdiIframe } from '@mdi/js';
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
                >
              <h2 className= "projectHeader"> Check out some of my projects</h2>       
          </Link>  
    </div>
    


    <style jsx>{`

      h2, p, a{
        font-family: sans-serif;
      }
    
      #aboutSection{
        padding-top: 60px;
        transition: all .5s ease;

      }

      .aboutHeader{
        margin-top: 10%;
        font-size: 48px;
        transform: rotate(-5deg);

      }

      .aboutDesc{
        font-size: 36px;
        margin-bottom: -3%;
      }

      .aboutContainer{
        padding-right: 5%;
        height: 100vh;
      }

      .aboutImage{
        padding: 1px;
        float: left;
        height: 100vh;
        width: 50%;
        background-image: url(/images/aboutPhoto.jpeg);
        background-size: contain;
        background-repeat: no-repeat;
      }

      .image{
        max-width:100%;
        max-height:100%;
      }

      .projectHeader{
        font-size: 32px;
        transform: rotate(20deg);
        cursor: pointer;
        transition: all 500ms ease-in-out;
      }      

      .projectHeader:hover{
        color: #D6CE15;
        font-size: 36px;
      }

    `}</style>
  </section>

)


export default About
