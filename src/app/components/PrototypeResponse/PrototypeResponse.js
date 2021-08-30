import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withParams } from '../../containers/WithParams';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import PrototypeResponseActions from '../../actions/prototypeReview';
import LoaderWrapper from '../Loader';
import ReviewContainer from '../ResearcherPreview/PrototypeReviewPage/ReviewContainer/ReviewContainer';
import { history } from '../../../store';
import PATHS from '../../../routes/routes-path';

const PrototypeResponse = (props) => {
    const { match: { params: { reviewId } }, getPrototypeResponse, prototypeResponse, showLoader } = props;

    const [prototypeNumber, setPrototypeNumber] = useState(0);

    useEffect(() => {
        getPrototypeResponse(reviewId);
    }, [])

    const handleMove = prototypeNumber => {
        setPrototypeNumber(prototypeNumber);
    }

    const goBack = productId => {
        history.push(`${PATHS.productReviewResponse}${productId}`);
    };

    const { Prototype, answer } = prototypeResponse[prototypeNumber] || {};
    const { linkToFile, questionStatement, productId } = Prototype || {};

    return (
        <LoaderWrapper showLoader={showLoader} >
            <div className="survey-wrapper-prototype">
                <div className="recent-header back-button">
                    <div className="recent-nav">
                        <h3><b>Prototype Review</b></h3>
                    </div>
                    <button onClick={() => goBack(productId)}><u>Back</u></button>
                </div>
                {
                    prototypeResponse && prototypeResponse.length
                        ? (
                            <div className="prototype-container">
                                <h6>({prototypeNumber + 1} of {prototypeResponse && prototypeResponse.length})</h6>
                                <ReviewContainer
                                    linkToDisplayFile={linkToFile} questionStatement={questionStatement}
                                    answer={answer} showUploadButton={false} showSaveButton={false}
                                    isDisabledText
                                />
                                <div className="lower-nav-buttons">
                                    <button className="cancel-button" onClick={() => handleMove(prototypeNumber - 1)} disabled={prototypeNumber === 0}>
                                        Previous
                                    </button>
                                    <button className="cancel-button" onClick={() => handleMove(prototypeNumber + 1)} disabled={prototypeNumber === (prototypeResponse.length - 1)}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="no-product"><h2>No prototype review available yet</h2></div>
                        )
                }
            </div>
        </LoaderWrapper>
    )
}
const mapStateToProps = state => ({
    prototypeResponse: state.prototypeReviewReducer.prototypeResponse,
    showLoader: state.loaderReducer.showLoader
})

const mapDispatchToProps = dispatch => ({
    getPrototypeResponse: reviewId => dispatch(PrototypeResponseActions.getPrototypeResponse(reviewId)),
})

PrototypeResponse.propTypes = {
    prototypeResponse: PropTypes.array
}

PrototypeResponse.defaultProps = {
    prototypeResponse: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(PrototypeResponse)));
