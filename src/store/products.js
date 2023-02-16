import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/products");
    dispatch({ type: "SET_PRODUCTS", products: response.data });
  };
};

export const fetchProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        dispatch({ type: "SET_PRODUCT", product: res.data });
      })
      .catch((error) => {
        console.log("Could not fetch product", error.message);
      });
  };
};

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.products };
    case "SET_PRODUCT":
      return { ...state, product: action.product };

    default:
      return state;
  }
};

export default products;
