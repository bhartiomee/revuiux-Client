import React from "react";
import './SearchProduct.css'
import { history } from "../../../store";
import { useState, useEffect, useRef} from "react";
import ProjectCard from '../UiComponents/ProjectCard';
import { connect } from 'react-redux';
import productActions from '../../actions/product';
import { withRouter } from 'react-router-dom';
import PATHS from "../../../routes/routes-path";

const SearchProduct = props => {

    const { productList, getProductList, clearProductDetail, isAuthenticating } = props;
    
    const [params, setParams] = useState({isPublished:true});
    const [defaultFilters , setDefaultFilters] = useState(0);
    const industryRef = useRef(null);
    const experienceRef = useRef(null);
    const jobRef = useRef(null);

    useEffect(() => {
        getProductList(params);
    }, [params]);

    const handleReset = () => {
        jobRef.current.value=0;
        experienceRef.current.value=0;
        industryRef.current.value=0;
        setParams({isPublished:true});
    }

    const addEditProduct = (productDetail) => {
        history.push(
          productDetail.id
            ? `${PATHS.reviewProduct}${productDetail.id}?wrapper=1`
            : `/`
        );
        clearProductDetail();
      };

    useEffect(() => {
        return (()=> {clearProductDetail()})
    },[])

    const handleChange = (e) => {
        const query = e.target.name;
        setParams({...params,[query]:e.target.value})
    }

  return (
        <div className="home-page-wrapper draft-wrapper-common">
            <div className="search-navbar">
                <span className="menu-list" style={{color:"black"}} onClick={handleReset}>All</span>
                <span className="menu-list"><select
                    ref={industryRef}
                    name="industry"
                    className="default-searching"
                    defaultValue={defaultFilters}
                    onChange={handleChange}
                >
                    <option value={0} selected disabled>Target Industry</option>
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
                </select></span>

                <span className="menu-list"><select
                    name="experience"
                    className="default-searching"
                    ref={experienceRef}
                    defaultValue={defaultFilters}
                    onChange={handleChange}
                >
                    <option value={0} selected disabled>
                    Experience
                    </option>
                    <option value={1}>0-5 Years</option>
                    <option value={2}>6-10 Years</option>
                    <option value={3}>11-15 Years</option>
                    <option value={4}>16-20 Years</option>
                    <option value={5}>20+ Years</option>
                </select></span>

                <span className="menu-list"><select
                    name="jobFunction"
                    className="default-searching"
                    ref={jobRef}
                    defaultValue={defaultFilters}
                    onChange={handleChange}
                >
                    <option value={0} selected disabled>Job Function</option>
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
                </select></span>
            </div>
            
            <div className="recent-body search-product">
                {
                    productList !== undefined && productList.length ?
                    productList && productList.map((product, index) => (
                        <ProjectCard
                        key={index}
                        id={product.id}
                        title={product.name}
                        isPublished={product.isPublished}
                        addEditProduct={addEditProduct}
                        />
                    )) : <div className="no-product"><h2>Oops! we could not found any product</h2><h4>Please select other options  🎉 </h4></div>
                }
            </div>
           
        </div>
    
  );
};

const mapStateToProps = state => ({
    productList: state.productReducer.productList,
    isAuthenticating: state.productReducer.isAuthenticating
})


const mapDispatchToProps = dispatch => ({
    getProductList: (params) => dispatch(productActions.getProductList(params)),
    clearProductDetail: () => dispatch(productActions.clearProductDetail())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchProduct));
