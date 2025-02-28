import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
// import Cart from '../customer/components/Cart/Cart.jsx'
import Navigation from '../customer/components/Navigation/Navigation.jsx';
import Footer from '../customer/components/Footer/Footer'
// import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx';


import OrderDetails from '../customer/components/Order/OrderDetails.jsx';
import PaymentSuccess from '../customer/Payment/PaymentSuccess.jsx';
import Checkout from '../customer/components/Checkout/checkout.jsx';
import Order from '../customer/components/Order/Order.jsx';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx';
import Cart from '../customer/components/Cart/Cart.jsx';
import Product from '../customer/components/Products/Product.jsx';


const CustomerRoutes = () => {
  return (
    <div>
        <div>
          <Navigation    />
          
        </div>
        
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/account/order' element={<Order />}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
            <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>
            {/* <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route> */}
            {/* <Route path='/product/:productId' element={<ProductDetails />}></Route> */}


        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        {/* <OrderDetails /> */}

        </Routes>
        {/* <Cart /> */}

        <div>
          <Footer />
        </div>

    </div>
  )
}

export default CustomerRoutes
