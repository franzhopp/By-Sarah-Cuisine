import { useEffect, useState } from "react";
import ImageTitle from "../../assets/title-services.png";
import Image from "../../assets/logo-bsc.png";
import ImageMobile from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { MdOutlineEditNote, MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../Contact/title-contact.jsx";
import "../Section/section.jsx";

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
    <div
      loading="lazy"
      className="image-navbar-pages pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500"
    >
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
                  <ul className="absolute w-28 py-4 hidden group-hover:block bg-white shadow-md rounded-md">
                    {pages.map((page, index) => (
                      <li key={index}>
                        <NavLink
                          to={page.link}
                          onMouseEnter={handleMouseEnterSubmenu}
                          onMouseLeave={handleMouseLeaveParent}
                          className="block py-2 text-pink"
                        >
                          <p>{page.name}</p>
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <NavLink
                        to="/services"
                        href="services"
                        className="underline font-extrabold text-pink"
                      >
                        Tous les services
                      </NavLink>
                    </li>
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
            <NavLink
              to="/devisgratuit"
              className="bg-f3dbc3 mr-4 shadow-md px-6 py-2 border rounded-3xl text-white md:block md:absolute md:right-0 hover:bg-e9c2c2"
            >
              <p className="font-extrabold">DEVIS GRATUIT</p>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Navigation mobile */}
      <nav
        className="fixed w-full font-sans-serif text-center top-0 left-0 shadow-md xl:hidden bg-white z-max "
      >
        {/* 2 items */}
        <div className="px-4 h-28 flex items-center justify-between">
          <NavLink to="/">
            <img className="w-44 mb-2" src={ImageMobile} alt="Icône de Sarah" />
          </NavLink>

          <div className="mr-2">
            <button
              onClick={toggleMenuMobile}
              className={`icon-toggle bg-e9c2c2 border border-white rounded-3xl p-3 inline-flex items-center justify-center transition-transform transform hover:scale-110 ${
                isRotated ? " -rotate-180 " : ""
              }`}
            >
              {isRotated ? (
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
          } p-2 border-t border-t-efefef transform transition-transform duration-300 ease-in-out`}
        >
          <div id="navlinks">
            <li>
              <NavLink
                to="/"
                // onClick={() => {
                //   window.location.href = "/";
                //   window.scrollTo(0, 0);
                // }}
                className="text-black mt-3 block px-3 py-2 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                href="about"
                // onClick={() => {
                //   {
                //     SectionToScrollAbout;
                //   }
                //   window.location.href = "/";
                //   window.scrollTo(0, 0);
                // }}
                // onClick={SectionToScrollAbout}
                className="text-black block px-3 py-2 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                À propos
              </NavLink>
            </li>

            <li className="block py-2 rounded-md text-base font-extrabold translate-x-2 duration-100">
              <button onClick={toggleSousListsMenu}>
                <div className="flex items-center justify-between">
                  <div className="text-black pr-4">Services</div>{" "}
                  <MdOutlineKeyboardArrowDown />
                </div>
              </button>

              <div id="navlinks">
                <ul
                  id="navlinks"
                  className={`toggle-menu ${
                    showSousListsMenu ? "block" : "hidden"
                  } p-2 pt-2 pr-5`}
                >
                  {pages.map((page, index) => (
                    <li key={index}>
                      <NavLink
                        // onClick={() => {
                        //   window.location.href = "/";
                        //   window.scrollTo(0, 0);
                        // }}
                        to={page.link}
                      >
                        <p className="text-pink mt-2 p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300">
                          {page.name}
                        </p>
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/services"
                      href="services"
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
                href="contact"
                // onClick={() => {
                //   window.location.href = "/";
                //   window.scrollTo(0, 0);
                // }}
                className="text-black p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/devisgratuit"
                onClick={closeMobileMenu}
                // onClick={() => {
                //   {
                //     closeMobileMenu;
                //   }
                //   window.location.href = "/devisgratuit";
                //   window.scrollTo(0, 0);
                // }}
                className="text-black mb-3 p-2 block px-3 rounded-md text-base font-extrabold hover:bg-f3dbc3 hover:text-white transition duration-300"
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
            data-aos="fade-right"
            src={ImageTitle}
            alt="Image name"
            className="px-16 mt-14 mb-12 sm:mb-10 sm:mt-4"
          />
        </div>
        <div className="px-12 text-white text-lg sm:text-2xl  text-center font-sans-serif font-extrabold">
          Un devis sur-mesure ? Pour préparer un évènement, c'est par ici.
          <div className="mt-5 flex justify-center">
            <NavLink
              to="/devisgratuit"
              // onClick={() => {
              //   window.location.href = "/devisgratuit";
              //   window.scrollTo(0, 0);
              // }}
              href="http://by-sarah-cuisine.netlify.app/devis-gratuit"
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
