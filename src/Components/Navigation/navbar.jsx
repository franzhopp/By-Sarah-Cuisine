import { useEffect, useState } from "react";
import Homepage from "../Homepage/homepage";
import { NavLink } from "react-router-dom";
import DarkLightThemes from "../../hook/useTheme";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../Contact/contact.jsx";
import "../Section/section.jsx";

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);

  // Fonctionnalité du toggle de la liste/navbar :
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
  };

  // Fonctionnalité de la sous-liste/navbar pour les serviceeees :
  const toggleSousListsMenu = () => {
    setShowSousListsMenu(!showSousListsMenu);
  };

  const handleMouseEnterSubmenu = () => {
    setIsMouseOnSubmenu(true);
  };

  const closeSubmenuWithDelay = () => {
    setTimeout(() => {
      setShowSousListsMenu(false);
    }, 500);
  };

  const handleMouseLeaveParent = () => {
    if (!isMouseOnSubmenu) {
      closeSubmenuWithDelay();
    }
  };

  const SectionToScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SectionToScrollAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500">
      <nav
        className={`${
          scrollNavbar ? "bg-white" : ""
        } bg-transparent transition duration-300 ease-in-out fixed w-full top-0 left-0 shadow-md`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <NavLink href="/" className="text-gray-900 text-lg font-semibold">
                By_sarah_cuisine
              </NavLink>
            </div>
            <div className="flex items-center">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 text-base font-extrabold uppercase"
              >
                Accueil
              </NavLink>
              <NavLink
                to="/"
                href="about"
                onClick={SectionToScrollAbout}
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-base font-extrabold uppercase"
              >
                À propos
              </NavLink>
              <NavLink
                to="/nos-services"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-base font-extrabold"
              >
                <li className="relative group list-none">
                  <NavLink
                    to="/nos-services"
                    className="block px-3 py-2 rounded-md text-base font-extrabold hover:text-blue-400"
                  >
                    <p className="uppercase">Services</p>
                  </NavLink>

                  {/* Sous-liste */}
                  <ul className="absolute hidden group-hover:block bg-white border border-gray-300 mt-2 py-2 rounded-md">
                    <li>
                      <NavLink
                        to="/plats"
                        onMouseEnter={handleMouseEnterSubmenu}
                        onMouseLeave={handleMouseLeaveParent}
                        className="block px-4 py-2 hover:text-blue-400"
                      >
                        Plats
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/desserts"
                        className="block px-4 py-2 hover:text-blue-400"
                      >
                        Desserts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/events"
                        className="block px-4 py-2 hover:text-blue-400"
                      >
                        Évènements
                      </NavLink>
                    </li>
                    <li>
                      <a
                        to="/events"
                        className="block px-4 py-2 hover:text-blue-400 underline"
                      >
                        Tous les services
                      </a>
                    </li>
                  </ul>
                </li>
              </NavLink>
              <NavLink
                to="/nos-valeurs"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-base font-extrabold uppercase"
              >
                Nos valeurs
              </NavLink>
              <NavLink
                to="/"
                href="contact"
                onClick={SectionToScroll}
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-base font-extrabold uppercase"
              >
                Contact
              </NavLink>
              <NavLink
                to="/devis-gratuit"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-base font-extrabold uppercase"
              >
                Devis gratuit
              </NavLink>
              <DarkLightThemes className="hidden sm:block" />
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation mobile */}
      <nav className="fixed w-full top-0 left-0 shadow-md md:hidden bg-white">
        {/* 2 items */}
        <div className="px-5 h-24 flex items-center justify-between">
          <a href="">
            {/* <img src="" alt="" className="h-8 w-auto sm:h-10" /> */}
            <p className="h-8 w-auto sm:h-10">By_sarah_cuisine</p>
          </a>

          <div className="-mr-2">
            <button
              onClick={toggleMenuMobile}
              className="icon-toggle bg-white rounded-md p-2 inline-flex items-center justify-center ring-1 ring-black ring-opacity-20"
            >
              <HiOutlineMenuAlt1 className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* end 2 items */}

        <ul className={`toggle-menu ${toggleMenu ? "block" : "hidden"} p-2`}>
          <li>
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              href="about"
              onClick={SectionToScrollAbout}
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-services"
              className="block px-1 py-2 rounded-md text-base font-extrabold text-black  translate-x-2 duration-100"
            >
              <button onClick={toggleSousListsMenu}>
                <div className="flex items-center justify-between">
                  <div className="pr-2">Services</div>{" "}
                  <MdOutlineKeyboardArrowDown />
                </div>
              </button>

              <ul
                className={`toggle-menu ${
                  showSousListsMenu ? "block" : "hidden"
                } p-2`}
              >
                <li>
                  <NavLink to="/plats" className="hover:text-blue-400">
                    Plats
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/desserts" className="hover:text-blue-400">
                    Desserts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" className="hover:text-blue-400">
                    Évènements
                  </NavLink>
                </li>
                <li>
                  <a to="/events" className=" hover:text-blue-400 underline">
                    Tous les services
                  </a>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              href="contact"
              onClick={SectionToScroll}
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-valeurs"
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Nos valeurs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devis-gratuit"
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Devis gratuit
            </NavLink>
          </li>
          <li>
            <div className="ml-2">
              <DarkLightThemes className="hidden sm:block" />
            </div>
          </li>
        </ul>
      </nav>

      <Homepage />
    </div>
  );
};

export default Navbar;
