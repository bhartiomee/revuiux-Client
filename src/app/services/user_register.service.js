import baseService from "./base.service";
import URLS from "../../constants/api-urls";

function registerParticipant(inputState) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: inputState.name,
      gender: inputState.gender,
      password: inputState.password,
      confirm_password: inputState.confirmPassword,
      phone: inputState.phone,
      email: inputState.email,
      location: inputState.location,
      socialMediaLink: inputState.socialMediaLink,
      experience: inputState.experience,
      industry: inputState.industry,
      job_function: inputState.jobFunction,
      highest_education: inputState.highestEducation,
      research_description: inputState.researchDescription,
      skills: inputState.skills,
    }),
  };
  return fetch(URLS.participantSignUpUrl, requestOptions).then(
    baseService.handleResponse,
    baseService.handleError
  );
}
export const registrationService = {
  registerParticipant,
};
