import React from 'react';
import projectList  from  './projects/projectList.json';

const ProjectList =(props)=>{
  let count = props.pCount;
  let selectedProject = props.pList[count];
  let styles = {
    backgroundRepeat: "no-repeat",
    display: "block",
    height: "25em",
    margin: "auto",

  }

  return(
    /* use a template literal and brackets to dynamically change the count of the class for the background and animations
    of each project while the next buttton is clicked.  */
    <div className={`flexBox pDefault`}>
        <a href={selectedProject.project_link} ><img src= {selectedProject.project_screen_Shot} style={styles}/></a>
        
      <style jsx>{`
            .pDefault{
              max-width: 50%;
              min-height: 100%;
              opacity: .8;
              position: relative;
              display: inline-block;
             
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
      buttonShape: [
        {
          borderRadius:'50%'
        },
        {
        borderRadius:'0%'
      },
      {
        borderTop: "none",
        borderTopColor: "#FC8421",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderWidth: "50px", 
        borderStyle: "solid" 
      }
    ]

    }
  }
  
  /* Function used to cycle through each project. Once the function is executed add 1 to the project count (pCount1). Before setting the state 
  of the projectlist, check to see is the count is over the length of the projectlist. If it is not change the state by increasing 1. If it is 
  cycle back to the first project in the list. Remeber the pCount1 will be passed to the project list array to tell the program which project
  link to use.   */
  nextProject(){
    console.log(this.state.buttonShape[this.state.pCount])
    this.state.pCount++;
    if(this.state.pCount < projectList.length){
      this.setState({
        pCount: this.state.pCount,

      })
    } else {
      this.setState({
        pCount: 0
      })
    }
  }

  boundNextProject = this.nextProject.bind(this)

  render(){
    let buttonShape= this.state.buttonShape
    
    return(
      <section id ="portfolioSection">
          <h1 className='portfolioHeader' id='about'> My Projects </h1>
          <div className='mainWrapperDiv'>
            <div className='flexBox'>
              <ProjectList pList= {projectList} pCount = {this.state.pCount}/>
              <div style={buttonShape[this.state.pCount]} className= "portfolioButton" onClick={this.boundNextProject}> 
                <h1 className='nextProjectText'> NEXT </h1>
              </div>
            </div>
          </div>


          <style jsx>{`

            #portfolioSection{
              padding-top: 60px;
            }
            
            #about{
              margin-bottom: 0;
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
              width: 100%;
              height: 24em;
              border: solid #FFFFFF  2px;
              margin: 2% 2%;
            }

            .portfolioButton{
              cursor: pointer;
              border: dashed #29abe0 .5em ;
              position: relative;
              margin: auto;
              margin-top: 2em;
              height: 6.5em;
              width: 6.5em;
              transition: all 1s ease;
            }

            .portfolioButton:hover {
              border: dotted;
              border-color: #FC8421;
            }

            .portfolioButton:hover .nextProjectText{
              text-shadow: 2px 2px 30px #29abe0;
            }

            .nextProjectText{
              cursor: pointer;
              font-size: 24px;
              margin-top: 34%;
              text-shadow: 2px 2px 30px #FC8421;
              transition: all 1s ease;
            }

          

          `}</style>
        </section>
    )
  }

}

export default Portfolio
