import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar(props) {
  const { setToken,token } = props.Token;
  const navigate = useNavigate();


  const logout = () => {
    sessionStorage.clear();
    setToken(false);
    navigate("/");
  };

  if (token) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontFamily: "Brush Script MT", fontSize: "30px" }}
        >
          LifeStyle
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="d-flex justify-content-end"
          style={{ color: "white" }}
        >
          <div style={{marginLeft:"1100px"}}>
            {token}

            <button onClick={logout} className="ml-3">
              Logout
            </button>
          </div>
          <Link
            to="/cart"
            style={{ color: "white" }}
            className="widget-header pl-3 ml-3"
          >
            <div
              className="icon icon-sm rounded-circle"
              style={{ marginRight: "5px" }}
            >
              <i className="fa fa-shopping-cart"></i>
              
            </div>
            
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontFamily: "Brush Script MT", fontSize: "30px" }}
        >
          LifeStyle
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="d-flex justify-content-end"
          style={{ color: "white" }}
        >
          <div style={{marginLeft:"1100px"}}>
            <Link
              to="/signin"
              style={{ color: "white" }}
              className="widget-header pl-3 ml-3"
            >
              SignIn
            </Link>

            <Link
              to="/register"
              style={{ color: "white" }}
              className="widget-header pl-3 ml-1"
            >
              Register
            </Link>
          </div>

          <Link
            to="/cart"
            style={{ color: "white" }}
            className="widget-header pl-3 ml-3"
          >
            <div
              className="icon icon-sm rounded-circle"
              style={{ marginRight: "5px" }}
            >
              <i className="fa fa-shopping-cart"></i>
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}
