const Section = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-center mt-16">
        <h2 className="font-extrabold text-2xl sm:text-4xl">
          <span className="text-pink font-sans-recursive">{`Traiteur de tous types d'évènements`}</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <p className="text-black text-sm sm:text-xl tracking-wide">
          INGRÉDIENTS BIO OU DE QUALITÉS
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-col sm:flex-row mt-5">
          <p className="text-black font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            {`Originaire de Meaux, Sarah est une excellente cusinière. Elle partage sa cuisine au quotidien,
            avec beaucoup de passion et de rigueur. L'excellence, l'hygiène, l'assiduité font partie de ses valeurs qu'elle prône.
            Elle crée des expériences uniques qui reflètent l'identité de ses services et ses 
            objectifs. Choisissez les formules qui conviennent à vos besoins.`}
          </p>

          <p className="text-black font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            {`Originaire de Meaux, Sarah est une excellente cusinière. Elle partage sa cuisine au quotidien,
            avec beaucoup de passion et de rigueur. L'excellence, l'hygiène, l'assiduité font partie de ses valeurs qu'elle prône.
            Elle crée des expériences uniques qui reflètent l'identité de ses services et ses 
            objectifs. Choisissez les formules qui conviennent à vos besoins..`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
