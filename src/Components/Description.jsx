import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'


const Description = () => {

    const [products, setProducts] = useState({})
    const { id } = useParams()

         // Create function for fetching data //
        async function fetchProduct() {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`)
                setProducts(response.data)
            } catch (error) {
                console.error(error)
                
            }
        };
        useEffect(()=>
        {
             fetchProduct()

        }, [])
     
    return (
     
        <div className="product-card-container container" style={{ marginTop: "5%" }}>
            <Card className="p-4 shadow">
                <div className="row align-items-center">
                    {/* Left Column - Product Image is shown here */}
                    <div className="col-md-6 text-center">
                        <Link to={"/Description"}> <Card.Img variant="top" src={products.image} className="img-fluid product-image" style={{ maxHeight: "400px", objectFit: "contain" }} /></Link>
                    </div>

                 
                    <div className="col-md-6">
                         <Card.Body>
                     <Card.Title className="title">{products.title}</Card.Title>
                    <Card.Text className="price">₹ {products.price}</Card.Text>
                    <Card.Text className="category">{products.category}</Card.Text>
                    <Card.Text className="description">{products.description}</Card.Text>
                    <Card.Text className="rating">Rating: {products?.rating?.rate}</Card.Text>
                   <Button variant="primary" className="add-btn">Add to Cart</Button>
               </Card.Body>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default Description


     