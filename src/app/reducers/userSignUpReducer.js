import actionTypes from "../../constants/action-types";

const userAuthenticationReducer = (inputState = {}, action) => {
  switch (action.type) {
    case actionTypes.auth.USER_SIGNUP_REQUEST: {
      return {
        ...inputState,
        isAuthenticating: true,
      };
    }
    case actionTypes.auth.USER_SIGNUP_SUCCESS: {
      return {
        ...inputState,
        isAuthenticating: false,
      };
    }
    case actionTypes.auth.USER_SIGNUP_FAILURE: {
      return {
        ...inputState,
        error: action.error,
        isAuthenticating: false,
      };
    }
   
    default:
      return inputState;
  }
};
export default userAuthenticationReducer;
