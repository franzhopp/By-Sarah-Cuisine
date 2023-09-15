const SectionDuplicate = () => {
  return (
    <section className="bg-f3dbc3 py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 text-center">
      <h2 className=" font-sans-recursive text-4xl md:text-5xl font-extrabold text-white">
        Découvrez toute la gallerie du traiteur
      </h2>
      <p className="font-sans-serif text-white font-extrabold mt-3 px-4 text-md sm:text-1 sm:mt-4">
        Des ingrédients de qualité où vous trouvez votre bonheur !
      </p>

      <div className="flex justify-center items-center mt-10 mb-10 p-3 flex-col sm:flex-row">
        {/* svg */}
        <div className="flex-col justify-start items-center w-40 mr-4 sm:flex hidden">
          <svg
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
        {/* 2 step */}
        <div className="p-20">
          <div className="flex flex-col justify-start items-center w-40">
            <div className=" h-60 w-60 bg-white rounded-xl"></div>
          </div>
        </div>
        {/* 1 step */}
        <div className="p-20">
          <div className="flex flex-col justify-start items-center w-40">
            <div className=" h-60 w-60 bg-white rounded-xl"></div>
          </div>
        </div>
        {/* 2 step */}
        <div className="p-20">
          <div className="flex flex-col justify-start items-center w-40">
            <div className=" h-60 w-60 bg-white rounded-xl"></div>
          </div>
        </div>
        {/* svg */}
        <div className="flex-col justify-start items-center w-40 ml-4 sm:flex hidden">
          <svg
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
        <div className="text-base text-white text-center font-sans-serif font-extrabold">
       Demander un devis sur-mesure où Sarah traitera votre commande avec attention.
        <div className="w-full mt-10">
          <a
            to="/"
            className="mt-8 p-20 bg-e9c2c2 cursor-pointer rounded-2xl py-2 text-sm font-semibold text-white text-center hover:bg-slate-400"
          >
            {`Demander un devis`}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionDuplicate;
