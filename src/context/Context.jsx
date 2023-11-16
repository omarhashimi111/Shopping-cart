import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducer';

const cart = createContext()



const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: Math.floor(Math.random()* 11),
    fastD: faker.datatype.boolean(),
    rating: faker.number.int({min: 1,max:5})
}))
const initialState = {
    products : products,
    cart: []
}


function Context({children}) {
    const [state, dispatch] = useReducer(cartReducer,initialState)

    const [productState, productDispatch] = useReducer(productReducer,{
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      search: ""
    })


  return (
    <cart.Provider value={{
        state,
        dispatch,
        productState,
        productDispatch
    }}>
      {children}
    </cart.Provider>
  )
}

export default Context

export const cartState= ()=>{
    return useContext(cart)
}
