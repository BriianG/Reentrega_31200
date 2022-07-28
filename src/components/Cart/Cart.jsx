import { useCartContext } from "../../Cart/carContent"
import {collection,
        addDoc,
        getFirestore, 
        doc, 
        updateDoc,
        query,
        where,
        documentId,
        writeBatch,
        getDocs} from "firebase/firestore";
import Formulario from "../Formulario/Formulario";
import './Cart.css'


const Cart =() => {
const { cart, vaciarCarrito, precioTotal, removerItem} = useCartContext()


//async await para actualizar STOCK
async function generarOrden (e){
  e.preventDefault()
  let orden = {}

  orden.buyer = {name: 'brian', email: 'brian.garcia7900@gmail.com', phone: '12345678'}
  orden.total = precioTotal()

  orden.productos = cart.map(item =>{
    const id = item.id
    const nombre = item.producto
    const precio = item.precio * item.cantidad

    return {id, nombre, precio}

  })

  //INSERTAR 
const db = getFirestore()
const orderCollection = collection (db, 'orders')
addDoc(orderCollection, orden)
.then(resp => console.log(resp))



//MODIFICAR STOCK  // UPDATED

const updateCollection = doc(db, 'productos', '6he23FRZJznsniFrf8lO')
updateDoc(updateCollection, {
  stock:100
})
.then(()=> console.log('actualizado'))


//ACTUALIZAR STOCK  CUANDO SE FINALIZA LA COMPRA 
const queryCollectionStock = collection(db, 'productos')
const queryActualizarStock = await query(
  queryCollectionStock, //
  where(documentId(), 'in', cart.map(it => it.id) ) //in significa "es que esten en"

)

const batch = writeBatch(db)

await getDocs(queryActualizarStock)
.then(resp => resp.docs.forEach(res => batch.update(res.ref, {
  stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
}) ))
.finally(()=> vaciarCarrito())

batch.commit()

}

  return (
    <div className="container justify-content-center align-item-center h-100">
      <ul className="row">
        {
        cart.map(item => 
          <li className="col-md-4 mb-3 prod" key={item.producto.id} >

          <div className="card  bg-dark">
          <img  src= {item.imageURL} alt=""  className="w-100 card-img-top"/>
          <div className="card-body text-light">
          <div className="container">
            <div className="row mt-5 row">
                <h3 className="mb-3 card-title">{item.producto} - {item.caracteristica} </h3>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eligendi unde culpa ducimus, obcaecati deleniti. Voluptatum autem officia, asperiores, repudiandae quas et aspernatur, aut dicta doloremque dolorem dolorum accusantium beatae.</p>
                <h3 className="mb-3 card-text card-title">$ {item.precio}</h3>
                <h3 className="mb-3 card-title">Cantidad: {item.cantidad} <button className="btn btn-danger mb-3" onClick={()=> removerItem (item.id)}>X</button></h3>
              </div>
          </div>
        </div>
      </div>
                </li> )
        }
<div className="container prod">
  <div className="row">
    <button className="btn btn-danger mb-3" onClick={vaciarCarrito}> Vaciar Carrito </button>
  </div>
</div>

<div className="container prod">
  <div className="row">
    <button className="btn btn-primary mb-3" onClick={generarOrden}> Terminar Compra </button>
  </div>
</div>

  <div className="container prod">
    <div className="row text-center">
          <h3 className="text-bg-success">Precio total $ {precioTotal()}</h3>
    </div>
  </div>
</ul>
<div>
  <Formulario/>

  </div>
</div>
  )
}
export default Cart