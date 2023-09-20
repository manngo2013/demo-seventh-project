import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE
} from '../actions/products/productTypes';

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

const createProductRequest = () => {
  return {
    type: CREATE_PRODUCT_REQUEST
  }
}

const createProductSuccess = (product) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: product,
  }
}

const createProductFailure = (error) => {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: error,
  }
}

export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch(createProductRequest);
    const apiUrl = "http://localhost:4000/products";

    try {
      const res = await axios.post(apiUrl, product);
      if (res && res?.status === 201) {
        dispatch(createProductSuccess(res?.data));
      } else {
        dispatch(createProductFailure("Created failed"));
      }
    } catch (error) {
      dispatch(createProductFailure(error?.message));
    }
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
