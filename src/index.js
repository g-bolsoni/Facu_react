import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'
import Stadion from './components/Stadion'
import {GoodMorning,GoodAfternoon} from './components/Greetings'
import Product from './class/ Product'



/*ReactDOM.render(
    <div>
        <Game/>
        <Stadion/>
    </div>,
    document.getElementById("root"))
    */

   ReactDOM.render(
    <React.Fragment>
        <Game timeA="Sesi" timeB="Flamengo"/>
        <Stadion nome="Pedrocão"/>
        <GoodMorning timeA="Sesi"/>
        <GoodAfternoon timeB="Flamengo"/>
        <Product/>
    </React.Fragment>,
    document.getElementById("root"))