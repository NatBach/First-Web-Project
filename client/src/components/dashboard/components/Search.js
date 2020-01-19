import React from 'react';

export const Search = ({ placeholder, handleChange }) => (
    <div className="input-group input-group-custom">
      <input 
        type="text"
        className="form-control"
        name="search"
        placeholder={placeholder}
        onChange={handleChange}
        />
    </div>
);

export default Search;
