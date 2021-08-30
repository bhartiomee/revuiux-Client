import { connect } from 'react-redux';
import { withParams } from '../../containers/WithParams';
import { withRouter } from 'react-router-dom';
import ModalAlertBox from "../UiComponents/ModalAlertBox";
import './Preview.css';
import React, { useEffect, useState } from 'react';
import addPrototypeActions from '../../actions/addPrototype';
import ReviewContainer from '../ResearcherPreview/PrototypeReviewPage/ReviewContainer/ReviewContainer';
import { history } from '../../../store';
import PATHS from '../../../routes/routes-path';
import '../../containers/products/ProductDetails/details.css'
import { LOCAL_STORAGE_USER_KEY } from '../../../constants/app'
import PrototypeResponseActions from '../../actions/prototypeReview'
import img1 from "../../../Assets/image/Vector.png"

const PreviewPrototype = props => {
    const { match: { params: { productId,reviewId } }, getPrototypeDetail, prototypeList, submitPrototypeResponse, next,reviewPublished } = props;
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    const userType = JSON.parse(user).potential_user_type

    const Txt = "Review Submitted Successfully!";
    const [prototypeNumber, setPrototypeNumber] = useState(0);
    const [prototypeResponse, setPrototypeResponse] = useState({});
    const [prototypeResponseArray, setPrototypeResponseArray] = useState([]);
     const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getPrototypeDetail(productId);
    }, [])

    const moveToPreview = previewNumber => {
        setPrototypeNumber(previewNumber);
    };

    const handleNext = () => {
        document.getElementById("text-field").value = "";
        moveToPreview(prototypeNumber + 1)
    }

    const goToPreviewPage = () => history.push(`${PATHS.editProduct}${productId}?section=4`);

    const handleSubmit = () => {
        submitPrototypeResponse([...prototypeResponseArray.slice(1)], reviewId, productId, next);
    }

    const hideModal = () => {
        setShowModal(false);
        history.push('/');
      };

    return (

        <div className="survey-wrapper-prototype">
            {
                user && userType === 1
                    ? null
                    : (
                        <div className="recent-header back-button">
                            <div className="recent-nav">
                                <h3><b>Prototype preview</b></h3>
                            </div>
                            <button onClick={goToPreviewPage}><u>back</u></button>
                        </div>
                    )
            }
            {
                prototypeList && prototypeList.length
                    ? (
                        <div className="prototype-container">
                            <h6>({prototypeNumber + 1} of {prototypeList && prototypeList.length})</h6>
                            <ReviewContainer onSave={handleNext} responseArray={prototypeResponseArray} setResponseArray={setPrototypeResponseArray} response={prototypeResponse} prototypeId={prototypeList[prototypeNumber] && prototypeList[prototypeNumber].id} setResponse={setPrototypeResponse} linkToDisplayFile={prototypeList[prototypeNumber] && prototypeList[prototypeNumber].linkToFile} questionStatement={prototypeList[prototypeNumber] && prototypeList[prototypeNumber].questionStatement} productId={productId} />
                            <div className="lower-nav-buttons">
                                <button className="cancel-button" onClick={() => moveToPreview(prototypeNumber - 1)} disabled={prototypeNumber === 0}>
                                    Previous
                                </button>
                                {prototypeList && prototypeList.length == prototypeNumber + 1 ? <button className="save-button" onClick={handleSubmit}> Submit </button> : null}

                                <button className="cancel-button" onClick={handleNext} disabled={prototypeNumber === (prototypeList.length - 1)}>
                                    Next
                                </button>
                            </div>
                            <ModalAlertBox
                                show={reviewPublished}
                                handleClose={hideModal}
                                imgUrl={img1}
                                title="Congratulations!!!"
                                text={Txt}
                                btnTxt="Home Page"
                            ></ModalAlertBox>
                        </div>
                    ) : (
                        <div className="no-product"><h2>No prototype available for survey yet!</h2><h4>Please navigate to "<b>Review New Product</b>"  </h4></div>
                    )
            }
        </div>

    )
}

const mapStateToProps = state => ({
    prototypeList: state.addPrototypeReducer.prototypeList,
    reviewPublished:state.prototypeReviewReducer.reviewPublished
})

const mapDispatchToProps = dispatch => ({
    getPrototypeDetail: productId => dispatch(addPrototypeActions.getPrototypeDetail(productId)),
    submitPrototypeResponse: ([...prototypeResponseArray], reviewId, productId, next) => dispatch(PrototypeResponseActions.submitPrototypeResponse([...prototypeResponseArray], reviewId, productId, next)),
})

PreviewPrototype.propTypes = {
}

PreviewPrototype.defaultProps = {
    prototypeList: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(PreviewPrototype)));
