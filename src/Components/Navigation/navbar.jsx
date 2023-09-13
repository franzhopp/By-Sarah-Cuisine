import { useEffect, useState } from "react";
import Homepage from "../Homepage/homepage";
import { NavLink } from "react-router-dom";
import DarkLightThemes from "../../hook/useTheme";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import Image from "../../assets/haaat-1.png";
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
    <div className="image-home-by-sarah-cuisine pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500">
      <nav
        className={`${
          scrollNavbar ? " bg-white " : ""
        } fixed bg-transparent transition duration-300 ease-in-out w-full top-0 left-0 shadow-md z-max`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-24">
            <div className="md:left-0 md:inline md:absolute">
              <NavLink href="/" className="text-gray-900 text-lg font-semibold">
                {/* <img
                  className="w-full h-24 pt-2"
                  src={Image}
                  alt="Icône de Sarah"
                /> */}
                {/* <p>Logo</p> */}
              </NavLink>
            </div>
            <div className="flex items-center">
              <NavLink
                to="/"
                className={`${
                  scrollNavbar ? "text-pink " : ""
                }  text-white hover:text-color-beige-pastel px-6 py-2 text-base font-extrabold uppercase`}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/"
                href="about"
                onClick={SectionToScrollAbout}
                className={`${
                  scrollNavbar ? "text-pink " : ""
                }  text-white hover:text-color-beige-pastel px-6 py-2 text-base font-extrabold uppercase`}
              >
                À propos
              </NavLink>
              <NavLink
                to="/nos-services"
                className={`${
                  scrollNavbar ? "text-pink " : ""
                }  text-white hover:text-color-beige-pastel px-6 py-2 text-base font-extrabold uppercase`}
              >
                <li className="relative group list-none">
                  <NavLink
                    to="/nos-services"
                    className="block px-3 py-2 rounded-md text-base font-extrabold hover:text-color-beige-pastel"
                  >
                    <p className="uppercase">Services</p>
                  </NavLink>

                  {/* Sous-liste */}
                  <ul className="absolute hidden group-hover:block bg-bgcolor-white-pastel border border-gray-300 mt-2 py-2 rounded-md">
                    <li>
                      <NavLink
                        to="/plats"
                        onMouseEnter={handleMouseEnterSubmenu}
                        onMouseLeave={handleMouseLeaveParent}
                        className="block px-4 py-2 hover:text-color-beige-pastel"
                      >
                        Plats
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/desserts"
                        className="block px-4 py-2 hover:text-color-beige-pastel"
                      >
                        Desserts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/events"
                        className="block px-4 py-2 hover:text-color-beige-pastel"
                      >
                        Évènements
                      </NavLink>
                    </li>
                    <li>
                      <a
                        to="/events"
                        className="block px-4 py-2 hover:text-color-beige-pastel underline"
                      >
                        Tous les services
                      </a>
                    </li>
                  </ul>
                </li>
              </NavLink>

              <NavLink
                to="/"
                href="contact"
                onClick={SectionToScroll}
                className={`${
                  scrollNavbar ? "text-pink " : ""
                }  text-white hover:text-color-beige-pastel px-6 py-2 text-base font-extrabold uppercase`}
              >
                Contact
              </NavLink>
              {/* <NavLink
                to="/devis-gratuit"
                className="text-color-white-pastel hover:text-color-beige-pastel px-4 py-2 rounded-md text-base font-extrabold uppercase"
              >
                Devis gratuit
              </NavLink> */}
              {/* <DarkLightThemes className="hidden sm:block test" /> */}
            </div>

            <a
              href="#"
              className="bg-f3dbc3 mr-4 shadow-md px-6 py-2 border rounded-3xl text-white md:block md:absolute md:right-0"
            >
              <p className="font-extrabold">DEVIS GRATUIT</p>
            </a>
          </div>
        </div>
      </nav>

      {/* Navigation mobile */}
      <nav className="fixed w-full top-0 left-0 shadow-md xl:hidden bg-white z-max">
        {/* 2 items */}
        <div className="px-5 h-24 flex items-center justify-between">
          <a href="">
            {/* <img className="w-full h-24 pt-2" src={Image} alt="Icône de Sarah" /> */}
          </a>

          <div className="-mr-2">
            <button
              onClick={toggleMenuMobile}
              className="icon-toggle bg-e9c2c2 border border-white rounded-md p-2 inline-flex items-center justify-center ring-1 ring-black ring-opacity-20"
            >
              <HiOutlineMenuAlt1 className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        {/* end 2 items */}

        <ul className={`toggle-menu ${toggleMenu ? "block" : "hidden"} p-2`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-extrabold text-color-white-pastel hover:text-color-beige-pastel"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              href="about"
              onClick={SectionToScrollAbout}
              className="block px-3 py-2 rounded-md text-base font-extrabold  text-color-white-pastel hover:text-color-beige-pastel"
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-services"
              className="block px-1 py-2 rounded-md text-base font-extrabold  text-color-white-pastel translate-x-2 duration-100"
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
                  <NavLink
                    to="/plats"
                    className="hover:text-color-beige-pastel"
                  >
                    Plats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/desserts"
                    className="hover:text-color-beige-pastel"
                  >
                    Desserts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/events"
                    className="hover:text-color-beige-pastel"
                  >
                    Évènements
                  </NavLink>
                </li>
                <li>
                  <a
                    to="/events"
                    className=" hover:text-color-beige-pastel underline"
                  >
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
              className="block px-3 py-2 rounded-md text-base font-extrabold  text-color-white-pastel hover:text-color-beige-pastel"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-valeurs"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-extrabold  text-color-white-pastel hover:text-color-beige-pastel"
            >
              Nos valeurs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devis-gratuit"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-extrabold  text-color-white-pastel hover:text-color-beige-pastel"
            >
              Devis gratuit
            </NavLink>
          </li>
          <li>
            <div className="ml-2 mb-5 mt-5">
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
