import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  // FETCH_PRODUCTS_SUCCESS
} from "../../constants/productConstants";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// fetch products
export const fetchProducts = (products) => {
  return (dispatch) => {
    dispatch(fetchProductsSuccess(products));
  };
};
