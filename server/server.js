const express = require('express');
const cors=require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const crypto = require('crypto');
const db = require('./connnection');
const { urlencoded } = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};


app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { firstName, lastName, email, password: hashedPassword };

      db.query('INSERT INTO users SET ?', newUser, (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: 'User created successfully' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up user', error });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetExpires = new Date(Date.now() + 5 * 60 * 1000); 

    db.query('UPDATE users SET resetToken = ?, resetExpires = ? WHERE email = ?', [resetToken, resetExpires, email], async (err) => {
      if (err) throw err;

      const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
      await sendEmail(email, 'Password Reset', `Click here to reset your password: ${resetURL}`);
      res.status(200).json({ message: 'Password reset link sent to your email' });
    });
  });
});

app.post('/reset-password', (req, res) => {
  const { token, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  db.query('SELECT * FROM users WHERE resetToken = ? AND resetExpires > NOW()', [token], async (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    db.query('UPDATE users SET password = ?, resetToken = NULL, resetExpires = NULL WHERE resetToken = ?', [hashedPassword, token], (err) => {
      if (err) throw err;
      res.status(200).json({ message: 'Password reset successful' });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
