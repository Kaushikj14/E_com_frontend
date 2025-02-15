import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
// import Cart from '../customer/components/Cart/Cart.jsx'
import Navigation from '../customer/components/Navigation/Navigation.jsx';
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Products/Product'
import Cart from '../customer/components/Cart/Cart.jsx';
// import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx';


const CustomerRoutes = () => {
  return (
    <div>
        <div>
          <Navigation    />
          
        </div>
        
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
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
