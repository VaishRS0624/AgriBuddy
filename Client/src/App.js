import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import WeatherUpdates from './components/WeatherUpdates';
import Notifications from './components/Notifications';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/weather" element={<WeatherUpdates />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
