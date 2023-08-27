// import React from "react";
import Homepage from "../Homepage/homepage";
// import DarkLightThemes from "../../hook/useTheme";

// const Navbar = () => {
//   return (
//     <div className="homepage pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500">
//       <nav className="relative max-w-7xl mx-auto flex items-center justify-center">
//         <div className="hidden md:left-0 md:inline md:absolute">
//           <a href="">
//             <div className="ml-4 w-auto h-12 text-white">By_sarah_cuisine</div>
//           </a>
//         </div>

//         <ul className="hidden md:flex md:space-x-10">
//           <li>
//             <a
//               href=""
//               className="font-medium text-sm text-white hover:text-blue-900 uppercase"
//             >
//               Accueil
//             </a>
//           </li>
//           <li>
//             <a
//               href=""
//               className="font-medium text-sm text-white hover:text-blue-900 uppercase"
//             >
//               À propos
//             </a>
//           </li>
//           <li>
//             <div class="relative" data-te-dropdown-ref>
//               <button
//                 class="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 type="button"
//                 id="dropdownMenuButton1"
//                 data-te-dropdown-toggle-ref
//                 aria-expanded="false"
//                 data-te-ripple-init
//                 data-te-ripple-color="light"
//               >
//                 Dropdown button
//                 <span class="ml-2 w-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     class="h-5 w-5"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                       clip-rule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </button>
//               <ul
//                 class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
//                 aria-labelledby="dropdownMenuButton1"
//                 data-te-dropdown-menu-ref
//               >
//                 <li>
//                   <a
//                     class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
//                     href="#"
//                     data-te-dropdown-item-ref
//                   >
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
//                     href="#"
//                     data-te-dropdown-item-ref
//                   >
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
//                     href="#"
//                     data-te-dropdown-item-ref
//                   >
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <a
//               href=""
//               className="font-medium text-sm text-white hover:text-blue-900 uppercase"
//             >
//               Nos valeurs
//             </a>
//           </li>
//           <li>
//             <a
//               href=""
//               className="font-medium text-sm text-white hover:text-blue-900 uppercase"
//             >
//               Contact
//             </a>
//           </li>
//           <li>
//             <DarkLightThemes className="sm:hidden"/>
//           </li>
//         </ul>
//         <a
//           href=""
//           className="text-sm mr-4 shadow-md px-6 py-2 border font-medium rounded-md text-pink-500 bg-white hover:bg-gray-50 md:block md:absolute md:right-0 uppercase"
//         >
//           Me contacter
//         </a>
//       </nav>
//       <Homepage />
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DarkLightThemes from "../../hook/useTheme";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDesktopNavbar, setToggleDesktopNavbar] = useState(true);

  useEffect(() => {
    // Fonctionnalité du toggle de la navbar grande taille cachée en mobile :
    const handleResizeDesktopNavbar = () => {
      if (window.innerWidth <= 300) {
        setToggleDesktopNavbar(false);
      } else {
        setToggleDesktopNavbar(true);
      }
    };

    // Initialisation de la gestion de la navbar grande taille cachée en mobile :
    handleResizeDesktopNavbar();

    // Gestion de l'évènement du scroll :
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

  // Fonctionnalité du toggle de la liste/navbar :
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="homepage pt-6 pb-16 sm:pb-24 mb:min-h-650 min-h-500">
      {toggleDesktopNavbar && (
        <nav
          className={`${
            scrollNavbar ? "bg-white" : ""
          } bg-transparent transition duration-300 ease-in-out fixed w-full top-0 left-0 shadow-md`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-gray-900 text-lg font-semibold">
                  By_sarah_cuisine
                </a>
              </div>
              <div className="flex items-center">
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Accueil
                </NavLink>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  À propos
                </a>
                <NavLink
                  to="/nos-services"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/nos-valeurs"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Nos valeurs
                </NavLink>
                <NavLink
                  href="/"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Contact
                </NavLink>
                <div className="flex justify-center items-center">
                  <a
                    href=""
                    className="text-sm shadow-md px-5 py-2 border font-medium rounded-md text-pink-500 bg-white md:block md:absolute md:right-0 uppercase hover:bg-pink-500 hover:text-white"
                  >
                    Devis gratuit
                  </a>
                </div>
                <DarkLightThemes className="hidden sm:block" />
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Navigation mobile */}
      <nav className="fixed top-2 w-11/12 left-1/2 transform -translate-x-1/2 shadow-md ring-1 ring-black ring-black ring-opacity-5 p-1 md:hidden rounded-lg bg-white">
        {/* 2 items */}
        <div className="px-5 h-16 flex items-center justify-between">
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
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Nos valeurs
            </a>
          </li>
          <li>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-extrabold text-black hover:text-blue-400"
            >
              Devis gratuit
            </a>
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
