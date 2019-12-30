import React from 'react'
import Head from 'next/head'
import { Link, animateScroll as scroll } from "react-scroll";


//create main nav menu links
const links = [
  { to: 'aboutSection', label: 'About Me', navType:'mainNav' },
  { to: 'portfolioSection', label: 'Portfolio', navType:'mainNav'},
  { to: 'contactMeSection', label: 'Contact', navType:'mainNav'}

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});
// END OF MAN NAV LINKS

//create dropdown menu function


const  MenuOverlay = () => (
  <div>
    <div id='overlay'>
        
    </div>
      
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        #overlay{
            position: fixed; 
            display: block;
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
        
      `}</style>
    
  </div>
)

export default MenuOverlay
