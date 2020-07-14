/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="alert alert-warning">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          &times;
        </button>
        <strong>404 Not Found</strong> 
      </div>
    );
  }
}

export default NotFoundPage;
