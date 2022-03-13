// some-inner-component.jsx
// @ts-ignore
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Image from "next/image";
export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <div className={'cursor-pointer w-[3vw] h-[3vw] inline-block absolute z-50 right-[30%] bottom-[3.5%]'} onClick={() => swiper.slideNext()}><Image src={'/images/right_button.png'} layout={'fill'}></Image></div>
    );
}