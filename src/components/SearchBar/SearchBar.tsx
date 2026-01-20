import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="search-article-wrapper shadow-sm bg-white rounded-pill d-flex align-items-center px-4 py-2 mb-5 mt-2">
      <input 
        type="text" 
        placeholder="Search article" 
        className="form-control border-0 no-focus"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;