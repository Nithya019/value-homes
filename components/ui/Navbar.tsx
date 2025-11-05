"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

export const Navbar = () => {
  const navItems = [
    { name: "about", viewName: "ABOUT US", href: "#" },
    {
      name: "services",
      viewName: "SERVICES",
      href: "#",
      subMenu: [
        { name: "kitchens", href: "/services/kitchen" },
        { name: "bathrooms", href: "/services/bathroom" },
        { name: "wholehouse", href: "/services/wholeHouse" },
        { name: "basements", href: "/services/basement" },
        { name: "cleaning", href: "/services/cleaning" },
      ],
    },
    { name: "projects", viewName: "PROJECTS", href: "#" },
    { name: "contact", viewName: "CONTACT US", href: "/contact" },
  ];
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // State for submenu
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const subMenu = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenu.current && !subMenu.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        navBg
          ? "bg-background py-2 bg-opacity-1 shadow-lg"
          : "bg-whitetransparent py-4 shadow-md"
      }`}
    >
      <div className="px-6 font-sans">
        <div className="flex justify-between items-center h-16 px-8 lg:px-20">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </Link>

          <div className="hidden lg:block">
            <div className="flex item-baseline space-x-8">
              {navItems.map((item) => {
                return (
                  <div key={item.name}>
                    {item.subMenu ? (
                      <div className="relative">
                        <Link
                          className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                          href={item.href}
                          onClick={() => toggleMenu(item.name)}
                        >
                          {item.viewName}
                        </Link>
                        {openMenu === item.name && (
                          <ul ref={subMenu} className="absolute left-0 mt-2 w-40 text-sm border-t-2 border-primary bg-white shadow-lg z-10 p-4 font-sans">
                            {item.subMenu?.map((submenu) => {
                              return (
                                <li key={submenu.name}>
                                  <Link
                                    href={submenu.href}
                                    className="block px-4 py-2 text-foreground hover:text-primary uppercase"
                                  >
                                    {submenu.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                        key={item.name}
                        href={item.href}
                      >
                        {item.viewName}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="visivle lg:hidden text-3xl text-gray-700 cursor-pointer"
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="visivle lg:hidden bg-background border-t border-gray-200 shadow-md mt-5">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
            {navItems.map((item) => {
              return (
                <div key={item.name}>
                  {item.subMenu ? (
                    <div>
                      <Link
                        className="hover:text-primary transition border-b border-gray-100 text-sm"
                        key={item.name}
                        href={item.href}
                        onClick={() => toggleMenu(item.name)}
                      >
                        {item.viewName}
                      </Link>
                      {openMenu === item.name && (
                        <div className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
                          {item.subMenu?.map((submenu) => {
                            return (
                              <div key={submenu.name} className="flex">
                                <IoIosArrowForward className="mt-0.5 pr-1 font-bold" />
                                <Link
                                  className="hover:text-primary transition border-b border-gray-100 text-sm uppercase"
                                  href={submenu.href}
                                >
                                  {submenu.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      className="hover:text-primary transition border-b border-gray-100 text-sm"
                      key={item.name}
                      href={item.href}
                    >
                      {item.viewName}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </nav>
  );
};
