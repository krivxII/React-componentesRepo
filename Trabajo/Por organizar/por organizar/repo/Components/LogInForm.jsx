import axios from 'axios'
import React, { useState } from "react"

export default function LogInForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')

  const handleLogIn = async () => {
    const token = await axios.post(`https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/users/${userName}/sessions`, {
      password
    })

    console.log(token.data)
  }

  return (
    <div>
      <label>
        Usuario:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={() => handleLogIn()}>Iniciar sesion</button>
    </div>
  )
}

