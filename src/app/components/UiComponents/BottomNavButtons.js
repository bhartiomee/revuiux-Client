import React from 'react';
import '../css/BottomNavButtons.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export default function BottomNavButtons() {
    return (
        <div className="BottomNavButtonsWrapper">
            <div className="icon-btn">
                <ArrowBackIcon />
                <p>Prev</p>
            </div>
            <button className="bottom-nav-btn" id="bottom-save-btn">Save</button>
            <button className="bottom-nav-btn" id="bottom-cancel-btn">Cancel</button>
            <div className="icon-btn">
                <p>Next</p>
                <ArrowForwardIcon />
            </div>
        </div>
    )
}
