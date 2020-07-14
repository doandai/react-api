/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductsRequest
} from "../../actions/index";

class ProductListPage extends Component {
  componentDidMount() {
    this.props.fectAllProducts();
  }
  onDelete = id => {
    this.props.onDeleteProducts(id);
  };

  render() {
    var { products } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info">
          Them San Pham
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}

const mapStatetoprops = state => {
  return {
    products: state.products
  };
};

const mapDispatchtoprops = (dispatch, props) => {
  return {
    fectAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProducts: id => {
      dispatch(actDeleteProductsRequest(id));
    }
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(ProductListPage);
