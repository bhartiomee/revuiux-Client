import React, { useEffect, useState } from "react";
import AddQuestioneerOptions from "../../../UiComponents/AddQuestioneerOptions";
import "./CreateQuestioneer.css";
import "../../../css/Common.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import QuestionnaireActions from "../../../../actions/questionnaire";
import { withParams } from "../../../../containers/WithParams";
import PropTypes from 'prop-types';

const CreateQuestioneer = (props) => {

  const { productId, checkQuestionnaire, next, error, getQuestionnaireDetails,
    questionnaireList, clearQuestionnaireList , changeSection } = props;

  const goToSection = sectionNumber => {
    changeSection(sectionNumber);
  }

  const [optionsText, setOptionsText] = useState({});
  //callback function to get question options 
  const getOptions = (options) => {
    setOptionsText({ ...options })
  }

  //1->objective 2->subjective
  const [qtype, setQtype] = useState(2);
  const [question, setQuestion] = useState({
    questionStatement: ""
  });
  const [qstRecords, setQstnRecords] = useState([]);
  const [isErr, setIsErr] = useState(false);

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setQuestion({ ...question, [name]: value });
  }

  //to create data in state variable questionType
  const createRecords = e => {
    e.preventDefault();
    if (!question.questionStatement) {
      setIsErr(true);
    }
    else {
      const newQuestion = { productId: productId, questionType: qtype, ...optionsText, ...question };
      setQstnRecords([...qstRecords, newQuestion])
      setQuestion({ questionStatement: "" });
      setOptionsText({});
    }
  }

  const removeQuestion = (index) => {
    setQstnRecords([...qstRecords.filter(record => qstRecords.indexOf(record) !== index)]);
  }

  //save questionnaire to db(bulkCreate)
  const saveQuestionnaire = () => {
    checkQuestionnaire([...qstRecords], productId, next)
  }

  useEffect(() => {
    if (questionnaireList !== undefined && questionnaireList.length && qstRecords.length === 0) {
      setQstnRecords([...qstRecords, ...questionnaireList]);
    }
  }, [questionnaireList]);

  return (
    <div className="question-options-container">
      <p className="wrapper-caption"><b>Create Questionnaire:</b></p>
      <div className="typeQuestionWrapper">
        <div className="question-number">Q</div>
        <div className="question-input-box">
          <input className={`${isErr && 'has-error'}`} type="text" name="questionStatement" placeholder="Type Your Question here."
            value={question.questionStatement}
            onChange={handleInput}
          />
          {isErr && (
            <div className="form-error-message">
              {"Can not save empty Questionnaire"}
            </div>)}
        </div>
        <div className="radio-button-container">
          <label>
            <input type="radio" id="objective" value="objective" name="questionType"
              onClick={() => {
                setQtype(1);
              }}
            />
            <span>Objective</span>
          </label>
          <label>
            <input type="radio" id="subjective" value="subjective" name="questionType"
              onClick={() => {
                setQtype(2);
              }}
            />
            <span>Subjective</span>
          </label>
        </div>
      </div>
      <div className="options-btn-wrapper">
        <AddQuestioneerOptions questionType={qtype} getOptions={getOptions} />
        <button className="save-created-quest" onClick={createRecords}>Save</button>
      </div>
      <hr />
      <div className="addedWrapper">
        <p className="wrapper-caption"><b>Questions Added:</b></p>
        {
          qstRecords && qstRecords.length
            ? qstRecords.map((qstn, index) => {
              return (
                <div className="AddedQuestionsWrapper" key={index}>
                  <div className="addedQuestion-number"><b>Q{index+1}</b></div>
                  <div className="addedQuestion-input-box">
                    <input type="text" name="entered-question" value={qstn.questionStatement} />
                  </div>
                </div>
              )
            }) :
            <div className="no-questionnaire"><h3>You don't have any questionnaires added yet.</h3></div>
        }
        <div className="form-error-message">
          <p className="col-md-12">{error}</p>
        </div>
      </div>
      <div className="lower-nav-buttons">
        <button className="prev-button" onClick={() => goToSection(1)}><ArrowBackIcon />prev</button>
        <button className="save-button" onClick={saveQuestionnaire}>save</button>
        <button className="cancel-button">cancel</button>
        <button className="next-button" onClick={() => goToSection(3)}>next<ArrowForwardIcon /></button>
      </div>
    </div>
  );
};

CreateQuestioneer.propTypes = {
  productList: PropTypes.object
}
CreateQuestioneer.defaultProps = {
  productList: {}
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  checkQuestionnaire: ([...qstRecords], productId, next) => dispatch(QuestionnaireActions.checkQuestionnaire([...qstRecords], productId, next)),
  clearQuestionnaireList: () => dispatch(QuestionnaireActions.clearQuestionnaireList())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(CreateQuestioneer)));
