import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { cartState } from '../context/Context'

function SingleProduct({pro}) {

  const {state:{cart},dispatch}=cartState()

  
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={pro.image} alt={pro.name}/>
        <Card.Body>
          <Card.Title>{pro.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom: 20}}>
            <span>$ {pro.price}</span>
            {
              pro.fastD ? <div>Fast Delivery</div> :
              <div>4 Days Delivery</div>
            }
            <Rating rating={pro.rating} />

          </Card.Subtitle>

          {
            cart.some(p=> p.id === pro.id) ? (
              <Button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload: pro})} variant="danger">Remove From Cart</Button>
            ):(
              <Button onClick={()=>dispatch({type: "ADD_TO_CART",payload: pro})} disabled={!pro.inStock}>
            {pro.inStock ? "Add To Cart" : "Out Of Stack"}
          </Button>
            )
          }
          
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
