import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import {crearStatePartida} from "./logic/partida"


function Partida(props) {

    const[SuperState,setSuperState] =useState(crearStatePartida(props));
    const {cartas, ...rest} = {...SuperState}

    function flip(carta){
        let newState = {...SuperState};
        newState.cartas[carta[0]].flip=!newState.cartas[carta[0]].flip;
        setSuperState(newState)
    }

    useEffect(() => {
        console.log("rererererererender");
      });
    /////////////////
    return (
    <div>
    <pre>
       { JSON.stringify(rest,null,1)}
    </pre>
    <pre>
       { JSON.stringify(cartas)}
    </pre>
    
    {Object.entries(SuperState.cartas).map( (carta,i) =><button key={i} onClick={()=>{flip(carta)}}>{carta[0]}</button>)}
   
    </div>
    )
  }

export default (hot)(module)(Partida);