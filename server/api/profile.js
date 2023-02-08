const express = require('express');
const app = express.Router();
const { User } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  }
  catch(ex){
    next(ex);
  }
});

app.put('/', async(req, res, next)=> {
  try {
    const user = await User.findByToken(req.headers.authorization);
    await user.update(req.body);
    res.json(user);
  }
  catch(ex){
    next(ex);
  }
});