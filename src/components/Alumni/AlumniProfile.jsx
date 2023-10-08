import React, { useEffect, useState } from "react";

import Institution from "../../assets/institution-white.png";
import Linkedin from "../../assets/linkedin-white.png";
import Location from "../../assets/location-white.png";
import Professional from "../../assets/alumni-white.png";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function AlumniProfile() {
  const [editable, setEditable] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/alumni/getAlumniData", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      })
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full">
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
      <div className="w-full flex flex-col items-center mt-5">
        <form
          className="w-[80%] bg-black text-white p-10 flex justify-between items-start rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            if (!editable) {
              setEditable(true);
              var element = e.currentTarget.elements;
              var dataObject = {
                email: localStorage.getItem("email"),
                name:
                  element.name.value === ""
                    ? element.name.placeholder
                    : element.name.value,
                position:
                  element.domain.value === ""
                    ? element.domain.placeholder
                    : element.domain.value,
                company:
                  element.company.value === ""
                    ? element.company.placeholder
                    : element.company.value,
                location:
                  element.location.value === ""
                    ? element.location.placeholder
                    : element.location.value,
                linkedin:
                  element.linkedin.value === ""
                    ? element.linkedin.placeholder
                    : element.linkedin.value,
              };

              axios
                .put("http://localhost:5000/alumni/editAlumniData", dataObject)
                .then((result) => {
                  console.log(result);
                  setData(result.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              setEditable(false);
            }
          }}
        >
          <div className="h-[400px] flex flex-col justify-evenly">
            <input
              className="text-5xl uppercase font-bold text-white bg-transparent"
              placeholder={data["name"]}
              disabled={editable}
              name="name"
            />
            <div className="flex items-center">
              <img src={Professional} alt="" className="h-[20px] mr-3" />
              <input
                type="text"
                name="domain"
                placeholder={data["position"]}
                className="bg-transparent"
                disabled={editable}
              />
            </div>
            <div className="flex items-center">
              <img src={Institution} alt="" className="h-[20px] mr-3" />
              <input
                type="text"
                name="company"
                className="bg-transparent"
                placeholder={data["company"]}
                disabled={editable}
              />
            </div>
            <div className="flex items-center">
              <img src={Location} alt="" className="h-[20px]  mr-3" />
              <input
                type="text"
                name="location"
                className="bg-transparent"
                placeholder={data["location"]}
                disabled={editable}
              />
            </div>
            <div className="flex items-center">
              <img src={Linkedin} alt="" className="h-[20px]  mr-3" />
              <input
                type="text"
                name="linkedin"
                className="bg-transparent"
                placeholder={data["linkedin"]}
                disabled={editable}
              />
            </div>
          </div>
          <div>
            <button className="bg-[#ffffff] text-[#000000] w-[100px] h-[50px] rounded-xl">
              {editable ? <p>Edit</p> : <p>Save</p>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlumniProfile;
