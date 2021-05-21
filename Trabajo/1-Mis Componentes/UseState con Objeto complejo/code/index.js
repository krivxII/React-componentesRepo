import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
//import AuthExample from './AuthExample.jsx';

const Message = () => {

{
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState({
    atributo1: 'inicial',
    count:0,
    objeto1: {
      id: 1,
      count:0,
      text: ''
    },
    objeto2: {
      id: 1,
      count:0,
      text: ''
    },
  });
  return (
    <div>
      <p>You clicked {JSON.stringify(count,null,2)} times</p>
      <button onClick={() => setCount((prev)=>{return {...prev, count: prev.count+1}})}>
        Click me
      </button>
      <button onClick={() => setCount((prev)=>{return {...prev, objeto1:{...prev.objeto1,count:prev.objeto1.count+1}}})}>
        Click me
      </button>
    </div>
  );
}

};

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);

 


/*ReactDOM.render(
 [ <App key={1} />,   ],
  document.getElementById('root')
);
*/