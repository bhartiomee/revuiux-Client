import React, { useState } from "react";

const DropDown = (props) => {

  const [dropdowns,setDropdowns]=useState({ 
    experience:"",
    industry:"",
    JobFunction: "",
    education: "",
  });
  
  const { experience, industry, JobFunction, education}=dropdowns;

  const dropDownChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDropdowns({ ...dropdowns, [name]: value });
  };

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className="dropdown-wrapper">
      <select id={9} name="experience" className="default-select" value={experience} onChange={dropDownChange}
      >
        <option selected disabled >-select-</option>
        <option value="0-5 Years">0-5 Years</option>
        <option value="6-10 Years">6-10 Years</option>
        <option value="11-15 Years">11-15 Years</option>
        <option value="16-20 Years">16-20 Years</option>
        <option value="20+ Years">20+ Years</option>
      </select>
      <label className="default-label">Experience*:</label>
    </div>
    <div className="dropdown-wrapper">
      <select id={10} name="industry" className="default-select" value={industry} onChange={dropDownChange}
      >
        <option disabled>-select-</option>
        <option value="Aerospace & Defence">Aerospace & Defence</option>
        <option value="AgriBusiness">AgriBusiness</option>
        <option value="Automotive">Automotive</option>
        <option value="Banking">Banking</option>
        <option value="Consumer Produts">Consumer Produts</option>
        <option value="Fashion">Fashion</option>
        <option value="Healthcare">Healthcare</option>
        <option value="High Tech">High Tech</option>
        <option value="Industrial Machinery & Components">Industrial Machinery & Components</option>
        <option value="Insurance">Insurance</option>
        <option value="Life Sciences">Life Sciences</option>
        <option value="Retail">Retail</option>
        <option value="Telecommunications">Telecommunications</option>
        <option value="Travel and Leisure">Travel and Leisure</option>
        <option value="IT/ITeS">IT/ITeS</option>
        <option value="Engineering,Construction & Operations">Engineering,Construction & Operations</option>
        <option value="Transportation and Logistics">Transportation and Logistics</option>
        <option value="Media & Entertainment">Media & Entertainment</option>
        <option value="Sports">Sports</option>
        <option value="Oil, Gas, and Energy">Oil, Gas, and Energy</option>
        <option value="Chemicals">Chemicals</option>
        <option value="Mining">Mining</option>
        <option value="Utilities">Utilities</option>
        <option value="Others">Others (please specify)</option>
      </select>
      <label className="default-label">Industry*:</label>
    </div>
    <div className="dropdown-wrapper">
      <select id={11} name="JobFunction" className="default-select" value={JobFunction} onChange={dropDownChange}>
        <option disabled>-select-</option>
        <option value="Accountant">Accountant</option>
        <option value="Admin">Admin</option>
        <option value="Business Development">Business Development</option>
        <option value="Consulting">Consulting</option>
        <option value="Corporate Strategy">Corporate Strategy</option>
        <option value="Customer Care">Customer Care</option>
        <option value="Customer Success">Customer Success</option>
        <option value="Finance">Finance</option>
        <option value="H.R.">H.R.</option>
        <option value="Inside Sales">Inside Sales</option>
        <option value="Legal">Legal</option>
        <option value="Marketing">Marketing</option>
        <option value="Operations">Operations</option>
        <option value="Pre-sales">Pre-sales</option>
        <option value="Procurement">Procurement</option>
        <option value="Product Management">Product Management</option>
        <option value="QA/QC">QA/QC</option>
        <option value="R&D">R&D</option>
        <option value="Sales">Sales</option>
        <option value="User Research">User Research</option>
        <option value="UX Design">UX Design</option>
        <option value="UX Research">UX Research</option>
        <option value="Others">Others (please specify)</option>
      </select>
      <label className="default-label">Job Function*:</label>
    </div>
    <div className="dropdown-wrapper">
      <select id={12} name="education" className="default-select" value={education} onChange={dropDownChange}>
        <option disabled >-select-</option>
        <option value="10th - 12th">10th - 12th</option>
        <option value="Bachelors">Bachelors</option>
        <option value="Bachelors">Diploma</option>
        <option value="Masters">Masters</option>
        <option value="PhD">PhD</option>
      </select>
      <label className="default-label">Highest Education*:</label>
    </div>
    </div>
  );
};
export default DropDown;
