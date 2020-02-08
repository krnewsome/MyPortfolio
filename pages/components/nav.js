import React from 'react'
import Head from 'next/head'
import { Link, animateScroll as scroll } from "react-scroll";
import MenuOverlay from './menuOverlay.js'


//create main nav menu links
const links = [
  { to: 'aboutSection', label: 'About Me', navtype:'mainNav' },
  { to: 'portfolioSection', label: 'Portfolio', navtype:'mainNav'},
  { to: 'contactMeSection', label: 'Contact', navtype:'mainNav'}

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});
// END OF MAN NAV LINKS

class Nav extends React.Component {  
 constructor(props){
   super(props);
   this.state = {
     showOverlay: false
   }
 }
  //create dropdown menu function
  dropDownFunc=()=>{
    this.setState({
      showOverlay: !this.state.showOverlay
    })
  }

  render (){
    return(
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <title>Nav</title>
          <meta
            name='navBar'
            key='navBar'
          />
        </Head>
        <MenuOverlay removeOverlay={this.dropDownFunc} showOverlay={this.state.showOverlay} />
        <nav id="navBar">
          <ul className='mainMenu'>
            <li className='menuDropDown'> 
              <p onClick={this.dropDownFunc} className="border-menu">
              Menu
              </p>
            </li>
            <li navtype="mainNav">
              <Link
                    activeClass="active"
                    to="homeSectionWrapper"
                    spy={true}
                    smooth={true}
                    duration= {500}
                    >Home
              </Link>
            </li>
            {links.map(({ key, to, label, navtype}) => (
              <li key={key} navtype={navtype}>
                <Link
                    activeClass="active"
                    to= {to}
                    spy={true}
                    smooth={true}
                    duration= {500}
                    offset= {-30}
                    >{label}
              </Link>
              </li>
            ))}
          
            </ul>
            <ul>
              <li tag='social'> <a href="https://twitter.com/Ry_Dev21" className="fa fa-twitter"></a></li>
              <li tag='social'> <a href="https://www.linkedin.com/in/keith-newsome-mph-0983b874/" className="fa fa-linkedin"></a></li>
              <li className='menuDropDown2'>
                <p className="border-menu">
                  <Link
                      activeClass="active"
                      to="contactMeSection"
                      spy={true}
                      smooth={true}
                      duration= {500}
                      >Social
                  </Link>
                </p>
              </li>
            </ul>
          
          <style jsx>{`
            :global(body) {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
                Helvetica, sans-serif;
            }

            nav {
              display: flex;
              flex-flow: row;
              justify-content: space-between;

            }
            

            li {
              cursor: pointer;
              display: inline-block;
              padding: 6px 8px;
              color: #FFF;
              font-size: 24px;
              transition: all 500ms ease-in-out;
            }
            

            li[navtype="mainNav"]:hover{
              color: #D6CE15;
              font-size: 36px;
            }        

            .menuDropDown, .menuDropDown2{
              display: none;
            }


            @media only screen and (max-width: 1100px) {
              
              li[tag="social"]{
                display: none;
              }
              
              li[navtype="mainNav"]{
                display: none;
              }

              .menuDropDown{
                display: block;
              }

              .menuDropDown2{
                display: block;
              }

            }

            .fa {
              padding: 10px;
              font-size: 20px;
              width: 20px;
              text-align: center;
              text-decoration: none;
              border-radius: 50%;
              align-self: flex-end;

            }

            .fa:hover {
                opacity: 0.7;
            }
            
            .fa-facebook {
              background: #3B5998;
              color: white;
            }
            
            .fa-twitter {
              background: #55ACEE;
              color: white;
            }

            .fa-linkedin {
              background: #007bb5;
              color: white;
            }
            
            .fa-youtube {
              background: #bb0000;
              color: white;
            }

            p{
              margin: 0px;
            }

            .border-menu {
              position: relative;
              padding-left: 1.25em;
            }
            .border-menu:before {
              content: "";
              position: absolute;
              top: 0.25em;
              left: 0;
              width: 1em;
              height: 0.125em;
              border-top: 0.375em double #fff;
              border-bottom: 0.125em solid #fff;
            }
            
          `}</style>
        </nav>
      </div>
  )}
}

export default Nav
