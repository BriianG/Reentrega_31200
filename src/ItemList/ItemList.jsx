import Item from '../Item/Item'

const ItemList = ({productos}) =>{
    return(

  <div className="container d-flex justify-content-center align-item-center h-100">
    <div className="row">
  {productos.map( prod => ( <div className='col-md-4'>  <Item  key={prod.id} prod={prod} /> </div>))}
      </div>
      </div>
    )   
  }

export default ItemList