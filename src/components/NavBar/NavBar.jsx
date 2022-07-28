import {} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {

  
  return (
<>
    <nav className="navbar navbar-expand-lg bg-black">
    <div className="container-fluid">
    <NavLink to="/" className="navbar-brand text-secondary">SCA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink to="/" className="nav-link active text-white" aria-current="page">Inicio</NavLink>
        <NavLink to="/" className="nav-link text-white">Nosotros</NavLink>
        <NavLink to="/cart" className="nav-link text-secondary">Carrito</NavLink>
        <NavLink to="/" className="nav-link text-white">Contacto</NavLink>
      </div>
    </div>
<Link to={`/cart`}>
  <CartWidget/>
</Link>
  </div>
</nav>
      

</>
)
}

export default NavBar

