async function registrar(nombre, usuario, contraseña) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "firstName": "se",
        "password": "lo"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development//users/johndoe", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

export {registrar}