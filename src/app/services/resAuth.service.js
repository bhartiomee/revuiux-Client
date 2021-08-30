import baseService from './base.service';
import URLS from '../../constants/api-urls';

//service to make signup request for researcher
function researcherRegister(input) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name:input.name,
            email:input.email,
            password:input.password,
            confirm_password:input.confirmPassword,
            phone:input.phone,
            location:input.location,
            research_description:input.researchDescription
        }),
    };
    return fetch(URLS.researcherSignUpUrl, requestOptions)
        .then(baseService.handleResponse, baseService.handleError);
}

export const researcherauthService = {
    researcherRegister
};
