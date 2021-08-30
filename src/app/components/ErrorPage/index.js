import React, { useEffect } from 'react';
import Page500 from '../../../Assets/image/error-500.png'
import Page404 from '../../../Assets/image/error-404.png'
import './ErrorPage.css'
import PATHS from '../../../routes/routes-path';
import { history } from '../../../store';

const ErrorPage = props => {
    const { is500Error, clearError } = props;

    const goToHomePage = () => {
        history.push(`${PATHS.loginPage}`)
    };

    useEffect(() => {
        return () => {
            clearError();
        }
    }, [])

    return (
        <div className="error-page-wrapper">
            <img
                className="error-page-image"
                src={is500Error ? Page500 : Page404}
                alt=""
            />
            <div className="error-type">
                <h5><b>{is500Error ? "Error 500 - Internal Server Error" : "Error 404 - Not found"}</b></h5>
            </div>
            <div className="error-page-heading"><h1><b>Oops!</b></h1></div>
            <div className="error-message">
                {
                    is500Error
                    ? "The server can't process the request due to serverside errors"
                    : "The page you are looking for cannot be found"
                }
            </div>
            <button className="go-to-home" onClick={goToHomePage}><b>Go to Home</b></button>
        </div>
    )
}

export default ErrorPage;
