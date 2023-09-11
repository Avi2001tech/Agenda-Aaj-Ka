
const express = require('express');
const router = express.Router();
const User = require('../models/User');

//  new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login user
router.post('/login', (req, res) => {
  try {
    const { email, pass } = req.body;
    const user = User.findOne({ email:email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid  email credentials' });
      
    } else if (user.password !== pass) {
        return res.status(401).json({ error: 'Invalid password credentials' });
      }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// router.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         res.status(422).json({ error: "Please add Email and Password" });
//     }

//     User.findOne({ email: email }).then((savedUser) => {
//         if (!savedUser) {
//             return res.status(422).json({ error: "Invalid email" })
//         }
//         else {
// console.log(savedUser);
// res.status(200).json(savedUser);
//         }
//     })
//     .catch(err => {console.log(err)});
// })

module.exports = router;
