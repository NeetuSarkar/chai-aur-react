import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Neetu (3).png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-50- shadow sticky top-0 w-full z-50">
      <nav className="bg-slate-50 border-gray-600 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-200 hover:text-gray-300 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-3 py-2 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:block lg:flex lg:items-center w-full lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-slate-200" : "text-slate-300"
                    } border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-slate-200 lg:p-0`
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-slate-200" : "text-slate-300"
                    } border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-slate-200 lg:p-0`
                  }
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-slate-200" : "text-slate-300"
                    } border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-slate-200 lg:p-0`
                  }
                  onClick={toggleMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-slate-200" : "text-slate-300"
                    } border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-slate-200 lg:p-0`
                  }
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-slate-200" : "text-slate-300"
                    } border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-slate-200 lg:p-0`
                  }
                  onClick={toggleMenu}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
