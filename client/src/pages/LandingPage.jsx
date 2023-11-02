import { Outlet } from "react-router-dom";
import { LandingHeader, LandingMain } from "../components";
import "../styles/LandingPage.css";
import SignupStatus from "../components/LandingPage/LandingMain/SignupStatus";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingHeader">
        <LandingHeader />
      </div>
      <div className="LandingMain">
        <LandingMain />
      </div>
    </div>
  );
}

export default LandingPage;
