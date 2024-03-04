import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
