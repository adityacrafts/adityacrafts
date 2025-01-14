import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import ContactUs from "./components/ContactUs/ContactUs";

const Routee = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default Routee;
