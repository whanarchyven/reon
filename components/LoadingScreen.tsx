import React, { Component } from "react";
import styles from '../styles/Home.module.css';
import Image from 'next/image';
// @ts-ignore
import {motion} from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
export default class LoadingScreen extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <motion.div className={'bg-cover w-[100vw] h-[100vh] bg-[url(../public/images/loadscreen.png)] '} initial="hidden"
                        whileInView={'visible'}

                        viewport={{once:true}}
                        transition={{ duration: 0.1, delay:1.5, ease:'backInOut' ,}}
                        variants={{
                            visible: { opacity: 0, y: 0 },
                            hidden: { opacity: 1, y: 0 }
                        }}>
                <div className={'absolute w-[12vw] h-[12vw] left-[44vw] top-[20vw]'}>
                    <Image src={'/images/reonLoadLogo.png'} layout={'fill'}></Image>
                </div>
                <motion.div className={'absolute w-[20vw] h-[20vw] left-[39.5vw] top-[17vw]'} initial="hidden"
                            whileInView={'visible'}
                            viewport={{once:true}}
                            transition={{ duration: 3, delay:0.3, ease:'linear' , repeat:Infinity,}}
                            variants={{
                                visible: { opacity: 1, rotate: 0 },
                                hidden: { opacity: 1, rotate: -360 }
                            }}>
                    <Image src={'/images/loadbar.png'} layout={'fill'}></Image>
                </motion.div>
            </motion.div>
        );
    }
}