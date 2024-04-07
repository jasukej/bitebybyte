import React, { useState } from "react";
import Link from "next/link";
import logoutForm from "./logoutForm";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="z-[999] absolute">
      <div className="bg-primary w-full h-[4.5rem] sm:h-[3.25rem]">
        {/* Hamburger */}
        <button
          className="z-10 fixed right-0 top-7 px-4 sm:px-6 sm:hidden"
          onClick={() => {
            console.log("Before clicking:", isNavOpen);
            setIsNavOpen(!isNavOpen);
            console.log("After clicking:", !isNavOpen);
          }}
        >
          {isNavOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Collapsible Menu */}
        {isNavOpen && (
          <nav className="flex fixed top-[4.5rem] left-0 w-full bg-white sm:hidden shadow-md">
            <ul className="flex flex-col items-center w-full pb-2">

              <li className="w-full text-center">
              <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/">Home</Link>
              </li>
              <li className="w-full text-center">
              <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/food-diary">Food Diary</Link>
              </li>
              <li className="w-full text-center">
              <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/forum">Forum</Link>
              </li>
              <li className="w-full text-center">
              <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/profile">Profile</Link>
              </li>

            </ul>
          </nav>
        )}

        <nav>
          <div className="flex-row gap-x-4 mx-8">
            <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/">Home</Link>
            <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/food-diary">Food Diary</Link>
            <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/forum">Forum</Link>
            <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/profile">Profile</Link>
            <Link className="block py-3 px-3 hover: text-accent-1 transition" href="/login">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
