import React from "react";
import Navbar from "../navbar/Navbar";
import Mainbanner from "../body/banners/Mainbanner";
import Products from "../body/produts/Products";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Mainbanner />
      {/* <ProductList /> */}
      <Products />
    </div>
  );
};

export default Home;
