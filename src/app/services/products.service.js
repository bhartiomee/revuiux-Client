import baseService from './base.service';
import URLS from '../../constants/api-urls';

/**
 * Function to make api for getting the product list.
 * @param participant
 */
 const getProductList = (params) => {
    return baseService.makeApiCall(URLS.productListUrl, params)
        .then(productList => productList);
}

const getProductDetail = productId => {
    return baseService.makeApiCall(URLS.productDetailUrl(productId))
        .then(productDetail => productDetail);
}

const updateProduct = (productId, product) => {
    const {
        productName, productGoal, productIndustry, productExperience, productProjectTags, productSkills,
        productDescription, productJobFunction, productLocation, reviewNumbers , isPublished
    } = product;

    const updatedProduct = {
        name: productName,
        goal: productGoal,
        industry: productIndustry,
        experience: productExperience,
        project_tags: productProjectTags,
        skills: productSkills,
        description: productDescription,
        job_function: productJobFunction,
        location: productLocation,
        no_of_review_required: reviewNumbers,
        is_published: isPublished
    }

    return baseService.makeApiCall(URLS.productUpdateUrl(productId), {}, 'PUT', updatedProduct)
        .then(productDetail => productDetail)
}


const createProduct = product => {
    const {
        productName, productGoal, productIndustry, productExperience, productProjectTags, productSkills,
        productDescription, productJobFunction, productLocation, reviewNumbers
    } = product;

    const newProduct = {
        name: productName,
        goal: productGoal,
        industry: productIndustry,
        experience: productExperience,
        project_tags: productProjectTags,
        skills: productSkills,
        description: productDescription,
        job_function: productJobFunction,
        location: productLocation,
        no_of_review_required: reviewNumbers
    }

    return baseService.makeApiCall(URLS.productCreateUrl, {}, 'POST', newProduct)
        .then(productDetail => productDetail)
}

export const productService = {
    getProductList,
    getProductDetail,
    updateProduct,
    createProduct
}
