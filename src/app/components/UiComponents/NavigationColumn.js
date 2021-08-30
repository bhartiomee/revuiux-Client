import React from "react";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import DescriptionIcon from "@material-ui/icons/Description";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../../store';
import PATHS from '../../../routes/routes-path';
import productActions from "../../actions/product";
import "../HomePage/SubComponent/css/RepoContainer.css";

const NavigationColumn = (props) => {

  const { productIdName, showProductIcon, clearProductDetail, userType } = props;
  const iconName = productIdName && productIdName.id ? productIdName.name: 'New Product';

  const addNewProduct = () => {
    if(userType === 1){
      history.push(`${PATHS.searchProduct}`);
    }else{
      history.push(`${PATHS.createProduct}?section=1`);
    }
    
    clearProductDetail();
  }

  const goToHomePage = () => {
    if(userType === 1){
      history.push(`${PATHS.listProductParticipant}`);
    }else{
      history.push(`${PATHS.listProduct}`);
    }
  }

  const seeReviewResponses = () => {
    if(userType === 1){
      history.push(`${PATHS.reviewHistory}`);
    }else{
      history.push(`${PATHS.reviewedProducts}`);
    }
  }

  return (
    <div className="repo-column">
      <div className="options-wrapper">
        <div onClick={goToHomePage} id="0" className="recent-wrapper">
          <HomeIcon id="0" />
          <h3 id="0">Home</h3>
        </div>
        <div id="1" className="draft-wrapper" onClick={addNewProduct}>
          <div id="1" className="draft-wrapper-icon">
            <DescriptionIcon id="1" />
            <h3 id="1">{userType === 1 ? "Review New Product" :"Draft"}</h3>
          </div>
          <div id="1" className="draft-wrapper-icon">
            <AddIcon id="1" />
          </div>
        </div>
        <div id="2" className="recent-wrapper" onClick={seeReviewResponses}>
          <HistoryIcon id="2" />
          <h3 id="2">{userType === 1 ? "My Reviews" :"Review Completed"}</h3>
        </div>
      </div>

      { showProductIcon &&
        <div className="product-item">
          <PresentToAllIcon />
          <h3>{ iconName }</h3>
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  productIdName: state.productReducer.productIdName,
  showProductIcon: state.productReducer.showProductIcon
})

const mapDispatchToProps = dispatch => ({
  clearProductDetail: () => dispatch(productActions.clearProductDetail())
})

NavigationColumn.propTypes = {
}

NavigationColumn.defaultProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationColumn));
