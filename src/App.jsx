import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="home-page">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery — your online destination for beautiful
        houseplants.
      </p>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/plants">Plants</Link>

      <Link to="/cart">
        🛒 Cart ({totalItems})
      </Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;