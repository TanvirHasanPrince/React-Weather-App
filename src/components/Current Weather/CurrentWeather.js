import React from 'react';
import './Current_Weather.css';


const CurrentWeather = () => {
 return (
   <div className="weather">
     <div className="top">
       <p className="city">Dhaka</p>
       <p className="weather description">Sunny</p>
       <img src="icons/01d.png" className="weather-icon" alt="" />
     </div>
     <div className="bottom">
       <p classname="temperature"> 18°c </p>
       <div className="details">
         <div className="parameter-row">
           <span className="parameter-label">Deatils</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Feels like</span>
           <span className="parameter-value">21°C</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Wind</span>
           <span className="parameter-value">2 m/s</span>
         </div>
         <div className="parameter-row">
           <span className="parameter-label">Humidity</span>
           <span className="parameter-value">15%</span>
         </div>

         <div className="parameter-row">
           <span className="parameter-label">Pressure</span>
           <span className="parameter-value">15 hPa</span>
         </div>
       </div>
     </div>
   </div>
 );
};

export default CurrentWeather;