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
              placeholder="Exemple@gmail.com"
              className="rounded-xl p-3 text-gray outline-none border border-1-white input-bordered input-primary mb-5 ml-3 mr-3 sm:mb-0 md:ml-0"
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
                <div className="text-white font-medium rounded-lg px-6 py-2">
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="flex justify-center w-3 h-3 text-white animate-spin"
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
