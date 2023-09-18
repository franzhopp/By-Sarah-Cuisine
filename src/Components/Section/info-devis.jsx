import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";

const InfoDevis = () => {
  const handleLinkClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="text-white text-base text-center font-sans-serif font-extrabold">
        Demander un devis sur-mesure où Sarah traitera votre commande avec
        attention.
        <div className="mt-5 flex justify-center">
          <a
            onClick={handleLinkClick}
            href="/devis-gratuit"
            className="bg-e9c2c2 shadow-md px-6 py-2 border rounded-3xl text-white"
          >
            <p className="flex flex-row font-extrabold">
              Devis gratuit <MdOutlineEditNote className="ml-2 mt-1" />
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default InfoDevis;
