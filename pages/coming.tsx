import React, { Component } from "react";
import type { NextPage } from 'next'
import Slider from "react-slick";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CenterMode from "../components/CenterSlider";
import SimpleSlider from "../components/CenterSlider";
import Navbar from "../components/Navbar"
import CenterSlider from "../components/CenterSlider";
import { motion } from 'framer-motion';


const Coming: NextPage = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
  return (
    <div className={styles.container}>
      <Head>
        <title>COMING SOON</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
          <link
              rel="preload"
              href="/fonts/Danger/Another%20Danger%20Slanted.woff"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Jost/Jost-Black.woff"
              as="font"
              crossOrigin=""
          />
      </Head>

      <main className={styles.main}>

          <Navbar></Navbar>

          {/*TAVERNA*/}

          <div className={' block bg-cover text-[10px] sm:text-[25px] lg:text-[30px] bg-[url(../public/images/coming_soon.png)] relative w-[100vw] h-[58vw]'}>
              <motion.div className={'absolute top-0'} initial={'hidden'} animate={'visible'} variants={{
                  'hidden': {
                      opacity: 0
                  },
                  'visible': {
                      opacity: 1,
                      transition: {
                          delay: .4,
                          duration:1,
                      },
                  },
              }}><h1 className={'top-[22vw] text-center absolute inline-block left-[36vw] top-[4vw] text-reon text-[9vw] w-[50vw] font-title'}>COMING SOON</h1></motion.div>
              <motion.div className={'z-50 cursor-pointer inline-block absolute left-[23.8vw] top-[6.4vw] w-[5.3vw] h-[5.3vw]  rotate-180'} initial={'hidden'} animate={'visible'} variants={{
                  'hidden':{
                      opacity:0,
                  },
                  'visible':{
                      opacity:1,
                      transition:{
                          delay:0.5,
                          ease:'circIn',
                          duration:0.3,
                      }
                  }}}><a className={'cursor-pointer'} href={'/'}><Image className={'rotate-180 cursor-pointer'} src={'/images/goback_arrow.png'} layout={'fill'} /></a></motion.div>
          </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Coming