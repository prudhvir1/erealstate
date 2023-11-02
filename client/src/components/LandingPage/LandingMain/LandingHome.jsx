import "../../../styles/LandingHome.css";
import { Link, Outlet } from "react-router-dom";

function LandingHome() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-cobalt text-5xl md:text-8xl lg:text-9xl font-monstserrat font-bold">
          eREALSTATE
        </h1>
      </div>
      <div id="About" className="w-full flex flex-col items-center">
        <div className="w-11/12 flex items-center justify-center">
          <Outlet />
        </div>
        <div className="w-11/12 flex flex-wrap items-center justify-center text-cobalt font-semibold gap-3 sm:gap-40 text-xs sm:text-lg my-8">
          <Link to="/About">
            <button className="hover:underline">About</button>
          </Link>
          <Link to="/Privacy">
            <button className="hover:underline">Privacy Policy</button>
          </Link>
          <Link to="/Terms">
            <button className="hover:underline">Terms and Conditions</button>
          </Link>
          <Link to="/Contact">
            <button className="hover:underline">Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingHome;
