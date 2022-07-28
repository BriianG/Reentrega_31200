import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'

const Item = ({prod}) =>{
  return(
    <div className='card text-center bg-dark prod'>
          <img className='card-img-top' src={prod.imageURL} alt='' />
          <div className="card-body text-light">
          <h4 className="card-title">
              {`${prod.producto} - ${prod.caracteristica}`}
          </h4>
          <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vero libero ut consequatur harum mollitia facere aliquam neque, velit dolorem quasi rerum nihil eveniet dolorum at, autem odio alias dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem cum voluptates tempora quia tenetur nisi ullam, 
          ad explicabo dolorum commodi, beatae totam distinctio quisquam velit debitis temporibus harum earum.
          </p>
          <div className="card-text card-title"> $ {prod.precio}</div>
                <Link to={`/detalle/${prod.id}`}>
                  <button className="btn btn-outline-secondary rounded-0">detalle del producto</button>
                </Link>
    
      </div>
      </div>
  )
  }


export default Item