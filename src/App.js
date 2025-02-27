//9714923772
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer.jsx';
import Product from './customer/components/Products/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/checkout.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import PaymentSuccess from './customer/Payment/PaymentSuccess.jsx';
function App() {
  return (
    <div className="">
        <Navigation />
      
      <Routes>
      
            <Route path='/login' element={<HomePage />}></Route>
            <Route path='/register' element={<HomePage />}></Route>


            
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/account/order' element={<Order />}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
            <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>






      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
