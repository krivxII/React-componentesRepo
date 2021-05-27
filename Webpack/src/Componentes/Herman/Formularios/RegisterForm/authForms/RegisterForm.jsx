import React, { useReducer, useState } from 'react';
import './App.css';
import {registrar} from "./logic"

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);
   console.log(await registrar(formData.name,formData.username,formData.pass))
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">

      <h1>Registrate</h1>
      { formData.name ? formData.name : "no existes"}
      { formData.username ? formData.username : "no existes"}
      { formData.pass ? formData.name : "no existes"}
      
      {submitting 
      &&
      <div>Submtting Form...</div>
      }


      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
            <p>UserName</p>
            <input name="username" onChange={handleChange}/>
            <p>Pass</p>
            <input name="pass" type="password" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      
    </div>
  )
}

export default App;