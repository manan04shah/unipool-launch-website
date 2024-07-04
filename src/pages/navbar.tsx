"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../app/globals.css";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="w-full p-7 absolute top-0 z-20">
        <div className="flex justify-between items-center">
          <div className="text-text-purple text-xl font-bold">UniPool</div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-purple focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-10 font-bricolage">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/download" text="Download" />
            <NavLink href="/delete" text="Delete" />
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`md:hidden text-left bg-[#D8C0F6] bg-opacity-80 fixed top-0 h-dvh w-[40vw] left-0 py-5 z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <NavLink href="/" text="Home" mobile />
          <NavLink href="/about" text="About" mobile />
          <NavLink href="/download" text="Download" mobile />
          <NavLink href="/delete" text="Delete" mobile />
        </div>
      </nav>
    </>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
  mobile?: boolean;
}

function NavLink({ href, text, mobile }: NavLinkProps): JSX.Element {
  const baseClasses =
    "text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1";
  const mobileClasses = mobile ? "block py-2 px-4" : "";

  return (
    <Link href={href}>
      <h2 className={`${baseClasses} ${mobileClasses}`}>{text}</h2>
    </Link>
  );
}
