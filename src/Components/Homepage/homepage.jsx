import React from "react";

const Homepage = () => {
  return (
    <div className="mt-32 px-4 text-center sm:mt-28">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline mr-3">LA MEILLEURE CUISINE C'EST</span>
        <span className="block text-pink-600 xl:inline">
          CHEZ BY_SARAH_CUISINE
        </span>
      </h1>

      <p className="mt-3 max-w-sm mx-auto text-white sm:text-lg md:mt-5 md:text-xl md:max-w-2xl lg:max-w-3xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut fugiat,
        suscipit, dolorem illum consectetur non porro harum excepturi ducimus
        eveniet facere, temporibus libero incidunt sit quam? Repellendus
        voluptate natus laborum.
      </p>

      <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
        <a
          href=""
          className="bg-pink-500 rounded-md shadw flex items-center justify-center w-32 md:w-40 mr-3 px-8 py-3 text-sm sm:text-base font-medium text-white md:py-4 md:text-ld md:px-10"
        >
         Découvrir 
        </a>

        <a
          href=""
          className="bg-gray-500 rounded-md shadw flex items-center justify-center w-32 md:w-40 mr-3 px-8 py-3 text-sm sm:text-base font-medium text-white md:py-4 md:text-ld md:px-10"
        >
         Devis
        </a>
      </div>
    </div>
  );
};

export default Homepage;
