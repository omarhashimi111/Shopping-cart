import React from 'react';
import {Navbar,Container,FormControl,Dropdown,Nav,Badge,Button} 
from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"
import "../App.css";
import {Link} from "react-router-dom"
import { cartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

function Header() {

    const {state:{cart},dispatch,productDispatch} = cartState()

  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/Shopping-cart">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl  placeholder="search product" 
                style={{width: 500}} className="m-auto"
                onChange={(e)=>productDispatch({
                    type: "SORT_BY_SEARCH",
                    payload: e.target.value
                })}
                />
            </Navbar.Text>
            <Nav>
                <Dropdown style={{position: "relative"}}>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart fontSize="25px" color="white"/>
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370,position: "absolute",left: "-280px"}}>
                        {cart.length > 0 ? (
                            <>
                                {cart.map(pro => (
                                    <span className='cartitem' key={pro.id}>
                                        <img src={pro.image} alt={pro.name} className='cartItemImg' />
                                        <div className="cartItemDetail">
                                            <span>{pro.name}</span>
                                            <span>$ {pro.price}</span>
                                        </div>
                                        <AiFillDelete 
                                        fontSize="20px"
                                        style={{cursor: "pointer"}}
                                        onClick={()=>dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: pro,
                                        })}
                                        />
                                    </span>
                                ))}
                                <Link to="/cart">
                                    <Button style={{width: "95%",margin: "0 10px"}}>Go to cart</Button>
                                </Link>
                            </>
                        ): (
                            <span style={{padding: 20}}>Cart Is Empty</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
