import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-auto max-w-2xl py-8 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">BrandFootprint</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
