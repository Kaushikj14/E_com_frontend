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

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
