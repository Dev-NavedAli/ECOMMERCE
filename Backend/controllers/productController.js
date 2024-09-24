import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function for add product
const addProduct = async (req, res) => {
  try {
    const {name,description,price,category,subCategory,sizes,bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {name,description,category,price: Number(price),subCategory,
      bestSeller: bestseller === "true" ? true : false,sizes: JSON.parse(sizes),image: imagesUrl,Date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for List product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({success:true,products})
    } catch (error) {
        res.json({success:false,message:error.message })
    }
};

// Function for remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"product removed"})
    } catch (error) {
        console.log(error)
        res.json({success:flase,message:error.message})
    }
};

// Function for single product info
const singleProduct = async (req, res) => {};

export { listProduct, addProduct, removeProduct, singleProduct };
