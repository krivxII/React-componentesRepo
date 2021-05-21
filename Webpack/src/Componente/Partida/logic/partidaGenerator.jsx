import React  from "react";
import Card from "../../Carta/Card.jsx"

function crearStatePartida(props) {

    let jugador = props.jugador;
    if (typeof props.n1 === 'undefined') {
        jugador = "jugador estandar"
    }
    ///
    let IdPartida = props.IdPartida;
    if (typeof props.IdPartida === 'undefined') {
        IdPartida = -1
    }
    ///
    let cartas = props.cartas;
    if (typeof props.cartas === 'undefined') {
        cartas = {};
        for (let i = 0; i <= 8; i++) {
            cartas[i]= {id: i, value: i+1, flip: 0 };
        }
        for (let i = 8; i <= 15; i++) {
            cartas[i]= {id: i, value: i-7, flip: 0 };
        }
    }
    ///
    let cartasVolteadas = props.cartasVolteadas;
    if (typeof props.cartasVolteadas === 'undefined') {
        cartasVolteadas = 0;
    }
    ///
    let turnos = props.turnos;
    if (typeof props.turnos === 'undefined') {
        turnos = 0;
    }
    ///
    let errores = props.errores;
    if (typeof props.errores === 'undefined') {
        errores = 0;
    }
    ///
    let puntos = props.puntos;
    if (typeof props.puntos === 'undefined') {
        puntos = 0;
    }
    ///
      ///
      let carta1 = props.carta1;
      if (typeof props.puncarta1tos === 'undefined') {
        carta1 = null;
      }
      ///
        ///
    let carta2 = props.carta1puntos;
    if (typeof props.carta2 === 'undefined') {
        carta2 = null;
    }
    ///
    ///
    let vidas = props.vidas;
    if (typeof props.vidas === 'undefined') {
        vidas = 10;
    }
    ///

    let SuperState =
    {
        jugador,
        IdPartida,
        vidas,
        cartas,
        cartasVolteadas,
        turnos,
        errores,
        puntos,
        carta1,
        carta2,
    }

    
return SuperState;
}

function crearTablaEstadisticas(SuperState){
    const element = (
        <table >
        <tbody>
        <tr>
          <td>
      Jugador: {SuperState.jugador}
          </td>
          <td>
     Turno: {SuperState.turnos}
          </td>
          <td>
      Errores: {SuperState.errores}
          </td>
          <td>
      Puntos: {SuperState.puntos}
          </td>
          <td>
      vidas: {SuperState.vidas}
          </td>
        </tr>
        </tbody>
      </table>
    );
    return element
}

function crearCarta(SuperState,flip,setSuperState){

    return (
       
        Object.entries(SuperState.cartas)
        .map((carta, i) => {
         
            return (<Card 
            key={i} 
            carta={carta}
            flip={flip}
            SuperState={SuperState}
            setSuperState={setSuperState}
            >
            </Card>)
            
        }
         //   <button key={i} onClick={() => { flip(carta,SuperState,setSuperState) }}>{carta[0]}</button>    
        )
    )

}



export {crearStatePartida, crearTablaEstadisticas, crearCarta }