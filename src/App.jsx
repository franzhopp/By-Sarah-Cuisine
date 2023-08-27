import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Header all basics from pages //
import Header from "./Components/Navigation/navbar.jsx";

// Segmentation 1 //
import Section from "./Components/Section/section";
import SectionDuplicate from "./Components/Section/section_duplicate.jsx";
import Cards from "./Components/Cards/cards.jsx";
import Partner from "./Components/Partner/partner.jsx";
import Form from "./Components/Form/form.jsx";
import Footer from "./Components/Footer/footer.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

// Segmentation 2 //
import PageEthics from "./Pages/Ethics/ethics.jsx";
import PropositionOfServices from "./Pages/Proposal/proposal.jsx";

// Système de routage //
const App = () => {
  return (
    <>
      <div className="fade-in">
        <ThemeProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/nos-valeurs" element={<Ethics />} />
              <Route path="/nos-services" element={<Proposal />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </>
  );
};

// Segmentation de la "homepage" //
const Homepage = () => {
  return (
    <div>
      <Section />
      <SectionDuplicate />
      <Cards />
      <Partner />
      <Form />
      <Footer />
    </div>
  );
};

// Segmentation de "nos valeurs" //
const Ethics = () => {
  return (
    <div>
     <PageEthics/>
    </div>
  );
};

// Segmentation de "nos services" //
const Proposal = () => {
  return (
    <div>
     <PropositionOfServices/>
    </div>
  );
};



export default App;
