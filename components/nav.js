import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const links = [
  { href: '#aboutSection', label: 'About Me' },
  { href: '#portfolioSection', label: 'Portfolio' },
  { href: '#contactMeSection', label: 'Contact' }

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const Nav = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <title>Nav</title>
      <meta
        name='navBar'
        key='navBar'
      />
    </Head>

    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
       
        </ul>
        <ul tag='social'>
          <li tag='social'> <a href="#" className="fa fa-facebook"></a></li>
          <li tag='social'> <a href="#" className="fa fa-twitter"></a></li>
          <li tag='social'> <a href="#" className="fa fa-linkedin"></a></li>
          <li tag='social'> <a href="#" className="fa fa-youtube"></a></li>
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
          justify-content: flex-start;

        }
        ul {

        }

        ul[tag="social"]{
          margin-left: 40%;
        }
        
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: inline-block;
          padding: 6px 8px;
        }
        a {
          color: #FFF;
          text-decoration: none;
          font-size: 24px;
          transition: all 500ms ease-in-out;
        }

        a:hover{
          color: #0082B4;
          font-size: 36px;
        }

        .fa {
          padding: 10px;
          font-size: 20px;
          width: 20px;
          text-align: center;
          text-decoration: none;
          margin-left: px;
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

      `}</style>
    </nav>
  </div>
)

export default Nav
