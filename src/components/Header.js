import React from "react";
import "./Header.css";
import { FaEdge, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <FaEdge className="logo__icon" />
          Logo
        </div>
        <div className="navbar__mobile">
          <FaTimes /> <FaTimes />
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/gallery" className="nav__link">
              gallery
            </Link>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/login" className="nav__link">
              login
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/login" className="nav__link">
              login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
