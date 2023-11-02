import { useState } from "react";
import { Outlet } from "react-router-dom";

function LandingMain() {
  const [status, setStatus] = useState(false);

  return (
    <>
      {status && <SignupStatus />}
      <Outlet />
    </>
  );
}

export default LandingMain;
