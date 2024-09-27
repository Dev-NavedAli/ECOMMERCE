
// add product to user cart

import userModel from "../models/userModel.js"

const addToCart = async(req,res)=>{
try {
    const {userId , itemId , size} = req.body
    const userData = await userModel.findById(userId)
    let cartData  = await userData.cartData;

    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1
        }else{
            cartData[itemId][size] = 1
        }
    }else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }

    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({success:true,message:"Added to cart"})

} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

// Update user cart
const updateCart = async(req,res)=>{

    try {
        const {userId , itemId , size , quantity} = req.body
        const userData = await userModel.findById(userId)    //finding user by htier userId and also find cartData 
        let cartData  = await userData.cartData;

        cartData[itemId][size] = quantity
        
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"cart Updated"})    

    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message}) 
    }

}


// Get user cart data
const getUserCart = async()=>{
    try {
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        let cartData  = await userData.cartData;
        
        res.json({success:true,cartData})

    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }

}


export {addToCart,updateCart,getUserCart}