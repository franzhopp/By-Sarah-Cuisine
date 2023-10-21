import { MdPhoneInTalk, MdLocationPin } from "react-icons/md";
import emailjs from "emailjs-com";
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";

const Form = () => {
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
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

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexNumber = /^\d+$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "Veuillez entrer un prénom.";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Veuillez entrer un nom.";
    }

    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!formData.tel) {
      newErrors.tel = "Veuillez entrer un numéro de téléphone.";
    } else if (!regexNumber.test(formData.tel)) {
      newErrors.tel =
        "Le numéro de téléphone doit contenir uniquement des chiffres.";
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
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_5z74upq",
        "template_h7yknhf",
        emailParams
      );

      console.log("Email envoyé !", response.status, response.text);
      setStatus("Merci ! Votre contact a bien été envoyé.");
    } catch (error) {
      console.error("Erreur d'envoi d'e-mail :", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);

  return (
    <section className="image-blur-by-sarah-cuisine">
      <div
        data-aos="fade-in"
        className="max-w-4xl mx-auto px-4 sm:py-20 sm:px-3 lg:px-8"
      >
        <span className="flex flex-col text-center">
          <p className="font-sans-serif text-2xl font-extrabold text-white mb-5 mt-10">
            Contactez Sarah pour plus d’informations concernant ses prestations
            !
          </p>
          <div className="mb-10">
            <p className="font-sans-serif text-white">
              {`Veuillez compléter le formulaire de contact ci-dessous, ce qui permettra à Sarah de vous recontacter rapidement pour répondre à toutes vos questions spécifiques. Vous pouvez également la joindre directement via ses réseaux sociaux, mais pour plus d'efficacité, nous vous encourageons à remplir le formulaire.`}
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
            <div className="flex justify-center items-center space-x-2 mt-5">
              <MdLocationPin className="h-10 w-10 text-white" />
              <p className="font-sans-serif text-white text-3xl font-extrabold">
                Paris, Île-de-France
              </p>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12 rounded-3xl mb-11">
            <form
              data-aos="fade-in"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div action="" className="space-y-4">
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
                      errors.firstname ? "input-error border-red-700" : ""
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

                <div>
                  <input
                    className={`rounded-xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2 ${
                      errors.firstname ? "input-error border-red-700" : ""
                    }`}
                    placeholder="Adresse mail"
                    type="text"
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
                      errors.firstname ? "input-error border-red-700" : ""
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

              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-f3dbc3 font-sans-serif font-extrabold shadow-md px-3 py-2 border rounded-3xl text-white cursor-pointer"
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
            </form>
            <div className="mt-5 text-center font-sans-serif text-white font-extrabold">
              {status && <p>{status}</p>}
            </div>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Form;
