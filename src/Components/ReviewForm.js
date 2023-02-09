import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchReview, setReview } from "../store/review";

// class Review extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviewText: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSumbit = this.handleSumbit.bind(this);
//   }

//   handleChange(e) {
//     e.preventDefault();
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   async handleSumbit(e) {
//     e.preventDefault();
//     await axios.post("/products/:id/review", {
//       reviewText: this.state.reviewText,
//     });
//     this.setState({ reviewText: "" });
//   }

const reviewForm = () => {
  const [review, setReview] = useState({
    review: "",
  });

  const onChange = (ev) => {
    setReview({ ...review, [ev.target.name]: ev.target.value });
  };

  const getReview = (ev) => {
    ev.preventDefault();
    dispatch(fetchReview(review));

    return (
      <div>
        <h2>Leave a review</h2>
        <form onSubmit={getReview}>
          <input
            placeholder="Leave a Review Here"
            value={review}
            name="reviewText"
            onChange={onChange}
          />
          <button type="submit"></button>
        </form>
        <Link to="/">Back to Home</Link>
      </div>
    );
  };
};

export default reviewForm;
