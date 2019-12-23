import React from 'react'
import { mdiImageSearch, mdiConsoleLine, mdiMusicClefBass, mdiFlaskEmpty } from '@mdi/js';

//FUNCTIONS


class Canvas extends React.Component{
    constructor(props){
        super(props)
        this.canvasRef = React.createRef();
        
      }

    componentDidMount() {
        // Draws a square in the middle of the canvas rotated
        // around the centre by this.props.angle
        const { angle } = this.props;
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;


        //requestAnimationFrame Shim
        window.requestAnimationFrame = window.requestAnimationFrame || 
                                            (function(callback){
                                                window.setTimeout(callback, 1000/60)
                                            })
        window.cancelAnimationFrame = window.cancelAnimationFrame ||
                                        (function(id){
                                            window.clearTimeout(id);
                                        })

        //setup
        const topLeft = [0,0];
        const topRight = [600,0];
        const midTop = [300, 0]
        const midBottom = [400, 200];
        const midLeft = [0, 200];
        const midRight = [600, 200];
        const bottomLeft = [0,400];
        const bottomRight = [600,400];
        const center = [300,200];
        const cDims = [canvas.width, canvas.height];

        const point =  (ctx, x, y) =>{
            ctx.save();
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }


        //helpers
        const line = (ctx, firstPoint, secondPoint)=>{
            //draw a basic line
            ctx.beginPath();// start
            ctx.moveTo(...firstPoint);// starting point
            ctx.lineTo(...secondPoint);// ending point
            ctx.stroke();// make line
            ctx.closePath();// explicit finish
        }

        const figure = (ctx, ...points) =>{
            ctx.beginPath();
            const [first, ...otherPoints] = points;
            ctx.moveTo(...first);
            otherPoints.forEach(point => ctx.lineTo(...point));
            ctx.lineTo(...first);
            ctx.fill();
            ctx.stroke();
            ctx.closePath;
        };

        const outLine =(ctx, ...points)=>{
            ctx.beginPath();
            const [first, ...otherPoints] = points;
            ctx.moveTo(...first);
            otherPoints.forEach(point => ctx.lineTo(...point));
            ctx.lineTo(...first);
            ctx.stroke();
            ctx.closePath;
        }

        const getRecCenter2 = (x, y, w, h) =>{
            //cx = center of the x
            const cx = x - w / 2;
            const cy = y - h /2;
            return [cx, cy];
        }

        const outlineSquare =(ctx, center, size, color)=>{
            ctx.save();
            ctx.strokeStyle = color;
            ctx.strokeRect(...center, size, size);
            ctx.restore();
        }

        const filledSquare =(ctx, center, size, color)=>{
            ctx.save();
            ctx.strokeStyle = color;
            ctx.fillRect(...center, size, size);
            ctx.restore();
        }


        const rgba = (r, g, b, a) => `rgba(${r}, ${b}, ${g}, ${a})`;
        const r1 = 10;
        const r2 = 300;


        //LETS DRAW AN IMAGE

        const HEIGHTS = {
            SMALL: 100,
            MEDIUM: 200,
            LARGE: 300
        }

        const small = (w, h) => {
            const ratio = w / h;
            const newHeight = HEIGHTS.SMALL;
            const newWidth = ratio * newHeight; 
            return [newWidth, newHeight];
        }

        const medium = (w, h) => {
            const ratio = w / h;
            const newHeight = HEIGHTS.MEDIUM;
            const newWidth = ratio * newHeight; 
            return [newWidth, newHeight];
        }

        const large = (w, h) => {
            const ratio = w / h;
            const newHeight = HEIGHTS.LARGE;
            const newWidth = ratio * newHeight; 
            return [newWidth, newHeight];
        }

        
        const getRecCenter = (center, dimensions) =>{
            
            const [cx, cy] = center;
            const [width, height] = dimensions;
            return [
                cx - width / 2,
                cy - height / 2
            ];
        }

        //Create Animation UI Banner
        let gameBanner =(walkStage = 'Contact')=>{
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#000D12';
            ctx.fillRect(0, 0, 600, 75)
            ctx.closePath();    
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.fillRect(20, 12, 160, 50)
            ctx.closePath(); 
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.font = "30px Arial";
            ctx.fillStyle = 'green';
            ctx.textAlign = 'center'
            ctx.fillText(walkStage, 100, 48 );
            ctx.closePath();
            ctx.restore();
            let bDims = [[20,12,], [160,50]]
            return bDims
        }


        /* ---------- Stickman ---------- */ 
        
        let stickMan = {
            // create helpers (stickman body reference)
            
            stickHead: [50, 160],

            stickBody: {
                startXY: [0, 0],
                endXY: [200, 350],
            },

            stickRightArmTop: {
                startXY: [50, 190],
                endXY: [55, 250],
            },
           
            stickRightArmBottom: {
                startXY: [220, 300],
                endXY: [75, 300],
            },

            stickLeftArmTop: {
                startXY: [50, 190],
                endXY: [35, 250],
            },

            stickLeftArmBottom: {
                startXY: [35, 250],
                endXY: [40, 300],
            },


            /* LEFT LEG & FOOT */

            stickLeftLegTop: {
                startXY: [0, 0],
                endXY: [65, 350],
            },

            stickLeftLegBottom: {
                startXY: [0, 0],
                endXY: [75, 390],
            },

            stickLeftFoot: {
                startXY: [0, 0],
                endXY: [90, 390],
                angle: 360
            },

            /* RIGHT LEG & FOOT */

            stickRightLegTop: {
                startXY: [0, 0],
                endXY: [35, 350],
            },

            stickRightLegBottom: {
                startXY: [0, 0],
                endXY: [25, 390],
            },

            stickRightFoot: {
                startXY: [0, 0],
                endXY: [40, 390],
                angle: 360,
            },

            getFootEndPoint(x, y, angle){
                /* check notes lol... First you need to convert the a given angle to radians for the formula to get the second end ponit
                of the stickmans foot. This needs to be calcuated based of the pre given length of the determined foot. The stickman's foot is
                set to 25 as seen in fEndPoint. next make a container for the coordinates that will be eventually returned to the canvas draw function
                of the stickmans foot. Next get the second x and y coordinates of the stickman's foot. This is indicated by (fX and fY).
                ** USE THE PATHAGORIUM'S THERUM * Now really check the notes.... (d=sqrt[ (x2 -x1)^2 + (y2 -y1)^2]). Next push the the second x and y coordinates
                to the container "fEndPoint" and return it to the stickMan draw function. */
                let radians = angle * (Math.PI / 180);

                /* use parseFloat to convert the string to a number to return to the array for coordinates;
                use toFixed() fucntion to change the returned number that is extremely close to 0 but is
                represented by some negative number (check for commit acuracy lol. There was an issue with
                the Math.cos returning an exact number instead of 0......  */

                let fLength = 20;
                let fEndPoint = []
                let fX = x + fLength * parseFloat(Math.cos(radians).toFixed(1));
                let fY = y + fLength * parseFloat(Math.sin(radians).toFixed(1));
                fEndPoint.push(fX, fY);
                return fEndPoint
            },

            punchDestinations: {
                x: 1,
                y: 0,
            },

            punch(){
                this.stickRightArmBottom.endXY[1] += this.punchDestinations.y;
                this.stickRightArmBottom.endXY[0] += this.punchDestinations.x;

            },

            punchE: false,

            walkSpeed: -.5,

            walkStages: ['start','contact', 'down', 'passing', 'up'],

            walkStageCount: 0,


            /* create check distance function to return a true or false value that tells the animation to stop. The function will take three parameters.
            The first is the starting point. The second is the ending point.  the third is the body part. The function will need to return true to signal
            the ewalk funciton to proceed to the next phase. */ 
            moveBodypart(startingP, endingP, bodyP, xy){
                console.log(this[bodyP])
                // console.log(bodyP[xy])
                /* check if the starting point is less than to where you want the body part to go.
                If it is < to the ending point, move the body part.*/
                if (bodyP[xy] < endingP){
                        bodyP[xy] += .1;
                    
                    
                } else if(bodyP[xy] > endingP){
                    console.log('herre', bodyP[xy])

                        bodyP[xy] -= .1;
                    
                  
                } 
            },



            walk(stage='start'){
                let head = this.stickHead;
                let rightArmTop = this.stickRightArmTop
                let rightArmBottom = this.stickRightArmBottom;
                let rightLegTop = this.stickRightLegTop;
                let rightLegBottom = this.stickRightLegBottom;
                let rightFoot = this.stickRightFoot;
                let leftArmTop = this.stickLeftArmTop;
                let leftArmBottom = this.stickLeftArmBottom;
                let leftLegTop = this.stickLeftLegTop;
                let leftLegBottom = this.stickLeftLegBottom;
                let leftFoot = this.stickLeftFoot;


                // //WALKING STAGE #0 START
                if(stage === 'start' ){
                    head[0] = 50;
                    head[1] = 160;

                    rightArmTop.endXY = [55, 250];
                    rightArmBottom.endXY = [75, 300];

                    leftArmTop.endXY = [35, 250];
                    leftArmBottom.endXY = [40, 300];

                    leftLegTop.endXY = [35, 250];
                    leftLegBottom.endXY =  [75, 390];
                    leftFoot.angle = 360;

                    rightLegTop.endXY = [35, 350];
                    rightLegBottom.endXY = [25, 390];
                    rightFoot.angle = 360;
            
                }

                //WALKING STAGE #1 CONTACT
                if(stage === 'contact' && rightLegBottom.endXY[0] !== 20 ){
                    setInterval(this.moveBodypart(rightLegBottom.endXY[0], 20, this.stickRightLegBottom, 0), 100)
                    
                }else{
                    // clearInterval(this.moveBodypart(rightLegBottom.endXY[0], 20, rightLegBottom.endXY, 0))
                }

                //WALKING STAGE #2 DOWN
                if(stage === 'down' ){                    
                    head[0] = 150;
                    head[1] = 170;

                    rightArmTop.endXY = [180, 280];
                    rightArmBottom.endXY = [188, 300];

                    leftArmTop.endXY = [125, 250];
                    leftArmBottom.endXY = [110, 300];

                    leftLegTop.endXY = [185, 350];
                    leftLegBottom.endXY = [190, 390];

                    rightLegTop.endXY = [150, 350];
                    rightLegBottom.endXY = [115, 380];
                    rightFoot.angle = 40;
                    
               
                }

                 //WALKING STAGE #3 PASSING
                 if(stage === 'passing' ){
                    head[0] = 250;
                    head[1] = 170;

                    rightArmTop.endXY = [260, 280];
                    rightArmBottom.endXY = [280, 300];

                    leftArmTop.endXY = [235, 250];
                    leftArmBottom.endXY = [230, 300];

                    leftLegTop.endXY = [270, 350];
                    leftLegBottom.endXY = [260, 390];

                    rightLegTop.endXY = [250, 350];
                    rightLegBottom.endXY = [215, 360];
                    rightFoot.angle = 50;
                }

                  //WALKING STAGE #4 UP
                  if(stage === 'up' ){
                    head[0] = 350;
                    head[1] = 160;

                    rightArmTop.endXY = [355, 280];
                    rightArmBottom.endXY = [355, 300];

                    leftArmTop.endXY = [345, 250];
                    leftArmBottom.endXY = [360, 300];

                    leftLegTop.endXY = [380, 350];
                    leftLegBottom.endXY = [370, 380];

                    rightLegTop.endXY = [350, 350];
                    rightLegBottom.endXY = [310, 378];
                    rightFoot.angle = 45;
                }

                // console.log(stage, 'https://www.youtube.com/watch?v=xD32YaCCl3w')
            },

            // SNOW FLAKES https://www.youtube.com/watch?v=ANDyf6VEYHE
            
            render(){

                //create head
                ctx.beginPath();
                ctx.arc(...this.stickHead, 30, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();

                //create body
                ctx.beginPath();
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';
                line(ctx, [this.stickHead[0], this.stickHead[1] + 30], [this.stickHead[0], this.stickHead[1] + 150])
                ctx.closePath();
                ctx.restore();

                /* CREATE ARMS */

                //create RIGHT ARM
                ctx.beginPath();
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';

                //top arm
                line(ctx, [this.stickHead[0], this.stickHead[1] + 35], this.stickRightArmTop.endXY);
                //bottom arm
                line(ctx, this.stickRightArmTop.endXY, this.stickRightArmBottom.endXY);
                ctx.closePath();
                ctx.restore();

                //create LEFT ARM 

                ctx.beginPath();
                ctx.lineWidth = 15;
                ctx.save();
                ctx.strokeStyle= 'green';
                ctx.lineCap = 'round';
                //top arm
                line(ctx, [this.stickHead[0], this.stickHead[1] + 35], this.stickLeftArmTop.endXY);
                //bottom arm
                line(ctx, this.stickLeftArmTop.endXY, this.stickLeftArmBottom.endXY);
                ctx.closePath();
                ctx.restore();


                /* CREATE LEGS  & FEET */

                //create LEFT LEG
                ctx.save();
                ctx.strokeStyle= 'green';
                ctx.beginPath();
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';
                //top 
                line(ctx, [this.stickHead[0], this.stickHead[1] + 120], this.stickLeftLegTop.endXY);
                //bottom leg
                line(ctx, this.stickLeftLegTop.endXY, this.stickLeftLegBottom.endXY);
                ctx.restore();

                //foot
                line(ctx, this.stickLeftLegBottom.endXY, this.getFootEndPoint(...this.stickLeftLegBottom.endXY, this.stickLeftFoot.angle));
                ctx.closePath();
                ctx.restore();

                //create RIGHT LEG
                ctx.beginPath();
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';
                //top 
                line(ctx, [this.stickHead[0], this.stickHead[1] + 120], this.stickRightLegTop.endXY);
                //bottom leg
                line(ctx, this.stickRightLegTop.endXY, this.stickRightLegBottom.endXY);

                //foot
                line(ctx, this.stickRightLegBottom.endXY, this.getFootEndPoint(...this.stickRightLegBottom.endXY, this.stickRightFoot.angle));
                ctx.closePath();
                ctx.restore();

            },  
        };

        const animationLoop = (timeStamp) =>{
            requestAnimationFrame(animationLoop);
            ctx.save();
            ctx.fillStyle = 'rgba(255,255, 255, 0.1)';
            ctx.fillRect(...topLeft, canvas.width, canvas.height);
            ctx.restore();
           
            stickMan.render();
            // if(stickMan.walkStageCount <= 3){
            //     console.log(true, stickMan.walkStageCount)
            //     console.log(stickMan.walkStages[stickMan.walkStageCount]);
            //     stickMan.walk(stickMan.walkStages[stickMan.walkStageCount]);
            //     stickMan.walkStageCount+= .1;
            // } else {
            //     console.log(false,  stickMan.walkStageCount )
    
            //     stickMan.walkStageCount = 0;
            // }
            gameBanner(stickMan.walkStages[stickMan.walkStageCount]);        
        } 
        
        requestAnimationFrame(animationLoop);
        animationLoop()
     


//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    let bDims= gameBanner();
    let buttonXY = bDims[0];
    let buttonWH = bDims[1];
    //check if mouse is clicking on button; check demmentions of the button
    let checkForMouseXValue = mousePos.x < buttonXY[0] + buttonWH[0] && mousePos.x > buttonXY[0];
    let checkForMouseYValue = mousePos.y < buttonXY[1] + buttonWH[1] && mousePos.y > buttonXY[1];
    if(checkForMouseXValue && checkForMouseYValue){
        stickMan.punchE = !stickMan.punchE;

        if(stickMan.walkStageCount <= 3){
            console.log(true, stickMan.walkStageCount)
            console.log(stickMan.walkStages[stickMan.walkStageCount]);
            stickMan.walk(stickMan.walkStages[stickMan.walkStageCount]);
            stickMan.walkStageCount+= 1;
        } else {
            console.log(false,  stickMan.walkStageCount )

            stickMan.walkStageCount = 0;
        }

        stickMan.getFootEndPoint(40, 310, 25)
        // main1(stickMan.punchE) 
    }
 
}, false);




    }
    render(){
        return(
            <div className='container'>
                <canvas className= 'canvas border-sm border-solid bright-blue-border'  ref={this.canvasRef} width="600" height="400" >
                <style jsx>{`

                    .canvas{
                        
                        grind-area: main;
                        background-color: white;
                        margin: auto;
                        border: #66FCF1 5px solid;
                    }
                `}</style>
                </canvas>
            </div>
        )
   
    }
}


export default Canvas
