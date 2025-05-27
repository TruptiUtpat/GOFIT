const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const PORT = 3000;
const USERS_FILE = 'users.json';

// Middleware
app.use(cors());
app.use(express.json());

// Initialize users file if not present
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
}

// POST /login - Register a new user
app.post('/login', (req, res) => {
  const newUser = req.body;

  // Basic validation
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Read existing users
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
  
  // Generate unique ID
  newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  // Save new user
  users.push(newUser);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  res.status(200).json({ message: 'User registered successfully', user: newUser });
});

// POST /sendmail - Placeholder route
app.post('/sendmail', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required to send mail.' });
  }

  // Placeholder logic
  console.log(`Pretending to send email to ${name} at ${email}...`);

  res.status(200).json({ message: 'Email sent successfully (mocked)' });
});
app.get('/', (req, res) => {
  res.send('Welcome to GoFit Backend!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
