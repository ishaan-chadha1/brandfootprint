import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="text-3xl font-bold">
          BrandFootprint
        </a>
        <ul className="flex flex-col gap-4 list-none pl-0">
          <li>
            <a href="/" className="hover:text-gray-400 block">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400 block">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-400 block">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400 block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
