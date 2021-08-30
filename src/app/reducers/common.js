import actionTypes from "../../constants/action-types";

const initialState = {
   errorPage: { showErrorPage: false, is500: false },
};
/**
 * Function which defines next state of common static data and loader status based on current action.
 *
 * @param state: state of common reducer
 * @param action: Currently dispatched action
 * @returns {*}: Next state of common reducer
 */
const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.common.SHOW_500_ERROR:
            return {
                ...state,
                errorPage: {
                    showErrorPage: true,
                    is500: true,
                },
            };
        case actionTypes.common.SHOW_PAGE_NOT_FOUND_ERROR:
            return {
                ...state,
                errorPage: {
                    showErrorPage: true,
                    is500: false,
                },
            };
        case actionTypes.common.CLEAR_ERROR:
            return {
                ...state,
                errorPage: {
                    showErrorPage: false,
                    is500: false,
                },
            };
        default:
            return state;
        }
    }

export default commonReducer;
