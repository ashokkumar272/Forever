import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middleware
app.use(express.json());
app.use(cors())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/', (req, res) => {
    res.send('API Working');
})
app.get('/user', (req, res)=>{
    res.send('user')
})
app.get('/cart', (req,res)=>{
    res.send("cart")
})
app.get('/order', (req,res)=>{
    res.send('orders')
})
app.get('/product', (req, res)=>{
    res.send('products')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})







