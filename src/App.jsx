import {BrowserRouter as Rutas, Route, Routes, Navigate} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from "./Cart/carContent";
import Cart from "./components/Cart/Cart";
import './app/App.css'


function App() {

   return (
   <CartContextProvider>
      <div className="App">
         <Rutas>
            <NavBar/>
               <Routes>
                  <Route index path="/" element={< ItemListContainer />} />
                  <Route path="/Categoria/:productoId" element={< ItemListContainer />} />
            
                  <Route path="/detalle/:id" element={< ItemDetailContainer />} />
                  <Route path="/cart" element={< Cart />} />

                  <Route path="*" element={<Navigate to='/'/>} />

         </Routes>
         </Rutas>
      </div>
   </CartContextProvider>
   )}

export default App;
