import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'



const BestSeller = () => {

    
const {products} = useContext(ShopContext)
const {bestSeller, setBestSeller} = useState([])

useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestSeller))
    },[])

  return (
    <div>


    </div>
  )
}

export default BestSeller