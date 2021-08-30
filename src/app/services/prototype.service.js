import baseService from './base.service';
import URLS from '../../constants/api-urls';

//service to add prototype details
const savePrototype =(previewItems) => {
    return baseService.makeApiCall(URLS.addPrototype, {}, 'POST', {preview_items:previewItems} )
        .then(prototype => prototype);
}

const getPrototypeDetail = productId => {
    return baseService.makeApiCall(URLS.prototypeDetailUrl(productId))
        .then(prototypeList => prototypeList);
}

export const addPrototypeAuthService = {
    savePrototype,
    getPrototypeDetail
};
