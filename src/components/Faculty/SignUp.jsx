import axios from "axios";
import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate();

    return (
      <div className="w-full h-full">
          <div className="mt-3">
              <h1 className="font-bold text-xl">
                  Sign Up Faculty
              </h1>
              <p>You will be the Authorizer of the students for this application</p>
          </div>
          <div className="mt-3 flex flex-col items-start justify-evenly h-[400px]">
              <form action="" className="flex flex-col items-start h-full" onSubmit={(e) => {
                e.preventDefault();

                if (e.currentTarget.elements.password.value === e.currentTarget.elements.confirmPassword.value && e.currentTarget.elements.email.value !== "") {
                    axios.post("http://localhost:5000/faculty/addFacultyData", {
                        "email": e.currentTarget.elements.password.value,
                        "password": e.currentTarget.elements.password.value
                    }).then(result => {
                        console.log(result);
                        navigate('/faculty/signin');
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    alert("Passwords dont't match!");
                }
              }}>
                  <input type="text" placeholder="Enter your email" name="email" className="mt-10 border-2 rounded-xl border-black p-3 w-[300px]" />
                  <input type="password" placeholder="Enter your password" name="password" className="mt-5 border-2 rounded-xl border-black p-3 w-[300px]" />
                  <input type="password" placeholder="Confirm Password" name="confirmPassword" className="mt-5 border-2 rounded-xl border-black p-3 w-[300px]" />
                  <button type="submit" className="mt-10 bg-[#000000] text-[#ffffff] w-[100px] h-[50px] rounded-xl">SUBMIT</button>
              </form>
          </div>
      </div>
    )
  }
  
  export default SignUp