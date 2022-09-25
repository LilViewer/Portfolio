import React from "react";
import classes from './AboutMe.module.scss'
import img from '../../Images/Global/Rectangle 4.png'
const AboutMe = () =>{


    return(
        <div className={classes.AboutMe}>
            <div className={classes.AboutMe__top}>
                <div className={classes.AboutMe__top__img}>
                    <img
                        src={img}
                    />
                </div>
                <div className={classes.AboutMe__top__me}>
                    <div>
                        <b>
                            About me
                        </b>
                        <p>
                            Привет! Я Соколов Демьян. Full-stack разработчик который толькочто закончил обучение в ЮУрГТК на профессии ”Разработчик мультимедийных и веб приложений”.  За это время научился проектировать и реализовывать веб-сайты на множестве языков, в разделе Prodjects сами убедитесь
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.AboutMe__bot}>
                <b>
                    Обо мне в цифрах
                </b>
                <div className={classes.AboutMe__bot__num}>
                    <p>
                        <b>0</b> Лет опыта
                    </p>
                    <p>
                        <b>xx</b> Реализованных проекта
                    </p>
                    <p>
                        <b>4</b> Года учебы
                    </p>
                </div>
            </div>
            <div className={classes.AboutMe__hr}>
                <hr className={classes.AboutMe__hr__hr1}/>
                <hr className={classes.AboutMe__hr__hr2}/>
                <hr className={classes.AboutMe__hr__hr3}/>
                <hr className={classes.AboutMe__hr__hr4}/>
                <hr className={classes.AboutMe__hr__hr5}/>
                <hr className={classes.AboutMe__hr__hr6}/>
                <hr className={classes.AboutMe__hr__hr7}/>
                <hr className={classes.AboutMe__hr__hr8}/>
            </div>
        </div>
    )

}

export default AboutMe