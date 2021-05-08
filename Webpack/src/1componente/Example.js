import React, { useState, useEffect } from 'react';

import {hot} from "react-hot-loader";



function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // se activa al montar el componente
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log(`Acciones ejecutadas al montar y actualizar el componente`);
    console.log("primero");
    return () => {
      // se
      console.log(`Acciones ejecutadas al desmontar o actualizar el componente`);
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default hot(module)(Example);