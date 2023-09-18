import { NavLink } from "react-router-dom";
import { MdOutlineEditNote } from "react-icons/md";
import { useState } from "react";
import { images } from "../Helpers/images-data";
import InfoDevis from "./info-devis.jsx";

const SectionGallery = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <section className="bg-f3dbc3 py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 text-center">
      <h2 className="font-sans-recursive text-4xl md:text-5xl font-extrabold text-white">
        Découvrez toute la gallerie du traiteur
      </h2>
      <p className="font-sans-serif text-white font-extrabold mt-3 px-4 text-md sm:text-1 sm:mt-4">
        Des ingrédients de qualité où vous trouvez votre bonheur !
      </p>

      <div className="flex justify-center items-center mt-10 mb-10 p-3 flex-col sm:flex-row">
        {/* svg */}
        <div className="flex flex-row justify-start items-center">
          <svg
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
            onContextMenu={(e) => e.preventDefault()}
            className="cursor-pointer w-10 h-10 sm:w-20 sm:h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
          >
            <circle cx="41" cy="41" r="41" fill="#EFEFEF" />
            <path
              d="M17.9393 39.9393C17.3536 40.5251 17.3536 41.4749 17.9393 42.0607L27.4853 51.6066C28.0711 52.1924 29.0208 52.1924 29.6066 51.6066C30.1924 51.0208 30.1924 50.0711 29.6066 49.4853L21.1213 41L29.6066 32.5147C30.1924 31.9289 30.1924 30.9792 29.6066 30.3934C29.0208 29.8076 28.0711 29.8076 27.4853 30.3934L17.9393 39.9393ZM65 39.5L19 39.5L19 42.5L65 42.5L65 39.5Z"
              fill="#E9C2C2"
            />
          </svg>
        </div>
        {/* 1 step */}
        <div className="p-20">
          <div className="flex flex-col justify-start items-center">
            <div
              className="h-72 w-72 sm:h-96 sm:w-96 bg-no-repeat bg-white rounded-xl"
              style={{ backgroundImage: `url(${images[currImg].img})` }}
            ></div>
          </div>
        </div>

        {/* svg */}
        <div className="flex flex-row justify-start items-center">
          <svg
            onContextMenu={(e) => {
              e.preventDefault();
              console.log("Context menu prevented");
            }}
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
            className="cursor-pointer w-10 h-10 sm:w-20 sm:h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
          >
            <circle cx="41" cy="41" r="41" fill="#EFEFEF" />
            <path
              d="M65.0607 42.0607C65.6464 41.4749 65.6464 40.5251 65.0607 39.9393L55.5147 30.3934C54.9289 29.8076 53.9792 29.8076 53.3934 30.3934C52.8076 30.9792 52.8076 31.9289 53.3934 32.5147L61.8787 41L53.3934 49.4853C52.8076 50.0711 52.8076 51.0208 53.3934 51.6066C53.9792 52.1924 54.9289 52.1924 55.5147 51.6066L65.0607 42.0607ZM18 42.5L64 42.5V39.5L18 39.5V42.5Z"
              fill="#E9C2C2"
            />
          </svg>
        </div>
      </div>
      <InfoDevis />
    </section>
  );
};

export default SectionGallery;
