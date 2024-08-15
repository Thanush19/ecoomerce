import React, { useState, useEffect } from "react";
import { FaSearch, FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import NavbarSkeleton from "./NavbarSkeleton";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay before showing the actual navbar

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (isLoading) {
    return <NavbarSkeleton />;
  }

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-6 sm:h-7"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
                alt="Logo"
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
          >
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <div className="relative mt-4 lg:mt-0  lg:mx-[40%] lg:w-[60rem] ">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaSearch className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                  placeholder="Search Products"
                />
              </div>
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Profile
              </a>
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
