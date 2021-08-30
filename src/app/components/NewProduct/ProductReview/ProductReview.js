import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withParams } from "../../../containers/WithParams";
import productReviewActions from "../../../actions/productReview";
import PATHS from "../../../../routes/routes-path";
import { history } from "../../../../store";

import "./ProductReview.css";

const ProductReviewResponse = props => {

  const { match: { params: { productId } }, getProductReviewResponse, productReviewResponse } = props;

  useEffect(() => {
    getProductReviewResponse(productId);
  }, []);

  const goToSurveyReview = reviewId => {
    history.push(`${PATHS.surveyReview}${reviewId}`);
  }

  const goToPrototypeReview = reviewId => {
    history.push(`${PATHS.prototypeReview}${reviewId}`);
  }

  return (
    <div className="reviewProd-outer-wrapper">
      <div className="heading-wrapper">
        <h5>
          <u>Product 1 Review Responses</u>
        </h5>
      </div>
      <div className="reviewData-container">
        <div className="data-column">
          <p className="data-tab dataName">
            <u>
              <b>Participant Name</b>
            </u>
          </p>
          <p className="data-tab dataEmail">
            <u>
              <b>Email</b>
            </u>
          </p>
          <p className="data-tab">
            <u>
              <b>Submitted on</b>
            </u>
          </p>
          <p className="data-tab">
            <u>
              <b>Survey</b>
            </u>
          </p>
          <p className="data-tab">
            <u>
              <b>Prototype</b>
            </u>
          </p>
        </div>
        {productReviewResponse && productReviewResponse.map((item, index) => (
          <div className="data-column border-bottom" key={index}>
            <p className="data-tab dataName">{item.potentialUser.name}</p>
            <p className="data-tab dataEmail">{item.potentialUser.email}</p>
            <p className="data-tab">{item.updatedAt.substring(0,10)}</p>
            <p className="data-tab">
              <a className="links" onClick={() => goToSurveyReview(item.id)}>
                Survey review
              </a>
            </p>
            <p className="data-tab">
              <a className="links" onClick={() => goToPrototypeReview(item.id)}>
                Prototype review
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productReviewResponse: state.productReviewReducer.productReviewResponse
})

const mapDispatchToProps = dispatch => ({
  getProductReviewResponse: productId => dispatch(productReviewActions.getProductReviewResponse(productId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(ProductReviewResponse)));
