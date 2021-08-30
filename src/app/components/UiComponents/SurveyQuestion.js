import React, { useEffect, useState } from 'react';
import '../css/LoginPageStyle.css';

export default function SurveyQuestion(props) {
    
    const { questionNumber, questionType, questionText, optionA, optionB, optionC, optionD, isPreview, setAnswer, questionId, reviewId, answer } = props;
    
    const handleChange = (e) => {
        const tmp = e.target.name;
        setAnswer({ [tmp]: e.target.value , questionId,reviewId})
    }
    return (
        <>
            <div className="survey-question">
                <label>Q {`${questionNumber}.`} </label>
                <h6>{questionText} ?</h6>
            </div>
            <div className="survey-options">
                {
                    questionType === 1 && <>
                        <div className="review-options">
                            <input type="radio" name="answer" value={optionA} disabled={isPreview} onBlur={handleChange} checked={answer && answer === optionA}/>
                            <label>{optionA}</label>
                        </div>
                        <div className="review-options">
                            <input type="radio" name="answer" value={optionB} disabled={isPreview} onBlur={handleChange} checked={answer && answer === optionB}/>
                            <label>{optionB}</label>
                        </div>
                        <div className="review-options">
                            <input type="radio" name="answer" value={optionC} disabled={isPreview} onBlur={handleChange} checked={answer && answer === optionC}/>
                            <label>{optionC}</label>
                        </div>
                        <div className="review-options">
                            <input type="radio" name="answer" value={optionD} disabled={isPreview} onBlur={handleChange} checked={answer && answer === optionD}/>
                            <label>{optionD}</label>
                        </div>
                    </>
                }
                {
                    questionType === 2 &&
                    <textarea className="survey-text-area" type="text" placeholder="Your answer" name="answer" disabled={isPreview}
                        onBlur={handleChange} value={answer}
                    />
                }
            </div>
        </>
    )
}
