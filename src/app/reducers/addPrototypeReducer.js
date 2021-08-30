import actionTypes from "../../constants/action-types";

const addPrototypeReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.prototype.ADD_PROTOTYPE_SUCCESS: {
            return {
                ...state,
                error: null,
                prototypeList: action.prototypes
            }
        }
        case actionTypes.prototype.ADD_PROTOTYPE_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        case actionTypes.prototype.PROTOTYPE_DETAILS_SUCCESS: {
            return {
                ...state,
                prototypeList: action.response.data,
            }
        }
        case actionTypes.prototype.CLEAR_PROTOTYPE_LIST: {
            return {
                ...state,
                prototypeList: []
            }
        }
        case actionTypes.prototype.PROTOTYPE_DETAILS_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default addPrototypeReducer;
