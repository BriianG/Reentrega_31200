import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from "./ItemDetail";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";


const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    const [loading, setLoading] = useState (true)

    const {id}= useParams ()


useEffect(()=>{

    const db = getFirestore()
    const queryDoc = doc(db, 'productos', id)
    getDoc(queryDoc) // promesa
    .then(resp => setProducto({ id: resp.id, ...resp.data() }))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))  

},[id])

return (

        <section>
            <div>

        {loading ? 
            <h2>Cargando...</h2>
            :
            <ItemDetail producto={producto} />}
            <Intercambiabilidad/>

            </div>
        </section>


    )
}


export default ItemDetailContainer 