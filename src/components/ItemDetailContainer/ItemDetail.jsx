import { useCartContext } from "../../Cart/carContent";
import ContadorCarrito from "../ContadorCarrito/ContadorCarrito";

const ItemDetail = ({producto}) => {

const {cart, addToCart} = useCartContext()


const onAdd = (cant) => {
addToCart({...producto, 
                cantidad: cant
                })}

                console.log(cart)
return (

<div className="container">
<div className="row">
<div className="bg-dark">
        <div className="clearfix">
            <img src={producto.imageURL} alt="" className="col-md-6 float-md-end mb-3 ms-md-3"/>
                <div className="card-body text-light">
                    <h4 className="card-title text-center">{producto.producto} - {producto.caracteristica} </h4>
                    <h5 className="card-title text-center">Caracteristicas del producto </h5>
                    <p className='card-text text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deserunt aliquam iste error! Officiis, incidunt nemo? Vitae molestiae est excepturi obcaecati, repellendus veritatis facilis, aut ex sapiente dolor quibusdam cumque!
                    Saepe impedit fugiat laudantium repudiandae veritatis animi voluptates libero nulla, voluptas, enim reprehenderit! Corporis pariatur a ad commodi vero, consequatur tempore tenetur consectetur, autem laborum, minima quas odit nesciunt dolorum.
                    Repellat fuga, quod obcaecati placeat expedita ullam maiores dolores sequi quisquam ipsum vitae delectus, dolorum nulla velit eveniet officia facilis labore iste, voluptates doloremque aut tempore eum nihil. Ipsa, temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam quisquam dignissimos, quae repellat temporibus, dolorum error illo natus omnis, eveniet amet sapiente? Dolorum est explicabo excepturi, quia ipsa iste?
                    Oincidunt reiciendis nobis corporis? Facilis iste nobis nostrum expedita in et! Quae accusamus suscipit provident, rem ad inventore at!
                    Maxime odio eos fugiat culpa veniam beatae deserunt numquam laudantium qui sequi corporis adipisci molestias unde consectetur, et officia itaque ex perferendis facilis est ipsa quidem, praesentium laboriosam? Quasi, veritatis.
                    Nihil, fuga. Iste culpa, aperiam commodi officia vel numquam vero asperiores labore aliquam illo architecto modi porro dolore saepe quasi totam perferendis praesentium veniam inventore, placeat ad! Deleniti, eveniet quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, mollitia. Dolore in velit dolorem similique quod quidem necessitatibus neque iste error aperiam maxime, modi illo, suscipit blanditiis officiis iusto consequuntur.</p>
                    <div  className="card-text card-title text-center">$ {producto.precio} por kilogramo</div>
                </div>
        </div>
            <div className="mt-5 mb-3">
                    <ContadorCarrito initial={1} stock={100} onAdd={onAdd}/>                 
            </div>
    </div>
</div>
</div>


)}
export default ItemDetail