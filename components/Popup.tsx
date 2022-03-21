import React, { ReactNode, useState } from "react";
import Image from "next/image";
interface propsTestComponent {
    title:string;
    items: Array <{name:string;
        category:string;
        fullscreen_image:string;
        card_image:string;
        miniature_image:string;
        speed:number;
        defence:number;
        fist:number;
        min_damage:number;
        max_damage:number;
        critical_hit:number;
        health:number;
        reaction:number;
        luck:number;}>;
    changeEquip:(currentItem: {name:string;
        category:string;
        fullscreen_image:string;
        card_image:string;
        miniature_image:string;
        speed:number;
        defence:number;
        fist:number;
        min_damage:number;
        max_damage:number;
        critical_hit:number;
        health:number;
        reaction:number;
        luck:number;},category:string)=>any;
    handleClose: () => any;
}
export const Popup = ({ items, handleClose, title, changeEquip }: propsTestComponent) => {

  return (
      <div className={'w-full h-full backdrop-blur-[7px] absolute top-0 left-0 inline-block z-[100] rounded-[1vw]'}>
          <h1 className={'absolute inline-block text-center w-full  top-[5vw] z-[99] gold-title text-[6.2vw] font-title'}>{title}</h1>
          <div className="bg-cover overflow-auto py-[2vw] px-[8vw] absolute flex-wrap flex justify-around justify-items-center w-full h-[50vw] z-[100] left-0 top-[17.2vw] rounded-[1vw] bg-[url(../public/images/account/inventory_background.png)] border-[1vw] border-[#FDF2B9]">
              {/*<div className={'absolute scale-y-[0.96] inline-block scale-x-[0.98] w-full h-full rounded-[1vw]'}>*/}
              {/*    <Image src={'/images/account/inventory_background.png'} layout={'fill'} className={'rounded-[1vw]'}></Image>*/}
              {/*</div>*/}

              {items.map((item) => (
                  <div className={'cursor-pointer relative inline-block my-[0.5vw] w-[12.9vw] mx-[3vw] h-[22.3vw]'} onClick={()=>{changeEquip(item,item.category)}} key={item.name} >
                      <Image src={item.card_image} layout={'fill'}></Image>
                  </div>
              ))}
              {/*onClick={changeEquip(item)}*/}
          </div>
          <div className={'cursor-pointer gold-avatar w-[4vw] h-[4vw] rounded-full absolute inline-block top-[16vw] right-[-1vw] z-[101]'} onClick={handleClose}>
              <div className={'w-full h-full scale-[0.8] bg-reon rounded-full'}>
                  <div className={'rotate-45 w-[80%] mx-[10%] h-[15%] my-[42%] absolute inline-block gold-avatar rounded-[1vw]'}></div>
                  <div className={'-rotate-45 w-[80%] mx-[10%] h-[15%] my-[42%] absolute inline-block gold-avatar rounded-[1vw]'}></div>
              </div>
          </div>
      </div>

  );
};
