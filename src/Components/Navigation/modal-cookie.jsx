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
      <h2>Politique de cookies</h2>
      <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
      <button onClick={onAccept}>Accepter</button>
    </Modal>
  );
};

export default CookieModal;
