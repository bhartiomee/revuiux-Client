import React from 'react';
import "../../containers/participantsNavbar/navbar.css";
import "../css/NewProductNavbar.css";

const NewReviewNavbar = (props) => {
    const { wrapperNumber, changeWrapper,children } = props;

    const goToWrapper = wrapperNumber => {
        changeWrapper(wrapperNumber);
    }

    return (
        <div>
            <div className="participant-navbar">
                <span
                    onClick={() => goToWrapper(1)}
                    className={`${wrapperNumber === 1 && "active-class"} menu-list`}
                >
                    Product Details
                </span>
                <span
                    onClick={() => goToWrapper(2)}
                    className={`${wrapperNumber === 2 && "active-class"} menu-list`}
                >
                    Review Survey
                </span>
                <span
                    onClick={() => goToWrapper(3)}
                    className={`${wrapperNumber === 3 && "active-class"} menu-list`}
                >
                    Review Prototype
                </span>
            </div>
            {children}
        </div>
    )
}

export default NewReviewNavbar;
