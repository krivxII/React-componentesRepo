Los componentes funcionales son funciones que reciben las propiedades del componente como parametro y retorna un componente.
A diferencia de las clases los componentes funcionales no poseen ciclo de vida

**useState()**

Es un hook que permite tener variables de estado en componentes funcionales

para declararlo y usarlo se importa

```javascript
import React, { useState } from 'react';
```
Pero a diferencia de state en las Clases este metodo solo te deja declarar una variable a la vez

```javascript
//Ejemplo clase
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      list: [],    
    };
  }
  /* ... */
}
///////////////////////////////////////////////////
//Ejemplo funcion
const Message= () => {
   const messageState = useState( '' );
   const listState = useState( [] );
   /* ... */
}
```
Esta funcion inicializa la variable con el valor que le pasas como parametro, y solo se ejecuta una vez. Al renderizar de nuevo se obtiene el valor del estado y no de la funcion.

De segundo argumento se le puede pasar una funcion que solo se ejecutara una vez en el render inicial y asignara lo que retorne.
```javascript
const Message= () => {
   const messageState = useState( () => expensiveComputation() );
   /* ... */
}
```

De querer que El componente se actualice con el cambio de propiedades use state no es suficiente ya que este valor solo es leido la primera vez.
```javascript
//si algun valor de props cambia el componente no lo reflejara
const Message= (props) => {
   const messageState = useState( props.message );
   /* ... */
}
```
Para solucionarlo lo puedes complemetar con **useEfect()**
```javascript
import React,{useState , useEffect} from 'react';

const Persons = (props) =>  {
   const [nameState , setNameState] = useState(props)

   useEffect(() => {
       setNameState(props);
   }, [props])

   return (
            <div>
                <p>My name is {props.name} and my age is {props.age}</p>
                <p>My profession is {props.profession}</p>
            </div>
        )

}

export default Persons;
```

Aparte de retornar la variable iniciada, la funcion retorna como segundo argumento una funcion que permite modificar la variable creada y actualizar el estado del componente.
Ambas variables estan en un arreglo que retorna **useState()** 

```javascript
   const messageState = useState( '' );
   const message = messageState[0]; // Contains ''
   const setMessage = messageState[1]; // It’s a function
```

Usualmente se usa la **Destructuracion de Arreglos(array destructuring )** para simplificar el codigo
```javascript
   const [message, setMessage]= useState( '' );
```
La funcion set no actualiza el componen al momento, despues de renderizar de nuevo se usara el nuevo estado en vez del usado en useState()

Una manera de usar el valor previo en setState()
```javascript
  setMessage(prev => prev + val)
```
## Creando objetos como variables de estado

Dos cosas que tener en cuenta al momento de pensar en usar objetos.

-La importancia de la **Inmutabilidad**


```javascript
   
```