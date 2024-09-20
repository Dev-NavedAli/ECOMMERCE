import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)


    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Tittle text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping fee</p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <hr />
                <div className="flex justify-between">
<b>Total </b>
<b>{currency}{getCartAmount() === 0 ? 0 :getCartAmount()+delivery_fee}</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
