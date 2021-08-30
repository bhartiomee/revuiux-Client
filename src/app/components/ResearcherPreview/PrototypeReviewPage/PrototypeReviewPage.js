import React from 'react';
import ResearcherSidebar from '../ReviewSidebar'
import ReseachercherPreviewHeader from '../ResearcherPreviewHeader'
import ResearcherButton from '../ResearcherButton';
import './PrototypeReviewPage.css';
import ReviewContainer from './ReviewContainer/ReviewContainer';

export default function PrototypeReviewPage() {
    return (
        <div className="PrototypePreviewPageWrapper">
            <div className="PrototypePreviewPageContainer">
                < ResearcherSidebar />
                <div className="all-components-wrapper">
                    <ReseachercherPreviewHeader />
                    <p id="review-para">Product Prototypes:</p>
                    <p id="review-number">(1 of 5)</p>
                    <div id="review-box"> <ReviewContainer /></div>
                    <ResearcherButton />
                </div>
            </div>
        </div>
    )
}
