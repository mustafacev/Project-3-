<<<<<<< HEAD
import React from 'react';
import icons from './icons';

export const WeatherInfoIcons = {
  sunset: "./icon/temp.svg",
  sunrise: "./icon/temp.svg",
  humidity: "/icon/humidity.svg",
  wind: "./icon/wind.svg",
  pressure: "./icon/pressure.svg",
};

const WeatherBoard = (props) => {
  const { name, value } = props;
  return (
    <div className="InfoContainer">
      <img src={WeatherInfoIcons[name]} alt="weathericon" />
      <span className="InfoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

const WeatherDetails = (props) => {
  const { weather } = props;
  const checkDay = weather?.weather[0].icon?.includes('d');
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
        <img src={icons[weather?.weather[0].icon]} alt="weather-d-icon" />
      </div>

      <span className="city">{`${weather?.name}, ${weather?.sys?.country}`}</span>

      <span className="WeatherInfoLabel">Weather Info</span>
      <div className="WeatherInfoContainer">
        <WeatherBoard
          name={checkDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[checkDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherBoard name="humidity" value={weather?.main?.humidity} />
        <WeatherBoard name="wind" value={weather?.wind?.speed} />
      </div>
    </div>
  );
};
export default WeatherDetails;
=======
// components/WeatherBoard.js
import React from 'react';
import {Card} from 'react-bootstrap';
const WeatherBoard = ({dt, temp_min, temp_max, main, icon}) => {

  const date = new Date(dt);
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img
        variant="top"
       
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {temp_max}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherBoard;
>>>>>>> 5d2452c7a70d963d71bc93914b710cf259d209a6
