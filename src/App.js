import { useState } from 'react';
import './App.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import CurrentWeather from './components/Current Weather/CurrentWeather';
import Search from './components/search/Search';
import Forecast from './components/Forecast/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleonSearchChange =(searchData) => {
   const [lat, lon]= searchData.value.split(' ');


   const currenWeatherFetch = fetch(
     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
   );

    const forcastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

   Promise.all([currenWeatherFetch, forcastFetch])
   .then(async (response) => {
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();
    setCurrentWeather({city: searchData.label, ...weatherResponse});
    setForecast({ city: searchData.label, ...forecastResponse });
   }).catch(err => console.log(err))

 
   
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}></Search>
      {currentWeather && (
        <CurrentWeather data={currentWeather}></CurrentWeather>
      )}

      {forecast && <Forecast data={forecast}></Forecast>}
    </div>
  );
}

export default App;


/*
Promise.all is a JavaScript method that is commonly used in React applications to handle multiple asynchronous requests simultaneously.

When you need to make multiple requests to an external API, for example, you can use Promise.all to fetch all the data at once and then update your state with the results.

Here's an example of how to use Promise.all in React:

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const urls = [
      'https://api.example.com/data1',
      'https://api.example.com/data2',
      'https://api.example.com/data3'
    ];

    Promise.all(urls.map(url =>
      fetch(url)
        .then(response => response.json())
    ))
    .then(results => setData(results))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
In this example, we have an array of URLs that we want to fetch data from. We use Promise.all to fetch data from all the URLs at once, and then update the component state with the results using setData.

Note that Promise.all returns a new promise that resolves when all of the promises in the array have resolved. If any of the promises reject (e.g., if there is an error with one of the API requests), then the catch block will be triggered.

By using Promise.all, we can avoid making multiple requests one after the other, which can result in slower performance and longer loading times. Instead, we can fetch all the data in parallel, which can speed up the loading process and improve the overall user experience.
*/

/*
using the spread operator to merge the contents of the weatherResponse object with the city property into a new object that you pass as an argument to setCurrentWeather.

The spread operator (...) is used in JavaScript to copy the properties of one object or array into another object or array. In this case, it is used to copy the properties of weatherResponse into a new object that also includes the city property.

The syntax {city: searchData.label, ...weatherResponse} creates a new object with a property called city whose value is set to searchData.label. The rest of the properties from weatherResponse are then added to this object using the spread operator.

So by using the spread operator in this way, you are creating a new object that includes both the city property and the properties from the weatherResponse object, and passing that object as an argument to setCurrentWeather.
*/