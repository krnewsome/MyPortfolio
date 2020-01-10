import React from 'react'
import Animation from './animations/animations.js'


const ContactMe = () =>(
  <section id ="contactMeSection">
    <div className="container">
      <h1 className='aboutHeader' id='about'> CONTACT </h1>
      <p>Have questions or want to build something together? Feel free to send an email to XXXXXX@email.com and lets talk.</p>
    
      <h2>Connect with me on Social Media!</h2>
      <p> Follow and connect with me on Facebook, Twitter, YouTube, and LinkedIn.</p>
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
              margin: 18em 0;
              transition: all 1s ease;
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
