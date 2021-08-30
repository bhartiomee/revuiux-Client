import actionTypes from '../../constants/action-types';

/**
 * Action to set flag to show 500 error page
 */
const set500Error = () => ({ type: actionTypes.common.SHOW_500_ERROR });

/**
 * Action to set flag to show page not found error
 */
 const setPageNotFoundError = () => ({ type: actionTypes.common.SHOW_PAGE_NOT_FOUND_ERROR });

 /**
  * Action to reset flag for showing error page
  */
 const clearError = () => ({ type: actionTypes.common.CLEAR_ERROR });


export default {
    set500Error,
    setPageNotFoundError,
    clearError
};
