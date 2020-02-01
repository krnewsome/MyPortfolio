import React from 'react';
import projectList  from  './projects/projectList.json';
import Icon from '@mdi/react'
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import { Link, animateScroll as scroll } from "react-scroll";



class Portfolio extends React.Component{
  render(){
    let key = 1
    const projects = projectList.map(project =>
        <a href= {project.project_link} target="_blank"  className="flexBox">

          <style jsx>{`
            .flexBox{
              height: 90%;
              margin: 3%;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1 25%;
              justify-content: space-evenly;
              background-image: url(${project.project_screen_Shot});
              background-size: contain;
              background-position: center;

              background-repeat: no-repeat;
            }

            @media only screen and (max-width:1024px){
              .flexBox{
                flex: 1 45%;
              }
            }

          `}
          </style>
        </a>
    )// end of map


    return(
      <section id ="portfolioSection">
           <div >
             <ul className="iconWrapper">
              <li className="jsElement icon1"> 
                <Icon path={mdiLanguageJavascript}
                  title="JS"
                  size={5}
                  horizontal
                  vertical
                  rotate={200}
                  color="#D6CE15"
                /> 
              </li>
              <li className="htmlElement icon2"> 
                <Icon path={mdiLanguageHtml5}
                    title="HTML"
                    size={5}
                    horizontal
                    vertical
                    rotate={180}
                    color="#53900F"
                    /> 
              </li>
              <li className="cssElement icon3">  
                <Icon path={mdiLanguageCss3}
                  title="CSS3"
                  size={5}
                  horizontal
                  vertical
                  rotate={170}
                  color="#A4A71E"
                  /> 
                </li>
              <li className="nodejsElement icon4"> 
                <Icon path={mdiNodejs}
                    title="Nodejs"
                    size={5}
                    horizontal
                    vertical
                    rotate={180}
                    color="#1F6521"
                /> 
              </li>
              </ul>
              </div>
              <div className='flexBoxContainer'>
              {projects}
            </div>


            <Link
                activeClass="active"
                to="contactMeSection"
                spy={true}
                smooth={true}
                duration= {500}
                offset= {-30}
                >
              <div className="container">
                <h2 className= "contactButtonHeader"> Let's Work Together</h2>
                <div className= "arrowBtn btn1"></div>   
                <div className= "arrowBtn btn2"></div>  
                <div className= "arrowBtn btn3"></div>   
              </div>   
          </Link>  


          <style jsx>{`

            #portfolioSection{
              padding-top: 60px;
              height: 100vh;
            }
            
            .iconWrapper{
              padding: 0;
              display: inline-flex;
              list-style-type: none;
              justify-content: space-between;
              margin-bottom: 5%;

            }
            .iconWrapper li{
              margin: auto; 
            }

            .flexBoxContainer{ 
              display: -webkit-flex;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              height: 40vh;
            }

            .contactButtonHeader{
              margin: 4% 0;
              font-size: 32px;
              cursor: pointer;
              color: #1F6521;
              transition: all 500ms ease-in-out;
            }    
         
      
            .container:hover .contactButtonHeader{
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
      
            .container{
              height: 50%;
            }
      
            .container:hover .btn1,
            .container:hover .btn2,
            .container:hover .btn3{
              opacity: 1;
            }

            //iphone
            @media only screen and (max-width:1240px){
              .icon1, .icon2, .icon3, .icon4, .contactButtonHeader, .btn1, .btn2, .btn3{
                display: none;
              }
             
              #portfolioSection{
                overflow: scroll;
              }
            }

            @media only screen and (max-height:850px){
              .btn1,
              .btn2,
              .btn3,
              .contactButtonHeader{
                display: none;
            }

          `}</style>
        </section>
    )
  }

}

export default Portfolio
