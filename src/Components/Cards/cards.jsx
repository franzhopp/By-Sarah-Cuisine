const Cards = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-color-gray-pastel text-center">
        Choisissez votre pack
      </h1>

      <hr className="mt-5 mx-auto w-1/4" />
      <div className="p mt-5 text-base text-color-gray-pastel text-center">
        Vous pouvez découvrir différents packs sur toute variété de votre
        commande.
      </div>

      <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
        {/* Step 1 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-bgcolor-gray-pastel min-h-500 w-80 border border-gray-200 rounded-lg mt-5"
        >
          <div className="p-6">
            <div className="text-2xl font-bold text-white">
              Plateaux de fruit
            </div>
            <p className="mt-2 text-medium text-white">
              Comblez vos évènements entre famille, mariage, pour de jolis
              plateaux.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">40€</span>

              <span className="font-medium text-white">/mois</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-bgcolor-pink-pastel border-white rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              En savoir plus
            </a>
          </div>
          <div className="pt-2 pb-8 px-6">
            <h3 className="text-xs font-medium text-color-white-pastel tracking-wide uppercase">
              Possibilité de réduction.
            </h3>
            <ul className="mt-6 space-x-3"></ul>
          </div>
        </div>

        {/* Step 2 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-bgcolor-gray-pastel min-h-500 w-80 border border-gray-200 rounded-lg mt-5"
        >
          <div className="p-6">
            <div className="text-2xl font-bold text-white">
              Boîte à desserts
            </div>
            <p className="mt-2 text-medium text-white">
              Comblez vos évènements entre famille, mariage, pour de jolis
              plateaux.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">70€</span>

              <span className="font-medium text-white">/mois</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-bgcolor-pink-pastel border-white rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              En savoir plus
            </a>
          </div>
          <div className="pt-2 pb-8 px-6">
            <h3 className="text-xs font-medium text-color-white-pastel tracking-wide uppercase">
              Possibilité de réduction.
            </h3>
            <ul className="mt-6 space-x-3"></ul>
          </div>
        </div>

        {/* Step 3 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-bgcolor-gray-pastel min-h-500 w-80 border border-gray-200 rounded-lg mt-5"
        >
          <div className="p-6">
            <div className="text-2xl font-bold text-white">Brunch</div>
            <p className="mt-2 text-medium text-white">
              Comblez vos évènements entre famille, mariage, pour de jolis
              plateaux.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">25€</span>

              <span className="font-medium text-white">/mois</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-bgcolor-pink-pastel border-white rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              En savoir plus
            </a>
          </div>
          <div className="pt-2 pb-8 px-6">
            <h3 className="text-xs font-medium text-color-white-pastel tracking-wide uppercase">
              Possibilité de réduction.
            </h3>
            <ul className="mt-6 space-x-3"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
