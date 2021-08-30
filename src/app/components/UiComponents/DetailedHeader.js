import React from "react";
import styled from "styled-components";
import Logo from "../../../Assets/image/Logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../../App.css";
import "../css/Common.css";
import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_USER_KEY } from '../../../constants/app';
import { useState, useEffect } from "react";


const LogoImage = styled.div`
  display: block;
  background-image: url(${Logo});
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  margin: 5px 10px 0 7px;
`;

export default function DetailedHeader(props) {
  const history = useHistory();
  const homepage = () => {
    let path = `/`;
    history.push(path);
  };

  const [userName,setUserName] = useState('XYZ');

  const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  useEffect(() => {
    if (user) {
      setUserName(JSON.parse(user).name)
  }
  }, [user])

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    let path = `/`;
    history.push(path);
  }
  

  return (
    <div className="header-wrapper">
      <div className="brand-wrapper">
        <div onClick={homepage} className="brand-name">
          <h2>URanch</h2>
        </div>
        <LogoImage></LogoImage>
      </div>
      {!props.showProfile ? null : (
        <div className="user-detail-wrapper">
          <h5>Hi, {userName}!</h5>
          <AccountCircleIcon />
          <div className="logout-button" onClick={handleLogout}><ExitToAppIcon /></div>
        </div>
      )}
    </div>
  );
}
