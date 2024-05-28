import React from 'react'
import Header from './Comp/Header'
import AllProducts from './Comp/AllProducts'
import Slider from './Comp/Slider'
import {Route, Routes} from 'react-router-dom'
import Description from './Comp/Description'
import Footer from './Comp/Footer'
import Cart from './Comp/Cart'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<AllProducts/>} />
        <Route path='/products/:id' element={<Description/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
