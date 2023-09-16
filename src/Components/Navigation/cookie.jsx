import { useState, useEffect } from "react";
import CookieModal from "./modal-cookie.jsx";
import Cookies from "js-cookie";

const Homepage = () => {
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedCookie = Cookies.get("accept_cookie");
    if (!hasAcceptedCookie) {
      setCookieModalOpen(true);
    }
  }, []);

  const handleAcceptCookie = () => {
    Cookies.set("accept_cookie", "true", { expires: 365 }); // Marquez l'acceptation du cookie
    setCookieModalOpen(false);
  };

  return (
    <div>
      {/* Votre contenu de page d'accueil */}
      {/* <h1>Bienvenue sur la page d'accueil</h1> */}

      {/* Modal des cookies */}
      <CookieModal
        isOpen={isCookieModalOpen}
        onRequestClose={() => setCookieModalOpen(false)}
        onAccept={handleAcceptCookie}
      />
    </div>
  );
};

export default Homepage;

