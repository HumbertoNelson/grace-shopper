const express = require('express');
const app = express.Router();
const { Product } = require('../db');

app.get('/', async(req, res, next)=> {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch products",
      error: err.message,
    });
  }
});

module.exports = app;