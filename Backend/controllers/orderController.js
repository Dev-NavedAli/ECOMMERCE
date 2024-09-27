import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

// Placing order using cod

const placeOrder = async(req,res)=>{
    try {
        const { userId , items , amount , address } = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}}) //yha pr hmne order placed hone ke baad cart ko empty kiya hai
        res.json({success:true,message:"Order placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}


// Placing order using Stripe Method

const placeOrderStripe = async(req,res)=>{

}


// Placing order using razorpay method

const placeOrderRazorpay = async(req,res)=>{

}

//All Orders data for Admin Panel

const allOrders = async(req,res)=>{

}

//User Orders data for Frontend

const userOrders = async(req,res)=>{
    
}


//update order Status from admin

const updateStatus = async(req,res)=>{
    
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}