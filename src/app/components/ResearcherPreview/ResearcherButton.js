import React from 'react';
import './ResearcherBottom.css';
import '../css/BottomNavButtons.css';

export default function ResearcherButton() {
    return (
        <div className="BottomNavButtonsWrapper">
            <button className="bottom-nav-btn" id="bottom-prev-btn">Previous</button>
            <button className="bottom-nav-btn" id="bottom-save-btn">Close</button>
            <button className="bottom-nav-btn" id="bottom-next-btn">Next</button>

        </div>
    )
}
