import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import './App.css';
import SellForm from './pages/SellForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import CartIcon from './components/CartIcon';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="home-page">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sell" element={<SellForm />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/product-detail" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
