const Form = () => {
  return (
    <section id="contact" className="bg-white-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-color-gray-pastel text-center pt-32">
          Contact
        </h1>

        <hr className="mt-5 mx-auto w-1/4 pb-8" />
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-color-gray-pastel font-extralight">
              Nous sommes ravis de vous accueillir sur notre site dédié à la
              cuisine passionnante et créative. Nous sommes là pour répondre à
              toutes vos questions, commentaires ou besoins. Votre avis compte
              énormément pour nous, que ce soit pour des suggestions de
              recettes, des demandes de conseils culinaires, ou simplement pour
              discuter de votre passion pour la cuisine.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-color-pink-pastel">
                01 03 40 30 23
              </a>

              <address className="mt-2 not-italic text-color-gray-pastel">
                Paris, Île-de-France
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-bgcolor-beige-pastel p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nom
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nom"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Adresse mail"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Téléphone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Téléphone"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  data-aos="fade-right"
                  type="submit"
                  className="inline-block w-full rounded-lg bg-bgcolor-pink-pastel px-5 py-3 font-extrabold text-color-white-pastel sm:w-auto"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
