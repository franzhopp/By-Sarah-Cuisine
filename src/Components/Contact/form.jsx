import { MdPhoneInTalk } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Form = () => {
  return (
    <section className="image-blur-by-sarah-cuisine">
      <div className="max-w-4xl mx-auto px-4 sm:py-20 sm:px-6 lg:px-8">
        <span className="flex flex-col text-center">
          <p className="font-sans-serif text-2xl font-extrabold text-white mb-5 mt-10">
            Contactez Sarah pour plus d’informations concernant ses prestations
            !
          </p>
          <div className="mb-10">
            <p className="font-sans-serif text-white">
              {`Remplissez le formulaire de contact ci-dessous afin qu’elle puisse
              vous contacter pour toutes informations précises. Vous retrouvez tous ces réseaux afin d'avoir un contact direct en ligne mais pour plus de faciliter, veuillez remplir le formulaire.`}
            </p>
            <div className="flex justify-center items-center space-x-2 mt-5">
              <MdPhoneInTalk className="h-10 w-10 text-white" />
              <p className="font-sans-serif text-white text-3xl font-extrabold">
                07.81.86.39.81
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-5">
              <BsInstagram className="h-10 w-10 text-white" />
              <p className="font-sans-serif text-white text-3xl font-extrabold">
                by_sarah_cuisine
              </p>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12 rounded-md mb-11">
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
