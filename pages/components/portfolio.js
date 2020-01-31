import React from 'react';
import projectList  from  './projects/projectList.json';
import Icon from '@mdi/react'
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';


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
              background-repeat: no-repeat;
            }
          `}
          </style>
        </a>
    )// end of map


    return(
      <section id ="portfolioSection">
           
              <p className="jsElement icon1"> 
                <Icon path={mdiLanguageJavascript}
                  title="JS"
                  size={4}
                  horizontal
                  vertical
                  rotate={200}
                  color="#D6CE15"
                /> 
              </p>
              <p className="htmlElement icon2"> 
                <Icon path={mdiLanguageHtml5}
                    title="HTML"
                    size={4}
                    horizontal
                    vertical
                    rotate={180}
                    color="#53900F"
                    /> 
              </p>
              <p className="cssElement icon3">  
                <Icon path={mdiLanguageCss3}
                  title="CSS3"
                  size={4}
                  horizontal
                  vertical
                  rotate={170}
                  color="#A4A71E"
                  /> 
                </p>
              <p className="nodejsElement icon4"> 
                <Icon path={mdiNodejs}
                    title="Nodejs"
                    size={4}
                    horizontal
                    vertical
                    rotate={180}
                    color="#1F6521"
                /> 
              </p>
              <div className='flexBoxContainer'>
              {projects}
            </div>
          <style jsx>{`

            .icon1, .icon2, .icon3, .icon4{
              position: absolute;

            }

            .icon1{
              margin-top: 0%;
              left: 64.5%;
            }
 
            .icon2{
              margin-top: 22.5%;
              left: 90%;
            }

            .icon3{
              margin-top: 40%;
              left: 31%;
            }

            .icon4{
              margin-top: 22.5%;
              left: 6%;
            }

            #portfolioSection{
              padding-top: 60px;
              height: 100vh;
            }

            .flexBoxContainer{ 
              display: -webkit-flex;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              height: 40vh;
            }

          `}</style>
        </section>
    )
  }

}

export default Portfolio
