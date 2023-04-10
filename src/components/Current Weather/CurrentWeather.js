import React from 'react';
import './Current_Weather.css';


const CurrentWeather = () => {
 return (
  <div className="weather">
   <div className="top">
    <p className='city'>Dhaka</p>
    <p className='weather description'>Sunny</p>
   </div>
   <img src="icons/01d.png" className = 'weather-icon'alt="" />
  </div>
 );
};

export default CurrentWeather;