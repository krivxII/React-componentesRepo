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

    let SuperState =
    {
        jugador,
        IdPartida,
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

export {crearStatePartida}