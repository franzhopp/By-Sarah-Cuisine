import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ModalNewletter from "../Modal/ModalNewletter.jsx";
import { useState } from "react";
import ImgFruits from "../../assets/fruits1.png";
import ImgDesserts from "../../assets/desserts1.png";
import ImgPieces from "../../assets/piece1.png";
import ImgCharcuterie from "../../assets/charcuterie1.png";

const Cards = () => {
  const [openSearch, setSearchQuery] = useState("");
  const [openModel, setOpenModel] = useState(false);

  return (
    <section className="bg-pink border-b pt-12 pb-12 mx-auto px-4 sm:px-3 lg:px-8">
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
            className="underline font-extrabold"
          >
            cliquez sur ce lien
          </NavLink>
          .
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div
            data-aos="fade-in"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img
                  src={ImgFruits}
                  alt="Image Fruits"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Plateaux de fruits
              </div>
              <p className="text-black text-justify mt-2">
                Égayez vos moments spéciaux en famille, lors de mariages, de
                dîners romantiques, grâce à de magnifiques plateaux de fruits.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">0€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>

          {/* Step 2 */}
          <div
            data-aos="fade-in"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img
                  src={ImgDesserts}
                  alt="Image Desserts"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Plateaux de desserts
              </div>
              <p className="text-black text-justify mt-2">
                Découvrez la sélection de desserts pour égayer vos moments en
                famille, vos mariages, avec de superbes boîtes à dessert.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">0€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>
          <div
            data-aos="fade-in"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img
                  src={ImgPieces}
                  alt="Image Pièces"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Plateaux d'apéritifs
              </div>
              <p className="text-black text-justify mt-2">
                Vous souhaitez avoir des apéritifs pour accompagner vos
                évènements ? Découvrez la sélection de différents apéritifs.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">0€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
                className="bg-f3dbc3 border border-1-white text-white text-center mt-8 py-3 block w-full rounded-2xl shadow-md text-base font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>
          <div
            data-aos="fade-in"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl shadow-lg mt-5 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-start items-center mt-10">
              <div className="h-72 w-64 bg-white rounded-xl">
                <img
                  src={ImgCharcuterie}
                  alt="Image Charcuterie"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-pink mt-5 text-3xl text-center font-sans-recursive font-extrabold">
                Plateaux de charcuteries
              </div>
              <p className="text-black text-justify mt-2">
                Accompagnez vos moments avec cette sélection, vous ne manquerez
                d'être séduit par les délicieux plateaux de charcuteries du
                traiteur.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">0€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
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
