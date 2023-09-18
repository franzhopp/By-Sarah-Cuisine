const AvisClient = () => {
  return (
    <div className="container mx-auto mt-10 px-10">
      <div className="flex justify-center">
        <div className="w-full sm:w-1/2">
          <p className="text-black text-center font-sans-serif mb-10">
            Remboursés ou satisfaits, découvrez les avis des clients de Sarah.
            Si vous souhaitez lancer un évènement, n'hésitez pas à écrire au
            traiteur votre contact ainsi qu'un devis pour plus de sécurité !
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div className="bg-8f8f88 flex flex-col items-center rounded-lg p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="145"
            viewBox="0 0 145 145"
            fill="none"
            className="mb-3"
          >
            <circle cx="72.5" cy="72.5" r="72.5" fill="#d598a0" />
            <circle cx="72.5" cy="72.5" r="59.5" fill="white" />
          </svg>
          <h2 className="text-pink font-sans-recursive text-2xl text-center mt-3 lg:mt-5">
            Marie, 35 ans
          </h2>
          <p className="text-black text-justify font-sans-serif mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            labore aliquid cupiditate officia vitae laboriosam ducimus
            voluptatem ipsa maiores quo reiciendis, itaque facilis vero totam
            voluptas facere blanditiis iste non.
          </p>
        </div>
        <div className="bg-8f8f88 flex flex-col items-center rounded-lg p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="145"
            viewBox="0 0 145 145"
            fill="none"
            className="mb-3"
          >
            <circle cx="72.5" cy="72.5" r="72.5" fill="#d598a0" />
            <circle cx="72.5" cy="72.5" r="59.5" fill="white" />
          </svg>
          <h2 className="text-pink font-sans-recursive text-2xl text-center mt-3 lg:mt-5">
            Karim, 35 ans
          </h2>
          <p className="text-black text-justify font-sans-serif mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            labore aliquid cupiditate officia vitae laboriosam ducimus
            voluptatem ipsa maiores quo reiciendis, itaque facilis vero totam
            voluptas facere blanditiis iste non.
          </p>
        </div>
        <div className="bg-8f8f88 flex flex-col items-center rounded-lg p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="145"
            viewBox="0 0 145 145"
            fill="none"
            className="mb-3"
          >
            <circle cx="72.5" cy="72.5" r="72.5" fill="#d598a0" />
            <circle cx="72.5" cy="72.5" r="59.5" fill="white" />
          </svg>
          <h2 className="text-pink font-sans-recursive text-2xl text-center mt-3 lg:mt-5">
            Lou, 35 ans
          </h2>
          <p className="text-black text-justify font-sans-serif mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            labore aliquid cupiditate officia vitae laboriosam ducimus
            voluptatem ipsa maiores quo reiciendis, itaque facilis vero totam
            voluptas facere blanditiis iste non.
          </p>
        </div>
      </div>
      <div id="contact" className="mb-16 text-transparent">
        Division invisible
      </div>
    </div>
  );
};

export default AvisClient;
