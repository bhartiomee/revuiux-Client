import React, { useEffect } from "react";
import ProjectCard from "../UiComponents/ProjectCard";
import { connect } from "react-redux";
import productActions from "../../actions/product";
import { withRouter } from "react-router-dom";
import { history } from "../../../store";
import PATHS from "../../../routes/routes-path";
import LoaderWrapper from "../Loader";
import participantReviewActions from "../../actions/ParticipantReview";

const HomePageParticipant = (props) => {
  const { productReviewList, productList, getProductList, getResumeReviewProductList, clearProductDetail, showLoader } = props;

  useEffect(() => {
    getResumeReviewProductList();
    getProductList();
  }, []);

  const addEditProduct = (productDetail) => {
    history.push(
      productDetail.id
        ? `${PATHS.reviewProduct}${productDetail.id}?wrapper=1`
        : `/`
    );
    clearProductDetail();
  };

  return (
    <LoaderWrapper showLoader={showLoader}>
      <div className="resume-review">
        <div className="recent-header">
          <div className="recent-nav">
          <h3>Resume Review</h3>
          </div>
        </div>
        <div className="resume-body">
          {
            productReviewList ?
            productReviewList.map((productReview, index) => (
              <ProjectCard
                key={index}
                id={productReview.newProduct.id}
                title={productReview.newProduct.name}
                isPublished={productReview.newProduct.isPublished}
                addEditProduct={addEditProduct}
              />
            )) : <div className="no-product"><h2>You haven't reviewed any product yet!</h2><h4>Please find a product and start reviewing 🎉 </h4></div>
          }
        </div>
        <br></br>
        <div className="recent-header">
          <div className="recent-nav">
            <h3>Product Review Recommendations</h3>
          </div>
        </div>
        <div className="resume-body">
          {
            productList &&
              productList.map((product, index) => (
                <ProjectCard
                  key={index}
                  id={product.id}
                  title={product.name}
                  isPublished={product.isPublished}
                  addEditProduct={addEditProduct}
                />
              ))
          }
        </div>
      </div>
    </LoaderWrapper>
  );
};

const mapStateToProps = (state) => ({
  productReviewList: state.participantReviewReducer.productReviewList,
  productList: state.productReducer.productList,
  showLoader: state.loaderReducer.showLoader
});

const mapDispatchToProps = (dispatch) => ({
  getResumeReviewProductList: () => dispatch(participantReviewActions.getProductReviewList(false)),
  getProductList: () => dispatch(productActions.getProductList({isPublished: true})),
  clearProductDetail: () => dispatch(productActions.clearProductDetail()),
});

HomePageParticipant.propTypes = {};

HomePageParticipant.defaultProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePageParticipant)
);
