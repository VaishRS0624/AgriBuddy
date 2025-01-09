import React from 'react';
import WeatherUpdates from './WeatherUpdates';
import Notifications from './Notifications';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Agricultural System Bridge</h1>
      <WeatherUpdates />
      <Notifications />
    </div>
  );
};

export default Home;
