import { NavLink } from "react-router-dom";
import NavbarPages from "../../Components/Navigation/PagesNavbar.jsx";

const PageNotFound = () => {
  return (
    <>
      <NavbarPages />
      <section>
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>
            <p className="font-sans-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Oh noooon !
            </p>

            <p className="font-sans-serif mt-4 text-gray-500">
              Nous sommes désolés, {`nous n'avons pas trouvé votre page.`}
            </p>

            <NavLink
              to="/"
              className="font-sans-serif bg-f3dbc3 inline-block px-5 py-3 mt-6 text-sm font-extrabold text-white bg-pink-600 rounded-full hover:bg-gray-700 focus:outline-none focus:ring"
            >
              {`Retourner à la page d'Accueil`}
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
