import React, { useState } from "react";
import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";
import CityBoard from "./components/CityBoard";
import WeatherForcast from "./components/WeatherForcast"; 
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";

function App() {
  const [weather, WeatherData] = useState();
  const [city, getCityData] = useState('Boston');
  const API_KEY = `${process.env.REACT_APP_API_KEY}`
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      WeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  return (
    <div className='main-container'>
      <Header/>
      {city && weather ? (
        <WeatherBoard weather={weather} city={city} />
      ) : (
        <CityBoard getCityData={getCityData} fetchData={fetchData} />
      )}
      {weather && <WeatherForcast city={city} />}
      <Footer/>
    </div>
  );
}

export default App;