import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const ItemListContainer = ()=>{
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)


//  Para traer todos.
useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    getDocs(queryCollection) // promesa
    .then(data => setProductos( data.docs.map( Item => ({ id: Item.id, ...Item.data()  }))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])

return (
  <div className="container">
    {loading ? <h3 className="bg-black" >Cargando carrito</h3>   :
    <div>
    <ItemList  productos={productos}/>
  </div>
}
</div>)}

export default ItemListContainer
