import React, { useState } from "react";
import SignIn from "../components/Faculty/SignIn";
import SignUp from "../components/Faculty/SignUp";

function FacultyPage({signState}) {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-[70%] h-full pl-20 pt-20">
        {
            signState == 0 ? <SignIn  /> : <SignUp />
        }
      </div>
      <div className="w-[30%] h-full bg-[#000000]"></div>
    </div>
  );
}

export default FacultyPage;
