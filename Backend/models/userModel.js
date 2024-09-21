import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,
        default:{},  //matlab jab bhi naya user add ho uska cart empty aaye 
    },   
},{minimize:false}) //mongoose direct empty object support nhi karta isiliye ye property use ki hai 

//if my las two line give error use  below lines 
// const userModel = mongoose.model.user || mongoose.model("user",userSchema)
// export default userModel

const userModel = mongoose.model("userModel",userSchema)
export default userModel