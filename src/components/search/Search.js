import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

   const loadOptions = (inputValue) => {
     return fetch(
       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
       geoAPIOptions
     )
       .then((response) => response.json())
       .then((response) => {
         return {
           options: response.data.map((city) => {
             return {
               value: `${city.latitude} ${city.longitude}`,
               label: `${city.name}, ${city.countryCode}`,
             };
           }),
         };
       });
   };


  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      ></AsyncPaginate>
    </div>
  );
};

export default Search;

/*
This code block is a React component that exports a Search component. It imports the following libraries and variables:

React and useState from the "react" library
AsyncPaginate from the "react-select-async-paginate" library
GEO_API_URL, geoAPIOptions from "../../api"
The component defines a state variable search using the useState hook, initialized to null. It also defines a function loadOptions which takes an inputValue parameter and returns a Promise. This function sends an HTTP GET request to a geo API endpoint with two parameters: minPopulation and namePrefix. The geoAPIOptions variable is passed as the options for the HTTP request. Once the Promise is resolved, it returns an object with an options property that contains an array of options for the AsyncPaginate component. These options are generated by mapping over the data array in the response object and returning an object with a value property and a label property. The value property is a string composed of the latitude and longitude properties of a city object separated by a space, while the label property is a string composed of the name and countryCode properties of the same city object separated by a comma.

The Search component returns a div that contains the AsyncPaginate component. The AsyncPaginate component is a React component that renders a searchable dropdown menu. It accepts several props, including:

placeholder: a string that is displayed as the placeholder text in the input field
debounceTimeout: a number representing the amount of time (in milliseconds) to wait after the user types before sending an HTTP request to the API
value: the current value of the input field, which is controlled by the search state variable
onChange: a function that is called when the user selects an option from the dropdown menu. This function sets the search state variable to the selected value and calls the onSearchChange prop with the same value.
loadOptions: a function that is called with the current value of the input field and returns a Promise that resolves to an object with an options property (as described above).
Overall, this component allows the user to search for cities with a population greater than 1 million by name prefix using a dropdown menu that fetches data from a geo API endpoint. The selected city value is passed to a function provided by a parent component through the onSearchChange prop.


onChange and loadOptions are two props used in the AsyncPaginate component in the provided code block.

onChange is a function that is called when the user selects an option from the dropdown menu. It takes a single parameter searchData which represents the currently selected value. In the Search component, the onChange function is defined as follows:

const handleOnChange = (searchData) => {
  setSearch(searchData);
  onSearchChange(searchData);
};
This function sets the search state variable to the currently selected value using the setSearch function provided by the useState hook. It then calls the onSearchChange prop, passing the selected value as an argument. The onSearchChange prop is a function that is provided by a parent component of Search and is used to handle the selected value in some way. By calling onSearchChange with the selected value, Search can communicate the selected value to its parent component.

loadOptions is a function that is called when the user types in the input field of the dropdown menu. It takes a single parameter inputValue which represents the current value of the input field. In the Search component, the loadOptions function is defined as follows:


const loadOptions = (inputValue) => {
  return fetch(
    `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
    geoAPIOptions
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    });
};
This function returns a Promise that resolves to an object with an options property. The options property is an array of objects that represent the available options in the dropdown menu. The options are generated by sending a GET request to the geo API endpoint with the minPopulation and namePrefix parameters. The response from the API is then converted to JSON and mapped over to generate an array of objects. Each object has a value property and a label property, which are used to populate the dropdown menu. The value property is a string that represents the latitude and longitude of the city, separated by a space. The label property is a string that represents the name and country code of the city, separated by a comma.

In summary, onChange is a function that is called when the user selects an option from the dropdown menu, and loadOptions is a function that is called when the user types in the input field of the dropdown menu. onChange updates the state of the Search component with the selected value and communicates that value to a parent component through the onSearchChange prop. loadOptions fetches data from a geo API endpoint and generates an array of options to populate the dropdown menu based on the user's input.
*/