# Resumen de la guia de useState

Pagina: https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/

# Table of Contents
1. [Introduccion](#Introduccion)
2. [Una manera de usar el valor previo en setState()](#Una-manera-de-usar-el-valor-previo-en-setState())
3. [Creando objetos como variables de estado](#Creando-objetos-como-variables-de-estado)
4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)

---
## Introduccion

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
///////Ejemplo clase
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
////////Ejemplo funcion
const Message= () => {
   const messageState = useState( '' );
   const listState = useState( [] );
   /* ... */
}
```
Esta funcion inicializa la variable con el valor que le pasas como parametro, y solo se ejecuta una vez. Al renderizar de nuevo se obtiene el valor del estado y no de la funcion.

De segundo argumento se le puede pasar una funcion que solo se ejecutara una vez en el render inicial y asignara lo que retorne.

```javascript

   const messageState = useState( () => expensiveComputation() );

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
const Persons = (props) =>  {
   const [messageState , setmessageState] = useState(props)

   useEffect(() => {
       setmessageState(props);
   }, [props])

 /* ... */

}///falta explicar
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
---

**Nota:** 
- La funcion set no actualiza el componen al momento, despues de renderizar de nuevo se usara el nuevo estado en vez del usado en useState()
- Si la funcion set recive un valor igual al estado actual esta no se ejecuta

---

## Una manera de usar el valor previo en setState()
```javascript
  setMessage(prev => prev + val)
```
---
## Creando objetos como variables de estado

Dos cosas que tener en cuenta al momento de pensar en usar objetos:

- La importancia de la **Inmutabilidad**

Si usas el mismo valor del **current state** para acualizar el valor, React lo va a ignorar. (React usa `Object.is` para comparar)
Ejemplo:
```javascript
const [messageObj, setMessage] = useState({ message: '' });
messageObj.message = "some text";
setMessage(messageObj); // Doesn't work
```
Para react **messageObj** sigue siendo exactamente el mismo objeto, para hacer que funcione, se debe crear un nuevo objeto

```javascript
const [messageObj, setMessage] = useState({ message: '' });
const newMessageObj = { message: "new text" };
setMessage(messageObj); // work
```


- El hecho de que useState() no fuciona objetos como setState() lo hace.

En este caso la funcion set reemplaza completamente el objeto antiguo.

Siguiendo el ejemplo anterior agreguemos una valor nuevo en el objeto de estado

```javascript
const [messageObj, setMessage] = useState({ message: '', id: 1 });
const newMessageObj = { message: "new text" };
setMessage(messageObj); // Atributo Id perdido
```
Es inportante recordar que useState() solo crea una variable y la ira reemplazando

Para poder replicar la capacidad de setState()  utilizando la funcion de segundo parametro que tiene la propiedad set...() y utilizando **object spread syntax**

```javascript
const [messageObj, setMessage] = useState({ message: '', id: 1 });
const val = "new text" ;
setMessage( (prevState) => {
    return { ...prevState, message: val }
  }); 
```
De esta forma se crea un objeto nuevo con todas las propiedaes que no fueron actualizadas y se actualiza la propiedad decesada.

(...prevState obtendra todos los atributos)

Esta es una sintaxis opcional con  Object.assign (Solo recuerda crear el objeto nuevo)

```javascript
const [messageObj, setMessage] = useState({ message: '', id: 1 });
const val = "new text" ;
setMessage( (prevState) => {
    return Object.assign({}, prevState, { message: val });
  }); 
```
De igual manera esta sintaxis funciona con Arreglos.

```javascript
const [messageList, setMessageList] = useState([]);
const val = "new text" ;
setMessage( (prevState) => {
    return Object.assign({}, prevState, { message: val });
  }); 
```


```javascript
   
```


---
[Introduccion](#Resumen-de-la-guia-de-useState)