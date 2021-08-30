import baseService from './base.service';
import URLS from '../../constants/api-urls';

/**
 * Function to make api for getting the product list.
 * @param participant
 */
 const getProductList = () => {
    return baseService.makeApiCall(URLS.productListUrl)
        .then(productList => productList);
}

const getProductDetail = productId => {
    return baseService.makeApiCall(URLS.productDetailUrl(productId))
        .then(productDetail => productDetail);
}

export const participantProductService = {
    getProductList,
    getProductDetail,
}
