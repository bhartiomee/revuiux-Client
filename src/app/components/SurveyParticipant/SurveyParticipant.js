import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import SurveyQuestion from '../UiComponents/SurveyQuestion'
import './SurveyParticipant.css';
import { withParams } from '../../containers/WithParams';
import { withRouter } from 'react-router';
import QuestionnaireActions from '../../actions/questionnaire';
import PropTypes from 'prop-types';
import QuestionniareResponseActions from '../../actions/QuestionnaireReview';

const SurveyParticipant = (props) => {

    const { match: { params: { productId,reviewId } }, getQuestionnaireDetails, questionnaireList, next, createQuestionnaireResponse } = props;
    
    const [qstResponse, setQstnResponse] = useState({})
    const [ansRecord, setAnsRecord] = useState([]);

    useEffect(() => {
        let index = ansRecord.findIndex(item => item.questionId === qstResponse.questionId)
        let obj = ansRecord[index]
       
        if (index !== -1) {
            obj.answer = qstResponse.answer
            setAnsRecord([...ansRecord.slice(0, index), obj, ...ansRecord.slice(index + 1)])
        }
        else {
            setAnsRecord([...ansRecord, qstResponse])
        }
    }, [qstResponse])

    const saveResponse = () => {
        createQuestionnaireResponse([...ansRecord.slice(1)], reviewId, productId, next);
    }

    useEffect(() => {
        getQuestionnaireDetails(productId);
    }, [])
    return (
        <div className="participant-survey-questions">
            <p><b>Questions:</b></p>
            {
                questionnaireList !== undefined && questionnaireList.length ?
                questionnaireList && questionnaireList.map((questionnaire, index) => {
                    const { questionType, questionStatement, optionA, optionB, optionC, optionD, id } = questionnaire;

                    return (
                        <SurveyQuestion
                            key={index} questionNumber={index + 1} questionType={questionType} questionText={questionStatement}
                            optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD} unique={index} questionId={id}
                            // setAnswer={ans => setQstnResponse(ans)}
                            setAnswer={setQstnResponse} reviewId={reviewId}
                        />
                    )
                }) : <div className="no-product"><h2>No questions available for survey yet!</h2><h4>Please navigate to "<b>Review Prototype</b>" </h4></div>
            }

            { questionnaireList !== undefined && questionnaireList.length ? <button className="survey-btn" onClick={saveResponse} >Submit</button> : null}
        </div>
    )
}
const mapStateToProps = state => ({
    questionnaireList: state.questionnaireReducer.questionnaireList
})

const mapDispatchToProps = dispatch => ({
    getQuestionnaireDetails: productId => dispatch(QuestionnaireActions.getQuestionnaireDetails(productId)),
    clearQuestionnaireList: () => dispatch(QuestionnaireActions.clearQuestionnaireList()),
    createQuestionnaireResponse: ([...qstResponse], reviewId, productId, next) => dispatch(QuestionniareResponseActions.createQuestionnaireResponse([...qstResponse], reviewId, productId, next)),
})

SurveyParticipant.propTypes = {
    questionnaireList: PropTypes.array
}

SurveyParticipant.defaultProps = {
    questionnaireList: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(SurveyParticipant)));
