import React, {useState} from "react";
import classes from './Prodjects.module.scss'
import figma from '../../Images/Global/figma.png'
import github from '../../Images/Global/github.png'
import ViewerShop from '../../Images/Global/ViewerShop.jpg'
import PortOne from '../../Images/Global/PortOne.jpg'
import PortTwo from '../../Images/Global/PortTwo.jpg'
import cn from 'classnames'
import varibles from '../../varibles.module.scss'
import Points from "./components/Points";
const Prodjects = () =>{
    const [isVS,setIsVS] = useState(true)
    const [isPortOne,setIsPortOne] = useState(false)
    const [isPortTwo,setIsPortTwo] = useState(false)
    const colorRed = varibles.colorRed;

    const TegsVS= ['React','Laravel','Api','JS']
    const TegsPortOne= ['React','JS']
    const TegsPortTwo= ['React']

    const info =
        {
            VS:'Интернет-магазин игровых ключей. Выполненый в Front на React, Beck на Laravel с использованием Api',
            PortOne:'Сайт портфолио. Одностраничнный лендинг ',
            PortTwo:'Сайт портфолио '
        }

        const information = [{
           VS:{
                num: 1,
                name:'ViewerShop',
                tegs: ['React','Laravel','Api','JS'],
                info: 'Интернет-магазин игровых ключей. Выполненый в Front на React, Beck на Laravel с использованием Api',
               git: 'https://github.com/LilViewer/Front-ViewerShop',
               figma: 'https://www.figma.com/file/NduayikJy2hQB1FEYkfkS6/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F'
            },
            PartOne:{
                num: 2,
                name:'PortfolioOne',
                tegs: ['React','JS'],
                info: 'Сайт портфолио. Одностраничнный лендинг ',
                git: 'https://github.com/LilViewer/Site-card',
                figma: 'https://www.figma.com/file/fv9HGssE1LqK99blNr0rEb/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0'
            },
            PartTwo:{
                num: 3,
                name:'PortfolioTwo',
                tegs: ['React'],
                info: 'Сайт портфолио',
                git: 'https://github.com/LilViewer/Portfolio',
                figma: 'https://www.figma.com/file/Y3SFMspu2lLKVsXVSqstf5/%D0%9F%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE?node-id=0%3A1',
            }
        }]
    return(
        <div className={classes.Prod}>
            <div className={classes.Prod__left}>
                <div className={classes.Prod__left__title}>
                    <div className={classes.Prod__left__title__top}>
                        <b>
                            VIEWER
                        </b>
                        <svg>
                            <polygon points="0 48,0 40, 263 40, 257 48, " />
                            <polygon points="260 48,280 20, 320 20, 320 48 "/>
                        </svg>
                    </div>
                    <div className={classes.Prod__left__title__bot}>
                        Project`s
                    </div>
                </div>
                <div className={classes.Prod__left__info}>


                    <div className={classes.Prod__left__info__block}>
                        <div className={classes.Prod__left__info__block__left}>
                            <svg >
                                <polygon points="20 50,15 50,15 230,20 225 " />
                                <polygon points="20 228,0 248,0 400,20 400 " />
                            </svg>
                        </div>
                        {
                            isVS?(
                                information.map((e)=>{
                                    return(
                                            <Points
                                                key = {e.VS.num}
                                                name={e.VS.name}
                                                info={e.VS.info}
                                                number={e.VS.num}
                                                tag={e.VS.tegs}
                                                figma={e.VS.figma}
                                                git={e.VS.git}
                                            />
                                    )
                                })
                            ):isPortOne?(
                                information.map((e)=>{
                                    return(
                                            <Points
                                                key = {e.PartOne.num}
                                                name={e.PartOne.name}
                                                info={e.PartOne.info}
                                                number={e.PartOne.num}
                                                tag={e.PartOne.tegs}
                                                figma={e.PartOne.figma}
                                                git={e.PartOne.git}
                                            />
                                    )
                                })
                            ):information.map((e)=>{
                                return(
                                        <Points
                                            key = {e.PartTwo.num}
                                            name={e.PartTwo.name}
                                            info={e.PartTwo.info}
                                            number={e.PartTwo.num}
                                            tag={e.PartTwo.tegs}
                                            figma={e.PartTwo.figma}
                                            git={e.PartTwo.git}
                                        />
                                )
                            })
                        }

                    </div>
                    <div className={classes.Prod__left__info__circle} >
                        <div className={cn(classes.Prod__left__info__circle__out,classes.Prod__left__info__circle__out1)} />
                        <div className={cn(classes.Prod__left__info__circle__out,classes.Prod__left__info__circle__out2)} />
                        <div className={cn(classes.Prod__left__info__circle__out,classes.Prod__left__info__circle__out3)} />
                        <div className={classes.Prod__left__info__circle__inside} >
                            <svg>
                                <polygon points="0 0,2 9,10 10"/>
                            </svg>
                            <svg>
                                <polygon points="0 0,2 9,10 10"/>
                            </svg>
                            <svg>
                                <polygon points="0 0,2 9,10 10"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.Prod__right}>
                <div
                    className={classes.Prod__right__block}
                    style={{backgroundImage:`url(${isVS===true?ViewerShop:isPortOne===true?PortOne:PortTwo})`}}
                >
                    <div
                        className={classes.Prod__right__block__circle1}
                        onClick={(e)=>{
                                setIsVS(true);
                                setIsPortOne(false)
                                setIsPortTwo(false)
                            }
                        }

                    >
                        <div className={cn(classes.Prod__right__block__circle1__rel,isVS===true?classes.test1:'')}>
                            <div className={cn(classes.Prod__right__block__circle1__rel__out,classes.Prod__right__block__circle1__rel__out1)} />
                            <div className={cn(classes.Prod__right__block__circle1__rel__out,classes.Prod__right__block__circle1__rel__out2)} />
                            <div className={cn(classes.Prod__right__block__circle1__rel__out,classes.Prod__right__block__circle1__rel__out3)} /*style = {{borderColor:isVS === true ? colorRed : ''}}*//>
                            <div
                                className={classes.Prod__right__block__circle1__rel__inside}
                                style={{backgroundImage:`url(${ViewerShop})`}}
                            >
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classes.Prod__right__block__circle2}
                        onClick={(e)=>{
                            setIsVS(false);
                            setIsPortOne(true)
                            setIsPortTwo(false)
                        }
                        }
                    >
                        <div className={cn(classes.Prod__right__block__circle2__rel,isPortOne===true?classes.test2:'')}>
                            <div className={cn(classes.Prod__right__block__circle2__rel__out,classes.Prod__right__block__circle2__rel__out1)} />
                            <div className={cn(classes.Prod__right__block__circle2__rel__out,classes.Prod__right__block__circle2__rel__out2)} />
                            <div className={cn(classes.Prod__right__block__circle2__rel__out,classes.Prod__right__block__circle2__rel__out3)} />
                            <div
                                className={classes.Prod__right__block__circle2__rel__inside}
                                style={{backgroundImage:`url(${PortOne})`}}
                            >
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classes.Prod__right__block__circle3}
                        onClick={(e)=>{
                            setIsVS(false);
                            setIsPortOne(false)
                            setIsPortTwo(true)
                        }
                        }
                    >
                        <div className={cn(classes.Prod__right__block__circle3__rel,isPortTwo===true?classes.test3:'')}>
                            <div className={cn(classes.Prod__right__block__circle3__rel__out,classes.Prod__right__block__circle3__rel__out1)} />
                            <div className={cn(classes.Prod__right__block__circle3__rel__out,classes.Prod__right__block__circle3__rel__out2)} />
                            <div className={cn(classes.Prod__right__block__circle3__rel__out,classes.Prod__right__block__circle3__rel__out3)} />
                            <div
                                className={classes.Prod__right__block__circle3__rel__inside}
                                style={{backgroundImage:`url(${PortTwo})`}}
                            >
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                                <svg>
                                    <polygon points="0 20,-10 40,16 30"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prodjects