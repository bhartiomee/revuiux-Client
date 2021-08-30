import actionTypes from "../../constants/action-types";

const resAuthenticationReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.auth.SIGNUP_REQUEST: {
            return {
                ...state,
                isAuthenticating: true
            };
        }
        case actionTypes.auth.SIGNUP_SUCCESS: {
            return {
                ...state,
                isAuthenticating: false,
                error:null
            }
        }
        case actionTypes.auth.SIGNUP_FAILURE: {
            return {
                ...state,
                error: action.error,
                isAuthenticating: false
            }
        }
        default:
            return state;
    }
}

export default resAuthenticationReducer;
