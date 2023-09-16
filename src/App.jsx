import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Header from "./Components/Navigation/navbar.jsx";
import PageNotFound from "./Pages/Error/pagenotfound.jsx";
import Section from "./Components/Section/section";
import SectionDuplicate from "./Components/Section/section_duplicate.jsx";
import Cards from "./Components/Cards/cards.jsx";
import Partner from "./Components/Partner/partner.jsx";
import Form from "./Components/Contact/contact.jsx";
import FormContact from "./Components/Contact/form.jsx";
import Footer from "./Components/Footer/footer.jsx";
import PropositionOfServices from "./Pages/Proposal/proposal.jsx";
import DevisFree from "./Pages/Devis/devis.jsx";
import AvisClient from "./Components/Partner/avis-client.jsx";

const App = () => {
  return (
    <>
      <div>
        <ThemeProvider>
          <Router>
           
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<Proposal />} />
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
