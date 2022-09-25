import React, {useEffect, useState} from "react";
import SliderController from "../SliderController";
import Header from "../../Header/Header";

const Scroll = ({num,setNum}) =>{
    const windowOuterHeight = document.documentElement.clientHeight

    const ScrollAll=(nums)=>{
        window.scrollTo({
            top:windowOuterHeight*(nums),
            behavior:'smooth'
        })
        console.log(windowOuterHeight*(nums))
    }

    // const ScrollTop=()=>{
    //     if (num!=1){
    //         window.scrollTo({
    //             top:windowOuterHeight*(num-2),
    //             behavior:'smooth'
    //         })
    //         setNum(num-1)
    //     }
    //
    // }
    // const ScrollBottom=()=>{
    //     if (num!=4){
    //         window.scrollTo({
    //             top:windowOuterHeight*(num),
    //             behavior:'smooth'
    //         })
    //         setNum(num+1)
    //     }
    //
    // }


    return(
        <SliderController num={num}  ScrollAll={ScrollAll}  setNum={setNum}/>
    )


}
export default Scroll