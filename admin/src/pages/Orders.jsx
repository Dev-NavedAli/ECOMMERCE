import React, { useEffect, useState } from 'react'
import axios from "axios"
import { backendUrl, currency } from "../App"
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'


const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        console.log(response.data.orders);
        setOrders(response.data.orders)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])


  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {
                    order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        {/*  Yeh condition tabhi true hogi jab tum last item par ho, kyunki index will equal order.items.length - 1 sirf last item ke liye.   */ }
                        return <p key={index}>{item.name} x {item.quantity} <span>{item.size}</span> </p>
                      } else {
                        return <p key={index}>{item.name} x {item.quantity} <span>{item.size}</span>, </p>
                      }
                    })}
                </div>
                <p>{order.address.firstName + "" + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ","}</p>
                  <p>{order.address.city + " , " + order.address.state + ", " + order.address.country + " , " + order.address.zipcode + " , "}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p>Itmes : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p>{currency}{order.amount}</p>
              <select>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing"> Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

          ))}
      </div>

    </div>
  )
}

export default Orders
