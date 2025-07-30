import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './Productcard'

const Productpage = () => {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    try {
      const response = await axios.get('http://localhost:3000/products')
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchProducts()
  }, [])

  

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </div>
  )
}

export default Productpage