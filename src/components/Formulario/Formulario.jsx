import { useState} from "react"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import './Formulario.css'


const Formulario = () =>{
const [nombre, setNombre] = useState ('')
const [apellido, setApellido] = useState ('')
const [email, setEmail] = useState ('')
const [telefono, setTelefono] = useState ('')
const [error, setError] = useState ('')



const setUsuarios = async (e) => {
    e.preventDefault()

    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');


    if(!nombre.trim()){
    setError('El campo nombre esta vacio')
    }
    else if(!apellido.trim()){
        setError('El campo apellido esta vacio')
    }
    else if(!email.trim()){
        setError('El campo email esta vacio')
    }
    else if(!telefono.trim()){
        setError('El campo telefono esta vacio')
    }

    const db = getFirestore()
    const agendaCollection = collection(db, 'agenda')

    const usuario =
    {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
    }

    const data = await addDoc(agendaCollection, usuario)
    console.log(data)
    .then(resp => console.log(resp)) 
    .catch(err => console.log(err))
}



    return (


<div className="container bg-dark">
    <div className="row">
        <div className="col">
            <h2 className="text-center text-light"> Dejanos tus datos que te contactaremos a la brevedad </h2>

            <form className="form-group text-center prod" onSubmit={setUsuarios}>

            <input onChange={(e)=> {setNombre(e.target.value)}} 
                    placeholder="Nombre" 
                    className="form-control mb-3" 
                    type="text"
                    value={nombre}
                    required />

            <input onChange={(e)=> {setApellido(e.target.value)}} 
                    placeholder="Apellido" 
                    className="form-control mb-3" 
                    type="text"
                    value={apellido}
                    required />

            <input onChange={(e)=> {setEmail(e.target.value)}} 
                    placeholder="Email" 
                    className="form-control mb-3" 
                    type="text"
                    value={email}
                    required />

            <input onChange={(e)=> {setTelefono(e.target.value)}} 
                    placeholder="Telefono" 
                    className="form-control mb-3" 
                    type="text"
                    value={telefono}
                    required />

            <input className="btn text-bg-secondary p-3 prod" 
                    type="submit" 
                    value="Enviar"
                    required />
                </form>
                {
                    error ?
                    (
                        <div>
                            <p>{error}</p>
                        </div>
                    )
                    :
                (
                    <span>

                    </span>
                )

                }
            </div>
        </div>
</div>

)}
export default Formulario
