import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Star = ({ filled }) => {
  return (
    <span className="text-yellow-500">
      {filled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
          />
        </svg>
      )}
    </span>
  );
};

// Function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} filled={true} />);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(<Star key="half" filled={false} />);
  }

  // Add empty stars
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} filled={false} />);
  }

  return stars;
};

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-blue-500 hover:text-blue-700"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <p className="text-xl font-medium text-blue-500">Product</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          {product.title}
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={product.image}
              alt={product.title}
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  Rs.{product.price}
                </p>
                <p className="text-blue-200 flex items-center">
                  Rating: {product.rating.rate} ({product.rating.count})
                  <span className="ml-3 flex">
                    <span className="m-2 flex">
                      {renderStars(product.rating.rate)}
                    </span>
                  </span>
                </p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-6 md:justify-start">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Product;
