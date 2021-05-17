import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const handleRegister = async () => {
    const register = await axios.post(`https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/users/${userName}`, {
      firstName,
      password
    }) 

    console.log(register.data)
  }

  return (
    <div>
      <label>
        Nombre de usuario
        <input type="text" value={userName} onChange={((e) => setUserName(e.target.value))} />
      </label>
      <br />
      <label>
        Primer nombre
        <input type="text" value={firstName} onChange={((e) => setFirstName(e.target.value))} />
      </label>
      <br />
      <label>
        Contraseña
        <input type="text" value={password} onChange={((e) => setPassword(e.target.value))} />
      </label>
      <button type="button" onClick={() => handleRegister()}>Registrarse</button>
    </div>
  )
}
