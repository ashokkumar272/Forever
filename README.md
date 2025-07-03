# Full Stack E-Commerce Application

A modern, full-featured e-commerce platform built with React.js, Node.js, Express.js, and MongoDB. The application includes a customer-facing frontend, an admin dashboard, and a robust backend API.

## 🌐 Live Demo

**🔗 [View Live Application](https://forever-dl1q.onrender.com/)**

Experience the full functionality of this e-commerce platform with the live demo deployed on Render.

## 🚀 Features

### Customer Frontend Features
- **User Authentication**: Secure login and registration system
- **Product Catalog**: Browse products with categories and subcategories
- **Product Search & Filter**: Advanced search functionality with filters
- **Shopping Cart**: Add, remove, and manage cart items with size selection
- **Order Management**: Place orders and track order history
- **Payment Integration**: Support for Razorpay payment gateway
- **Cash on Delivery**: COD payment option available
- **Responsive Design**: Mobile-friendly design with Tailwind CSS
- **Product Reviews**: View product details with multiple images
- **Best Sellers**: Featured best-selling products section
- **Newsletter Subscription**: Stay updated with latest offers
- **Contact & About Pages**: Business information and contact details

### Admin Dashboard Features
- **Admin Authentication**: Secure admin login system
- **Product Management**: Add, edit, and delete products
- **Image Upload**: Multiple product image uploads via Cloudinary
- **Order Management**: View and manage customer orders
- **Inventory Control**: Track product availability and stock
- **Dashboard Analytics**: Overview of sales and orders
- **Category Management**: Organize products by categories and subcategories

### Backend API Features
- **RESTful API**: Well-structured API endpoints
- **User Management**: User registration, login, and profile management
- **Product CRUD**: Complete product management operations
- **Shopping Cart API**: Cart operations with user sessions
- **Order Processing**: Order creation and management
- **File Upload**: Image upload handling with Cloudinary
- **Authentication Middleware**: JWT-based authentication
- **Admin Authorization**: Role-based access control
- **Database Integration**: MongoDB with Mongoose ODM
- **Payment Processing**: Razorpay integration for online payments

## 🛠️ Technology Stack

### Frontend
- **React.js** - User interface library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **React Toastify** - Toast notifications
- **Vite** - Build tool and development server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload middleware
- **Cloudinary** - Image storage and management
- **Razorpay** - Payment gateway integration
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Admin Panel
- **React.js** - User interface library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Styling framework
- **React Toastify** - Notifications

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB Atlas account or local MongoDB installation
- Cloudinary account for image storage
- Razorpay account for payment processing

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "Full Stack/Ecommerce"
```

### 2. Backend Setup
```bash
# Install backend dependencies
npm install

# Create .env file in backend directory
cd backend
```

Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install frontend dependencies
npm install
```

### 4. Admin Panel Setup
```bash
# Navigate to admin directory
cd ../admin

# Install admin dependencies
npm install
```

## 🚀 Running the Application

### Development Mode

1. **Start the Backend Server**
```bash
# From root directory
npm run server
# or
cd backend && npm start
```
The backend server will run on `http://localhost:4000`

2. **Start the Frontend**
```bash
# From frontend directory
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

3. **Start the Admin Panel**
```bash
# From admin directory
cd admin
npm run dev
```
The admin panel will run on `http://localhost:5174`

### Production Mode

```bash
# Build and start the application
npm run build
npm start
```

## 📱 Application Structure

```
Ecommerce/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js     # Cloudinary configuration
│   │   └── mongodb.js        # MongoDB connection
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productControllers.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── adminAuth.js      # Admin authentication
│   │   ├── auth.js           # User authentication
│   │   └── multer.js         # File upload handling
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── cartRoute.js
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   └── server.js             # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── context/          # React context providers
│   │   ├── pages/            # Page components
│   │   └── assets/           # Images and static files
│   └── public/
└── admin/
    ├── src/
    │   ├── components/       # Admin components
    │   ├── pages/            # Admin pages
    │   └── assets/           # Admin assets
    └── public/
```

## 🎯 User Guide

### For Customers

1. **Registration/Login**
   - Visit the homepage and click on the login/register link
   - Create a new account or login with existing credentials

2. **Browsing Products**
   - Use the search bar to find specific products
   - Browse categories from the navigation menu
   - Filter products by category, subcategory, and other criteria

3. **Shopping Cart**
   - Add products to cart by selecting size and clicking "Add to Cart"
   - View cart by clicking the cart icon
   - Update quantities or remove items as needed

4. **Placing Orders**
   - Proceed to checkout from the cart page
   - Fill in delivery address information
   - Choose payment method (Razorpay or Cash on Delivery)
   - Confirm and place your order

5. **Order Tracking**
   - View order history in the "My Orders" section
   - Track order status and delivery information

### For Administrators

1. **Admin Login**
   - Access the admin panel at the admin URL
   - Login with admin credentials

2. **Product Management**
   - **Add Products**: Use the "Add Product" page to add new products
     - Upload multiple product images
     - Set product details (name, description, price, category, sizes)
     - Mark products as bestsellers
   - **View Products**: See all products in the "Product List" page
   - **Edit/Delete**: Modify or remove existing products

3. **Order Management**
   - View all customer orders in the "Orders" page
   - Update order status (Processing, Shipped, Delivered)
   - Track order details and customer information

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Admin Authorization**: Role-based access control
- **Input Validation**: Server-side validation using Validator
- **CORS Protection**: Configured cross-origin resource sharing
- **Environment Variables**: Sensitive data stored in environment variables

## 💳 Payment Integration

The application supports multiple payment methods:
- **Razorpay**: Online payment gateway for card and UPI payments
- **Cash on Delivery**: COD option for customers who prefer offline payment

## 📦 Deployment

The application is configured for easy deployment:
- **Production Build**: Optimized build for frontend applications
- **Static File Serving**: Backend serves frontend static files in production
- **Environment Configuration**: Separate configurations for development and production

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the MongoDB URI in environment variables
   - Verify network connectivity

2. **Cloudinary Upload Issues**
   - Verify Cloudinary credentials in .env file
   - Check image file size and format

3. **Payment Gateway Errors**
   - Ensure Razorpay credentials are correct
   - Verify webhook configurations

4. **CORS Issues**
   - Check CORS configuration in server.js
   - Verify frontend URL in backend environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support and questions, please contact:
- Email: support@ecommerce.com
- GitHub Issues: [Create an issue](link-to-issues)

---

**Note**: This is a full-stack e-commerce application designed for learning and development purposes. For production use, ensure proper security measures, testing, and compliance with local regulations.
