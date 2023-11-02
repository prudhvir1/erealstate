import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, LandingPage } from "./pages/index";
import Agents from "./components/Agents";
import {
  About,
  Contact,
  LandingHome,
  Login,
  Policy,
  Signup,
  TermsAndConditions,
} from "./components";
import Profile from "./components/Profile";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="" element={<LandingHome />}>
            <Route path="" element={<About />} />
            <Route path="About" element={<About />} />
            <Route path="Privacy" element={<Policy />} />
            <Route path="Terms" element={<TermsAndConditions />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/Home" element={<HomePage />}>
            <Route path="" element={<Profile />} />
            <Route path="Agents" element={<Agents />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
