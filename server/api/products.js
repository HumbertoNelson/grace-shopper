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
    const singleProduct = await Product.findByPk(req.params.id); //Figure out single products
    res.send(singleProduct);
  } catch (ex) {
    next(ex);
  }
});

app.post("/", async (req, res, next) => {
  // Finish out this route
  try {
    const review = await Review.create(req.body);
    res.send(review);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
