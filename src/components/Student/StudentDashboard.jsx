import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../assets/search-icon.png";
import Location from "../../assets/location-white.png";
import LinkedIn from "../../assets/linkedin-white.png";
import axios from "axios";

function StudentDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student/getFilters")
      .then((result) => {
        console.log(result);
        setFilters(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/student/getAlumni")
      .then((result) => {
        console.log(result);
        setData(result.data);
        setSearchData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    if (e.target.value === "") {
      setSearchData(data);
    }

    setSearchData(data.filter(filterFunc));
  };

  var filterFunc = (element) => {
    if (element["name"].toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  var dataElements = searchData.map((value, index) => {
    if (value["name"] !== "") {
      return (
        <div className="w-[75%] bg-black text-white rounded-lg h-[200px] p-5 flex items-center justify-evenly">
          <div>
            <h1 className="text-3xl uppercase">{value["name"]}</h1>
            <p>
              {value["position"]}, {value["company"]}
            </p>
          </div>
          <div>
            <div className="flex items-center text-left">
              <img src={Location} alt="" className="h-[20px] aspect-auto" />
              <p className="ml-1">{value["location"]}</p>
            </div>
            <div className="flex items-center text-left mt-3">
              <img src={LinkedIn} alt="" className="h-[20px] aspect-auto" />
              <p className="ml-1">{value["linkedin"]}</p>
            </div>
          </div>
          <div>
            <button
              className="bg-[#ffffff] text-[#000000] w-[200px] h-[50px] rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .put("http://localhost:5000/student/connectChat", {
                    email: value["email"],
                    studentEmail: localStorage.getItem("email"),
                  })
                  .then((result) => {
                    navigate("/student/chat");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Request Chat
            </button>
          </div>
        </div>
      );
    }
  });

  if (filters.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <div className="w-full h-[10vh] flex items-center justify-end p-3">
        <a href="/student/chat" className="mr-10">
          Chat Rooms
        </a>
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
      <div>
        <div className="flex items-center justify-evenly mt-10 w-full">
          <div className="flex items-center h-16 w-[500px] justify-around bg-[#000000]/10 p-3 rounded-full">
            <img src={SearchIcon} alt="" className="h-7 w-7" />
            <input
              type="search"
              className="border-none outline-none h-full w-full bg-transparent px-3"
              placeholder="Search"
              value={search}
              onChange={handleSearchInput}
            />
          </div>
          <div className="flex items-center justify-between w-[700px]">
            <p className="font-bold">Filter: </p>
            <select
              name=""
              id=""
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            >
              <option value="Domain">Domain</option>
              {filters[0].map((value) => {
                return <option value={value}>{value}</option>;
              })}
            </select>
            <select
              name=""
              id=""
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            >
              <option value="Location">Location</option>
              {filters[1].map((value) => {
                return <option value={value}>{value}</option>;
              })}
            </select>
            <select
              name=""
              id=""
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            >
              <option value="Company">Company</option>
              {filters[2].map((value) => {
                return <option value={value}>{value}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="w-full p-5 flex flex-col items-center">
          {dataElements}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
