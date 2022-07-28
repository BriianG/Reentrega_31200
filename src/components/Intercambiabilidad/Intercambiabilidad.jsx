import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <div className="col">
        <Link to='/cart' >
            <button 
                className="btn btn-primary col-md-6" 
                onClick={()=>console.log('ir a cart') } 
            >Ir al Cart o Terminar compra</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-primary col-md-6" 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando</button>
        </Link>
        </div>
    )
}


const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-success" 
                onClick={handleInter}
            >
                Agregar Al carrito
            </button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{// onAdd
        setInputType('input')
    }
    
    return (
        <div className="container">
            <div className="row bg-dark">

            <h3 className="card-title text-center  text-light">Informacion nutricional</h3>
            <p className="card-text text-secondary text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum explicabo pariatur ipsa quisquam saepe consectetur obcaecati deserunt inventore aut sit, optio at necessitatibus incidunt commodi autem vel numquam. Iure?
            Maiores quis, voluptas repellat, ducimus animi iusto deserunt sed iste ex debitis molestiae? Iste molestiae consequuntur voluptatibus, expedita aspernatur provident vitae libero culpa doloribus esse nisi est, maxime praesentium eum.
            Ullam, perspiciatis quia! Doloribus, unde, maxime ab illum corrupti ratione quae quos commodi odio fugit, voluptatum et laborum aspernatur labore nesciunt accusamus atque aut dicta ipsam fugiat? Consectetur, obcaecati a.
            Possimus quasi, ducimus soluta nobis esse quae nulla odit mollitia! Nesciunt a cupiditate error nostrum ex dolore perferendis exercitationem, officiis quos ea, velit nemo in deleniti ducimus numquam itaque excepturi.
            Aperiam consequatur et suscipit distinctio, ad laborum, aliquid nam magni excepturi ducimus perferendis consequuntur aspernatur. Debitis ea, sunt, eos libero culpa a ullam quam commodi, voluptates animi sit atque illum.
            Vero, placeat sed. Accusantium et dignissimos, nobis alias neque officiis possimus atque quibusdam, voluptatum, consectetur accusamus? Impedit esse accusamus aspernatur, animi quam molestias corrupti beatae? Molestiae nam eos ad molestias!
            Maxime inventore ad possimus aspernatur optio nostrum quam reiciendis libero autem nam totam laborum ex, earum laudantium dicta consequatur officia obcaecati eum qui quibusdam ipsa? Rem harum tempore aliquam distinctio.
            Veniam illum sit nam nisi quo sapiente beatae enim dicta maiores. Animi dignissimos, porro tenetur incidunt aperiam hic consequatur quasi minima temporibus delectus! Facilis est amet veniam officiis fugit ipsa.
            Distinctio eius deserunt magni dolorum mollitia quos, nemo, veritatis eaque ut cupiditate dolores laborum vel quo officiis, earum corporis repudiandae aperiam dolorem. Nemo porro dolorem quaerat atque ipsam labore eveniet.
            Fugiat sed unde repudiandae dignissimos at molestias, beatae ex explicabo omnis incidunt, natus deserunt quasi eaque error et ducimus dolores voluptatum, nihil perferendis quibusdam ad laudantium? Veniam nihil dignissimos esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit repellendus nulla nihil dicta. Veniam repellendus provident et cum est officiis, deleniti similique numquam dolor cupiditate asperiores minus tempora consectetur?</p>
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
            </div>
        </div>
    )
}

export default Intercambiabilidad