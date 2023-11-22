"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute z-50 top-0 w-full bg-white py-2 sm:py-6 text-gray-900">
      <div className="flex-between mx-auto w-full px-6 xs:px-8 sm:px-16">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:bg-gray-800/40 p-1 rounded-lg block md:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10  ">
          <li className="body-text ">
            <a className="text-black " rel="noopener noreferrer" href="/">
              <Image
                src="/next.svg"
                alt="about us image"
                height={35}
                width={100}
                className=""
              />
            </a>
          </li>
          <li className="body-text  hover:text-[#ff914d] transition-all duration-300 ease-in-out">
            <a
              href="/"
              className="font-light text-[#ff914d]"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
          <li className="body-text text-black">
            {/* <Link href="" target="_blank"> */}
            <a
              href="/about"
              className="font-light hover:text-[#ff914d] transition-all duration-300 ease-in-out"
              rel="noopener noreferrer"
            >
              About
            </a>

            {/* </Link> */}
          </li>
          <li className="body-text text-black">
            {/* <Link href="" target="_blank"> */}
            <a
              href="/faqs"
              className="font-light hover:text-[#ff914d] transition-all duration-300 ease-in-out"
              rel="noopener noreferrer"
            >
              FAQs
            </a>

            {/* </Link> */}
          </li>
          <li className="body-text text-black">
            {/* <Link href="" target="_blank"> */}
            <a
              href="/contact"
              className="font-light hover:text-[#ff914d] transition-all duration-300 ease-in-out"
              rel="noopener noreferrer"
            >
              Contact
            </a>

            {/* </Link> */}
          </li>
        </ul>
        <div className="max-md:hidden md:gap-x-10" />
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-20">
          <li>
            <Link href="/" className=" flex-center gap-2 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#f97316"
                className="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" font-extralight text-[#f97316] group-hover:text-[#f97316]/40 transition-all ease-in-out duration-300 text-sm">
                Log In
              </p>
            </Link>
          </li>
          <Link href="/forms" className="mx-auto">
            <button
              className=" transition-all ease-in-out duration-500 
            font-extralight w-44 bg-[#f97316] text-white hover:text-[#f97316] 
            rounded-full p-1 border-2 border-[#f97316] hover:bg-white active:bg-slate-100"
            >
              Get Started
            </button>
          </Link>
        </ul>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-left justify-start">
            {/* Backdrop */}
            <div
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black opacity-50"
            ></div>

            {/* Modal content */}
            <div className="bg-gray-700 border-2 border-gray-700 w-3/4 h-screen overflow-y-auto z-10">
              <ul className="flex flex-col py-4 space-y-4">
                <li className="body-text ">
                  <a
                    className="text-slate-100  block py-2 px-5 hover:bg-gray-600"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="body-text text-black hover:text-[#ff914d] transition-all duration-300 ease-in-out">
                  <a
                    className=" block py-2 px-5 hover:bg-gray-600"
                    href="/#aboutus"
                  >
                    Über Uns
                  </a>
                </li>
                <li className="body-text text-black">
                  <a
                    className=" block py-2 px-5 hover:bg-gray-600"
                    href="/was-ist-aikido"
                  >
                    Was Ist Aikido
                  </a>
                </li>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-0.5 left-[60%] p-2 rounded-md hover:bg-gray-600 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* ... add more links as required ... */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
