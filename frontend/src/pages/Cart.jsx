import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItem, updateQuantity } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const temData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          temData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(temData)
  }, [cartItem])
  return (
    <div className='border-t pt-14 '>
      <div className='text-2xl mb-3'>
        <Tittle text1={'YOUR '} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-1 sm:w-20' alt="" />
                  <div>
                    <p className='text-small sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} />
                <img src={assets.bin_icon} alt="" className='w-4 mr-4 sm:w-5 cursor-pointer' onClick={() => updateQuantity(item._id, item.size, 0)} />
              </div>
            )
          })
        }
      </div>

      <div className="flex justify-end my-20">
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>

    </div>
  )
}

export default Cart
