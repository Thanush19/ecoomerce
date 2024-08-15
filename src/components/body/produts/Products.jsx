import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error Fetching Products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Calculate the indices of products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle adding product to cart
  const handleAddToCart = () => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/register"); // Redirect to register if username is not found
    } else {
      // Logic to add product to cart can be added here
      alert("Product added to cart!"); // Placeholder alert
    }
  };

  // Handle product click to navigate to product details
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((p) => (
            <div
              className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105"
              key={p.id}
              onClick={() => handleProductClick(p.id)} // Navigate on click
            >
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  {p.title.split(" ").slice(0, 3).join(" ")}
                </h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {p.description.slice(0, 30)}...
                </p>
              </div>

              <img
                className="object-cover w-full h-48 mt-2"
                src={p.image}
                alt={p.title}
              />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">Rs. {p.price}</h1>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click from bubbling up to the card
                    handleAddToCart(); // Call handleAddToCart on click
                  }}
                  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 text-sm font-semibold text-gray-700 bg-white border rounded-md ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-200"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 text-sm font-semibold text-gray-700 bg-white border rounded-md ${
                currentPage === index + 1 ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 text-sm font-semibold text-gray-700 bg-white border rounded-md ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
