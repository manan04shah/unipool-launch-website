import React from "react";
import Link from "next/link";
import "../app/globals.css"


export default function Navbar() {
    return (
        <div className="nav-links w-full flex space-x-10 p-7 absolute top-0 pl-10 z-10 align-middle items-center h-[10vh]">
            <Link href="/">
                <h2 className="text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1">
                    Home
                </h2>
            </Link>
            <Link href="/about">
                <h2 className="text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1">
                    About
                </h2>
            </Link>
            <Link href="/download">
                <h2 className="text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1">
                    Download
                </h2>
            </Link>
            <Link href="/delete">
                <h2 className="text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1">
                    Delete
                </h2>
            </Link>
            {/* <Link href="/report">
                <h2 className="text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1">
                    Report a Bug
                </h2>
            </Link>
            <Link href="/contact">
                <h2 className="text-text-purple transition duration-300 hover:underline transform hover:-translate-y-1">
                    Contact Us
                </h2>
            </Link> */}
        </div>
    );
}
