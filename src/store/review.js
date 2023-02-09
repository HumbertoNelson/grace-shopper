import axios from "axios";

const SET_REVIEW = "SET_REVIEW";

export const setReview = () => {
  return {
    type: SET_REVIEW,
    review,
  };
};

export const fetchReview = (id) => {
  return async (dispatch) => {
    const { data: review } = await axios.get(`/api/products/${id}/review`);
    dispatch(setReview(review));
  };
};

export default function reviewReducer(state = [], action) {
  if (action.type === "SET_REVIEW") {
    return action.cart;
  }
  return state;
}
