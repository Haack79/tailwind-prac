'use client';

import { useState } from "react";

interface SearchWeatherProps {
  search: string;
  setSearch: (search: string) => void;
  handleSearch: () => void;
}

const SearchWeather = ({ search, setSearch, handleSearch }: SearchWeatherProps) => {
  return (
    <div className="w-full flex items-center justify-around mb-4 mt-2">
      <input
        className="p-2 w-1/2"
        type="text"
        placeholder="Search Weather by City"
        value={search}
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="border border-solid border-blue-500 rounded-xl p-4 bg-blue-200" onClick={handleSearch}>Search Weather</button>
    </div>
  );
};

export default SearchWeather;
