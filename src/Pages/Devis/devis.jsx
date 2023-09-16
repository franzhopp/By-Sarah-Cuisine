import NavbarPages from "../../Components/Navigation/navbar-page";

const DevisFree = () => {
  return (
    <section className="bg-white">
      <NavbarPages/>
      <div className="mx-auto max-w-screen-xl px-4 py-52 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-color-gray-pastel text-center">
          Demande de devis gratuit
        </h1>

        <div className="p mt-5 text-base text-color-gray-pastel font-extrabold text-center">
          Faites un devis gratuitement afin de pouvoir faire votre première
          commande !
        </div>

        <hr className="mt-5 mx-auto w-1/4 pb-8" />
        <div className="">
          <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Prénom
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Service choisi
                  </label>
                  <select
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-gray-900"
                    placeholder="Date de la commande"
                    type="date"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <select
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="flex justify-center items-center mt-4">
                <button
                  data-aos="fade-left"
                  type="submit"
                  className="inline-block w-full rounded-lg bg-bgcolor-beige-pastel px-5 py-3 font-extrabold text-white sm:w-auto"
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
