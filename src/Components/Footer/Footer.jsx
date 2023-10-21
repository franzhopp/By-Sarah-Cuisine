import { NavLink } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-8f8f88">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-3 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="">
            <h2 className="font-sans-recursive text-2xl text-pink">
              By Sarah Cuisine,
            </h2>
            <p className="text-black italic font-sans-serif text-xs">
              Recettes pour un mode de vie sain et gourmand
            </p>
          </a>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="https://www.facebook.com/fafa.doc.3/"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/by_sarah_cuisine/"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://t.snapchat.com/T4KuLKrl"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">SnapChat</span>

                <FaSnapchatGhost className="h-6 w-6 text-black" />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">Whatsapp</span>

                <BsWhatsapp className="h-6 w-6 text-black" />
              </a>
            </li>

            <li>
              <a href="/resume/fiche.png" download>
                <span className="sr-only">Download flyer</span>

                <MdStickyNote2 className="h-6 w-6 text-black" />
              </a>
            </li>

            <li>
              <a href="/resume/cdvfyr.png" download>
                <span className="sr-only">Download flyer</span>

                <MdOutlineFileDownload className="h-6 w-6 text-black" />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-black pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="text-black font-sans-serif font-extrabold">
              Services
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <NavLink
                  to="/services"
                  onClick={() => {
                    window.location.href = "/services";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Apéritifs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  onClick={() => {
                    window.location.href = "/services";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Plats
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  onClick={() => {
                    window.location.href = "/services";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Desserts
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  onClick={() => {
                    window.location.href = "/services";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Évènements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={() => {
                    window.location.href = "/services";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Tous les services
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-black font-sans-serif font-extrabold">
              Production
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    window.location.href = "/";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  À propos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    window.location.href = "/";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Avis client
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    window.location.href = "/";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/devis"
                  onClick={() => {
                    window.location.href = "/devis";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Devis Gratuit
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-black font-sans-serif font-extrabold">
              Légalité
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <NavLink
                  to="/privacy"
                  onClick={() => {
                    window.location.href = "/privacy";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Politique de confidentialité
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  onClick={() => {
                    window.location.href = "/terms";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Conditions d'utilisation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mentions"
                  onClick={() => {
                    window.location.href = "/mentions";
                    window.scrollTo(0, 0);
                  }}
                  className="text-black font-sans-serif transition hover:opacity-75"
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-black font-sans-serif text-xs font-extrabold">
          &copy; 2023, By Sarah Cuisine. | Tous les articles, images, et vidéos
          présents sur ce site sont la propriété de l'auteur et les droits
          d'auteur de ce contenu sont protégés par la loi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
