import React from 'react'
import { cartState } from '../context/Context'
import { Button, Col, ListGroup, ListGroupItem, Row , Form, Image} from 'react-bootstrap'
import Rating from "./Rating"
import { AiFillDelete } from 'react-icons/ai'

function Cart() {

  const {state:{cart},dispatch}= cartState()

  let total = cart.reduce((prev,current)=> prev + parseInt(current.price)*current.qty,0)


  return (
    <div className='home'>
      <div className="productcontainer">
        <ListGroup>
          {
            cart.map(pro => (
              <ListGroupItem key={pro.id}>
                <Row>
                  <Col md={2}>
                    <Image src={pro.image} alt={pro.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{pro.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>{pro.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={pro.rating}/>
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" value={pro.qty}
                    onChange={(e)=>dispatch(
                      {type: "CHANGE_CART_QTY", payload: {id: pro.id, qty: e.target.value}}
                    )}
                    >
                      {
                        [...Array(pro.inStock).keys()].map(x => (
                          <option key={x+1}>{x+1}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light"
                    onClick={()=>dispatch({type:"REMOVE_FROM_CART",
                    payload: pro})}
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">
          Subtotal ({cart.length}) items
        </span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: ${total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
