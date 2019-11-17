import React from 'react'
import Icon from '@mdi/react'
import { mdiConsolidate } from '@mdi/js'
import { mdiCursorDefaultClick } from '@mdi/js';
import { mdiIframe } from '@mdi/js';

const About = () =>(
  <section id ="aboutSection">
    <h1 className='aboutHeader' id='about'> About </h1>
    <div className='mainWrapperDiv'>
      <div className='leftFlexBox'>
        <div className='profilePhotoDiv'></div>
        <div className='aboutMeBoxDiv'>
          <div className='aboutMeBoxContent'>
            <h2>HI I'M RYAN</h2>
            <span className='underlineTitle'></span>
            <p className='aboutMeDesciption'>
              I am a Full Stack Javascript Developer that has a deep passion for bringing ideas to life! I want to help bring your throughts, ideals, and dreams to life 
              through creative designs, fun interactivity, and new inovate creations. Explore my site for a broad example of how we can bring your dreams to life.  
            </p>
          </div>
        </div>
      </div>
      <div className='rightFlexBox'>
        <div>
          <Icon path={mdiConsolidate}
          title="User Profile"
          size={3}
          color="#0082B4"
          />
          <h3>Integrative Solutions</h3>
          <p>[description]</p>
        </div>
        <div>
          <Icon path={mdiIframe}
          title="User Profile"
          size={3}
          color="#000D12"
          />
          <h3>Website Creation</h3>
          <p>[description]</p>
        </div>
        <div>
          <Icon path={mdiCursorDefaultClick}
          title="User Profile"
          size={3}
          color="#FC8421"
          />
          <h3>Customer Interaction</h3>
          <p>[description]</p>
        </div>
      </div>
    </div>

    






    <style jsx>{`
    
      #aboutSection{
        padding-top: 90px;

      }

      .aboutHeader{
        font-size: 48px;
        text-shadow: 2px 2px 30px #0082B4;
      }

      .mainWrapperDiv{
        display: flex;
        flex-direction: row;
      }
    
      .leftFlexBox, .rightFlexBox{
        width: 100%;
        height: 100vh;
        padding: 0 1%;      
      }

      .profilePhotoDiv{
        border: solid #FC8421 2px;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        position: absolute;
        background-image: url(no.png);
        background-position:50% 50%;
        background-repeat:no-repeat;  
        margin-top: 10%;
        background-color: grey;
      }
      
      .aboutMeBoxDiv{
        height: 300px;
        margin-top: 50%;
        border: solid #0082B4 2px;
        background-color: #FC8421;
      }

      .aboutMeBoxContent{
        margin-top: 10%;
        color: #fff;
        padding:1%;
      }

      .aboutMeBoxContent h2{
        font-size: 36px;
      }

      .aboutMeBoxContent p{
        font-size: 18px;
      }
       
      .rightFlexBox{
        display: flex;
        flex-direction: column;
        padding: 5% 0;
      }
      
      .rightFlexBox div{
        height: 20%;
      }

    `}</style>
  </section>

)


export default About
