import React, { useState } from "react";
import "../css/Common.css";
import isEmail from "../../utils/validators";
const InputField = (params) => {
  const [input, setInput] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    location: "",
    social_acc: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState(null);
  const requiredErrorMessage = "This field is required";
  const {
    name,
    gender,
    email,
    password,
    confirm_password,
    phone,
    location,
    social_acc,
  } = input;
  //destructure
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="input-wrapper">
        <label className="default-label">Name*:</label>
        <input
          name="name"
          id={1}
          type="text"
          className={`${isSubmitted && !name && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
        {isSubmitted && !name && (
          <div className="form-error-message">{requiredErrorMessage}</div>
        )}
      </div>
      <div className="input-wrapper">
        <label className="default-label">Gender*:</label>
        <div className="input-gender">
          <label>Male</label>
          <input
            id={2}
            type="radio"
            name="gender"
            value="male"
            required="true"
            onChange={handleChange}
          ></input>
          <label>Female</label>
          <input
            id={2}
            type="radio"
            name="gender"
            value="female"
            required="true"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="input-wrapper">
        <label className="default-label">Email*:</label>
        <input
          name="email"
          id={6}
          type="email"
          className={`${isSubmitted && !email && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
        {isSubmitted && !email && (
          <div className="form-error-message">{requiredErrorMessage}</div>
        )}
      </div>
      <div className="input-wrapper">
        <label className="default-label">Password*:</label>
        <input
          name="password"
          id={3}
          type="password"
          className={`${isSubmitted && !password && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
        {isSubmitted && !password && (
          <div className="form-error-message">{requiredErrorMessage}</div>
        )}
      </div>
      <div className="input-wrapper">
        <label className="default-label">Confirm Password*:</label>
        <input
          name="confirm_password"
          id={4}
          type="password"
          className={`${isSubmitted && !confirm_password && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
        {isSubmitted && !confirm_password && (
          <div className="form-error-message">{requiredErrorMessage}</div>
        )}
      </div>
      <div className="input-wrapper">
        <label className="default-label">Mobile No.:</label>
        <input
          name="phone"
          id={5}
          type="tel"
          className="default-input"
          required="false"
          onChange={handleChange}
        ></input>
      </div>

      <div className="input-wrapper">
        <label className="default-label">Location*:</label>
        <input
          id={7}
          name="location"
          type="text"
          className={`${isSubmitted && !location && "has-error"}`}
          className="default-input"
          required="true"
          onChange={handleChange}
        ></input>
        {isSubmitted && !location && (
          <div className="form-error-message">{requiredErrorMessage}</div>
        )}
      </div>
      <div className="input-wrapper">
        <label className="default-label">LinkedIn/Twitter (Optional):</label>
        <input
          id={8}
          name="social_acc"
          type="text"
          className={`${isSubmitted && !name && "has-error"}`}
          className="default-input"
          required="false"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default InputField;
