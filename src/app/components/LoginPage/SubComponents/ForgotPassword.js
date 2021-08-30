import React from "react";
import "./LoginCardWrapper.css";

const styleButton = {
  color: "#12c2e9",
  backgroundColor: "white",
  border: "2px solid #12c2e9",
};
let forgotPassword = false;

const ForgotPassword = () => {
  return (
    <div className="forgot-password-wrapper">
      {forgotPassword === false ? (
        <div className="fpass-container">
          <h5>Forgot Your Password</h5>
          <div className="fpass-input">
            <label>Enter Your Email</label>
            <input></input>
            <p>Enter the email address you used using signup</p>
          </div>
          <div className="verification-button">
            <button>Get Verification Link</button>
          </div>
        </div>
      ) : (
        <div className="fpass-container">
          <h5>Reset Password</h5>
          <div className="reset-input">
            <div className="individual-input">
              <label>New Password*:</label>
              <input placeholder="********"></input>
            </div>
            <div className="individual-input">
              <label>Confirm Password*:</label>
              <input placeholder="********"></input>
            </div>
          </div>
          <div className="reset-buttons">
            <button>Reset Password</button>
            <button style={styleButton}>Go to Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
