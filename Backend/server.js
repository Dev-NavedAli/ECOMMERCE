import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"

dotenv.config();

//App Config
const app = express()
const port = process.env.PORT;
connectDb()
.then(()=>{console.log('conncetd to db successfully')}).catch((err)=>{console.log(err)})
connectCloudinary

//middlewares
app.use(express.json())
app.use(cors())

//Api End points

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get("/",(req,res)=>{
    res.send("Hi there")
})


app.listen(port,(req,res)=>{
    console.log(`app is listening at the port ${port}`);
    
})