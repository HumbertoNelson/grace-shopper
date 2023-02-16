const express = require("express");
const app = express.Router();
const { User } = require("../db");

module.exports = app;

app.get('/', async(req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.getOrders());
  } catch (err) {
    res.status(500).json({
      message: "Could not get orders",
      error: err.message,
    });

app.post('/', async(req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.createOrder());
  } catch (err) {
    res.status(500).json({
      message: "Could not create order",
      error: err.message,
    });
  }
});

app.get("/cart", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.getCart());
  } catch (err) {
    res.status(500).json({
      message: "Could not get cart",
      error: err.message,
    });
  }
});

app.post("/cart", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.addToCart(req.body));
  } catch (err) {
    res.status(500).json({
      message: "Could not add item to cart",
      error: err.message,
    });
  }
});

app.put("/cart", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.removeFromCart(req.body));
  } catch (err) {
    res.status(500).json({
      message: "Could not remove item from cart",
      error: err.message,
    });
  }


});
