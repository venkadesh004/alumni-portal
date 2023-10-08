import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/faculty/getUnacceptedStudents")
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var studentData = data.map((value, index) => {
    return (
      <div className="w-[400px] h-[200px] bg-black text-white p-5 flex flex-col items-center justify-evenly rounded-3xl">
        <p>Email: {value["email"]}</p>
        <div className="w-[300px] flex items-center justify-evenly">
          <button className="bg-[#ffffff] text-[#000000] w-[100px] h-[50px] rounded-xl" onClick={(e) => {
            e.preventDefault();
            axios.put("http://localhost:5000/faculty/acceptStudent", {
                "email": value["email"]
            }).then(result => {
                console.log(result);
                setData(result.data);
            }).catch(err => {
                console.log(err);
            });
          }}>
            Approve
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[10vh] flex items-center justify-end p-3">
        <button
          className="bg-[#000000] text-[#ffffff] w-[100px] h-[50px] rounded-xl"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Logout
        </button>
      </div>
      <div className="w-full p-5 flex flex-wrap gap-5">{studentData}</div>
    </div>
  );
}

export default FacultyDashboard;
