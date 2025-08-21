import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";

import './Header.css'
import { Redes } from "../Redes/Redes";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <section className="flex max-sm:h-14 min-sm:h-16 shadow-sm">
      <nav className="bg-white w-full max-sm:px-2 px-11 flex justify-between items-center max-sm:justify-between max-sm:relative">
        <Link className="logo-name" to="/inicio">
        <div className="logo flex items-center gap-3 px-3">
          <div className="w-full overflow-hidden flex justify-center items-center">
            <img className="w-[100%] h-14 min-sm:h-16 object-contain" src="/logo.webp" alt="" />
          </div>
        </div>
        </Link>
        <ul className={`menu-mobile ${isOpen ? "open" : "closed"}`}
        >
          <div className="header-menu min-sm:hidden max-sm:h-14 min-sm:h-16">
            <span className="text-xl"><img className="w-[70px] h-full object-cover" src="/logo.webp" alt="" /></span>
            <span onClick={toggleMenu} className="text-2xl"><IoClose /></span>
          </div>
          <div className="opciones min-sm:flex min-sm:gap-4 min-sm:h-full">
            <li className="item-li">
              <span className="icon min-sm:hidden"><FiHome /></span> 
  <NavLink
    to="/inicio"
    className={({ isActive }) =>
      isActive
        ? "text-blue-500 font-semibold" // estilos cuando está activo
        : "text-gray-700 font-semibold"
    }
    onClick={() => isOpen && toggleMenu()}
  >
    Home
  </NavLink>
            </li>
            <li className="item-li">
              <span className="icon min-sm:hidden"><FiInfo /></span>
                <NavLink
    to="/about-me"
    className={({ isActive }) =>
      isActive
        ? "text-blue-500 font-semibold"
        : "text-gray-700 font-semibold"
    }
    onClick={() => isOpen && toggleMenu()}
  >
    About Me
  </NavLink>
              </li>
            <li className="item-li">
              <span className="icon min-sm:hidden"><BsSuitcaseLg /> </span>
              
              <span>Blog</span>
              </li>
            <li className="item-li">
              <span className="icon min-sm:hidden"><IoMailUnreadOutline /></span>
  <NavLink
    to="/contacto"
    className={({ isActive }) =>
      isActive
        ? "text-blue-500 font-semibold"
        : "text-gray-700 font-semibold"
    }
    onClick={() => isOpen && toggleMenu()}
  >
    Contact
  </NavLink>
            </li>
          </div>
          <div className="min-sm:hidden redes flex justify-center items-center mt-1">
            < Redes className=""/>
          </div>
        </ul>
        <div className="menu px-3 min-sm:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </section>
    </>
  );
}