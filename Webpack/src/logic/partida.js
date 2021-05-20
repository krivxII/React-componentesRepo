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
        for (let i = 0; i <= 15; i++) {
            cartas[i]= {value: i, flip: 0 };
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

    let SuperState =
    {
        jugador,
        IdPartida,
        cartas,
        cartasVolteadas,
        turnos,
        errores,
        puntos,
    }

    
return SuperState;
}

export {crearStatePartida}