import React from "react";
import "../css/NewProductNavbar.css";

const NewProductNavbar = (props) => {
  const { sectionNumber, children, changeSection } = props;

  const goToSection = sectionNumber => {
    changeSection(sectionNumber);
  }

  return (
    <div>
      <div className="product-navbar">
        <span
          onClick={() => goToSection(1)}
          className={`${sectionNumber === 1 && "active-class"} menu-list`}
        >
          Product Details
        </span>

        <span
          onClick={() => goToSection(2)}
          className={`${sectionNumber ===  2 && "active-class"} menu-list`}
        >
          Add Questionnaire
        </span>

        <span
          onClick={() => goToSection(3)}
          className={`${sectionNumber ===  3 && "active-class"} menu-list`}
        >
          Add Prototype
        </span>

        <span
          onClick={() => goToSection(4)}
          className={`${sectionNumber ===  4 && "active-class"} menu-list`}
        >
          Preview/Publish
        </span>
      </div>
      { children }
    </div>
  );
};

export default NewProductNavbar;
