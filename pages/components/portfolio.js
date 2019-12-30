import React from 'react';
import projectList  from  './projects/projectList.json';

const ProjectList =(props)=>{
  let count = props.pCount;
  let selectedProject = props.pList[count];
  let styles = {
    backgroundImage: `url(${selectedProject.project_screen_Shot})`
  }
  return(
    /* use a template literal and brackets to dynamically change the count of the class for the background and animations
    of each project while the next buttton is clicked.  */
    <div style={styles} className={`flexBox pDefault`}>
        <a className='projectList' href={selectedProject.project_link} >{selectedProject.project_name}</a>
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

            .pDefault{
              height: 100%;
              opacity: .8;
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
      pCount: 0,
    }
  }
  
  /* Function used to cycle through each project. Once the function is executed add 1 to the project count (pCount1). Before setting the state 
  of the projectlist, check to see is the count is over the length of the projectlist. If it is not change the state by increasing 1. If it is 
  cycle back to the first project in the list. Remeber the pCount1 will be passed to the project list array to tell the program which project
  link to use.   */
  nextProject(){

    this.state.pCount++;
    if(this.state.pCount < projectList.length){
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
              <ProjectList pList= {projectList} pCount = {this.state.pCount}/>
              <button onClick={this.boundNextProject}> Next </button>
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
