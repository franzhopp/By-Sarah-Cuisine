import { NavLink } from "react-router-dom";
import NavbarServices from "../../Components/Navigation/navbar-services";
import Image from "../../assets/template.png";
import { MdOutlineEditNote } from "react-icons/md";

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
        data-aos="fade-up"
        className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Pièces
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Pièces
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
            Préparation d’apéritifs pour vos entrées
          </p>
        </h1>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
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
            Desserts
          </p>
          <p className="text-black font-sans-serif text-base sm:text-2xl">
            Préparation d’apéritifs pour vos entrées
          </p>
        </h1>
      </div>
      {/* Step 1 */}
      <div
        data-aos="fade-up"
        className="mb-20 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
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
            Préparation évènements
          </p>
        </h1>
      </div>
      {/* Step 1 */}
      <div
        data-aos="fade-up" className="mb-20 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
      >
        {/* Step 1 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg pt-5 pb-5 transition ease duration-300 group hover:translate-y-5">
          <img className="w-full p-10" src={Image} alt="Pictures apéritifs" />
          <div className="px-6 py-4">
            <div className="font-bold text-pink underline text-xl mb-2">
              Verrine
            </div>
            <p className="text-black font-semibold text-base font-sans-serif">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
        <div className="px-12 mt-12 mb-16 text-black text-base text-center font-sans-serif font-extrabold">
        Un devis sur-mesure ? Pour préparer un évènement, c'est ici.
        <div className="mt-5 flex justify-center">
          <NavLink
             to="/devisgratuit"
             onClick={() => {
               window.location.href = "/devisgratuit";
               window.scrollTo(0, 0);
             }}
            href="http://by-sarah-cuisine.netlify.app/devis-gratuit"
            className="bg-e9c2c2 shadow-md px-6 py-2 border rounded-3xl text-white hover:bg-f3dbc3"
          >
            <p className="flex flex-row font-extrabold">
              Devis gratuit <MdOutlineEditNote className="ml-2 mt-1" />
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Services;
