import React, {useState} from "react";
import classes from './Header.module.scss'
import img from '../../Images/Global/Group 2559 1.png'
import Scroll from "../SliderController/Components/Scroll";

const Header = ({num,setNum})=>{

    const windowOuterHeight = document.documentElement.clientHeight
    const ScrollAll=(nums)=>{
        window.scrollTo({
            top:windowOuterHeight*(nums),
            behavior:'smooth'
        })
    }

    return(
        <div className={classes.Header}>
            <div className={classes.Header__Img}>
                <img
                    src={img}
                />
            </div>
            <div className={classes.Header__UL}>
                <ul>
                    <li
                        className={num===1?classes.Header__UL__Act:''}
                        onClick={()=>{
                            ScrollAll(0)
                            setNum(1)
                            }
                        }
                    >
                        Home
                    </li>
                    <li
                        className={num===2?classes.Header__UL__Act:''}
                        onClick={()=>{
                            ScrollAll(1)
                            setNum(2)
                            }
                        }
                    >
                        About me
                    </li>
                    <li
                        className={num===3?classes.Header__UL__Act:''}
                        onClick={()=>{
                            ScrollAll(2)
                            setNum(3)
                            }
                        }
                    >
                        Stages
                    </li>
                    <li
                        className={num===4?classes.Header__UL__Act:''}
                        onClick={()=>{
                            ScrollAll(3)
                            setNum(4)
                            }
                        }
                    >
                        Project's
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Header