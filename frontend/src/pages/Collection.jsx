import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Tittle from '../components/Tittle'
import ProductItem from '../components/ProductItem'

const collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])  //filter ke liye state
  const [categeory,setCategeory] = useState([])
  const [subCateogry,setSubCategeory] = useState([])

  


  useEffect(()=>{
    setFilterProducts(products)
  },[])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} />
        </p>
        {/* Categeory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGEORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Menu'} /> &nbsp;  Men
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} /> &nbsp; Women
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} /> &nbsp; kids
            </p>
          </div>
        </div>
        {/* SubCateogry Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} /> &nbsp;  Top wear
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} /> &nbsp; Bottom wear
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} /> &nbsp; Winter wear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Tittle text1={'ALL '} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select className='border border-gray-300 text-sm px-2 '>
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map the products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
  filterProducts.map((item,index)=>(
    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
  ))
}

        </div>

      </div>
    </div>
  )
}

export default collection
