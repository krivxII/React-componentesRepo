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





  return (
    <div>
      {crearTablaEstadisticas(SuperState)}
      <span>
        {Object.entries(SuperState.cartas).map((carta, i) => <button key={i} onClick={() => { flip(carta, SuperState, setSuperState) }}>{carta[1].value}</button>)}
      </span>
      <pre>
        {JSON.stringify(rest, null, 1)}
      </pre>
      <pre>
        {JSON.stringify(carta1, null, 1)}
      </pre>
      <pre>
        {JSON.stringify(carta2, null, 1)}
      </pre>
      <div className={"table"}>
        {crearCartas(SuperState, onClickW, setSuperState)}
      </div>
      <pre>
        {JSON.stringify(cartas, null, 1)}
      </pre>
    </div>
  )
}

export default (hot)(module)(Partida);