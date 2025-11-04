"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const Navbar = () => {
  const navItems = [
    { name: "ABOUT US", href: "#" },
    { name: "SERVICES", href: "#" },
    { name: "PROJECTS", href: "#" },
    { name: "THE RENO BLOG", href: "#" },
    { name: "CONTACT US", href: "/contact" },
    { name: "GET A QUOTE", href: "#" },
  ];
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        navBg
          ? "bg-background py-2 bg-opacity-1 shadow-lg"
          : "bg-whitetransparent py-4 shadow-md"
      }`}
    >
      <div className="px-6">
        <div className="flex justify-between lg:place-content-around items-center h-16">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </Link>

          <div className="hidden lg:block">
            <div className="flex item-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="visivle lg:hidden text-3xl text-gray-700 cursor-pointer"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="visivle lg:hidden bg-background border-t border-gray-200 shadow-md mt-5">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium text-end">
             {navItems.map((item) => (
                <Link
                  className="hover:text-primary transition border-b border-gray-100"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
          </nav>
        </div>
      )}
    </nav>
  );
};
