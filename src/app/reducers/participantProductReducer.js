import actionTypes from "../../constants/action-types";

const participantProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.participantProduct.REQUEST: {
            return {
                ...state,
            };
        }
        case actionTypes.participantProduct.LIST_SUCCESS: {
            return {
                ...state,           
                productList: action.response.data
            }
        }
        case actionTypes.participantProduct.LIST_FAILURE: {
            return {
                ...state,
                error: action.error           
            }
        }
        case actionTypes.participantProduct.DETAIL_SUCCESS: {
            return {
                ...state,          
                product: action.product
            }
        }
        case actionTypes.participantProduct.DETAIL_FAILURE: {
            return {
                ...state,
                error: action.error,
            }
        }
        case actionTypes.participantProduct.CLEAR_PRODUCT_DETAIL: {
            return {
                ...state,
                product: {}
            }
        }
        default:
            return state;
    }
}

export default participantProductReducer;
