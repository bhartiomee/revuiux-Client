import baseService from './base.service';
import URLS from '../../constants/api-urls';
//service to create questionnaire

const createQuestionnaire = ([...qstRecords]) => {
    return baseService.makeApiCall(URLS.questionnaireCreateUrl, {}, 'POST', { questions_preview: qstRecords})
        .then(questionnaireDetails => questionnaireDetails)
}

const getQuestionnaireDetails = productId => {

    return baseService.makeApiCall(URLS.questionnaireDetailsUrl(productId))
        .then(questionnaireList => questionnaireList)
}

export const questionnaireService = {
    createQuestionnaire,
    getQuestionnaireDetails
};
