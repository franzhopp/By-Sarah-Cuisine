import { useEffect, useState } from "react";
import Homepage from "../Homepage/homepage";
import Image from "../../assets/logo-bsc.png";
import { NavLink } from "react-router-dom";
import DarkLightThemes from "../../hook/useTheme";
import { TfiMenu } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../Contact/contact.jsx";
import "../Section/section.jsx";
// import CookieModal from "./modal-cookie.jsx";
// import Cookies from "js-cookie";

const pages = [
  { link: "/services", name: "Apéritifs" },
  { link: "/services", name: "Plats" },
  { link: "/services", name: "Desserts" },
  { link: "/services", name: "Tous les services" },
];

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [changeMenuNavbar, setChangeMenuNavbar] = useState();
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedCookie = Cookies.get("accept_cookie");
    if (!hasAcceptedCookie) {
      setCookieModalOpen(true);
    }
  }, []);

  // Fonctionnalité du toggle de la liste/navbar :
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setChangeMenuNavbar(!changeMenuNavbar);
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

  const closeMobileMenu = () => {
    setToggleMenu(false);
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
    const hasAcceptedCookie = Cookies.get("accept_cookie");
    if (!hasAcceptedCookie) {
      setCookieModalOpen(true);
    }

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

  const handleAcceptCookie = () => {
    Cookies.set("accept_cookie", "true", { expires: 365 }); // Marquez l'acceptation du cookie
    setCookieModalOpen(false);
  };

  return (
    <div className="image-home-by-sarah-cuisine pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500">
      <nav
        className={`${
          scrollNavbar ? "bg-white" : ""
        } font-sans-serif fixed bg-transparent transition duration-300 ease-in-out w-full top-0 left-0 shadow-md z-max`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-24">
            <div className="md:left-0 md:inline md:absolute">
              <NavLink href="/" className="text-gray-900 text-lg font-semibold">
                <img className="mt-10" src={Image} alt="Icône de Sarah" />
              </NavLink>
            </div>
            <div className="flex items-center">
              <NavLink
                to="/"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } px-6 py-2 text-base font-extrabold uppercase`}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/"
                href="about"
                onClick={SectionToScrollAbout}
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                }  px-6 py-2 text-base font-extrabold uppercase`}
              >
                À propos
              </NavLink>
              <NavLink
                to="/services"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                }  px-6 py-2 text-base font-extrabold`}
              >
                <li className="relative group list-none text-center">
                  <NavLink
                    to="/services"
                    className="block px-3 py-2 rounded-md font-extrabold"
                  >
                    <p className="uppercase">Services</p>
                  </NavLink>

                  {/* Sous-liste */}
                  <ul className="absolute w-28 hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md">
                    {pages.map((page, index) => (
                      <li key={index}>
                        <NavLink
                          to={page.link}
                          onMouseEnter={handleMouseEnterSubmenu}
                          onMouseLeave={handleMouseLeaveParent}
                          className="block py-2 text-pink"
                        >
                          <p className="">{page.name}</p>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </NavLink>

              <NavLink
                to="/"
                href="contact"
                onClick={SectionToScroll}
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } px-6 py-2 text-base font-extrabold uppercase`}
              >
                Contact
              </NavLink>
            </div>

            <div className="ml-2 mb-5 mt-5">
              <DarkLightThemes
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } hidden sm:block`}
              />
            </div>

            <NavLink
              to="/devis-gratuit"
              className="bg-f3dbc3 mr-4 shadow-md px-6 py-2 border rounded-3xl text-white md:block md:absolute md:right-0"
            >
              <p className="font-extrabold">DEVIS GRATUIT</p>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Navigation mobile */}
      <nav className="fixed w-full font-sans-serif uppercase text-center top-0 left-0 shadow-md xl:hidden bg-white z-max">
        {/* 2 items */}
        <div className="px-4 h-28 flex items-center justify-between">
          <a href="">
            <img className="w-28 mt-2" src={Image} alt="Icône de Sarah" />
          </a>

          <div className="mr-2">
            <button
              onClick={toggleMenuMobile}
              className={`icon-toggle bg-e9c2c2 border border-white rounded-lg p-3 inline-flex items-center justify-center transition-transform transform hover:scale-110`}
            >
              {changeMenuNavbar ? (
                <ImCross className="text-white" />
              ) : (
                <TfiMenu className="text-white" />
              )}
            </button>
          </div>
        </div>
        {/* end 2 items */}

        <ul
          className={`toggle-menu ${
            toggleMenu ? "block" : "hidden"
          } p-2 border-t border-t-gray transform transition-transform duration-300 ease-in-out`}
        >
          <li>
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="text-black block px-3 py-2 rounded-md text-base font-extrabold"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              href="about"
              onClick={SectionToScrollAbout}
              className="text-black block px-3 py-2 rounded-md text-base font-extrabold"
            >
              À propos
            </NavLink>
          </li>

          <li className="block py-2 rounded-md text-base font-extrabold translate-x-2 duration-100">
            <button onClick={toggleSousListsMenu}>
              <div className="flex items-center justify-between">
                <div className="text-black pr-4 uppercase">Services</div>{" "}
                <MdOutlineKeyboardArrowDown />
              </div>
            </button>

            <ul
              className={`toggle-menu ${
                showSousListsMenu ? "block" : "hidden"
              } p-2 pt-2`}
            >
              {pages.map((page, index) => (
                <li key={index}>
                  <NavLink
                    to={page.link}
                    onMouseEnter={handleMouseEnterSubmenu}
                    onMouseLeave={handleMouseLeaveParent}
                    className="block py-2 text-pink"
                  >
                    <p className="text-center">{page.name}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink
              to="/"
              href="contact"
              onClick={SectionToScroll}
              className="text-black block px-3 py-2 rounded-md text-base font-extrabold"
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/devis-gratuit"
              onClick={closeMobileMenu}
              className="text-black block px-3 py-2 rounded-md text-base font-extrabold"
            >
              Devis gratuit
            </NavLink>
          </li>
          <li>
            <div className="ml-2 mb-5 mt-3">
              <DarkLightThemes className="hidden sm:block" />
            </div>
          </li>
        </ul>
      </nav>
      {/* <CookieModal
        isOpen={isCookieModalOpen}
        onRequestClose={() => setCookieModalOpen(false)}
        onAccept={handleAcceptCookie}
      /> */}
      <Homepage />
    </div>
  );
};

export default Navbar;
