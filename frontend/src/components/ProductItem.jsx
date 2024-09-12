import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img src="" alt="" />
        </div>

    </Link>
  )
}

export default ProductItem
