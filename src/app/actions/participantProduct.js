import loaderActions from "./loader";
import actionTypes from '../../constants/action-types';
import { participantProductService } from '../services/participantproduct.service';

const request = () => ({ type: actionTypes.product.REQUEST });

const listSuccess = response => ({ type: actionTypes.product.LIST_SUCCESS, response });

const listFailure = error => ({ type: actionTypes.product.LIST_FAILURE, error });

const getProductList = () => (dispatch) => {
    dispatch(loaderActions.show());
    dispatch(request());
    participantProductService.getProductList()
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
    dispatch(request());
    participantProductService.getProductDetail(productId)
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

const productActions = {
    getProductList,
    getProductDetail,
    clearProductDetail,
};

export default productActions;
