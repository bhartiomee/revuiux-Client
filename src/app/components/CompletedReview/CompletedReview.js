import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import participantReviewActions from '../../actions/ParticipantReview';
import ProjectCard from '../UiComponents/ProjectCard';
import PATHS from '../../../routes/routes-path';
import { history } from '../../../store';
import productActions from '../../actions/product';
import productReviewActions from '../../actions/productReview';

const CompletedReview = (props) => {
    const {getReviewedProductList ,productList} = props;
    useEffect(() => {
        getReviewedProductList();
    }, [])

    const goToReviwedResponse = (productId,reviewId )=> {
        history.push(`${PATHS.resumeReview}${productId}/${reviewId}?wrapper=1`);
    }

    return (
        <div className="home-page-wrapper draft-wrapper-common">
            <div className="recent-header">
                <div className="recent-nav">
                    <h3><b>Review History:</b></h3>
                </div>
            </div>
            <div className="recent-body">
                {
                    productList ? (
                        productList.map((product, index) => (
                            <ProjectCard
                                key={index}
                                id={product.id}
                                title={product.newProduct.name}
                                isParticipant="true"
                                addEditProduct={()=>{goToReviwedResponse(product.productId,product.id)}}
                            />
                        ))
                    ) :
                        (<div className="no-product">
                            <h2>You haven't reviewed any products yet.</h2><h4>Click on "<b>Review New Product</b>" on the left to start  🎉 </h4>
                        </div>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    reviewId: state.participantReviewReducer.reviewId,
    productList: state.productReducer.productList,
});

const mapDispatchToProps = (dispatch) => ({
    clearProductDetail: () => dispatch(productActions.clearProductDetail()),
    getReviewedProductList: () => dispatch(productReviewActions.getResearcherProductReviewList(true)),
});

CompletedReview.propTypes = {};

CompletedReview.defaultProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompletedReview));
