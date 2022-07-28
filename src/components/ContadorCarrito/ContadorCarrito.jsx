import React, {useState} from 'react'

function ContadorCarrito({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial)

  function suma() {
      if (count < stock) {
          setCount(count + 1)
      }
  }
  function resta() {
      if (count > 1) {
          setCount(count - 1)
      }
  }

  const agregar = () => {
      onAdd(count)
  }

  return (
      <div>
              <div className="container m-5 w-25 border rounded border-3 border-primary text-center">                   
                  <span className="alert alert-success w-100 text-center" >
                      { count }
                  </span>                   
                  <br />
                  <div className="mt-4">
                      <button onClick={suma} className='btn btn-primary w-50' > + </button> 
                      <button onClick={resta} className='btn btn-danger w-50' > - </button><br/>
                  </div>
                  <button onClick={agregar} className='btn btn-success w-100'>agregar</button>
              </div>
      </div>

  )
}

export default ContadorCarrito;

