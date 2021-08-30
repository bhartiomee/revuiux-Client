import React, { useState, useEffect } from "react";
import "./../css/Components.css";
import Logo from "../../../Assets/image/Mobile login-pana 1.png";
import InitialParticipantSignUp from "./SubComponent/InitialParticipantSignUp";
import FinalParticipantSignUp from "./SubComponent/FinalParticipantSignUp";
import "./UserSignUpPage.css";
import DetailedHeader from "../UiComponents/DetailedHeader";
import { validName, validPhone, isEmail } from '../../utils/validators'
import userSignUpAuth from "../../actions/participantSignUp";
import LoaderWrapper from "../Loader/index";
import { history } from "../../../store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { LOCAL_STORAGE_USER_KEY } from "../../../constants/app";
import PATHS from "../../../routes/routes-path";

const UserSignUpPage = (props) => {
  const { validateEmail, checkAuthentication, next, error, isAuthenticating, userSignUp } = props;
  const [formPartiallyFilled, setFormPartiallyFilled] = useState(false);

  const [inputState, setInputState] = useState({
    name: "",
    gender: "",
    password: "",
    confirmPassword: "",
    phone: "",
    email: "",
    location: "",
    socialMediaLink: "",
    experience: "",
    industry: "",
    jobFunction: "",
    highestEducation: "",
    researchDescription: "",
    skills: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { name, gender, email, password, confirmPassword, phone, location, socialMediaLink, experience, industry, jobFunction, highestEducation, researchDescription, skills } = inputState;


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    userSignUp(inputState, next);
  };

  const toggleButton = (e) => {
    e.preventDefault();
    setFormPartiallyFilled(true);
  };

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (user) {
      history.push(next || PATHS.loginPage);
    }
  }, []);

  const handleButton = formPartiallyFilled ? handleSubmit : toggleButton;

  return (
    <LoaderWrapper showLoader={isAuthenticating}>
      <div className="signup-page">
        <div className="form-wrapper">
          <div className="signup-heading">
            <h3>Welcome Aboard!</h3>
            <h5>Enter {!formPartiallyFilled ? "Personal" : "Professional"} Details</h5>
          </div>
          <div>
            {!formPartiallyFilled ? (
              <InitialParticipantSignUp state={inputState} setState={setInputState} />
            ) : (
              <FinalParticipantSignUp state={inputState} setState={setInputState} />
            )}
          </div>
          <div className="signup-button">
            <button type="submit" onClick={handleButton}>
              {!formPartiallyFilled ? "Save & Next" : "Create account"}
            </button>
          </div>
        </div>
        <div className="logo-image-signup">
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
    </LoaderWrapper>
  );
};
const mapStateToProps = (state) => ({
  error: state.authenticationReducer.error,
  isAuthenticating: state.authenticationReducer.isAuthenticating,
});
const mapDispatchToProps = (dispatch) => ({
  userSignUp: (inputState, next) => {
    dispatch(userSignUpAuth.userSignUp(inputState, next));
  },

  validateEmail: (email) => {
    dispatch(userSignUpAuth.validateEmail(email));
  },
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserSignUpPage)
);
