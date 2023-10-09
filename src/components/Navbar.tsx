
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          < img src="/img/logo.jpg" alt="Findollar Logo" className="w-13 h-12 mr-2" />
          <span className="text-xl font-bold">Findollar</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href=" " className="text-gray-600 hover:text-black">Home</a >


          <div className="inline-block group relative">
            {/*<a href="#" className="text-gray-600 hover:text-black">Shop</a >*/}
            {/*<span class="w-full">< img src="/img/Vector.svg" alt="Vector Logo" className="w-5 h-5 mr-2" /></span>*/}
            <a class="inline-flex items-center h-8 m-2" href="#">
                <span class="w-full">Shop</span>
                < img src="/img/Vector.svg" alt="Vector Logo" className="w-3 h-3 mr-2" />
            </a >

            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {/* Add dropdown items here */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a >
              </div>
            </div>
          </div>

          <a href="#" className="text-gray-600 hover:text-black">About</a >
          <a href="#" className="text-gray-600 hover:text-black">Blog</a >
          <a href="#" className="text-gray-600 hover:text-black">Contact</a >

          
        </div>

        {/* Icons and Actions */}
        <div className="space-x-4">
          {/*<a href="#" className="text-blue-600 hover:text-black">Login / Register</a >*/}
          <a class="inline-flex items-center h-8 m-2" href="#">
            < img src="/img/login.svg" alt="Login Logo" className="w-5 h-5 mr-2" />
            <span class="text-blue-600 w-full">Login / Register</span>
          </a >

          <a class="inline-flex items-center h-8 m-2" href="#">
            < img src="/img/magnifier.svg" alt="Magnifier Logo" className="w-5 h-5 mr-2" />
          </a >

          <a class="inline-flex items-center h-8 m-2" href="#">
            < img src="/img/shoppingCart.svg" alt="ShoppingCart Logo" className="w-5 h-5 mr-2" />
            <span class="text-blue-600 w-full">1</span>
          </a >

          <a class="inline-flex items-center h-8 m-2" href="#">
            < img src="/img/heart.svg" alt="Heart Logo" className="w-5 h-5 mr-2" />
            <span class="text-blue-600 w-full">1</span>
          </a >
         
        </div>

      </div>
    </div>
  );
}

export default Navbar;




