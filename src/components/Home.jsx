import React from "react";
import Blog from "./Blog";
import Giphy from "../Assets/gifs/giphy.gif";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="row container" style={{ margin: "0 100px" }}>
        <div className="col-9">
          <div className="p-5">
            <h1 style={{ fontSize: "7em" }} className="Sedgwick">
              Thoughts & ideas around the things that actually matter..
            </h1>
          </div>
          <div className="pt-5 px-5">
            <div className="d-flex">
              <div className="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
              </div>
              <button className="explore">
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-3 mt-5">
          <img src={Giphy} alt="" srcset="" />
        </div>
      </div>
      <div className="switcher Poppins">
        <span>Catagorie</span>
        <ul>
          <NavLink
            to={"/d"}
            className="nav-link"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : "grey",
              };
            }}
          >
            <li>All blogs</li>
          </NavLink>

          <li>Trending</li>
          <li>PC gaming</li>
          <li>Mobile Gaming</li>
          <li>Web3</li>
          <li>Featured</li>
          <li>Brand News</li>
          <li>Esports News</li>
        </ul>
      </div>
      <div>
        <Blog />
      </div>
    </>
  );
};

export default Home;
