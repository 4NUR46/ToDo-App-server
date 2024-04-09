import React from 'react';

const FilterDropdown = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default FilterDropdown;
