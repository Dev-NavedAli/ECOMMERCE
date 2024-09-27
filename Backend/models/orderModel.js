import mongoose from "mongoose"

const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        required:true,
        default: 'Order placed'
    },
    paymentMethod:{
        type:String,
        required:true,
    },
    payment:{
        type:Boolean,
        required:true,
        default:false
    },
    date:{
        type:Number,
        required:true,
    }
})

// const orderModel = mongoose.models.order || mongoose.model('order',orderSchema)
const orderModel = mongoose.model("orderModel",orderSchema)

export default orderModel;