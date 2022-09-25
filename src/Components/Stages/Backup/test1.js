import React from "react";
import classes from './Stages.module.scss'
import cn from 'classnames'

const Stages = () =>{
    const info=[
        '',
        'Stages',
        'Изучение предметной области',
        'Определение требований к проекту',
        'Составление структуры сайта ',
        'Выбор программного обеспечения ',
        'Создание дизайна в Figma',
        'Реализация проекта выбраным программным обеспечением ',
        'Заполнение проекта контентом и тестирование ',
        'Разработка административной и пользовательской части проекта '
    ];
    return(
        <div className={classes.Block}>
            <div className={classes.Block__lines}>
                <div className={classes.Block__lines__line} />
                <div className={classes.Block__lines__line} />
                <div className={classes.Block__lines__line} />
                <div className={classes.Block__lines__line} />
            </div>
            <div className={classes.Block__left}>
                <b>
                    Stages
                </b>
                <div className={classes.Block__left__info}>
                    <b>
                        Пункты выполняемой работы
                    </b>
                    <p>
                        Пункты работы могут меняться от проекта к проекту, сдесь расписано большинство того что выполняется
                    </p>
                </div>
            </div>
            <div className={classes.Block__right}>
                {
                    info.map((e,i)=>{
                        console.log(i)
                        return(
                            <div
                                style={{top:`${9*i}vh`,left:`${75-(7*(i*0.5))}vw`}}
                            >
                                {
                                    i < 2 ? '' :(
                                        <p>0{i-1}</p>
                                    )
                                }
                                {
                                    i < 2 ? '' :(
                                        <svg>
                                            <polygon points='50 0,93 0,41 70, -23 100'/>
                                        </svg>
                                    )
                                }

                                <b>{e}</b>
                                {
                                    i < 3 ? '' :(
                                        <hr/>
                                    )
                                }
                            </div>
                        )
                    })
                }
                <svg>
                    <polygon points='1078 0, 405 900, 4000 900, 4000 0' className={classes.Block__right__svgBG}/>
                    <polygon points='1128 0, 460 900, 4000 900, 4000 0' className={classes.Block__right__svgBGTwo}/>
                    {/*1128 0, 465 900, 1440 900, 1440 0*/}
                    <polygon points='681 600,614 690,564 690, 632 600' className={classes.Block__right__svgBG__light} />
                    {/*616 600,536 690,488 690, 568 600*/}
                    <polygon points='782 400,803 400,766 450,745 450' className={classes.Block__right__svgBG__grean} />
                </svg>

            </div>
        </div>
    )
}
export default Stages