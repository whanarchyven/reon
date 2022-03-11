import React, { Component } from "react";
import styles from '../styles/Home.module.css';
import Image from 'next/image';
// @ts-ignore
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
            <div className={'fixed h-[45vw] left-0 top-[2vw] w-[17.2vw] blur-shape rounded-[1vw] z-[9999]'}>
                <div className={'inline-block absolute top-[-1.4vw] left-0 w-[19vw] h-[3.5vw]'}>
                    <Image src={'/images/navbar_uzor.png'} layout={'fill'}></Image>
                </div>
                <div className={'inline-block absolute top-[3.7vw] left-[11.6vw] w-[9vw] h-[9vw]'}>
                    <Image src={'/images/reon_logo.png'} layout={'fill'}></Image>
                </div>
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
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'intro'}>Intro</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'about'}>About</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'teaser'}>Teaser</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'races'}>Races</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'classes'}>Classes</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'clanwars'}>Clan wars</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'craft'}>Craft</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'marketplace'}>Marketplace</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'donatesystem'}>Donate System</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'rating'}>Rating</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'roadmap'}>Roadmap</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'gameflow'}>Gameflow</Link>
                    <Link spy={true} smooth={true} offset={-130} duration= {500} activeClass={"active"} className={'navbar-item'} to={'docs'}>Docs</Link>
                </nav>
            </div>
        );
    }
}