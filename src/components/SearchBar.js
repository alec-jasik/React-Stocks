import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <label>
        <strong>Search Stocks</strong>
        <input onChange={(e) => props.handleSearchChange(e.target.value)} />
      </label>
      <br />
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={props.sort === 'Alphabetically'}
          onChange={(e)=> props.updateSort(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === 'Price'} onChange={(e)=> props.updateSort(e.target.value)} />
        Price
      </label>
      <label>
        <input type="radio" value="None" checked={props.sort === 'None'} onChange={(e)=> props.updateSort(e.target.value)} />
        None
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=> props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
