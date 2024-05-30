import React from 'react';
import './VolunteerFilter.css'
const VolunteerFilter = ({ categories, selectedCategory, onFilterChange }) => {
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    onFilterChange(category);
  };

  return (
    <div className="volunteerFilter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VolunteerFilter;
