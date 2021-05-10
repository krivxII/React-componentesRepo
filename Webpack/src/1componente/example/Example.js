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
      console.log(first + " 1")//revisando valor antes de cambiar


      first ?
        (
          (() => { console.log(`Montando el componente`); setFirst(false)/*cambiando valor al montar*/ })()
        )
        :
        console.log(`Actualizando el componente`);

      /*
       * Aunque el set state se ejecute esta seccion se ejecutara en la primera pasada
       */

      console.log(first + " 2")// los cambios no ocurren hasta no re-renderizar


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
      console.log(first + " 3")// los cambios no ocurren hasta no re-renderizar
      SubscribeToFriendStatus(!isOnline, handleStatusChange);
    }
    , x
  );


  function handleStatusChange(status) {
    setIsOnline(status);
  }
  
  ///////////////////////////////////////////////////////////

  function useCount(num = 0) {
    const [count, setCount] = useState(num);
  
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  

    let x = [null];
    useEffect(() => {
      console.log("test3");
      return () => {
        console.log("test32");
      };
    });
    useEffect(() => {
      console.log("4");
    },x);
    let c ={
      count,
      setCount
    };

    return c;
  }
let count2 = useCount();
let count3 = useCount(35);

  ////////////////////////////////////////////////////////////

  function useCount2(num = 0) {
    const [count, setCount] = useState(num);
  
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  

    let x = [null];
    useEffect(() => {
      console.log("test4");
      return () => {
        console.log("test42");
      };
    });
    useEffect(() => {
      console.log("4");
    },x);


    return (

      <div>
      <p>You clicked {count} times</p>
      <button onClick={() =>  setCount(count + 1)}>
        Click me 1
      </button>
      </div>
    );
  }





  ////////////////////////////////////////////////////////
  return (
    <div>
      <p>You clicked {count}   times</p>
      <p>You clicked {count2.count}   times</p>
      <p>You clicked {count3.count}   times</p>
      <p>status {isOnline.toString()}</p>
      <button onClick={() =>  setCount(count + 1)}>
        Click me 1
      </button>
      <button onClick={() => count2.setCount(count2.count+1)}>
        Click me 2
      </button>
      <button onClick={() => count3.setCount(count3.count+1)}>
        Click me 3
      </button>
      {useCount2()}
    </div>
  );
  ///////////////////////////////////////////////////////////
}
export default hot(module)(Example);