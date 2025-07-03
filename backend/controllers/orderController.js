import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// import Stripe from "stripe";
import razorpay from "razorpay";


//global variables
const currency = "inr";
const deliveryCharge = 10;


// gateway initialize
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

let razorpayInstance;

const initializeRazorpay = () => {
  if (!razorpayInstance) {
    console.log('Initializing Razorpay with:', {
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET ? '***' : 'undefined'
    });
    
    razorpayInstance = new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });
  }
  return razorpayInstance;
};


// Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, {
      cartData: {},
    })

    res.json({ success: true, message: "Order placed successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

};

// Placing order using Stip method
// const placeOrderStripe = async (req, res) => {
//   


// };





// Placing order using Razorpay method

const placeOrderRazorpay = async (req, res) => {
  try {

    const { userId, items, amount, address } = req.body;
         
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Razorpay",
      payment: true,
      date: Date.now(),
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: amount *100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    }

    await initializeRazorpay().orders.create(options, (error, order) => {

      if(error){
        console.log(error);
        return res.json({success: false, message: error});
      }
      res.json({success: true, order});

    })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// const verifyRazorpay = async (req, res) => {
//   try {
//     const { userId, razorpay_order_id} = req.body;
//     const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
//     if(orderInfo.status === "paid"){
//       await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment: true});
//       await userModel.findByIdAndUpdate(userId, {cartData: {}});
//       res.json({success: true, message: "Payment successful"});
//     } else {
//       console.log(error);
//       res.json({success: false,message: error.message});
//     }
//   } catch (error) {
    
//   }
// }





// All orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

};

// User Order data Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error); 
    res.json({ success: false, message: error.message });
  }
};

// Update order status from Admin Panel
const updateStatus = async (req, res) => {

  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.log(error); 
    res.json({ success: false, message: error.message });
  }

};

export {
  placeOrder,
  //placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  // verifyRazorpay
};
