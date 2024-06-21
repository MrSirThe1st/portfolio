import React from "react";
import Lottie from "react-lottie";
import Animation from "../../Animation.json"; 
import Animation1 from "../../Animation1.json";

export default function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React Native</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a React Native mobile developer and a computer engineering
            graduate from Cape Peninsula University of Technology in South
            Africa. I transform concepts into fully functional solutions. Over
            the years, I've focused on cross-platform development.
            Check out some of my projects below.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
