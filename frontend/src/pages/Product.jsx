import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const product = () => {
  const {productId}  = useParams();
  useEffect(()=>console.log(productId))
  return (
    <div>
      
    </div>
  )
}

export default product
