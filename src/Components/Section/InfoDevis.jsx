import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";

const InfoDevis = () => {
  return (
    <>
      <div className="text-white text-base text-center font-sans-serif font-extrabold">
        Faites un devis sur-mesure où Sarah traite votre demande avec attention.
        <div className="mt-5 flex justify-center">
          <NavLink
            to="/devis"
            href="http://by-sarah-cuisine.netlify.app/devis-gratuit"
            className="bg-e9c2c2 shadow-md px-6 py-2 border rounded-3xl text-white hover:bg-f3dbc3 transition-transform transform hover:scale-105"
          >
            <p className="flex flex-row font-extrabold">
              Devis gratuit <MdOutlineEditNote className="ml-2 mt-1" />
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default InfoDevis;
