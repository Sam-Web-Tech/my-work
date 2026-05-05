import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-3">
      <div className="container">
        <ul className="nav justify-content-center border-bottom border-secondary pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/features" className="nav-link px-2 text-white">
              Features
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pricing" className="nav-link px-2 text-white">
              Pricing
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/faqs" className="nav-link px-2 text-white">
              FAQs
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-white">
              About
            </Link>
          </li>
        </ul>

        <p className="text-center mb-0">© 2026 JK & CO, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;