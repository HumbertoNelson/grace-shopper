const express = require('express');
const app = express.Router();
const { User } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  }
  catch (err){
    res.status(500).json({
      message: "Could not find user",
      error: err.message,
    });
  }
});

app.post('/', async(req, res, next)=> {
  try {
    res.send(await User.authenticate(req.body));
  }
  catch (err){
    res.status(500).json({
      message: "Could not login user",
      error: err.message,
    });
  }
});

app.post("/register", async (req, res) => {
  try {
    const token = await User.encryptUser(req.body);
    res.json(token);
  } 
  catch (err) {
    res.status(500).json({
      message: "Could not register user",
      error: err.message,
    });
  }
});