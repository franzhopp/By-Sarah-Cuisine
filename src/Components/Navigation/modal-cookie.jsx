import Modal from "react-modal";

Modal.setAppElement("#root");

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
      className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-pink shadow-md"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-75"
    >
      <div className="text-left">
        <h2 className="text-xl font-bold mb-2 font-sans-serif">Politique de cookies</h2>
        <p className="text-gray-600 mb-4 font-sans-serif">
          Ce site utilise des cookies pour améliorer votre expérience.
        </p>
        <button
          onClick={onAccept}
          className="bg-f3dbc3 hover:bg-gray text-white font-bold py-2 px-4 rounded-full"
        >
          Accepter
        </button>
      </div>
    </Modal>
  );
};

export default CookieModal;
