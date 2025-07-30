import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Productcard = ({ id, title, price, description, category, image, rating }) => {
  return (
    <div className="contain">
      <Card className="product-card">
        <Link to={`/Description/${id}`}>
          <Card.Img variant="top" src={image} className="product-image" />
        </Link>

        <Card.Body>
          <Card.Title className="product-title">{title.substring(0, 30) + "..."}</Card.Title>
          <Card.Text className="product-price">{price}</Card.Text>
          <Button variant="primary" className="add-btn">Add to Cart</Button>
        </Card.Body>
        <div>
          <button className="Edit">Edit</button>
          <button className="Delete" onClick={onDelete}>Delete</button> 
          
        </div>
      </Card>
    </div>
  )
}

export default Productcard
