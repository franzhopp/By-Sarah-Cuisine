import Modal from "react-modal";

// Configuration du modal
Modal.setAppElement("#root"); // Assurez-vous de définir l'élément racine de votre application

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
    >
    </Modal>
  );
};

export default CookieModal;
