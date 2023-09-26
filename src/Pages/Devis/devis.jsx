import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import NavbarDevis from "../../Components/Navigation/navbar-devis";

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
      newErrors.email = "Veuillez entrer un email.";
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
        <section className="">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full">
                <div className="text-black mt-5 text-center mb-16 font-sans-serif text-base sm:text-lg">
                  <span className="underline">
                    Lire avant d'effectuer un devis
                  </span>{" "}
                  : si vous avez l'intention d'organiser un événement majeur tel
                  qu'un{" "}
                  <span className="font-extrabold">mariage, fiançaille</span>,{" "}
                  <span className="font-extrabold">anniversaire, baptême</span>
                  ... etc, veuillez EXPLICITEMENT le mentionner dans le champ «
                  <span className="font-extrabold">
                    {" "}
                    Quels évènements souhaitez-vous célébrer ?
                  </span>{" "}
                  » afin que le chef puisse traiter votre demande avec attention. Écrire
                  également vos réponses de manière claire et concise.
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
                        placeholder="Email"
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
                        <div className="text-white font-medium rounded-lg px-6 py-2">
                          <svg
                            aria-hidden="true"
                            role="status"
                            class="flex justify-center w-8 h-8 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Devis;
