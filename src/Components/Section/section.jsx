const Section = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-center">
        <svg
          className="relative bottom-7"
          width="748"
          height="46"
          viewBox="0 0 748 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="748" height="46" rx="20" fill="white" />
        </svg>
      </div>
      <div className="flex justify-center">
        <h2 className="font-extrabold text-2xl sm:text-4xl">
          <span className="text-pink font-sans-recursive">{`Traiteur pour tous types d'évènements`}</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <p className="text-black text-sm sm:text-xl tracking-widest">
          Ingrédients bio ou de qualité
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-col sm:flex-row mt-5">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="text-black font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            {`« Je me suis lancée en tant que nouvelle dans la cuisine culinaire. Je partage ma cuisine au quotidien, avec beaucoup de passion et de rigueur. Tout au long de mon parcours, j'ai appris à perfectionner mes plats. Je me souviens encore de mes premières expériences en cuisine, lorsque je découvrais les bases de la préparation des repas. 
                Au fil des années, ma cuisine est devenue mon laboratoire personnel, un lieu où je teste de nouvelles recettes, explore de nouvelles saveurs et développe mon propre style culinaire. J'ai appris l'importance des ingrédients biologiques, frais et de qualité, ainsi que la nécessité de la patience et de la précision en cuisine.`}
          </div>

          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="text-black font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            {`Chaque plat que je prépare est une expression de ma créativité et de mon amour pour la cuisine. Qu'il s'agisse de plats simples du quotidien ou de mets plus élaborés pour des occasions spéciales, je mets toujours tout mon cœur dans ce que je fais. La satisfaction de voir mes proches savourer mes créations est ma plus grande récompense.
              Ma cuisine est devenue une source de joie et de partage. Chaque jour est une nouvelle aventure gastronomique, et je suis impatiente de découvrir ce que l'avenir me réserve dans ma quête pour devenir une véritable experte en cuisine. » `}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
