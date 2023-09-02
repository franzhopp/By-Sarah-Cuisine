import "../Contact/contact.jsx";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const SectionToScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-72 px-4 text-center sm:mt-72">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        {/* <span className="block xl:inline mr-3">{`Cuisine`}</span> */}
        <span className="block text-color-pink-pastel xl:inline">
          By_sarah_cuisine
        </span>
      </h1>

      <p className="mt-3 max-w-sm mx-auto text-white sm:text-lg md:mt-5 md:text-xl md:max-w-2xl lg:max-w-3xl">
        « Cuisinez avec passion, dégustez avec amour »
      </p>

      <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
        <NavLink
          to="/"
          href="contact"
          data-aos="fade-right"
          onClick={SectionToScroll}
          className="bg-bgcolor-pink-pastel rounded-md shadw flex items-center justify-center w-32 md:w-40 mr-3 px-8 py-3 text-sm sm:text-base text-color-white-pastel md:py-4 md:text-ld md:px-10 font-extrabold"
        >
          Contacter
        </NavLink>

        <NavLink
          to="/devis-gratuit"
          data-aos="fade-left"
          className="bg-bgcolor-beige-pastel rounded-md shadw flex items-center justify-center w-32 md:w-40 mr-3 px-8 py-3 text-sm sm:text-base font-extrabold text-white md:py-4 md:text-ld md:px-10"
        >
          Devis
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
