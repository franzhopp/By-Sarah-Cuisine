const Form = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 sm:py-20 sm:px-6 lg:px-8">
        <span className="flex flex-col text-center">
          <p className="font-sans-serif font-extrabold text-pink mb-5 mt-10">
            Contactez Sarah pour plus d’informations concernant ses prestations
            !
          </p>
          <div className="mb-10">
            <p className="font-sans-serif">
              Remplissez le formulaire de contact ci-dessous afin qu’elle puisse
              vous contacter pour toutes informations précises !
            </p>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12 rounded-md">
            <form action="" className="space-y-4">
              <div action="" className="space-y-4">
               
                  <div>
                    <input
                      className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                      placeholder="Prénom"
                      type="name"
                    />
                  </div>

                  <div>
                    <input
                      className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                      placeholder="Nom"
                      type="name"
                    />
                  </div>
                
                <div>
                  <input
                    className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Adresse mail"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Numéro de téléphone"
                    type="tel"
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mt-20"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-f3dbc3 shadow-md px-6 py-2 border rounded-3xl text-white"
              >
                Envoyer
              </button>
            </form>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Form;
