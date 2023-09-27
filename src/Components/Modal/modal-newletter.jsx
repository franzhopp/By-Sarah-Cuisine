import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ImCross } from "react-icons/im";

const ModalNewletter = ({ closeModal, searchQuery }) => {
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
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

    if (!formData.email) {
      newErrors.email = "Veuillez entrer un email.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const emailParams = {
      to_name: "Sarah",
      email: formData.email,
    };

    try {
      const response = await emailjs.send(
        "service_5z74upq",
        "template_h7yknhf",
        emailParams
      );

      console.log("Email envoyé !", response.status, response.text);
      setStatus("Merci ! Adresse envoyée.");
    } catch (error) {
      console.error("Erreur d'envoi d'e-mail :", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-5">
          <div id="navlinks" className="flex space-x-2">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Exemple@exemple.com"
              className="rounded-xl p-3 text-gray outline-none border border-1-white input-bordered input-primary mb-5 ml-2 mr-3 sm:mb-0 md:ml-0"
            />
            <button onClick={() => closeModal(false)}>
              <ImCross className="text-C22E2E mb-4 sm:mb-0" />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-0 sm:mt-5">
            <button
              id="navlinks"
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
                "Valider"
              )}
            </button>
            <div className="mt-5 text-center font-sans-serif text-white font-extrabold">
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNewletter;
