import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import './ReviewSidebar.css';
import '../HomePage/SubComponent/css/RepoContainer.css';
const ResearcherSidebar = () => {
    return (
        <div className="repo-column">
            <div className="options-wrapper">
                <div className="recent-wrapper">
                    <HomeOutlinedIcon />
                    <h3>Home</h3>
                </div>
                <div className="draft-wrapper">
                    <div className="draft-wrapper-icon">
                        <StarBorderIcon />
                        <h3>Review New Product</h3>
                    </div>
                    <div className="draft-wrapper-icon">
                        <AddIcon />
                    </div>
                </div>
                <div className="review-icon-wrapper">
                    <h3 className='review-heading'>My reviews</h3>
                    <div className="product-icon-wrapper">
                        <div className="product-list-div">
                            <RateReviewOutlinedIcon />
                            <h3>Product</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResearcherSidebar;
