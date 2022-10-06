import { useEffect, useState } from "react"


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'Neo',
        email: 'ivan@gmail.com'
    });

    const { username, email } = formState;

    const OnInputChange = ({ target }) => {



        const { name, value } = target;



        setFormState({

            ...formState,
            [ name ]: value
        });
    }


    useEffect( () => {
        console.log('useeffect called')
    }, []);

    useEffect( () => {
        console.log('FormState Changed')
    }, [formState]);

    useEffect( () => {
        console.log('Email Changed')
    }, [email]);

  return (
    <>
        <h1>Formulario simple</h1>
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
            placeholder="ivan@gmail.com"
            name="email"
            value={ email }
            onChange={ OnInputChange }
        />
    </>
  )
}
