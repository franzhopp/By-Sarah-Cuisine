import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Navigation/navbar.jsx";
import Section from "./Components/Section/section";
import SectionDuplicate from "./Components/Section/section_duplicate.jsx";
import Cards from "./Components/Cards/cards.jsx";
import Partner from "./Components/Partner/partner.jsx";
import Form from "./Components/Form/form.jsx";
import Footer from "./Components/Footer/footer.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

// Système de routage
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

// Segmentation de la h o m e p a g e
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

export default App;
