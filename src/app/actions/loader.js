import actionTypes from "../../constants/action-types";

const show = () => ({ type: actionTypes.loader.SHOW_LOADER });
const hide = () => ({ type: actionTypes.loader.HIDE_LOADER });

const loaderActions = {
    show,
    hide
}

export default loaderActions;
