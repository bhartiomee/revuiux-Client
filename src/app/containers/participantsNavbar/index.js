import { keyBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import LoaderWrapper from '../../components/Loader';
import ParticipantReview from '../../components/ParticipantReview/ParticipantReview';
import PreviewPrototype from '../../components/PreviewProduct/PreviewPrototype';
import SurveyParticipant from '../../components/SurveyParticipant/SurveyParticipant';
import { updateFilterParams } from '../../utils/commonUtils';
import NewReviewNavbar from '../../components/UiComponents/NewReviewNavbar';
import { withRouter } from 'react-router';
import { withParams } from '../WithParams';
import productActions from '../../actions/product';
import QuestionnaireActions from '../../actions/questionnaire';
import { connect } from 'react-redux';
import './navbar.css'

const ParticipantsNavbar = props => {

    const { match: { params: { productId } }, wrapper, isAuthenticating, history, getProductDetail, clearProductDetail, product, reviewId } = props;
    const wrapperNumber = Number.parseInt(wrapper);
    const goToWrapper = wrapperNumber => {
        if (reviewId) {
            updateFilterParams(history, { wrapper: wrapperNumber });
        }
    }

    return (
        <div className="my-reviews">
            <NewReviewNavbar wrapperNumber={wrapperNumber} changeWrapper={goToWrapper}>
                {wrapperNumber === 1 && (
                    <ParticipantReview wrapperNumber={wrapperNumber} changeWrapper={goToWrapper} productId={productId} reviewId={reviewId} />
                )}
                {wrapperNumber === 2 && (
                    <SurveyParticipant wrapperNumber={wrapperNumber} changeWrapper={goToWrapper} />
                )}
                {wrapperNumber === 3 && (
                    <PreviewPrototype wrapperNumber={wrapperNumber} changeWrapper={goToWrapper} />
                )}
            </NewReviewNavbar>
        </div>
    )
}

const mapStateToProps = state => ({
    productList: state.productReducer.productList,
    showLoader: state.loaderReducer.showLoader,
    reviewId: state.participantReviewReducer.reviewId
})

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(ParticipantsNavbar)));
