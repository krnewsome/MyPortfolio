import React from 'react'
import Canvas from './canvas.js'

//FUNCTIONS


class Animation extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            angle: 0 
        };
        // this.updateAnimationState = this.updateAnimationState.bind(this);
      }

      // componentDidMount() {
      //   this.rAF = requestAnimationFrame(this.updateAnimationState);
      // }

      // componentWillUnmount() {
      //   cancelAnimationFrame(this.rAF);
      // } 

      // updateAnimationState() {
      //   this.setState(prevState => ({ 
      //       angle: prevState.angle + 1 
      //   }));
        
      //   this.rAF = requestAnimationFrame(this.updateAnimationState);
      // }
    
      
    render(){
        return(
            <Canvas  />
            
        )
   
    }
}


export default Animation
