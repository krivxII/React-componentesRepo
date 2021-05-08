import React, { useState, useEffect } from 'react';

import { hot } from "react-hot-loader";



function SubscribeToFriendStatus(status, callback) {
  console.log("SubscribeToFriendStatus")
  callback(status);
}

function Example(props) {

  let x2 = 3; /// esto tendra el mismo valor siempre

  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(true);
  //se ejecuta al montar el componente 
  useEffect(
    () => {
      // Similar to componentDidMount and componentDidUpdate:
      // se activa al montar el componente o re-renderizarlo
      document.title = `You clicked ${count} times`;// Update the document title using the browser API
      console.log(first)//revisando valor antes de cambiar


      first ?
        (
          (() => { console.log(`Montando el componente`); setFirst(false)/*cambiando valor al montar*/ })()
        )
        :
        console.log(`Actualizando el componente`);

      /*
       * Aunque el set state se ejecute esta seccion se ejecutara en la primera pasada
       */

      console.log(first)// los cambios no ocurren hasta no re-renderizar


      return () => {
        // se activa al desmontar el componente o re-renderizarlo
        console.log(`Desmontando o actualizando el componente`);
      };


    }
  );
  //////////////////////////////

  const [isOnline, setIsOnline] = useState(false);
  let x = [false];
  //tambien se ejecuta al montar el componente  pero solo 1 vez
  useEffect(
    () => {
      console.log("esto solo deberia aparecer 1 vez");
      console.log(first)// los cambios no ocurren hasta no re-renderizar
      SubscribeToFriendStatus(!isOnline, handleStatusChange);
    }
    , x
  );


  function handleStatusChange(status) {
    setIsOnline(status);
  }

  ////////////////////////////////////////////////////////////
  return (
    <div>
      <p>You clicked {count}   times</p>
      <p>status {isOnline.toString()}</p>
      <button onClick={() => { setCount(count + 1) }}>
        Click me
      </button>
    </div>
  );
  ///////////////////////////////////////////////////////////
}
export default hot(module)(Example);