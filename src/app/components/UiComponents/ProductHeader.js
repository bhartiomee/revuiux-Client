import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ProductHeader.css";
import PATHS from "../../../routes/routes-path";

export default function ProductHeader() {
  return (
    <div>
      <div className="productHeaderWrapper">
        <div>
          <NavLink
            exact
            activeClassName="active-class"
            className="menu-list"
            to={"/homepage"}
          >
            Product Details
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            activeClassName="active-class"
            className="menu-list"
            to={PATHS.newProductQuestionnaire}
          >
            Add Questionnaire
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            activeClassName="active-class"
            className="menu-list"
            to={PATHS.newProductPrototype}
          >
            Add Prototype
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            activeClassName="active-class"
            className="menu-list"
            to={PATHS.newProductPublish}
          >
            Preview/Publish
          </NavLink>
        </div>
      </div>
    </div>
  );
}
