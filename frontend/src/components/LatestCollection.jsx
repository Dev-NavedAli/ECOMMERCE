import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [latestProducts,setLatestProducts]= useState([])
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
           <Tittle text1={'LATEST'} text2={'COLLECTION'}/>
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus asperiores aspernatur error magni itaque vel beatae cupiditate placeat, quidem et ex hic ipsa, assumenda quia similique? Vel adipisci consectetur officia distinctio maiores. Quasi earum nulla eligendi quaerat adipisci vitae.</p>
        </div>
      
    </div>
  )
}

export default LatestCollection
