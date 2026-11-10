import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search items..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select name="filter" defaultValue="All" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
