import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoaderWrapper from '../../../components/Loader';
import { withParams } from '../../WithParams';
import ProductForm from '../../../components/NewProduct/ProductDetails/ProductForm';
import AddPrototype from '../../../components/NewProduct/AppPrototype/AddPrototype';
import PreviewPublish from '../../../components/NewProduct/PreviewPublish/PreviewPublish';
import NewProductNavbar from '../../../components/UiComponents/NewProductNavbar';
import { updateFilterParams } from '../../../utils/commonUtils';
import CreateQuestioneer from '../../../components/NewProduct/AddQuestioneer/subcomponents/CreateQuestioneer';
import './details.css'
import productActions from '../../../actions/product';
import QuestionnaireActions from '../../../actions/questionnaire';
import addPrototypeActions from '../../../actions/addPrototype';

const ProductDetail = props => {
    const {
        match: { params: { productId } }, section, history, product, setSideBarProduct, showLoader, questionnaireList, prototypeList,
        getProductQuestionnairePrototypeDetails, clearQuestionnaireList, clearPrototypeList
    } = props;

    const { id, name } = product;

    const sectionNumber = Number.parseInt(section);

    useEffect(() => {
        if(productId) {
            getProductQuestionnairePrototypeDetails(productId);
        }
        return () => {
            clearQuestionnaireList();
            clearPrototypeList();
        }
    }, [])

    useEffect(() => {
        setSideBarProduct({ id, name });
    }, [id, name]);

    const goToSection = sectionNumber => {
        if (productId) {
            updateFilterParams(history, { section: sectionNumber });
        }
    }

    return (
        <LoaderWrapper showLoader={showLoader}>
            <div className="new-product">
                <NewProductNavbar sectionNumber={sectionNumber} changeSection={goToSection}>
                    {sectionNumber === 1 && (
                        <ProductForm product={product} productId={productId} />
                    )}
                    {sectionNumber === 2 && (
                        <CreateQuestioneer sectionNumber={sectionNumber} changeSection={goToSection} questionnaireList={questionnaireList} productId={productId}/>
                    )}
                    {sectionNumber === 3 && (
                        <AddPrototype sectionNumber={sectionNumber} changeSection={goToSection} prototypeList={prototypeList} productId={productId}/>
                    )}
                    {sectionNumber === 4 && (
                        <PreviewPublish productId={productId} />
                    )}
                </NewProductNavbar>
            </div>
        </LoaderWrapper>
    )
}
const mapStateToProps = state => ({
    product: state.productReducer.product,
    showLoader: state.loaderReducer.showLoader,
    questionnaireList: state.questionnaireReducer.questionnaireList,
    prototypeList: state.addPrototypeReducer.prototypeList,
})

const mapDispatchToProps = dispatch => ({
    setSideBarProduct: (productDetail = {}) => dispatch(productActions.setSideBarProduct(productDetail)),
    getProductQuestionnairePrototypeDetails: productId => dispatch(productActions.getProductQuestionnairePrototypeDetails(productId)),
    clearQuestionnaireList: () => dispatch(QuestionnaireActions.clearQuestionnaireList()),
    clearPrototypeList: () => dispatch(addPrototypeActions.clearPrototypeList())
})

ProductDetail.propTypes = {
    product: PropTypes.object
}

ProductDetail.defaultProps = {
    product: {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withParams(ProductDetail)));
