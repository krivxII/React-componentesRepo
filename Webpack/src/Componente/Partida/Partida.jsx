import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { crearStatePartida, crearTablaEstadisticas, crearCartas } from "./logic/partidaGenerator.jsx"
import { flip } from "./logic/partidaAccions"
import "./partida.css"



function Partida(props) {

  const [SuperState, setSuperState] = useState(crearStatePartida(props));
  const { cartas, cartasRamdon, carta1, carta2, ...rest } = { ...SuperState }

  let x = 0;

  function onClickW(carta, SuperState, setSuperState) {
    console.log(carta)
    if (x < 1 && !SuperState.cartas[carta[0]].flip) {
      x++;
      flip(carta, SuperState, setSuperState)
    }

  }
  ///////////////// <button onClick={() => { x++; console.log(x) }}>yeyeyea</button>



          // <span>
          //   {Object.entries(SuperState.cartas).map((carta, i) => <button key={i} onClick={() => { flip(carta, SuperState, setSuperState) }}>{carta[1].value}</button>)}
          // </span>


  return (
    <div style={{maxHeight:"409px"}}>
       <span style={{maxWidth: "600px", display:"inline-block", verticalAlign: "top", }}>
          {crearTablaEstadisticas(SuperState)}
          <div className={"table"}>
            
             {crearCartas(SuperState, onClickW, setSuperState)}
            
          </div>
       
       </span>


      <span style={{maxWidth: "600px",maxHeight:"409px", display:"inline-block", overflow: "scroll",}}>
  
          <pre>
            {JSON.stringify(rest, null, 1)}
          </pre>
          <pre>
            {JSON.stringify(carta1, null, 1)}
          </pre>
          <pre>
            {JSON.stringify(carta2, null, 1)}
          </pre>
          <pre>
            {JSON.stringify(cartas, null, 1)}
          </pre>
      </span>
    </div>

  )
}

export default (hot)(module)(Partida);