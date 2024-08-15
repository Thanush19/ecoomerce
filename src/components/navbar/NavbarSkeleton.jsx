import React from "react";

const NavbarSkeleton = () => {
  return (
    <nav className="bg-gray-300 shadow animate-pulse">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            {/* Skeleton for Logo */}
            <div className="w-24 h-6 bg-gray-400 rounded-md"></div>

            {/* Mobile menu button skeleton */}
            <div className="flex lg:hidden">
              <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-300 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
          >
            <div className="flex flex-col text-gray-600 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              {/* Skeleton for Search Bar */}
              <div className="relative mt-4 lg:mt-0 lg:mx-[40%] lg:w-[60rem]">
                <div className="w-full py-2 pl-10 pr-4 bg-gray-400 rounded-md lg:w-56"></div>
              </div>

              {/* Skeleton for Profile Link */}
              <div className="w-16 h-4 mt-2 bg-gray-400 rounded-md lg:mt-0 lg:mx-4"></div>

              {/* Skeleton for Cart Link */}
              <div className="w-16 h-4 mt-2 bg-gray-400 rounded-md lg:mt-0 lg:mx-4"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;
