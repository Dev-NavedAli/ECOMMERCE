import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
connectCloudinary(); // Ensure to call the function
console.log('Api Key : ', process.env.CLOUDINARY_API_KEY);

// App Config
const app = express();
const port = process.env.PORT;

// Connect to the database
connectDb()
  .then(() => { 
    console.log('Connected to DB successfully'); 
  })
  .catch((err) => { 
    console.log(err); 
  });

// Middleware
app.use(express.json());

const allowedOrigins = [
  'https://ecommerce-frontend-eight-xi.vercel.app',
  'https://ecommerce-admin-panel-chi-ecru.vercel.app', // Replace with your second URL
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Reject the request
    }
  },
};

// Apply CORS middleware
app.use(cors(corsOptions));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
  res.send("Hi there");
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening at the port ${port}`);
});

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});




















// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import connectDb from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js"
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js"
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// dotenv.config();
// connectCloudinary();
// console.log('Api Key : ',process.env.CLOUDINARY_API_KEY)
// //App Config
// const app = express()
// const port = process.env.PORT;
// connectDb()
// .then(()=>{console.log('conncetd to db successfully')}).catch((err)=>{console.log(err)})
// connectCloudinary

// //middlewares
// app.use(express.json())  

// const allowedOrigins = [
//     'https://ecommerce-frontend-eight-xi.vercel.app',
//     'https://ecommerce-admin-panel-chi-ecru.vercel.app' // Replace with your second URL
//   ];
  
//   const corsOptions = {
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true); // Allow the request
//       } else {
//         callback(new Error('Not allowed by CORS')); // Reject the request
//       }
//     },
//   };
  
//   app.use(cors(corsOptions))


// // const corsOptions = {
// //     origin: 'https://ecommerce-frontend-eight-xi.vercel.app',
// //   };
  
// // app.use(cors(corsOptions));

  
  
// //Api End points

// app.use('/api/user',userRouter)
// app.use('/api/product',productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter )

// app.get("/",(req,res)=>{
//     res.send("Hi there")
// })


// app.listen(port,(req,res)=>{
//     console.log(`app is listening at the port ${port}`);
    
// })