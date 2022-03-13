// some-inner-component.jsx
// @ts-ignore
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Image from "next/image";
export default function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <div className={'cursor-pointer w-[3vw] h-[3vw] inline-block absolute z-50 left-[30%] bottom-[3.5%]'} onClick={() => swiper.slidePrev()}><Image src={'/images/left_button.png'} layout={'fill'}></Image></div>
    );
}