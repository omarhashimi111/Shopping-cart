import React from 'react'
import { cartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import "./styles.css"
import Filter from './Filter'

function Home() {

  const { state,
    productState: {sort, byRating,byStock, byFastDelivery,search}
  } = cartState()

  const transformProduct = () => {
    let sortProducts = state.products

    if(sort)
    {
      sortProducts = sortProducts.sort((a,b)=>
        sort === "lowToHigh" ? a.price - b.price: b.price-a.price)
    }
    if(byRating > 0){
      sortProducts = sortProducts.filter(pro => pro.rating >= byRating)
    }
    if(!byStock){
      sortProducts = sortProducts.filter(pro => pro.inStock)
    }
    if(byFastDelivery){
      sortProducts = sortProducts.filter(pro => pro.fastD)
    }
    if(search){
      sortProducts = sortProducts.filter(pro => pro.name.toLowerCase().includes(search.toLowerCase()))
    }
    return sortProducts
  }


  return (
    <div className="home">
      <Filter />
      <div className="productcontainer">
        {
          transformProduct().map(pro =>{
            return <SingleProduct key={pro.id} pro={pro} />
          })
        }
      </div>
    </div>
  )
}

export default Home
