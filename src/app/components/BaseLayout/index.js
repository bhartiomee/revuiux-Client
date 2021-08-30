import React from 'react'
import ErrorPage from '../ErrorPage'
import DetailedHeader from '../UiComponents/DetailedHeader'
import NavigationColumn from '../UiComponents/NavigationColumn'
import { LOCAL_STORAGE_USER_KEY } from '../../../constants/app'
import errorActions from '../../actions/errors'
import { connect } from "react-redux";
import './layout.css'
import '../css/Common.css'


const BaseLayout = (props) => {
    const { children, errorPage, showProfile, clearError } = props;
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    return (
        <div>
            <DetailedHeader showProfile={showProfile} />
            <div className="row-flex">
                { !(errorPage && errorPage.showErrorPage) && user && <NavigationColumn userType={JSON.parse(user).potential_user_type}/> }
                { errorPage && errorPage.showErrorPage ? <ErrorPage is500Error={errorPage.is500} clearError={clearError} /> : children }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    errorPage: state.commonReducer.errorPage
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(errorActions.clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
