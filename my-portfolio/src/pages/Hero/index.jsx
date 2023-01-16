import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>Welcome</h1>
      </div>
      <div className="heroimg">
        <img
          src="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
