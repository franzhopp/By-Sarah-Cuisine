import NavbarDevis from "../../Components/Navigation/navbar-devis";

const DevisFree = () => {
  return (
    <section className="bg-white">
      <NavbarDevis />
      <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
        <h2 className="font-extrabold text-3xl text-center sm:text-5xl">
          <span className="text-pink font-sans-recursive">{`Demander un devis sur-mesure !`}</span>
        </h2>

        <div className="flex justify-center">
          <div className="w-full sm:w-2/4">
            <div className="text-black mt-12 mb-16 font-sans-serif text-base text-center">
              Vous souhaitez préparer un évènement très important comme{" "}
              <span className="font-extrabold">un mariage</span>,{" "}
              <span className="font-extrabold">un anniversaire</span> ? Merci de
              le préciser afin que le chef traite votre demande.
            </div>
          </div>
        </div>

        <div className="bg-devis rounded-lg">
          <div className="bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Prénom
                </label>
                <input
                  className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                  placeholder="Prénom"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Nom
                </label>
                <input
                  className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
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
                    className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
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
                    className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Téléphone"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Service choisi
                  </label>
                  <select
                    className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 bg-white text-zinc-400"
                    placeholder="Service choisi"
                    type="email"
                    id="email"
                  >
                    <option selected>Service choisi</option>
                    <option>Plats</option>
                    <option>Desserts</option>
                    <option>Évènements</option>
                    <option>Mariage</option>
                  </select>
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Date de la commande
                  </label>
                  <input
                    className="rounded-xl w-full p-3 outline-none input-secondary border-gray-200 text-md mb-2 bg-white text-zinc-400"
                    placeholder="Date de la commande"
                    type="date"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <select
                  className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 bg-white text-zinc-400"
                  placeholder="Service choisi"
                  type="email"
                  id="email"
                >
                  <option selected>{`Comment m'avez-vous connu ?`}</option>
                  <option>Par un proche</option>
                  <option>Sur internet</option>
                  <option>Les réseaux sociaux</option>
                  <option>Client régulier</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 bg-white"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="flex justify-center items-center mt-4">
                <button
                  type="submit"
                  className="bg-f3dbc3 shadow-md px-6 py-2 border rounded-3xl text-white"
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

export default DevisFree;
