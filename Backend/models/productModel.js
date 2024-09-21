import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image :{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    sizes:{
        type:Array,
        required:true
    },
    bestSeller:{
        type:Boolean,
        required:true
    },
    Date:{
        type:Number,
        required:true
    }
})


//if my las two line give error use this
// const productModel = mongoose,model.product || mongoose.model("product",productSchema)
// export default productModel

const productModel = mongoose.model("productModel",productSchema)
export default productModel