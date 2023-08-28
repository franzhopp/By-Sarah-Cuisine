const Cards = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold text-black-900 text-center">
        Plats différents
      </h1>

      <hr className="mt-5 mx-auto w-1/4" />
      <div className="p mt-5 text-xl text-black-800 text-center">
        Vous pouvez découvrir différents plats sur toute variété !
      </div>

      <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
        {/* Step 1 */}
        <div className="homepage min-h-500 w-80 border border-gray-200 rounded-lg mt-5">
          <div className="p-6">
            <div className="text-2xl font-bold text-white">Couscous</div>
            <p className="mt-2 text-medium text-white">
              Comblez vos plats avec Sarah
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">12€</span>

              <span className="font-medium text-white">/mois</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-pink-500 border-white rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              YES
            </a>
          </div>
          <div className="pt-2 pb-8 px-6">
            <h3 className="text-xs font-medium text-white-tracking-wide uppercase">
              Inclus edhzeeh
            </h3>
            <ul className="mt-6 space-x-3"></ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="homepage min-h-500 w-80 border border-gray-200 rounded-lg mt-5">
          <div className="p-6">
            <div className="text-2xl font-bold text-white">Couscous</div>
            <p className="mt-2 text-medium text-white">
              Comblez vos plats avec Sarah
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">12€</span>

              <span className="font-medium text-white">/mois</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-pink-500 border-white rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              YES
            </a>
          </div>
          <div className="pt-2 pb-8 px-6">
            <h3 className="text-xs font-medium text-white-tracking-wide uppercase">
              Inclus edhzeeh
            </h3>
            <ul className="mt-6 space-x-3"></ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="homepage min-h-500 w-80 border border-gray-200 rounded-lg mt-5">
          <div className="p-6">
            <div className="text-2xl font-bold text-white">Couscous</div>
            <p className="mt-2 text-medium text-white">
              Comblez vos plats avec Sarah
            </p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold text-white">12€</span>

              <span className="font-medium text-white">/mois</span>
            </p>
            <a
              href=""
              className="mt-8 block w-full bg-pink-500 border-white rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
            >
              YES
            </a>
          </div>
          <div className="pt-2 pb-8 px-6">
            <h3 className="text-xs font-medium text-white-tracking-wide uppercase">
              Inclus edhzeeh
            </h3>
            <ul className="mt-6 space-x-3"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
