import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pnf from './pages/Pnf'

function App() {
  

  return (
    <>
     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/wishlist' element={<Wishlist/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/:id/view' element={<View/>}></Route>
         <Route path='/*' element={<Pnf/>}></Route>
     </Routes>


     {/* footer */}
     <Footer/>
    </>
  )
}

export default App
