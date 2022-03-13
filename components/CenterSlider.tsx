// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from "next/image";
import SlidePrevButton from "./SlidePrevButton";
import SlideNextButton from "./SlideNextButton";


export default () => {
    const swiper = useSwiper();
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            className={'w-[54vw] left-[31vw] blur-shape top-[8vw] h-[33vw] absolute inline-block'}
        >
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={'w-full h-[26vw]'}>
                        {isActive ? <div className={'transition ease-in-out delay-50 duration-300 scale-100 inline-block absolute w-[100%] h-[78%]'}><Image src={'/images/orc_race.png'} layout={'fill'}></Image></div> : <div className={'transition ease-in-out delay-50 duration-300 scale-75 inline-block absolute w-[100%] h-[78%]'}><Image src={'/images/orc_race_blured.png'} layout={'fill'}></Image></div>}
                        {isActive?<h2 className={'opacity-100 transition ease-in-out delay-50 duration-300 scale-100 text-white font-title inline-block absolute text-center w-[90%] left-[5%] text-[4vw] bottom-0'}>ORC</h2> : <h2 className={'opacity-0 transition ease-in-out delay-50 duration-300 scale-1 text-white font-title inline-block absolute text-center w-[50%] left-[25%] text-[4vw] bottom-0'}>ORC</h2>}
                    </div>
                )}
            </SwiperSlide>

            <SwiperSlide>
                {({ isActive }) => (
                    <div className={'w-full h-[26vw]'}>
                        {isActive ? <div className={'transition ease-in-out delay-50 duration-300 scale-100 inline-block absolute w-[100%] h-[78%]'}><Image src={'/images/elf_race.png'} layout={'fill'}></Image></div> : <div className={'transition ease-in-out delay-50 duration-300 scale-75 inline-block absolute w-[100%] h-[78%]'}><Image src={'/images/elf_race_blured.png'} layout={'fill'}></Image></div>}
                        {isActive?<h2 className={'opacity-100 transition ease-in-out delay-50 duration-300 text-white font-title inline-block absolute text-center w-[90%] left-[5%] text-[4vw] bottom-0'}>ELF</h2> : <h2 className={'opacity-0 transition ease-in-out delay-50 duration-300 text-white font-title inline-block absolute text-center w-[50%] left-[25%] text-[4vw] bottom-0'}>ELF</h2>}
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={'w-full h-[26vw]'}>
                        {isActive ? <div className={'transition ease-in-out delay-50 duration-300 scale-100 inline-block absolute w-[100%] h-[78%]'}><Image src={'/images/dwarf_race.png'} layout={'fill'}></Image></div> : <div className={'transition ease-in-out delay-50 duration-300 scale-75 inline-block absolute w-[100%] h-[78%]'}><Image src={'/images/dwarf_race_blured.png'} layout={'fill'}></Image></div>}
                        {isActive?<h2 className={'opacity-100 transition ease-in-out delay-50 duration-300 scale-100 text-white font-title inline-block absolute text-center w-[90%] left-[5%] text-[4vw] bottom-0'}>DWARF</h2> : <h2 className={'opacity-0 transition ease-in-out delay-50 duration-300 scale-1 text-white font-title inline-block absolute text-center w-[90%] left-[5%] text-[4vw] bottom-0'}>DWARF</h2>}
                    </div>
                )}
            </SwiperSlide>
            <SlidePrevButton></SlidePrevButton>
            <SlideNextButton></SlideNextButton>

        </Swiper>
    );
};