import React, { Component } from "react";
import styles from '../styles/Home.module.css';
import Image from 'next/image';
// @ts-ignore
import {motion} from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
export default class Navbar extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <motion.div className={'fixed h-[45vw] left-0 top-[2vw] w-[17.2vw] blur-shape rounded-[1vw] z-[9999]'} initial={'hidden'} animate={'visible'} variants={{
                'hidden':{
                    opacity:1,
                    x:'-22vw',
                },
                'visible':{
                    opacity:1,
                    x:0,
                    transition:{
                        delay:0.7,
                        ease:'easeInOut',
                        duration:1,
                    }
                }
            }}>
                <div className={'inline-block absolute top-[-1.4vw] left-0 w-[19vw] h-[3.5vw]'}>
                    <Image src={'/images/navbar_uzor.png'} layout={'fill'}></Image>
                </div>
                <motion.div className={'inline-block absolute top-[3.7vw] left-[11.6vw] w-[11vw] h-[11vw]'} initial="hidden"
                            whileInView={'visible'}

                            viewport={{once:true}}
                            transition={{ duration: 1, delay:0.3, ease:'easeInOut' , repeat:Infinity, repeatType: "reverse",}}
                            variants={{
                                visible: { opacity: 1, rotate: 10 },
                                hidden: { opacity: 1, rotate: -10 }
                            }} >
                    <Image src={'/images/reon_logo.png'} layout={'fill'}></Image>
                </motion.div>
                <div className={'inline-block absolute bottom-[-1vw] left-[6.6vw] w-[4.3vw] h-[4.3vw]'}>
                    <Image src={'/images/twitter_button.png'} layout={'fill'}></Image>
                </div>
                <div className={'inline-block absolute bottom-[-1vw] left-[10.9vw] w-[4.3vw] h-[4.3vw]'}>
                    <Image src={'/images/telegram_button.png'} layout={'fill'}></Image>
                </div>
                <div className={'inline-block absolute bottom-[-1vw] left-[2.5vw] w-[4.3vw] h-[4.3vw]'}>
                    <Image src={'/images/mail_button.png'} layout={'fill'}></Image>
                </div>
                <nav className={'absolute top-[5vw]'}>
                    <Link activeClass={"active"} className={'navbar-item'} to={'intro'}>Main</Link>
                    <Link activeClass={"active"} className={'navbar-item'} to={'about'}>Arena</Link>
                    <Link activeClass={"active"} className={'navbar-item'} to={'teaser'}>Marketplace</Link>
                    <Link activeClass={"active"} className={'navbar-item'} to={'races'}>Taverna</Link>
                    <Link activeClass={"active"} className={'navbar-item'} to={'classes'}>My account</Link>
                </nav>
                <button className={'rounded-[1vw] inline-block absolute left-[1vw] h-[4vw] w-[15vw] top-[23vw] gold-button'}><h2 className={'button-text font-title tracking-[0.13em] text-[1.5vw]'}>CONNECT WALLET</h2></button>
            </motion.div>
        );
    }
}