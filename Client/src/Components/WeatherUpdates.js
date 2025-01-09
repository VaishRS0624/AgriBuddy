import React, { useEffect, useState } from 'react';

const WeatherUpdates = () => {
  const [weather, setWeather] = useState({});
  
  useEffect(() => {
    // Fetch weather data from an API (e.g., OpenWeatherMap)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=NewDelhi&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div className="weather-updates">
      <h2>Weather Updates</h2>
      {weather.main ? (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherUpdates;
