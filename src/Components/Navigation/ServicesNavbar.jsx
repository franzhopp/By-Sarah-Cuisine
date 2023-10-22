import { useEffect, useState } from "react";
import ImageTitle from "../../assets/title-services.png";
import Image from "../../assets/logo-bsc.png";
import ImageMobile from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdOutlineEditNote, MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../Contact/TitleContact.jsx";
import "../Section/BaseSection.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const pages = [
  { link: "/services", name: "Apéritifs" },
  { link: "/services", name: "Plats" },
  { link: "/services", name: "Desserts" },
  { link: "/services", name: "Évènements" },
];

const NavbarServices = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [changeMenuNavbar, setChangeMenuNavbar] = useState();
  const [isRotated, setIsRotated] = useState(false);

  // Fonctionnalité du toggle de la liste/navbar :
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setChangeMenuNavbar(!changeMenuNavbar);
    setIsRotated(!isRotated);
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
    AOS.init();
    AOS.refresh();
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
  }, [isRotated, showSousListsMenu]);

  return (
    <div
      loading="lazy"
      className="image-navbar-pages pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500"
    >
      <nav
        className={`${
          scrollNavbar ? "bg-white" : ""
        } fixed font-sans-serif bg-transparent transition duration-300 ease-in-out w-full top-0 left-0 shadow-md z-max`}
      >
        <div className="container mx-auto px-4 sm:px-3 lg:px-8">
          <div className="flex items-center justify-center h-24">
            <div className="md:left-0 md:inline md:absolute">
              <NavLink to="/">
                <img className="mt-10" src={Image} alt="Icône de Sarah" />
              </NavLink>
            </div>

            <div className="flex items-center">
              <NavLink
                to="/"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } px-3 py-2 text-base font-extrabold uppercase`}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                }  px-4 py-2 text-base font-extrabold uppercase`}
              >
                À propos
              </NavLink>
              <NavLink
                to="/services"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } py-2 text-base font-extrabold`}
              >
                <li className="relative group list-none text-center">
                  <NavLink
                    to="/services"
                    className="block px-3 py-2 rounded-md font-extrabold"
                  >
                    <p className="uppercase">Services</p>
                  </NavLink>
                  <div className="flex justify-center">
                    <ul className="absolute w-32 py-5 px-5 hidden group-hover:block bg-white shadow-md rounded-md">
                      {pages.map((page, index) => (
                        <li key={index}>
                          <NavLink
                            to={page.link}
                            onMouseEnter={handleMouseEnterSubmenu}
                            onMouseLeave={handleMouseLeaveParent}
                            className="block py-1 text-pink"
                          >
                            <p>{page.name}</p>
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <NavLink
                          to="/services"
                          className="underline font-extrabold text-pink"
                        >
                          Tous les services
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </NavLink>

              <NavLink
                to="/"
                className={`${
                  scrollNavbar ? "text-pink" : "text-white"
                } px-4 py-2 text-base font-extrabold uppercase`}
              >
                Contact
              </NavLink>
            </div>
            <NavLink
              to="/devis"
              className="bg-f3dbc3 mr-4 shadow-md px-6 py-2 border rounded-3xl text-white md:block md:absolute md:right-0 hover:bg-e9c2c2"
            >
              <p className="font-extrabold">DEVIS GRATUIT</p>
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="fixed w-full font-sans-serif text-center top-0 left-0 shadow-md xl:hidden bg-white z-max ">
        <div className="px-5 h-28 flex items-center justify-between">
          <NavLink to="/">
            <img className="w-44 mb-2" src={ImageMobile} alt="Icône de Sarah" />
          </NavLink>

          <div>
            <button
              onClick={toggleMenuMobile}
              className={`icon-toggle bg-e9c2c2 rounded-full p-5 inline-flex items-center justify-center transition-transform transform hover:scale-110 ${
                isRotated ? "-rotate-180" : ""
              }`}
            >
              {isRotated ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_279_14)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.331604 19.9361L7.76772 12.5L0.331604 5.06386C-0.109884 4.62238 -0.109884 3.89809 0.331604 3.4566L3.4566 0.331604C3.89809 -0.109884 4.62238 -0.109884 5.06386 0.331604L12.5 7.76772L19.9361 0.331604C20.3776 -0.109884 21.1019 -0.109884 21.5434 0.331604L24.6684 3.4566C25.1098 3.89809 25.1098 4.62238 24.6684 5.06386L17.2322 12.5L24.6684 19.9361C25.1098 20.3776 25.1098 21.1019 24.6684 21.5434L21.5434 24.6684C21.1019 25.1098 20.3776 25.1098 19.9361 24.6684L12.5 17.2322L5.06386 24.6684C4.62238 25.1098 3.89809 25.1098 3.4566 24.6684L0.331604 21.5434C-0.109884 21.1019 -0.109884 20.3776 0.331604 19.9361Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_279_14">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <rect
                    y="8.99109"
                    width="25"
                    height="7.01821"
                    rx="2"
                    fill="white"
                  />
                  <rect width="25" height="7.01821" rx="2" fill="white" />
                  <rect
                    y="17.9818"
                    width="25"
                    height="7.01821"
                    rx="2"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <ul
          data-aos="fade-in"
          className={`toggle-menu ${
            isRotated ? "block" : "hidden"
          } p-2 border-t border-t-efefef transform transition-transform duration-300 ease-in-out`}
        >
          <div data-aos="fade-in">
            <li>
              <NavLink
                to="/"
                className="text-black mt-3 block px-3 py-2 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-black block px-3 py-2 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                À propos
              </NavLink>
            </li>

            <li className="block py-2 rounded-md text-base font-extrabold translate-x-2 duration-100">
              <button onClick={toggleSousListsMenu}>
                <div className="flex items-center justify-between">
                  <div className="text-black pr-4">Services</div>
                  <MdOutlineKeyboardArrowDown className="text-black" />
                </div>
              </button>

              <div data-aos="fade-in">
                <ul
                  data-aos="fade-in"
                  className={`toggle-menu ${
                    showSousListsMenu ? "block" : "hidden"
                  } p-2 pt-2 pr-5`}
                >
                  {pages.map((page, index) => (
                    <li key={index}>
                      <NavLink to={page.link}>
                        <p className="text-pink mt-2 p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300">
                          {page.name}
                        </p>
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/services"
                      className="underline text-pink p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
                    >
                      Tous les services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="/"
                className="text-black p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/devis"
                onClick={closeMobileMenu}
                className="text-black mb-3 p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white"
              >
                Devis gratuit
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <section>
        <div className="flex justify-center pt-32  px-4 sm:pt-32">
          <img
            data-aos="fade-down-left"
            src={ImageTitle}
            alt="Image name"
            className="px-16 mt-14 mb-12 sm:mb-10 sm:mt-4"
          />
        </div>
        <div className="px-12 text-white text-lg sm:text-2xl  text-center font-sans-serif font-extrabold">
          Un devis sur-mesure ? Pour préparer un évènement, c'est par ici.
          <div className="mt-5 flex justify-center">
            <NavLink
              to="/devis"
              className="bg-e9c2c2 shadow-md px-6 py-2 border rounded-3xl text-white hover:bg-f3dbc3"
            >
              <p className="flex flex-row font-extrabold">
                Devis gratuit <MdOutlineEditNote className="ml-2 mt-1" />
              </p>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavbarServices;
