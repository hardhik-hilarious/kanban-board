import React from 'react';

const Filters = ({ onGroupChange, onSortChange }) => {
  return (
    <div className="filters">
      <select onChange={(e) => onGroupChange(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>

      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="title">Sort by Title</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
};

export default Filters;