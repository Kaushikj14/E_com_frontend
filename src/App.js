//9714923772
import './App.css';
import MainCarousel, { Carousel } from './customer/components/HomeCarousel/MainCarousel';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
