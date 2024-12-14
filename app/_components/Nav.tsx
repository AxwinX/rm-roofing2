"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full">
            {/* Top Bar */}
            <div className="bg-[#006800] flex justify-between items-center w-full h-14 px-4">
                {/* Left Side */}
                <div className="flex items-center">
                    <Link
                        href="tel:+1516-233-9506"
                        target="_blank"
                        className="mx-2 border-r-2 pr-4 text-white"
                    >
                        Mon-Fri 09:00-17:00
                    </Link>
                    <Link
                        href="tel:+1516-233-9506"
                        target="_blank"
                        className="mx-2 border-r-2 pr-4 text-white"
                    >
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        516-233-9506
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center">
                    <div className="mx-4">
                        <Link
                            rel="nofollow"
                            href="https://www.facebook.com/profile.php?id=61561068159882"
                            target="_blank"
                            className="text-white"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                    </div>
                    <div className="mx-4">
                        <Link
                            href="https://www.linkedin.com/in/ss-india-roofing-b10647317/"
                            target="_blank"
                            className="text-white"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </div>
                    <div className="mx-4">
                        <Link
                            href="https://wa.me/+918610486372"
                            target="_blank"
                            className="text-white"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </Link>
                    </div>
                    <div className="mx-4">
                        <Link
                            href="https://www.instagram.com/ssinidaroofing/"
                            target="_blank"
                            className="text-white"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-white">
                {/* Logo */}
                <Image src="/image/logo.png" alt="Logo" width={100} height={100} />

                {/* Hamburger Menu Button (Visible on Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="block md:hidden focus:outline-none"
                >
                    <div className="w-6 h-1 bg-red-400 mb-1"></div>
                    <div className="w-6 h-1 bg-red-400 mb-1"></div>
                    <div className="w-6 h-1 bg-red-400"></div>
                </button>

                {/* Links (Always Visible on Desktop) */}
                <div className="hidden md:flex space-x-6">
                    <Links />
                </div>
            </div>

            {/* Mobile Menu (Visible when toggled) */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden bg-white shadow-md mt-2 p-4`}
            >
                <Links />
            </div>
        </nav>
    );
}

function Links() {
    return (
        <div className="flex flex-col md:flex-row md:space-x-6">
            <Link href="/" className="py-2 hover:text-red-300">
                HOME
            </Link>
            <Link href="/about" className="py-2 hover:text-gray-300">
                ABOUT
            </Link>
            <Link href="/services" className="py-2 hover:text-gray-300">
                SERVICES
            </Link>
            <Link href="/gallery" className="py-2 hover:text-gray-300">
                GALLERY
            </Link>
            <Link href="/contact" className="py-2 hover:text-gray-300">
                CONTACT
            </Link>
        </div>
    );
}