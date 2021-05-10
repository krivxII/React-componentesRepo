 const herman = {

 async registrarUsuario(usuario,nombre,pass ){

   var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"firstName":nombre,"password":pass});
    
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

console.log(herman.registrarUsuario("lala","lala","lala"));