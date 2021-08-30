import firebase from '../../../../../Firebase/Firebase'
import React, { useState, useEffect } from 'react';
import './ReviewContainer.css';
import loading from '../../../../../Assets/image/loader.gif'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withParams } from '../../../../containers/WithParams';
import addPrototypeActions from '../../../../actions/addPrototype';
import PropTypes from 'prop-types';

const ReviewContainer = (props) => {
    const { responseArray, setResponseArray, response, prototypeId, setResponse, linkToDisplayFile, questionStatement, answer, showUploadButton, showSaveButton, isDisabledText } = props;

    const [link, setLink] = useState('');
    const [files, setFiles] = useState(null);
    const [checkUpload, setCheckUpload] = useState(false);

    const handleChange = (e) => {
        setFiles(e.target.files);
    };

    const handleAnsChange = (e) => {
        e.preventDefault();
        setResponse({['answer']: e.target.value, prototypeId , reviewId:1 })
    }

    const handleUpload = () => {
        setCheckUpload(true);
        const bucketName = "Uranch/images";
        const file = files[0];
        const storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
        const uploadTask = storageRef.put(file).on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
            const temp = storageRef.getDownloadURL().then((url) => {
                setLink(url);
                setCheckUpload(false);
            });
        });
    };

    const handleSave = (e) => {
        handleUpload();
    }
    useEffect(() => {
        setResponse({ ...response,['linkToFile']: link })
    }, [link])

    useEffect(() => {
        let index = responseArray.findIndex(item => item.prototypeId === response.prototypeId)
        let obj = responseArray[index]
       
        if (index !== -1) {
            obj.answer = response.answer;
            obj.linkToFile = link;
            setResponseArray([...responseArray.slice(0, index), obj, ...responseArray.slice(index + 1)])
        }
        else {
            setResponseArray([...responseArray, response])
        }
    }, [response])


    return (
        <div className="outer-review-container">
            <div className="reviewImgwrapper">
                <div className="review-img-container">
                    <img src={linkToDisplayFile} />
                </div>
                {/* <p>(click to expand image)</p> */}
            </div>
            <div className="review-decription-container">
                <div className="question-about">
                    <p><b>{questionStatement}?</b></p>
                    <div className="commmon-outer-divs" id="review-answer-div">
                        <textarea name="answer" placeholder=" Your answer here..."
                            id="text-field"
                            type="text" 
                            onBlur={handleAnsChange}
                            disabled={isDisabledText}
                            defaultValue={answer}
                        />
                    </div>
                </div>
                {
                    showUploadButton && <div className="comments-container">
                        <p>Upload your comments:</p>
                        <div className="commmon-outer-divs" id="choose-file-div">
                            <label for="file-upload" className="choose-file-btn">
                                Choose File
                            </label>
                            <input id="file-upload" type="file" onChange={handleChange} />
                            <small>(.doc, .jpeg, .txt file)</small>
                            {checkUpload ? <img src={loading} height="37px" width="37px"></img> : null}
                        </div>
                    </div>
                }
                { showSaveButton && <button className="save-review-btn" onClick={handleSave}>Save</button> }
            </div>
        </div>
    )
}

ReviewContainer.propTypes = {
    productList: PropTypes.object
}

ReviewContainer.defaultProps = {
    productList: {},
    setResponse: () => {},
    responseArray: [],
    setResponseArray: () => {},
    answer: '',
    showUploadButton: true,
    showSaveButton: true,
    isDisabledText: false
}


const mapStateToProps = state => ({
});
const mapDispatchToProps = (dispatch) => ({
    getPrototypeResponse: ({ ...addItem }, reviewId, productId, next) => {
        dispatch(addPrototypeActions.getPrototypeResponse({ ...addItem }, reviewId, productId, next));
    },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(ReviewContainer)));
