import actionTypes from "../../constants/action-types";

const initialState = { showLoader: false };

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.loader.SHOW_LOADER:
            return {
                showLoader: true,
            };
        case actionTypes.loader.HIDE_LOADER:
            return {
                showLoader: false,
            };
        default:
            return state;
    }
}
