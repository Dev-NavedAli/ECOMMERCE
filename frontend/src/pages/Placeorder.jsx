import React, { useContext, useState } from 'react'
import Tittle from '../components/Tittle'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Placeorder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItem, setCartItem, getCartCount, getCartAmount, delivery_fee, products } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {

      let orderItems = []

      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)

            }
          }

        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {

        // ApI calls for COD
        case 'cod':
          const response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } })
          if (response.data.success) {
            setCartItem({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }

          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h[80vh] border-t'>
      {/*--------------- Left side-------------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Tittle text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} required name='firstName' value={formData.firstName} type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input onChange={onChangeHandler} required name='lastName' value={formData.lastName} type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input onChange={onChangeHandler} required name='email' value={formData.email} type="email" placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input onChange={onChangeHandler} required name='street' value={formData.street} type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} required name='city' value={formData.city} type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input onChange={onChangeHandler} required name='state' value={formData.state} type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} required name='zipcode' value={formData.zipcode} type="number" placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input onChange={onChangeHandler} required name='country' value={formData.country} type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input onChange={onChangeHandler} required name='phone' value={formData.phone} type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/* --------------------------Right Side--------------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
          <div className='mt-12'>
            <Tittle text1={'PAYMENT'} text2={'METHOD'} />
            {/* Payment Method selection */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} `}></p>
                <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
              </div>
              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''} `}></p>
                <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} `}></p>
                <p className='text-gray-500 text-sm font-medium mx-4 '>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className='w-full text-end mt-8'>
              <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}

export default Placeorder
