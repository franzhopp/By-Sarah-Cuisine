import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
    >
      <div className="fixed bottom-0 left-0 right-0 bg-white h-64 w-64 p-4">
        <h2 className="text-lg font-semibold">Politique de cookies</h2>
        <p className="text-sm text-gray-600 mt-2">
          Ce site utilise des cookies pour améliorer votre expérience.
        </p>
        <button
          onClick={onAccept}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
        >
          Accepter
        </button>
      </div>
    </Modal>
  );
};

export default CookieModal;
