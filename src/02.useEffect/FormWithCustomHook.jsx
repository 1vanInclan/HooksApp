import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {


    const { formState, OnInputChange, onResetForm, username, email, password } = useForm(
        {
            username: '',
            email: '',
            password: ''
        })


    // const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr/>

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ OnInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Correo"
            name="email"
            value={ email }
            onChange={ OnInputChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ OnInputChange }
        />


        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>

    </>
  )
}
