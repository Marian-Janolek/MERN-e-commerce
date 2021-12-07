const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// register

router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (!user) return res.status(401).json('Wrong name');
    if (originalPassword !== req.body.password)
      return res.status(401).json('Wrong password');

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
