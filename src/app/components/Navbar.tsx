"use client";

import Image from "next/image";
import logo from "../../../assets/logo/h2oLogo.svg";
import menu from "../../../assets/icons/menu.svg";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex w-full">
        <Link href="/">
          <Image alt="H2O" src={logo} width={100} />
        </Link>
        <div className="items-center hidden sm:bg-transparent mx-3 w-full justify-center lg:flex">
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="/"> Who We Are </Link>
          </span>
          <span>
            <Link href="/"> Market Applicaions </Link>
          </span>
          <span>
            <Link href="/"> About Us </Link>
          </span>
          <span>
            <Link href="/"> How It Works</Link>
          </span>
          <span>
            <Link href="/contact-us">Contact Us</Link>
          </span>
        </div>

        {/* Mobile navigation */}
        <div className="block ml-auto lg:hidden">
          <button
            onClick={handleMenuClick}
            className="bg-gray-300 rounded-full p-2 lg:hidden"
          >
            <Image src={menu} alt="menu" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <>
          <div className="flex flex-col">
            <div className="navList items-center mx-3 w-full justify-center">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span>
                <Link href="/"> Who We Are </Link>
              </span>
              <span>
                <Link href="/"> Market Applicaions </Link>
              </span>
              <span>
                <Link href="/"> About Us </Link>
              </span>
              <span>
                <Link href="/"> How It Works</Link>
              </span>
              <span>
                <Link href="/contact-us">Contact Us</Link>
              </span>
            </div>
            <Button
              bgcolor="bg-blue-600"
              textcolor="text-white"
              action="Let's Get Started"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
