import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import ProductSection from "./components/ProductSection";
import Register from "./components/Register";
import Signin from "./components/Signin";
import useToken from './useToken';


export default function App() {
  const { token, setToken } = useToken(false);

  return (
    <div>
    <BrowserRouter>
        <div className="body" style={{ minHeight: "500px" }}>
          <Navbar Token={{token,setToken}}/>
          <Routes>
            <Route path="/" element={<ProductSection />} />
            <Route path="/signin" element={<Signin Token={{token,setToken}}/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/product/:id" element={<ProductDetail Token={{token,setToken}}/>} />
            <Route path="/cart" element={<Cart Token={{token,setToken}}/>} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    </div>
  );
}
