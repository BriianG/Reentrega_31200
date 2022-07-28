import './CartWidget.css'
import { useCartContext } from '../../Cart/carContent'

function CartWidget() {

const {iconCart, cart} = useCartContext()

  return (
  
    <>
    <div className=' row center bg-black'>
    <ul className="fondo icon-styles container bg-black">
      <button className='btn bg-black text-white'> {cart.length === 0 ? 0 : iconCart()} <ion-icon  name="cart-outline"> </ion-icon></button>
    </ul>
    </div>
    </>
  )
}

export default CartWidget
