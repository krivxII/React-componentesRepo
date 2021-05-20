import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import {crearStatePartida} from "./logic/partida"


function Partida(props) {

    const[SuperState,setSuperState] =useState(crearStatePartida(props));
    const {cartas, ...rest} = {...SuperState}

    function flip(carta){

      if(SuperState.cartasVolteadas===0){
        let newState = {...SuperState};
        newState.carta1=newState.cartas[carta[0]];
        newState.cartas[carta[0]].flip=!newState.cartas[carta[0]].flip;
        newState.cartasVolteadas++;
        setSuperState(newState)
      
    }
    if(SuperState.cartasVolteadas===1){
      if(!(SuperState.carta1.id===SuperState.cartas[carta[0]].id)){
      let newState = {...SuperState};
      newState.carta2=newState.cartas[carta[0]];
      newState.cartas[carta[0]].flip=!newState.cartas[carta[0]].flip;
      newState.cartasVolteadas++;

      if (newState.carta1.value===newState.carta2.value)
      newState.puntos+=1;
      else newState.puntos-=1;

      setSuperState(newState)
      }
      else console.log ("misma carta");
    }
    if(SuperState.cartasVolteadas>1){
      let newState = {...SuperState};
      newState.carta1.flip=false;
      newState.carta2.flip=false;
      newState.cartasVolteadas=0;
      setSuperState(newState)
    }
  }

    useEffect(() => {
        console.log("rererererererender");
      });
    /////////////////
    return (
    <div>
    <span>
    <pre>
       { JSON.stringify(rest,null,1)}
    </pre>
    </span>
    <span>
   
    </span>
    {Object.entries(SuperState.cartas).map( (carta,i) =><button key={i} onClick={()=>{flip(carta)}}>{carta[0]}</button>)}
   
    </div>
    )
  }

export default (hot)(module)(Partida);