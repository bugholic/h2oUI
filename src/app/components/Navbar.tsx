"use client";

import Image from "next/image";
import logo from "../../../assets/logo/h2oLogo.svg";
import menu from "../../../assets/icons/menu.svg";
import Button from "./Button";
import Link from "next/link";
import { useRef, useState } from "react";

interface NavbarProps {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  informationRef: React.RefObject<HTMLDivElement>;
  technologyRef: React.RefObject<HTMLDivElement>;
  howItWorksRef: React.RefObject<HTMLDivElement>;
  marketApplicationsRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({
  heroRef,
  aboutRef,
  informationRef,
  technologyRef,
  howItWorksRef,
  marketApplicationsRef,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };
  return (
    <>
      <nav className="flex w-full mt-5">
        <Link href="/">
          <Image alt="H2O" src={logo} width={100} />
        </Link>
        <div className="items-center hidden sm:bg-transparent mx-3 w-full justify-center lg:flex">
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(informationRef);
              }}
            >
              Who We Are
            </Link>
          </span>
          <span>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(marketApplicationsRef);
              }}
            >
              Market Applicaions
            </Link>
          </span>
          <span>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(aboutRef);
              }}
            >
              About Us
            </Link>
          </span>
          <span>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(howItWorksRef);
              }}
            >
              How It Works
            </Link>
          </span>
          <span>
            <Link href="/contact-us">Contact Us</Link>
          </span>
        </div>
        <div className="hidden lg:block">
          <Link href={"/contact-us"}>
            <Button
              bgcolor="bg-blue-600"
              textcolor="text-white"
              action="Contact Us"
            />
          </Link>
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
            <div className="navList flex flex-col leading-6 items-center mx-3 w-full justify-center">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(informationRef);
                  }}
                >
                  Who We Are
                </Link>
              </span>
              <span>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(marketApplicationsRef);
                  }}
                >
                  Market Applicaions
                </Link>
              </span>
              <span>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(aboutRef);
                  }}
                >
                  About Us
                </Link>
              </span>
              <span>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(howItWorksRef);
                  }}
                >
                  How It Works
                </Link>
              </span>
              <span>
                <Link href="/contact-us">Contact Us</Link>
              </span>

              <Button
                bgcolor="bg-blue-600"
                textcolor="text-white"
                action="Let's Get Started"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
