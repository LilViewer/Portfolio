import React from "react";
import classes from './Home.module.scss'
import cn from 'classnames'
const Home = () =>{

    return(
        <div className={classes.Home}>
            <div className={classes.Home__text}>
                <div className={classes.Home__text__top}>
                    <b>
                        VIEWER
                    </b>
                    <p>
                        псевдоним
                    </p>
                </div>
                <div className={classes.Home__text__bot}>
                    <p>
                        <b>Full-Stack</b> разработчик
                    </p>
                    <p>
                        JS, PHP, React, SQL, Laravel, Api, Python
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home