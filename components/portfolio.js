import React from 'react'
import Icon from '@mdi/react'
import { mdiConsolidate } from '@mdi/js'
import { mdiCursorDefaultClick } from '@mdi/js';
import { mdiIframe } from '@mdi/js';


const ProjectList =(props)=>{
  console.log(props)
  return(
    <div className='flexBox p1'>
      <a className='projectList' href={props.projectLinks[props.p1Count[0]]} >Student Search Form</a>

      <style jsx>{`

            .projectList{
              padding:1em;
              display:inline-block;
              text-decoration: none !important;
              font-size: 36px;
              font-weight: bold;
              color: black;
              text-shadow: 2px 2px 30px #0082B4;
              opacity: 1;
              transition: all 500ms ease-in-out;
            }

            .projectList:hover{
              color: #0082B4;
              font-size: 40px;
            }  
            .p1{
              opacity: .8;
              background-image: url("images/studentList.png");
            }
            

      `}
      </style>
      </div>
    )
}

class Portfolio extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projectLinks: ["https://krnewsome.github.io/Project_2/",
      'a'],
      p1Count: 0,

    }
  }

  
  
  nextProject(){
    console.log(this.state.p1Count)
    if(this.state.p1Count < this.state.projectLinks.length){
      this.state.p1Count++
    } else {
      this.setState({
        p1Count: 0
      })
    }
  }

  boundNextProject = this.nextProject.bind(this)

  render(){
    return(
      <section id ="portfolioSection">
          <h1 className='portfolioHeader' id='about'> My Projects </h1>
          <div className='mainWrapperDiv'>
            <div className='flexBox p1'>
              <ProjectList p1Count = {this.state.p1Count} projectLinks = {this.state.projectLinks}/>
              <button onClick={this.boundNextProject}> Next </button>

            </div>
            <div className='flexBox'>
            </div>
            <div className='flexBox'>
            </div>
          </div>


          <style jsx>{`

            #portfolioSection{
              padding-top: 60px;

            }

            .portfolioHeader{
              font-size: 48px;
              text-shadow: 2px 2px 30px #FC8421;
            }

            .mainWrapperDiv{
              display: flex;
              flex-direction: collumn;
              height: 100vh;

            }
          
            .flexBox{
              text-align: center;
              width: 100%;
              height: 200px;
              border: solid red 2px;
              margin: 5% 2%;
     
            }

          `}</style>
        </section>
    )
  }

}


export default Portfolio
