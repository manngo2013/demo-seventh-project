import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE
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

const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}

const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  }
}

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  }
}

const updateProductSuccess = (product) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: product,
  }
}

const updateProductFailure = (error) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: error,
  }
}

const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  }
}

const deleteProductFailure = () => {
  return {
    type: DELETE_PRODUCT_FAILURE,
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const apiUrl = `http://localhost:4000/products/${id}`;

    try {
      const res = await axios.delete(apiUrl);
      if (res && res?.status === 200) {
        dispatch(deleteProductSuccess());
        setTimeout(() => {
          dispatch(fetchProducts());
        }, 500)
      } else {
        dispatch(deleteProductFailure());
      }
    } catch (error) {
      dispatch(deleteProductFailure());
    }
  }
}

export const updateProduct = (product) => {
  return async (dispatch) => {
    const apiUrl = `http://localhost:4000/products/${product.id}`;

    try {
      const res = await axios.put(apiUrl, product);
      if (res && res?.status === 200) {
        dispatch(updateProductSuccess(res?.data));
      } else {
        dispatch(updateProductFailure("Update failed"));
      }
    } catch (error) {
      dispatch(updateProductFailure(error?.message));
    }
  }
}

export const fetchProduct = (id) => {
  return async (dispatch) => {
    dispatch(fetchProductRequest);
    const apiUrl = `http://localhost:4000/products/${id}`;

    try {
      const res = await axios.get(apiUrl);
      const product = res && res.data ? res.data : {};
      dispatch(fetchProductSuccess(product));
    } catch (error) {
      dispatch(fetchProductFailure(error));
    }
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
