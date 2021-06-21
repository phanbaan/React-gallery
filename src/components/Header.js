import React, { useContext } from "react";
import "./Header.css";
import { FaEdge, FaBars, FaTimes } from "react-icons/fa";

import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
  const [isLoggedIn] = useContext(AppContext);
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.replace("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          <FaEdge className="logo__icon" />
          Logo
        </NavLink>
        <div className="navbar__mobile">
          <FaTimes />
        </div>
        <ul className="nav__list menu">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              activeClassName="nav__link-active"
              exact
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/gallery"
              className="nav__link"
              activeClassName="nav__link-active"
            >
              Thư viện ảnh
            </NavLink>
          </li>
          <li className="nav__item btn">
            {isLoggedIn ? (
              <NavLink
                to="/login"
                className="nav__link"
                onClick={logout}
                activeClassName="nav__link-active"
              >
                Đăng xuất
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="nav__link "
                activeClassName="nav__link-active"
              >
                Đăng nhập
              </NavLink>
            )}
          </li>
          {!isLoggedIn && (
            <li className="nav__item btn">
              <NavLink
                to="/signup"
                className="nav__link "
                activeClassName="nav__link-active"
              >
                Đăng ký
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
