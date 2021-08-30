import { push } from "connected-react-router";
import actionTypes from "../../constants/action-types";
import PATHS from "../../routes/routes-path";
import { isEmail } from "../utils/validators";
import errorMessages from "../../constants/messages";

import { registrationService } from "../services/user_register.service";

const userSignUpRequest = () => ({
  type: actionTypes.auth.USER_SIGNUP_REQUEST,
});

const userSignUpSuccess = () => ({
  type: actionTypes.auth.USER_SIGNUP_SUCCESS,
});

const userSignUpFailure = (error) => ({
  type: actionTypes.auth.USER_SIGNUP_FAILURE,
  error,
});

const clearUser = () => ({ type: actionTypes.auth.CLEAR_USER });

const userSignUp = ({ ...inputState }, next) => (dispatch) => {
    dispatch(userSignUpRequest());
    registrationService.registerParticipant({ ...inputState })
    .then(() => {  
        dispatch(userSignUpSuccess());
        dispatch(push(next || PATHS.loginPage));
      },
      (error) => {
        dispatch(userSignUpFailure(error && error.message));
      }
    );
  };

const validateEmail = (email) => (dispatch) => {
  if (!isEmail(email)) {
    dispatch(userSignUpFailure(errorMessages.INVALID_EMAIL));
  } else {
    dispatch(userSignUpFailure(""));
  }
};
const userSignUpAuth = {
  userSignUp,
  validateEmail,
  clearUser,
  userSignUpRequest,
  userSignUpFailure,
  userSignUpSuccess,
};
export default userSignUpAuth;
