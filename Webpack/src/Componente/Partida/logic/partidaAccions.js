let x = 4343434;

function flip(carta, SuperState, setSuperState) {
  if (SuperState.cartasVolteadas === 0) {
    let newState = { ...SuperState };
    newState.carta1 = newState.cartas[carta[0]];
    newState.cartas[carta[0]].flip = !newState.cartas[carta[0]].flip;
    newState.cartasVolteadas++;
    setSuperState(newState)

  }
  if (SuperState.cartasVolteadas === 1) {
    if (!(SuperState.carta1.id === SuperState.cartas[carta[0]].id)) {
      let newState = { ...SuperState };
      newState.carta2 = newState.cartas[carta[0]];
      newState.cartas[carta[0]].flip = !newState.cartas[carta[0]].flip;
      newState.cartasVolteadas++;

      if (newState.carta1.value === newState.carta2.value)
        newState.puntos += 1;
      else newState.puntos -= 1;

      setSuperState(newState)
    }
    else console.log("misma carta");
  }
  if (SuperState.cartasVolteadas > 1) {
    let newState = { ...SuperState };
    newState.carta1.flip = false;
    newState.carta2.flip = false;
    newState.cartasVolteadas = 0;
    setSuperState(newState)
  }
};

export { flip }