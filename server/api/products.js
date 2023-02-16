const express = require("express");
const app = express.Router();
const { Product } = require("../db");
const Review = require("../db/Review");

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

app.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: Review,
    });
    res.send(product);
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch product",
      error: err.message,
    });
  }
});

app.get("/:id/reviews", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        productId: req.params.id,
      },
    });
    res.send(reviews);
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch reviews",
      error: err.message,
    });
  }
});

app.post("/:id/reviews", async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.send(newReview);
  } catch (err) {
    res.status(500).json({
      message: "Could not create review",
      error: err.message,
    });
  }
});

module.exports = app;
