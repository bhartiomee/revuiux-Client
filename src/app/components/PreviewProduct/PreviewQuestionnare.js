import SurveyQuestion from '../UiComponents/SurveyQuestion';

import { connect } from 'react-redux';
import { withParams } from '../../containers/WithParams';
import { withRouter } from 'react-router-dom';
import LoaderWrapper from '../Loader';
import './Preview.css';
import React, { useEffect } from 'react';
import QuestionnaireActions from '../../actions/questionnaire';
import { history } from '../../../store';
import PATHS from '../../../routes/routes-path';
import PropTypes from 'prop-types';

const PreviewQuestionnaire = props => {
    const { match: { params: { productId } }, getQuestionnaireDetails, questionnaireList } = props;

    useEffect(() => {
        getQuestionnaireDetails(productId);
    }, [])

    const goToPreviewPage = () => history.push(`${PATHS.editProduct}${productId}?section=4`);

    return (
        <LoaderWrapper showLoader={false}>
            <div className="survey-wrapper">
                <div className="recent-header back-button">
                    <div className="recent-nav">
                    <h3><b>Survey preview</b></h3>
                    </div>
                    <button onClick={goToPreviewPage}><u>back</u></button>
                </div>
                <div className="preview-list">
                {
                    questionnaireList.map((questionnaire, index) => {
                        const { questionType, questionStatement, optionA, optionB, optionC, optionD } = questionnaire;
                        return (
                            <SurveyQuestion
                                key={index} questionNumber={index+1} questionType={questionType} questionText={questionStatement}
                                optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD}
                                isPreview
                            />
                    )})
                }
                </div>
            </div>
        </LoaderWrapper>
    )
}

const mapStateToProps = state => ({
    questionnaireList: state.questionnaireReducer.questionnaireList
})

const mapDispatchToProps = dispatch => ({
    getQuestionnaireDetails: productId => dispatch(QuestionnaireActions.getQuestionnaireDetails(productId)),
})

PreviewQuestionnaire.propTypes = {
    questionnaireList: PropTypes.array
}

PreviewQuestionnaire.defaultProps = {
    questionnaireList: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(PreviewQuestionnaire)));
