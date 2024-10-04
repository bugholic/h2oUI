"use client";

import Image from "next/image";
import logo from "../../../assets/logo/h2oLogo.svg";
import menu from "../../../assets/icons/menu.svg";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import { setInterval } from "timers/promises";
import { setTimeout } from "timers";

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
        <ul className="items-center hidden sm:bg-transparent mx-3 w-full justify-center lg:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/"> Who We Are </Link>
          </li>
          <li>
            <Link href="/"> Market Applicaions </Link>
          </li>
          <li>
            <Link href="/"> About Us </Link>
          </li>
          <li>
            <Link href="/"> How It Works</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

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
            <ul className="navList items-center mx-3 w-full justify-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/"> Who We Are </Link>
              </li>
              <li>
                <Link href="/"> Market Applicaions </Link>
              </li>
              <li>
                <Link href="/"> About Us </Link>
              </li>
              <li>
                <Link href="/"> How It Works</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
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
