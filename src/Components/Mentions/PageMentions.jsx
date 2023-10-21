import { NavLink } from "react-router-dom";
import NavbarPages from "../Navigation/PagesNavbar";
import ImgText from "../../assets/logo-4.png";

const PageMentions = () => {
  const keywordsStyle = "font-extrabold";

  return (
    <>
      <NavbarPages />
      <div className="flex justify-center">
        <div className="w-full md:max-w-3xl p-4 font-sans-serif mt-16 mb-16">
          <h1 className="text-pink font-sans-recursive mb-16 text-2xl md:text-3xl font-semibold">
            Mentions légales
          </h1>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Identité
          </h2>
          <p className="text-black mb-4">
            ›<span className={keywordsStyle}> Nom du site web :</span>{" "}
            <span className="text-pink text-xl font-sans-recursive">
              {" "}
              By Sarah Cuisine
            </span>
            ,{" "}
            <span className="italic">
              recettes pour un mode de vie sain et gourmand
            </span>
            .
            <br />›<span className={keywordsStyle}>
              {" "}
              Adresse du site :
            </span>{" "}
            <NavLink
              to="http://bysarahcuisine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink underline"
            >
              http://bysarahcuisine.com/
            </NavLink>
            .
            <br />›<span className={keywordsStyle}> Propriétaire :</span> Khalfa
            Sarah – contact@bysarahcuisine.com
            <br />›<span className={keywordsStyle}> Activité :</span>{" "}
            Entrepreneur individuel.
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Responsable de publication :
            </span>{" "}
            Khalfa Sarah – Meaux, Île-de-France.
            <br />› <span className={keywordsStyle}>Hébergement :</span> IONOS.
            <br />
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Conditions d’utilisation
          </h2>
          <p className="text-black text-justify mb-4">
            › L’utilisation du site implique l’acceptation des conditions
            d’utilisation décrites ci-dessous. Ces conditions peuvent être
            modifiées à tout moment.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Informations
          </h2>
          <p className="text-black text-justify mb-4">
            › Les informations du site sont indicatives et non exhaustives. Le
            propriétaire du site n'est pas responsable des dommages résultant de
            l'accès au site.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Interactivité
          </h2>
          <p className="text-black text-justify mb-4">
            › Les utilisateurs peuvent déposer du contenu sur le site, mais ce
            contenu doit respecter la charte déontologique du site et la
            législation en vigueur.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Propriété intellectuelle
          </h2>
          <p className="text-black text-justify">
            › Tous les éléments du site sont la propriété exclusive de leurs
            auteurs. Toute utilisation non autorisée est interdite.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Liens
          </h2>
          <p className="text-black text-justify">
            › Le propriétaire autorise les liens vers le site sous certaines
            conditions.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Politique de confidentialité des données
          </h2>
          <p className="text-black text-justify">
            › Tout utilisateur a droit d'accès, de rectification et d'opposition
            à ses données personnelles.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Objet du traitement
          </h2>
          <p className="text-black text-justify">
            › L'entreprise
            <span className="text-pink text-xl font-sans-recursive">
              {" "}
              By Sarah Cuisine
            </span>{" "}
            traite les données pour gérer les commandes, le marketing, et la
            transmission de données aux partenaires.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Bases légales
          </h2>
          <p className="text-black text-justify">
            › Le traitement est basé sur l'exécution de contrats, l'intérêt
            légitime, le consentement, et l'obligation légale.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Destinataires des données
          </h2>
          <p className="text-black text-justify">
            › Les données sont destinées à l'entreprise et à ses sous-traitants
            de livraison. Les adresses électroniques peuvent être transmises à
            des partenaires commerciaux.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Durée de conservation des données
          </h2>
          <p className="text-black text-justify">
            › Les données sont conservées selon les besoins légaux.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Droits de l'utilisateur
          </h2>
          <p className="text-black text-justify">
            › L'utilisateur peut exercer ses droits sur ses données en
            contactant l'entreprise.
          </p>

          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Consentement
          </h2>
          <p className="text-black text-justify">
            › Un consentement explicite est requis pour certaines autorisations.
          </p>
          <h2 className="text-pink font-sans-recursive text-xl md:text-2xl font-semibold mt-16 mb-2">
            Crédits
          </h2>
          <p className="mb-4 text-black">
            ›<span className={keywordsStyle}> Site créé et designé par :</span>{" "}
            Fernandez Louisa.
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Site URL de la développeuse :
            </span>{" "}
            <NavLink
              to="http://navistudio.io/defaultsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink underline"
            >
              http://navistudio.io/
            </NavLink>
            ,{" "}
            <img
              src={ImgText}
              className="h-6 ml-1 inline"
              alt="Icône navi studio."
            />
            <br />›<span className={keywordsStyle}> Hébergeur :</span> IONOS.
            <br />›<span className={keywordsStyle}> Logo :</span> Fernandez
            Louisa
            <br />›<span className={keywordsStyle}> Photographies : </span>
            Pexels.
            <br />›<span className={keywordsStyle}> Vidéos :</span> Khalfa
            Sarah.
            <br />›
            <span className={keywordsStyle}> Contenu des rubriques :</span>{" "}
            Fernandez Louisa
            <br />›
            <span className={keywordsStyle}> Montages des visuels :</span>{" "}
            Fernandez Louisa
            <br />›<span className={keywordsStyle}>
              {" "}
              Montages des vidéos :
            </span>{" "}
            Fernandez Louisa
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Icônes utilisées pour les visuels :
            </span>{" "}
            Photoshop, Illustrator, Figma.
            <br />›<span className={keywordsStyle}>
              {" "}
              Éditeur de code :
            </span>{" "}
            PhpStorm (JetBrains).
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Technologies utilisées :
            </span>{" "}
            React, Tailwind CSS, AOS... etc.
            <br />
            <div className="text-justify mt-16 italic font-extrabold">
              Modèle de formule de collecte de données à caractère personnel
              pour la conception de la rubrique "MENTIONS LÉGALES" : Site du
              CNIL - Version 2019 /{" "}
              <NavLink
                to="https://www.cnil.fr/professionnel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink underline"
              >
                https://www.cnil.fr/professionnel
              </NavLink>
              .
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default PageMentions;
