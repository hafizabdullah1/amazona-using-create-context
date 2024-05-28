import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="bg-[#343A40] flex flex-col md:flex-row py-4 md:py-6 px-4 md:px-32 justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-20">
         <Link to='/'>
         <h2 className="uppercase text-lg md:text-xl font-semibold text-white tracking-widest">
            AMAZONA SHOP
          </h2>
         </Link>
          <div className="mt-4 md:mt-0">
            <input
              className="py-2 px-2 md:px-4 text-sm md:text-base rounded-md bg-gray-800 text-white"
              type="text"
              placeholder="Search Products..."
            />
            <button className="mt-2 md:mt-0 md:ml-2 border border-green-600 md:border-2 text-green-600 uppercase text-sm md:text-base py-2 px-3 md:py-2 md:px-4 rounded-md">
              Search
            </button>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex flex-row items-center justify-center">
            <li className="mr-4">
              <Link  
                to='/cart'
                className="transition-all hover:transition-all hover:text-white text-gray-400 uppercase text-xs md:text-base font-semibold"
              >
                <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="transition-all hover:transition-all hover:text-white text-gray-400 uppercase text-xs md:text-base font-semibold"
              >
                <i className="fa-solid fa-user"></i>&nbsp;Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
