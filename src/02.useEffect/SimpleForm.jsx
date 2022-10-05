import { useEffect, useState } from "react"


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'Neo',
        email: 'ivan@gmail.com'
    });

    const { username, email } = formState;

    const OnInputChange = ({ target }) => {

        // console.log(target.value);
        // console.log(target.name);

        const { name, value } = target;

        // console.log({...formState});
        // console.log({[name]: value});

        setFormState({
            // username: 'Neo',
            // email: 'ivan@gmail.com',
            // username: value

            ...formState,
            [ name ]: value
        });
    }


    useEffect( () => {
        console.log('useeffect called')
    } );


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
