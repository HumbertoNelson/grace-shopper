import axios from "axios";

const SET_REVIEW = "SET_REVIEW";

export const setReview = (review) => {
  return {
    type: SET_REVIEW,
    review,
  };
};

// const initalState = { review: [] };

export const fetchReview = () => {
  return async (dispatch) => {
    const { data: review } = await axios.get(`/api/products`);
    dispatch(setReview(review));
  };
};

export default function reviewReducer(state = [], action) {
  if (action.type === "SET_REVIEW") {
    return action.cart;
  }
  return state;
}
