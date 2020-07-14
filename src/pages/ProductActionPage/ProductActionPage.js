/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actAddProductsRequest,
  actUpdateProductsRequest,
  actGetProductsRequest
} from "../../actions";
import { connect } from "react-redux";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: ""
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.ItemEdit) {
      var { ItemEdit } = nextProps;
      this.setState({
        id: ItemEdit.id,
        txtName: ItemEdit.name,
        txtPrice: ItemEdit.price,
        chkbStatus: ItemEdit.status
      });
    }
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onSave = e => {
    e.preventDefault();
    let { txtName, txtPrice, chkbStatus, id } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    };
    if (id) {
      this.props.onUpdateProduct(product);
      history.goBack();
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Ten SP</label>
            <input
              type="text"
              className="form-control"
              placeholder="Input field"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Gia</label>
            <input
              type="number"
              className="form-control"
              placeholder="Input field"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trang thai :</label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />{" "}
              Con Hang
            </label>
          </div>
          <Link to="/product-list" className="btn btn-danger">
            Back
          </Link>
          &nbsp;
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ItemEdit: state.ItemEdit
  };
};

const mapDispatchtoprops = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(actAddProductsRequest(product));
    },
    onEditProduct: id => {
      dispatch(actGetProductsRequest(id));
    },
    onUpdateProduct: product => {
      dispatch(actUpdateProductsRequest(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchtoprops)(ProductActionPage);
