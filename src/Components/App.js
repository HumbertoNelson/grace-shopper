import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchCart } from "../store";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Review from "./reviewForm";

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);

  return (
    <div className="app">
      <h1>Grace Shopper</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Review</Link>
      </nav>
      <Routes>
        <Route path="/" element={auth.id ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={auth.id ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </div>
  );
};

export default App;
