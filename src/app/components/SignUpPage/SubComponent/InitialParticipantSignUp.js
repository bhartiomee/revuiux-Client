import React, { useState } from "react";
import InputField from "../../UiComponents/InputField";
import "../../css/Common.css";
import "../../NewProduct/ProductDetails/subComponents/ProductDetailsInput.css"
import { validName, validPhone, isEmail } from "../../../utils/validators";
import userSignUpAuth from '../../../actions/participantSignUp';
import { history } from "../../../../store";
import LoaderWrapper from "../../Loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const InitialParticipantSignUp = (props) => {
  const [filled, setFilled] = useState(false);
  const [err, setErr] = useState(null);
  const requiredErrorMessage = "This field is required";
  const { name, gender, email, password, confirmPassword, phone, location, socialMediaLink } = props.state;
  //destructure

  const handleChange = (e) => {

    const { name, value } = e.target;
    props.setState({ ...props.state, [name]: value });
  };

  return (
    <div className="signup-wrapper">
      <div className="lable-input-wrapper">
        <label className="default-label">Name*:</label>
        <input
          name="name"
          type="text"
          className={`${filled && !name && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>

      </div>

      <div className="input-wrapper">
        <label className="default-label">Gender*:</label>
        <div className="input-gender">
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={1}
            required="true"
            className={`${filled && !password && "has-error"}`}
            onChange={handleChange}
          ></input>
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value={2}
            required="true"
            className={`${filled && !gender && "has-error"}`}
            onChange={handleChange}
          ></input>
        </div>


      </div>

      <div className="lable-input-wrapper">
        <label className="default-label">Email*:</label>
        <input
          name="email"

          type="email"
          className={`${filled && !email && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>


      </div>

      <div className="lable-input-wrapper">
        <label className="default-label">Password*:</label>
        <input
          name="password"

          type="password"
          className={`${filled && !password && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
      </div>



      <div className="lable-input-wrapper">
        <label className="default-label">Confirm Password*:</label>
        <input
          name="confirmPassword"

          type="password"
          className={`${filled && !confirmPassword && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
      </div>



      <div className="lable-input-wrapper">
        <label className="default-label">Mobile No.:</label>
        <input
          name="phone"
          type="tel"
          className="default-input"
          required="false"
          onChange={handleChange}
        ></input>
      </div>



      <div className="lable-input-wrapper">
        <label className="default-label">Location*:</label>
        <input
          name="location"
          type="text"
          className={`${filled && !location && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>


      </div>
      <div className="lable-input-wrapper">
        <label className="default-label">LinkedIn/Twitter (Optional):</label>
        <input
          name="socialMediaLink"
          type="text"
          className="default-input"
          required="false"
          onChange={handleChange}
        ></input>
      </div>
    </div>

  );
};
export default InitialParticipantSignUp;
