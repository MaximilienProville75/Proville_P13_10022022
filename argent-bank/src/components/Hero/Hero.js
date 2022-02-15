import React from "react";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <section className="heroContent">
        <h2 className="srOnly">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Hero;
