import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/products/productTypes';

const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
}

const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest);
    const apiUrl = "http://localhost:4000/products";

    try {
      const res = await axios.get(apiUrl);
      const products = res && res.data ? res.data : [];
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  }
}
