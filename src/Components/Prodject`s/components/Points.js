import React from "react";
import cn from 'classnames';
import figma from "../../../Images/Global/figma.png";
import github from "../../../Images/Global/github.png";
import classes from '../Prodjects.module.scss'
const Points = ({number,name, tag,info}) =>{
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
                <img
                    src={figma}
                />
                <img
                    src={github}
                />
            </div>
        </div>
    )
}

export default Points