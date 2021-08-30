import URLS from '../../constants/api-urls';
import baseService from './base.service';

/**
 * Function to make api call to register participant in database.
 * @param participant
 */
 function registerParticipant(participant) {
    return baseService.makeApiCall(URLS.participantSignUpUrl, {}, 'POST', participant)
        .then(participant => participant.data);
}

export const registrationService = {
    registerParticipant
}
