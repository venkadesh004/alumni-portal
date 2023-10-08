import axios from "axios";
import { useNavigate } from "react-router-dom"

function SignIn() {
    const navigate = useNavigate();

  return (
    <div className="w-full h-full">
        <div className="mt-3">
            <h1 className="font-bold text-xl">
                Sign In Student
            </h1>
            <p>You will be redirected to your Dashboard once the <br /> faculty verifies your profile</p>
        </div>
        <div className="mt-3 flex flex-col items-start justify-evenly h-[400px]">
            <form action="" className="flex flex-col items-start h-full" onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem("email", e.currentTarget.elements.email.value);
                localStorage.setItem("password", e.currentTarget.elements.password.value);
                axios.post("http://localhost:5000/student/getStudentData", {
                    "email": e.currentTarget.elements.email.value,
                    "password": e.currentTarget.elements.password.value
                }).then(result => {
                    if (result.data["permitted"]) {
                        navigate('/student/dashboard');
                    } else {
                        navigate('/student/error');
                    }
                }).catch(err => {
                    console.log(err);
                });
            }}>
                <input type="text" placeholder="Enter your email" name="email" className="mt-10 border-2 rounded-xl border-black p-3 w-[300px]" />
                <input type="password" placeholder="Enter your password" name="password" className="mt-5 border-2 rounded-xl border-black p-3 w-[300px]" />
                <p className="mt-3">New User? <a href="/student/signup" className="underline">Regsiter Here</a></p>
                <button type="submit" className="mt-10 bg-[#000000] text-[#ffffff] w-[100px] h-[50px] rounded-xl">LOGIN</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn