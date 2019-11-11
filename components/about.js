import React from 'react'

const About = () =>(
  <section id ="aboutSection">
    <h1 className='aboutHeader' id='about'> About </h1>
    <div className='mainWrapperDiv'>
      <div className='leftFlexBox'>
        <div className='profilePhotoDiv'>
          <image className='profilePhoto'></image>
        </div>
        <div className='aboutMeBoxDiv'>
          <h2>HI I'M RYAN</h2>
          <span className='underlineTitle'></span>
          <p className='aboutMeDesciption'>
            I am a Full Stack Javascript Developer that has a deep passion for developing 
            and building new things all the time. I want to help bring your throughts, ideals, and dreams to life 
            through creative designs, fun interactivity, and new inovate creations.  
          </p>
        </div>
        here
      </div>
      <div className='rightFlexBox'>
        here2
        <span><image></image></span>
      </div>
    </div>

    






    <style jsx>{`

      .mainWrapperDiv{
        border: solid green 2px;
        display: flex;
        flex-direction: row;
      }
    
      .leftFlexBox, .rightFlexBox{
        border: solid blue 2px;
        width: 100%;
        height: 100vh;      
      }

      .profilePhotoDiv{

      }
      
      .profilePhoto{

      }

    `}</style>
  </section>

)


export default About
