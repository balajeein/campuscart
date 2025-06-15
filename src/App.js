import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import './App.css';
import SellForm from './pages/SellForm';
export default function App() {
  return (
    <Router>
      <div className="home-page">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/product-detail">Products</Link>
          <Link to="/sell">Sell Stuff</Link>
          <Link to="/about-us">About Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<SellForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
