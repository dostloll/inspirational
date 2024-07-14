import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-gray-400">
              We are a team of passionate developers dedicated to creating the
              best web experiences.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-2">Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400 mb-2">Email: info@example.com</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.56v14.88A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.44V4.56A4.56 4.56 0 0 1 4.56 0h14.88A4.56 4.56 0 0 1 24 4.56zM8.42 19.56V9.65H5.33v9.91h3.09zm-1.55-11.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm11.13 11.3v-5.4c0-1.26-.45-2.12-1.59-2.12a1.71 1.71 0 0 0-1.6 1.14 2.14 2.14 0 0 0-.1.76v5.63h-3.08s.04-9.13 0-10.08h3.08v1.43a3.06 3.06 0 0 1 2.8-1.54c2.04 0 3.58 1.34 3.58 4.23v5.96h-3.09z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.53 0-10 4.47-10 10 0 4.42 3.59 8.07 8.22 8.88v-6.28h-2.5V12h2.5V9.71c0-2.47 1.49-3.81 3.74-3.81 1.07 0 2.18.19 2.18.19v2.41h-1.23c-1.22 0-1.6.76-1.6 1.55V12h2.78l-.44 2.64h-2.34v6.28c4.63-.81 8.22-4.46 8.22-8.88 0-5.53-4.47-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.4 5.8c-.8.3-1.6.6-2.5.7.9-.6 1.6-1.5 1.9-2.6-.9.5-1.8.9-2.8 1.1-.9-.9-2.1-1.5-3.4-1.5-2.6 0-4.6 2.1-4.6 4.7 0 .4 0 .8.1 1.2-3.8-.2-7.3-2-9.5-4.8-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2.1 3.8-.8 0-1.5-.2-2.2-.6v.1c0 2.2 1.6 4 3.6 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 2 2.4 3.4 4.5 3.4-1.6 1.3-3.6 2-5.8 2-.4 0-.7 0-1-.1 2.1 1.4 4.5 2.1 7 2.1 8.4 0 13-7 13-13 0-.2 0-.4 0-.6.9-.6 1.7-1.5 2.4-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.65 8.84 8.34 9.75v-6.9h-2.5v-2.85h2.5V9.6c0-2.49 1.48-3.85 3.74-3.85 1.07 0 2.18.19 2.18.19v2.41h-1.23c-1.22 0-1.6.76-1.6 1.55V12h2.78l-.44 2.64h-2.34v6.87c4.69-.87 8.31-4.92 8.31-9.76 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
