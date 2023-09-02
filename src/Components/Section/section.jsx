// import Image from "../../assets/cuisine.png";

const Section = () => {
  return (
    <section id="about" className="flex flex-col border-gray-200 lg:flex-row">
      <div className="px-10 pb-16 pt-10 w-full order-2 text-center md:py-32 lg:w-1/2 lg:order-1">
        <h2 className="font-extrabold text-gray-900 text-5xl">
          <span>CUISINE DE QUALITÉ</span>
          <br />
          <span className="text-pink-500">AVEC SARAH</span>
        </h2>
        <p className="mt-3 text-lg mx-auto text-black-800 sm:text-xl md:mt-5 md:max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          eveniet numquam praesentium, quasi at atque quae nulla eaque ducimus.
        </p>
        <a
          href=""
          className="mt-10 mx-auto flex items-center justify-center w-32 m:w-40 px-8 py-3 border-transparent font-extrabold rounded-md text-white text-sm bg-pink-600 md:py-4 md:px-10"
        >
          Commencer
        </a>
      </div>

      <div className="px-10 pb-16 pt-10 w-full order-2 text-center md:py-32 lg:w-1/2 lg:order-1">
        <h2 className="font-extrabold text-gray-900 text-5xl">
          <span>CUISINE DE QUALITÉ</span>
          <br />
          <span className="text-pink-500">AVEC SARAH</span>
        </h2>
        <p className="mt-3 text-lg mx-auto text-black-800 sm:text-xl md:mt-5 md:max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          eveniet numquam praesentium, quasi at atque quae nulla eaque ducimus.
        </p>
        <a
          href=""
          className="mt-10 mx-auto flex items-center justify-center w-32 m:w-40 px-8 py-3 border-transparent font-extrabold rounded-md text-white text-sm bg-pink-600 md:py-4 md:px-10"
        >
          Commencer
        </a>
      </div>

      <div className="px-10 pb-16 pt-10 w-full order-2 text-center md:py-32 lg:w-1/2 lg:order-1">
        <h2 className="font-extrabold text-gray-900 text-5xl">
          <span>CUISINE DE QUALITÉ</span>
          <br />
          <span className="text-pink-500">AVEC SARAH</span>
        </h2>
        <p className="mt-3 text-lg mx-auto text-black-800 sm:text-xl md:mt-5 md:max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          eveniet numquam praesentium, quasi at atque quae nulla eaque ducimus.
        </p>
        <a
          href=""
          className="mt-10 mx-auto flex items-center justify-center w-32 m:w-40 px-8 py-3 border-transparent font-extrabold rounded-md text-white text-sm bg-pink-600 md:py-4 md:px-10"
        >
          Commencer
        </a>
      </div>

      {/* <div className="h-96 w-full relative overflow-hidden order-1 lg:static lg:w-1/2 lg:h-full lg:order-2">
        <div className="z-10">
           <img
            src={Image}
            alt="Femme en cuisine"
            className="absolute z-50 w-full h-full object-cover object-center lg:w-1/2"
          /> 
        </div>
      </div> */}
    </section>
  );
};

export default Section;
