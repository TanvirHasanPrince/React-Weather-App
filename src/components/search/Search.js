// Import the React library and the `useState` hook from the `react` module
import React, { useState } from "react";

// Import the `AsyncPaginate` component from the `react-select-async-paginate` module
import { AsyncPaginate } from "react-select-async-paginate";

// Define a functional component named `Search` with a single prop named `onSearchChange`
const Search = ({ onSearchChange }) => {
  // Declare a state variable named `search` and a corresponding function to update it named `setSearch`
  const [search, setSearch] = useState(null);

  // Define a function named `handleOnChange` that takes a single parameter `searchData`
  const handleOnChange = (searchData) => {
    // Update the `search` state variable with the new `searchData` value
    setSearch(searchData);
    // Call the `onSearchChange` callback with the new `searchData` value
    onSearchChange(searchData);
  };

  // Return some JSX that renders an `AsyncPaginate` component with some props
  return (
    <div>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
      ></AsyncPaginate>
    </div>
  );
};

// Export the `Search` component as the default export
export default Search;
