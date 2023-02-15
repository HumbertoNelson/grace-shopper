const express = require('express');
const app = express.Router();
const { User } = require('../db');

module.exports = app;

app.get('/', async(req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (err){
    res.status(500).json({
      message: "Could not find user",
      error: err.message,
    });
  }
});

app.post('/', async(req, res, next) => {
  try {
    res.send(await User.authenticate(req.body));
  } catch (err){
    res.status(500).json({
      message: "Could not log in user",
      error: err.message,
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const token = await User.encryptUser(req.body);
    res.json(token);
  } catch (err) {
    res.status(500).json({
      message: "Could not register user",
      error: err.message,
    });
  }
});

app.put('/user', async(req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "Could not update user",
      error: err.message,
    });
  }
});
