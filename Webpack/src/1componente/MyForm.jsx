import React, { Component } from "react";
import { hot } from "react-hot-loader";


const herman = {

  async registrarUsuario(usuario, nombre, pass) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "firstName": nombre, "password": pass });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    return await fetch(`https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/users/${usuario}`, requestOptions)
      .then(response => response.text());
  },



}




class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: 'asd',
      pass: ''
    };
  }



  myChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.us.value,
      e.target.name.value,
      e.target.pass.value)
    console.log(herman.registrarUsuario(e.target.us.value,
      e.target.name.value,
      e.target.pass.value));
    
  }



  render() {

    return (

      <form onSubmit={(e) => this.myChangeHandler(e)}>
        <input
        type='text'
        name='name'
        defaultValue="lala"
      />
      <input
        type='text'
        name='us'
        defaultValue="lala"
      />
      <input
        type='text'
        name='pass'
        defaultValue="lala"
      />
        <button>
          Click me 1
        </button>
        <input type='submit' />
      </form>
    );
  }
}

export default (hot)(module)(MyForm);