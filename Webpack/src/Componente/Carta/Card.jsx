import React from 'react'
import  './card.css'

const Card = ({carta,flip,SuperState,setSuperState}) => {
console.log("")
  return (
    <span className={"card"}  onClick={() => { flip(carta,SuperState,setSuperState)}} >
      <span className={"cardNumber"}> {carta[1].flip ? carta[1].value.toString() : ' ' }</span>
    </span>
  )
}

export default Card
/*<div className={"card"}  onClick={() => {console.log("asdads")}} >
<span className={"cardNumber"} onClick={() => {console.log("asdads"); props.accion(props.carta,props.SuperState,props.setSuperState) }}>{props.flipped ? props.number : ' '}</span>
</div>*/