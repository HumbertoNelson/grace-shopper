const express = require('express');
const app = express.Router();
const { Product } = require('../db');

app.get('/', async(req, res, next)=> {
    try {
    const products = await Product.findAll();
      res.send(products);
    }
    catch(ex){
      next(ex);
    }
  });

  app.post('/', async(req, res, next) => {
    try{
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({
        message: "Could not create product",
        error: err.message,
      });
    }
  });

  module.exports = app;