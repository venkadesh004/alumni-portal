import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AlumniDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [chatIndex, setChatIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:5000/alumni/getStudents", {
        email: localStorage.getItem("email"),
      })
      .then((result) => {
        console.log(result.data["chats"]);
        setData(result.data["chats"]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  var sideChatChoice = data.map((value, index) => {
    return (
      <button
        className="bg-[#ffffff] text-[#000000] w-[300px] h-[70px] rounded-xl mt-3"
        onClick={(e) => {
          e.preventDefault();
          setChatIndex(index);
        }}
      >
        {value["studentEmail"]}
      </button>
    );
  });

  var renderedChat = data[chatIndex]["conversations"].map((value) => {
    if (value[1] === "alumni") {
        return <p className="text-right mt-2">{value[0]}</p>;
    }
    return <p className="text-left mt-2">{value[0]}</p>;
  });

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full h-[10vh] flex items-center justify-end p-3">
        <a href="/alumni/profile" className="mr-10">
          Profile
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
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] flex h-[80vh]">
          <div className="w-[30%] text-white bg-black flex flex-col items-center overflow-y-scroll scroll-smooth">{sideChatChoice}</div>
          <div className="w-[70%] text-black bg-white p-4 scroll-smooth h-full overflow-y-scroll">{renderedChat}</div>
        </div>
        <form
            onClick={(e) => {
              e.preventDefault();
              console.log(message);
              axios
                .put("http://localhost:5000/alumni/addChat", {
                  email: localStorage.getItem("email"),
                  studentEmail: data[chatIndex]["studentEmail"],
                  chat: message,
                })
                .then((result) => {
                  setData(result.data["chats"]);
                });
              setMessage("");
            }}
            className="w-[80%] ml-[800px] mt-2"
          >
            <input
              type="text"
              name="message"
              placeholder="Send a Message"
              value={message}
              onChange={(e) => {
                e.preventDefault();
                setMessage(e.target.value);
              }}
              className="w-[60%] h-[50px] pl-2 rounded-lg mr-2"
            />
            <button className="bg-[#000000] text-[#ffffff] w-[100px] h-[50px] rounded-xl">Send</button>
          </form>
      </div>
    </div>
  );
}

export default AlumniDashboard;
