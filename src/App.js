import SliderController from "./Components/SliderController/SliderController";
import React, {useEffect, useState} from "react";
import style from './style.module.scss'
import cn from 'classnames'
import Scroll from "./Components/SliderController/Components/Scroll";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Prodjects from "./Components/Prodject`s/Prodjects";
import Stages from "./Components/Stages/Stages";
function App() {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const [num,setNum] = useState(1)
  return (
    <div className={style.Main}>
        <Scroll num={num} setNum={setNum}/>
        <Header num={num} setNum={setNum}/>
        <div className={cn(style.Block,style.One)}>
            <Home/>
        </div>
        <div className={cn(style.Block,style.Two)}>
            <AboutMe/>
        </div>
        <div className={cn(style.Block,style.Three)}>
            <Stages/>
        </div>
        <div className={cn(style.Block,style.Four)}>
            <Prodjects/>
        </div>

    </div>

  );
}

export default App;
