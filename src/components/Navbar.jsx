import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-red-500"
          >
            TᕼE ᖴOOᗪ ᒪᗩᗷ
          </Link>

          <button
            className="text-gray-700 md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#646cff"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-red-500 transition"
            >
              ᕼOᗰE
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-red-500 transition"
            >
              ᗩᗷOᑌT
            </Link>
            <Link
              to="/menu"
              className="text-gray-700 hover:text-red-500 transition"
            >
              ᗰEᑎᑌ
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-red-500 transition"
            >
              ᑕOᑎTᗩᑕT
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 text-right">
            <Link
              to="/"
              className="block text-gray-700 hover:text-red-500 transition"
            >
              ᕼOᗰE
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-red-500 transition"
            >
              ᗩᗷOᑌT
            </Link>
            <Link
              to="/menu"
              className="block text-gray-700 hover:text-red-500 transition"
            >
              ᗰEᑎᑌ
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-red-500 transition"
            >
              ᑕOᑎTᗩᑕT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
