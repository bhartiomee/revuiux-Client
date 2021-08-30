import React, { useState } from "react";
import "../css/ModalAlertBox.css";
const ModalAlertBox = (params) => {
  const showHideClassName = params.show
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <img src={params.imgUrl}></img>
      <h2>{params.title}</h2>
      <p>{params.text}</p>
      <button onClick = {params.handleClose}>{params.btnTxt}</button>
    </div>
  );
};
export default ModalAlertBox;
