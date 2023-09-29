import { NavLink } from "react-router-dom";
import NavbarServices from "../../Components/Navigation/navbar-services";
import Image from "../../assets/template.png";
import { MdOutlineEditNote, MdOutlineFileDownload } from "react-icons/md";
import ImgPiecesDeTousGenres from "../../assets/piecesdetousgenres.png";
import ImgVerrines from "../../assets/verrines.png";
import ImgToast from "../../assets/toast.png";
import ImgCouscous from "../../assets/couscous.png";
import ImgPaella from "../../assets/paella.png";
import ImgTajine from "../../assets/tajine.png";
import ImgCrepes from "../../assets/crepes.png";
import ImgDonuts from "../../assets/donuts.png";
import ImgViennoiseries from "../../assets/viennoiseries.png";
import ImgMariage from "../../assets/mariage.png";
import ImgAnniversaire from "../../assets/anniversaire.png";
import ImgSoiree from "../../assets/soiree.png";

const Services = () => {
  return (
    <>
      <NavbarServices />
      <div className="max-w-7xl mt-10 mx-auto py-15 px-4 pb-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-color-gray-pastel text-left tracking-tighter">
          <p className="text-pink font-sans-recursive text-4xl sm:text-5xl ">
            Apéritifs
          </p>
          <p className="text-black font-sans-serif text-base sm:text-2xl">
            Préparation d’apéritifs pour vos entrées
          </p>
        </h1>
      </div>
      <div
        data-aos="fade-in"
        className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgPiecesDeTousGenres}
              alt="Image apéritifs"
            />
          </div>

          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Pièces de différentes formules
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgToast}
              alt="Image apéritifs"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Toast
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgVerrines}
              alt="Image apéritifs"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Verrines
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto py-15 px-4 pb-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-right tracking-tighter">
          <p className="text-pink font-sans-recursive text-4xl sm:text-5xl ">
            Plats
          </p>
          <p className="text-black font-sans-serif text-base sm:text-2xl">
            Préparation de plats
          </p>
        </h1>
      </div>
      <div
        data-aos="fade-in"
        className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgCouscous}
              alt="Image plats"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Couscous
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgPaella}
              alt="Image Plats"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Paëlla
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgTajine}
              alt="Image plats"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Tajine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto py-15 px-4 pb-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-color-gray-pastel text-left tracking-tighter">
          <p className="text-pink font-sans-recursive text-4xl sm:text-5xl ">
            Sucrées
          </p>
          <p className="text-black font-sans-serif text-base sm:text-2xl">
            Préparation d’apéritifs pour vos entrées
          </p>
        </h1>
      </div>

      <div
        data-aos="fade-in"
        className="mb-20 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgCrepes}
              alt="Image sucrées"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Crêpes
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgDonuts}
              alt="Image sucrées"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Donuts
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgViennoiseries}
              alt="Image sucrées"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Viennoiseries
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto py-15 px-4 pb-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-right tracking-tighter">
          <p className="text-pink font-sans-recursive text-4xl sm:text-5xl ">
            Évènements
          </p>
          <p className="text-black font-sans-serif text-base sm:text-2xl">
            Préparation d'évènement
          </p>
        </h1>
      </div>

      <div
        data-aos="fade-in"
        className="mb-20 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgMariage}
              alt="Image évènements"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Mariage, fiançaille
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgAnniversaire}
              alt="Image évènements"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Anniversaire
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pt-5 pb-5 transition-transform transform hover:scale-105">
          <div className="p-10">
            <img
              className="w-full rounded-xl"
              src={ImgSoiree}
              alt="Image apéritifs"
            />
          </div>
          <div className="px-6 py-3">
            <div className="font-bold text-pink font-sans-recursive underline text-3xl mb-2">
              Soirées
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="image-bg border-t py-5 px-6">
        <div className="px-12 mt-12 mb-16 text-pink font-sans-recursive text-3xl text-center font-extrabold">
          Téléchargez le flyer de Sarah ainsi que sa carte de visite en un clic
          !
          <div className="flex justify-center">
            <a href="/resume/cdvfyr.png" download>
              <span className="sr-only">Download flyer</span>
              <button className="bg-e9c2c2 mt-5 shadow-md border text-white px-6 py-2 rounded-3xl hover:bg-f3dbc3">
                <MdOutlineFileDownload className="text-white text-3xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
