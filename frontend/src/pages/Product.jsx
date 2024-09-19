import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const product = () => {
  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size ,setSize] = useState('')

  const fetchProductData = async () => {
     products.map((item)=>{
      if(item._id == productId){
        setProductData(item)
        setImage(item.image[0])  
        return null;
      }
     })
  }
  useEffect(() => {
    fetchProductData();
  }, [productId])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/* Product images */}
         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className="flex sm:flex-col overflow-x-auto  justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item,index)=>(
                <img src={item} key={index} onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className='w-full  h-auto' alt=""/>
          </div>
         </div>

         {/* ----------------------------- Product Information------------- */}
         <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5  '>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Selec Size</p>
            <div className='flex gap-2'>
              {
              productData.sizes.map((item,index)=>(
                <button key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} onClick={()=>{setSize(item)}} >{item}</button>
              ))
              }

            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash On Delivery Is Available On This Product.</p>
            <p>Easy Return And Exchange Policy Within 7 Days</p>
          </div>
         </div>
      </div>
      {/*--------------- Description & Review Section----------- */}
      <div className="mt-20">
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p >An E-commerce Website is an online plateform that facilates the buying and selling of products or services as a virtual marketplace where business and individual can  showcase their products interact with customer and conduct  transactions without the need for a physical presence Ecommerce have gained immense  popularity due to their convience accesibility and the global reach they offer</p>
          <p>E-commerce websites typically display products or services along with detailed description images prices and any available  variants i.eg.. sizes color Each product usually has its own dedicated page with relevant information </p>
        </div>
      </div>
      {/* ---------------------Display related products -------------- */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default product
