import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './ResSignUpCardWrapper.css';
import { connect } from 'react-redux';
import resAuthActions from '../../../actions/researcherSignupAuth';
import { history } from '../../../../store';
import LoaderWrapper from '../../Loader';
import { validName, validPhone, isEmail } from '../../../utils/validators';
import '../../css/Common.css';
import { LOCAL_STORAGE_USER_KEY } from '../../../../constants/app';
import PATHS from '../../../../routes/routes-path';

const ResSignUpCardWrapper = (props) => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        location: "",
        researchDescription: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isErr, setIsErr] = useState({
        err: {}
    })
    let { err } = isErr;
    const { reseacherSignup, next, error, isAuthenticating } = props;
    const requiredErrorMessage = 'This field is required';
    const { name, email, password, confirmPassword, phone, location, researchDescription } = input;

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    };

    const handleValidation = () => {
        let isFormValid = true;
        if (!name) {
            err = { "name": "This field is required" };
            isFormValid = false;
        }
        if (!validName(name)) {
            err = { "name": "Not a valid name!" };
            isFormValid = false;
        }
        if (!email) {
            err = { "email": "This field is required" };
            isFormValid = false;
        }
        if (!isEmail(email)) {
            err = { "email": "Not a valid email" };
            isFormValid = false;
        }
        if (!password) {
            err = { "password": "This field is required" };
            isFormValid = false;
        }
        if (!confirmPassword) {
            err = { "confirmPassword": "This field is required" };
            isFormValid = false;
        }
        if (confirmPassword !== password) {
            err = { "confirmPassword": "Password and confirm password do not match" };
            isFormValid = false;
        }
        if (!phone) {
            err = { "phone": "This field is required" };
            isFormValid = false;
        }
        if (!validPhone(phone)) {
            isFormValid = false;
            err = { "phone": "Not valid mobile number(do not use country code)" };
        }
        if (!location) {
            err = { "location": "This field is required" };
            isFormValid = false;
        }
        if (!researchDescription) {
            err = { "researchDescription": "This field is required" };
            isFormValid = false;
        }
        setIsErr({ ...isErr, err });
        return isFormValid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (handleValidation()) {
            reseacherSignup(input, next);
        }
    }

    useEffect(() => {
        const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        if (user) {
            if(JSON.parse(user).potential_user_type === 1){
              history.push(next || PATHS.listProductParticipant);
            }else{
              history.push(next || PATHS.listProduct); 
            }
          }
    }, []);

    return (
        <LoaderWrapper showLoader={isAuthenticating}>
            <div className="SignUpWrapper">
                <div className="WelcomeWrapper">
                    <h3>Welcome Aboard!</h3>
                    <h4>Enter Details</h4>
                </div>
                <div className="form-div">
                    <div className="lable-input-wrapper">
                        <label className="default-label">Name*:</label>
                        <input className={`${isSubmitted && !name && 'has-error'}`} type="text" className="default-input" required="true" name="name" onChange={handleChange} />
                        {isSubmitted && err["name"] && (
                            <div className="form-error-message">
                                {err["name"]}
                            </div>
                        )}
                    </div>
                    <div className="lable-input-wrapper">
                        <label className="default-label">Email*:</label>
                        <input className={`${isSubmitted && !name && 'has-error'}`} type="email" className="default-input" required="true" name="email" onChange={handleChange} />
                        {isSubmitted && err["email"] && (
                            <div className="form-error-message">
                                {err["email"]}
                            </div>
                        )}
                    </div>
                    <div className="lable-input-wrapper">
                        <label className="default-label">Password*:</label>
                        <input type="password" className="default-input" required="true" name="password" onChange={handleChange} />
                        {isSubmitted && err["password"] && (
                            <div className="form-error-message">
                                {err["password"]}
                            </div>
                        )}
                    </div>
                    <div className="lable-input-wrapper">
                        <label className="default-label">Confirm Password*:</label>
                        <input className={`${isSubmitted && !confirmPassword && 'has-error'}`} type="password" className="default-input" required="true" name="confirmPassword" onChange={handleChange} />
                        {isSubmitted && err["confirmPassword"] && (
                            <div className="form-error-message">
                                {err["confirmPassword"]}
                            </div>
                        )}
                    </div>

                    <div className="lable-input-wrapper">
                        <label className="default-label">Mobile No*:</label>
                        <input className={`${isSubmitted && !phone && 'has-error'}`} type="text" className="default-input" required="true" name="phone" onChange={handleChange} />
                        {isSubmitted && err["phone"] && (
                            <div className="form-error-message">
                                {err["phone"]}
                            </div>
                        )}
                    </div>
                    <div className="lable-input-wrapper">
                        <label className="default-label">Location*:</label>
                        <input className={`${isSubmitted && !location && 'has-error'}`} type="text" className="default-input" required="true" name="location" onChange={handleChange} />
                        {isSubmitted && err["location"] && (
                            <div className="form-error-message">
                                {err["location"]}
                            </div>
                        )}
                    </div>
                    <div className="lable-input-wrapper">
                        <label className="default-label">Focus Area for Research (Descriptive)*: </label>
                        <textarea className={`${isSubmitted && !researchDescription && 'has-error'}`} type="text" className="default-textarea" required="true" name="researchDescription" onChange={handleChange}></textarea>
                        {isSubmitted && err["researchDescription"] && (
                            <div className="form-error-message">
                                {err["researchDescription"]}
                            </div>
                        )}
                    </div>
                    <div className="form-error-message">
                        <p className="col-md-12">{error}</p>
                    </div>

                </div>
                <div className="ButtonWrapper">
                    <button type="submit" className="button is-block is-info is-fullwidth" onClick={handleSubmit}>Create Account</button>
                </div>
            </div>
        </LoaderWrapper>
    )
}

const mapStateToProps = state => ({
    error: state.resAuthenticationReducer.error,
    isAuthenticating: state.resAuthenticationReducer.isAuthenticating,
});
const mapDispatchToProps = (dispatch) => ({
    reseacherSignup: ({ ...input }, next) => {
        dispatch(resAuthActions.reseacherSignup({ ...input }, next));
    },

    validateEmail: email => {
        dispatch(resAuthActions.validateEmail(email));
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResSignUpCardWrapper));
