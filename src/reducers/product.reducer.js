import {
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE
} from '../actions/products/productTypes';

const initState = {
  loading: false,
  products: [],
  error: '',
  createSuccess: false,
  createErrorMsg: '',
  product: {},
  updateSuccess: false,
  updateErrorMsg: '',
};

const productReducer = (state = initState, action) => {

  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: '',
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    case CREATE_PRODUCT_REQUEST:
      return {
        createSuccess: false,
        createErrorMsg: '',
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        createSuccess: true,
        createErrorMsg: '',
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        createSuccess: false,
        createErrorMsg: action.payload,
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        updateSuccess: true,
        updateErrorMsg: '',
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        loading: false,
        updateSuccess: false,
        updateErrorMsg: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
