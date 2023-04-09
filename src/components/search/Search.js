import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  console.log(GEO_API_URL);
  console.log(geoAPIOptions);

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
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      ></AsyncPaginate>
    </div>
  );
};

export default Search;
