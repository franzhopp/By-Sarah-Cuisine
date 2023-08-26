import React from "react";
import Homepage from "../Homepage/homepage";
import DarkLightThemes from "../../hook/useTheme";

const Navbar = () => {
  return (
    <div className="homepage pt-6 pb-16 min-h-500 sm:pb-24 mb:min-h-650 min-h-500">
      <nav className="max-w-7xl mx-auto relative flex items-center justify-center">
        <div className="hidden md:left-0 md:inline md:absolute">
          <a href="">
            <div className="ml-4 w-auto h-12 text-white">By_sarah_cuisine</div>
          </a>
        </div>

        <ul className="hidden md:flex md:space-x-10">
          <li>
            <a
              href=""
              className="font-medium text-sm text-white hover:text-blue-900 uppercase"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-sm text-white hover:text-blue-900 uppercase"
            >
              À propos
            </a>
          </li>
          <li>
            {/* <div class="relative" data-te-dropdown-ref>
              <button
                class="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                type="button"
                id="dropdownMenuButton1"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Dropdown button
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            <a
              href=""
              className="font-medium text-sm text-white hover:text-blue-900 uppercase"
            >
              Nos valeurs
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-sm text-white hover:text-blue-900 uppercase"
            >
              Contact
            </a>
          </li>
          <li>
            <DarkLightThemes className="sm:hidden"/>
          </li>
        </ul>
        <a
          href=""
          className="text-sm mr-4 shadow-md px-6 py-2 border font-medium rounded-md text-pink-500 bg-white hover:bg-gray-50 md:block md:absolute md:right-0 uppercase"
        >
          Me contacter
        </a>
      </nav>
      <Homepage />
    </div>
  );
};

export default Navbar;
