import React, { useState } from "react";
import "../../css/Common.css"
import DropDown from "../../UiComponents/DropDown";
import userSignUpAuth from "../../../actions/participantSignUp";
import { history } from "../../../../store";
import LoaderWrapper from "../../Loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registrationService } from "../../../services/register.service";

const FinalParticipantSignUp = (props) => {
  const [filled, setFilled] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const requiredErrorMessage = "This field is required";
  const {
    experience,
    industry,
    jobFunction,
    highestEducation,
    researchDescription,
    skills,
  } = props.state;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    props.setState({ ...props.state, [name]: value });
  };

  return (


    <div className="signup-wrapper">
      <div className="input-form">

        <div className="dropdown-wrapper">
          <select
            name="experience"
            value={experience}
            className="default-input"
            onChange={handleChange}
          >
           <option value={-1}  disabled selected>
              -select-
            </option>
            <option value={1}>0-5 Years</option>
            <option value={2}>6-10 Years</option>
            <option value={3}>11-15 Years</option>
            <option value={4}>16-20 Years</option>
            <option value={5}>20+ Years</option>
          </select>
          <label className="default-label">Experience*:</label>
        </div>



        <div className="dropdown-wrapper">
          <select
            name="industry"
            className="default-input"
            value={industry}
            onChange={handleChange}
          >
            <option disabled selected>-select-</option>
            <option value={1}>Aerospace & Defence</option>
            <option value={2}>AgriBusiness</option>
            <option value={3}>Automotive</option>
            <option value={4}>Banking</option>
            <option value={5}>Consumer Products</option>
            <option value={6}>Fashion</option>
            <option value={7}>Healthcare</option>
            <option value={8}>High Tech</option>
            <option value={9}>Industrial Machinery & Components</option>
            <option value={10}>Insurance</option>
            <option value={11}>Life Sciences</option>
            <option value={12}>Retail</option>
            <option value={13}>Telecommunications</option>
            <option value={14}>Travel and Leisure</option>
            <option value={15}>IT/ITeS</option>
            <option value={16}>
              Engineering,Construction & Operations
            </option>
            <option value={17}>Transportation and Logistics</option>
            <option value={18}>Media & Entertainment</option>
            <option value={19}>Sports</option>
            <option value={20}>Oil, Gas, and Energy</option>
            <option value={21}>Chemicals</option>
            <option value={22}>Mining</option>
            <option value={23}>Utilities</option>
            <option value={24}>Others (please specify)</option>
          </select>
          <label className="default-label">Industry*:</label>
        </div>

        <div className="dropdown-wrapper">
          <select
            name="jobFunction"
            className="default-input"
            value={jobFunction}
            onChange={handleChange}
          >
            <option disabled selected>-select-</option>
            <option value={1}>Accountant</option>
            <option value={2}>Admin</option>
            <option value={3}>Business Development</option>
            <option value={4}>Consulting</option>
            <option value={5}>Corporate Strategy</option>
            <option value={6}>Customer Care</option>
            <option value={7}>Customer Success</option>
            <option value={8}>Finance</option>
            <option value={9}>H.R.</option>
            <option value={10}>Inside Sales</option>
            <option value={11}>Legal</option>
            <option value={12}>Marketing</option>
            <option value={13}>Operations</option>
            <option value={14}>Pre-sales</option>
            <option value={15}>Procurement</option>
            <option value={16}>Product Management</option>
            <option value={17}>QA/QC</option>
            <option value={18}>R&D</option>
            <option value={19}>Sales</option>
            <option value={20}>User Research</option>
            <option value={21}>UX Design</option>
            <option value={22}>UX Research</option>
            <option value={23}>Others (please specify)</option>
          </select>
          <label className="default-label">Job Function*:</label>
        </div>



        <div className="dropdown-wrapper">
          <select
            name="highestEducation"
            className="default-input"
            value={highestEducation}
            onChange={handleChange}
          >
            <option disabled selected>-select-</option>
            <option value={1}>10th - 12th</option>
            <option value={2}>Bachelors</option>
            <option value={3}>Diploma</option>
            <option value={4}>Masters</option>
            <option value={5}>PhD</option>
          </select>
          <label className="default-label">Highest Education*:</label>
        </div>

      </div>

      <div className="input-form">
        <div className="textArea-div">
          <label className="default-label">
            Type of Research
            <br /> interested in to participate
            <br /> (Descriptive)*:{" "}
          </label>
          <textarea
            name="researchDescription"
            onChange={handleChange}
            value={researchDescription}
          ></textarea>
        </div>
        <div className="textArea-div">
          <label className="default-label">Skills (Technical/Business)*: </label>
          <input
            type="text"
            name="skills"
            className="default-input"
            onChange={handleChange}
            value={skills}
          ></input>
        </div>
      </div>
    </div>

  );
};
export default FinalParticipantSignUp;
