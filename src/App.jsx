import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Navigation/BaseNavbar.jsx";
import PageNotFound from "./Pages/Error/PageNotFound.jsx";
import Section from "./Components/Section/BaseSection.jsx";
import SectionDuplicate from "./Components/Section/SectionGallery.jsx";
import Cards from "./Components/Cards/CardsFormulas.jsx";
import Partner from "./Components/Client/TitleClient.jsx";
import Form from "./Components/Contact/TitleContact.jsx";
import FormContact from "./Components/Contact/FormContact.jsx";
import PropositionOfServices from "./Pages/Services/AllServices.jsx";
import DevisFree from "./Pages/Devis/Devis.jsx";
import AvisClient from "./Components/Client/AvisClient.jsx";
import PagePrivacy from "./Components/Privacy/PagePrivacy.jsx";
import PageConditions from "./Components/Conditions/PagesConditions.jsx";
import PageMentions from "./Components/Mentions/PageMentions.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Proposal />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/privacy" element={<PagePrivacy />} />
        <Route path="/terms" element={<PageConditions />} />
        <Route path="/mentions" element={<PageMentions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="fade-in">
        <Section />
        <SectionDuplicate />
        <Cards />
        <Partner />
        <AvisClient />
        <Form />
        <FormContact />
      </div>
    </div>
  );
};

const Proposal = () => {
  return <PropositionOfServices />;
};

const Devis = () => {
  return <DevisFree />;
};

export default App;
