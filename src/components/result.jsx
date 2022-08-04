import { toast } from "react-toastify";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const key = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData]= useState(""); 

  useEffect(() => {
    const getWeather = async () => {
      const city = params.cityName.toLowerCase();
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      const response = await axios.get(apiUrl);
      const res = await response.data;
      setData({
        descp: res.weather[0].description,
        temp: res.main.temp,
        city: res.name,
        humidity: res.main.humidity
    })
    };

    getWeather();
  }, []);

  return (
    <div>
     <p>{data.city}</p>
     <p>{data.temp}</p>
     <p>{data.descp}</p>
     <p>{data.humidity}</p>
    </div>
  )
}

export default Result;
