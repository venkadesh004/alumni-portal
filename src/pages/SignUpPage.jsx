import AlumniBlack from "../assets/alumni-black.png";
import CapBlack from "../assets/cap-black.png";
import InstitutionBlack from "../assets/institution-black.png";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-[70%] h-full pl-20 pt-20">
        <div className="mt-3">
          <h1 className="font-bold text-xl">Sign In As</h1>
          <p>Sign In as one of the following users</p>
        </div>
        <div className="mt-3 flex flex-col items-start justify-evenly h-[400px]">
          <button className="flex items-center justify-evenly border-2 border-black p-4 w-[300px] rounded-xl" onClick={(e) => {
            e.preventDefault();
            navigate('/student/signin');
          }}>
            <img src={CapBlack} alt="" className="w-[40px] h-[40px]" />
            <p>Enter as Student</p>
          </button>
          <button className="flex items-center justify-evenly border-2 border-black p-4 w-[300px] rounded-xl" onClick={(e) => {
            e.preventDefault();
            navigate('/alumni/signin');
          }}>
            <img src={AlumniBlack} alt="" className="w-[40px] h-[40px]" />
            <p>Enter as Alumni</p>
          </button>
          <button className="flex items-center justify-evenly border-2 border-black p-4 w-[300px] rounded-xl" onClick={(e) => {
            e.preventDefault();
            navigate('/faculty/signin');
          }}>
            <img src={InstitutionBlack} alt="" className="w-[40px] h-[40px]" />
            <p>Enter as Faculty</p>
          </button>
        </div>
      </div>
      <div className="w-[30%] h-full bg-[#000000]"></div>
    </div>
  );
}

export default SignUpPage;
