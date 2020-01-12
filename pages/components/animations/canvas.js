import React from 'react'


//FUNCTIONS


class Canvas extends React.Component{
    constructor(props){
        super(props)
        this.canvasRef = React.createRef();
        this.state = {
            canvasWidth: 320,
            canvasHeight: 899,
        }
      }

  
      
    componentDidMount() {
        //establish the demintions of the canvas
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        this.setState({
            canvasWidth: `${windowWidth - 30}`,
            canvasHeight: windowHeight,
            
        })  

         
        let boundDrawFlakes = drawFlakes.bind(this);
        let boundMoveFlakes = moveFlakes.bind(this);



        // Draws a square in the middle of the canvas rotated
        // around the centre by this.props.angle
       
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = this.state.canvasWidth;
        const height = this.state.canvasHeight;

        //requestAnimationFrame Shim
        window.requestAnimationFrame = window.requestAnimationFrame || 
                                            (function(callback){
                                                window.setTimeout(callback, 1000/60)
                                            })
        window.cancelAnimationFrame = window.cancelAnimationFrame ||
                                        (function(id){
                                            window.clearTimeout(id);
                                        })

            // SNOW FLAKES https://www.youtube.com/watch?v=ANDyf6VEYHE
        
        // generate snowflakes and apply attributes

        let mf = 100; //max flakes
        let flakes = [];

        //loop through emptty flakes and apply attributes
        for(let i=0; i < mf; i++){
            flakes.push({
                x: Math.random()* width,
                y: Math.random()* height,
                r: Math.random()*5+2, //min of 2px and max of 7px
                d: Math.random()+1, //density of the flake
            })            
        }

        //draw flakes
        function drawFlakes(){
            ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);
            ctx.fillStyle = "white";
            ctx.beginPath();
            for(let i = 0; i < mf; i++){
                let f = flakes[i];
                ctx.moveTo(f.x, f.y);
                ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
            }
            ctx.fill();
            boundMoveFlakes();
        }


        // animate flakes
        let angle = 0;

        function moveFlakes(){
            angle += 0.01;
            for(let i = 0; i < mf; i++){

                //store current flake
                let f = flakes[i];

                //update X and Y coordinates of each flake
                f.y += Math.pow(f.d, 2) + 1;
                f.x += Math.sin(angle) * 2;

                // check if the snow flake hits the bottom of the page, if it does, generate an new flake at the top of the screen
                if (f.y > this.state.canvasHeight){
                    flakes[i] = {
                        x: Math.random() * this.state.canvasWidth, 
                        y: 0, 
                        r: f.r, 
                        d: f.d 
                    }; 
                }


            }
        }

        setInterval(boundDrawFlakes, 25)     
    }

    render(){
        return(
            <div className='container'>
                <canvas className= 'canvas'  ref={this.canvasRef} width={this.state.canvasWidth} height={this.state.canvasHeight} >
                <style jsx>{`
                    .canvas{
                        grind-area: main;
                        background-color: #D4F7FA;;
                        margin: auto;
                    }
                `}</style>
                </canvas>
            </div>
        )
   
    }
}


export default Canvas
