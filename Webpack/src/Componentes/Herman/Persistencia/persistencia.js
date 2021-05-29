function CrearUsuario(usuario){

    var myHeaders = new Headers();
    myHeaders.append("x-application-id", "2710638a-a986-442f-b029-feb40bd4d4dd");
    myHeaders.append("Content-Type", "text/plain");
    
    var raw = "0";
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const response = await fetch(`https://0qh9zi3q9g.execute-api.eu-west-1.amazonaws.com/development/pairs/${usuario}`, requestOptions)
    .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

    let mensaje;

    if ((500 > response.status) && (response.status > 399)) {
       
    }
    else if ((600 > response.status) && (response.status > 499)) {
      
    }
    else if ((300 > response.status) && (response.status > 199)) {
      
    }




}