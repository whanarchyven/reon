import React, {Component, useState} from 'react';
import {Popup} from "./Popup";
import Image from "next/image";
import {any, object} from "prop-types";
import styled from "styled-components";

const Statbar = styled.div<{width: string}>`
  width: ${props => props.width};
`
const StatIndicator = styled.div<{margin: string}>`
  left: ${props => props.margin};
`

interface fuckTypeScript {
    username:string;
    level:number;
    avatar:string;
    wallet_address:string;

    armorSlot:{
        name:string;
        category:string;
        fullscreen_image:string;
        card_image:string;
        miniature_image:string;
        speed:number;
        defence:number;
        strength:number;
        min_damage:number;
        max_damage:number;
        critical_hit:number;
        health:number;
        reaction:number;
        luck:number;
    },
    rightHandSlot:{
        name:string;
        category:string;
        fullscreen_image:string;
        card_image:string;
        miniature_image:string;
        speed:number;
        defence:number;
        strength:number;
        min_damage:number;
        max_damage:number;
        critical_hit:number;
        health:number;
        reaction:number;
        luck:number;
    },
    leftHandSlot:{
        name:string;
        category:string;
        fullscreen_image:string;
        card_image:string;
        miniature_image:string;
        speed:number;
        defence:number;
        strength:number;
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
    private testChange: () => void;

    selectLeftHand= (item:{name:string;
        category:string;
        fullscreen_image:string;
        card_image:string;
        miniature_image:string;
        speed:number;
        defence:number;
        strength:number;
        min_damage:number;
        max_damage:number;
        critical_hit:number;
        health:number;
        reaction:number;
        luck:number;},category:string)=>{
        if(category=='armor'){
            this.setState({armorSlot:item})
        }
        else if (category=='left hand'){
            this.setState({leftHandSlot:item})
        }
        else if (category=='right hand'){
            this.setState({rightHandSlot:item})
        }
    }
    componentDidMount() {
        this.Init();
    }

    constructor(props:any) {
        super(props);

        this.selectLeftHand = this.selectLeftHand.bind(this);

        this.state={

            username:'My hero',
            level:10,
            avatar:'/images/avatar.png',
            wallet_address:'connect wallet',

            armorSlot:{
                name:'Leather Armor',
                category:'armor',
                fullscreen_image:'/images/account/copper/armor/fullscreens/',
                card_image:'/images/account/copper/armor/cards/armor.png',
                miniature_image:'/images/account/copper/armor/miniatures',
                speed:1,
                defence:1,
                strength:1,
                min_damage:1,
                max_damage:1,
                critical_hit:1,
                health:1,
                reaction:1,
                luck:1,
            },
            rightHandSlot:{
                name:'Copper Axe',
                category:'right hand',
                fullscreen_image:'/images/account/copper/right_hand/fullscreens/axe.png',
                card_image:'/images/account/copper/right_hand/cards/axe.png',
                miniature_image:'/images/account/copper/right_hand/miniatures/axe.png',
                speed:1,
                defence:1,
                strength:1,
                min_damage:1,
                max_damage:1,
                critical_hit:1,
                health:1,
                reaction:1,
                luck:1,
            },
            leftHandSlot:{
                name:'Bucklet',
                category:'left hand',
                fullscreen_image:'/images/account/copper/left_hand/fullscreens/shield.png',
                card_image:'/images/account/copper/left_hand/cards/shield.png',
                miniature_image:'/images/account/copper/left_hand/miniatures/shield.png',
                speed:1,
                defence:1,
                strength:1,
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
            <div className={'absolute scale-[0.8] inline-block left-[19.2vw] h-[92.6vw] top-[-9vw] w-[78vw]'}>

                {/*scale-[0.9]*/}
                {/*<h2 className={'absolute w-full text-center text-reon text-9xl top-0'}>{this.state.armorSlot.name}</h2>*/}
                {/*<h2 className={'absolute w-full text-center text-reon text-9xl top-1/2'}>{this.state.shoesSlot.name}</h2>*/}
                {/*<div className={'w-full block relative h-[16.3vw] z-[5] account-blur-shape rounded-[1vw] '}>*/}
                {/*    <div className={'w-[9vw] left-[4.3vw] top-[3.3vw] h-[9vw] absolute scale-[1.5]'}>*/}
                {/*            <Image src={'/images/reon_logo.png'} layout={'fill'} className={'rounded-full'}></Image>*/}
                {/*    </div>*/}
                {/*    <h1 className={'tracking-[0.035em] absolute left-[17vw] text-left inline-block top-[4.5vw] text-reon text-[4vw] font-title'}>{this.state.username}</h1>*/}
                {/*    <div className={' justify-center flex w-[7vw] h-[6vw] absolute left-[39vw] top-[2.6vw]'}>*/}
                {/*        <div className={'w-full h-full absolute inline-block'}>*/}
                {/*            <Image src={'/images/account/level_back.png'} layout={'fill'}></Image>*/}
                {/*        </div>*/}
                {/*        <p className={'top-[5%] text-[3vw] silver-text  font-desc absolute inline-block'}>{this.state.level}</p>*/}
                {/*    </div>*/}
                {/*    <p className={'text-reon inline-block absolute font-desc left-[47vw] top-[4.6vw] text-[1.1vw]'}>LvL</p>*/}
                {/*    <div className={'w-[3vw] left-[39vw] top-[9.6vw] h-[3vw] absolute inline-block'}>*/}
                {/*        <Image src={'/images/account/wallet.svg'} layout={'fill'}></Image>*/}
                {/*    </div>*/}
                {/*    <p className={'text-reon inline-block absolute font-desc left-[42.2vw] z-[99] top-[9.6vw] text-[2vw]'} onClick={()=>{this.setState({wallet_address:'0xf13D...9A8c'})}}>{this.state.wallet_address}</p>*/}
                {/*</div>*/}

                <div className={'bg-cover bg-[url(../public/images/account/inventory_background.png)] rounded-[1vw] w-full h-[41vw] mt-[1vw] relative'}>
                    {/*<p>bg-[url(../public/images/account/inventory_background.png)]</p>*/}
                    <div className={'w-[41vw] h-[41vw] left-[13vw] top-0 absolute inline-block'}>
                        <div className={'absolute w-full h-full z-[40]'}>
                            <Image src={'/images/account/hobbit.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'absolute w-full h-full z-[41]'}>
                            <Image src={this.state.armorSlot.fullscreen_image+'/armor.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'absolute w-full h-full z-[42]'}>
                            <Image src={this.state.armorSlot.fullscreen_image+'/helmet.png'} layout={'fill'}></Image>
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
                    <div className={'absolute left-[9.2vw] z-[50] cursor-pointer top-[15vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseArmorSlot}>
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
                    <div className={'absolute left-[9.2vw] z-[50] cursor-pointer top-[27vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseRightHandSlot}>
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
                    <div className={'absolute right-[9.2vw] z-[50] cursor-pointer top-[3vw] inline-block w-[9vw] h-[9vw]'} onClick={this.choseArmorSlot}>
                        <div className={'w-full scale-110 absolute inline-block h-full'}>
                            <Image src={'/images/account/inventory_item.png'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-full scale-150 absolute top-[-0.5vw] inline-block h-full'}>
                            <Image src={this.state.armorSlot.miniature_image+'/helmet.png'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
                <div className={'w-full stat-bg relative mt-[0vw] h-[20vw] block'}>
                    <div className={'absolute top-0 left-0 w-[5vw] h-[5vw]'}>
                        <Image src={'/images/account/corner.svg'} layout={'fill'}></Image>
                    </div>
                    <div className={'absolute top-0 right-0 rotate-90 w-[5vw] h-[5vw]'}>
                        <Image src={'/images/account/corner.svg'} layout={'fill'}></Image>
                    </div>
                    <div className={'absolute bottom-0 right-0 rotate-180 w-[5vw] h-[5vw]'}>
                        <Image src={'/images/account/corner.svg'} layout={'fill'}></Image>
                    </div>
                    <div className={'absolute bottom-0 left-0 rotate-[-90deg] w-[5vw] h-[5vw]'}>
                        <Image src={'/images/account/corner.svg'} layout={'fill'}></Image>
                    </div>

                    {/*SPEED BAR*/}

                    <div className={'absolute top-[3.6vw] left-[3.3vw]  w-[25.7vw] h-[3.6vw]'}>
                        <div className={'w-[14%] h-full relative inline-block'}>
                            <Image src={'/images/account/speed.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'relative inline-block ml-[4%] h-full w-[82%] '}>
                            <div className={'shadow-[0px 7.72222px 7.72222px rgba(0, 0, 0, 0.25), inset 0px 10.2396px 10.2396px rgba(0, 0, 0, 0.25)] absolute inline-flex top-[25%] bottom-[25%] w-full h-[50%] '}>
                                <Statbar className={'completed-hero-bar z-10 inline-block h-full'} width={(this.state.armorSlot.speed+this.state.leftHandSlot.speed+this.state.rightHandSlot.speed)*2.5+'%'}></Statbar>
                                <Statbar className={'uncompleted-hero-bar z-10 inline-block h-full'} width={100-(this.state.armorSlot.speed+this.state.leftHandSlot.speed+this.state.rightHandSlot.speed)*2.5+'%'}></Statbar>
                                <div className={'w-full h-full absolute inline-block border-[5px] border-[#DBDBDB] rounded-full z-30'}></div>
                            </div>
                            <StatIndicator className={'stat-bar-indicator justify-center inline-flex w-[3.6vw] h-full absolute rounded-full z-[35] '} margin={((this.state.armorSlot.speed+this.state.leftHandSlot.speed+this.state.rightHandSlot.speed)*2.5)-7.97+'%'}>
                                <h2 className={'leading-[158%] text-[2vw] font-desc inline-block text-[#214E4F]'}>{this.state.armorSlot.speed+this.state.leftHandSlot.speed+this.state.rightHandSlot.speed}</h2>
                            </StatIndicator>
                        </div>
                    </div>

                    {/*DEFENSE BAR*/}

                    <div className={'absolute top-[7.4vw] left-[3.3vw]  w-[25.7vw] h-[3.6vw]'}>
                        <div className={'w-[14%] h-full relative inline-block'}>
                            <Image src={'/images/account/defense.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'relative inline-block ml-[4%] h-full w-[82%] '}>
                            <div className={'shadow-[0px 7.72222px 7.72222px rgba(0, 0, 0, 0.25), inset 0px 10.2396px 10.2396px rgba(0, 0, 0, 0.25)] absolute inline-flex top-[25%] bottom-[25%] w-full h-[50%] '}>
                                <Statbar className={'completed-hero-bar z-10 inline-block h-full'} width={(this.state.armorSlot.defence+this.state.leftHandSlot.defence+this.state.rightHandSlot.defence)*2.5+'%'}></Statbar>
                                <Statbar className={'uncompleted-hero-bar z-10 inline-block h-full'} width={100-(this.state.armorSlot.defence+this.state.leftHandSlot.defence+this.state.rightHandSlot.defence)*2.5+'%'}></Statbar>
                                <div className={'w-full h-full absolute inline-block border-[5px] border-[#DBDBDB] rounded-full z-30'}></div>
                            </div>
                            <StatIndicator className={'stat-bar-indicator justify-center inline-flex w-[3.6vw] h-full absolute rounded-full z-[35] '} margin={((this.state.armorSlot.defence+this.state.leftHandSlot.defence+this.state.rightHandSlot.defence)*2.5)-7.97+'%'}>
                                <h2 className={'leading-[158%] text-[2vw] font-desc inline-block text-[#214E4F]'}>{this.state.armorSlot.defence+this.state.leftHandSlot.defence+this.state.rightHandSlot.defence}</h2>
                            </StatIndicator>
                        </div>
                    </div>

                    {/*STRENGTH BAR*/}

                    <div className={'absolute top-[11.3vw] left-[3.3vw]  w-[25.7vw] h-[3.6vw]'}>
                        <div className={'w-[14%] h-full relative inline-block'}>
                            <Image src={'/images/account/strenght.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'relative inline-block ml-[4%] h-full w-[82%] '}>
                            <div className={'shadow-[0px 7.72222px 7.72222px rgba(0, 0, 0, 0.25), inset 0px 10.2396px 10.2396px rgba(0, 0, 0, 0.25)] absolute inline-flex top-[25%] bottom-[25%] w-full h-[50%] '}>
                                <Statbar className={'completed-hero-bar z-10 inline-block h-full'} width={(this.state.armorSlot.strength+this.state.leftHandSlot.strength+this.state.rightHandSlot.strength)*2.5+'%'}></Statbar>
                                <Statbar className={'uncompleted-hero-bar z-10 inline-block h-full'} width={100-(this.state.armorSlot.strength+this.state.leftHandSlot.strength+this.state.rightHandSlot.strength)*2.5+'%'}></Statbar>
                                <div className={'w-full h-full absolute inline-block border-[5px] border-[#DBDBDB] rounded-full z-30'}></div>
                            </div>
                            <StatIndicator className={'stat-bar-indicator justify-center inline-flex w-[3.6vw] h-full absolute rounded-full z-[35] '} margin={((this.state.armorSlot.strength+this.state.leftHandSlot.strength+this.state.rightHandSlot.strength)*2.5)-7.97+'%'}>
                                <h2 className={'leading-[158%] text-[2vw] font-desc inline-block text-[#214E4F]'}>{this.state.armorSlot.strength+this.state.leftHandSlot.strength+this.state.rightHandSlot.strength}</h2>
                            </StatIndicator>
                        </div>
                    </div>

                    {/*CRITICAL HIT*/}

                    <div className={'w-[12.5vw] h-[4vw] left-[33.2vw] top-[3.4vw] rounded-full absolute stat-window'}>
                        <h2 className={'font-[600]  absolute font-desc left-[0.5vw] text-[1.4vw] top-[-1.5vw] silver-text'}>Critical Hit:</h2>
                        <div className={'w-[3vw] left-[0.8vw] top-[1vw] h-[3vw] absolute'}>
                            <Image src={'/images/account/critical_hit.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'stat-window-line w-[4.8vw] left-[3.87vw] top-[1.95vw] h-[2px] absolute rounded-full'}></div>
                        <h2 className={'absolute leading-[100%] font-desc inline-block left-[9vw] top-[0.6vw] text-[2.6vw] silver-text'}>{this.state.armorSlot.critical_hit+this.state.leftHandSlot.critical_hit+this.state.rightHandSlot.critical_hit}</h2>
                    </div>

                    {/*REACTION*/}

                    <div className={'w-[12.5vw] h-[4vw] left-[47vw] top-[3.4vw] rounded-full absolute stat-window'}>
                        <h2 className={'font-[600]  absolute font-desc left-[0.5vw] text-[1.4vw] top-[-1.5vw] silver-text'}>Reaction:</h2>
                        <div className={'w-[3vw] left-[0.8vw] top-[1vw] h-[3vw] absolute'}>
                            <Image src={'/images/account/reaction.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'stat-window-line w-[4.8vw] left-[3.87vw] top-[1.95vw] h-[2px] absolute rounded-full'}></div>
                        <h2 className={'absolute leading-[100%] font-desc inline-block left-[9vw] top-[0.6vw] text-[2.6vw] silver-text'}>{this.state.armorSlot.reaction+this.state.leftHandSlot.reaction+this.state.rightHandSlot.reaction}</h2>
                    </div>

                    {/*DAMAGE*/}

                    <h2 className={'font-[600] absolute font-desc left-[36vw] text-[1.7vw] top-[8.3vw] silver-text'}>Damage:</h2>
                    <div className={'stat-window left-[33.6vw] top-[11vw] justify-center inline-flex w-[5.6vw] h-[5.6vw] absolute rounded-full z-[35] '}>
                        <h2 className={'silver-text leading-[182%] font-[600] text-[3vw] font-desc inline-block '}>{this.state.armorSlot.min_damage+this.state.leftHandSlot.min_damage+this.state.rightHandSlot.min_damage}</h2>
                    </div>
                    <p className={'font-[500] font-desc text-[1.6vw] left-[33.6vw] absolute text-center w-[5.6vw] top-[15.3vw] z-[70] text-[#FBF9E8] inline-block'}>Min</p>
                    <div className={'stat-window left-[40.5vw] top-[11vw] justify-center inline-flex w-[5.6vw] h-[5.6vw] absolute rounded-full z-[35] '}>
                        <h2 className={'silver-text leading-[182%] font-[600] text-[3vw] font-desc inline-block '}>{this.state.armorSlot.max_damage+this.state.leftHandSlot.max_damage+this.state.rightHandSlot.max_damage}</h2>
                    </div>
                    <p className={'font-[500] font-desc text-[1.6vw] left-[40.5vw] absolute text-center w-[5.6vw] top-[15.3vw] z-[70] text-[#FBF9E8] inline-block'}>Max</p>


                    {/*LUCK*/}

                    <div className={'w-[8.5vw] absolute left-[49vw] top-[10vw] h-[8.5vw]'}>
                        <Image src={'/images/account/luck.svg'} layout={'fill'}></Image>
                    </div>
                    <h2 className={'silver-text absolute text-center leading-[180%] w-[8.5vw] h-[8.5vw] left-[49vw] top-[10vw] font-[600] text-[4.5vw] font-desc inline-block '}>{this.state.armorSlot.luck+this.state.leftHandSlot.luck+this.state.rightHandSlot.luck}</h2>
                    <div className={'w-[6.2vw] absolute left-[52.3vw] top-[8vw] h-[6.2vw]'}>
                        <Image src={'/images/account/luck_title.svg'} layout={'fill'}></Image>
                    </div>

                    {/*HEALTH*/}

                    <h2 className={'font-[600] absolute font-desc left-[64.5vw] text-[1.9vw] top-[2.8vw] silver-text'}>Health:</h2>
                    <div className={'stat-window left-[63vw] top-[5.7vw] justify-center inline-flex border-[#DBDBDB] border-[0.3vw]  w-[10.5vw] h-[10.5vw] absolute rounded-full z-[35] '}>
                        <h2 className={'silver-text leading-[167%] font-[600] text-[5.5vw] font-desc inline-block '}>{this.state.armorSlot.health+this.state.leftHandSlot.health+this.state.rightHandSlot.health}</h2>
                    </div>

                </div>


                {/*<button className={'w-full absolute bottom-0 text-reon text-9xl bg-[#000]'} onClick={()=>{this.selectLeftHand(PlayerInventory.leftHands[4])}}>Тестирование функционала</button>*/}
                {this.state.isOpen && <Popup changeEquip={this.selectLeftHand} items={this.state.invItems} title={this.state.invTitle}  handleClose={this.togglePopup}/>}
            </div>
        );
    }
}


const PlayerInventory= {
    armors:[
        {
            name:'Leather Armor',
            category:'armor',
            fullscreen_image:'/images/account/copper/armor/fullscreens/',
            card_image:'/images/account/copper/armor/cards/armor.png',
            miniature_image:'/images/account/copper/armor/miniatures',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Iron Armor',
            category:'armor',
            fullscreen_image:'/images/account/iron/armor/fullscreens/',
            card_image:'/images/account/iron/armor/cards/armor.png',
            miniature_image:'/images/account/iron/armor/miniatures',
            speed:4,
            defence:4,
            strength:4,
            min_damage:4,
            max_damage:4,
            critical_hit:4,
            health:4,
            reaction:4,
            luck:4,
        },
    ],
    rightHands:[
        {
            name:'Copper Axe',
            category:'right hand',
            fullscreen_image:'/images/account/copper/right_hand/fullscreens/axe.png',
            card_image:'/images/account/copper/right_hand/cards/axe.png',
            miniature_image:'/images/account/copper/right_hand/miniatures/axe.png',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper Sword',
            category:'right hand',
            fullscreen_image:'/images/account/copper/right_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/right_hand/cards/sword.png',
            miniature_image:'/images/account/copper/right_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            strength:1,
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
            category:'left hand',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper left sword2',
            category:'left hand',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper left sword3',
            category:'left hand',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Copper left sword',
            category:'left hand',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/sword.png',
            card_image:'/images/account/copper/left_hand/cards/sword.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/sword.png',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Bucklet',
            category:'left hand',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/shield.png',
            card_image:'/images/account/copper/left_hand/cards/shield.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/shield.png',
            speed:1,
            defence:1,
            strength:1,
            min_damage:1,
            max_damage:1,
            critical_hit:1,
            health:1,
            reaction:1,
            luck:1,
        },
        {
            name:'Axe',
            category:'left hand',
            fullscreen_image:'/images/account/copper/left_hand/fullscreens/axe.png',
            card_image:'/images/account/copper/left_hand/cards/axe.png',
            miniature_image:'/images/account/copper/left_hand/miniatures/axe.png',
            speed:31,
            defence:13,
            strength:22,
            min_damage:11,
            max_damage:14,
            critical_hit:9,
            health:2,
            reaction:3,
            luck:3,
        },

    ],
}


export default Player;