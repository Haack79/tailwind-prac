'use client';

import { useCallback, useEffect, useState } from "react";
import SearchWeather from "./SearchWeather";

const Weather = () => {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = useCallback(async (search: string) => {
    if (!search) return;

    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  const getCurrentDate = () => {
    const date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  useEffect(() => {
    fetchWeatherData('anchorage');
  }, [fetchWeatherData]);

  return (
    <div>
      <h1>Weather</h1>
      <SearchWeather 
        search={search} 
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading && <div>Loading...</div>}
      {weatherData && weatherData.main && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
        </div>
      )}
      <p>{getCurrentDate()}</p>
    </div>
  );
};

export default Weather;
