import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


const ContactMe = () =>(
  <section id ="contactMeSection">
    <div className="container">
       <Link
          activeClass="active"
          to="homeSectionWrapper"
          spy={true}
          smooth={true}
          duration= {500}

          >
          <div className="homeBtncontainer">
            <div className= "arrowBtn btn1"></div>   
            <div className= "arrowBtn btn2"></div>  
            <div className= "arrowBtn btn3"></div>   
            <h2 className= "checkoutProjectHeader"> Back To Top</h2>

         </div>   
        </Link>  
      <h1 className='aboutHeader' id='about'> CONTACT </h1>
      <p className="contactDesc">Have questions or want to build something together? <br/>Feel free to send an email to XXXXXX@email.com and lets talk.</p>
    
      <p>Connect with me on Social Media!</p>
      <ul>
        <li tag='social'> <a href="#" className="fa fa-facebook"></a></li>
        <li tag='social'> <a href="#" className="fa fa-twitter"></a></li>
        <li tag='social'> <a href="#" className="fa fa-linkedin"></a></li>
        <li tag='social'> <a href="#" className="fa fa-youtube"></a></li>
      </ul>
      </div>
    <style jsx>{`

          #contactMeSection{
              text-align: inline-block;
              position: relative;
              transition: all 1s ease;
              height: 100vh;
              padding-top: 5%;
            }

            .checkoutProjectHeader{
              margin: 4% 0;
              font-size: 32px;
              cursor: pointer;
              color: #1F6521;
              transition: all 500ms ease-in-out;
            }    
         
      
            .homeBtncontainer:hover .checkoutProjectHeader{
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
              transform: rotate(313deg);
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
      
            .homeBtncontainer:hover .btn1,
            .homeBtncontainer:hover .btn2,
            .homeBtncontainer:hover .btn3{
              opacity: 1;
            }

        

           
            h1{
              margin: 0;
              font-size: 48px;
              transform: rotate( 6deg);
              color: #1F6521;
            }

            p{
              font-size: 36px;
              margin: 3%;
              background: linear-gradient(to right, #1F6521, #53900F, #A4A71E, #D6CE15);
              -webkit-background-clip: text; 
              color: transparent;
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
