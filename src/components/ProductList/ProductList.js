/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sach san pham</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Ma SP</th>
                <th>Ten</th>
                <th>Gia</th>
                <th>Trang Thai</th>
                <th>Hanh Dong</th>
              </tr>
            </thead>
            {this.props.children}
            </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
