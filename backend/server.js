const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // To allow requests from Angular frontend
app.use(bodyParser.json()); // To parse incoming JSON data
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Route for handling registration form submission
app.post('/register', (req, res) => {
  const { name, email, contact, age, gender, weight } = req.body;
  
  // Here, we just return the data as a response.
  // In a real application, you'd store this in a database.
  res.status(200).json({ message: 'User registered successfully', data: req.body });
});

const PORT = process.env.PORT || 3000;
 // You can change this if needed
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on ${PORT}`);
});

