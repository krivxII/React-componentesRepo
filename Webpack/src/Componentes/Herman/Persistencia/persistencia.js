const appId="2710638a-a986-442f-b029-feb40bd4d4dd";

async function CrearUsuario(usuario,contraseña, auth, history,iniciarSession,count=5) {

  var myHeaders = new Headers();
  myHeaders.append("x-application-id", appId);
  myHeaders.append("Content-Type", "text/plain");

  const usuarioNuevo = {
    "nombreUsuario": usuario,
    "numeroJuegos": 0,
    "numeroVictorias": 0,
    "numeroDerrotas": 0,
  }

  var raw = JSON.stringify(usuarioNuevo);


  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(`https://0qh9zi3q9g.execute-api.eu-west-1.amazonaws.com/development/pairs/${usuario}`, requestOptions)
    .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

  let mensaje;

  if ((600 > response.status) && (response.status > 499)) {//500
    console.log(response)
    console.log("error casual del profe se intentara de nuevo")
    CrearUsuario(usuario,contraseña, auth, history,iniciarSession,count-1)
  }
  else if ((500 > response.status) && (response.status > 399)) {//400
    console.log(response)
    console.log("error 400 algo")
  }
  else if ((300 > response.status) && (response.status > 199)) {//300
    console.log(response.body.value)
    console.log("usuario creado")
    iniciarSession(usuario, contraseña, auth, history)
  }

}

async function ObtenerUsuario(usuario,count=5) {

  console.log("tratando de obtener Usuario de persistencia intento numero: "+count)
  var myHeaders = new Headers();
  myHeaders.append("x-application-id",appId);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`https://0qh9zi3q9g.execute-api.eu-west-1.amazonaws.com/development/pairs/${usuario}`, requestOptions)






  let mensaje;

  if ((600 > response.status) && (response.status > 499)) {//500
    console.log(response)
    console.log("error casual del profe se intentara de nuevo")
    CrearUsuario(usuario,contraseña, auth, history,iniciarSession,count-1)
  }
  else if ((500 > response.status) && (response.status > 399)) {//400
    console.log(response)
    console.log("error 400 algo en ObtenerUsuario Persistencia")
  }
  else if ((300 > response.status) && (response.status > 199)) {//300
    console.log(response.body.value)
    console.log("usuario Obtenido de persistencia")
    iniciarSession(usuario, contraseña, auth, history)
  }

}

 export {CrearUsuario,ObtenerUsuario}