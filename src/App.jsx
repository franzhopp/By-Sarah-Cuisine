import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// * Element Provider * //
import ThemeProvider from "./context/ThemeProvider.jsx";

// Header all basics from pages //
import Header from "./Components/Navigation/navbar.jsx";
import PageNotFound from "./Pages/Error/pagenotfound.jsx";

// Segmentation 1 //
import Section from "./Components/Section/section";
import SectionDuplicate from "./Components/Section/section_duplicate.jsx";
import Cards from "./Components/Cards/cards.jsx";
import Partner from "./Components/Partner/partner.jsx";
import Form from "./Components/Contact/contact.jsx";
import FormContact from "./Components/Contact/form.jsx";
import Footer from "./Components/Footer/footer.jsx";

// Segmentation 2 //
// import PageEthics from "./Pages/Ethics/ethics.jsx";

// Segmentation 3 //
import PropositionOfServices from "./Pages/Proposal/proposal.jsx";

// Segmentation 4 //
import DevisFree from "./Pages/Devis/devis.jsx";
import AvisClient from "./Components/Partner/avis-client.jsx";

// Système de routage //
const App = () => {
  return (
    <>
      <div>
        <ThemeProvider>
          <Router>
           
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/nos-valeurs" element={<Ethics />} />
              <Route path="/nos-services" element={<Proposal />} />
              <Route path="/devis-gratuit" element={<Devis />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </div>
    </>
  );
};

// Segmentation de la "homepage" 1 //
const Homepage = () => {
  return (
    <div>
       <Header />
      <Section />
      <SectionDuplicate />
      <Cards />
      <Partner />
      <AvisClient/>
      <Form />
      <FormContact />
    </div>
  );
};

// Segmentation de "nos valeurs" 2 //
const Ethics = () => {
  return (
    <div>
      <PageEthics />
    </div>
  );
};

// Segmentation de "nos services" 3 //
const Proposal = () => {
  return (
    <div>
      <PropositionOfServices />
    </div>
  );
};

// Segmentation du "devis" 4 //
const Devis = () => {
  return (
    <div>
      <DevisFree />
    </div>
  );
};

export default App;
