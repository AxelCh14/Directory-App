import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { ContactDetails } from "../pages/ContactDetails";
import { AddUserForm } from "../pages/AddUserForm";
import NavigationBar from "../components/NavigationBar";


export function MyRoutes() {
  return (
    <Router>
        <NavigationBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Details/:userId" element={<ContactDetails />}/>
        <Route path="/add-user/" element={<AddUserForm/>}></Route>
      </Routes>
    </Router>
  );
}
