import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { ContactDetails } from "../pages/ContactDetails";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Details/:userId" element={<ContactDetails />}/>
      </Routes>
    </Router>
  );
}
