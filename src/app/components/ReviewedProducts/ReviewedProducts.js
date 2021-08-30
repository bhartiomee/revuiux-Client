import React, { useEffect } from 'react';
import ProjectCard from '../UiComponents/ProjectCard';
import { connect } from 'react-redux';
import productReviewActions from '../../actions/productReview';
import { withRouter } from 'react-router-dom';
import { history } from '../../../store';
import PATHS from '../../../routes/routes-path';
import LoaderWrapper from '../Loader';
import './ReviewedProducts.css'

const ReviewedProducts = props => {

    const { productList, getReviewedProductList, clearProductDetail, showLoader } = props;
    
    useEffect(() => {
        getReviewedProductList();
    }, []);

    const goToProductResponse = productId => {
        history.push(`${PATHS.productReviewResponse}${productId}/`);
    }

    return (
        <LoaderWrapper showLoader={showLoader} >
            <div className="home-page-wrapper draft-wrapper-common">
                <div className="recent-header">
                    <div className="page-header">    
                        <h3>Product Reviews Completed</h3>
                    </div>
                </div>
                <div className="recent-body">
                    {
                        productList !== undefined && productList.length ?
                        productList && productList.map((product, index) => (
                            <ProjectCard
                                key={index} id={product.id} title={product.name} isPublished={product.isPublished}
                                addEditProduct={() => goToProductResponse(product.productId)}
                            />
                        )) : <div className="no-product"><h2>You don't have any products yet.</h2><h4>Click on New Product to start! </h4></div>
                    }
                </div>
            </div>
        </LoaderWrapper>
    )
}

const mapStateToProps = state => ({
    productList: state.productReducer.productList,
    showLoader: state.loaderReducer.showLoader
})

const mapDispatchToProps = dispatch => ({
    getReviewedProductList: () => dispatch(productReviewActions.getResearcherProductReviewList(true)),
})

ReviewedProducts.propTypes = {
}

ReviewedProducts.defaultProps = {
    productList: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewedProducts));
