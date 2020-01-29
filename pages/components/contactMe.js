import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


const ContactMe = () =>(
  <section id ="contactMeSection">
    <div className="container">
      <div className= "homeButtonContactMePage"> 
        <h1 className='homeButtonText'>  
          <Link
              activeClass="active"
              to="homeSectionWrapper"
              spy={true}
              smooth={true}
              duration= {500}
              >Back to Top
          </Link>
        </h1>
      </div>
      <h1 className='aboutHeader' id='about'> CONTACT </h1>
      <p>Have questions or want to build something together? Feel free to send an email to XXXXXX@email.com and lets talk.</p>
    
      <h2>Connect with me on Social Media!</h2>
      <ul>
        <li tag='social'> <a href="#" className="fa fa-facebook"></a></li>
        <li tag='social'> <a href="#" className="fa fa-twitter"></a></li>
        <li tag='social'> <a href="#" className="fa fa-linkedin"></a></li>
        <li tag='social'> <a href="#" className="fa fa-youtube"></a></li>
      </ul>
      </div>
    <style jsx>{`

          #contactMeSection{
              text-align: center;
              position: relative;
              margin-top: -34%;
              transition: all 1s ease;
            }


            .homeButtonContactMePage{
              border: solid .7em black;
              border-radius: 20%;
              width: 10em;
              margin: 0 auto;
              opacity: .5;
              transition: all 1s ease;
            }

            .homeButtonText{
              font-size: 1.5em;
              text-shadow: .1em .1em #fff2d4;
              transition: all 1s ease;
            }

            .homeButtonContactMePage:hover{
              cursor:pointer; 
              opacity: 1;
            }



            h1{
              font-size: 2.5em;
            }

            p{
              font-size: 1.2em;

            }
      
            .backgroundAnimationAbout{
             background-color: #FFF;
            }

           li {
            cursor: pointer;
            display: inline-block;
            padding: 6px 8px;
            margin: .25em;
          }

          .fa {
          opacity: .5;
          padding: 10px;
          font-size: 40px;
          width: 40px;
          text-align: center;
          text-decoration: none;
          border-radius: 50%;
          align-self: flex-end;
          transition: all 3000ms ease-in-out;
        }

        .fa:hover {
          transform: rotate(360deg);
          text-shadow: 2px 2px 30px #FC8421;
          opacity: 1;
        
        }
        
        .fa-facebook {
          background: #3B5998;
          color: white;
        }
        
        .fa-twitter {
          background: #55ACEE;
          color: white;
        }

        .fa-linkedin {
          background: #007bb5;
          color: white;
        }
        
        .fa-youtube {
          background: #bb0000;
          color: white;
        }
      
    `}</style>
  </section>

)


export default ContactMe
