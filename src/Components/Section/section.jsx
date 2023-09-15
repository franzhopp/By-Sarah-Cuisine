// import Image from "../../assets/cuisine.png";

const Section = () => {
  return (
    <section className="mb-12">
      
      <div className="flex justify-center mt-12">
        <h2 className="font-extrabold text-2xl sm:text-4xl">
          <span className="font-section">{`Traiteur de tous types d'évènements`}</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <p className="text-sm sm:text-xl">INGRÉDIENTS BIO OU DE QUALITÉS</p>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-col sm:flex-row mt-5">

          
          <p className="font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            {`Votre site internet, votre vision. Chez nous, chaque site est conçu
            avec votre marque à l'esprit. Notre équipe experte en conception web
            crée des expériences uniques qui reflètent votre identité et vos
            objectifs. Obtenez un site qui se démarque dans un monde en ligne
            saturé.`}
          </p>

          <p className="font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            {`Votre site internet, votre vision. Chez nous, chaque site est conçu
            avec votre marque à l'esprit. Notre équipe experte en conception web
            crée des expériences uniques qui reflètent votre identité et vos
            objectifs. Obtenez un site qui se démarque dans un monde en ligne
            saturé.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
