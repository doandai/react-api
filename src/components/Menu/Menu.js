/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
const menus = [
  {
    name: " Home",
    to: "/",
    exact: true
  },
  {
    name: "Quan Ly San Pham",
    to: "/product-list",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })
    ? "active"
    : "";
  return (
    <li className={match}>
      <Link to={to}>{label}</Link>
    </li>
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call Api</a>
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
      </div>
    );
  }
  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, i) => {
        return (
          <MenuLink
            key={i}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
      return result;
    }
  };
}

export default Menu;
