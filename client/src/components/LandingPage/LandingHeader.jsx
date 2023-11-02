import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <>
      <div className="sm:p-10 p-6 sm:ml-10">
        <Link to="/">
          <h1 className="text-white sm:text-lg text-xl font-monstserrat font-bold">
            eREALSTATE
          </h1>
        </Link>
      </div>
      <div className="right-0 text-white sm:mr-10 mr-6 flex items-center gap-12">
        <Link to="/">
          <button className="hidden sm:inline text-sm sm:text-base hover:underline">
            Home
          </button>
        </Link>
        <Link to="#About">
          <button className="hidden sm:inline text-sm sm:text-base hover:underline">
            About
          </button>
        </Link>
        <Link to="Login">
          <button className="py-1 px-4 text-sm border-2 hover:bg-lightgray hover:text-cobalt font-semibold rounded-lg sm:px-6 sm:text-base">
            Login
          </button>
        </Link>
      </div>
    </>
  );
}

export default LandingHeader;
