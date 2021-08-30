import { push } from 'connected-react-router';
import PATHS from '../../../routes/routes-path';
import React, { useEffect, useState } from 'react'
// import '../../Components/css/LoginPageStyle.css';
import './ParticipantReview.css';
import participantReviewActions from '../../actions/ParticipantReview';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withParams } from '../../containers/WithParams';
import productActions from '../../actions/product';

const ParticipantReview = (props) => {
    const { match: { params: { reviewId } }, clearProductDetail, getProductDetail, productId, createReview, product } = props;

    const startReview = () => {
        reviewId ? (push(`${PATHS.resumeReview}${productId}${reviewId}?wrapper=2`)) :
            createReview(productId)
    }

    useEffect(() => {
        if (productId) {
            getProductDetail(productId);
        }
        return () => {
            clearProductDetail()
        }
    }, [])


    return (
        <div className="product-details">
            <div className="ParticipantReviewWrapper">
                <div className="ObjectiveWrapper">
                    <h5>Objective of the Product</h5>
                    <p>
                        {product && product.goal}
                    </p>
                </div>
                <div className="ObjectiveWrapper">
                    <h5>Who is it for?</h5>
                    <p>
                        {product && product.description}
                    </p>
                </div>
            </div>
            {!reviewId && (
                <button onClick={startReview} ><b>Start Review</b></button>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    product: state.productReducer.product,
})

const mapDispatchToProps = dispatch => ({
    createReview: productId => dispatch(participantReviewActions.createReview(productId)),
    clearProductDetail: () => dispatch(productActions.clearProductDetail()),
    getProductDetail: productId => dispatch(productActions.getProductDetail(productId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps,)(withParams(ParticipantReview)));
