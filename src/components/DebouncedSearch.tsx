import React, { useState, useEffect } from 'react';

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce the query input
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  // Fetch data when the debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchResults = async (searchQuery) => {
    const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncedSearch;
