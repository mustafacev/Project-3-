import React, { useState } from "react";
import "./CityBoard.css";

const CityBoard = (props)=>{
  const { getCityData, fetchData } = props;

  return (
      <div>
      <img src="http://openweathermap.org/img/w/01d.png" alt="weathergood"/>
      <span className="select-city">Find Weather of your city</span>
      <form onSubmit={fetchData}>
          <input onChange={(e) => getCityData(e.target.value)}
          placeholder="City" />
          <button type="submit">Search</button>
      </form>
      </div>
  );
};
export default CityBoard;