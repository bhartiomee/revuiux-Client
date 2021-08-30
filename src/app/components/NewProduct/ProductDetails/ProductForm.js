import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActions from "../../../actions/product";
import "./subComponents/ProductDetailsInput.css";
import "../../HomePage/SubComponent/css/RepoDetails.css";
import "../../css/Common.css";

const buttonstyle = {
  color: "#12c2e9",
  backgroundColor: "white",
  border: "2px solid #12c2e9",
};

const ProductForm = props => {
  const { product, createProduct, updateProduct, productId } = props;
  const {
      name, goal, industry, experience, skills, projectTags, description,
      jobFunction, location, noOfReviewRequired
  } = product;

  const initialState = {
    productName: '',
    productGoal: '',
    productIndustry: -1,
    productExperience: -1,
    productSkills: '',
    productProjectTags: '',
    productDescription: '',
    productJobFunction: -1,
    productLocation: '',
    reviewNumbers: '',
    isPublished: false
  }

  const [inputState, setInputState] = useState(initialState);

  const {
    productName, productGoal, productIndustry, productExperience, productProjectTags, productSkills,
    productDescription, productJobFunction, productLocation, reviewNumbers
  } = inputState;

  useEffect(() => {
    const productKeys = Object.keys(product).length;
    setInputState(
      productKeys ? {
        productName: name,
        productGoal: goal,
        productIndustry: industry,
        productExperience: experience,
        productSkills: skills,
        productProjectTags: projectTags,
        productDescription: description,
        productJobFunction: jobFunction,
        productLocation: location,
        reviewNumbers: noOfReviewRequired,
        isPublished: false
      } : initialState
    )
  }, [product]);

  const checkValidation = () => {
    return true;
  }
  
  const handleChange = e => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }

  const createUpdateProduct = () => {
    if (checkValidation()) {
      productId ? updateProduct(productId, inputState) : createProduct(inputState);
    }
  }

  return (
    <div>
      <div className= "product-details-form">
        <div className="input-form-column">
          <div className="input-wrapper-product">
            <label className="default-label-product">Product Name:</label>
            <input
              type="text" className="default-input-product" value={productName} onChange={handleChange}
              name="productName"
            />
          </div>
          <div className="input-wrapper-product">
            <label className="default-label-product">Product Goal:</label>
            <input
              type="text" className="default-input-product" value={productGoal} onChange={handleChange}
              name="productGoal"
            />
          </div>
          
          <div className="input-wrapper-product">
            <label className="default-label-product">Target Industry*:</label>
            <select
              name="productIndustry"
              className="default-input-product"
              value={productIndustry}
              onChange={handleChange}
            >
              <option value={-1} disabled>-select-</option>
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
              {/* <option value={24}>Others (please specify)</option> */}
            </select>
          </div>
          <div className="input-wrapper-product">
          <label className="default-label-product">Preferred Years of Work Exp:</label>
          <select
            name="productExperience"
            value={productExperience}
            className="default-input-product"
            onChange={handleChange}
          >
            <option value={-1} default disabled>
              -select-
            </option>
            <option value={1}>0-5 Years</option>
            <option value={2}>6-10 Years</option>
            <option value={3}>11-15 Years</option>
            <option value={4}>16-20 Years</option>
            <option value={5}>20+ Years</option>
          </select>
          
        </div>
          <div className="input-wrapper-product">
            <label className="default-label-product">Preferred User Skills:</label>
            <input
              type="text" className="default-input-product" value={productSkills} onChange={handleChange}
              name="productSkills"
            />
          </div>
          <div className="input-wrapper-product">
            <label className="default-label-product">Add Project Tags:</label>
            <input
              type="text" className="default-input-product" value={productProjectTags} onChange={handleChange}
              name="productProjectTags"
            />
          </div>
        </div>

        <div className="input-form-column">
          <div className="input-wrapper-product">
            <label className="default-label-product">What is it?</label>
            <textarea
              type="text" className="what-is-it-for " value={productDescription} onChange={handleChange}
              name="productDescription"
            />
          </div>
          <div className="input-wrapper-product">
            <label className="default-label-product">Preferred Job Function*:</label>
            <select
              name="productJobFunction"
              className="default-input-product"
              value={productJobFunction}
              onChange={handleChange}
            >
              <option value={-1} disabled>-select-</option>
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
              {/* <option value={23}>Others (please specify)</option> */}
            </select>
          
          </div>
          <div className="input-wrapper-product">
            <label className="default-label-product">Location:</label>
            <input
              type="text" className="default-input-product" value={productLocation} onChange={handleChange}
              name="productLocation"
            />
          </div>
          <div className="input-wrapper-product">
            <label className="default-label-product">No. of Reviews Required:</label>
            <input
              type="text" className="default-input-product" value={reviewNumbers} onChange={handleChange}
              name="reviewNumbers"
            />
          </div>
          <div className="project-button-container">
        <button onClick={createUpdateProduct}>Save Details</button>
        <button style={buttonstyle}>Cancel</button>
      </div>
        </div>
      </div>
      
    </div>
  );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  setSideBarProduct: (productDetail = {}) => dispatch(productActions.setSideBarProduct(productDetail)),
  createProduct: product => dispatch(productActions.createProduct(product)),
  updateProduct: (productId, product) => dispatch(productActions.updateProduct(productId, product))
})

ProductForm.propTypes = {
  product: PropTypes.object
}

ProductForm.defaultProps = {
  product: {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductForm));
