const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Sample notifications
const notifications = [
  { message: 'New Agricultural Workshop in your area!', date: '2024-12-10' },
  { message: 'Government subsidy available for farmers in your region.', date: '2024-12-11' }
];

// Endpoint for fetching notifications
app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

// Sample weather data API
app.get('/api/weather', (req, res) => {
  res.json({
    temp: 30,
    humidity: 75,
    description: 'Clear sky'
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
