import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import axios from "axios";
import {toast} from "react-toastify"; 


function Body() {
  const [text, setText] = useState("");
  const key = process.env.REACT_APP_API_KEY

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    if (text === "") {
      toast.error("Please Enter a City Name"); 
    }
  };

 

  return (
    <div className="flex flex-col">
      <div className="mr-20 flex flex-row items-center mb-20 ml-10">
        <TiWeatherCloudy className="w-20 h-20" />
        <div className="text-2xl ml-3">
          Your Weather Report is one click away !
        </div>
      </div>
      <div className="form-control ml-10">
        <div className="input-group flex flex-row">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered input-lg w-1/2"
            value={text}
            onChange={handleChange}
          />
          <button className="btn btn-square btn-lg" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
