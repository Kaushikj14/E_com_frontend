//9714923772
import './App.css';
import MainCarousel, { Carousel } from './customer/components/HomeCarousel/MainCarousel';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import ProductCard from '../src/customer/components/Products/ProductCard.jsx'
import Footer from './customer/components/Footer/Footer.jsx';
import Product from './customer/components/Products/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/checkout.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes.jsx';
function App() {
  return (
    <div className="">
        <Navigation />
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>


      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
