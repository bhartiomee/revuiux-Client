import { push } from 'connected-react-router';
import PATHS from '../../routes/routes-path';
import actionTypes from '../../constants/action-types';
import { productService } from '../services/products.service';
import loaderActions from './loader';
import { questionnaireService } from '../services/questionnaire.service';
import { addPrototypeAuthService } from '../services/prototype.service';
import QuestionnaireActions from './questionnaire';
import addPrototypeActions from './addPrototype';

const listSuccess = response => ({ type: actionTypes.product.LIST_SUCCESS, response });

const listFailure = error => ({ type: actionTypes.product.LIST_FAILURE, error });

const getProductList = (params) => (dispatch) => {
    dispatch(loaderActions.show());
    productService.getProductList(params)
        .then(
            (response) => {
                dispatch(listSuccess(response));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(listFailure(error && error.message));
                dispatch(loaderActions.hide());
            },
        );
};

const detailSuccess = product => ({ type: actionTypes.product.DETAIL_SUCCESS, product });

const detailFailure = error => ({ type: actionTypes.product.DETAIL_FAILURE, error});

const clearProductDetail = () => ({ type: actionTypes.product.CLEAR_PRODUCT_DETAIL });

const getProductDetail = productId => (dispatch) => {
    dispatch(loaderActions.show());
    productService.getProductDetail(productId)
        .then(
            (response) => {
                dispatch(detailSuccess(response.data));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(detailFailure(error && error.message));
                dispatch(loaderActions.hide());
            }
        )
}

const setSideBarProduct = product => ({ type: actionTypes.product.UPDATE_ADD_PRODUCT, product});

const createSuccess = product => ({ type: actionTypes.product.CREATE_SUCCESS, product });

const createFailure = error => ({ type: actionTypes.product.CREATE_FAILURE, error});

const createProduct = product => (dispatch) => {
    dispatch(loaderActions.show());
    productService.createProduct(product)
        .then(
            (response) => {
                dispatch(createSuccess(response.product));
                dispatch(push(`${PATHS.editProduct}${response.product.id}?section=2`));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(createFailure(error && error.message));
                dispatch(loaderActions.hide());
            }
        )
}

const updateSuccess = updatedProduct => ({ type: actionTypes.product.UPDATE_SUCCESS, updatedProduct });

const updateFailure = error => ({ type: actionTypes.product.UPDATE_FAILURE, error});

const updateProduct = (productId, product) => (dispatch) => {
    dispatch(loaderActions.show());
    productService.updateProduct(productId, product)
        .then(
            (response) => {
                dispatch(updateSuccess(response.data));
                if(!response.data.isPublished){
                    dispatch(push(`${PATHS.editProduct}${productId}?section=2`));
                }
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(updateFailure(error && error.message));
                dispatch(loaderActions.hide());
            }
        )
}

const getProductQuestionnairePrototypeDetails = (productId) => (dispatch) => {
    dispatch(loaderActions.show());
    Promise.all([
        productService.getProductDetail(productId),
        questionnaireService.getQuestionnaireDetails(productId),
        addPrototypeAuthService.getPrototypeDetail(productId)
    ]).then(
        data => {
            dispatch(detailSuccess(data[0].data));
            dispatch(QuestionnaireActions.questionnaireDetailsSuccess(data[1]));
            dispatch(addPrototypeActions.prototypeDetailSuccess(data[2]));
            dispatch(loaderActions.hide());
        },
        error => {
            dispatch(updateFailure(error[0] && error[0].message));
            dispatch(QuestionnaireActions.questionnaireDetailsFailure(error[1] && error[1].message));
            dispatch(addPrototypeActions.prototypeDetailFailure(error[2] && error[2].message));
            dispatch(loaderActions.hide());
        }
    )
}

const productActions = {
    getProductList,
    setSideBarProduct,
    getProductDetail,
    clearProductDetail,
    createProduct,
    updateProduct,
    listSuccess,
    listFailure,
    getProductQuestionnairePrototypeDetails
};

export default productActions;
