import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import SurveyQuestion from '../UiComponents/SurveyQuestion'
import { withParams } from '../../containers/WithParams';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import QuestionniareResponseActions from '../../actions/QuestionnaireReview';
import LoaderWrapper from '../Loader';

const SurveyResponse = (props) => {

    const { match: { params: { reviewId } }, getQuestionnaireReviewDetails, questionnaireResponse, showLoader } = props;

    useEffect(() => {
        getQuestionnaireReviewDetails(reviewId);
    }, [])

    return (
        <LoaderWrapper showLoader={showLoader} >
            <div className="participant-survey-questions">
                {
                    questionnaireResponse && questionnaireResponse.length ? <p><b>Questions:</b></p> : ""
                }
                {
                    questionnaireResponse && questionnaireResponse.length
                        ? questionnaireResponse.map((questionnaire, index) => {
                            const { questionType, questionStatement, optionA, optionB, optionC, optionD, id } = questionnaire.Questionnaire;
                            return (
                                <SurveyQuestion
                                    key={index} questionNumber={index + 1} questionType={questionType} questionText={questionStatement}
                                    optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD} unique={index} questionId={id}
                                    answer={questionnaire.answer}
                                    isPreview
                                    reviewId={reviewId}
                                />
                            )
                        })
                        : <div className="no-product"><h2>No survey review available yet!</h2></div>
                }
            </div>
        </LoaderWrapper>
    )
}
const mapStateToProps = state => ({
    questionnaireResponse: state.questionnaireReviewReducer.questionnaireResponse,
    showLoader: state.loaderReducer.showLoader
})

const mapDispatchToProps = dispatch => ({
    getQuestionnaireReviewDetails: reviewId => dispatch(QuestionniareResponseActions.getQuestionnaireReviewDetails(reviewId)),
})

SurveyResponse.propTypes = {
    questionnaireResponse: PropTypes.array
}

SurveyResponse.defaultProps = {
    questionnaireResponse: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(SurveyResponse)));
