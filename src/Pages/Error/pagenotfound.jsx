import { NavLink } from "react-router-dom";
// import Footer from "../../Components/Footer/footer";

const PageNotFound = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oh noooon !
        </p>

        <p className="mt-4 text-gray-500">
          Nous sommes désolés, {`nous n'avons pas trouvé votre page.`}
        </p>

        <NavLink
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-extrabold text-white bg-pink-600 rounded hover:bg-gray-700 focus:outline-none focus:ring"
        >
          {`Revenir à la page d'accueil`}
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
