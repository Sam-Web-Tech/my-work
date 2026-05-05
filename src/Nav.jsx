import React from "react";
import { Link } from "react-router-dom";
import JK from "./images/JK.jpg";

function Mynav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container-fluid px-3">

        {/* Logo Section */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={JK}
            alt="JK & CO. Logo"
            className="img-fluid"
            style={{ maxHeight: "40px" }}
          />
          <span className="fw-bold fs-5 logo">JK & CO.</span>
        </div>

        {/* Hamburger Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bartext">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sales">
                Properties For Sale
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rent">
                Properties For Rent
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/lease">
                Properties For Lease
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Mynav;