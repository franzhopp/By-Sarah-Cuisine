import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { NavLink } from "react-router-dom";
import NavbarDevis from "../../Components/Navigation/navbar-devis";
import { BiLeftArrowAlt } from "react-icons/bi";

const Devis = () => {
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    select: "",
    selectOther: "",
    codepostal: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    select: "",
    selectOther: "",
    codepostal: "",
    date: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "Veuillez entrer un prénom.";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Veuillez entrer un nom.";
    }

    if (!formData.email) {
      newErrors.email = "Veuillez entrer une adresse mail.";
    }

    if (!formData.tel) {
      newErrors.tel = "Veuillez entrer un numéro de téléphone.";
    }

    if (!formData.select) {
      newErrors.select = "Veuillez entrer une information.";
    }

    if (!formData.selectOther) {
      newErrors.selectOther = "Veuillez entrer une information.";
    }

    if (!formData.codepostal) {
      newErrors.codepostal = "Veuillez entrer un code postal.";
    }

    if (!formData.date) {
      newErrors.date = "Veuillez entrer une date.";
    }

    if (!formData.message) {
      newErrors.message = "Veuillez entrer un message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const emailParams = {
      to_name: "Sarah",
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      tel: formData.tel,
      select: formData.select,
      selectOther: formData.selectOther,
      codepostal: formData.codepostal,
      date: formData.date,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_5z74upq",
        "template_h7yknhf",
        emailParams
      );

      console.log("Email envoyé !", response.status, response.text);
      setStatus("Merci ! Votre devis a bien été envoyé.");
    } catch (error) {
      console.error("Erreur d'envoi d'e-mail :", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);

  return (
    <div>
      <div className="bg-efefef">
        <NavbarDevis />
        <section>
          <div
            data-aos="fade-in"
            className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
          >
            <div className="flex justify-center">
              <div className="w-full">
                <div className="text-black mt-5 leading-8 text-center mb-16 font-sans-serif text-base sm:text-lg">
                  📩{" "}
                  <span className="underline">
                    Lire avant de soumettre votre demande de devis
                  </span>{" "}
                  : veuillez prendre un moment pour lire ces directives
                  importantes. Si vous envisagez d'organiser un événement majeur
                  tel qu'un{" "}
                  <span className="font-extrabold">mariage, fiançaille</span>,{" "}
                  <span className="font-extrabold">anniversaire, baptême</span>{" "}
                  ou tout autre événement spécial, nous vous encourageons
                  vivement à le mentionner explicitement dans le champ «
                  <span className="font-extrabold">
                    {" "}
                    Quels évènements souhaitez-vous célébrer ?
                  </span>{" "}
                  » Cela permettra au chef de traiter votre demande avec une
                  attention particulière. De plus, veuillez rédiger vos réponses
                  de manière claire et concise pour faciliter le processus de
                  traitement de votre demande.
                </div>
              </div>
            </div>

            <div className="bg-devis-color rounded-3xl">
              <div className="bg-gray-100 p-8 mb-10 lg:col-span-3 lg:p-12">
                <form onClick={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                        errors.firstname ? "input-error border-red-700" : ""
                      }`}
                      placeholder="Prénom"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                    {errors.firstname && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.firstname}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                        errors.lastname ? "input-error border-red-700" : ""
                      }`}
                      placeholder="Nom"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                    {errors.lastname && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.lastname}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                          errors.email ? "input-error border-red-700" : ""
                        }`}
                        placeholder="Adresse mail"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <p className="text-left font-sans-serif text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                          errors.tel ? "input-error border-red-700" : ""
                        }`}
                        placeholder="Numéro de téléphone"
                        type="tel"
                        id="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleInputChange}
                      />
                      {errors.tel && (
                        <p className="text-left font-sans-serif text-red-700">
                          {errors.tel}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                          errors.select ? "input-error border-red-700" : ""
                        }`}
                        placeholder="Quels évènements souhaitez-vous célébrer ? Mariage, soirée...?"
                        type="select"
                        id="select"
                        name="select"
                        value={formData.select}
                        onChange={handleInputChange}
                      />
                      {errors.select && (
                        <p className="text-left font-sans-serif text-red-700">
                          {errors.select}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                          errors.date ? "input-error border-red-700" : ""
                        }`}
                        placeholder="Date de la commande"
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                      {errors.date && (
                        <p className="text-left font-sans-serif text-red-700">
                          {errors.date}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                        errors.codepostal ? "input-error border-red-700" : ""
                      }`}
                      placeholder="Code postal"
                      id="codepostal"
                      name="codepostal"
                      value={formData.codepostal}
                      onChange={handleInputChange}
                    />
                    {errors.codepostal && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.codepostal}
                      </p>
                    )}
                  </div>
                  <div>
                    <div>
                      <input
                        className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                          errors.selectOther ? "input-error border-red-700" : ""
                        }`}
                        placeholder="Comment m'avez-vous connu ? Par un proche, un client, un ami ?"
                        type="text"
                        id="selectOther"
                        name="selectOther"
                        value={formData.selectOther}
                        onChange={handleInputChange}
                      />
                      {errors.selectOther && (
                        <p className="text-left font-sans-serif text-red-700">
                          {errors.selectOther}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mt-20 ${
                        errors.firstname ? "input-error border-red-700" : ""
                      }`}
                      placeholder="Message"
                      rows="8"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {errors.message && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="bg-f3dbc3 font-sans-serif font-extrabold shadow-md px-6 py-2 border rounded-3xl text-white cursor-pointer"
                      value="Envoyer"
                    >
                      {isLoading ? (
                        <div
                          className="animate-spin inline-block w-6 h-6 mt-2 border-[3px] border-current border-t-transparent text-white rounded-full"
                          role="status"
                          aria-label="loading"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Envoyer"
                      )}
                    </button>
                  </div>
                </form>
                <div className="mt-5 text-center font-sans-serif text-white font-extrabold">
                  {status && <p>{status}</p>}
                </div>
              </div>
            </div>
            <div className="mt-12 text-base text-black text-center font-sans-serif font-extrabold">
              <div className="flex justify-center">
                Pour découvrir tous les réseaux sociaux de Sarah, vous les
                trouverez en bas des pages !
              </div>
              <div className="mt-5 flex justify-center">
                <NavLink
                  to="/"
                  // onClick={() => {
                  //   window.location.href = "/";
                  //   window.scrollTo(0, 0);
                  // }}
                  className=" bg-pink text-white shadow-md px-6 py-2 border rounded-3xl transition-transform transform hover:scale-105"
                >
                  <p className="flex flex-row font-extrabold">
                    {`Retournez à la page d'accueil`}
                    <BiLeftArrowAlt className="ml-2 mt-1" />
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Devis;
