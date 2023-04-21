import React, { useState } from "react";
import Blog from "./Blog";
import Giphy from "../Assets/gifs/giphy.gif";
const Home = () => {
  const [catagorie, setCatagorie] = useState("trending");
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
                <i className="fa-solid fa-magnifying-glass"></i>
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
          <img src={Giphy} alt="Dancing pens" />
        </div>
      </div>
      <div className="switcher Poppins">
        <span>Catagorie</span>
        <ul>
          <li onClick={() => setCatagorie('all')}>All blogs</li>
          <li onClick={() => setCatagorie('trending')}>Trending</li>
          <li onClick={() => setCatagorie('pc-gamming')}>PC gaming</li>
          <li onClick={() => setCatagorie('mobile-gamming')}>Mobile Gaming</li>
          <li onClick={() => setCatagorie('web3')}>Web3</li>
          <li onClick={() => setCatagorie('featured')}>Featured</li>
          <li onClick={() => setCatagorie('brand-news')}>Brand News</li>
          <li onClick={() => setCatagorie('esports-news')}>Esports News</li>
        </ul>
      </div>
      <div>
        <Blog catagorie={catagorie} />
      </div>
    </>
  );
};

export default Home;
