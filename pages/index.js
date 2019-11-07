import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <div className='pageWrapper'>
      <div className='titleBox'>
        <h1 className='title'>LET'S BUILD SOMETHING GREAT!</h1>
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
        height: 100px;
        width: 60%;
      }


      .title {
        font-size: 36px;
        color: #ffffff;
        text-shadow: 3px 3px #0082B4;
      }

      .title {
        text-align: center;
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

export default Home
