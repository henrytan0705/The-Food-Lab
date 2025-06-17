import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md bottom-0 left-0 right-0 z-50">
      <div className="flex-col">
        <p className="mb-4 text-sm text-gray-900">
          &copy; 2025 The Food Lab. All rights reserved.
        </p>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter className="text-xl hover:text-gray-400 transition-colors" />
          </a>
        </div>

        <div className="">
          <div className="text-gray-900">
            <p>Some St, Some Ave,</p>
            <p>Brooklyn, New York</p>
            <p>11223</p>
          </div>
          <div className="text-gray-900">(123)-456-7890</div>
          <div className="text-gray-900">10 am - 8 pm</div>
        </div>

        <div>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-red-500 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
