import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { crearStatePartida, crearTablaEstadisticas, crearCarta } from "./logic/partidaGenerator.jsx"
import { flip } from "./logic/partidaAccions"
import  "./partida.css"



function Partida(props) {

  const [SuperState, setSuperState] = useState(crearStatePartida(props));
  const { cartas, ...rest } = { ...SuperState }
console.log(Object.entries(SuperState.cartas))
  /////////////////
  return (
    <div>
      {crearTablaEstadisticas(SuperState)}
       <span>
        {Object.entries(SuperState.cartas).map((carta, i) => <button key={i} onClick={() => { flip(carta,SuperState,setSuperState) }}>{carta[1].value}</button>)}
      </span>
      <div className={"table"}>
      {crearCarta(SuperState,flip,setSuperState)}
      </div>
      <pre>
        {JSON.stringify(rest, null, 1)}
      </pre>
      <pre>
        {JSON.stringify(cartas, null, 1)}
      </pre>
    </div>
  )
}

export default (hot)(module)(Partida);