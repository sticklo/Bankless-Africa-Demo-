import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asset/Images/logo.png";
import { Transition } from "@headlessui/react";

const EduNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute inset-x-0 top-0">
      <nav className="bg-black shadow-sm z-10 fixed w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-5 lg:mx-14 xl:mx-24 w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <div className="cursor-pointer w-40 h-11 md:w-56 md:h-16">
                  <Image src={logo} alt="bankless africa logo" className="" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex ml-0 space-x-14 md:space-x-7 xl:space-x-14 lg:ml-36">
                  <Link
                    href="/">
                    <a className="cursor-pointer text-white font-bold px-3 py-2 text-lg hover:bg-red-600 rounded-md">Home</a>
                  </Link>
                  <Link
                    href="/about">
                    <a className="cursor-pointer text-white font-bold px-3 py-2 text-lg hover:bg-red-600 rounded-md">About</a>
                  </Link>
                  <Link
                    href="/education">
                    <a className="cursor-pointer text-red-600 font-bold px-3 py-2 text-lg hover:font-black">Education</a>
                  </Link>
                  <Link
                    href="/updates">
                    <a className="cursor-pointer text-white font-bold px-3 py-2 text-lg hover:bg-red-600 rounded-md">Updates</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile responsiveness */}
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/">
                  <a className="cursor-pointer hover:bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                </Link>
                <Link
                  href="/about">
                  <a className="cursor-pointer hover:bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                </Link>
                <Link
                  href="/education">
                  <a className="cursor-pointer hover:bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium">Education</a>
                </Link>
                <Link
                  href="/updates">
                  <a className="cursor-pointer hover:bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium">Updates</a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default EduNav;