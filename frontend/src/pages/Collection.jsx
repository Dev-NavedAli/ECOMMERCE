import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Tittle from '../components/Tittle'
import ProductItem from '../components/ProductItem'

const collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])  //filter ke liye state
  const [categeory,setCategeory] = useState([])            //filter
  const [subCateogry,setSubCategeory] = useState([])       //filter
 const [sortType,setSortType] = useState('relavent')
  const toggleCategeory  = (e)=>{

    if(categeory.includes(e.target.value)){
       setCategeory(prev=> prev.filter(item=> item !== e.target.value))
    }else{
      setCategeory(prev=> [...prev,e.target.value])
    }
  }

  const toggleSubCategeory = (e)=>{
    if(subCateogry.includes(e.target.value)){
      setSubCategeory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setSubCategeory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy  = products.slice();
    if(categeory.length > 0){
      productsCopy = productsCopy.filter(item => categeory.includes(item.category))
    }

    if(subCateogry.length > 0){
      productsCopy = productsCopy.filter(item => subCateogry.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = ()=>{
    
    let fpCopy  = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
     applyFilter();
  },[categeory,subCateogry])

  useEffect(()=>{
     sortProduct()
  },[sortType])


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
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategeory} /> &nbsp;  Men
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Women'}  onChange={toggleCategeory} /> &nbsp; Women
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategeory} /> &nbsp; kids
            </p>
          </div>
        </div>
        {/* SubCateogry Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' onChange={toggleSubCategeory} value={'Topwear'} /> &nbsp;  Top wear
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3' onChange={toggleSubCategeory} value={'Bottomwear'} /> &nbsp; Bottom wear
            </p>
            <p className='flex-gap-2'>
              <input type="checkbox" className='w-3'onChange={toggleSubCategeory} value={'Winterwear'} /> &nbsp; Winter wear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Tittle text1={'ALL '} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2 '>
            <option value="relavent">Sort by: Relavant</option>
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
