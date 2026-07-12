import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Effect from './components/Effect'
import DigitalClock from './components/DigitalClock'
import APICalling from './components/APICalling'
import ProductDetails from './components/ProductDetails'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Effect />} />
          <Route path='/digital' element={<DigitalClock />} />
          <Route path='/api' element={<APICalling />} />
          {/* Dynamic Routing : through this whenever we click on any point of the product card the product willm be opened in a differnt side */}
          <Route path='/api/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
