/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {Link} from "react-router-dom"

class ProductItem extends Component {
  onDelete = id =>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Ban chac chan muon xoa ?"))
    {
      this.props.onDelete(id)
    }
  }
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Con hang" : "Het hang";
    var statusClass = product.status ? "warning" : "default";
    return (
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <span className={`label label-${statusClass}`}>{statusName}</span>
          </td>
          <td>
            <Link to ={`/product/${product.id}/edit`} className="btn btn-success"
            
            >
              Sua
            </Link>{" "}
            &nbsp;
            <button type="button" className="btn btn-danger"
            onClick = {()=>this.onDelete(product.id)}
            >
              Xoa
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default ProductItem;
