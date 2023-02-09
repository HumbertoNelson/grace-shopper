import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS'

const _getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
};

export const getProducts = () => {
    return async (dispatch) => {
        await axios.get('/api/products').then((res) => {
            console.log(res.data)
            dispatch(_getProducts(res.data));
        }).catch((error) => {
            console.log(error)
        })
    };
};

const initialState = [];

const products = (state = initialState, action) => {
    switch(action.tyoe) {
        case GET_PRODUCTS:
            return action.products
        default: return state;
    }
}

export default products;