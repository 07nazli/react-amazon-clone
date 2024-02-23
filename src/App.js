import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
