import React from 'react'
import Head from 'next/head'
import { Link, animateScroll as scroll } from "react-scroll";


//create main nav menu links
const links = [
  { to: 'aboutSection', label: 'About Me', navType:'mainNav' },
  { to: 'portfolioSection', label: 'Portfolio', navType:'mainNav'},
  { to: 'contactMeSection', label: 'Contact', navType:'mainNav'}

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  link.className = link.to;
  return link
});
// END OF MAN NAV LINKS

class MenuOverlay extends React.Component {

  
  render(){
    return(
      <div>
        <div id='overlay'>
          <div className="menuWrapper">
          {links.map(({ key, to, label, navtype, className}) => (
              <li key={key} navtype={navtype} className= {className}>
                <Link
                    activeClass="active"
                    to= {to}
                    spy={true}
                    smooth={true}
                    duration= {500}
                    offset= {-30}
                    onClick={this.props.removeOverlay}
                    >{label}
              </Link>
              </li>
            ))}
          </div>
        </div>
          
          <style jsx>{`
            :global(body) {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
                Helvetica, sans-serif;
            }
            #overlay{
                position: fixed; 
                display: ${this.props.showOverlay ? 'block' : "none" };
                width: 100%; 
                height: 100%; 
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.5);
                z-index: 2; 
                cursor: pointer; 
            }
            .menuWrapper{
              display: flex;
              flex-direction: column;
              margin: 20% auto;
              height: 50%;
              width: 90%;
            }

            ul{
              height: 100%;
            }

            li{
              padding-top 3%;
              flex-grow: 3;
              border-bottom: 2px solid #D6CE15;
              margin-top: .1%;
              list-style-type: none;
              font-size: 36px;
              color: #FFF;
              transition: all 100ms ease-in-out;
            }
            
            .aboutSection:hover{
              background: #53900F;
              transform: rotate(-5deg);
              font-size: 56px;

            }

            .portfolioSection:hover{
              background: #A4A71E;
              transform: rotate(5deg);
              font-size: 56px;
            }


            .contactMeSection:hover{
              background: #D6CE15;
              transform: rotate(-5deg);
              font-size: 56px;
            }

          `}</style>
        
      </div>
  )}
}

export default MenuOverlay
