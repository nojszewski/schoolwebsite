import { ChevronDown, GraduationCap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLinks } from "../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-40">
          <nav className="flex flex-col p-4">
            {HeaderLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <header
        className={`header shadow-sm fixed w-full z-50 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            <section className="flex items-center">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <span
                className={`ml-2 text-2xl font-semibold ${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 hover:cursor-pointer duration-200 transition-all`}
              >
                ZS1MM
              </span>
            </section>

            <nav className="hidden md:flex space-x-8">
              {HeaderLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-blue-600 transition-all duration-200`}
                >
                  {item.title}
                </Link>
              ))}

              <div
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => {
                  setIsDropdownOpen(false);
                  setIsSubDropdownOpen(false);
                }}
              >
                <button
                  className={`flex items-center ${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-blue-600`}
                >
                  <span>Item 5</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-opacity duration-200 ${
                    isDropdownOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Undergraduate
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Graduate
                  </a>

                  {/* Level 2 Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsSubDropdownOpen(true)}
                    onMouseLeave={() => setIsSubDropdownOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-blue-50">
                      <span>Special Programs</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>

                    <div
                      className={`absolute left-full top-0 w-48 bg-white rounded-lg shadow-lg py-2 transition-opacity duration-200 ${
                        isSubDropdownOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                      >
                        Summer School
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                      >
                        Exchange Programs
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                      >
                        Research Projects
                      </a>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Online Courses
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Professional Development
                  </a>
                </div>
              </div>

            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown
                className={`h-6 w-6 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
