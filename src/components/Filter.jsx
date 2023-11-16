import React, { useState } from 'react'
import {Form,Button} from "react-bootstrap"
import Rating from './Rating'
import { cartState } from '../context/Context'

function Filter() {

    const [rate,setRate] = useState(3)

    const {productState, productDispatch} = cartState()
    

  return (
    <div className="filters">
        <span className="title">Filter Products</span>
        <span>
            <Form.Check
            inline
            label="ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh"
            })}
            checked={productState.sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            label="descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow"
            })}
            checked={productState.sort === "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            label="Include out of the stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={()=>productDispatch({
                type: "SORT_BY_STOCK"
            })}
            checked={productState.byStock}
            />
        </span>
        <span>
            <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={()=>productDispatch({
                type: "SORT_BY_DELIVERY"
            })}
            checked={productState.byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight: 10}}>Rating: </label>
            <Rating style={{cursor: "pointer"}} rating={productState.byRating} onClick={(i)=>productDispatch(
                {type: "SORT_BY_RATING",
            payload: i }
            
            )}/>
        </span>

        <Button variant="light"
        onClick={
            ()=>productDispatch({
                type: "CLEAR"
            })
        }>Clear Filters</Button>
      
    </div>
  )
}

export default Filter
