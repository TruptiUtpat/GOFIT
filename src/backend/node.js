const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/sendmail', (req, res) => {
  const { name, email } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password' // Use environment variables for security
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Registration Successful',
    text: `Hello ${name}, your registration is successful!`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send({ messageId: info.messageId });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
