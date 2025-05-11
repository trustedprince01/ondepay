import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Features from "./pages/features";
import FaqPage from "./pages/faq";
import Contact from "./pages/contact";
import NotFound from "./pages/404";
import TermsAndConditions from "./pages/terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
