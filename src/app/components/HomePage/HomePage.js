import React, { useState, useEffect } from 'react';
import ProjectCard from '../UiComponents/ProjectCard';
import { connect } from 'react-redux';
import productActions from '../../actions/product';
import { withRouter } from 'react-router-dom';
import { history } from '../../../store';
import PATHS from '../../../routes/routes-path';
import LoaderWrapper from '../Loader';
import './HomePage.css'


const HomePage = props => {

    const { productList, getProductList, clearProductDetail, showLoader } = props;
    
    useEffect(() => {
        getProductList();
    }, []);

    const addEditProduct = (productDetail) => {
        history.push(
            productDetail.id
            ? `${PATHS.editProduct}${productDetail.id}?section=1`
            : `${PATHS.createProduct}?section=1`
        )
        clearProductDetail();
    }

    return (
        <LoaderWrapper showLoader={showLoader} >
            <div className="home-page-wrapper draft-wrapper-common">
                <div className="recent-header">
                    <div className="recent-nav">
                    <h3>Home/Dashboard</h3>
                    </div>
                    <button className="project-button" onClick={addEditProduct}>New Product</button>
                </div>
                <div className="recent-body">
                    {
                        productList !== undefined && productList.length ?
                        productList && productList.map((product, index) => (
                            <ProjectCard
                                key={index} id={product.id} title={product.name} isPublished={product.isPublished}
                                addEditProduct={addEditProduct}
                            />
                        )) : <div className="no-product"><h2>You don't have any products yet.</h2><h4>Click on New Product to start  🎉 </h4></div>
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
    getProductList: () => dispatch(productActions.getProductList()),
    clearProductDetail: () => dispatch(productActions.clearProductDetail())
})

HomePage.propTypes = {
}

HomePage.defaultProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
