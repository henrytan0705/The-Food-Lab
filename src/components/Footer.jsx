import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold tracking-wide">TᕼE ᖴOOᗪ ᒪᗩᗷ</h2>
          <p className="text-sm mt-2">
            &copy; 2025 The Food Lab. All rights reserved.
          </p>
        </div>

        <div className="text-sm space-y-1">
          <p>695 Park Ave</p>
          <p>New York, NY 10065</p>
          <p>(123)-456-7890</p>
          <p>Open: 10am - 8pm</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <div className="space-x-4">
            <Link to="/" className="hover:text-red-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-400">
              About
            </Link>
            <Link to="/menu" className="hover:text-red-400">
              Menu
            </Link>
            <Link to="/contact" className="hover:text-red-400">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-xl hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-pink-400 transition-colors" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
