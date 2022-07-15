import React from "react";
import PropTypes from "prop-types";
// import { Outlet, Link } from "react-router-dom";
export default function Navbar(props) {
  const removeClass = () => {
    document.body.removeAttribute("class");
  };
  const themeRed = () => {
    removeClass();
    document.body.classList.add("bg-danger");
  };
  const themeGreen = () => {
    removeClass();
    document.body.classList.add("bg-success");
  };
  const themeWarning = () => {
    removeClass();
    document.body.classList.add("bg-warning");
  };
  const themeBlue = () => {
    removeClass();
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div
              className={`dropdown mx-4 dropDown-${
                props.mode === "dark" ? "enabled" : "disabled"
              }`}
            >
              <button
                className="btn btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dark Themes
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="theme-list" onClick={themeRed}>
                  <span className="theme-color red"></span> Red
                </li>
                <li className="theme-list" onClick={themeGreen}>
                  <span className="theme-color green"></span> Green
                </li>
                <li className="theme-list" onClick={themeWarning}>
                  <span className="theme-color yellow"></span> Yellow
                </li>
                <li className="theme-list" onClick={themeBlue}>
                  <span className="theme-color blue"></span> Default
                </li>
              </ul>
            </div>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                // eslint-disable-next-line
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Disable" : "Enable"} Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Your Title here",
  aboutText: "About",
};
