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

const response = await fetch("https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/users/johndoe", requestOptions).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })))
    
console.log(response)

    return response
        
    
}

export {registrar};