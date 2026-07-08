import React from 'react'
import Product from './component/Product'

const App = () => {
    const product = {
        pname: "Rice",
        price: "₹20/pkt", 
        pimage: "https://media.istockphoto.com/id/1197466837/photo/soaked-rice-grain-cloudy-liquid-water-in-glass-bowl-on-wooden-background.jpg"
    }

   return (
    <>
      <Product data = {product} />
    </>
  )
}

 
export default App;
