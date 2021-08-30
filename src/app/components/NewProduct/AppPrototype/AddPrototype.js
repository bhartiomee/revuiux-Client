import firebase from "../../../../Firebase/Firebase";
import React, { useEffect, useState } from "react";
import "./AddProtoType.css";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import "./subComponents/AddDesign.css"
import AddPreview from "./subComponents/AddPreview";
import addPrototypeActions from '../../../actions/addPrototype';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withParams } from "../../../containers/WithParams";
import loading from '../../../../Assets/image/loader.gif';

const AddPrototype = (props) => {

  const { changeSection, savePrototype, prototypeList, next, productId } = props;
 
  const goToSection = sectionNumber => {
    changeSection(sectionNumber);
  }

  const initState = {
    productId:productId,
    questionStatement: "",
    linkToFile: ""
  };
  
  const [addItem, setAddItem] = useState(initState);
  const [previewItems, setPreviewItems] = useState([]);
  const [link, setLink] = useState('');
  const [files, setFiles] = useState(null);
  const [checkUpload, setCheckUpload] = useState(false);

  const appendList = e => { 
    e.preventDefault();
    setPreviewItems([...previewItems, addItem]);
    setAddItem(initState);
    setLink('');
  }

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  const handleQuesChange = (e) => {
    e.preventDefault();
    setAddItem({ ...addItem, ['questionStatement']: e.target.value })
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
    e.preventDefault();
    savePrototype([...previewItems],productId, next)
  }

  useEffect(() => {
    setAddItem({ ...addItem, ['linkToFile']: link })
  }, [link])

  useEffect(() => {
    if(prototypeList!==undefined && prototypeList.length && previewItems.length===0){
      setPreviewItems([...previewItems, ...prototypeList]);
    }
  }, [prototypeList])

  return (

    <div className="outerMostDiv">
      <div className="upperDivAddProto">
        <p>
          <b>Add Your Designs:</b>
        </p>
        <div className="outerDivAddDesign">
          <div className="lowerDivAddDesign">
            <div className="upperDivAddDesign">
              <label>
                Select File
                <input type="file" style={{ display: "none" }} onChange={handleChange} />
              </label>
              <small align="center">(.doc, .jpeg, .txt file,max size:5MB)</small>
            </div>
            <button type="submit" className="saveButtonDesign" onClick={handleUpload}>
              Upload
            </button>
            {checkUpload ? <img src={loading} height="37px" width="37px"></img> : null}
          </div>

          <div className="lowerDivAddDesign">
            <input
              type="text"
              placeholder="Enter your Question"
              className="lowerInputDesign"
              value={addItem['questionStatement']}
              onChange={handleQuesChange}
            ></input>
            <button type="submit" className="saveButtonDesign" onClick={appendList}>
              Save
            </button>
          </div>
        </div>
      </div>
      <hr style={{ width: "80%" }}></hr>
      <p>
        <b>Preview:</b>
      </p>
      <div className="lowerDivAddProto" overflow>
        {
          previewItems && previewItems.length
            ? previewItems.map((item, index) => {
                return <AddPreview key={index} imgUrl={item.linkToFile} question={item.questionStatement} />
              })
            : <div className="no-questionnaire"><h2>You don't have any prototypes added yet.</h2></div>
        }
      </div>
      <div className="lower-nav-buttons">
        <button className="prev-button" onClick={()=>goToSection(2)}><ArrowBackIcon/>prev</button>
        <button className="save-button" onClick={handleSave}>save</button>
        <button className="cancel-button">cancel</button>
        <button className="next-button" onClick={()=>goToSection(4)}>next<ArrowForwardIcon/></button>
      </div>
    </div>
  );
};

AddPrototype.propTypes = {
  productList: PropTypes.object
}

AddPrototype.defaultProps = {
  productList: {}
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = (dispatch) => ({
  savePrototype: ([...previewItems ], productId,next) => {
    dispatch(addPrototypeActions.savePrototype([...previewItems], productId, next));
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(AddPrototype)));
