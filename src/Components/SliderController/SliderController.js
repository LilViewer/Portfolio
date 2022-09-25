import React from "react";
import classes from "./SliderController.module.scss"
import img1 from '../../Images/SliderController/scroll-prev 1.png'
import img2 from '../../Images/SliderController/scroll-prev 2.png'

const SliderController = ({num,ScrollAll,setNum}) =>{


    return(
        <div className={classes.Controller}>
            <div className={classes.Controller__Left}>
            </div>
                <div className={classes.Controller__RightControll}>
                    <div>
                        <hr/>
                        <img
                            onClick={()=>{
                                if ((num>1)&&(num<=5)){
                                    setNum(num-1)
                                }
                                ScrollAll(num-2)
                            }}
                            src={img1}
                        />
                        <p>
                            {`0${num}`}
                        </p>
                    </div>
                    <div style={{height:'100px'}}>

                    </div>
                    <div>
                        <p style={{visibility: (num!==4?'visible':'hidden')}}>
                            {`0${num+1}`}
                        </p>
                        <img
                            onClick={()=>{
                                if ((num>=1)&&(num<4)){
                                    setNum(num+1)
                                }
                                ScrollAll(num)
                            }}
                            src={img2}
                        />
                        <hr/>
                    </div>
                </div>
        </div>
    )
}
export default SliderController