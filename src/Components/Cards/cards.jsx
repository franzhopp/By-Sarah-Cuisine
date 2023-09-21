import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <section className="bg-e9c2c2 mx-auto py-20 px-4 sm:px-6 lg:px-8">
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
          <div
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-center"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl mt-5"
          >
            <div className="flex flex-col justify-start items-center mt-5">
              <div className="h-52 w-64 bg-white rounded-xl"></div>
            </div>
            <div className="p-6">
              <div className="text-pink text-2xl text-center font-sans-recursive font-extrabold">
                Plateaux de fruit
              </div>
              <p className="text-black text-justify mt-2">
                Égayez vos moments spéciaux en famille, lors de mariages, de
                dîners romantiques, grâce à de magnifiques plateaux de fruit.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">40€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 text-white text-center mt-8 py-3 block w-full rounded-2xl text-sm font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>

          {/* Step 2 */}
          <div
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-center"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl mt-5"
          >
            <div className="flex flex-col justify-start items-center mt-5">
              <div className="h-52 w-64 bg-white rounded-xl"></div>
            </div>
            <div className="p-6">
              <div className="text-pink text-2xl text-center font-sans-recursive font-extrabold">
                Boîte à desserts
              </div>
              <p className="text-black text-justify mt-2">
                Découvrez la sélection de desserts pour égayer vos moments en
                famille, vos mariages, avec de superbes boîtes à desserts.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">20€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 text-white text-center mt-8 py-3 block w-full rounded-2xl text-sm font-extrabold"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>

          {/* Step 3 */}
          <div
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-center"
            className="bg-8f8f88 font-sans-serif min-h-500 w-80 rounded-2xl mt-5"
          >
            <div className="flex flex-col justify-start items-center mt-5">
              <div className="h-52 w-64 bg-white rounded-xl"></div>
            </div>
            <div className="p-6">
              <div className="text-pink text-2xl text-center font-sans-recursive font-extrabold">
                Brush
              </div>
              <p className="text-black text-justify mt-2">
                Vous souhaitez avoir un brush pour accompagner vos moments, découvrez la sélection que le traiteur propose.
              </p>
              <p className="mt-6">
                <span className="text-black text-4xl">10€</span>

                <span className="text-black font-medium"> par pack.</span>
              </p>
              <NavLink
                to="/services"
                onClick={() => {
                  window.location.href = "/services";
                  window.scrollTo(0, 0);
                }}
                className="bg-f3dbc3 text-white text-center mt-8 py-3 block w-full rounded-2xl text-sm font-extrabold"
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
            <NavLink
              to="/devis-gratuit"
              className="bg-f3dbc3 shadow-md px-6 py-2 border rounded-3xl text-white hover:bg-e9c2c2"
            >
              <p className="flex flex-row font-extrabold">
                {`Je m'inscris`}
                <MdOutlineEditNote className="ml-2 mt-1" />
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
