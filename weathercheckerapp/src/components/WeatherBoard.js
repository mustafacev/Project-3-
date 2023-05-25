import React from 'react';
import "./WeatherBoard.css";
import { FaSun} from "react-icons/fa";
import { FaWind  } from "react-icons/fa";
import { WiHumidity  } from "react-icons/wi";

const WeatherBoard =(props)=>{
  const{ name, value } = props;
  return(
      <div className="InfoContainer">
          <span className="InfoLabel">
              {value}
              <span>{name}</span>
          </span>
      </div>
  );
};

const WeatherDetails = (props) => {
  const {weather}=props;
  const checkDay = weather?.weather[0].icon?.includes('d');
  const iconCode = weather?.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  };
return (
  <div>
    <div className="weather-condition">
      <span className="details">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
          </span>
          <img src={iconUrl} alt="weather-icon"/>
    </div>

    <span className="city">{`${weather?.name}, ${weather?.sys?.country}`}</span>
    <br></br>
    <span className="WeatherInfoLabel"> Weather Condition Details</span>
    <div className="WeatherInfoContainer">
    <FaSun/>
      <WeatherBoard
       name={checkDay ? " sunset" : " sunrise"}
      value={`${getTime(weather?.sys[checkDay ? "sunset" : "sunrise"])}`}
       />
      <WiHumidity/> 
      <WeatherBoard name=" humidity" value={weather?.main?.humidity} />
      <FaWind/>
      <WeatherBoard name=" wind" value={weather?.wind?.speed} />
    </div>
  </div>
);
};
export default WeatherDetails;