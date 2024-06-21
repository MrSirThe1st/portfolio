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
            I am a mobile developer who specializes in React Native.
            🎓computer engineering graduate from the cape peninsula university
            of technology in south africa, I take products from concepts to fully functional
            solutions. Over the past few years, I have dedicated myself to
            cross-platform development, continuously learning, experimenting,
            and refining my skills, take a look at some of my projects below
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
