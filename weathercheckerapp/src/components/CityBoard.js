import React, { useState } from "react";
const CityBoard = (props) => {
  const { getCityData, fetchData } = props;

  return (
    <div>
      <img src="./icon/perfect-day.svg" alt="weathergood" />
      <br></br>
      <span className="select-city">Check Your City</span>
      <form onSubmit={fetchData}>
        <input onChange={(e) => getCityData(e.target.value)}
          placeholder="City" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default CityBoard;