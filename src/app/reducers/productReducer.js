import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import actionTypes from "../../constants/action-types";

const productReducer = (state = {}, action) => {
    switch (action.type) {
       
        case actionTypes.product.LIST_SUCCESS: {
            return {
                ...state,
                productList: action.response.data,
                showProductIcon: false,
                productPublished: false
            }
        }
        case actionTypes.product.LIST_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        case actionTypes.product.UPDATE_ADD_PRODUCT: {
            return {
                ...state,
                productIdName: action.product,
                showProductIcon: true
            }
        }
        case actionTypes.product.DETAIL_SUCCESS: {
            return {
                ...state,
                product: action.product,
                productPublished: false
            }
        }
        case actionTypes.product.DETAIL_FAILURE: {
            return {
                ...state,
                error: action.error,
            }
        }
        case actionTypes.product.CLEAR_PRODUCT_DETAIL: {
            return {
                ...state,
                product: {}
            }
        }
        case actionTypes.product.CREATE_SUCCESS: {
            return {
                ...state,
                product: action.product
            }
        }
        case actionTypes.product.CREATE_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        case actionTypes.product.UPDATE_SUCCESS: {
            return {
                ...state,
                product: action.updatedProduct,
                productPublished: action.updatedProduct.isPublished
            }
        }
        case actionTypes.product.UPDATE_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default productReducer;
