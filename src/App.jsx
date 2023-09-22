import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Navigation/navbar.jsx";
import PageNotFound from "./Pages/Error/pagenotfound.jsx";
import Section from "./Components/Section/section";
import SectionDuplicate from "./Components/Section/section-gallery.jsx";
import Cards from "./Components/Cards/cards.jsx";
import Partner from "./Components/Client/title-client.jsx";
import Form from "./Components/Contact/title-contact.jsx";
import FormContact from "./Components/Contact/form-contact.jsx";
import Footer from "./Components/Footer/footer.jsx";
import PropositionOfServices from "./Pages/Services/services.jsx";
import DevisFree from "./Pages/Devis/devis.jsx";
import AvisClient from "./Components/Client/avis-client.jsx";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Proposal />} />
            <Route path="/devisgratuit" element={<Devis />} />
            {/* <Route path="/privacy" element={<PoliticyConditendial />} />
            <Route path="/terms" element={<ConditionUtilisation />} />
            <Route path="/mentions" element={<MentionsLegales />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

const Homepage = () => {
  return (
    <div>
      <div className="fade-in">
        <Header />
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
  return (
    <div>
      <PropositionOfServices />
    </div>
  );
};

const Devis = () => {
  return (
    <div>
      <DevisFree />
    </div>
  );
};

export default App;
