import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ModalNewletter from "../Modal/modal-newletter.jsx";
import { useState } from "react";
import ImgFruits from "../../assets/fruits1.png";
import ImgDesserts from "../../assets/desserts1.png";
import ImgPieces from "../../assets/piece1.png";
import ImgCharcuterie from "../../assets/charcuterie1.png";

const Cards = () => {
  const [openSearch, setSearchQuery] = useState("");
  const [openModel, setOpenModel] = useState(false);

  return (
    <section className="bg-pink pt-12 pb-12 mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-sans-recursive text-center">
          Les formules
        </h1>
        <div className="mt-5 text-base text-white text-center font-sans-serif font-extrabold">
          Différentes formules pour de grandes variétés culinaires chez by Sarah
          cuisine.
        </div>
        <div className="mt-5 text-base text-white text-center font-sans-serif">
          Savoir plus précisément tous les services du traiteur,{" "}
          <NavLink
            to="/services"
            onClick={() => {
              window.location.href = "/services";
              window.scrollTo(0, 0);
            }}
            className="underline font-extrabold"
          >
            cliquez sur ce lien
          </NavLink>
          .
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          {/* Step 1 */}
          <div className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img src={ImgFruits} alt="Image Fruits" className="rounded-xl" />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Plateaux de fruit
              </div>
              <p className="text-black text-justify mt-2">
                Égayez vos moments spéciaux en famille, lors de mariages, de
                dîners romantiques, grâce à de magnifiques plateaux de fruit.
              </p>
              {/* <p className="mt-6">
                <span className="text-black text-4xl">40€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p> */}
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img src={ImgDesserts} alt="Image Desserts" className="rounded-xl" />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Desserts
              </div>
              <p className="text-black text-justify mt-2">
                Découvrez la sélection de desserts pour égayer vos moments en
                famille, vos mariages, avec de superbes boîtes à desserts.
              </p>
              {/* <p className="mt-6">
                <span className="text-black text-4xl">20€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p> */}
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>

          {/* Step 3 */}
          <div
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-center"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img src={ImgPieces} alt="Image Pièces" className="rounded-xl" />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Apéritifs 
              </div>
              <p className="text-black text-justify mt-2">
                Vous souhaitez avoir un brush pour accompagner vos moments,
                découvrez la sélection que le traiteur propose.
              </p>
              {/* <p className="mt-6">
                <span className="text-black text-4xl">10€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p> */}
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-center"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img src={ImgCharcuterie} alt="Image Charcuterie" className="rounded-xl" />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Charcuterie
              </div>
              <p className="text-black text-justify mt-2">
                Vous souhaitez avoir un brush pour accompagner vos moments,
                découvrez la sélection que le traiteur propose.
              </p>
              {/* <p className="mt-6">
                <span className="text-black text-4xl">10€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p> */}
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-12 text-base text-white text-center font-sans-serif font-extrabold">
          En savoir davantage sur toutes les offres et possibilité de réduction
          en vous inscrivant à la newletter de Sarah !
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => {
                setOpenModel(true);
              }}
              className="bg-f3dbc3 text-white shadow-md px-6 py-2 border rounded-3xl transition-transform transform hover:scale-105"
            >
              <p className="flex flex-row font-extrabold">
                {`Je m'inscris`}
                <MdOutlineEditNote className="ml-2 mt-1" />
              </p>
            </button>
          </div>
          <div className="flex justify-center">
            {openModel && (
              <ModalNewletter
                closeModal={setOpenModel}
                searchQuery={setSearchQuery}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
