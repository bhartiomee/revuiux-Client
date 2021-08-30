import firebase from '../../../../../Firebase/Firebase';
import React, { useState } from "react";
import "./AddPreview.css";
import imgNotFound from "../../../../../Assets/image/imgPrvw.png";
const AddPreview = (props) => {

  return (
    <div className="outerDivAddPrvw">
      <div className="LeftDivAddPrvw">
        <img src={props.imgUrl} width="100px" height="100px"></img>
      </div>
      <div className="rightDivAddPrvw">
        <input
          disabled
          type="text"
          defaultValue={props.question}
        />
        <button type="submit">
          Edit
        </button>
      </div>
    </div>
  );
};
export default AddPreview;
