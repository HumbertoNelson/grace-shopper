const express = require("express");
const app = express.Router();
const { Product } = require("../db");
const Review = require("../db/Review");

app.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: Review,
    });
    res.send(singleProduct);
  } catch (ex) {
    next(ex);
  }
});

//Finds all reviews for the single product
app.get("/:id/reviews", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        productId: req.params.id,
      },
    });
    res.send(reviews);
  } catch (ex) {
    next(ex);
  }
});

app.post("/:id/reviews", async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.send(newReview);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
