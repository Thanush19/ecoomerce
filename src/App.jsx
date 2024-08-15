import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Product from "./components/body/produts/Product";

function App() {
  useEffect(() => {
    // Remove username from local storage on page refresh
    window.addEventListener("beforeunload", handleLogout);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleLogout);
    };
  }, []);

  useEffect(() => {
    // Remove username from local storage every 5 minutes
    const interval = setInterval(handleLogout, 5 * 60 * 1000); // 5 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
