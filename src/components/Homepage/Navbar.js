import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mb-4">
      <nav
        className="navbar navbar-expand-lg navbar-light ftco_navbar bg-* ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Fit Me
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bmi" className="nav-link">
                  Check BMI
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="schedule.html" className="nav-link">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link to="blog.html" className="nav-link">
                  Specialities
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact.html" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <div className="col-md-3 text-end">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                  >
                    Login
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
