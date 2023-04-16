import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <div
            className={
              "navbar-brand fw-bolder Poppins fs-3 text-decoration-none"
            }
          >
           ⫗Phexion
          </div>
          <div className="d-flex Poppins">
            <NavLink
              className="nav-link Poppins py-1"
              to={"/"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "green" : "grey",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link Poppins rounded-pill py-1"
              to={"/signin"}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "blue" : "grey",
                  color: isActive ? "white" : "white",
                };
              }}
            >
              Sign in
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
