// import { useState } from "react";
import { ImCross } from "react-icons/im";

const ModalNewletter = ({ closeModal, searchQuery }) => {
  return (
    <>
      <div className="mt-5">
        <div id="navlinks" className="flex space-x-2">
          <input
            type="text"
            placeholder="Exemple@gmail.com"
            className="rounded-xl p-3 outline-none border border-1-white input-bordered input-primary mb-5 ml-3 mr-3 sm:mb-0 md:ml-0"
          />
          <button onClick={() => closeModal(false)}>
            <ImCross className="text-C22E2E mb-4 sm:mb-0" />
          </button>
        </div>
        <div className="mt-5">
          <button
            id="navlinks"
            className="bg-f3dbc3 shadow-md px-6 py-2 border rounded-3xl text-white hover:bg-e9c2c2"
          >
            Valider l'inscription
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalNewletter;
