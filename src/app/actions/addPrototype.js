import { push } from 'connected-react-router';
import actionTypes from '../../constants/action-types';
import { addPrototypeAuthService } from '../services/prototype.service';
import PATHS from '../../routes/routes-path';
import loaderActions from './loader';

const addPrototypeSuccess = prototypes => ({ type: actionTypes.prototype.ADD_PROTOTYPE_SUCCESS, prototypes });

const addPrototypeFailure = error => ({ type: actionTypes.prototype.ADD_PROTOTYPE_FAILURE, error });

const savePrototype = (previewItems, productId, next) => (dispatch) => {
    dispatch(loaderActions.show());
    addPrototypeAuthService.savePrototype(previewItems)
        .then(
            (response) => {
                dispatch(addPrototypeSuccess(response.data));
                dispatch(push(`${PATHS.editProduct}${productId}?section=4`));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(addPrototypeFailure(error && error.message));
                dispatch(loaderActions.hide());
            },
        );
};

const clearPrototypeList = () => ({type:actionTypes.prototype.CLEAR_PROTOTYPE_LIST})

const prototypeDetailSuccess = response => ({ type: actionTypes.prototype.PROTOTYPE_DETAILS_SUCCESS, response });

const prototypeDetailFailure = error => ({ type: actionTypes.prototype.PROTOTYPE_DETAILS_FAILURE, error});

const getPrototypeDetail = productId => (dispatch) => {
    dispatch(loaderActions.show());
    addPrototypeAuthService.getPrototypeDetail(productId)
        .then(
            (response) => {
                dispatch(prototypeDetailSuccess(response));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(prototypeDetailFailure(error && error.message));
                dispatch(loaderActions.hide());
            }
        )
}

const addPrototypeActions = {
    addPrototypeFailure,
    savePrototype,
    getPrototypeDetail,
    clearPrototypeList,
    prototypeDetailSuccess,
    prototypeDetailFailure
};

export default addPrototypeActions;
