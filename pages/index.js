import React from 'react'
import Head from 'next/head'

/* ---------- HTML ------------*/ 
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <div className='pageWrapper'>
      <div className='titleBox'>
        <h1 className='title'>LET'S BUILD SOMETHING GREAT!</h1>
      </div>
      <div id='circleForEnterBtn' onClick = {transformButton}>
        <span className="tSpan"></span>
        <span className="bSpan"></span>
        <span className="rSpan"></span>
        <span className="lSpan"></span>

        <div className='downArrow'>
          <a href='#'></a>
        </div>       
        <div className='startBtnContainer' >
          <h1 className='startBtn'>START</h1>
          <span className="tSpan"></span>
          <span className="bSpan"></span>
          <span className="rSpan"></span>
          <span className="lSpan"></span>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }

      .pageWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 80vh;
      }

      .titleBox{
        border: solid white 2px;
        border-radius: .5%;
        height: 100px;
        min-width: 60%;
        padding: 0 1%;
      }

      .title {
        font-size: 36px;
        color: #ffffff;
        text-shadow: 3px 3px #0082B4;
      }

      #circleForEnterBtn{
        margin-top: 5%;
        text-align: center
        padding:0;
        height: 100px;
        width: 100px;
        border: solid #ffffff 2px;
        border-radius: 50%;
        transition: all 200ms ease-in-out;
      }
     
      #circleForEnterBtn:hover{
        border-radius: .5em;  
      }

      .tSpan, .rSpan, .bSpan, .lSpan{
        opacity: 0;
        position: absolute;
        display: inline-block;
        height: 30px;
        width: 30px;
        border: solid #ffffff 2px;
        border-bottom-color: #000D12;
        border-radius: 50%;
        margin-top: -1.8em;
        margin-left: .2em;
        background-color: #000D12;
        transition: all 1000ms ease-in-out;
      }
      
      .bSpan{
        margin-top: -3.2em;
        background-color: #000D12;
        transform: rotate(180deg);
        transform-origin: 50% 232%; 
        border-top-color: #000D12;
        border-bottom-color: #000D12;
        transition: all 4000ms ease-in-out;

      }
 
      .rSpan{
        background-color: #000D12;
        transform: rotate(90deg);
        transform-origin: 50% 232%; 
        border-bottom-color: #000D12;
        transition: all 2000ms ease-in-out;

      }

      .lSpan{
        background-color: #000D12;
        transform: rotate(270deg);
        transform-origin: 50% 232%; 
        border-bottom-color: #000D12;
        transition: all 3000ms ease-in-out;

      }
      
      #circleForEnterBtn:hover .tSpan,
      #circleForEnterBtn:hover .rSpan,
      #circleForEnterBtn:hover .lSpan, 
      #circleForEnterBtn:hover .bSpan {
        opacity: 1;
      }
     
      .downArrow{
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        height: 40px;
        width: 40px;
        border: solid #ffffff;
        border-width: 0px 1px 1px 0px;
        transform: rotate(45deg);
        transition: border-width 150ms ease-in-out;
        transition: margin-top 200ms ease-in-out;
      }
      
      #circleForEnterBtn:hover .downArrow{
        border-color: #0082B4;
        border-bottom-width: 5px;
        border-right-width: 5px;
        margin-top: 30%;
      }
  
      .startBtn{
        font-size: 24px;
        margin-top: 34%;
      }
      .startBtnContainer{
        opacity: 0;
        border: solid #ffffff 2px;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        position: absolute;
        bottom: 0px;
        color: white;
        transition: all 4000ms;
      }

      .startBtnContainer .tSpan{
        margin-top: -6.7em;
        margin-left: -1.2em;
        border-top-color: #fff;
        border-bottom-color: #000D12;
        transition: all 4000ms ease-in-out;
      }

      .startBtnContainer .rSpan{
        margin-top: -6.7em;
        margin-left: -1em;
        border-top-color: #fff;
        border-bottom-color: #000D12;
        transition: all 4000ms ease-in-out;
      }

      .startBtnContainer .bSpan{
        margin-top: -6.7em;
        margin-left: -1em;
        border-top-color: #fff;
        border-bottom-color: #000D12;
        transition: all 4000ms ease-in-out;
      }

      .startBtnContainer .lSpan{
        margin-top: -6.7em;
        margin-left: -1em;
        border-top-color: #fff;
        border-bottom-color: #000D12;
        transition: all 4000ms ease-in-out;
      }

      #circleForEnterBtn:hover .startBtnContainer{
        opacity: 1;
        border-radius: .5em;
        color: #0082B4;
      }

    `}</style>
      <style global jsx>{`
        body {
          text-align: center;
          background-color: #000D12;
        }
      `}</style>
  </div>
)
/* ---------- END OF HTML ------------*/ 

/* ---------- JS ------------*/ 
  let transformButton = (e)=>{
    let buttonShapeDiv = e.target;
    if(buttonShapeDiv.id == 'circleForEnterBtn'){
     
      console.log(buttonShapeDiv.children[1].offsetLeft)
    }
    
   
  }

/* ---------- END OF JS ------------*/ 


export default Home
