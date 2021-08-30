import { push } from 'connected-react-router';
import actionTypes from '../../constants/action-types';
import PATHS from '../../routes/routes-path';
import { questionnaireService } from '../services/questionnaire.service';
import loaderActions from './loader';

const questionnaireCreateSuccess = questions => ({ type: actionTypes.questionnaire.QUESTIONNAIRE_CREATE_SUCCESS, questions });

const questionnaireCreateFailure = error => ({ type: actionTypes.questionnaire.QUESTIONNAIRE_CREATE_FAILURE ,error});

const checkQuestionnaire = (qstRecords, productId, next) => (dispatch) => {
    dispatch(loaderActions.show());
    questionnaireService.createQuestionnaire(qstRecords)
        .then(
            (response) => {
                dispatch(questionnaireCreateSuccess(response.data));
                dispatch(push(`${PATHS.editProduct}${productId}?section=3`));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(questionnaireCreateFailure(error & error.message));
                dispatch(loaderActions.hide());
            }
        )
};

const getQuestionnaireDetails = (productId) => dispatch => {
    dispatch(loaderActions.show());
    questionnaireService.getQuestionnaireDetails(productId)
        .then(
            (response) => {
                dispatch(questionnaireDetailsSuccess(response));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(questionnaireDetailsFailure(error & error.message));
                dispatch(loaderActions.hide());
            }
        )
}


const questionnaireDetailsSuccess = response => ({ type: actionTypes.questionnaire.QUESTIONNAIRE_DETAILS_SUCCESS, response });

const questionnaireDetailsFailure = error => ({ type: actionTypes.questionnaire.QUESTIONNAIRE_DETAILS_FAILURE, error });

const clearQuestionnaireList = () => ({ type: actionTypes.questionnaire.CLEAR_QUESTIONNAIRE_LIST })

const QuestionnaireActions = {
    checkQuestionnaire,
    questionnaireCreateFailure,
    questionnaireCreateSuccess,
    getQuestionnaireDetails,
    questionnaireDetailsSuccess,
    questionnaireDetailsFailure,
    clearQuestionnaireList
}

export default QuestionnaireActions;
