import React from 'react'
import Icon from '@mdi/react'
import { mdiConsolidate } from '@mdi/js'
import { mdiCursorDefaultClick } from '@mdi/js';
import { mdiIframe } from '@mdi/js';


const ProjectList =(props)=>{
  console.log(props.pCount)
  return(
    /* use a template literal and brackets to dynamically change the count of the class for the background and animations
    of each project while the next buttton is clicked.  */
    <div className={`flexBox p${props.pCount}`}>
<a className='projectList' href={props.projectLinks[props.pCount]} >{props.projectNames[props.pCount]}</a>

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
            .p0{
              opacity: .8;
              background-image: url("images/studentList.png");
            }

            .p1{
              opacity: .8;
              background-image: url("images/registrationForm.png");
            }

            .p2{
              opacity: .8;
              background-image: url("images/tickTacToe.png");
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
      projectNames: ['Student Search From', 'Registration Form', 'Tick Tac Toe'],
      projectLinks: ["https://krnewsome.github.io/Project_2/", 
      'https://krnewsome.github.io/Project_3/', 'https://krnewsome.github.io/Project-4/'],
      pCount: 0,

    }
  }

  
  /* Function used to cycle through each project. Once the function is executed add 1 to the project count (pCount). Before setting the state 
  of the projectlist, check to see is the count is over the length of the projectlist. If it is not change the state by increasing 1. If it is 
  cycle back to the first project in the list. Remeber the pCount will be passed to the project list array to tell the program which project
  link to use.   */
  nextProject(){
    this.state.pCount++;
    if(this.state.pCount < this.state.projectLinks.length){
      this.setState({
        pCount: this.state.pCount
      })
    } else {
      this.setState({
        pCount: 0
      })
    }
  }

  boundNextProject = this.nextProject.bind(this)

  render(){
    return(
      <section id ="portfolioSection">
          <h1 className='portfolioHeader' id='about'> My Projects </h1>
          <div className='mainWrapperDiv'>
            <div className='flexBox'>
              <ProjectList pCount = {this.state.pCount} projectNames = {this.state.projectNames} projectLinks = {this.state.projectLinks}/>
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
