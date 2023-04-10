import React from 'react';
import './Current_Weather.css';


const CurrentWeather = () => {
 return (
   <div className="weather">
     <div className="top">
       <div>
         <p className="city">Dhaka</p>
         <p className="weather-description">Sunny</p>
       </div>
       <img alt="" className="weather-icon" src="" />
     </div>
     <div className="bottom">
       <p className="temperature">12°C</p>
       <div className="details">
         <div className="parameter-row">
           <span className="parameter-label">Details</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Feels like</span>
           <span className="parameter-value">21°C</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Wind</span>
           <span className="parameter-value">16 m/s</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Humidity</span>
           <span className="parameter-value">15%</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Pressure</span>
           <span className="parameter-value">12 hPa</span>
         </div>
       </div>
     </div>
   </div>
 );
};

export default CurrentWeather;