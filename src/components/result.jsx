import { toast } from "react-toastify";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const key = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const city = params.cityName.toLowerCase();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        const response = await axios.get(apiUrl);
        const res = await response.data;
        setData({
          desp: res.weather[0].description,
          caption: res.weather[0].main,
          temp: res.main.temp,
          city: res.name,
          humidity: res.main.humidity,
          icon: res.weather[0].icon,
          temp_min: res.main.temp_min,
          temp_max: res.main.temp_max,
         
        });
      } catch (error) {
        navigate("/");
        toast.error("Invalid City, Try Again");
      }
    };

    getWeather();
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={` http://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="Weather Icon"
          className="rounded-xl"
        />
        <p>{data.caption}</p>
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="card-title">{data.city}</h1>
        <p>{data.desp}</p>
        <p>{data.temp} °C</p>
        <p>
          Humidity {": "}
          {data.humidity} %
        </p>
        <p>
          Min {": "}
          {data.temp_min}°C {" | "} Max {": "}
          {data.temp_max}°C
        </p>
        <div className="card-actions pt-3">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
