import React from 'react';
import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

const Forecast = ({data}) => {
 const WEEK_DAYS = [
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Sunday",
 ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  
 return (
   <>
     <label className="title">Daily</label>
     <Accordion allowZeroExpanded>
       {data.list.splice(0, 7).map((item, idx) => (
         <AccordionItem key={idx}>
           <AccordionItemHeading>
             <AccordionItemButton>
               <div className="daily-item">
                 <img
                   src={`icons/${item.weather[0].icon}.png`}
                   className="icon-small"
                   alt="weather"
                 />
                 <label className="day">{forecastDays[idx]}</label>
                 <label className="description">
                   {item.weather[0].description}
                 </label>
                 <label className="min-max">
                   {Math.round(item.main.temp_max)}°C /
                   {Math.round(item.main.temp_min)}°C
                 </label>
               </div>
             </AccordionItemButton>
           </AccordionItemHeading>
           <AccordionItemPanel>
             <div className="daily-details-grid">
               <div className="daily-details-grid-item">
                 <label>Pressure:</label>
                 <label>{item.main.pressure}</label>
               </div>
               <div className="daily-details-grid-item">
                 <label>Humidity:</label>
                 <label>{item.main.humidity}</label>
               </div>
               <div className="daily-details-grid-item">
                 <label>Clouds:</label>
                 <label>{item.clouds.all}%</label>
               </div>
               <div className="daily-details-grid-item">
                 <label>Wind speed:</label>
                 <label>{item.wind.speed} m/s</label>
               </div>
               <div className="daily-details-grid-item">
                 <label>Sea level:</label>
                 <label>{item.main.sea_level}m</label>
               </div>
               <div className="daily-details-grid-item">
                 <label>Feels like:</label>
                 <label>{item.main.feels_like}°C</label>
               </div>
             </div>
           </AccordionItemPanel>
         </AccordionItem>
       ))}
     </Accordion>
   </>
 );
};

export default Forecast;

/*
The Accordion component creates an accessible accordion widget that allows users to toggle the visibility of the content sections within it. The allowZeroExpanded prop specifies whether the accordion should allow all sections to be collapsed, or if one section must always remain expanded.

In this case, allowZeroExpanded is set to true, which means that all sections in the accordion can be collapsed, leaving none of them expanded. If allowZeroExpanded were set to false, then at least one section would always be expanded, and the user would not be able to collapse all sections at once.
*/

/*

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  This code is creating an array of forecast days starting with the current day of the week.

The first line creates a new Date object and calls its getDay() method to get the current day of the week as an integer value, where 0 represents Sunday, 1 represents Monday, and so on.

The second line creates a new array called forecastDays by slicing the WEEK_DAYS array starting from the current day of the week and ending at the end of the WEEK_DAYS array. This gives an array of days from the current day to the end of the week.

The third line concatenates this array with another sliced array, which starts at the beginning of the WEEK_DAYS array and ends at the day before the current day of the week. This gives an array of days from the beginning of the week to the day before the current day.

The result is an array of days that represents a forecast for the upcoming days, starting with the current day of the week and looping around to the beginning of the week.>

*/