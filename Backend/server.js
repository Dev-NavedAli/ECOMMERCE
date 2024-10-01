import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
connectCloudinary();
console.log('Api Key : ',process.env.CLOUDINARY_API_KEY)
//App Config
const app = express()
const port = process.env.PORT;
connectDb()
.then(()=>{console.log('conncetd to db successfully')}).catch((err)=>{console.log(err)})
connectCloudinary

//middlewares
app.use(express.json())
  
const corsOptions = {
    origin: 'https://66fb9bfa765445cc96646299--singular-croissant-341c21.netlify.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  app.use(cors(corsOptions));
  
//Api End points

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter )

app.get("/",(req,res)=>{
    res.send("Hi there")
})


app.listen(port,(req,res)=>{
    console.log(`app is listening at the port ${port}`);
    
})