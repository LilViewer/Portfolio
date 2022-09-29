import React from "react";
import cn from 'classnames';
import Figma from "../../../Images/Global/figma.png";
import Github from "../../../Images/Global/github.png";
import classes from '../Prodjects.module.scss'
const Points = ({number,name, tag,info, git, figma}) =>{
    return(
        <div className={classes.Prod__left__info__block__right}>
            <div className={classes.Prod__left__info__block__right__title}>
                <p><b>0{number} /</b> {name}</p>
            </div>
            <div className={classes.Prod__left__info__block__right__moreinfo}>
                <div className={classes.Prod__left__info__block__right__moreinfo__tags}>
                    {
                        tag.map((e)=>{
                            return(
                                <div className={classes.Prod__left__info__block__right__moreinfo__tags__tag}>
                                    {e}
                                </div>
                            )
                        })
                    }
                </div>
                {
                    info
                }
            </div>
            <div className={classes.Prod__left__info__block__right__href}>
                <a
                    href={figma}
                >
                    <img src={Figma} />
                </a>
                <a
                    href={git}
                >
                    <img src={Github}/>
                </a>
            </div>
        </div>
    )
}

export default Points