import React, { useState } from "react";

function SignupStatus() {
  const [signupStatus, setSignupStatus] = useState(true);
  return (
    signupStatus && (
      <div className="z-50 w-screen absolute top-20 flex justify-center items-center ">
        <div className="z-10 bg-white rounded-lg flex-nowrap shadow-lg">
          <h1 className="text-lg text-cobalt font-monstserrat font-bold text-center p-4">
            Signup Successfull!
          </h1>
        </div>
        {/* <div className="z-0 h-full w-full absolute bg-black opacity-60"></div> */}
      </div>
    )
  );
}

export default SignupStatus;
