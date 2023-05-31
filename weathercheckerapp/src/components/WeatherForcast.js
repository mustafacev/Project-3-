import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherForcast.css';


const WeatherForcast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const API_KEY = `${process.env.REACT_APP_API_KEY}`      
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
        );
        setForecast(response.data.list);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecast();
  }, [city]);

  // Convert temperature from Kelvin to Celsius
  const convertTemperature = (temperature) => {
    return Math.round(temperature - 273.15);
  };

  // Calculate average temperature per day
  const calculateAverageTemperature = (dailyForecasts) => {
    const temperatures = dailyForecasts.map((data) => data.main.temp);
    const sum = temperatures.reduce((acc, temperature) => acc + temperature, 0);
    const average = sum / dailyForecasts.length;
    return convertTemperature(average);
  };

    // Group forecast data by date
    const groupForecastsByDate = () => {
        const groupedForecasts = {};
    
        forecast.forEach((data) => {
          const date = new Date(data.dt * 1000);
          date.setHours(0, 0, 0, 0); // Set time to midnight
    
          if (!groupedForecasts[date]) {
            groupedForecasts[date] = [];
          }
    
          groupedForecasts[date].push(data);
        });
    
        return groupedForecasts;
      };

  // Get daily forecasts with average temperature starting from tomorrow
  const dailyForecasts = Object.values(groupForecastsByDate())
    .filter((forecasts) => {
      const forecastDate = new Date(forecasts[0].dt * 1000);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate());

      return forecastDate >= tomorrow;
    })
    .slice(0, 5)
    .map((forecasts) => ({
      date: new Date(forecasts[0].dt * 1000).toLocaleDateString(),
      temperature: calculateAverageTemperature(forecasts),
      iconCode: forecasts[0].weather[0].icon.replace("n","d"),
    }));

  return (
    <div>
      <h5 className="forcast-title">Next 5 days Weather Forecast for {city}</h5>
      <div className="forecast-container">
        {dailyForecasts.map((data) => (
          <div key={data.date} className="forecast-card">
            <span className="date">{data.date}</span>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${data.iconCode}.png`}
              alt="weather-icon"
            />
            <span className="temperature">{data.temperature}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForcast;
