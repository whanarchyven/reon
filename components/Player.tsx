import React, {Component, useState} from 'react';
import {Popup} from "./Popup";
import Image from "next/image";
import {any} from "prop-types";


interface fuckTypeScript {
    username:string;
    level:number;
    avatar:string;
    wallet_address:string;

    armorSlot:{
        name:string;
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
        luck:number;
    },
    rightHandSlot:{
        name:string;
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
        luck:number;
    },
    leftHandSlot:{
        name:string;
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
        luck:number;
    },
    helmetSlot:{
        name:string;
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
        luck:number;
    },
    ////////

    isOpen:boolean,
    invItems: Array<any>,
    invTitle:string;
}


class Player extends Component<any,fuckTypeScript> {
    private Init: () => void;
    private togglePopup: () => void;
    private choseArmorSlot: () => void;
    private choseLeftHandSlot: () => void;
    private choseRightHandSlot: () => void;
    private choseHelmetSlot: () => void;
    private testChange: () => void;

    componentDidMount() {
        this.Init();
    }

    constructor(props:any) {
        super(props);
        this.state={

            username:'Ivan',
            level:10,
            avatar:'/images/avatar.png',
            wallet_address:'connect wallet',

            armorSlot:{
                name:'Leather Armor',
                fullscreen_image:'/images/account/copper/armor/fullscreens/armor.png',
                card_image:'/images/account/copper/armor/cards/armor.png',
                miniature_image:'/images/account/copper/armor/miniatures',
                speed:1,
                defence:1,
                fist:1,
                min_damage:1,
                max_damage:1,
                critical_hit:1,
                health:1,
                reaction:1,
                luck:1,
            },
            rightHandSlot:{
                name:'Copper Axe',
                fullscreen_image:'/images/account/copper/right_hand/fullscreens/axe.png',
                card_image:'/images/account/copper/right_hand/cards/axe.png',
                miniature_image:'/images/account/copper/right_hand/miniatures/axe.png',
                speed:1,
                defence:1,
                fist:1,
                min_damage:1,
                max_damage:1,
                critical_hit:1,
                health:1,
                reaction:1,
                luck:1,
            },
            leftHandSlot:{
                name:'Bucklet',
                fullscreen_image:'/images/account/copper/left_hand/fullscreens/shield.png',
                card_image:'/images/account/copper/left_hand/cards/shield.png',
                miniature_image:'/images/account/copper/left_hand/miniatures/shield.png',
                speed:1,
                defence:1,
                fist:1,
                min_damage:1,
                max_damage:1,
                critical_hit:1,
                health:1,
                reaction:1,
                luck:1,
            },
            helmetSlot:{
                name:'Leaver Helmet',
                fullscreen_image:'/images/account/copper/helmet/fullscreens/helmet.png',
                card_image:'/images/account/copper/helmet/cards/helmet.png',
                miniature_image:'/images/account/copper/helmet/miniatures/helmet.png',
                speed:1,
                defence:1,
                fist:1,
                min_damage:1,
                max_damage:1,
                critical_hit:1,
                health:1,
                reaction:1,
                luck:1,
            },
            ////////

            isOpen:false,
            invItems:[],
            invTitle:'',
        };
        this.Init= ()=>{
            this.setState({armorSlot:PlayerInventory.armors[0]});
            this.setState({leftHandSlot:PlayerInventory.leftHands[0]});
            this.setState({rightHandSlot:PlayerInventory.rightHands[0]});
            this.setState({helmetSlot:PlayerInventory.helmets[0]});
            this.setState({invItems:PlayerInventory.leftHands});
            this.setState({invTitle:'Left hand'});
        };

        this.togglePopup = () => {
            this.setState({isOpen: !this.state.isOpen});
        };


        this.choseArmorSlot =() =>{
            this.setState({invItems:PlayerInventory.armors});
            this.setState({invTitle:'Armor'});
            this.togglePopup();
        };

        this.choseLeftHandSlot =() =>{
            this.setState({invItems:PlayerInventory.leftHands});
            this.setState({invTitle:'Left Hand'});
            this.togglePopup();
        };

        this.choseRightHandSlot =() =>{
            this.setState({invItems:PlayerInventory.rightHands});
            this.setState({invTitle:'Right Hand'});
            this.togglePopup();
        }

        this.choseHelmetSlot =() =>{
            this.setState({invItems:PlayerInventory.helmets});
            this.setState({invTitle:'Helmets'});
            this.togglePopup();
        }

        this.testChange = ()=>{
            this.setState({leftHandSlot:PlayerInventory.leftHands[4]});
            this.setState({rightHandSlot:PlayerInventory.rightHands[1]});
        }




        // this.connectWallet = ()=>{
        //     this.setState({})
        // }
    }
    render() {

        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return (
            <div className={'absolute inline-block left-[19.2vw] h-[92.6vw] top-[15.3vw] w-[78vw]'}>
                {/*<h2 className={'absolute w-full text-center text-reon text-9xl top-0'}>{this.state.armorSlot.name}</h2>*/}
                {/*<h2 className={'absolute w-full text-center text-reon text-9xl top-1/2'}>{this.state.shoesSlot.name}</h2>*/}
                <div className={'w-full block relative h-[16.3vw] z-[5] account-blur-shape rounded-[1vw] '}>
                    <div className={'w-[9vw] left-[4.3vw] top-[3.3vw] h-[9vw] absolute rounded-full gold-avatar'}>
                        <div className={'scale-[0.85] w-[9vw] h-[9vw] absolute rounded-full bg-reon'}>
                            <Image src={this.state.avatar} layout={'fill'} className={'rounded-full'}></Image>
                        </div>
                    </div>
                    <h1 className={'tracking-[0.035em] absolute left-[17vw] text-left inline-block top-[4.5vw] text-reon text-[4vw] font-title'}>{this.state.username}</h1>
                    <div className={' justify-center flex w-[7vw] h-[6vw] absolute left-[39vw] top-[2.6vw]'}>
                        <div className={'w-full h-full absolute inline-block'}>
                            <Image src={'/images/account/level_back.png'} layout={'fill'}></Image>
                        </div>
                        <p className={'top-[5%] text-[3vw] silver-text  font-desc absolute inline-block'}>{this.state.level}</p>
                    </div>
                    <p className={'text-reon inline-block absolute font-desc left-[47vw] top-[4.6vw] text-[1.1vw]'}>LvL</p>
                    <div className={'w-[3vw] left-[39vw] top-[9.6vw] h-[3vw] absolute inline-block'}>
                        <Image src={'/images/account/wallet.svg'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-reon inline-block absolute font-desc left-[42.2vw] z-[99] top-[9.6vw] text-[2vw]'} onClick={()=>{this.setState({wallet_address:'0xf13D...9A8c'})}}>{this.state.wallet_address}</p>
                </div>

                <div className={'bg-cover bg-[url(../public/images/account/inventory_background.png)] rounded-[1vw] w-full h-[41vw] mt-[4vw] relative'}>
                    {/*<p>bg-[url(../public/images/account/inventory_background.png)]</p>*/}
                    <div className={'w-[41vw] h-[41vw] left-[13vw] top-0 absolute inline-block'}>
                        <div className={'absolute w-full h-full z-[40]'}>
                            <Image src={'/images/account/hobbit.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'absolute w-full h-full z-[41]'}>
                            <Image src={this.state.armorSlot.fullscreen_image} layout={'fill'}></Image>
                        </div>
                        <div className={'absolute w-full h-full z-[42]'}>
                            <Image src={this.state.helmetSlot.fullscreen_image} layout={'fill'}></Image>
                        </div>
                        <div className={'absolute w-full h-full z-[43]'}>
                            <Image src={this.state.rightHandSlot.fullscreen_image} layout={'fill'}></Image>
                        </div>
                        <div className={'absolute w-full h-full z-[44]'}>
                            <Image src={this.state.leftHandSlot.fullscreen_image} layout={'fill'}></Image>
                        </div>
                    </div>

                    {/*KIRASA*/}
                    <div className={'absolute left-[9.2vw] z-[50] cursor-pointer top-[3vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseArmorSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-75 absolute top-[-0.5vw] inline-block h-full'}>
                            <Image src={this.state.armorSlot.miniature_image+'/kirasa.png'} layout={'fill'}></Image>
                        </div>
                    </div>

                    {/*BOOTS*/}
                    <div className={'absolute left-[9.2vw] z-[50] cursor-pointer top-[27vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseArmorSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-100 absolute top-[-0.5vw] inline-block h-full'}>
                            <Image src={this.state.armorSlot.miniature_image+'/boots.png'} layout={'fill'}></Image>
                        </div>
                    </div>

                    {/*GLOVES*/}
                    <div className={'absolute right-[9.2vw] z-[50] cursor-pointer top-[15vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseArmorSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-100 absolute top-[-0.5vw] inline-block h-full'}>
                            <Image src={this.state.armorSlot.miniature_image+'/gloves.png'} layout={'fill'}></Image>
                        </div>
                    </div>

                    {/*RIGHT HAND*/}
                    <div className={'absolute left-[9.2vw] z-[50] cursor-pointer top-[15vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseRightHandSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-150 absolute top-[-0.5vw] inline-block h-full'}>
                            <Image src={this.state.rightHandSlot.miniature_image} layout={'fill'}></Image>
                        </div>
                    </div>

                    {/*LEFT HAND*/}
                    <div className={'absolute right-[9.2vw] z-[50] cursor-pointer top-[27vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseLeftHandSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-150 absolute top-[0] inline-block h-full'}>
                            <Image src={this.state.leftHandSlot.miniature_image} layout={'fill'}></Image>
                        </div>
                    </div>

                    {/*HELMET*/}
                    <div className={'absolute right-[9.2vw] z-[50] cursor-pointer top-[3vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseHelmetSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-150 absolute top-[-0.5vw] inline-block h-full'}>
                            <Image src={this.state.helmetSlot.miniature_image} layout={'fill'}></Image>
                        </div>
                    </div>

                </div>



                <button className={'w-full absolute bottom-0 text-reon text-9xl bg-[#000]'} onClick={this.testChange}>Тестирование функционала</button>
                {this.state.isOpen && <Popup changeEquip={this.testChange} items={this.state.invItems} title={this.state.invTitle}  handleClose={this.togglePopup}/>}
            </div>
        );
    }
}


const PlayerInventory= {
    armors:[
        {
            name:'Leather Armor',
            fullscreen_image:'/images/account/copper/armor/fullscreens/armor.png',
            card_image:'/images/account/copper/armor/cards/armor.png',
            miniature_image:'/images/account/copper/armor/miniatures',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
    ],
    rightHands:[
        {
            name:'Copper Axe',
            fullscreen_image:'/images/account/copper/right_hand/fullscreens/axe.png',
            card_image:'/images/account/copper/right_hand/cards/axe.png',
            miniature_image:'/images/account/copper/right_hand/miniatures/axe.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper Sword',
            fullscreen_image:'/images/account/copper/right_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/right_hand/cards/sword.png',
            miniature_image:'/images/account/copper/right_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
    ],
    leftHands:[
        {
            name:'Copper left sword1',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper left sword2',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper left sword3',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper left sword',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Bucklet',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/shield.png',
            card_image:'/images/account/copper/left_hand/cards/shield.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/shield.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Axe',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/axe.png',
            card_image:'/images/account/copper/left_hand/cards/axe.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/axe.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },

    ],
    helmets:[
        {
            name:'Leaver Helmet',
            fullscreen_image:'/images/account/copper/helmet/fullscreens/helmet.png',
            card_image:'/images/account/copper/helmet/cards/helmet.png',
            miniature_image:'/images/account/copper/helmet/miniatures/helmet.png',
            speed:1,
            defence:1,
            fist:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
    ],
}


export default Player;