import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])


  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800'>
                At our store, we believe that clothing is more than just fabric its a way to express your personality and style.
            </p>
        </div>
      
      {/*----------Redering Product Section--------------------------------*/}
        <div className='gap-54 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-3 border-2 border-gray-500 p-2'>
        {
            LatestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
          }
        </div>

    </div>
  )
}

export default LatestCollection
