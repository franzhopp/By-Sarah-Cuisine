import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <section className="bg-e9c2c2 mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-sans-recursive text-center">
        Choisissez vos formules
      </h1>
      <div className="mt-5 text-base text-white text-center font-sans-serif font-extrabold">
        Différentes formules pour de grandes variétés culinaires chez by Sarah
        cuisine.
      </div>
      <div className="mt-5 text-base text-white text-center font-sans-serif">
        Si vous voulez savoir plus précisément tous les services du traiteur,
        n’hésitez pas à cliquer sur ce lien.
      </div>

      <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
        {/* Step 1 */}
        <div className="bg-d9d9d9 font-sans-serif min-h-500 w-80 rounded-2xl mt-5">
          <div className="p-6">
            <div className="text-2xl text-center font-extrabold text-white">
              Plateaux de fruit
            </div>
            <p className="mt-2 text-medium text-white">
              Comblez vos évènements entre famille, mariage, pour de jolis
              plateaux.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">40€</span>

              <span className="font-medium text-white"> par pack.</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-f3dbc3 rounded-2xl py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-d9d9d9 font-sans-serif min-h-500 w-80 rounded-2xl mt-5">
          <div className="p-6">
            <div className="text-2xl text-center font-extrabold text-white">
              Boîte à desserts
            </div>
            <p className="mt-2 text-medium text-white">
              Comblez vos évènements entre famille, mariage, pour de jolis
              plateaux.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">20€</span>

              <span className="font-medium text-white"> par pack.</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-f3dbc3 rounded-2xl py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-d9d9d9 font-sans-serif min-h-500 w-80 rounded-2xl mt-5">
          <div className="p-6">
            <div className="text-2xl text-center font-extrabold text-white">
              Brush
            </div>
            <p className="mt-2 text-medium text-white">
              Comblez vos évènements entre famille, mariage, pour de jolis
              plateaux.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">10€</span>

              <span className="font-medium text-white"> par pack.</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-f3dbc3 rounded-2xl py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-base text-white text-center font-sans-serif font-extrabold">
        En savoir davantage sur toutes les offres et possibilité de réduction en
        vous inscrivant à la newletter de Sarah !
        <div className="mt-5 flex justify-center">
          <NavLink
            to="/devis-gratuit"
            className="bg-f3dbc3 shadow-md px-6 py-2 border rounded-3xl text-white"
          >
            <p className="flex flex-row font-extrabold">{`Je m'inscris`}<MdOutlineEditNote className="ml-2 mt-1"/></p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Cards;
