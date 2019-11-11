import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav.js'
import About from '../components/about.js'
import { Link, animateScroll as scroll } from "react-scroll";

/* ---------- HTML ------------*/ 
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      test: 0
    };
  }
  
  changeSection =(e)=>{
    e.preventDefault();
    console.log($('.navBarWrapper')[0]);
    let navBar = $('.navBarWrapper')[0];
    while(navBar.style.opacity !== 1){
      console.log(navBar.style.opacity)
      navBar.style.opacity = navBar.style.opacity + 1;
    }
    
  }

  componentDidMount(){
    console.log(1)
  }


  render (){
    return(
      <div>
        <Head>
          <title>Home</title>
          <meta name='homePage' key='homePage'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        </Head>
        <section className='homeSectionWrapper'>
          <div className='homeFlex'>
            <div className='title'>LET'S BUILD SOMETHING GREAT TOGETHER!</div>
            <div onClick={this.changeSection} id='circleForEnterBtn'>       
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >
                  <span className="tSpan"></span>
                  <span className="bSpan"></span>
                  <span className="rSpan"></span>
                  <span className="lSpan"></span>

                  <div className='downArrow'></div>     
                  <div className='startBtnContainer'>
                    <h1 className='startBtn'>START</h1>
                    <span className="tSpan"></span>
                    <span className="bSpan"></span>
                    <span className="rSpan"></span>
                    <span className="lSpan"></span>
                  </div>
              </Link>
            </div>

          </div>
          <div className='navBarWrapper'>
            <Nav />
          </div>
        </section>
          <About />
        <section className='portfolioSectionWrapper'>
        </section>
    
    
        <style jsx>{`
            .navBarWrapper{
            opacity: 0;
            width: 90%;
            background-color: #000D12;
            bottom: 0px;
            position: absolute;
            border-bottom: solid #0082B4 2px;
            border-top: solid #0082B4 2px;
            tansition: opacity 5s ease-in-out;
          }
          
          .homeSectionWrapper{
            height: 100vh;
            position: relative;
            display: flex;
            background-color: #000D12;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 80vh;
          }
          .homeFlex{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            font-size: 36px;
            color: #ffffff;
            text-shadow: 3px 3px #0082B4;
            margin: 2% auto;
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
    
          .startBtn a:link, a:visited{
            color: inherit;
            text-decoration: none;
          }
    
          .startBtnContainer{
            opacity: 0;
            border: solid #ffffff 2px;
            border-radius: 50%;
            height: 100px;
            width: 100px;
            position: absolute;
            bottom: 0px;
            top:80%;
            color: white;
            transition: all 3000ms;
            text-shadow: 0px 0px 0px;
    
          }
    
          .startBtnContainer .tSpan{
            margin-top: -6.9em;
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
            margin-top: -6.9em;
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
            top: 67%;
            text-shadow: 2px 2px 30px #fff
    
          }
    
          /* ---------- LINKS ---------- */
          
    
        `}</style>
          <style global jsx>{`
            body {
              text-align: center;
            }
          `}</style>
    </div>
    )
  }
}

/* ---------- END OF HTML ------------*/ 

/* ---------- JS ------------*/ 


/* ---------- END OF JS ------------*/ 


export default Home
