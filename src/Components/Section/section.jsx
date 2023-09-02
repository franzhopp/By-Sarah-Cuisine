// import Image from "../../assets/cuisine.png";

const Section = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center pb-32 pt-32 border-gray-200 lg:flex-row"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="px-10 w-full order-2 text-left md:py-32 lg:w-1/2 lg:order-1"
      >
        <h2 className="font-extrabold text-color-gray-pastel text-2xl">
          <span>
            Chez By_sarah_cuisine, nous sommes dédiés à fournir des informations
            fiables et des conseils de haute qualité pour votre commande.
          </span>
          <br />
        </h2>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="px-10 pb-16 pt-20 w-full order-2 text-left md:py-32 lg:w-1/2 lg:order-1"
      >
        <p className="mt-3 text-lg mx-auto text-color-gray-pastel sm:text-xl md:mt-5 md:max-w-md">
          Toutes nos publications sont soigneusement rédigées par des experts
          culinaires passionnés. Nous nous efforçons de vous offrir{" "}
          <span className="font-extrabold">
            une expérience informative, divertissante et enrichissante à chaque
            visite
          </span>
          .
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="px-10 pb-16 pt-20 w-full order-2 text-left md:py-32 lg:w-1/2 lg:order-1"
      >
        <p className="mt-3 text-lg mx-auto text-color-gray-pastel sm:text-xl md:mt-5 md:max-w-md">
          Rejoignez notre communauté de passionnés de la cuisine et explorez
          tout ce que le monde culinaire a à offrir.
        </p>
      </div>
    </section>
  );
};

export default Section;
