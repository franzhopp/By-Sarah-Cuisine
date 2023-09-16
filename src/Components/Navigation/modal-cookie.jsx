import Modal from "react-modal";

Modal.setAppElement("#root");

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
      className="fixed bottom-0 left-0 right-0 bg-white p-4"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-800"
    >
      <div className="text-left">
        <h2 className="text-xl font-bold mb-2">Politique de cookies</h2>
        <p className="text-gray-600 mb-4">
          Ce site utilise des cookies pour mesurer la fréquentation du site afin
          d'en améliorer le fonctionnement et l'admistration et votre accord
          pour améliorer votre expérience utilisateur.
        </p>
        <div className="flex flex-col">
          <div className="w-52">
            <button
              onClick={onAccept}
              className="bg-f3dbc3 hover:bg-gray text-white font-bold py-2 px-4 rounded-full"
            >
              Accepter
            </button>
            <button
              onClick={onRequestClose}
              className="text-gray-600 font-sans-serif mt-5 underline"
            >
              Continuer sans accepter
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CookieModal;
