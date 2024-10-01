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
const allowedOrigins = [
    'http://localhost:5173/',  // First frontend URL
    'https://ecommerce-backend-puce-eight.vercel.app'  // Second frontend URL
  ];
  
  // CORS configuration
  app.use(cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);  // Allow the origin
      } else {
        callback(new Error('Not allowed by CORS'));  // Block the origin
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  
  
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