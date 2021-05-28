import { toast } from 'react-toastify';

const toastOpt = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}


async function registrar(nombre, usuario, contraseña, auth,history) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "firstName": nombre,
        "password": contraseña
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(`https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/users/${usuario}`, requestOptions)
        .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

    let mensaje;

    if ((500 > response.status) && (response.status > 399)) {
        mensaje = `Error: ${response.status}
          -------------------------------
          Mensaje: ${response.body.details}`;
        toast.dark(mensaje, toastOpt);
    }
    else if ((600 > response.status) && (response.status > 499)) {
        mensaje = `Error: ${response.status}
          -------------------------------
          Mensaje: ${response.body.details}`
        toast.dark(mensaje, toastOpt);
    }
    else if ((300 > response.status) && (response.status > 199)) {
        mensaje = `Code: ${response.status}
          -------------------------------
          Bienvenido: ${response.body.firstName}
          -------------------------------
          Usuario ${response.body.username} creado `
        toast.dark(mensaje, toastOpt);
        iniciarSession(usuario, contraseña, auth,history)
    }



}


async function iniciarSession(usuario, contraseña, auth,history) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "password": contraseña
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    const response = await fetch(`https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/users/${usuario}/sessions`, requestOptions)
        .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));




    let mensaje;
    if ((500 > response.status) && (response.status > 399)) {
        mensaje = `Error: ${response.status}
      -------------------------------
      Mensaje: ${response.body.details}`;
        toast.dark(mensaje, toastOpt);
    }
    else if ((600 > response.status) && (response.status > 499)) {
        mensaje = `Error: ${response.status}
      -------------------------------
      Mensaje: ${response.body.details}`
        toast.dark(mensaje, toastOpt);
    }
    else if ((300 > response.status) && (response.status > 199)) {
        mensaje = `Code: ${response.status}
      -------------------------------
      Session iniciada: ${usuario}
      -------------------------------
      Token: ${response.body.sessionToken}
      -------------------------------
      `

        auth.signin(() => history.push("/"), response.body.sessionToken, usuario)
        toast.dark(mensaje, toastOpt);
    }


}

async function validarToken(auth,history) {


    const token = localStorage.getItem('juegoToken');
    toast.dark(token, toastOpt);

    if (!(token === null)) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch("https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/user", requestOptions)
            .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));


        let mensaje;
        if ((500 > response.status) && (response.status > 399)) {//400
           
            mensaje = `Error: ${response.status}
            -------------------------------
            Mensaje: ${response.body.details}`;


            toast.dark(mensaje, toastOpt);
            
        }
        else if ((600 > response.status) && (response.status > 499)) {
            mensaje = `Error: ${response.status}
        -------------------------------
        Mensaje: ${response.body.details}`
            toast.dark(mensaje, toastOpt);
            validarToken(auth,history)
        }
        else if ((300 > response.status) && (response.status > 199)) {
            mensaje = `Code: ${response.status}
      -------------------------------
      TokenValidado: ${response.username}
      -------------------------------
      `
         auth.signin(() => history.push("/"), token, response.body.username)
            toast.dark(mensaje, toastOpt);
        }
    }
}

async function destruirToken() {


    const token = localStorage.getItem('juegoToken');
  console.log("destruyendo token")

    if (!(token === null)) {
        console.log("token")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        
        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        const response = await  fetch(`https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/sessions/${token}`, requestOptions)
        .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

        let mensaje;
        ///////////////////////////////////////////////////////////////////
        if ((500 > response.status) && (response.status > 399)) {//400
           
            mensaje = `Error: ${response.status}
            -------------------------------
            Mensaje: ${response.body.details}`;
            toast.dark(mensaje, toastOpt);
         
        }//////////////////////////////////////////////////////
        else if ((600 > response.status) && (response.status > 499)) {//500
            mensaje = `tratando de destruir token de nuevo`
            toast.dark(mensaje, toastOpt);
            destruirToken();
        }////////////////////////////////////////////////////////////
        else if ((300 > response.status) && (response.status > 199)) {
         mensaje = `token destruido`
         localStorage.removeItem('juegoToken')
         toast.dark(mensaje, toastOpt);
        }
    }
}

export { registrar, iniciarSession, validarToken, destruirToken };