import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PATHS from '../../../routes/routes-path';
import { LOCAL_STORAGE_USER_KEY } from '../../../constants/app';
import { history } from '../../../store';

import authActions from '../../actions/authentication';
import LoaderWrapper from '../Loader';

import './SubComponents/LoginCardWrapper.css'
import './LoginPage.css';
import '../css/Common.css'

const LoginPage = props => {

    const [inputState, setInputState] = useState({ email: '', password: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { validateEmail, checkAuthentication, next, error, isAuthenticating } = props;
    const { email, password } = inputState;

    const requiredErrorMessage = 'This field is required';

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

    const handleChange = e => {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
        if (name === "email") {
            validateEmail(value);
        }
    }

    const handleSubmit = e => {
        setIsSubmitted(true);
        if (email && password) {
            checkAuthentication(email, password, next);
        }
    }

    return (
        <LoaderWrapper showLoader={isAuthenticating}>
            <div className="loginPageInnerWrapper">
                <div className="loginImageWrapper"></div>
                <div className="loginSideWrapper">
                    <h2>Sign in!</h2>
                    <div className="emailContainer">
                        <input className={`${isSubmitted && !email && 'has-error'}`} type="text" placeholder="Email" name="email" onChange={handleChange} value={email} />
                        {isSubmitted && !email && (
                            <div className="form-error-message">
                                {requiredErrorMessage}
                            </div>
                        )}
                        <input className={`${isSubmitted && !password && 'has-error'}`} type="password" placeholder="Password" name="password" onChange={handleChange} value={password} />
                        {isSubmitted && !password && (
                            <div className="form-error-message">
                                {requiredErrorMessage}
                            </div>
                        )}
                        <div className="forgot-password">
                            {/* <div className="form-error-message"> */}
                            <p className="col-md-12">{error}</p>
                            {/* </div> */}
                            <Link align="right" to='/forgot-password'>Forgot Pasword?</Link>
                        </div>
                    </div>
                    <div className="loginButtonWrapper">
                        <button onClick={handleSubmit} >Login</button>
                    </div>

                    <div className="checkboxWrapper">
                        <input type="Checkbox"></input>
                        <h5>Remember me!</h5>
                    </div>

                    <div className="SignUpTextWrapper">
                        <h5>New here? </h5>
                    </div>

                    <div className="SignUpText">
                        <Link to='/signUp/participant'>Sign Up as Participant</Link>
                    </div>

                    <div className="SignUpText">
                        <Link to='/signUp/researcher'>Sign Up as Researcher</Link>
                    </div>
                </div>
            </div>
        </LoaderWrapper>
    )
}

const mapStateToProps = state => ({
    error: state.authenticationReducer.error,
    isAuthenticating: state.authenticationReducer.isAuthenticating,
});

const mapDispatchToProps = dispatch => ({
    /**
     * Function to make api call and get user info using login credentials.
     *
     * @param email Email of user trying to log in
     * @param password Password of user trying to log in
     * @param next url to redirect after login
     */
    checkAuthentication: (email, password, next) => {
        dispatch(authActions.checkAuthentication(email, password, next));
    },
    /**
     * Function to validate given email is validate or not.
     *
     * @param email Email of user trying to log in
     */
    validateEmail: (email) => {
        dispatch(authActions.validateEmail(email));
    },
});

LoginPage.defaultProps = {
    error: null,
    isAuthenticating: false,
};

LoginPage.propTypes = {
    checkAuthentication: PropTypes.func.isRequired,
    validateEmail: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    isAuthenticating: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
