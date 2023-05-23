import React, { useState } from "react";
import WeatherBoard from "./components/WeatherBoard";
import CityBoard from "./components/CityBoard"
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";

function App() {
  const [weather, WeatherData] = useState();
  const [city, getCityData] = useState();

  const API_KEY = `${process.env.REACT_APP_API_KEY}`
  const fetchData = async (e) => {

    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    WeatherData(response.data)
  };

  return (
    <div className='main-container'>
      <span className='App-header'>Weather Checker App</span>
      {city && weather ? (
        <WeatherBoard weather={weather} city={city} />
      ) : (
        <CityBoard getCityData={getCityData} fetchData={fetchData} />
      )}
    </div>
  );
}

export default App;